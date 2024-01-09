import React from "react";

export default function ChatCard({
  imageUrl,
  title,
  description,
  link,
  price,
}) {
  return (
    <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg">
      <img src={imageUrl} alt={title} className="w-full" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">{description}</p>
      </div>
      <div className="flex items-center justify-between px-6 py-4">
        <span className="text-xl font-bold text-gray-800">Rs {price}</span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-blue-500 rounded-md w-28 hover:bg-blue-700"
        >
          View
        </a>
      </div>
    </div>
  );
}
