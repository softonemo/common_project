import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Detail from './details/Detail';
import DetailPage from './pages/DetailPage';
import MainPage from './components/mainpage';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        
        <Route path='/Login' element={<Login/>} />
        <Route path="/flowers/:id" element={<Detail/>} />
        <Route path='/' element={<MainPage/>} />
      </Routes>
    </>
  );
}

export default App;
