const Filter = ({ filter,handelFilter }) => (
  <div>
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handelFilter}
    ></input>
  </div>
);
export default Filter;
