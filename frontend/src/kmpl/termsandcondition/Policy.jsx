import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Policy = () => {
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
          <h2 className="text-center mb-4">Privacy Policy</h2>

          <h4>1. Introduction</h4>
          <p>
            Welcome to <strong>KMPL GRAND Real-Estate</strong>. Your privacy is important to us. This Privacy Policy
            outlines how we collect, use, and protect your personal information when you interact with our website and
            services.
          </p>

          <h4>2. Information We Collect</h4>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, and any details you provide when
              contacting us or signing up for services.
            </li>
            <li>
              <strong>Property-Related Information:</strong> Details about properties you list or inquire about.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, device information, and website usage data.
            </li>
          </ul>

          <h4>3. How We Use Your Information</h4>
          <ul>
            <li>Provide, maintain, and improve our real estate services.</li>
            <li>Respond to inquiries and provide customer support.</li>
            <li>Send updates, promotions, and other relevant information (you can opt-out anytime).</li>
            <li>Comply with legal obligations and prevent fraudulent activities.</li>
          </ul>

          <h4>4. Sharing Your Information</h4>
          <p>We do not sell or rent your personal information. However, we may share your data with:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Trusted third-party partners assisting in website operations and
              marketing.
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required by law or to protect our rights and safety.
            </li>
          </ul>

          <h4>5. Data Security</h4>
          <p>
            We implement security measures to protect your personal information, but no method of transmission over the
            internet is 100% secure. We encourage users to exercise caution while sharing personal details online.
          </p>

          <h4>6. Cookies and Tracking Technologies</h4>
          <p>
            Our website may use cookies to enhance user experience. You can modify your browser settings to decline
            cookies if preferred.
          </p>

          <h4>7. Your Rights and Choices</h4>
          <ul>
            <li>Access, update, or delete your personal data.</li>
            <li>Opt-out of marketing communications.</li>
            <li>Request information about how we process your data.</li>
          </ul>

          <h4>8. Third-Party Links</h4>
          <p>
            Our website may contain links to third-party sites. We are not responsible for their privacy practices and
            encourage you to review their policies.
          </p>

          <h4>9. Updates to This Privacy Policy</h4>
          <p>We may update this policy from time to time. Any changes will be posted on this page with an updated effective date.</p>

          <h4>10. Contact Information</h4>
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

export default Policy;
