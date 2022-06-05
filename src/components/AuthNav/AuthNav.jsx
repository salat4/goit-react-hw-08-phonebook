const { NavLink } = require("react-router-dom")

export const AuthNav = ()=>{
    return(
        <nav>
        <NavLink to = '/register'>Register</NavLink>
        <NavLink to = '/login'>Login</NavLink>
    </nav>
    )
}