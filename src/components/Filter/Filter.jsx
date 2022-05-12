const Filter = ({handelFilter,filterValue}) => {
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
