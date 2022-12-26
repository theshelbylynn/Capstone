import './App.css';
import Header from './Header.js';
import Footer from'./Footer.js';
import Booking from'./BookingPage.js';
import Home from'./Home.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>


      <Router>
    <Header/>

    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/BookingPage.js" element={<Booking/>} />
      </Routes>
    
    <Footer/>
    </Router>
    </>

  );
}

export default App;
