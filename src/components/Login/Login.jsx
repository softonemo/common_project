import React, { useState } from 'react'
import './Login.css';

function Login() {
  const [inputValue, setInputValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [error, setError] = useState('');
  
  const getInputValue = (e) => {
    if (!inputValue.trim() || !passwordValue.trim()) {
      setError('Введите ваш email и пароль!');
    } else if (passwordValue.length < 8) {
      setError('Пароль должен содержать не менее 8 символов');
    } else {
      setError('');
    }
  };
  
  return (
    <div className='logined'>
      <h2>Регистрация</h2>
      <input type="text" placeholder='Введите ваш email' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <br />
      <input type="password" placeholder='Введите пароль' value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} />
      <br />
      <button  onClick={getInputValue}>Отправить</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
  };

export default Login
