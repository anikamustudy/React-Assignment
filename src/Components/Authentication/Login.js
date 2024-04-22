import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Please enter valid email address" })
    .min(3),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters" }),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (formData) => console.log(formData);

  return (
    <section className="flex justify-center">
      <form
        action=""
        className=" w-1/3 bg-white p-8 mt-8 rounded-lg shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-10 px-4 border border-gray-300 rounded-lg"
              placeholder="Enter your email address"
              {...register("email")}
            />
            {errors.email && (
              <em className=" text-red-600">{errors.email.message}</em>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full h-10 px-4 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <em className=" text-red-600">{errors.password.message}</em>
            )}
          </div>

          <button className="w-full h-12 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
