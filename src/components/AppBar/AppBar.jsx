import { Navigation } from "components/Navigation/Navigation"
import {AuthNav} from "components/AuthNav/AuthNav"
import { UserMenu } from "components/UserMenu/UserMenu"
import { useSelector } from "react-redux";
import styled from 'styled-components'
import { Outlet } from "react-router-dom";



const Div = styled.div`
display:flex;
justify-content: space-between;
`
export const AppBar = () =>{
    const token = useSelector(state => state.token.value)
    return (
        <>
        <Div> 
            <Navigation/>
            {token ===""?<AuthNav/>: <UserMenu/>}
        </Div>
                <Outlet/>
                </>
    )
     
    
}