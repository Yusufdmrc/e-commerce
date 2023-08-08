import { useDispatch } from "react-redux";
import "./search.css";
import { searchAction } from "../../redux/actions/search";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();

  const searchProduct = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(searchAction(search));
    }
  };
  return (
    <div className="search">
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyPress={searchProduct}
        type="text"
        placeholder="Search..."
        className="navbar-input"
      />
    </div>
  );
};

export default Search;
