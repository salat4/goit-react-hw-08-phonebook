import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "redux/ContactsSlice";
import { useLogoutUserMutation } from "redux/ContactsSlice";
export const UserMenu = ()=>{
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    // const Logout = () =>{
    //     dispatch(setToken(''))
    //     dispatch(setUser([]))
    // }
    const[logoutUser] = useLogoutUserMutation()
    const handleClickLogout = async () => {
        try {
          await logoutUser().unwrap();
          dispatch(setToken(''));
          dispatch(setUser(''))
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div>
            {/* <img src = {avatar} alt =""/> */}
            <span>Welcome,{user}</span>
            <button type ="button"onClick={handleClickLogout}>Logout</button>
        </div>
    )
}