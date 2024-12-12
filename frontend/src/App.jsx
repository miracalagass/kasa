import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/about/About';
import NotFound from './pages/notFound/NotFound';
import Logement from "./pages/Logement";
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div id='body'>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<NotFound />} />    
    </Routes>
    </div>
    <Footer />
  </BrowserRouter>
  )
}

export default App
