function Projects() {

  const projects = [
    "Portfolio Website",
    "Library Management System",
    "Weather App"
  ];

  return (
    <div>

      <h2>Projects</h2>

      <ul>

        {projects.map((project) => (

          <li key={project}>
            {project}
          </li>

        ))}

      </ul>

    </div>
  );
}

export default Projects;