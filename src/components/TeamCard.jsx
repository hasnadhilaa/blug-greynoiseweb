import React from "react";

export default function TeamCard({ name, role, image, description }) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-linear-to-br from-yellow-100 via-white to-orange-100 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl"></div>

      <div className="relative bg-yellow-100/30 backdrop-blur-xl rounded-2xl shadow-lg 
        p-6 text-center border border-orange-400/60 
        group-hover:scale-[1.03] group-hover:ring-2 group-hover:ring-orange-300/40 
        transition duration-300 w-80 mx-auto 
        min-h-[430px] flex flex-col items-center">

        <img
          src={image}
          alt={name}
          className="w-56 h-56 object-cover rounded-md mx-auto shadow-md mt-4"
        />

        <h3 className="text-3xl font-bold mt-6 leading-tight">{name}</h3>
        <p className="text-base text-gray-700 font-medium mt-2">{role}</p>

        {description && (
          <p className="text-sm text-gray-600 mt-3">{description}</p>
        )}
      </div>
    </div>
  );
}
