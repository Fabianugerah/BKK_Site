"use client";

import React from "react";

export default function LoginPage() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login clicked!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Input Email */}
      <div>
        <label htmlFor="email-login" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email-login"
          name="email"
          type="email"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Input Password */}
      <div>
        <label htmlFor="password-login" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password-login"
          name="password"
          type="password"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Tombol Login */}
      <button
        type="submit"
        className="w-full py-2 px-4 rounded-md bg-indigo-600 text-white"
      >
        Login
      </button>

      {/* Lupa Password */}
      <div className="text-right">
        <a href="#" className="text-sm text-indigo-600">
          Lupa Password?
        </a>
      </div>
    </form>
  );
}
