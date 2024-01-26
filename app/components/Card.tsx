import React from 'react'
import ClientButton from './ClientButton'
import Image from 'next/image'

interface CardProps {
    imgSrc: string
    title: string
    desc: string
    href: string
}

const Card:React.FC<CardProps> = ({imgSrc,title,desc,href}) => {
  return (
    <div className="ml-12 my-7 card w-96 bg-base-100 shadow-xl">
      <figure><Image src={imgSrc} alt="img" width={500} height={500}/></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <ClientButton href={href}/>
        </div>
      </div>
    </div>
  )
}

export default Card