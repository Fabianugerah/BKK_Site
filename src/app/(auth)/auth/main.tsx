"use client";

import { useState, useEffect } from 'react';
import { ArrowLeft, Eye, EyeOff, GraduationCap } from 'lucide-react';
import Image from "next/image";
import heroImage from "@/assets/images/smk.png";
import logo from "@/assets/images/logo.png";
import googleLogo from "@/assets/images/Google.svg";

// Komponen untuk Halaman Login
function LoginPage({ onToggle }: { onToggle: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-black mb-2">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black mb-2">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 pr-11 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 text-neutral-600 border-gray-300 rounded focus:ring-neutral-500"
          />
          <span className="ml-2 text-sm text-gray-700">Remember Me</span>
        </label>
        <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Forgot Password?</a>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-neutral-500 text-white font-semibold rounded-lg hover:bg-neutral-600 transition"
      >
        Login
      </button>

      <div className="relative my-3">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-400">or</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
          <Image
            src={googleLogo}
            alt="Google Logo"
            width={20}
            height={20}
          />
          <div className="flex-1 flex justify-center">
            <span className="text-sm font-medium text-black">
              Google
            </span>
          </div>
        </button>

        <button className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
          <GraduationCap className="w-5 h-5 text-black" />
          <div className="flex-1 flex justify-center">
            <span className="text-sm font-medium text-black">
              Akun belajar.id
            </span>
          </div>
        </button>
      </div>

      <div className="text-center mt-6">
        <span className="text-gray-600">Don&apos;t have any account? </span>
        <button
          onClick={onToggle}
          className="text-neutral-500 hover:text-neutral-900 font-semibold"
        >
          Register
        </button>
      </div>
    </div>
  );
}

// Komponen untuk Halaman Register
function RegisterPage({ onToggle }: { onToggle: () => void }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-black mb-2">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-black mb-2">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black mb-2">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 pr-11 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-neutral-500 text-white font-semibold rounded-lg hover:bg-neutral-600 transition"
      >
        Register
      </button>

      <div className="relative my-3">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-400">or</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
          <Image
            src={googleLogo}
            alt="Google Logo"
            width={20}
            height={20}
          />
          <div className="flex-1 flex justify-center">
            <span className="text-sm font-medium text-black">
              Google
            </span>
          </div>
        </button>

        <button className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
          <GraduationCap className="w-5 h-5 text-black" />
          <div className="flex-1 flex justify-center">
            <span className="text-sm font-medium text-black">
              Akun belajar.id
            </span>
          </div>
        </button>
      </div>

      <div className="text-center mt-6">
        <span className="text-gray-600">Already have an account? </span>
        <button
          onClick={onToggle}
          className="text-neutral-500 hover:text-neutral-900 font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default function Auth() {
  
  const [isLogin, setIsLogin] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      title: "Selamat Datang Kembali.",
      subtitle: "Akses ribuan peluang karir eksklusif hanya untuk Alumni SMKN 1 Purwosari."
    },
    {
      title: "Temukan Lowongan Terbaru",
      subtitle: "Dapatkan informasi lowongan kerja dan magang yang sesuai dengan keahlianmu"
    },
    {
      title: "Bergabung dengan Alumni",
      subtitle: "Networking dengan alumni dan industri untuk masa depan karirmu"
    }
  ];

  // Auto slider effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <div className="flex h-screen w-full bg-white">
      {/* Image Section - Left Side */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-1">
          <Image
            src={heroImage}
            alt="Hero Background"
            fill
            priority
            quality={100}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/30" />
        </div>

        {/* CONTENT WRAPPER (INI KUNCINYA) */}
        <div className="relative z-10 flex flex-col justify-between w-full p-10 pb-20 text-white">

          {/* Logo */}
          <div className="flex gap-2 items-center">
            <Image
              src={logo}
              alt="BKK SMKN 1 Purwosari Logo"
              width={40}
              height={40}
            />
            <div className="flex flex-col">
              <div className="body-small_semi-bold">BKK SMK NEGERI 1</div>
              <div className="body-small_semi-bold">PURWOSARI</div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="max-w-md">
            <h1 className="text-5xl font-semibold mb-4 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg text-gray-300">
              {slides[currentSlide].subtitle}
            </p>

            {/* Slider Indicators */}
            <div className="flex space-x-2 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all ${index === currentSlide
                    ? 'w-8 bg-yellow-400'
                    : 'w-1 bg-white/40'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>


      {/* Form Section - Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white overflow-y-auto">
        <div className="w-full max-w-md">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-semibold text-gray-900 mb-3">
              {isLogin ? 'Login' : 'Daftar'}
            </h1>
            <p className="text-gray-500">
              {isLogin ? 'Silahkan pilih jenis akun Anda untuk masuk.' : 'Daftar untuk mengakses lowongan kerja eksklusif'}
            </p>
          </div>

          {/* Forms */}
          {isLogin ? (
            <LoginPage onToggle={() => setIsLogin(false)} />
          ) : (
            <RegisterPage onToggle={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    </div>
  );
}