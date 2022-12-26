import Specials from './Specials.js';
import pizza from './pizza.png';


function Main() {
  return (
    <>

    <div className="main">

    <div className="main-content">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

      <button id="button">Reserve a Table</button>
    </div>

    <div className="featured">
    <img src={pizza} alt="pizza" />
    </div>


    </div>

    

    


    </>
  );
}

export default Main;
