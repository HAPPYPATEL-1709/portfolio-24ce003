import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

function Home() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js"
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

export default Home;