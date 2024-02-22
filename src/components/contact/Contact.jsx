import React from 'react';
import './Contact.css';
function Contacts() {
  return (
    <div className="content">
      <h1 className="h1">Greenland цветочный магазин</h1>
      <h3 className="h3">Наши контакты:</h3>
      <div className="logo3">
        <img
          className="img3"
          src="https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg"
          alt=""
        />
        {/* <img className="face" src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" /> */}
        <img
          className="img3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
          alt=""
        />
        <img
          className="img3"
          style={{ marginLeft: '160px' }}
          src="https://mediarost.com/media/com_jbusinessdirectory/pictures/companies/56/cropped-1584601179.jpeg"
          alt=""
        />
        <img
          className="img3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/800px-Telegram_2019_Logo.svg.png"
          alt=""
        />
      </div>
      <div className="content">
        <a className="a3" href="#">
          Instagram
        </a>
        <a className="a3" href="#">
          WhatsApp
        </a>
        <a className="a3" href="#">
          Viber
        </a>
        <a className="a3" href="#">
          Telegram
        </a>
      </div>
      <img className="image2" src="https://greenland.kg/images/logos/4/Greenland_logo.png" alt="" />
    </div>
  );
}

export default Contacts;
