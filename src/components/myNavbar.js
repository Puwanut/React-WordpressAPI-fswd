import { Container, Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const MyNavbar = () => {
    return (
        <Navbar className='justify-content-between' bg="dark" variant='dark' expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/">Peppon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        {/* <Nav.Link>
                            <NavLink to="/" className="link" activeClassName="active">
                                Home
                            </NavLink>
                        </NavItem>

                        <NavLink to="/post" className="link" activeClassName="active">
                            Post
                        </NavLink>
                        <NavLink to="/author" className="link" activeClassName="active">
                            Author
                        </NavLink> */}
                        <Link to="/">Home</Link>
                        <Nav.Link href="/">
                            Home
                        </Nav.Link>
                        <Nav.Link href="/category">
                            Category
                        </Nav.Link>
                        <Nav.Link href="/author">
                            Author
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar