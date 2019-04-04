import React from 'react'
import logo from './logo.svg'
import './style.css'

const Logo = () => {
  return(
    <a className="logo" href={'https://termitkin.github.io/react-aviasales/'} title="Главная страница">
      <img src = { logo } alt="Лого" />
    </a>
  )
}

export default Logo
