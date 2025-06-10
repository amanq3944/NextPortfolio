export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Blog Platform",
      description: "A modern blogging platform with rich text editing and social features.",
      colSpan: "sm:col-span-7",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description: "Analytics dashboard for tracking sales and customer behavior.",
      colSpan: "sm:col-span-5",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      description: "Workout tracking application with personalized training plans.",
      colSpan: "sm:col-span-12",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <section id="projects" className="relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-10 -top-20 h-40 w-40 rounded-full bg-purple-600 opacity-10 blur-3xl"></div>
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-amber-600 opacity-10 blur-3xl"></div>
      
      <div className="sm:m-20 m-5 grid place-items-center gap-y-5">
        {/* Header section */}
        <div className="grid place-items-center mb-12">
          <h3 className="text-sm font-medium text-amber-600 sm:text-lg border-b-2 border-amber-600/30 pb-1 tracking-wide mb-3">
            PORTFOLIO
          </h3>
          <div className="flex justify-center items-center relative">
            <h1 className="text-4xl font-bold text-purple-600 sm:text-6xl font-serif tracking-tight">
              My Recent
            </h1>
            <div className="relative ml-3">
              <div className="absolute -inset-1 bg-amber-600 rounded-full blur opacity-75"></div>
              <div className="relative bg-amber-600 rounded-full p-1">
                <h1 className="text-4xl font-bold sm:text-6xl font-serif text-white">W</h1>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-purple-600 sm:text-6xl font-serif tracking-tight">
              orks
            </h1>
          </div>
          <p className="mt-6 text-center text-gray-600 max-w-lg">
            Here are some of my recent projects. Each one represents a unique challenge and solution.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="m-10 grid gap-7 sm:grid-cols-12 w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl transition-all hover:shadow-2xl hover:shadow-purple-500/20 ${project.colSpan}`}
            >
              <div className="h-80 w-full overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center transition-all duration-500 translate-y-10 group-hover:translate-y-0">
                <h1 className="font-serif text-3xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                  {project.title}
                </h1>
                <p className="mb-6 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-300">
                  {project.description}
                </p>
                <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-all duration-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 delay-300">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <button className="mt-10 px-8 py-3 bg-gradient-to-r from-purple-600 to-amber-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
          View All Projects
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
  );
}