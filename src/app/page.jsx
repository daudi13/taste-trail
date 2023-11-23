import Image from 'next/image'
import styles from './page.module.css'
import hero from '/public/assets/hero.png'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heroItem}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Turning your idea into Reality. We bring together the teams from the global tech industry
        </p>
        <Link href="/portfolio" className={styles.heroBtn}>See our works</Link>
      </div>
      <div className={styles.heroItem}>
        <Image src={hero} alt="hero" className={styles.heroImage} />
      </div>
    </div>
  )
}
