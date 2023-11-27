import Image from 'next/image'
import styles from './page.module.css'
import hero from '/public/assets/hero.png'
import Link from 'next/link'
import Button from '@/components/Button/Button'
require('dotenv').config();

export default function Home() {
  console.log("KEY", process.env.MONGO)
  return (
    <div className={styles.container}>
      <div className={styles.heroItem}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Turning your idea into Reality. We bring together the teams from the global tech industry
        </p>
        <Button url="/portfolio" text="See our work"/>
      </div>
      <div className={styles.heroItem}>
        <Image src={hero} alt="hero" className={styles.heroImage} />
      </div>
    </div>
  )
}
