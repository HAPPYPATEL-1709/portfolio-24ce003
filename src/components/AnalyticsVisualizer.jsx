import React, { useState, useMemo } from "react";

/**
 * Heavy Interactive Component (Simulating an analytics / chart library)
 * Used to demonstrate component-level code splitting & lazy loading
 */
function AnalyticsVisualizer() {
  const [metric, setMetric] = useState("traffic");

  // Heavy computation simulation
  const dataPoints = useMemo(() => {
    const points = [];
    for (let i = 1; i <= 12; i++) {
      points.push({
        month: `M${i}`,
        value: Math.floor(Math.sin(i / 2) * 40 + 60 + Math.random() * 20),
        latency: Math.floor(10 + Math.random() * 15)
      });
    }
    return points;
  }, [metric]);

  return (
    <div className="card" style={{ marginTop: "24px", borderColor: "#818cf8" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <div>
          <h3 style={{ color: "#818cf8", fontSize: "18px" }}>📊 Performance & Bundle Metrics (Heavy Component)</h3>
          <p style={{ margin: "4px 0 0", fontSize: "13px" }}>Dynamically loaded via React.lazy() on demand</p>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            className="btn"
            style={{ padding: "6px 12px", fontSize: "12px", background: metric === "traffic" ? "#4f46e5" : "#334155" }}
            onClick={() => setMetric("traffic")}
          >
            Traffic
          </button>
          <button
            className="btn"
            style={{ padding: "6px 12px", fontSize: "12px", background: metric === "latency" ? "#4f46e5" : "#334155" }}
            onClick={() => setMetric("latency")}
          >
            Latency
          </button>
        </div>
      </div>

      {/* SVG Bar Chart */}
      <div style={{ height: "140px", display: "flex", alignItems: "flex-end", gap: "12px", padding: "10px 0", borderBottom: "1px solid #334155" }}>
        {dataPoints.map((pt, idx) => {
          const barHeight = metric === "traffic" ? pt.value : pt.latency * 4;
          return (
            <div key={idx} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <div
                style={{
                  width: "100%",
                  height: `${barHeight}px`,
                  background: "linear-gradient(180deg, #818cf8 0%, #4338ca 100%)",
                  borderRadius: "4px 4px 0 0",
                  transition: "height 0.4s ease"
                }}
                title={`${pt.month}: ${metric === "traffic" ? pt.value : pt.latency}ms`}
              />
              <span style={{ fontSize: "10px", color: "#94a3b8" }}>{pt.month}</span>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "12px", fontSize: "12px", color: "#94a3b8" }}>
        <span>Optimized Bundle Chunk: <strong>AnalyticsVisualizer.chunk.js</strong></span>
        <span style={{ color: "#34d399" }}>● Isolated Execution</span>
      </div>
    </div>
  );
}

export default AnalyticsVisualizer;
