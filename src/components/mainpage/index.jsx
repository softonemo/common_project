import React, { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Banner from "../banner";

function MainPage() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [flowers, setFlowers] = useState([]);
  async function getFlower() {
    const res = await fetch(
      `https://65c22d98f7e6ea59682accb7.mockapi.io/api/01/flowers?limit=6&page=${page}`
    );
    const response = await res.json();
    console.log(response);
    setFlowers(response);
  }
  useEffect(() => {
    getFlower();
  }, []);
  function pagePlus() {
    setPage(page + 1);
    getFlower(page + 1);
  }
  function pageMinus() {
    setPage(page - 1);
    getFlower(page - 1);
  }
  function detailFlowers(id) {
    navigate("/flowers/" + id); 
  }
  return (
    <>
    <Banner/>
    <div className="container">
      
      <div className="pageLeft">
        <button className="buttonPage" onClick={pageMinus}>
          left
        </button>
      </div>
      <div className="all_flowers">
        {flowers.map((el) => {
          return (
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
          );
        })}
      </div>
      <div className="pageRight">
        <button className="buttonPage" onClick={pagePlus}>
          right
        </button>
      </div>
    </div>
    </>
    
  );
}

export default MainPage;
