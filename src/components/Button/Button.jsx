import React from 'react'
import style from './button.module.css'
import Link from 'next/link'

const Button = ({text, url}) => {
  return (
    <Link href={url} className={style.linkBtn}>{text}</Link>
  )
}

export default Button