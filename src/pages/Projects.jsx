const Projects = () => {
  const projects = [
    {
      name: "My Portfolio Website",
      duration: "Jan 2025 - Feb 2025",
      description: "Website Catalog twidecclay.",
      technologies: ["HTML", "HEIDI SQL", "CSS"],
      image: "/web.tokobaju.png",
      link: "https://github.com/username/portfolio",
    },
    {
      name: "To-Do App",
      duration: "Mar 2025",
      description: "Aplikasi to-do list sederhana dengan fitur tambah, hapus, dan tandai selesai.",
      technologies: ["React", "CSS Modules", "LocalStorage"],
      image: "donat.png",
      link: "https://github.com/username/todo-app",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8" id="projects">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{project.duration}</p>
              <p className="mb-4">{project.description}</p>
              <div className="mb-4">
                <p className="font-medium">Tech Used:</p>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {project.technologies.map((tech, idx) => (
                    <li
                      key={idx}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:underline font-medium"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
