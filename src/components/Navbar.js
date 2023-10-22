import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function BasicExample() {
  const products = useSelector((state) => state.cart);
  return (
    <Navbar expand="lg" fixed="top" className="bg-body-tertiary fixed-top">
      <Container>
        <Link className="navbar-brand" to="/">
          Cart App
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Product
            </Link>
            <Link to="/cart" className="nav-link">
              Cart ({products.length})
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
