import type { AuthFormType } from "@/types/auth.type";
import { useState, type SetStateAction } from "react"
import type React from "react"
import { useForm } from "react-hook-form";

type props = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<SetStateAction<boolean>>;
}

export default function Register({ isLogin }: props) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<AuthFormType>();
  const [showPassword, setShowPassword] = useState(false);

  function onSubmit(data: AuthFormType) {
    console.log(data)
  }

  return (
    < form onSubmit={handleSubmit(onSubmit)} className="space-y-4" >
      {/* Name field - only for registration */}
      {
        !isLogin && (
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              {...register("username", { required: "Name is required" })}
              type="text"
              name="username"
              id="username"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-zinc-500 outline-none transition"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>
        )
      }

      {/* Email field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address"
            }
          })}
          type="email"
          id="email"
          placeholder="you@example.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />

        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Password field */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              },
              // pattern: {
              //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
              //   message:
              //     "Password must contain uppercase, lowercase, number and special character"
              // }
            })}
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={`absolute right-3 top-1/2  ${errors.password ? "-translate-y-1/1" : "-translate-y-1/2"} text-gray-500 hover:text-gray-700 text-sm cursor-pointer`}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>

          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
      </div>

      {/* Forgot password - only for login */}
      {
        isLogin && (
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              Forgot password?
            </button>
          </div>
        )
      }

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-zinc-900 text-white py-2.5 rounded-lg font-semibold hover:bg-zinc-700 transition duration-200 active:scale-101 cursor-pointer"
      >
        {isLogin ? 'Sign In' : 'Sign Up'}
      </button>
    </form >
  )
}
