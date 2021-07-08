import react            from "react"
import Navbar           from "react-bootstrap/Navbar"
import Nav              from "react-bootstrap/Nav"
import CarWidget        from './CarWidget';

import 'bootstrap/dist/css/bootstrap.min.css';




export default function NavBar(){
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Mi Primer Tienda</Navbar.Brand>
            <Nav>
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#whos">Quienes Somos</Nav.Link>
                <Nav.Link href="#products">Productos</Nav.Link>
                <Nav.Link href="#carrito"><CarWidget /> </Nav.Link>
            </Nav>
        </Navbar>

    )
}