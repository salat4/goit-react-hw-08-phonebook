import { useLoginUserMutation } from "redux/ContactsSlice";
import { useDispatch } from "react-redux";
import { setToken,setUser } from "redux/ContactsSlice";
import { useNavigate } from "react-router-dom";
export const Login = () =>{
    const [login] = useLoginUserMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = async(values) =>{
        values.preventDefault();
        try{
            const data = await login({           
                email:values.target.elements.email.value,
                password:values.target.elements.password.value,
            })
            const {token,user} = data.data;
            dispatch(setToken(token))
            dispatch(setUser(user.name))
            navigate('/')
        }
        catch(error){
            console.log(error)
        }

        finally {
            values.target.reset();
          }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>
                <p >Email</p>
                    <input type = "email" name="email" required></input>
                    <p>Password</p>
                    <input type="password" name="password" required></input>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}