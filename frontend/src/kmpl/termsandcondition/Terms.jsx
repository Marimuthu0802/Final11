import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TermsAndConditions = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg, #004d00, #33cc33)", // Logo colors
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="container">
        <div className="card shadow-lg p-4 bg-light" style={{ maxWidth: "900px", margin: "0 auto", overflow: "auto" }}>
          <h2 className="text-center mb-4">Terms and Conditions</h2>

          <h4>1. Introduction</h4>
          <p>
            Welcome to <strong>KMPL Real Estate</strong>. By accessing our website and services, you agree to comply with these Terms and Conditions.
          </p>

          <h4>2. User Responsibilities</h4>
          <ul>
            <li>Users must be at least <strong>18 years old</strong>.</li>
            <li>All information provided must be <strong>accurate and truthful</strong>.</li>
            <li>Fraudulent activities such as property misrepresentation are strictly prohibited.</li>
          </ul>

          <h4>3. Property Listings & Transactions</h4>
          <ul>
            <li>KMPL Real Estate acts as a marketplace; we do not own the listed properties.</li>
            <li>All transactions are conducted at the buyer and seller’s own risk.</li>
            <li>Users must follow local real estate laws when listing or purchasing properties.</li>
          </ul>

          <h4>4. Payments & Fees</h4>
          <ul>
            <li>KMPL Real Estate may charge <strong>service fees</strong> for transactions.</li>
            <li>All payments must be made through <strong>approved payment methods</strong>.</li>
            <li>All fees are <strong>non-refundable</strong> unless stated otherwise.</li>
          </ul>

          <h4>5. Privacy Policy</h4>
          <p>We respect your privacy and follow data protection laws. Your personal data will only be used for real estate transactions.</p>

          <h4>6. Limitation of Liability</h4>
          <p>KMPL Real Estate is not responsible for property defects, misrepresentations, or transaction disputes.</p>

          <h4>7. Governing Law & Dispute Resolution</h4>
          <p>These Terms are governed by the laws of [Your Country/State]. Any disputes shall be resolved through arbitration.</p>

          <h4>8. Contact Information</h4>
          <p>
            <strong>Phone:</strong> +91-XXX-XXXX-XXX
          </p>

          <div className="text-center mt-4">
            <button className="btn btn-success" onClick={() => window.history.back()}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
