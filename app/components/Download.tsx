'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

interface ClientButtonProps {
    href: string
}

const Download:React.FC<ClientButtonProps> = ({href}) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(href)
  }
  return (
    <button
      onClick={handleClick}
      className="px-7 py-3 border-2 text-white border-blue-500 bg-blue-500 rounded hover:bg-white hover:text-blue-500"
    >
      立 即 下 载
    </button>
  )
}

export default Download