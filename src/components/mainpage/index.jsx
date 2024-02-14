import React, { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

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
              <img src={el.flowerImg} alt="" />
              <h2>{el.title}</h2>
              <p>{el.price}$</p>
              <button
                onClick={() => detailFlowers(el.id)}
                className="detailsBtn"
              >
                Детали
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
  );
}

export default MainPage;
