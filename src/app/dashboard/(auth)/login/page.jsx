"use client"
import React, {useState} from 'react'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import bcrypt from "bcryptjs"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sessions = useSession();
  const router = useRouter();

  if (sessions.status === "loading") {
    return <p>Loading...</p>
  } 

  if (sessions.status === "authenticated") {
    router?.push('/dashboard')
  }

  const handleSubmit =  (e) => {
    e.preventDefault();

    signIn('credentials', { email, password })
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email'
          className={styles.input}
          required
        />
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
          className={styles.input}
          required
        />
        <button className={styles.submitBtn}>Login</button>
        <div className={styles.orSect}>
          <span className={styles.line} />OR<span className={styles.line} />
        </div>
        <button onClick={() => signIn("google")} className={styles.submitBtn}>Login with Google</button>
      </form>

      <p>Don't have an account? <Link href="/dashboard/register" style={{color: "#53c28b"}}>Register</Link></p>
    </div>
  )
}

export default Login