import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Detail from './details/Detail';
import DetailPage from './pages/DetailPage';
import MainPage from './components/mainpage';
import Footer from './components/footer/Footer';
import Delivery from './components/delivvery/Delivery';
import Specials from './components/Specials/Special';
import About from './components/aboutus/About';
import Contact from './components/contact/Contact';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/flowers/:id" element={<Detail />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
