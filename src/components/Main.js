import React, { useState } from 'react'
import Card from './Card'

function Main() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const randomCards = () => {}

  return (
    <main className='main'>
      <div className='score'>
        <div className='current'>Current Score: {currentScore}</div>
        <div className='best'>Best Score: {bestScore}</div>
      </div>
      <div className='cards'>
        <Card title='Bane' />
        <Card title='Name' />
        <Card title='Name' />
        <Card title='Name' />
        <Card title='Name' />
        <Card title='Name' />
        <Card title='Name' />
        <Card title='Name' />
      </div>
    </main>
  )
}

export default Main
