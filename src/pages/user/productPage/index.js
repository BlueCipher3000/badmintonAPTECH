import { memo, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaFilter, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  GiTennisRacket,
  GiRunningShoe,
  GiBackpack,
  GiAlliedStar,
} from "react-icons/gi";
import { ROUTERS } from "../../../utils/router";
import sp_1 from "../../../assets/user/img/products/sp-1.webp";
import sp_2 from "../../../assets/user/img/products/sp-2.webp";
import sp_3 from "../../../assets/user/img/products/sp-3.webp";
import { useNavigate } from "react-router-dom";
const getFinalPrice = (price, sale = 0) => {
  const discount = sale ? (price * sale) / 100 : 0;
  return price - discount;
};

const ProductPage = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(2);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  /* const allProducts = () => {
    const [products, setProducts] = useState([]); */

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        if (Array.isArray(data)) {
          setProducts(data);
          console.log("setProducts is called with:", data);
        } else {
          console.error("Unexpected API response format:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProducts([]);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = (products) => {
    switch (sortOption) {
      case "price-high-low":
        return [...products].sort((a, b) => b.price - a.price);
      case "price-low-high":
        return [...products].sort((a, b) => a.price - b.price);
      case "newest":
        return [...products].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      default:
        return products;
    }
  };

  const filteredProducts =
    selectedCategory && selectedCategory.id
      ? products.filter(
          (product) => product.category_id === selectedCategory.id
        )
      : products;

  const sortedFilteredProducts = sortedProducts(filteredProducts);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedFilteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(
        prevPage + 1,
        Math.ceil((filteredProducts?.length ?? 0) / productsPerPage)
      )
    );
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    console.log("Products State:", products);
    console.log("Filtered Products:", filteredProducts);
    console.log("Sorted & Paginated:", currentProducts);
  }, [products, filteredProducts, currentProducts]);

  return (
    <div className="container mx-auto mt-8 flex">
      <div className="w-1/4">
        <h2 className="text-xl font-semibold mb-4">Danh mục sản phẩm</h2>
        <ul className="space-y-2">
          <li
            onClick={() => handleCategoryClick(null)}
            className={`cursor-pointer p-2 rounded ${
              selectedCategory === null ? "bg-gray-300" : "hover:bg-gray-200"
            }`}
          >
            Tất cả sản phẩm
          </li>
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-2 rounded"
            >
              <span>{category.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Sản phẩm</h2>
          <button
            onClick={toggleFilters}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <FaFilter />
            <span>Lọc sản phẩm</span>
          </button>
        </div>
        {filtersVisible && (
          <div className="mb-4">
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="w-full border rounded p-2"
            >
              <option value="">Mặc định</option>
              <option value="price-high-low">Giá: Cao đến thấp</option>
              <option value="price-low-high">Giá: Thấp đến cao</option>
              <option value="newest">Mới nhất</option>
            </select>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts?.map((product) => (
            <div
              key={product.id}
              className="col-span-1 bg-white shadow-md rounded-lg p-4"
            >
              <p className="bg-black text-white text-xs p-1 w-max rounded">
                New
              </p>
              <div className="relative">
                {favorites[product.id] ? (
                  <AiFillHeart
                    className="w-6 h-6 absolute top-1 right-1 cursor-pointer text-red-500"
                    onClick={() => toggleFavorite(product.id)}
                  />
                ) : (
                  <AiOutlineHeart
                    className="w-6 h-6 absolute top-1 right-1 cursor-pointer text-gray-500"
                    onClick={() => toggleFavorite(product.id)}
                  />
                )}
                <img
                  className="w-full h-auto rounded-md hover:opacity-80 cursor-pointer"
                  src={`http://localhost:8000/storage/imgproducts/${product.img}`}
                  alt={product.name}
                  onClick={() =>
                    navigate(
                      `${ROUTERS.USER.DETAIL.replace(":id", product.id)}`
                    )
                  }
                />
              </div>
              {/* <ul className="flex space-x-2 mt-2">
                {product.colors.map((color, index) => (
                  <li
                    key={index}
                    className={`${color} p-2 w-4 h-4 rounded-full border border-gray-200`}
                  ></li>
                ))}
              </ul> */}
              <p className="capitalize mt-2 text-sm font-medium">
                {product.name}
              </p>
              <p className="font-bold text-lg text-gray-800">
                {product.price
                  ? getFinalPrice(product.price, product.sale ?? 0).toLocaleString() +
                    "₫"
                  : "N/A"}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prevPage}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            disabled={currentPage === 1}
          >
            <FaArrowLeft />
            <span>Trang trước</span>
          </button>
          <span>Trang {currentPage}</span>
          <button
            onClick={nextPage}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            disabled={
              currentPage ===
              Math.ceil((filteredProducts.length || 1) / productsPerPage)
            }
          >
            <FaArrowRight />
            <span>Trang sau</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductPage);
