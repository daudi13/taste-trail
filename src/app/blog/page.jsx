import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.maincontainer}>
      <Link className={styles.container} href="/blog/1">
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            alt=""
            src="https://images.unsplash.com/photo-1682687220211-c471118c9e92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className={styles.content}>
          <p className={styles.contentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quibusdam, quia, voluptatum voluptate quos quod
            voluptatibus officiis numquam aliquid doloremque? Quisquam
            voluptates, quibusdam, quia, voluptatum voluptate quos quod
            voluptatibus officiis numquam aliquid doloremque?
          </p>
        </div>
      </Link>
      <Link className={styles.container} href="/blog/2">
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            alt=""
            src="https://images.unsplash.com/photo-1682687220211-c471118c9e92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className={styles.content}>
          <p className={styles.contentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quibusdam, quia, voluptatum voluptate quos quod
            voluptatibus officiis numquam aliquid doloremque? Quisquam
            voluptates, quibusdam, quia, voluptatum voluptate quos quod
            voluptatibus officiis numquam aliquid doloremque?
          </p>
        </div>
      </Link>
      <Link className={styles.container} href="/blog/3">
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            alt=""
            src="https://images.unsplash.com/photo-1682687220211-c471118c9e92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className={styles.content}>
          <p className={styles.contentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quibusdam, quia, voluptatum voluptate quos quod
            voluptatibus officiis numquam aliquid doloremque? Quisquam
            voluptates, quibusdam, quia, voluptatum voluptate quos quod
            voluptatibus officiis numquam aliquid doloremque?
          </p>
        </div>
      </Link>
      <Link className={styles.container} href="/blog/3">
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            alt=""
            src="https://images.unsplash.com/photo-1682687220211-c471118c9e92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className={styles.content}>
          <p className={styles.contentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quibusdam, quia, voluptatum voluptate quos quod
            voluptatibus officiis numquam aliquid doloremque? Quisquam
            voluptates, quibusdam, quia, voluptatum voluptate quos quod
            voluptatibus officiis numquam aliquid doloremque?
          </p>
        </div>
      </Link>
      <Link className={styles.container} href="/blog/4">
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            alt=""
            src="https://images.unsplash.com/photo-1682687220211-c471118c9e92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className={styles.content}>
          <p className={styles.contentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quibusdam, quia, voluptatum voluptate quos quod
            voluptatibus officiis numquam aliquid doloremque? Quisquam
            voluptates, quibusdam, quia, voluptatum voluptate quos quod
            voluptatibus officiis numquam aliquid doloremque?
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Blog