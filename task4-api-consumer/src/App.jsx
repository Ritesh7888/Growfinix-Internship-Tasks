import React, { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetching data from a public REST API
      const response = await fetch('https://dummyjson.com/quotes/random');
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }
      const data = await response.json();
      setQuote(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Run once when the page loads
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="min-h-screen bg-stone-900 flex items-center justify-center p-6 font-sans text-stone-200">
      <div className="max-w-2xl w-full">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2">
            Daily Inspiration
          </h1>
          <p className="text-stone-400">Task 4: Interactive API Consumer</p>
        </div>

        <div className="bg-stone-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-stone-700 relative overflow-hidden">
          
          {/* Decorative background circle */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {loading ? (
            <div className="flex flex-col items-center justify-center h-48 space-y-4">
              <div className="w-12 h-12 border-4 border-stone-600 border-t-amber-500 rounded-full animate-spin"></div>
              <p className="text-stone-400 font-medium tracking-wide">Fetching data...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-48 text-center space-y-4">
              <div className="text-red-400 text-5xl">⚠️</div>
              <p className="text-red-400 font-medium">{error}</p>
              <button 
                onClick={fetchQuote}
                className="text-amber-400 hover:text-amber-300 underline text-sm transition"
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center space-y-8 relative z-10">
              <span className="text-6xl text-amber-500/40 absolute -top-6 left-0 md:-left-4 leading-none font-serif">"</span>
              
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed text-stone-100 px-4 md:px-8">
                {quote?.quote}
              </blockquote>
              
              <div className="w-16 h-1 bg-amber-500/50 rounded-full"></div>
              
              <p className="text-lg text-amber-400 font-semibold tracking-wide">
                — {quote?.author}
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <button 
            onClick={fetchQuote}
            disabled={loading}
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg shadow-orange-500/20 transform hover:-translate-y-1"
          >
            {loading ? 'Loading...' : 'Generate New Quote'}
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;