function Apps() {
  const apps = [
    { name: "Slack", icon: "💬", description: "Team communication and messaging" },
    { name: "Google Drive", icon: "☁️", description: "Cloud storage and file sharing" },
    { name: "Zoom", icon: "📹", description: "Video conferencing and meetings" },
    { name: "GitHub", icon: "🐙", description: "Code repository and version control" },
    { name: "Figma", icon: "🎨", description: "Design and collaboration tool" },
    { name: "Jira", icon: "⚙️", description: "Project tracking and issue management" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-2xl p-8 border border-gray-700">
        <h1 className="text-4xl font-bold text-white mb-4">📱 Apps</h1>
        <p className="text-gray-400 text-lg mb-8">Connect with your favorite applications and tools.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <div key={index} className="bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-gray-600 hover:border-purple-500 transition-all cursor-pointer">
              <div className="text-4xl mb-3">{app.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{app.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{app.description}</p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 rounded-lg">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Apps;
