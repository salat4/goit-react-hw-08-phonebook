import styled from 'styled-components'

const Nav = styled.nav`
// margin-right : 50px;
`
const { NavLink } = require("react-router-dom")

export const Navigation = ()=>{
    return(
        <Nav>
        <NavLink to = '/'>Main</NavLink>
        <NavLink to = '/contacts'>Contacts</NavLink>
    </Nav>
    )
   
}