import React from 'react'
import styles from './page.module.css'
import Link from 'next/link' 



const links = [
  {
    id: 1,
    title: "Illustrations",
    url: "/portfolio/illustrations",
    img: "/illustrations.png"
  },
  {
    id: 2,
    title: "Websites",
    url: "/portfolio/websites",
    img: "/websites.png"
  },
  {
    id: 3,
    title: "Applications",
    url: "/portfolio/applications",
    img: "/apps.png"
  },
]

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.headerTitle}>Choose a gallary</h1>
      <div className={styles.items}>
        {
          links.map((link) => (
            <Link href={link.url} key={link.id} className={styles.item}>
              <span className={styles.title}>{link.title}</span>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio