import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./atoms/Button";
import Input from "./atoms/Input";
import { Brain } from "lucide-react";

// Define the validation schema with Zod
const logInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one capital letter",
    })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Password must contain at least one symbol",
    }),
});

// Infer the type from the schema
type LoginData = z.infer<typeof logInSchema>;

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("email");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(logInSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: LoginData) => {
    setIsLoading(true);

    try {
      // Here you would integrate with your backend API
      console.log("Login successfull:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Handle successful signup
      // e.g., redirect to login or dashboard
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
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
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 border-1 border-[#212122] p-6 rounded-lg'>

          {/* Tabs */}
          <div className="grid grid-cols-2 mb-6 p-1 bg-gray-800/80 rounded-md overflow-hidden">
            <button
              className={`py-2 px-4 cursor-pointer text-center items-center justify-center rounded-lg flex font-secondary ${
                activeTab === "email"
                  ? "bg-[#0d0d0d] text-white"
                  : "bg-gray-800/80 text-gray-400"
              }`}
              onClick={() => setActiveTab("email")}
            >
              Email
            </button>
            <button
              className={`py-2 cursor-pointer px-4 text-center items-center justify-center rounded-lg flex font-secondary ${
                activeTab === "wallet"
                  ? "bg-[#0d0d0d] text-white"
                  : "bg-gray-800/80 text-gray-400"
              }`}
              onClick={() => setActiveTab("wallet")}
            >
              Wallet
            </button>
          </div>

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
                errors.email ? "border-red-500 focus:border-red-500" : ""
              }
              {...register("email")}
            />
            {errors.email && (
              <p className='text-red-500 text-xs mt-1'>
                {errors.email.message}
              </p>
            )}
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
                errors.password ? "border-red-500 focus:border-red-500" : ""
              }
              {...register("password")}
            />
            {errors.password && (
              <p className='text-red-500 text-xs mt-1'>
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            type='submit'
            variant='primary'
            fullWidth
            isLoading={isLoading}
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
