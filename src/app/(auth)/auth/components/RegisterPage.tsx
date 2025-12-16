import React from 'react';


export default function RegisterPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     console.log("Login clicked!");
   };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Input Nama */}
      <div>
        <label htmlFor="name-register" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
        <input
          id="name-register"
          type="text"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      
      {/* Input Email */}
      <div>
        <label htmlFor="email-register" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email-register"
          type="email"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      
      {/* Input Password */}
      <div>
        <label htmlFor="password-register" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          id="password-register"
          type="password"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      
      {/* Tombol Register */}
      <div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </div>
    </form>
  );
}