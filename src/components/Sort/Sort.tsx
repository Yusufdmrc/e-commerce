import "./sort.css";

const Sort = ({ setSort }) => {
  return (
    <div className="sort-container">
      <select onChange={(e) => setSort(e.target.value)} className="sort-select">
        <option value="">Select</option>
        <option value="increasing">Lowest price</option>
        <option value="decreasing">Highest price</option>
      </select>
    </div>
  );
};

export default Sort;
