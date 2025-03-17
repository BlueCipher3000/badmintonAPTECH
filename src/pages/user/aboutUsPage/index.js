import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheck,
  FaBullseye,
  FaRegHandshake,
} from "react-icons/fa";
import { GiTrophyCup, GiTeamIdea } from "react-icons/gi";
import shopImage from "../../../assets/user/img/slide/slide-1.webp";
import teamImage from "../../../assets/user/img/slide/slide-1.webp";

const AboutUsPage = () => {
  return (
    <div className="container mx-auto mt-8 text-sm">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Chào mừng đến với Badmintond Shop
        </h1>
        <p className="mb-8">
          Badmintond Shop là điểm đến lý tưởng cho tất cả những người yêu thích
          cầu lông. Chúng tôi tự hào cung cấp những sản phẩm chất lượng nhất từ
          vợt cầu lông, giày cầu lông, balo túi xách cho đến phụ kiện cầu lông.
        </p>
        <img
          src={shopImage}
          alt="Shop Image"
          className="w-full h-auto rounded-lg shadow-lg mb-8"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src={teamImage}
            alt="Team Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">
            <GiTeamIdea className="inline-block mr-2" />
            Đội ngũ của chúng tôi
          </h2>
          <p>
            Đội ngũ của Badmintond Shop là những người đam mê cầu lông và có
            kinh nghiệm lâu năm trong lĩnh vực này. Chúng tôi luôn sẵn sàng tư
            vấn và hỗ trợ bạn chọn lựa những sản phẩm phù hợp nhất với nhu cầu
            của mình.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          <FaBullseye className="inline-block mr-2" />
          Sứ mệnh của chúng tôi
        </h2>
        <p className="text-center mb-4">
          Sứ mệnh của Badmintond Shop là mang đến những trải nghiệm mua sắm tốt
          nhất cho khách hàng và giúp bạn nâng cao kỹ năng chơi cầu lông của
          mình bằng các sản phẩm chất lượng.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <div className="flex flex-col items-center">
            <FaCheck className="text-4xl text-green-500 mb-2" />
            <p>Sản phẩm chất lượng</p>
          </div>
          <div className="flex flex-col items-center">
            <GiTrophyCup className="text-4xl text-yellow-500 mb-2" />
            <p>Dịch vụ hàng đầu</p>
          </div>
          <div className="flex flex-col items-center">
            <FaRegHandshake className="text-4xl text-blue-500 mb-2" />
            <p>Tư vấn tận tâm</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Liên hệ với chúng tôi</h2>
        <p className="mb-4">
          Bạn có thể liên hệ với chúng tôi qua các phương thức sau:
        </p>
        <div className="flex justify-center items-center space-x-8">
          <div className="flex items-center">
            <FaEnvelope className="text-2xl mr-2" />
            <p>Email: contact@badmintondshop.com</p>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-2xl mr-2" />
            <p>Số điện thoại: 0123456789</p>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-2xl mr-2" />
            <p>Địa chỉ: 123 Cầu Giấy, Hà Nội</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Giờ mở cửa</h2>
        <p className="mb-8">
          Thứ 2 - Thứ 6: 8:00 AM - 8:00 PM
          <br />
          Thứ 7: 9:00 AM - 5:00 PM
          <br />
          Chủ Nhật: 10:00 AM - 4:00 PM
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
