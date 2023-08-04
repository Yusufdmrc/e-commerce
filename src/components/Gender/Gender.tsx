import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { categoryAction } from "../../redux/actions/category";
import ReactLoading from "react-loading";
import "./gender.css";

interface CategoryProps {
  setCategory: (category: string | null) => void;
}

const Gender: React.FC<CategoryProps> = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { category } = useSelector((state: RootState) => state.category);

  useEffect(() => {
    dispatch(categoryAction());
  }, [dispatch]);

  const filteredCategories = category?.filter(
    (categoryName: string) =>
      categoryName === `men's clothing` || categoryName === `women's clothing`
  );

  return (
    <div>
      {filteredCategories && filteredCategories.length > 0 ? (
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="gender-select"
        >
          <option value="">Gender</option>
          {filteredCategories.map((categoryName: string, index: number) => (
            <option key={index} value={categoryName}>
              {categoryName === `men's clothing` ? "men" : "women"}
            </option>
          ))}
        </select>
      ) : (
        <div>
          <ReactLoading height={"20%"} width={"20%"} />
        </div>
      )}
    </div>
  );
};

export default Gender;
