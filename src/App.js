import './App.css';
import Home from './pages/Home/index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs/index.js';
// import Navbar from './components/NavBar/index.js';

function App() {
  return (
    <>
    <BrowserRouter>
     {/* <Navbar /> */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Home />}  />
          <Route path="/blogs" element={<Home />}  />
          <Route path="/pages" element={<Home />}  />
          <Route path="/contact" element={<Home />}  />
          <Route path="/about" element={<AboutUs />}  />    
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;
