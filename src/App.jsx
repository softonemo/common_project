import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/mainpage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        {/* <Route path='/' element={} /> */}
      </Routes>
    </>
  );
}

export default App;
