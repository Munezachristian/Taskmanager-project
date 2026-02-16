function Projects() {
  const projects = [
    {
      name: "Muneza Product",
      description: "Main project management platform",
      tasks: 24,
      progress: 65,
      team: "5 members"
    },
    {
      name: "Mobile App",
      description: "React Native mobile application",
      tasks: 18,
      progress: 45,
      team: "3 members"
    },
    {
      name: "API Development",
      description: "RESTful API backend services",
      tasks: 12,
      progress: 80,
      team: "4 members"
    },
    {
      name: "UI/UX Design",
      description: "Design system and components",
      tasks: 8,
      progress: 90,
      team: "2 members"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-2xl p-8 border border-gray-700">
        <h1 className="text-4xl font-bold text-white mb-4">📂 Projects</h1>
        <p className="text-gray-400 text-lg mb-8">Manage all your projects in one place.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-gray-600 hover:border-purple-500 transition-all">
              <h3 className="text-white font-semibold text-lg mb-2">{project.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 text-sm">Progress</span>
                  <span className="text-gray-300 text-sm">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: `${project.progress}%`}}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Tasks</span>
                  <p className="text-white font-semibold">{project.tasks}</p>
                </div>
                <div>
                  <span className="text-gray-400">Team</span>
                  <p className="text-white font-semibold">{project.team}</p>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 rounded-lg">
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
