import { memo } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (operation) => {
    if (operation === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (operation === "increase") {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      <div className="container mx-auto mt-5">
        <div className="p-6 bg-white">
          <h1 className="text-2xl font-bold mb-6">GIỎ HÀNG</h1>

          <div className="flex items-start border-b pb-4 mb-4">
            {/* Image */}
            <img
              src="https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/danh_cau_long_co_tac_dung_gi_ky_thuat_danh_cau_dung_cho_nguoi_moi_1_b7ef934c1e.jpg"
              alt="Áo Thun Hardmode"
              className="w-20 h-20 object-cover rounded-md"
            />

            {/* Product Details */}
            <div className="flex-1 ml-4">
              <h2 className="text-lg font-semibold">Áo Thun Hardmode HAT13</h2>
              <p className="text-sm text-gray-500">Black / 2</p>
              <p className="text-sm font-medium mt-1">159,000₫</p>
            </div>

            {/* Quantity */}
            <div className="flex items-center space-x-2">
              <button
                className="w-8 h-8 text-gray-500 border rounded-md"
                onClick={() => handleQuantityChange("decrease")}
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-10 text-center border rounded-md"
              />
              <button
                className="w-8 h-8 text-gray-500 border rounded-md"
                onClick={() => handleQuantityChange("increase")}
              >
                +
              </button>
            </div>

            {/* Price */}
            <p className="w-20 text-right font-medium">159,000₫</p>
          </div>

          {/* Summary */}
          <div className="text-right">
            <p className="mb-1 text-lg font-semibold">
              Tạm tính: <span className="text-gray-900">159,000₫</span>
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Các loại phí khác sẽ được tính trong phần thanh toán
            </p>

            {/* Checkout Button */}
            <Link to="/paypage">
              <button className="px-6 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800">
                Thanh toán
              </button>
            </Link>

            {/* Notes */}
            <textarea
              placeholder="Ghi chú"
              className="w-full mt-4 border rounded-md p-2 text-gray-700"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(CartPage);
