"use client";

import { useState } from "react";
import Image from "next/image";
import Arrow from "@/public/ContactUs/Arrow.svg";
import { db } from "@/app/lib/firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";

export default function ProjectDetailsForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    projectType: "",
    budget: "",
    description: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp: { [key: string]: string } = {};

    if (!form.name.trim()) temp.name = "Name is required";
    if (!form.email.trim()) temp.email = "Email is required";
    if (!form.phone.trim()) temp.phone = "Phone is required";
    if (!form.location.trim()) temp.location = "Location is required";
    if (!form.projectType.trim()) temp.projectType = "Project type is required";
    if (!form.budget.trim()) temp.budget = "Budget range is required";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fill all required fields");
      return;
    }
    try {
      await addDoc(collection(db, "FormDetails"), {
        ...form,
        createdAt: Timestamp.now()
      });

      toast.success("Form submitted successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        location: "",
        projectType: "",
        budget: "",
        description: ""
      });

      setErrors({});
    } catch (error) {
      console.log("Error saving data: ", error);
      toast.error("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="w-full flex justify-center bg-white">
      <div className="w-full max-w-3xl py-8 lg:py-16 px-6 lg:px-16">
        <h1 className="text-center font-semibold font-['Poppins'] text-black text-2xl sm:text-2xl md:text-2xl lg:text-5xl">
          Tell Us About Your Project
        </h1>

        <p className="text-center text-sm sm:text-sm md:text-sm lg:text-base text-[#495057] mt-2 font-['Poppins']">
          Share your requirements and we’ll get back to you within one working
          day
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label className="font-['Poppins'] font-normal">
              Name <span className="text-[#f95b46]">*</span>
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="mt-1 border border-gray-300 rounded-md px-3 py-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-['Poppins'] font-normal">
              Email <span className="text-[#f95b46]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@email.com"
              className="mt-1 border border-gray-300 rounded-md px-3 py-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="font-['Poppins'] font-normal">
              Phone <span className="text-[#f95b46]">*</span>
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="mt-1 border border-gray-300 rounded-md px-3 py-2"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label className="font-['Poppins'] font-normal">
              Location of the Project <span className="text-[#f95b46]">*</span>
            </label>

            <div className="relative mt-1">
              <select
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
              >
                <option value="">Select location</option>
                <option>Delhi</option>
                <option>Noida</option>
                <option>Ghaziabad</option>
                <option>Greater Noida (NCR)</option>
              </select>

              <Image
                src={Arrow}
                alt="arrow"
                className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>

            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location}</p>
            )}
          </div>

          {/* Project Type */}
          <div className="flex flex-col">
            <label className="font-['Poppins'] font-normal">
              Type of Project <span className="text-[#f95b46]">*</span>
            </label>

            <div className="relative mt-1">
              <select
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
              >
                <option value="">Select project type</option>
                <option>1-BHK</option>
                <option>2-BHK</option>
                <option>3-BHK</option>
                <option>4-BHK</option>
                <option>Modular Kitchen</option>
                <option>Renovation</option>
              </select>

              <Image
                src={Arrow}
                alt="arrow"
                className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>

            {errors.projectType && (
              <p className="text-red-500 text-sm">{errors.projectType}</p>
            )}
          </div>

          {/* Budget */}
          <div className="flex flex-col">
            <label className="font-['Poppins'] font-normal">
              Estimated Budget Range <span className="text-[#f95b46]">*</span>
            </label>

            <div className="relative mt-1">
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
              >
                <option value="">Select budget</option>
                <option>₹1L – ₹3L</option>
                <option>₹3L – ₹6L</option>
                <option>₹6L – ₹9L</option>
                <option>₹9L – ₹12L</option>
                <option>₹12L+</option>
              </select>

              <Image
                src={Arrow}
                alt="arrow"
                className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>

            {errors.budget && (
              <p className="text-red-500 text-sm">{errors.budget}</p>
            )}
          </div>

          {/* Description */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-['Poppins'] font-normal">
              Brief description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your vision, preferred style, and timeline..."
              className="mt-1 border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button className="w-full py-4 px-6 bg-[#f95b46] text-white font-medium font-['Poppins'] rounded-md cursor-pointer hover:opacity-90 hover:scale-105">
              Submit Your Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
