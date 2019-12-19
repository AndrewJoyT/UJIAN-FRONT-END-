import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import logobrand from '../img/gif.gif'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { countCart } from './../redux/actions'
import { URL } from '../support/Url';
import { FaShoppingCart } from 'react-icons/fa'
// import { APIURL } from '../support/ApiUrl';
// import Axios from 'axios';


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    console.log(props.Cart)

    // Axios.get(`${APIURL}/orders`)
    //     .then((res) => {
    //         props.countCart(res.data.length)
    //     }).catch((err) => {
    //         console.log(err)
    //     })

    return (
        <div className='jancuk'>
            <Navbar  light expand="md">
                <NavbarBrand href="/">                    
            <a href='/'><img src={logobrand} height='45px' /></a>
                    {/* BIOSKOP */}
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {props.Auth.role!=="admin"?
                            null
                            :
                        <NavItem className='mr-2 pt-2'>
                            <Link to={"/manageadmin/"}>Manage Movie</Link>
                        </NavItem>
                        }
                        {props.Auth.role!=="admin"?
                            null
                            :
                        <NavItem className='mr-2 pt-2'>
                            <Link to={"/managestudio/"}>Manage Studio</Link>
                        </NavItem>
                        }
                        {props.Auth.role === 'user' ?
                            <NavItem className='mr-2 pt-2'>
                                <Link to={"/history"}> History </Link>
                            </NavItem>
                            :
                            null
                        }
                        {props.Auth.role === 'user' ?
                            <NavItem className='mr-2 pt-2'>
                                <Link to={"/cart"}> <FaShoppingCart/> </Link>
                                {props.Cart}
                            </NavItem>
                            :
                            null
                        }
                        {/* {props.Cart===0 || props.AuthLog===false?
                            null
                            :
                            <NavItem className='mr-2 pt-2'>
                                {props.Cart}
                            </NavItem>
                        } */}
                        {props.namauser===''?
                            <NavItem className='mr-2 pt-2'>
                                <Link to="/login">Login</Link>
                            </NavItem>
                            :
                            null
                        }
                        {props.namauser === '' ?
                            <NavItem className='mr-2 pt-2'>
                                <Link to="/register">Register</Link>
                            </NavItem>
                            :
                            null
                        }

                        {props.AuthLog === false?
                            null
                            :
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Halo, {props.namauser}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem >
                                        <Link to='/settings' >User Settings</Link>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem  onClick={()=>onSignOutClick()}>
                                        <Link to='/login' onClick={()=>onSignOutClick()} >Logout</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        }
                        
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

const onSignOutClick=()=>{
    localStorage.clear()
    window.location.reload()
    window.location.assign(`${URL}/`)
}
const mapStateToProps=(state)=>{
    return{
        namauser:state.Auth.username,
        Cart:state.Auth.cart,
        AuthLog:state.Auth.login,
        Auth:state.Auth
    }
}

export default connect(mapStateToProps,{countCart}) (Header);