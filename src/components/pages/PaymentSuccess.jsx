import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { backend_url } from '../../utils/Config';
import axios from 'axios';
import { toast } from 'react-toastify';

const PaymentSuccess = () => {
  const query = new URLSearchParams(useLocation().search);
  const reference = query.get("reference");
  const navigate = useNavigate();

  useEffect(() => {
    const placeOrderFromLocalStorage = async () => {
      const storedOrderData = localStorage.getItem("orderData");
      if (!storedOrderData) {
        toast.error("No order data found!");
        navigate("/");
        return;
      }

      const orderData = JSON.parse(storedOrderData);
      orderData.status="Confirmed";
      orderData.payment_Id = reference; 

      try {
        const response = await axios.post(`${backend_url}/api/v1/orders/singleOrderOnline`, orderData, {
          headers: { "Content-Type": "application/json" },
        });
      
        if (response?.data?.statusCode === 201) {
          console.log(response?.data);
          toast.success("🐕‍🦺 Wou wou...Order Placed ✅");
          localStorage.removeItem("orderData");
          setTimeout(() => navigate("/shop"), 7000);
        } else {
          toast.error("Some error occurred 😥");
        }
      } catch (err) {
        console.error("Order error:", err.response?.data || err.message);
      
        // Check if the order was actually created but response broke
        if (err.response?.data?.statusCode === 201) {
          toast.success("🐕‍🦺 Order Placed (with some issues) ✅");
          setTimeout(() => navigate("/shop"), 5000);
        }
      }
    };

    if (reference) {
      placeOrderFromLocalStorage();
    } else {
      toast.error("Payment reference missing!");
      navigate("/");
    }
  }, [reference, navigate]);

  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
      {reference && <h2 className="text-xl mt-2">Reference ID: {reference}</h2>}
      <p className="text-gray-600 mt-4">Placing your order... Please wait ⏳</p>
    </div>
  );
};

export default PaymentSuccess;
