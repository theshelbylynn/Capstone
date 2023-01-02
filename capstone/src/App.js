import './App.css';
import Header from './Header.js';
import Footer from'./Footer.js';
import Booking from'./BookingPage.js';
import Home from'./Home.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>

    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/BookingPage" element={<Booking/>} />
      </Routes>
    
    <Footer/>
    
    </>

  );
}

export default App;
