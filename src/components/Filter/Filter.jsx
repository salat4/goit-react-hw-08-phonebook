import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/ContactsSlice";
const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state =>state.user.filter)
  const handelFilter = (e) => {
    dispatch(setFilter(e.target.value))
  } 
return(
  <div>
  <input
    type="text"
    name="filter"
    value={filter}
    onChange={handelFilter}
  ></input>
</div>
)
}
export default Filter;
