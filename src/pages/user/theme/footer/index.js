import { memo } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import logo from "../../../../assets/user/img/logo/logoshop.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-700">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Về chúng tôi</h3>
            <img className="w-52" src={logo} alt="Logo" />
            <p>Everyday Urban Streetwear</p>
            <p className="text-sm mt-2">© Bản quyền thuộc về Badminton</p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Liên hệ</h3>
            <p>
              Điện thoại: <span className="font-medium">0703 0303 04</span>
            </p>
            <p>
              Email CSKH:{" "}
              <a
                href="mailto:Badminton.vn@gmail.com"
                className="text-blue-500 hover:underline"
              >
                Badminton.vn@gmail.com
              </a>
            </p>
            <p>
              Email Liên Hệ Công Việc:{" "}
              <a
                href="mailto:Badminton.vn@gmail.com"
                className="text-blue-500 hover:underline"
              >
                Badminton.vn@gmail.com
              </a>
            </p>
            <p>Thứ Hai - Chủ nhật: 9h00 - 21h30</p>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Hỗ trợ</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Tài Khoản
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Chính sách vận chuyển
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Hướng dẫn mua hàng
                </a>
              </li>
            </ul>
          </div>

          {/* Store System Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Hệ thống cửa hàng</h3>
            <p>
              Hiện tại Badminton® chỉ hoạt động kinh doanh qua các kênh trực
              tuyến:
            </p>
            <p className="font-medium">Website, Facebook, Tiktok</p>
          </div>

          {/* Expansion Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Mở rộng</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Bài viết
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tuyển dụng
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-10 flex justify-center space-x-6 text-gray-500">
          <a href="#" className="hover:text-black">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-black">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-black">
            <FaTiktok size={24} />
          </a>
          <a href="#" className="hover:text-black">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
