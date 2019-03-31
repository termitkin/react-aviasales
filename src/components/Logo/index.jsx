import React, {PureComponent} from 'react'
import logo from './logo.svg'
import './style.css'

class Logo extends PureComponent {
  render() {
    return(
      <a className="logo" href="123.html" title="Главная страница">
        <img src = { logo } alt="Лого" />
      </a>
    )
  }
}

export default Logo
