import React from 'react';
import profilePic from './assets/ritesh.jpg';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation Bar */}
      <nav className="fixed w-full top-0 bg-slate-900/90 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Ritesh.
          </h1>
          <ul className="hidden md:flex space-x-8 font-medium text-slate-300">
            <li><a href="#home" className="hover:text-blue-400 transition duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition duration-300">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-blue-400 font-semibold tracking-wide uppercase mb-2">Frontend Developer & Engineer</h2>
          <h3 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Ritesh</span>
          </h3>
          <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I am a B.Tech student in Electronics and Telecommunication Engineering. I am passionate about building modern web applications, working with microcontrollers, and aiming for leadership in the tech industry.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg shadow-blue-500/30">
              View Projects
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300">
              LinkedIn
            </a>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur opacity-70"></div>
            <img 
              src={profilePic} 
              alt="Ritesh" 
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-900 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Skills & About Section */}
      <section id="about" className="py-20 bg-slate-800/50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React.js', 'Tailwind CSS', 'JavaScript', 'HTML & CSS', '8051 Microcontrollers', 'C/C++', '5G & LTE Tech'].map((skill) => (
              <span key={skill} className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-xl text-slate-300 font-medium shadow-sm hover:border-blue-500 transition duration-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">Growfinix Internship Tasks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Task 1 Card */}
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:-translate-y-2 transition duration-300 shadow-xl">
            <h4 className="text-xl font-bold text-blue-400 mb-3">Task 1: Portfolio</h4>
            <p className="text-slate-400 mb-6 text-sm">A mobile-first, responsive personal portfolio built with React and Tailwind CSS.</p>
            <div className="flex gap-2 text-xs font-semibold text-slate-300">
              <span className="bg-slate-900 px-3 py-1 rounded-full">React</span>
              <span className="bg-slate-900 px-3 py-1 rounded-full">Tailwind</span>
            </div>
          </div>

          {/* Task 2 Placeholder */}
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 opacity-60">
            <h4 className="text-xl font-bold text-slate-400 mb-3">Task 2: Auth UI</h4>
            <p className="text-slate-500 mb-6 text-sm">Coming soon. Modern authentication UI with robust validation.</p>
          </div>

          {/* Task 3 Placeholder */}
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 opacity-60">
            <h4 className="text-xl font-bold text-slate-400 mb-3">Task 3: Data Grid</h4>
            <p className="text-slate-500 mb-6 text-sm">Coming soon. Dynamic data display grid fetching JSON data.</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 border-t border-slate-800">
        <p>© 2026 Ritesh. Built for the Growfinix Technology Internship.</p>
      </footer>
    </div>
  );
}

export default App;