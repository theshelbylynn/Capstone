
import Nav from './Nav.js';
import Logo from './Logo.png';

function Header() {
  return (
    <>

    <div className="header">

    <div className="logo">
<img src={Logo} alt="Logo" />
  </div>

    <div className="navigation">
      <Nav />
    </div>

  </div>
  
    </>
  );
}

export default Header;
