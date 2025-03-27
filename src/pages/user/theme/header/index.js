import { memo, useState } from "react";
import {
  AiOutlineBell,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineDown,
  AiOutlineMenu,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../../../utils/router";
import logo from "../../../../assets/user/img/logo/logoshop.jpg";

const Header = () => {
  const [menus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Sản phẩm",
      path: ROUTERS.USER.PRODUCT,
      child: [
        { name: "Linling", path: "" },
        { name: "Yonex", path: "" },
        { name: "Kumpoo", path: "" },
        { name: "Kawasaki", path: "" },
        { name: "Victor", path: "" },
        { name: "VS", path: "" },
      ],
    },
    {
      name: "Chăm sóc khách hàng",
      path: ROUTERS.USER.CustomerService,
    },
    {
      name: "Giới thiệu",
      path: ROUTERS.USER.ABOUTUS,
    },
    {
      name: "Liên hệ",
      path: "",
    },
  ]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenSubmenuIndex(null); // Đóng tất cả các submenu khi đóng/mở mobile menu
  };

  const toggleSubmenu = (index) => {
    if (openSubmenuIndex === index) {
      setOpenSubmenuIndex(null); // Đóng submenu nếu đã mở
    } else {
      setOpenSubmenuIndex(index); // Mở submenu mới
    }
  };

  return (
    <>
      <div className="header-topbar bg-black text-center py-1">
        <p className="text-white font-normal text-xs tracking-wide">
          Badminton is coming back!!!
        </p>
      </div>

      <header className="header-main">
        <div className="header__top">
          <div className="container mx-auto">
            <div className="row grid grid-cols-3 gap-4 items-center">
              <div className="flex justify-start md:hidden">
                <button onClick={toggleMobileMenu}>
                  <AiOutlineMenu className="text-2xl text-gray-600 font-light" />
                </button>
              </div>
              <div className="flex justify-start hidden md:flex">
                <Link to="#">
                  <AiOutlineSearch className="text-2xl text-gray-600 font-light" />
                </Link>
              </div>
              <div className="header__logo flex justify-center">
                <img className="w-52" src={logo} alt="Logo" />
              </div>
              <div className="header-actions flex justify-end">
                <ul className="flex space-x-6">
                  <li className="relative">
                    <AiOutlineBell className="text-xl text-gray-600 font-light" />
                    <span className="bg-gray-500 size-4 rounded-full text-white block text-center text-xsm absolute left-2.5 top-2">
                      2
                    </span>
                  </li>
                  <li>
                    <Link to="#">
                      <AiOutlineUser className="text-xl text-gray-600 font-light" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <AiOutlineHeart className="text-xl text-gray-600 font-light" />
                    </Link>
                  </li>
                  <li>
                    <Link to="CartPage">
                      <AiOutlineShoppingCart className="text-xl text-gray-600 font-light" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <nav className="header__nav bg-white shadow-md py-2">
          <div className="container mx-auto">
            {/* Desktop Menu */}
            <ul className="hidden md:flex justify-around items-center space-x-4">
              {menus.map((menu, index) => (
                <li
                  key={index}
                  className={`group relative text-sm font-light pb-1 ${
                    menu.child
                      ? "text-gray-600 hover:text-black"
                      : "after:absolute after:left-0 after:bottom-0 after:bg-stone-700 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300 text-gray-600"
                  }`}
                >
                  <Link to={menu?.path} className="flex items-center">
                    {menu?.name}
                    {menu.child && (
                      <AiOutlineDown className="ml-2 text-xs text-gray-500" />
                    )}
                  </Link>
                  {menu.child && (
                    <ul className="header__nav__dropdown w-52 mt-2 bg-gray-50 rounded-lg shadow-lg p-2 absolute hidden group-hover:block z-10">
                      {menu.child.map((childItem, childKey) => (
                        <li
                          key={`${index}-${childKey}`}
                          className="py-1 px-3 hover:bg-gray-200"
                        >
                          <Link
                            to={childItem.path}
                            className="text-sm text-gray-600 hover:text-gray-800"
                          >
                            {childItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <ul className="md:hidden mt-4">
                {menus.map((menu, index) => (
                  <li
                    key={index}
                    className="text-sm font-light pb-1 text-gray-600 border-b"
                  >
                    {menu.child ? (
                      <div className="relative">
                        <button
                          onClick={() => toggleSubmenu(index)}
                          className="w-full flex items-center justify-between py-2"
                        >
                          <span>{menu.name}</span>
                          <AiOutlineDown
                            className={`text-xs text-gray-500 transition-transform ${
                              openSubmenuIndex === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openSubmenuIndex === index && (
                          <ul className="pl-4 bg-gray-50">
                            {menu.child.map((childItem, childKey) => (
                              <li
                                key={`${index}-${childKey}`}
                                className="py-2 px-3 hover:bg-gray-200"
                              >
                                <Link
                                  to={childItem.path}
                                  className="text-sm text-gray-600 hover:text-gray-800 block"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {childItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={menu.path}
                        className="flex items-center py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {menu.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default memo(Header);
