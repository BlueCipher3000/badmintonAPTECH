import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaQuestionCircle,
} from "react-icons/fa";

const CustomerServicePage = () => {
  return (
    <div className="container mx-auto mt-8 text-sm">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Chăm Sóc Khách Hàng</h1>
        <p className="mb-8">
          Tại Badmintond Shop, chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn.
          Hãy liên hệ với chúng tôi qua các kênh dưới đây nếu bạn có bất kỳ câu
          hỏi hoặc vấn đề nào cần giải quyết.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaPhoneAlt className="text-4xl text-blue-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Hotline</h2>
          <p>0123456789</p>
          <p className="text-gray-600">Hỗ trợ 24/7</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaEnvelope className="text-4xl text-blue-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Email</h2>
          <p>support@badmintondshop.com</p>
          <p className="text-gray-600">Trả lời trong vòng 24 giờ</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaMapMarkerAlt className="text-4xl text-blue-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Địa chỉ</h2>
          <p>123 Cầu Giấy, Hà Nội</p>
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Giờ Làm Việc</h2>
        <div className="flex justify-center items-center space-x-4">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <FaClock className="text-4xl text-blue-500 mb-4" />
            <p>Thứ 2 - Thứ 6</p>
            <p>8:00 AM - 8:00 PM</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <FaClock className="text-4xl text-blue-500 mb-4" />
            <p>Thứ 7</p>
            <p>9:00 AM - 5:00 PM</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <FaClock className="text-4xl text-blue-500 mb-4" />
            <p>Chủ Nhật</p>
            <p>10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Câu Hỏi Thường Gặp</h2>
        <div className="text-left max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
            <div className="flex items-center mb-2">
              <FaQuestionCircle className="text-2xl text-blue-500 mr-2" />
              <h3 className="text-xl font-bold">Làm thế nào để đặt hàng?</h3>
            </div>
            <p>
              Bạn có thể đặt hàng trực tiếp trên website của chúng tôi bằng cách
              chọn sản phẩm và thêm vào giỏ hàng. Sau đó, bạn tiến hành thanh
              toán và điền thông tin giao hàng.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
            <div className="flex items-center mb-2">
              <FaQuestionCircle className="text-2xl text-blue-500 mr-2" />
              <h3 className="text-xl font-bold">
                Tôi có thể kiểm tra tình trạng đơn hàng của mình không?
              </h3>
            </div>
            <p>
              Có, bạn có thể kiểm tra tình trạng đơn hàng của mình bằng cách
              đăng nhập vào tài khoản của bạn trên trang web và vào phần "Đơn
              hàng của tôi".
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
            <div className="flex items-center mb-2">
              <FaQuestionCircle className="text-2xl text-blue-500 mr-2" />
              <h3 className="text-xl font-bold">
                Chính sách đổi trả của Badmintond Shop là gì?
              </h3>
            </div>
            <p>
              Chúng tôi chấp nhận đổi trả trong vòng 30 ngày kể từ ngày nhận
              hàng. Sản phẩm phải còn nguyên vẹn và chưa qua sử dụng. Bạn có thể
              liên hệ với chúng tôi để biết thêm chi tiết.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerServicePage;
