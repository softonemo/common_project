import React from 'react';
import './About.css';
function About() {
  return (
    <div className="nac">
      <h1 className="h1">Greenland цветочная лавка</h1>
      <p className="p5">
        Цветочная лавка. Оптовые и мелкооптовые продажи цветов. Доставка цветов по городу Бишкек
      </p>
      <p className="p5">
        Цветы принято дарить во все памятные дни жизни – в день рождения, в день свадьбы
      </p>
      <img
        className="images"
        src="https://i9.photo.2gis.com/images/branch/32/4503599645991309_9401.jpg"
        alt=""
      />
      <img
        className="images2"
        src="https://dostavka-tsvety.ru/wp-content/uploads/2020/04/80.jpg"
        alt=""
      />
      <img
        className="images3"
        src="https://цветывчапаевске.рф/wp-content/uploads/2020/12/boks-s-konfetami.jpg"
        alt=""
      />
      <img
        className="images4"
        src="https://kamelia-tver.ru/wp-content/uploads/2022/07/buket_2022-2-scaled.jpeg"
        alt=""
      />
      <img className='images5' src="https://цветывчапаевске.рф/wp-content/uploads/2020/09/jarkij-boks.jpg" alt="" />
      {/* <img className="images5" src="https://cvety-omsk.ru/assets/images/products/1101/1638780978img-20211119-194805.jpg" alt="" /> */}
    </div>
  );
}

export default About;
