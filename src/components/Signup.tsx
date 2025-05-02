import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Import your existing components here

import Button from './atoms/Button';
import Input from './atoms/Input';
import { Brain } from 'lucide-react';

// Define the validation schema with Zod
const signupSchema = z.object({
  username: z.string().min(3, { message: 'Username must be at least 3 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one capital letter' })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must contain at least one symbol' }),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

// Infer the type from the schema
type SignupFormData = z.infer<typeof signupSchema>;

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: 'onBlur'
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    
    try {
      // Here you would integrate with your backend API
      console.log('Form submitted successfully:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Handle successful signup
      // e.g., redirect to login or dashboard
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a] px-4 py-8 bg-gradient-to-r from-[rgba(0,180,255,0.05)] to-transparent">
      <div className="w-full max-w-md p-6 rounded-lg backdrop-blur-md bg-black/75 border border-cyan-400/20 shadow-lg shadow-cyan-400/10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-cyan-400 text-cyan-400 shadow-md shadow-cyan-400/50 text-xl font-bold">
            <Brain />
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-2xl font-primary font-semibold text-white text-center mb-1">Create Account</h1>
        <p className="text-gray-400 text-center text-sm mb-6">
          Join the Mind Block community and start solving puzzles
        </p>
        
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-1">
            <label htmlFor="username" className="sr-only">Username</label>
            <Input
              id="username"
              type="text"
              placeholder="Choose a username"
              icon="user"
              className={errors.username ? "border-red-500 focus:border-red-500" : ""}
              {...register('username')}
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
            )}
          </div>
          
          <div className="space-y-1">
            <label htmlFor="email" className="sr-only">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              icon="mail"
              className={errors.email ? "border-red-500 focus:border-red-500" : ""}
              {...register('email')}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-1">
            <label htmlFor="password" className="sr-only">Password</label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              icon="lock"
              className={errors.password ? "border-red-500 focus:border-red-500" : ""}
              {...register('password')}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>
          
          <div className="space-y-1">
            <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              icon="lock"
              className={errors.confirmPassword ? "border-red-500 focus:border-red-500" : ""}
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>
          
          <Button 
            type="submit"
            variant="primary"
            fullWidth
            isLoading={isLoading}
            className="mt-2"
          >
            Create Account
          </Button>
          
          {/* Alternative Signup Options */}
          <div className="mt-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black/75 text-gray-400">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center py-2 px-4 border border-gray-700 rounded-md hover:border-cyan-400/30 hover:shadow-sm hover:shadow-cyan-400/20 bg-gray-800/50 text-white transition duration-200"
              >
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center py-2 px-4 border border-gray-700 rounded-md hover:border-cyan-400/30 hover:shadow-sm hover:shadow-cyan-400/20 bg-gray-800/50 text-white transition duration-200"
              >
                StarkNet
              </button>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              Already have an account?{' '}
              <a href="/login" className="text-cyan-400 font-medium hover:underline">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;