import React, { useEffect } from 'react'
import "../style/Header.css"
import { MenuMenu, MenuItem, Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import LoggedOut from '../components/LoggedOut'
import LoggedIn from '../components/LoggedIn'
import { useDispatch, useSelector } from "react-redux"
import { logoutSuccess } from '../redux/slices/authSlice.js'


export function Header() {

    const auth = useSelector((state) => state.auth.isAuthenticated)


    const dispatch = useDispatch()


    return (
        <Menu size="massive" id="menu">
            <Container>
                <MenuItem className='menu-item' id="home-header"

                >
                    <Link className='menu-item' id="home-link" to="/"> Anasayfa </Link>
                </MenuItem>

                {
                    auth && <MenuItem className='menu-item' id="todolist-header"


                    >
                        <Link className='menu-item' id="todo-list" to="/todolist"> Todo Listesi </Link>
                    </MenuItem>
                }

                <MenuMenu position='right'>
                    <MenuItem
                        name='signup'
                        className='menu-item'

                    >
                        {
                            auth ? <Link onClick={() => dispatch(logoutSuccess())} className='menu-item' id="todo-list" to="/"> <LoggedIn /> </Link> :

                                <Link className='menu-item' id="todo-list" to="/login"> <LoggedOut /> </Link>
                        }




                    </MenuItem>


                </MenuMenu>
            </Container>
        </Menu>
    )
}

export default Header