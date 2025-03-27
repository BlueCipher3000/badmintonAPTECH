import { useState, memo } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import sp_1 from "../../../assets/user/img/products/sp-1.webp";
import sp_2 from "../../../assets/user/img/products/sp-2.webp";
import sp_3 from "../../../assets/user/img/products/sp-3.webp";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/cartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailPage = () => {
  const { id } = useParams();
  const productId = Number(id);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { addToCart } = useCart();
  
  useEffect(() => {
    if (!productId) {
      console.error("Invalid product ID");
      setLoading(false);
      return;
    }

    fetch(`http://localhost:8000/api/products/${productId}`)
    .then((res) => res.json())
    .then((data) => {
      setProduct(data);
      setSelectedImage(data.img ? `/storage/imgproducts/${data.img}` : null);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching product:", err)
      setLoading(false);
    });
  }, [id]);

  const handleAddToCart = () => {
    console.log("Product before adding:", product);
    if (!product || !product.id) {
      console.error("Invalid product detected:", product);
      return;
    }
    addToCart({ ...product, quantity: 1 });
    toast.success("Sản phẩm đã được thêm vào giỏ hàng!", {
      position: "top-right",
      autoClose: 3000, // Hide after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="detail">
      <div className="w-full bg-gray-100">
        <div className="container flex items-center mx-auto p-2">
          <a href="/">
            <p className="text-xs text-gray-500">Trang chủ</p>
          </a>
          <AiOutlineRight className="text-xsm mx-1" />
          <a href="#">
            <p className="text-xs text-gray-500">Sản phẩm</p>
          </a>
          <AiOutlineRight className="text-xsm mx-1" />
          <a href="#">
            <p className="text-xs text-gray-500">Vợt cầu lông</p>
          </a>
          <AiOutlineRight className="text-xsm mx-1" />
          <a href="#">
            <p className="text-xs text-red-500">
              {product.name}
            </p>
          </a>
        </div>
      </div>

      <div className="container flex w-full mx-auto space-x-7 py-10">
        <div className="itemRight basis-1/2 w-full">
          <div className="img w-4/5 h-3/5 float-right">
          {product.img ? (
              <img
                className="imgMain mx-auto cursor-pointer"
                src={`http://localhost:8000/storage/imgproducts/${product.img}`}
                alt={`Ảnh chính của sản phẩm ${product.name}`}
                onClick={() => setIsImageModalOpen(true)}
              />
            ) : (
              <p className="text-gray-400 text-center">No image available</p>
            )}
            {/* <div className="imgContainer grid grid-cols-5 gap-x-3 mx-3 mt-16">
              {product.images.map((image, index) => (
                <div key={index} className="border-2 border-gray-400">
                  <img
                    className="w-full h-full object-cover cursor-pointer"
                    src={image}
                    alt={`Ảnh mô tả ${index + 1}`}
                    onClick={() => setSelectedImage(image)}
                  />
                </div>
              ))}
            </div> */}
          </div>
        </div>
        <div className="itemLeft basis-1/2 w-full">
          <div className="header_product">
            <h2 className="nameproduct text-2xl font-semibold">
              {product.name}
            </h2>
            <div className="text-gray-500">
              <p>
                Mã sản phẩm:{" "}
                <span className="text-red-500 font-medium">{product.id}</span>
              </p>
              {/* <p>
                Thương hiệu:{" "}
                <span className="text-red-500 font-medium">
                  {product.brand}
                </span>
              </p> */}
              <p>
                Tình trạng:{" "}
                <span className="text-red-500 font-medium">
                  {product.status ? "Còn hàng" : "Hết hàng"}
                </span>
              </p>
            </div>
            <div className="mt-5">
              <span className="text-2xl font-bold text-red-500">
                {(product.price - (product.price * product.sale / 100)).toLocaleString()}{" "}
                <span className="underline">đ</span>
              </span>
              <span className="text-gray-400 font-semibold ml-4">
                Giá niêm yết:{" "}
                <span className="line-through">
                  {product.price.toLocaleString()} đ
                </span>
              </span>
            </div>
          </div>
          <hr className="my-5" />

          {/* <div className="endow border border-red-500 rounded-md relative p-5 mb-5">
            <div className="absolute -top-5 left-5 bg-white px-3 text-red-500 font-bold text-lg">
              <i className="fa-solid fa-gift"></i> Ưu đãi
            </div>
            <ul className="list-disc ml-5">
              {product.promotions.map((promo, index) => (
                <li key={index}>{promo}</li>
              ))}
            </ul>
          </div> */}

          {/* Nút Mua hàng và Thêm vào giỏ hàng */}
          <div className="flex space-x-4">
            <Link to={"/cartPage"}>
              <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition-all duration-300"
              onClick={handleAddToCart}>
                Mua hàng
              </button>
            </Link>
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition-all duration-300"
            onClick={handleAddToCart}>
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>

      {/* Modal for displaying the selected image */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
          onClick={() => setIsImageModalOpen(false)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  );
};

export default memo(DetailPage);
