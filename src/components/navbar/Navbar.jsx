'use client'

import React from 'react'
import Link from 'next/link'
import style from './page.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

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
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard'
  }
]

const Navbar = () => {
  const sessions = useSession();

  return (
    <div className={style.container}>
      <Link href="/" className={style.logo}>TasteTrail</Link>
      <div className={style.links}>
        <DarkModeToggle/>
        {
          links.map((link) => (
            <Link key={link.id} href={link.url} className={style.link}>{link.title}</Link>
          ))
        }
        {
          sessions.status === "authenticated" && <button className={style.logout} onClick={() => signOut() }>Log out</button>
        }
      </div>
    </div> 
  )
}

export default Navbar