import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page-container" style={{ textAlign: "center", paddingTop: "60px" }}>
      <div className="card">
        <h1 style={{ fontSize: "64px", color: "#f43f5e" }}>404</h1>
        <h2>Page Not Found</h2>
        <p>The requested route does not exist or has been moved.</p>
        <Link to="/" className="btn" style={{ display: "inline-block", marginTop: "16px" }}>
          ← Return to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;