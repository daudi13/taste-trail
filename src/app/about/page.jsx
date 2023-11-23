import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          fill={true}
          alt="about heroImage"
          className={styles.heroImage}
        />
        <div className={styles.heroText}>
          <h1 className={styles.title}>Digital Storytellers</h1>
          <h2 className={styles.subTitle}>Turning your idea into Reality under one roof.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.itemText}>
          <h1 className={styles.textTitle}>Who we are</h1>
          <p className={styles.textInner}>
            We are a full-service digital agency that believes being a favourite brand is more valuable than just being a famous one. We craft beautifully useful, connected ecosystems that grow businesses and build enduring relationships between brands and humans.
          </p>
          <p className={styles.textInner}>
            We believe in the power of ideas. We believe in the power of technology. And we believe in the power of people. We are a team of creative strategists, storytellers, designers, and technologists dedicated to helping brands connect with what matters to their audiences.
          </p>
          <p className={styles.textInner}>
            We are a full-service digital agency that believes being a favourite brand is more valuable than just being a famous one. We craft beautifully useful, connected ecosystems that grow businesses and build enduring relationships between brands and humans.
          </p>
        </div>
        <div className={styles.itemText}>
          <h1 className={styles.textTitle}>What we do</h1>
          <p className={styles.textInner}>
            At our core, we are a dynamic team of designers, developers, and strategists united by a shared passion for crafting digital products and services that propel brands to flourish in today's interconnected landscape. Leveraging our diverse skill set, we collaborate to assist businesses globally in achieving clarity in communication, fostering effective innovation, and constructing impactful experiences.
            <br/>
            <br/> - <strong>Dynamic Website</strong>
            <br/>
            <br/> - <strong>Fast and Handy</strong>
            <br/>
            <br/> - <strong>Mobile Apps</strong>
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About