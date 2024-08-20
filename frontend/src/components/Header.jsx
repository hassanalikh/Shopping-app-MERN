import { Container } from 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


function Header() {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand >Romix Store</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to='/cart'>
                                <Nav.Link >
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    &nbsp;
                                    CART
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/signin'>
                                <Nav.Link >
                                    <i className="fa-solid fa-user"></i>
                                    &nbsp;
                                    SIGNIN
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default Header; 