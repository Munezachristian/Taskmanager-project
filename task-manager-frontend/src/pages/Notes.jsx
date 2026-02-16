import { useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([
    { id: 1, title: "Project Ideas", content: "Brainstorm new features" },
    { id: 2, title: "Meeting Notes", content: "Follow up on client requirements" }
  ]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const handleAddNote = () => {
    if (!newNote.title || !newNote.content) return;
    setNotes([...notes, { id: Date.now(), ...newNote }]);
    setNewNote({ title: "", content: "" });
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-2xl p-8 border border-gray-700">
        <h1 className="text-4xl font-bold text-white mb-4">📝 Notes</h1>
        <p className="text-gray-400 text-lg mb-8">Keep track of your important notes and ideas.</p>
        
        {/* Add Note Form */}
        <div className="bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-gray-600 mb-6">
          <h3 className="text-white font-semibold mb-4">Create New Note</h3>
          <input
            type="text"
            placeholder="Note Title"
            value={newNote.title}
            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
            className="w-full bg-gray-800 border-gray-600 border text-white p-3 rounded-lg mb-4 focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-400"
          />
          <textarea
            placeholder="Note Content"
            value={newNote.content}
            onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
            className="w-full bg-gray-800 border-gray-600 border text-white p-3 rounded-lg mb-4 focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-400 h-24"
          />
          <button
            onClick={handleAddNote}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Add Note
          </button>
        </div>

        {/* Notes List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((note) => (
            <div key={note.id} className="bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-gray-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-semibold text-lg">{note.title}</h3>
                <button
                  onClick={() => handleDeleteNote(note.id)}
                  className="text-red-400 hover:text-red-300"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-400">{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notes;
