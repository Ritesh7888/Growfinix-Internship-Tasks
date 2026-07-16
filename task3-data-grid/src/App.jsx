import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);

  // Fetch data when the page loads
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter and sort the data based on user input
  const filteredAndSortedUsers = users
    .filter((user) => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  const toggleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="min-h-screen bg-slate-950 p-8 text-slate-200 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-white mb-4">User Directory</h1>
          <p className="text-slate-400">Dynamic data grid with filtering and sorting capabilities.</p>
        </div>

        {/* Controls Section: Search and Sort */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <input 
            type="text" 
            placeholder="Search by name or email..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-800 text-white px-5 py-3 rounded-xl outline-none focus:border-blue-500 transition"
          />
          <button 
            onClick={toggleSort}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-lg shadow-blue-500/20"
          >
            Sort by Name ({sortOrder === 'asc' ? 'A-Z' : 'Z-A'})
          </button>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-20">
            <p className="text-xl text-slate-500 animate-pulse">Loading users...</p>
          </div>
        ) : (
          /* Data Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedUsers.length > 0 ? (
              filteredAndSortedUsers.map((user) => (
                <div key={user.id} className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 transition duration-300 shadow-lg">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {user.name.charAt(0)}
                  </div>
                  <h2 className="text-xl font-bold text-white mb-1">{user.name}</h2>
                  <p className="text-slate-400 text-sm mb-4">@{user.username}</p>
                  
                  <div className="space-y-2 text-sm text-slate-300">
                    <p><span className="text-slate-500 font-medium">Email:</span> {user.email}</p>
                    <p><span className="text-slate-500 font-medium">Company:</span> {user.company.name}</p>
                    <p><span className="text-slate-500 font-medium">Website:</span> {user.website}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-slate-500">
                No users found matching your search.
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default App;