import React, { useState, useEffect } from 'react'
import CardsGrid from './CardsGrid/CardsGrid'
import bane from '../assets/bane.png'
import faceless_void from '../assets/faceless_void.png'
import abaddon from '../assets/abaddon.png'
import lion from '../assets/lion.png'
import chaos_knight from '../assets/chaos_knight.png'
import lina from '../assets/lina.png'
import ember_spirit from '../assets/ember_spirit.png'
import wraith_king from '../assets/wraith_king.png'
import necrophos from '../assets/necrophos.png'
import obsidian_destroyer from '../assets/obsidian_destroyer.png'

function Main() {
  const HEROES = {
    Bane: bane,
    Lion: lion,
    'Faceless Void': faceless_void,
    'Chaos Knight': chaos_knight,
    Lina: lina,
    'Wraith King': wraith_king,
    'Ember Spirit': ember_spirit,
    Abaddon: abaddon,
    'Obsidian Destroyer': obsidian_destroyer,
    Necrophos: necrophos,
  }
  const [heroesNames, setHeroesNames] = useState(Object.keys(HEROES))
  const [clickedHeroes, setClickedHeroes] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const shuffleCards = () => {
    const shuffleCards = [...heroesNames]

    for (let i = shuffleCards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1))
      let temp = shuffleCards[randomIndex]
      shuffleCards[randomIndex] = shuffleCards[i]
      shuffleCards[i] = temp
    }

    setHeroesNames(shuffleCards)
  }

  const handleCardClick = hero => {
    if (clickedHeroes.includes(hero)) {
      resetScore()
    } else {
      updateScore()
      setClickedHeroes([...clickedHeroes, hero])
    }
  }

  const updateScore = () => {
    setCurrentScore(currentScore + 1)
    if (currentScore >= bestScore) {
      setBestScore(currentScore + 1)
    }
  }

  const resetScore = () => {
    setCurrentScore(0)
    setClickedHeroes([])
  }

  useEffect(shuffleCards, [currentScore])

  return (
    <main className='main'>
      <div className='score'>
        <div className='current'>Current Score: {currentScore}</div>
        <div className='best'>Best Score: {bestScore}</div>
      </div>
      <CardsGrid heroes={HEROES} heroesNames={heroesNames} onClick={handleCardClick} />
    </main>
  )
}

export default Main
