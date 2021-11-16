import React from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand as={HashLink} to='/home'> <img src="https://i.ibb.co/7vj5vXV/logo-Tour-with-Imriaz.png" width="30"
                        height="30"
                        className="d-inline-block align-top " alt='' /> <br /> Travel with Imriaz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to='/home'>Home</Nav.Link>
                            <Nav.Link as={HashLink} to='/blog'>Blog</Nav.Link>
                            <Nav.Link as={HashLink} to='/contactUs'>Contact Us</Nav.Link>
                        </Nav>
                        {user?.email ?
                            <nav>
                                <NavLink className="mx-1" to="/manageAllOrder">
                                    <Button variant="outline-secondary">Manage All Order</Button>
                                </NavLink>
                                <NavLink className="mx-1" to="/myOrders">
                                    <Button variant="outline-secondary">My Orders</Button>
                                </NavLink>
                                <Link to="/AddPackage">
                                    <button type="button" className="btn btn-outline-secondary ">Add Package</button>
                                </Link>
                                <button onClick={logOut} type="button" className="btn btn-outline-secondary mx-1 ">Logout</button>
                            </nav>
                            :
                            <Nav.Link as={HashLink} to="/loginregistration"><button type="button" class="btn btn-outline-info">Login</button></Nav.Link>
                        }
                        {user?.email ? <Navbar.Text>
                            <img className='profile-image' src={user?.photoURL} alt='' /> <a href="/home">{user?.displayName}</a>
                        </Navbar.Text> : ''}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;