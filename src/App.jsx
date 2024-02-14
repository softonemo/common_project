import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './details/Detail';
import DetailPage from './pages/DetailPage';
import MainPage from './components/mainpage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/flowers/:id" element={<DetailPage />} />
        <Route path='/' element={<MainPage/>} />
      </Routes>
    </>
  );
}

export default App;
