import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './details/Detail';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/flowers/:id" element={<DetailPage />} />
        <Detail />
      </Routes>
    </>
  );
}

export default App;
