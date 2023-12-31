import { useDispatch, useSelector } from "react-redux";
import "./category.css";
import { useEffect } from "react";
import { categoryAction } from "../../redux/actions/category";
import { RootState } from "../../redux/store";
import ReactLoading from "react-loading";

interface CategoryProps {
  setCategory: (category: string | null) => void;
}

const Category: React.FC<CategoryProps> = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { category } = useSelector((state: RootState) => state.category);
  console.log(category);

  useEffect(() => {
    dispatch(categoryAction());
  }, [dispatch]);

  return (
    <div>
      {category && category.length > 0 ? (
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          <option value="">Category</option>
          {category.map((categoryName: string, index: number) => (
            <option key={index} value={categoryName}>
              {categoryName}
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

export default Category;
