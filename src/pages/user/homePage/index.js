import { memo, useState } from "react";
import { useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import sp_1 from "../../../assets/user/img/products/sp-1.webp";
import sp_2 from "../../../assets/user/img/products/sp-2.webp";
import sp_3 from "../../../assets/user/img/products/sp-3.webp";
import slide_1 from "../../../assets/user/img/slide/slide-1.webp";
import intro from "../../../assets/user/videos/intro.mp4";
import { ROUTERS } from "../../../utils/router";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState({});
  const [activeTab, setActiveTab] = useState("Sản phẩm nổi bật");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getFinalPrice = (price, sale) => {
    return price - (price * sale) / 100;
  };

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

  const discountedProducts = products.filter((product) => product.sale > 0);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    { id: 1, image: slide_1 },
    { id: 2, image: slide_1 },
    { id: 3, image: slide_1 },
  ];

  return (
    <>
      <div className="slide w-full">
        <Slider {...sliderSettings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="container mx-auto mt-10">
        <div className="title_modules">
          <h2 className="text-center relative">
            <a
              href="san-pham-khuyen-mai"
              title="#Sản phẩm khuyến mãi"
              className="text-xl font-semibold"
            >
              <span>Sản phẩm khuyến mãi</span>
            </a>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {discountedProducts.map((product) => (
            <div
              key={product.id}
              className="col-span-1 bg-white shadow-md rounded-lg p-4"
            >
              <p className="bg-red-500 text-white text-xs p-1 w-max rounded">
                Giảm giá
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
                {getFinalPrice(product.price, product.sale).toLocaleString()}{"₫"}
                <span className="text-sm text-gray-500 line-through">
                  {product.price.toLocaleString()}{"₫"}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-8">
        <ul className="flex justify-center space-x-8 text-sm subpixel-antialiased">
          <li
            onClick={() => setActiveTab("Sản phẩm nổi bật")}
            className={`cursor-pointer ${
              activeTab === "Sản phẩm nổi bật" ? "border-b-2 border-black" : ""
            }`}
          >
            Sản phẩm nổi bật
          </li>
        </ul>

        <div className="container mx-auto pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
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
                  {getFinalPrice(product.price, product.sale).toLocaleString()}{"₫"}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center border-2 p-1 w-36 mx-auto mt-5 cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
            <p>Xem thêm</p>
            <MdKeyboardArrowDown className="w-6 h-6 ml-2" />
          </div>
        </div>
      </div>
      <div className="w-full my-10">
        <video
          src={intro}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div className="container mx-auto relative">
        <div className="py-5">
          <div className="title_modules">
            <h2 className="text-center relative">
              <a
                href="san-pham"
                title="#Danh mục sản phẩm"
                className="text-xl font-semibold"
              >
                <span>Danh mục sản phẩm</span>
              </a>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  className="w-full h-64 object-cover"
                  src={`http://localhost:8000/storage/imgcategories/${category.img}`}
                  alt={category.name}
                />
                <div className="p-4">
                  <p className="text-lg font-semibold text-center">
                    {category.name}
                  </p>
                </div>
                {/* <a
                  href={product.link}
                  className="absolute inset-0"
                  title={product.name}
                ></a> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(HomePage);
