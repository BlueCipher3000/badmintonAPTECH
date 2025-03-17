import { useState, memo } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { FaUser, FaBoxOpen, FaTruck } from "react-icons/fa"; // Import React icons

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState("Tài khoản của tôi");
  const [activeSubSection, setActiveSubSection] = useState("");

  const renderSubContent = () => {
    if (activeSection === "Tài khoản của tôi") {
      switch (activeSubSection) {
        case "Thông tin của tôi":
          return <p>Đây là thông tin của tôi...</p>;
        case "Sổ địa chỉ":
          return <p>Đây là sổ địa chỉ của tôi...</p>;
        default:
          return <p>Chọn một mục để xem chi tiết.</p>;
      }
    }
    return null;
  };

  const renderContent = () => {
    switch (activeSection) {
      case "Tài khoản của tôi":
        return (
          <>
            <div className="account-nav-head text-xl font-bold mb-2">
              Chào User
            </div>
            <ul className="account-list-item">
              <li className="account-item flex items-center py-1">
                <FaUser className="mr-2" /> Member
              </li>
            </ul>
            <ul className="pl-4">
              <li
                className="py-1 text-blue-500 hover:text-blue-700 cursor-pointer"
                onClick={() => setActiveSubSection("Thông tin của tôi")}
              >
                Thông tin của tôi
              </li>
              <li
                className="py-1 text-blue-500 hover:text-blue-700 cursor-pointer"
                onClick={() => setActiveSubSection("Sổ địa chỉ")}
              >
                Sổ địa chỉ
              </li>
            </ul>
            {renderSubContent()}
          </>
        );
      case "Đơn hàng của tôi":
        return (
          <>
            <div className="account-nav-head text-xl font-bold mb-2">
              Đơn hàng của tôi
            </div>
            <ul className="account-list-item">
              <li className="account-item flex items-center py-1">
                <FaBoxOpen className="mr-2" /> Đang xử lý
              </li>
              <li className="account-item flex items-center py-1">
                <FaTruck className="mr-2" /> Chờ lấy hàng
              </li>
              <li className="account-item flex items-center py-1">
                <FaTruck className="mr-2" /> Đang giao
              </li>
            </ul>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Xem tất cả
            </a>
          </>
        );
      case "Sản phẩm đã xem":
        return (
          <>
            <div className="account-nav-head text-xl font-bold mb-2">
              Sản phẩm đã xem
            </div>
            <ul className="account-list-item">
              <li className="account-item py-1">Sản phẩm 1</li>
              <li className="account-item py-1">Sản phẩm 2</li>
            </ul>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="w-full bg-gray-100">
        <div className="container flex items-center mx-auto p-2">
          <a href="/">
            <p className="text-xs text-gray-500">Trang chủ</p>
          </a>
          <AiOutlineRight className="text-xsm mx-1" />
          <a href="#">
            <p className="text-xs text-gray-500">Thông tin của tôi</p>
          </a>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex p-4">
          <aside className="p-2">
            <h2 className="text-2xl font-bold">
              <a href="#">Trung tâm cá nhân</a>
            </h2>
            <ul className="account-sidebar-menu">
              <li className="sidebar-menu-item">
                <a
                  href="#"
                  className={`text-blue-500 hover:text-blue-700 ${
                    activeSection === "Tài khoản của tôi" ? "font-bold" : ""
                  }`}
                  onClick={() => {
                    setActiveSection("Tài khoản của tôi");
                    setActiveSubSection("");
                  }}
                >
                  Tài khoản của tôi
                </a>
                <ul className="pl-4">
                  <li
                    className="py-1 text-blue-500 hover:text-blue-700 cursor-pointer"
                    onClick={() => setActiveSubSection("Thông tin của tôi")}
                  >
                    Thông tin của tôi
                  </li>
                  <li
                    className="py-1 text-blue-500 hover:text-blue-700 cursor-pointer"
                    onClick={() => setActiveSubSection("Sổ địa chỉ")}
                  >
                    Sổ địa chỉ
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-item">
                <a
                  href="#"
                  className={`text-blue-500 hover:text-blue-700 ${
                    activeSection === "Đơn hàng của tôi" ? "font-bold" : ""
                  }`}
                  onClick={() => setActiveSection("Đơn hàng của tôi")}
                >
                  Đơn hàng của tôi
                </a>
                <ul className="pl-4">
                  <li className="py-1">Tất cả các đơn hàng</li>
                  <li className="py-1">Đơn hàng xử lý</li>
                  <li className="py-1">Đơn hàng đang giao</li>
                  <li className="py-1">Đơn hàng đã giao</li>
                  <li className="py-1">Đơn hàng đã huỷ</li>
                  <li className="py-1">Đơn hàng Trả lại</li>
                </ul>
              </li>
              <li className="sidebar-menu-item">
                <a
                  href="#"
                  className={`text-blue-500 hover:text-blue-700 ${
                    activeSection === "Sản phẩm đã xem" ? "font-bold" : ""
                  }`}
                  onClick={() => setActiveSection("Sản phẩm đã xem")}
                >
                  Sản phẩm đã xem
                </a>
                <ul className="pl-4">
                  <li className="py-1">Đã xem gần đây</li>
                </ul>
              </li>
              <li className="sidebar-menu-item">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Đăng xuất
                </a>
              </li>
            </ul>
          </aside>
          <main className="pl-2 w-3/4">
            <section className="account-content">
              <div className="box-account p-4 border rounded shadow">
                {renderContent()}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default memo(ProfilePage);
