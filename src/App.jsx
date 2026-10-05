import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python"
  ];

  return (
    <div>

      <Header
        name="Happy Ardeshana"
        themeColor="blue"
      />

      <About />

      <Skills
        skillList={skills}
      />

      <Footer
        email="ardeshanahappy@gmail.com"
      />

    </div>
  );
}

export default App;