import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("./categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });
  return (
    <div className="space-x-6">
      <h2 className="text-2xl font-bold">All Categories</h2>
      {categories.map((category) => (
        <Link
          className="block ml-5 text-xl font-semibold px-4"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftNav;
