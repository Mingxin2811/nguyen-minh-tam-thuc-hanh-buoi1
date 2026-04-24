import './App.css';
import Home from './pages/Home/index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs/index.js';
import Navbar from './components/NavBar/index.js';

function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar />
      <div style={{ padding: '20px' }}>
        {/* Khai báo các đường dẫn URL */}
        <Routes>
          {/* Khi URL là "/", hiển thị component Home */}
          <Route path="/" element={<Home />} />
          
          {/* Khi URL là "/about-us", hiển thị component AboutUs */}
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;
