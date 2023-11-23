'use client'

import React from 'react'
import Link from 'next/link'
import style from './page.module.css'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/'
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio'
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog'
  },
  {
    id: 4,
    title: 'Contact',
    url: '/contact'
  },
  {
    id: 5,
    title: 'About',
    url: '/about'
  },
]

const Navbar = () => {
  return (
    <div className={style.container}>
      <Link href="/" className={style.logo}>TasteTrail</Link>
      <div className={style.links}>
        {
          links.map((link) => (
            <Link key={link.id} href={link.url} className={style.link}>{link.title}</Link>
          ))
        }
      <button className={style.logout} onClick={() => console.log("log out")}>Log out</button>
      </div>
    </div> 
  )
}

export default Navbar