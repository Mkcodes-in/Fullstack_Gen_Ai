import { useState } from 'react';
import ui from '../assets/ui.png';
import Register from './Register';
import '../pages/style/style.css';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  function toggleMode() {
    setIsLogin(prev => !prev);
  }

  return (
    <div className="flex min-h-screen">
      {/* Left side image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src={ui}
          alt="login"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-lg text-white/90">Sign in to continue your journey</p>
          </div>
        </div>
      </div>

      {/* Right side form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Sign In' : 'Create Account'}
            </h2>
            <p className="text-gray-600">
              {isLogin
                ? 'Please enter your details to sign in'
                : 'Fill in the form to get started'}
            </p>
          </div>

          <Register
            isLogin={isLogin}
            setIsLogin={setIsLogin}
          />

          {/* Toggle between login and register */}
          <p className="text-center mt-6 text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={toggleMode}
              className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}