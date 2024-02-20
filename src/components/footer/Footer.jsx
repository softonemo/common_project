import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footerContainer'>
      <div className="footerContainer1">
        <h2>GREENLAND</h2>
        <Link to="/">О нас </Link><br />
        <Link to="/">Доставка </Link><br />
        <Link to="/">Акции </Link><br />
        <Link to="/">Отзывы</Link><br />
        <Link to="/">Политика конфиденциальности </Link>
      </div>
      <div className="footerContainer2">
        <h2>КОНТАКТЫ</h2>
        <p>Наш тел.: <br /> +996 770 446 090</p> 
        <p>Наш адрес: <br /> БАЙТИК БААТЫРА 36/1 - (24/7)  <br /> ЮНУСАЛИЕВА 76 - (9:00-21:00)</p>
      </div>
      <div className="footerContainer3">
        <h2>мы в соц.сетях</h2>
        <p>Следите за нашими обновлениями в соц.сетях:</p>
        <a href="https://www.instagram.com/greenland_kg/">instagram</a>
        <a href="https://www.facebook.com/greenlandflowers/">facebook</a>
        <a href="https://vk.com/club71400273">vk</a>
      </div>
    </div>
  )
}

export default Footer