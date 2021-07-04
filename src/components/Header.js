import React from 'react';
import { Container,Navbar,Nav } from 'react-bootstrap';

function Header(){
    return (
    <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href=""><i className='fas fa-shopping-cart'>Cart</i></Nav.Link>
                    <Nav.Link href=""><i className='fas fa-users'>Login</i></Nav.Link>
                    
                    </Nav>
                
                
    </Navbar.Collapse>
    </Container>
</Navbar>
    </header>
    )
}
export default Header