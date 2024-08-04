// src/pages/PaymentSuccessPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/PaymentSuccessPage.css'; // Create this CSS file for styling

const PaymentSuccessPage: React.FC = () => {
  return (
    <div className="payment-success-page">
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase. Your payment has been processed successfully.</p>
      <Link to="/">
        <button className="back-to-home-button">Back to Home</button>
      </Link>
    </div>
  );
};

export default PaymentSuccessPage;
