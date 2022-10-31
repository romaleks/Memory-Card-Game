import React from 'react'

function Card({ title, image, onClick }) {
  return (
    <div className='card' onClick={() => onClick(title)}>
      <div className='title'>{title}</div>
      <img src={image} alt='' className='img' />
    </div>
  )
}

export default Card
