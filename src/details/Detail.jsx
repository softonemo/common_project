import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  async function getDetail() {
    const response = await fetch('https://65c22d98f7e6ea59682accb7.mockapi.io/api/01/flowers' + id);
    const data = await response.json();
    setData(data);
  }
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div>
      <h2>{data.title}</h2>
      <h3>{data.price}</h3>
    </div>
  );
}

export default Detail;
