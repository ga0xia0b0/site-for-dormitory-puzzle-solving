'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

interface ClientButtonProps {
    href: string
}

const ClientButton:React.FC<ClientButtonProps> = ({href}) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(href)
  }
  return (
    <button
      onClick={handleClick}
      className="btn"
    >
      了解更多
    </button>
  )
}

export default ClientButton