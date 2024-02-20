import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='headerContainer'>
        <div className="logo"><Link to={'/'}>FLOWERS</Link></div>
        <nav>
          <Link to='/delivery'>Доставка</Link>
          <Link to='/specials'>Акции</Link>
          <Link to='/contacts'>Контакты</Link>
          <Link to='/about'>О нас</Link>
        </nav>
        <Link  to="/Login" className='login'>login</Link>
    </div>
  )
}

export default Header
