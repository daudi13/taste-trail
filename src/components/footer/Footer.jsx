import React from 'react'
import style from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import fb from '/public/assets/1.png'
import ig from '/public/assets/2.png'
import tw from '/public/assets/3.png'
import yu from '/public/assets/4.png'

const Footer = () => {
  console.log('Footer')
  return (
    <div className={style.container}>
      <div>&copy; {new Date().getFullYear()}. All rights reserved.</div>
      <div className={style.socials}>
        <Link href="#"><Image src={fb} width={25} height={25} alt="facebook" /></Link>
        <Link href=""><Image src={ig} width={25} height={25} alt="instagram" /></Link>
        <Link href=""><Image src={tw} width={25} height={25} alt="twitter" /></Link>
        <Link href=""><Image src={yu} width={25} height={25} alt="youtube" /></Link>
      </div>
    </div>
  )
}

export default Footer