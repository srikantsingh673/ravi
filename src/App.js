import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <div>
        <Navbar />
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
