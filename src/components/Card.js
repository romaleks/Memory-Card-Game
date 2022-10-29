import React from 'react'

function Card(props) {
  const { title } = props

  return (
    <div className='card'>
      <div className='title'>{title}</div>
      <img src='' alt='' />
    </div>
  )
}

export default Card
