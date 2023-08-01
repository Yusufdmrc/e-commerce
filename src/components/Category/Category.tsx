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
    <div className="category-container">
      <div className="category">CATEGORY</div>
      {category && category.length > 0 ? (
        category?.map((categoryName: string, index: number) => (
          <div
            onClick={() => {
              setCategory(categoryName);
            }}
            key={index}
            className="categories"
          >
            {categoryName}
          </div>
        ))
      ) : (
        <div>
          <ReactLoading height={"20%"} width={"20%"} />
        </div>
      )}
    </div>
  );
};

export default Category;
