import React, { useState } from 'react';
import './Search.css';
import { useNavigate } from 'react-router-dom';
function Search() {
  const navigate = useNavigate();
  const [inp,setinp]=useState('')
  const [data,setdata]=useState([])
  function searchInput(e){
    setinp(e.target.value)
  }
  async function searchFlowers(){
    const res = await fetch(
      `https://65c22d98f7e6ea59682accb7.mockapi.io/api/01/flowers?title=${inp}`
    );
    const response = await res.json();
    console.log(response);
    setdata(response);
  }
  function detailFlowers(id) {
    navigate("/flowers/" + id); 
  }
  return (
    <>
    <div className="Search1">
      <div className="search-form">
        <input onChange={searchInput} placeholder="Поиск цветы" className="search_from_txt" type="search" name="tittle" />
        <button onClick={searchFlowers} className="search-form__btn">
          <img
            className="search-form__image"
            src="https://logowik.com/content/uploads/images/search7780.jpg"
            alt="image"
          />
        </button>
      </div>
    </div>
    <div className="container">

    <div className='all_flowers'>

    {data.map((el)=>{
      return(
        <div>
        <img className="flowerImg" src={el.flowerImg} alt="" />
        <h2 style={{marginTop: '20px'}}>{el.title}</h2>
        <p style={{marginTop: '20px'}} >{el.price}$</p>
        <button
          onClick={() => detailFlowers(el.id)}
          className="detailsBtn"
        >
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">
            Детали
          </span>
        </button>
      </div>
      )
    })}
    </div>
    </div>
    </>
  );
}

export default Search;
