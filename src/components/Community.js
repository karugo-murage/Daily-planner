import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';  // Use QRCodeCanvas for canvas rendering
// Importing a QR code generator package (npm install qrcode.react)
import '../assets/index.css'; // Make sure to have your styles in place

function Community(){
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonation = () => {
    alert(`Thank you for your donation of $${donationAmount}!`);
    // Here, you'd integrate with a payment gateway like PayPal or Stripe
    setDonationAmount(''); // Reset the input after donation
  };

  return (
    <div className="community-container">
      <h2>Support Our Community</h2>

      {/* Donation Section */}
      <div className="donation-section">
        <h3>Donate to Support Us</h3>
        <input
          type="number"
          placeholder="Enter Amount"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          className="donation-input"
        />
        <button onClick={handleDonation} className="donation-button">
          Donate
        </button>
      </div>

      {/* QR Code Section */}
      <div className="qr-section">
        <h3>Join Our Telegram Channel</h3>
        <QRCodeCanvas
             value="https://t.me/your-telegram-channel"  // URL for your Telegram channel
             size={150}  // Set the size of the QR code
             className="qr-code"
        />
        <p>Scan the QR code to join our Telegram community!</p>
      </div>
    </div>
  );
};

export default Community;
