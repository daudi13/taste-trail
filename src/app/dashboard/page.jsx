"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
import styles from './page.module.css';
import Image from 'next/image'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const { data, mutate, isLoading, error } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');
  const [content, setContent] = useState('');
  const [authorImg, setAuthorImg] = useState('');

  console.log(data)

  // useEffect(() => {
  //   async function getData() {
  //     setLoading(true)
  //       const res = await fetch('https://jsonplaceholder.org/posts', {cache: "no-store"})
  //     if (!res.ok) {
  //       setError(true)
  //     }

  //     const data = await res.json()

  //     setData(data)
  //     setLoading(false)
  //   }
  //   getData()
  // }, [])

  console.log(session)

  if (session.status === "loading") {
    return <p>Loading...</p>
  }

  if (session.status === "unauthenticated") {
    router?.push('/dashboard/login')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const postData = { title, desc, img, authorImg, content, username: session?.data?.user.name };

    try {
      const res = await fetch('api/posts', {
        method: "POST",
        body: JSON.stringify(postData)
      });
      mutate()
      console.log(res)
      res.status === 201 && router.push('/dashboard?success=Post has been created successfully!')
    } catch (err) {
      return new Throw (err)
    }


  }

  const handleDelete = async (id) => {
    try {
      await fetch(`api/posts/${id}`, {
        method: "DELETE",
      });
      mutate()
    } catch (err) {
      console.log(err)
    }
  }


  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {data?.map((post) => (
            <div className={styles.post} key={post.id}>
              <div className={styles.imgContainer}>
                <Image
                  src={post.img}
                  alt='post image'
                  className={styles.img}
                  fill={true}
                />
              </div>
              <div className={styles.rightBox}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <span className={styles.delete} onClick={() => handleDelete(post._id)}>delete post</span>
              </div>
            </div>
          ))
          }
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.formTitle}>Add new Post</h1>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='title'
            className={styles.input} />
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder='Desc' className={styles.input} />
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder='Image'
            className={styles.input} />
          <input
            type="text"
            value={authorImg}
            onChange={(e) => setAuthorImg(e.target.value)}
            placeholder='Author Image'
            className={styles.input} />
          <textarea
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.textarea}
            cols="30"
            rows="10"></textarea>
          <button className={styles.sendBtn}>send</button>
        </form>
      </div>
    )
  }
}

export default Dashboard