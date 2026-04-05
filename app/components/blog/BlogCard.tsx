"use client";

import { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaCopy,
  FaShareAlt
} from "react-icons/fa";
import { toast } from "react-toastify";
import Link from "next/link";

export default function BlogCard({ blog }: any) {
  const [showShare, setShowShare] = useState(false);

  const blogUrl = `http://localhost:3000/blog/${blog.slug}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(blogUrl);
    toast.success("Link copied!");
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <img
        src={`http://localhost:1337${blog.coverImage?.url}`}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>

        <div className="flex items-center justify-between relative">
          <Link
            href={`/blog/${blog.slug}`}
            className="text-[#f95b46] text-sm font-medium"
          >
            Read More →
          </Link>
          <div
            className="relative flex items-center"
            onMouseEnter={() => setShowShare(true)}
            onMouseLeave={() => setShowShare(false)}
          >
            <button className="p-2 rounded-full hover:bg-gray-100">
              <FaShareAlt />
            </button>

            {showShare && (
              <div className="absolute right-0 bottom-full flex gap-3 bg-white p-3 rounded-lg shadow-lg">
                <a href={`https://wa.me/?text=${blogUrl}`} target="_blank">
                  <FaWhatsapp className="text-green-500 text-xl" />
                </a>

                <a href="https://instagram.com" target="_blank">
                  <FaInstagram className="text-pink-500 text-xl" />
                </a>

                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${blogUrl}`}
                  target="_blank"
                >
                  <FaFacebook className="text-blue-600 text-xl" />
                </a>

                <button onClick={handleCopy}>
                  <FaCopy className="text-gray-700 text-xl" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
