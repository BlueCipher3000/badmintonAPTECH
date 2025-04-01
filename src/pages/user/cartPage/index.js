import { memo } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/cartContext";
import { toast } from "react-toastify";

const getFinalPrice = (price, sale = 0) => {
  const discount = sale ? (price * sale) / 100 : 0;
  return price - discount;
};

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (id, operation) => {
    const item = cart.find((item) => item.id === id);
    if (!item) return;

    const newQuantity =
      operation === "increase"
        ? item.quantity + 1
        : Math.max(1, item.quantity - 1);
    updateQuantity(id, newQuantity);
  };

  const total = cart.reduce(
    (acc, item) =>
      acc +
      getFinalPrice(item.price ?? 0, item.sale ?? 0) * (item.quantity ?? 1),
    0
  );

  const placeOrder = async () => {
    const cartItems = cart.map((item) => ({
      product_id: item.id,
      product_name: item.name,
      quantity: item.quantity,
      final_price: getFinalPrice(item.price ?? 0, item.sale ?? 0),
    }));

    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.final_price * item.quantity,
      0
    );
    console.log("Sending Order:", { cartItems, totalPrice });

    try {
      const response = await fetch("http://localhost:8000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartItems,
          total_price: totalPrice,
        }),
      });
  
      if (response.ok) {
        toast.success("Order placed successfully!");
        localStorage.removeItem("cart"); // Clear cart after order
      } else {
        const errorData = await response.json(); // Log error data for debugging
        console.error("Order Error:", errorData);
        toast.error("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Có lỗi xảy ra khi kết nối với server. Vui lòng thử lại.");
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="p-6 bg-white">
        <h1 className="text-2xl font-bold mb-6">GIỎ HÀNG</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">
            Giỏ hàng của bạn đang trống.
          </p>
        ) : (
          cart.map((item, index) => {
            console.log(
              `Item ID: ${item.id}, Initial Price: ${item.price}, Sale: ${
                item.sale
              }%, Final Price: ${getFinalPrice(item.price, item.sale)}`
            );
            return (
              <div
                key={item.id ?? `cart-item-${index}`}
                className="flex items-start border-b pb-4 mb-4"
              >
                <img
                  src={
                    item.img
                      ? `http://localhost:8000/storage/imgproducts/${item.img}`
                      : "/default-image.jpg"
                  }
                  alt={item.name ?? "Sản phẩm không có tên"}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold">
                    {item.name ?? "Không có tên"}
                  </h2>
                  <p className="text-sm font-medium mt-1">
                    {item.price
                      ? getFinalPrice(item.price, item.sale ?? 0).toLocaleString() + "₫"
                      : "N/A"}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="w-8 h-8 text-gray-500 border rounded-md"
                    onClick={() => handleQuantityChange(item.id, "decrease")}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={item.quantity ?? 1}
                    readOnly
                    className="w-10 text-center border rounded-md"
                  />
                  <button
                    className="w-8 h-8 text-gray-500 border rounded-md"
                    onClick={() => handleQuantityChange(item.id, "increase")}
                  >
                    +
                  </button>
                </div>
                <p className="w-20 text-right font-medium">
                  {(
                    getFinalPrice(item.price ?? 0, item.sale ?? 0) *
                    (item.quantity ?? 1)
                  ).toLocaleString()}
                  ₫
                </p>
                <button
                  className="ml-4 text-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                  Xóa
                </button>
              </div>
            );
          })
        )}

        {cart.length > 0 && (
          <div className="text-right mt-6">
            <p className="text-lg font-semibold">
              Tạm tính:{" "}
              <span className="text-gray-900">{total.toLocaleString()}₫</span>
            </p>
            <button
              className="px-6 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800"
              onClick={placeOrder}
            >
              Đặt hàng
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(CartPage);
