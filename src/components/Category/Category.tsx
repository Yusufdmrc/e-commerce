import { useDispatch, useSelector } from "react-redux";
import "./category.css";
import { useEffect } from "react";
import { categoryAction } from "../../redux/actions/category";
import { RootState } from "../../redux/store";

const Category: React.FC = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state: RootState) => state.category);
  console.log(category);

  useEffect(() => {
    dispatch(categoryAction());
  }, [dispatch]);

  return (
    <div className="category-container">
      <div className="category">CATEGORY</div>
      {category?.map((category: string[], index: number) => (
        <div key={index} className="categories">
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
