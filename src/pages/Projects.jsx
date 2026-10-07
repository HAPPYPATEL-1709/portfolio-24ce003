import React, { useState, useEffect, lazy, Suspense } from "react";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

// Lazy load the heavy AnalyticsVisualizer component on-demand
const AnalyticsVisualizer = lazy(() => import("../components/AnalyticsVisualizer"));

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/facebook/repos?per_page=6")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        return response.json();
      })
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => {
        // Provide graceful fallback repo cards if network fails or rate limited
        setRepos([
          { id: 1, name: "task-manager-api", html_url: "https://github.com/HAPPYPATEL-1709/task-manager-api-24ce003", description: "Node.js/Express JWT Authentication backend" },
          { id: 2, name: "task-manager-frontend", html_url: "https://github.com/HAPPYPATEL-1709/task-manager-frontend-24ce003", description: "React 19 Task Management SPA" },
          { id: 3, name: "student-portfolio", html_url: "https://github.com/HAPPYPATEL-1709/portfolio-24ce003", description: "React Code Splitting & Performance Optimization" }
        ]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-container">
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <h1>GitHub Projects & Repositories</h1>
            <p>Demonstrating Route-based and Component-level Lazy Loading with Suspense</p>
          </div>

          <button
            className="btn"
            onClick={() => setShowAnalytics(!showAnalytics)}
            style={{ background: showAnalytics ? "#475569" : "#2563eb" }}
          >
            {showAnalytics ? "Hide Analytics Chunk" : "⚡ Load Heavy Analytics (Lazy Component)"}
          </button>
        </div>

        {/* Supplementary: Component-level Lazy Loading */}
        {showAnalytics && (
          <Suspense
            fallback={
              <div style={{ padding: "20px", textAlign: "center", color: "#818cf8" }}>
                <div className="loading-spinner" style={{ width: "32px", height: "32px", margin: "0 auto 10px" }} />
                <span>Loading Analytics Chunk dynamically...</span>
              </div>
            }
          >
            <AnalyticsVisualizer />
          </Suspense>
        )}

        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <div className="projects-grid">
            {repos.map((repo) => (
              <div key={repo.id} className="project-card">
                <div>
                  <h3>📁 {repo.name}</h3>
                  <p style={{ fontSize: "13px", marginTop: "6px" }}>
                    {repo.description || "Open source repository repository showcasing modern web architecture."}
                  </p>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub ↗
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;