function Mail() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-2xl p-8 border border-gray-700">
        <h1 className="text-4xl font-bold text-white mb-4">Mail</h1>
        <p className="text-gray-400 text-lg mb-8">Manage your emails and communications here.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-gray-600">
            <h3 className="text-white font-semibold mb-3">✉️ Inbox</h3>
            <p className="text-gray-400">No emails yet</p>
          </div>
          
          <div className="bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-gray-600">
            <h3 className="text-white font-semibold mb-3">📤 Sent</h3>
            <p className="text-gray-400">No sent emails yet</p>
          </div>
          
          <div className="bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-gray-600">
            <h3 className="text-white font-semibold mb-3">⭐ Starred</h3>
            <p className="text-gray-400">No starred emails yet</p>
          </div>
          
          <div className="bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-gray-600">
            <h3 className="text-white font-semibold mb-3">🗑️ Trash</h3>
            <p className="text-gray-400">No deleted emails yet</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mail;
