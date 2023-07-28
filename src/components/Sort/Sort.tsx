import "./sort.css";

const Sort = () => {
  return (
    <div className="sort-container">
      <select className="sort-select">
        <option disabled value="">
          Select
        </option>
        <option disabled value="increasing">
          Lowest price
        </option>
        <option disabled value="decreasing">
          Highest price
        </option>
      </select>
    </div>
  );
};

export default Sort;
