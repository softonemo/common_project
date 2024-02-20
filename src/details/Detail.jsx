import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './Detail.css'

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  async function getDetail() {
    const response = await fetch('https://65c22d98f7e6ea59682accb7.mockapi.io/api/01/flowers/' + id);
    const data = await response.json();
    console.log(data);
    setData(data);
  }
  useEffect(() => {
    getDetail();
  }, []);
  return (
    
    <div className='detailsContainer'>
      <div className="aboutDetail">
        <img src={data.flowerImg} alt="" />
      </div>
    <div className="aboutDetail2">
        <div className="about">
            <h2>{data.title}</h2>
            <h3>Цена:{data.price}</h3>
        </div>
        <span>В наличии</span>
        <div className="postcard">
            <div className="addPostcard"><p >Добавить открытку ручной работы</p><input type="checkbox"/></div>
            <div className="text"><p >Текст для открытки</p><textarea name="" id="" cols="30" rows="5"></textarea></div>
        </div>
        
          <Link to={'/Login'}><button>Оформить заказ</button></Link>
    </div>
  </div>
    
  );
}

export default Detail;
