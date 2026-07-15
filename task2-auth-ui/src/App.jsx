import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert(`Success! You have ${isLogin ? 'logged in' : 'registered'} with ${data.email}`);
    reset();
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    reset();
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4 text-neutral-200 font-sans">
      <div className="max-w-md w-full bg-neutral-900 rounded-3xl shadow-2xl p-8 border border-neutral-800">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-neutral-400 text-sm">
            {isLogin ? 'Enter your details to sign in.' : 'Register to get started.'}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          {/* Name Field - Only for Registration */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1">Full Name</label>
              <input 
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-pink-400 text-xs mt-1">{errors.name.message}</p>}
            </div>
          )}

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1">Email Address</label>
            <input 
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address format"
                }
              })}
              className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-pink-400 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1">Password</label>
            <input 
              type="password"
              {...register("password", { 
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters"
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                  message: "Must include uppercase, lowercase, and a number"
                }
              })}
              className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-pink-400 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-4 rounded-xl transition duration-300 shadow-lg shadow-purple-500/20 mt-4"
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-8 flex items-center justify-center space-x-4">
          <div className="h-px bg-neutral-800 flex-1"></div>
          <span className="text-neutral-500 text-sm">or continue with</span>
          <div className="h-px bg-neutral-800 flex-1"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center py-2.5 px-4 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded-xl transition duration-300">
            <span className="font-medium text-sm">Google</span>
          </button>
          <button className="flex items-center justify-center py-2.5 px-4 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded-xl transition duration-300">
            <span className="font-medium text-sm">GitHub</span>
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-neutral-400">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={toggleMode}
            className="text-purple-400 hover:text-purple-300 font-semibold transition"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </p>

      </div>
    </div>
  );
}

export default App;