import React from 'react'

function Card({ title, image }) {
  return (
    <div className='card'>
      <div className='title'>{title}</div>
      <img src={image} alt='' className='img' />
    </div>
  )
}

export default Card
