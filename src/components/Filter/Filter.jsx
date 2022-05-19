const Filter = ({handelFilter,filter}) => {
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
