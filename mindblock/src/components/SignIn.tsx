import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { Brain } from "lucide-react";
import Button from "./atoms/Button";
import Input from "./atoms/Input";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore((state) => state.login);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(formData.email, formData.password);
      // Redirect to the page they tried to visit or home
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-[#0a0a0a] px-6 py-8 bg-gradient-to-r from-[rgba(0,180,255,0.05)] to-transparent'>
      <div className='w-full max-w-md p-6 rounded-lg backdrop-blur-md bg-black/75 border border-cyan-400/20 shadow-lg shadow-cyan-400/10'>
        
        {/* Logo */}
        <div className='flex justify-center mb-6'>
          <div className='flex items-center justify-center w-12 h-12 rounded-full border-2 border-cyan-400 text-cyan-400 shadow-md shadow-cyan-400/50 text-xl font-bold'>
            <Brain />
          </div>
        </div>

        {/* Title */}
        <h1 className='text-2xl font-primary font-semibold text-white text-center mb-1'>
          Welcome Back
        </h1>
        <p className='text-gray-400 text-center text-sm mb-6'>
          Login to continue your puzzle-solving journey
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className='space-y-5 border-1 border-[#212122] p-6 rounded-lg'>
          {error && (
            <div className="bg-red-500 text-white p-3 rounded-md text-sm">
              {error}
            </div>
          )}

          {/* EMAIL FIELD  */}
          <div className='space-y-1'>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <Input
              id='email'
              type='email'
              placeholder='your.email@example.com'
              icon='mail'
              className={
                error ? "border-red-500 focus:border-red-500" : ""
              }
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* PASSWORD FIELD  */}
          <div className='space-y-1'>
            <div className="flex justify-between items-center">
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <small className='text-cyan-400 cursor-pointer hover:underline'>
                Forgot Password?
              </small>
            </div>

            <Input
              id='password'
              type='password'
              placeholder='••••••••'
              icon='lock'
              className={
                error ? "border-red-500 focus:border-red-500" : ""
              }
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <Button
            type='submit'
            variant='primary'
            fullWidth
            className='mt-2 cursor-pointer'
          >
            Login
          </Button>

          <div className='text-center mt-6'>
            <p className='text-gray-400 text-sm'>
              Don't have an account?{" "}
              <a
                href='/signup'
                className='text-cyan-400 font-medium hover:underline'
              >
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
