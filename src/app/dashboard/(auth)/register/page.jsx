"use client"
import React, { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import bcrypt from 'bcryptjs';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);

  const router = useRouter()

  const handleRegister = async (e) => {
    e.preventDefault();

    const hashedPassword = await bcrypt.hash(password, 10);

    const registerData = { name, email, password: hashedPassword };
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });
      console.log(res)
      res.status === 201 && router.push('/dashboard/login?success=Account has been created successfully!')
    } catch (err) {
      setErr(true);
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleRegister}>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='username'
          className={styles.input}
          required
        />
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
        <button type='submit' className={styles.submitBtn}>Register</button>
      </form>
      {err && <p style={{ color: "red" }}>Something went wrong!</p>}
      <p>Already have an account? <Link href="/dashboard/login" style={{color: "#53c28b"}}>Login</Link></p>
    </div>
  )
}

export default Register