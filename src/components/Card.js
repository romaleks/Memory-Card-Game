import React from 'react'
import bane from './bane.png'

function Card(props) {
  const { title } = props

  return (
    <div className='card'>
      <div className='title'>{title}</div>
      <img src={bane} alt='' className='img' />
    </div>
  )
}

export default Card
