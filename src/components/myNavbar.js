import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
    return (
        <Navbar className='justify-content-between' bg="dark" variant='dark' expand="lg" fixed="top">
            <Container>
                <Link to="/" className='navbar-brand'>Peppon</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='nav-link'>Home</Link>
                        <Link to="/category" className='nav-link'>Category</Link>
                        <Link to="/author" className='nav-link'>Author</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar