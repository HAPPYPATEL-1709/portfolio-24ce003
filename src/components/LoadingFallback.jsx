import React from "react";

/**
 * Meaningful Suspense Fallback UI
 * Renders an animated spinner, loading label, and skeleton placeholder
 * displayed while lazy-loaded route chunks are fetched over the network.
 */
function LoadingFallback({ message = "Loading route bundle..." }) {
  return (
    <div className="loading-fallback-container" role="status" aria-live="polite">
      <div className="loading-spinner" />
      <p className="loading-text">{message}</p>
      <span className="loading-badge">⚡ React.lazy() Chunk Splitting</span>

      {/* Pulsing Skeleton Placeholder */}
      <div className="skeleton-card">
        <div className="skeleton-line short" />
        <div className="skeleton-line medium" />
        <div className="skeleton-line" />
      </div>
    </div>
  );
}

export default LoadingFallback;
