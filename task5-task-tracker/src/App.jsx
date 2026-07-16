import React, { useState, useEffect } from 'react';

function App() {
  // 1. READ: Load tasks from LocalStorage when the app starts
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('growfinix-tasks');
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });
  
  const [inputValue, setInputValue] = useState('');

  // Save to LocalStorage automatically whenever the 'tasks' list changes
  useEffect(() => {
    localStorage.setItem('growfinix-tasks', JSON.stringify(tasks));
  }, [tasks]);

  // 2. CREATE: Add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  // 3. UPDATE: Toggle complete status
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // 4. DELETE: Remove a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Calculate progress
  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const progress = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <div className="min-h-screen bg-neutral-950 flex justify-center py-12 px-4 font-sans text-neutral-200">
      <div className="max-w-xl w-full">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 mb-2">
            Task Tracker
          </h1>
          <p className="text-neutral-400">Task 5: CRUD Operations & LocalStorage</p>
        </div>

        {/* Main Card */}
        <div className="bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-800 overflow-hidden">
          
          {/* Progress Bar */}
          <div className="bg-neutral-800 p-6 border-b border-neutral-800 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">Your Progress</h2>
              <p className="text-sm text-neutral-400">{completedCount} of {totalCount} tasks completed</p>
            </div>
            <div className="text-2xl font-black text-emerald-500">{progress}%</div>
          </div>
          <div className="h-2 bg-neutral-800 w-full">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="p-6 md:p-8">
            {/* Input Form */}
            <form onSubmit={addTask} className="flex gap-3 mb-8">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="What needs to be done?" 
                className="flex-1 bg-neutral-950 border border-neutral-800 text-white px-5 py-3 rounded-xl outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
              />
              <button 
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl transition duration-300 shadow-lg shadow-emerald-500/20"
              >
                Add
              </button>
            </form>

            {/* Task List */}
            <div className="space-y-3">
              {tasks.length === 0 ? (
                <div className="text-center py-10 border-2 border-dashed border-neutral-800 rounded-xl">
                  <p className="text-neutral-500">No tasks yet. Add one above!</p>
                </div>
              ) : (
                tasks.map((task) => (
                  <div 
                    key={task.id} 
                    className={`flex items-center justify-between p-4 rounded-xl border transition duration-300 ${task.completed ? 'bg-neutral-950/50 border-neutral-800/50' : 'bg-neutral-800 border-neutral-700 hover:border-emerald-500/50'}`}
                  >
                    <div className="flex items-center gap-4 flex-1 cursor-pointer" onClick={() => toggleTask(task.id)}>
                      {/* Custom Checkbox */}
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center border-2 transition ${task.completed ? 'bg-emerald-500 border-emerald-500' : 'border-neutral-500'}`}>
                        {task.completed && <span className="text-white text-sm font-bold">✓</span>}
                      </div>
                      
                      <span className={`flex-1 transition ${task.completed ? 'text-neutral-500 line-through' : 'text-white font-medium'}`}>
                        {task.text}
                      </span>
                    </div>

                    <button 
                      onClick={() => deleteTask(task.id)}
                      className="text-neutral-500 hover:text-red-400 p-2 transition"
                      title="Delete Task"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;