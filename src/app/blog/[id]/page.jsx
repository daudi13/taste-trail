import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'



async function getData(id) {
  const res = await fetch( `http://localhost:3000/api/posts/${id}`, {cache: "no-store"})
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}
const Blogpost = async ({ params }) => {
  const data = await getData(params.id) 
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.authorBox}>
            <Image
              src={data.authorImg}
              alt=""
              width={40}
              height={40}
              className={styles.authorImg}
            />
            <span className={styles.userName}>John Doe</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={data.img}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.contentText}>
          {data.content}
          </p>
      </div>
    </div>
  )
}

export default Blogpost