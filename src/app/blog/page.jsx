import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {cache: "no-store"})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Blog = async () => {
  const data = await getData()

  return (
    <div className={styles.maincontainer}>
      {
        data.map((info) => (
          <Link href={`/blog/${info._id}`} className={styles.container} key={info.id}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                fill={true}
                alt=""
                src={info.img}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.contentTitle}>{info.title}</h1>
                <p className={styles.contentText}>
                  {info.content}
              </p>
            </div>
        </Link>
        ))
      }
    </div>
  )
}

export default Blog