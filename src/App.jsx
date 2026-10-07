import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import LoadingFallback from "./components/LoadingFallback";

/**
 * Practical 8: Performance Optimization and Lazy Loading in React
 * Route-based code splitting using dynamic import() and React.lazy()
 */
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <div className="app">
      <NavBar />
      <Suspense fallback={<LoadingFallback message="Loading requested route chunk..." />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;