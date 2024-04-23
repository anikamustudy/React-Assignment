import { useForm } from "react-hook-form";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name should be at least 3 characters." }),
    email: z.string().email({ message: "Please enter valid email." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z.string(),
    deliveryAddress: z
      .string()
      .min(6, { message: "Address must be at least 6 characters." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Confirm password does not match password",
    path: ["confirmPassword"],
  });

const AdminRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <section className="flex justify-center">
      <form
        className="w-2/5 bg-white p-8 mt-4 rounded-lg shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">SignUp</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-semibold mb-1">
              Name
            </label>
            <input
              id="name"
              className="w-full h-10 px-4 border border-gray-300 rounded-lg"
              type="text"
              placeholder="Enter your name"
              {...register("name")}
            />
            {errors.name && (
              <em className=" text-red-600">{errors.name.message}</em>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              className="w-full h-10 px-4 border border-gray-300 rounded-lg"
              type="email"
              placeholder="Enter your email address"
              {...register("email")}
            />
            {errors.email && (
              <em className="text-red-600">{errors.email.message}</em>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-semibold mb-1">
              Password
            </label>
            <input
              id="password"
              className="w-full h-10 px-4 border border-gray-300 rounded-lg"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <em className="text-red-600">{errors.password.message}</em>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="cpassword" className="text-lg font-semibold mb-1">
              Confirm Password
            </label>
            <input
              id="cpassword"
              className="w-full h-10 px-4 border border-gray-300 rounded-lg"
              type="password"
              placeholder="Enter confirm password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <em className="text-red-600">{errors.confirmPassword.message}</em>
            )}
          </div>

          <div className="col-span-2">
            <label htmlFor="address" className="text-lg font-semibold mb-1">
              Delivery Address
            </label>
            <textarea
              id="address"
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg resize-none"
              placeholder="Enter delivery address"
              {...register("deliveryAddress")}
            />
            {errors.deliveryAddress && (
              <em className="text-red-600">{errors.deliveryAddress.message}</em>
            )}
          </div>
        </div>

        <button
          className="w-full h-12 mt-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default AdminRegister;
