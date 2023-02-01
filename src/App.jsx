import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './components/base.css'
import './components/header.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="header">
  <div class="header-wrapper">
    <div class="header-left">
      <img src="" alt="Work Ready Kentucky Scholarship logo" />
    </div>
    <div class="header-right">
      <div class="header__nav-wrapper">
        <ul class="header__nav">
          <li><a class="header__nav__link" href="" title="">Nav Link</a></li>
          <li><a class="header__nav__link" href="" title="">Nav Link</a></li>
          <li><a class="header__nav__link" href="" title="">Nav Link</a></li>
          <li><a class="header__nav__link" href="" title="">Nav Link</a></li>
        </ul>
        <div class="header__cta">
          <a class="header__cta__button header__cta__button--secondary">Button</a>
          <a class="header__cta__button" class="header__button">Button</a>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default App
