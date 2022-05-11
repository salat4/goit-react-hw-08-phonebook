import { useSelector,useDispatch } from "react-redux";
import action from "../../redux/action/action"


const Filter = () => {
const filterValue = useSelector(state => state.filterValue)
const dispatch = useDispatch();

const handelFilter = (e) => {
  return dispatch(action.filterName(e.currentTarget.value))
} 

return(
  <div>
  <input
    type="text"
    name="filter"
    value={filterValue}
    onChange={handelFilter}
  ></input>
</div>
)
}


export default Filter;
