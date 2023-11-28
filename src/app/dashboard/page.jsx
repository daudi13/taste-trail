"use client"
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Dashboard = () => {

  const { data, isLoading, error } = useSWR('https://jsonplaceholder.org/posts', fetcher)

  // useEffect(() => {
  //   async function getData() {
  //     setLoading(true)
  //       const res = await fetch('https://jsonplaceholder.org/posts', {cache: "no-store"})
  //     if (!res.ok) {
  //       setError(true)
  //     }

  //     const data = await res.json()

  //     setData(data)
  //     setLoading(false)
  //   }
  //   getData()
  // }, [])
  const session = useSession();
  console.log(session)
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard