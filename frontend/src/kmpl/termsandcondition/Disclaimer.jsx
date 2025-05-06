import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Disclaimer = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg, #004d00, #33cc33)", // Theme-based gradient
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Container>
        <div
          className="card shadow-lg p-4 bg-light"
          style={{ maxWidth: "900px", margin: "0 auto", overflow: "auto" }}
        >
          <h2 className="text-center mb-4">Disclaimer</h2>

          <h4>1. General Information</h4>
          <p>
            The information provided on the <strong>KMPL GRAND Real-Estate</strong> website is for general
            informational purposes only. While we strive to ensure accuracy, completeness, and reliability, we make no
            warranties or guarantees regarding the information's correctness.
          </p>

          <h4>2. No Legal or Financial Advice</h4>
          <p>
            The content on our website, including property listings, pricing, and market trends, is not intended to
            constitute legal, financial, or investment advice. Users are encouraged to seek professional consultation
            before making any real estate-related decisions.
          </p>

          <h4>3. Property Listings and Availability</h4>
          <p>
            <strong>KMPL GRAND Real-Estate</strong> does not guarantee the availability of properties listed on our
            website. Prices, descriptions, and terms are subject to change without notice. Interested buyers or renters
            should verify details with our authorized representatives.
          </p>

          <h4>4. Third-Party Links and Content</h4>
          <p>
            Our website may contain links to third-party websites for additional resources. We do not control or
            endorse these external sites and are not responsible for their content, accuracy, or privacy policies.
            Users should review third-party terms before engaging with external platforms.
          </p>

          <h4>5. Limitation of Liability</h4>
          <p>
            <strong>KMPL GRAND Real-Estate</strong> and its affiliates shall not be held liable for any direct,
            indirect, incidental, or consequential damages arising from the use of our website or reliance on the
            information provided. Users access the website at their own risk.
          </p>

          <h4>6. Changes to the Disclaimer</h4>
          <p>
            We reserve the right to update, modify, or change this disclaimer at any time. Any updates will be posted
            on this page with an effective date. Users are encouraged to review this page periodically.
          </p>

          <h4>7. Contact Information</h4>
          <p>For any inquiries related to this disclaimer, you can contact us at:</p>
          <p>
            <strong>Phone:</strong> +91-XXX-XXXX-XXX
          </p>

          <div className="text-center mt-4">
            <button className="btn btn-success" onClick={() => window.history.back()}>
              Back
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Disclaimer;
