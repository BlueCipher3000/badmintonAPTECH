import React from "react";
import { Link } from "react-router-dom";
import { memo } from "react";

const PayPage = () => {
  return (
    <div className="container mx-auto">
      <div className="p-6 max-w-7xl mx-auto flex space-x-8">
        {/* Left Section: Shipping Information */}
        <div className="flex-1 bg-white p-6 rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-4">Hardmode</h1>
          <nav className="text-sm text-gray-600 mb-4">
            <Link to="#" className="hover:underline">
              Giỏ hàng
            </Link>{" "}
            &gt;
            <Link to="#" className="hover:underline">
              Thông tin giao hàng
            </Link>{" "}
            &gt; Phương thức thanh toán
          </nav>
          <h2 className="text-xl font-semibold mb-4">Thông tin giao hàng</h2>
          <p className="text-sm text-gray-600 mb-4">
            Bạn đã có tài khoản?{" "}
            <Link to="#" className="text-blue-500 hover:underline">
              Đăng nhập
            </Link>
          </p>
          <form>
            {/* Name and Contact */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                placeholder="Số điện thoại"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
              />
            </div>
            <p className="text-sm text-red-500 mb-4">
              Số điện thoại phải bắt đầu bằng số 0 và bắt buộc đủ 10 số, không
              chứa ký tự đặc biệt và khoảng trắng.
            </p>
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:ring focus:ring-blue-300"
            />
            {/* Address */}
            <input
              type="text"
              placeholder="Địa chỉ"
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:ring focus:ring-blue-300"
            />
            {/* Province, District, Ward */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300">
                <option>Tỉnh / thành</option>
              </select>
              <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300">
                <option>Quận / huyện</option>
              </select>
              <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300">
                <option>Phường / xã</option>
              </select>
            </div>
            {/* Continue Button */}
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700"
            >
              Tiếp tục đến phương thức thanh toán
            </button>
          </form>
        </div>

        {/* Right Section: Cart Summary */}
        <div className="w-1/3 bg-white p-6 rounded-md shadow-md">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/danh_cau_long_co_tac_dung_gi_ky_thuat_danh_cau_dung_cho_nguoi_moi_1_b7ef934c1e.jpg"
              alt="Áo Thun"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <h3 className="text-sm font-semibold">Áo Thun Hardmode HAT13</h3>
              <p className="text-sm text-gray-500">Black / 2</p>
            </div>
            <p className="font-medium">159,000₫</p>
          </div>
          {/* Discount Code */}
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="text"
              placeholder="Mã giảm giá"
              className="flex-1 border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
            />
            <button className="bg-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-400">
              Sử dụng
            </button>
          </div>
          {/* Price Summary */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Tạm tính</span>
              <span>159,000₫</span>
            </div>
            <div className="flex justify-between">
              <span>Phí vận chuyển</span>
              <span>-</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Tổng cộng</span>
              <span>159,000₫</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PayPage);
