import React from "react";

// import { reach } from "yup";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen font-sans">
      {/* Left - Form Section */}
      <div className="w-1/2 bg-gradient-to-br from-yellow-100 to-gray-100 p-10 flex flex-col justify-center">
        <h1 className="text-3xl font-semibold mb-2">Create an account</h1>
        <p className="text-sm mb-6">Sign up and get 30 day free trial</p>

        <input
          className="mb-4 p-3 rounded-lg w-full bg-white text-sm outline-none border border-gray-300"
          placeholder="Full name"
        />
        <input
          className="mb-4 p-3 rounded-lg w-full bg-white text-sm outline-none border border-gray-300"
          placeholder="Email"
        />
        <input
          className="mb-4 p-3 rounded-lg w-full bg-white text-sm outline-none border border-gray-300"
          type="password"
          placeholder="Password"
        />
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium rounded-lg p-3">
          Submit
        </button>

        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-black text-white rounded-lg p-3">
            Apple
          </button>
          <button className="flex-1 bg-white border border-gray-300 rounded-lg p-3">
            Google
          </button>
        </div>
      </div>

      {/* Right - Image + Overlay */}
      <div
        className="w-1/2 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/table-with-many-dishes-including-food-including-rice-veggies-other-foods_1086760-97540.jpg?w=1380')",
        }}
      >
        <div className="absolute top-6 left-6 bg-yellow-300 rounded-lg px-4 py-2 shadow-md text-xs">
          Task Review With Team
          <br />
          <span className="text-gray-700">09:30am - 10:00am</span>
        </div>

        {/* Calendar Card */}
        <div className="absolute bottom-10 left-6 backdrop-blur-md bg-white/30 border border-white/50 p-4 rounded-xl shadow-lg w-64">
          <div className="text-sm font-medium">Daily Meeting</div>
          <div className="text-xs mb-2">12:00pm - 01:00pm</div>
          <div className="flex space-x-[-10px]">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`https://randomuser.me/api/portraits/women/${i + 10}.jpg`}
                className="w-8 h-8 rounded-full border-2 border-white"
                alt="avatar"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
