import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        {/* <Route path='/' element={} /> */}
        <Route path='/Login' element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
