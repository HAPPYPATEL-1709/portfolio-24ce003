import React, { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setMessage("");
    }
  };

  return (
    <div className="page-container">
      <div className="card">
        <h1>Contact Me</h1>
        <p>Get in touch for collaborations, project inquiries, or questions.</p>

        {submitted && (
          <div style={{ background: "rgba(5, 150, 105, 0.2)", border: "1px solid #10b981", color: "#6ee7b7", padding: "12px", borderRadius: "8px", marginBottom: "16px" }}>
            ✓ Message transmitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>Your Message:</label>
          <textarea
            className="input-field"
            rows="4"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#94a3b8", marginBottom: "16px" }}>
            <span>Live Character Count: <strong>{message.length}</strong></span>
            <span>Status: {message.length > 0 ? "Editing" : "Empty"}</span>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <button type="submit" className="btn">
              Send Message
            </button>
            <button
              type="button"
              className="btn"
              style={{ background: "#334155" }}
              onClick={() => setShowHelp(!showHelp)}
            >
              {showHelp ? "Hide Instructions" : "Need Help?"}
            </button>
          </div>
        </form>

        {showHelp && (
          <div style={{ marginTop: "20px", padding: "14px", background: "#0f172a", borderRadius: "8px", border: "1px solid #334155", fontSize: "14px", color: "#cbd5e1" }}>
            💡 <strong>Help Note:</strong> Fill out the input field above and click Send Message to test state updates and lazy route rendering.
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;