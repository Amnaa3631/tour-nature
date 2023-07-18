import { Navbar, Nav, Container, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
 import { FiSearch } from 'react-icons/fi';
 

import './NavBar.css'


const NavBar = () => {
  return (
<>
    <Navbar bg="dark" expand="lg">
      <Container>
      <div className="logo">
    <img src={logo} alt="Logo" />
  </div>
 
        <div >Search here</div>
        <FiSearch className='icon'/>
    
        
      </Container>
    </Navbar>
    <Nav/>
    <FiSearch/>
    </>
  );
}
export default NavBar;
