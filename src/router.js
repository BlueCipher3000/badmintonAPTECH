import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/user/homePage";
import DetailPage from "./pages/user/detailPage";
import MasterLayout from "./pages/user/theme/masterLayout";
import { ROUTERS } from "./utils/router";
import ProfilePage from "./pages/user/profilePage";
import CartPage from "./pages/user/cartPage";
import PayPage from "./pages/user/payPage";
import ProductPage from "./pages/user/productPage";
import AboutUsPage from "./pages/user/aboutUsPage";
import CustomerServicePage from "./pages/user/customerServicePage";

const renderUserRouter = () => {
  return (
    <MasterLayout>
      <Routes>
        <Route path={ROUTERS.USER.HOME} element={<HomePage />} />
        <Route path={ROUTERS.USER.DETAIL} element={<DetailPage />} />
        <Route path={ROUTERS.USER.PROFILE} element={<ProfilePage />} />
        <Route path={ROUTERS.USER.CART} element={<CartPage />} />
        <Route path={ROUTERS.USER.PAY} element={<PayPage />} />
        <Route path={ROUTERS.USER.PRODUCT} element={<ProductPage />} />
        <Route path={ROUTERS.USER.ABOUTUS} element={<AboutUsPage />} />
        <Route
          path={ROUTERS.USER.CustomerService}
          element={<CustomerServicePage />}
        />
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
