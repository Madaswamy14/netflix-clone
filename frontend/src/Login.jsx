// Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents the default form submission refresh
    setError('');
    
    // Frontend Validation
    if (!email || !password) {
      setError('Please enter a valid email or phone number.');
      return;
    }

    setIsLoading(true);

    try {
      // API Call to our Express backend
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password
      });

      if (response.status === 200) {
        // Redirect on success
        navigate('/dashboard');
      }
    } catch (err) {
      // Handle backend errors (e.g., 401 Unauthorized)
      setError(err.response?.data?.error || 'An error occurred during login.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 sm:bg-transparent sm:bg-gradient-to-b sm:from-black/80 sm:to-black/80"></div>
      
      {/* Form Container */}
      <div className="relative z-10 w-full max-w-[450px] bg-black/75 p-16 rounded-md">
        <h1 className="text-3xl font-bold text-white mb-7">Sign In</h1>
        
        {error && (
          <div className="bg-[#e87c03] text-white p-3 mb-4 rounded text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input 
            type="email" 
            placeholder="Email or phone number" 
            className="p-4 bg-[#333] text-white rounded focus:outline-none focus:bg-[#454545]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="p-4 bg-[#333] text-white rounded focus:outline-none focus:bg-[#454545]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="submit" 
            disabled={isLoading}
            className="bg-[#e50914] text-white p-4 font-bold rounded mt-6 hover:bg-[#c11119] transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-16 text-[#737373] text-sm">
          <p>New to Netflix? <span className="text-white hover:underline cursor-pointer">Sign up now.</span></p>
          <p className="mt-4 text-xs">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;