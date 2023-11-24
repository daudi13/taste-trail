import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/Button/Button'
import Image from 'next/image'

const portolioCategory = ({ params }) => {
  console.log(params)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.contentTitle}>The Art of App Development</h1>
          <p className={styles.desc}>
            In the dynamic landscape of technology, application development has become a cornerstone for businesses and individuals alike. Whether you're crafting a mobile app to streamline daily tasks or developing a robust web application for a global audience, the process requires a blend of creativity, strategic thinking, and technical prowess.

          </p>
          <Button text="see more" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.contentTitle}>Conceptualization and Planning</h1>
          <p className={styles.desc}>
            Before diving into code, a solid understanding of the application's purpose, target audience, and key features is essential. This phase involves brainstorming ideas, creating wireframes, and outlining the project's scope. Clear goals and a well-defined roadmap set the foundation for a successful development journey.
          </p>
          <Button text="see more" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
    </div>
  )
}

export default portolioCategory