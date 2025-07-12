import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
// import { registerUser, mockGoogleAuth } from "./authUtils";
import { mockGoogleAuth } from "../components/authUtils";

import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import { useAuthStore } from "../store/authStore";

const signupSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const registerUser = useAuthStore((state) => state.register);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await registerUser({
        username: data.username,
        email: data.email,
        password: data.password,
        // provider: "local",
      });
      console.log(result);
      // if (!result.success) {
      //   setError(result.error || "Registration failed");
      //   return;
      // }
      await new Promise((resolve) => setTimeout(resolve, 500));
      navigate("/");
    } catch (error) {
      setError("Signup error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = mockGoogleAuth();
      if (!result.success) {
        setError(result.error || "Google signup failed");
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
      navigate("/");
    } catch (error) {
      setError("Google signup error");
    } finally {
      setIsLoading(false);
    }
  };

  // Mock StarkNet registration handler
  const handleStarknetSignup = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate StarkNet wallet address
      const starknetAddress = "0x" + Math.floor(Math.random() * 1e16).toString(16);
      const starknetUser = {
        username: `starknet_${starknetAddress.slice(-6)}`,
        email: `${starknetAddress}@starknet.io`,
        password: undefined,
        provider: "starknet",
        starknetAddress,
      };
      // Store in localStorage (merge with existing users)
      const users = JSON.parse(localStorage.getItem("mindblock_users") || "[]");
      if (users.some((u: any) => u.starknetAddress === starknetAddress)) {
        setError("StarkNet wallet already registered");
        setIsLoading(false);
        return;
      }
      users.push(starknetUser);
      localStorage.setItem("mindblock_users", JSON.stringify(users));
      localStorage.setItem("mindblock_auth", JSON.stringify(starknetUser));
      await new Promise((resolve) => setTimeout(resolve, 500));
      navigate("/");
    } catch (error) {
      setError("StarkNet signup error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-white text-center mb-1">
          Create Account
        </h1>
        <p className="text-gray-400 text-center text-sm mb-6">
          Join the Mind Block community and start solving puzzles
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {error && <p className="text-red-500 text-xs text-center">{error}</p>}

          <div>
            <Input
              id="username"
              type="text"
              placeholder="Choose a username"
              icon="user"
              {...register("username")}
              className={
                errors.username ? "border-red-500 focus:border-red-500" : ""
              }
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              icon="mail"
              {...register("email")}
              className={
                errors.email ? "border-red-500 focus:border-red-500" : ""
              }
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              icon="lock"
              {...register("password")}
              className={
                errors.password ? "border-red-500 focus:border-red-500" : ""
              }
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              icon="lock"
              {...register("confirmPassword")}
              className={
                errors.confirmPassword
                  ? "border-red-500 focus:border-red-500"
                  : ""
              }
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
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

          <div className="mt-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black/75 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleGoogleSignup}
                className="flex items-center justify-center py-2 px-4 border border-gray-700 rounded-md hover:border-cyan-400/30 hover:shadow-sm hover:shadow-cyan-400/20 bg-gray-800/50 text-white transition duration-200"
              >
                Google
              </button>
              <button
                type="button"
                onClick={handleStarknetSignup}
                className="flex items-center justify-center py-2 px-4 border border-gray-700 rounded-md hover:border-cyan-400/30 hover:shadow-sm hover:shadow-cyan-400/20 bg-gray-800/50 text-white transition duration-200"
              >
                StarkNet
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
