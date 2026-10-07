import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

function Home() {
  const skills = [
    "HTML5 / CSS3",
    "JavaScript (ES6+)",
    "React 19 & Hooks",
    "Code Splitting & Lazy Loading",
    "Node.js & Express",
    "MongoDB & Mongoose",
    "JWT Authentication"
  ];

  return (
    <div className="page-container">
      <div className="card">
        <Header name="Happy Ardeshana" themeColor="#38bdf8" />
        <About />
        <Skills skillList={skills} />
      </div>

      <Footer email="ardeshanahappy@gmail.com" />
    </div>
  );
}

export default Home;