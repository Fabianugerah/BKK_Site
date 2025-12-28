"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/images/logo.png";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase";
import ProfileDropdown from "./ProfileDropdown";
import { Menu, X, LogOut } from "lucide-react";

interface UserProfile {
  userType: "jobseeker" | "company";
  userName: string;
  userEmail: string;
  avatarUrl?: string | null;
}

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const supabase = createClient();

  // Check auth status and fetch user profile
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
          setUserProfile(null);
          setLoading(false);
          return;
        }

        // Get user profile from profiles table
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();

        if (!profile) {
          setUserProfile(null);
          setLoading(false);
          return;
        }

        const userType = profile.role as "jobseeker" | "company";

        // Fetch specific user data based on role
        if (userType === "jobseeker") {
          const { data: jobseeker } = await supabase
            .from("jobseekers")
            .select("first_name, last_name, avatar_url")
            .eq("id", user.id)
            .single();

          if (jobseeker) {
            setUserProfile({
              userType: "jobseeker",
              userName: `${jobseeker.first_name} ${jobseeker.last_name}`,
              userEmail: user.email || "",
              avatarUrl: jobseeker.avatar_url,
            });
          }
        } else {
          const { data: company } = await supabase
            .from("companies")
            .select("company_name, logo_url")
            .eq("id", user.id)
            .single();

          if (company) {
            setUserProfile({
              userType: "company",
              userName: company.company_name,
              userEmail: user.email || "",
              avatarUrl: company.logo_url,
            });
          }
        }
      } catch (error) {
        console.error("Error checking auth:", error);
        setUserProfile(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      checkAuth();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  const getActiveMenu = () => {
    if (pathname === "/") return "Home";
    if (pathname === "/about") return "Tentang Kami";
    if (pathname === "/contact") return "Contact";
    if (pathname === "/lowongan") return "Lowongan Kerja";
    return "Home";
  };

  const activeMenu = getActiveMenu();

  return (
    <nav
      className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-8xl"
      style={{
        zIndex: 888,
      }}
    >
      {/* Floating Navbar Container */}
      <div className="bg-black/50 backdrop-blur-md rounded-2xl border border-white/20 px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex gap-2 items-center cursor-pointer">
            <div>
              <Image
                src={logo}
                alt="BKK SMKN 1 Purwosari Logo"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col text-white">
              <div className="text-sm font-semibold leading-tight">
                BKK SMK NEGERI 1
              </div>
              <div className="text-sm font-semibold leading-tight">
                PURWOSARI
              </div>
            </div>
          </Link>

          {/* Desktop Menu Items */}
          <div className="hidden lg:flex items-center gap-12">
            <div className="flex gap-8 items-center">
              {/* Home Menu */}
              <Link
                href="/"
                className="body-regular_regular text-white cursor-pointer 
                  transition-all duration-300 relative pb-1 group
                  hover:text-gray-300"
              >
                Home
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#FEFB09]
                  transition-all duration-300
                  ${activeMenu === "Home"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>

              {/* Tentang Kami */}
              <Link
                href="/about"
                className="body-regular_regular text-white cursor-pointer 
                  transition-all duration-300 relative pb-1 group
                  hover:text-gray-300"
              >
                Tentang Kami
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#FEFB09] 
                  transition-all duration-300
                  ${activeMenu === "Tentang Kami"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>

              {/* Lowongan Kerja */}
              <Link
                href="/lowongan"
                className="body-regular_regular text-white cursor-pointer 
                  transition-all duration-300 relative pb-1 group
                  hover:text-gray-300"
              >
                Lowongan Kerja
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#FEFB09] 
                  transition-all duration-300
                  ${activeMenu === "Lowongan Kerja"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="body-regular_regular text-white cursor-pointer 
                  transition-all duration-300 relative pb-1 group
                  hover:text-gray-300"
              >
                Contact
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#FEFB09] 
                  transition-all duration-300
                  ${activeMenu === "Contact"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            </div>

            {/* Auth Section - Desktop */}
            {loading ? (
              <div className="w-20 h-9 bg-white/20 rounded-full animate-pulse" />
            ) : userProfile ? (
              <ProfileDropdown
                userType={userProfile.userType}
                userName={userProfile.userName}
                userEmail={userProfile.userEmail}
                avatarUrl={userProfile.avatarUrl}
              />
            ) : (
              <div className="relative">
                <Button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-20 h-9 justify-self-center text-white
                    backdrop-blur-md bg-white/40 hover:bg-white/50 
                    transition-all duration-300 relative z-10 border border-white/20"
                  style={{
                    borderRadius: 20,
                  }}
                >
                  Login
                </Button>

                {showDropdown && (
                  <>
                    <div
                      className="fixed inset-0 z-20"
                      onClick={() => setShowDropdown(false)}
                    />

                    <div
                      className="absolute top-full mt-6 z-30
                        backdrop-blur-lg bg-black/50 border border-white/20 
                        shadow-xl overflow-hidden w-[92px] items-center rounded-xl"
                    >
                      <Link
                        href="/auth"
                        onClick={() => setShowDropdown(false)}
                        className="block w-full px-4 py-3 text-white text-left body-small_regular 
                          transition-colors duration-200 hover:bg-white/10"
                      >
                        Alumni
                      </Link>
                      <hr className="border-white/10 mx-2" />
                      <Link
                        href="/auth"
                        onClick={() => setShowDropdown(false)}
                        className="block w-full px-4 py-3 text-white text-left body-small_regular 
                          transition-colors duration-200 hover:bg-white/10"
                      >
                        Industri
                      </Link>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Integrated in same container */}
        {showMobileMenu && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col gap-3">
              {/* Mobile Menu Links */}
              <Link
                href="/"
                onClick={() => setShowMobileMenu(false)}
                className={`body-regular_regular text-white px-4 py-2.5 rounded-lg
                  hover:bg-white/10 transition-all duration-300 ${activeMenu === "Home" ? "bg-white/10" : ""
                  }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setShowMobileMenu(false)}
                className={`body-regular_regular text-white px-4 py-2.5 rounded-lg
                  hover:bg-white/10 transition-all duration-300 ${activeMenu === "Tentang Kami" ? "bg-white/10" : ""
                  }`}
              >
                Tentang Kami
              </Link>

              <Link
                href="/lowongan"
                onClick={() => setShowMobileMenu(false)}
                className={`body-regular_regular text-white px-4 py-2.5 rounded-lg
                  hover:bg-white/10 transition-all duration-300 ${activeMenu === "Lowongan Kerja" ? "bg-white/10" : ""
                  }`}
              >
                Lowongan Kerja
              </Link>

              <Link
                href="/contact"
                onClick={() => setShowMobileMenu(false)}
                className={`body-regular_regular text-white px-4 py-2.5 rounded-lg
                  hover:bg-white/10 transition-all duration-300 ${activeMenu === "Contact" ? "bg-white/10" : ""
                  }`}
              >
                Contact
              </Link>

              {/* Divider */}
              <div className="h-px bg-white/20 my-2" />

              {/* Mobile Auth Section */}
              <div className="px-2">
                {loading ? (
                  <div className="w-full h-9 bg-white/20 rounded-full animate-pulse" />
                ) : userProfile ? (
                  <div className="flex items-center gap-3 px-2 py-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                      {userProfile.avatarUrl ? (
                        <Image
                          src={userProfile.avatarUrl}
                          alt={userProfile.userName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-white text-sm font-semibold">
                          {userProfile.userName.substring(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">
                        {userProfile.userName}
                      </p>
                      <p className="text-white/60 text-xs">
                        {userProfile.userType === "jobseeker" ? "Jobseeker" : "Company"}
                      </p>
                    </div>
                    <div className="p-2">
                      <button
                        onClick={() => setShowMobileMenu(false)}
                        className="flex items-center gap-3 w-full px-4 py-3 text-red-400 
                        hover:bg-red-500/10 hover:text-red-300 transition-colors duration-200 rounded-lg"
                      >
                        <LogOut className="w-4 h-4" />
                        <span className="text-sm font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <Button
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="w-full h-9 text-white
                        backdrop-blur-md bg-white/40 hover:bg-white/50 
                        transition-all duration-300 border border-white/20"
                      style={{
                        borderRadius: 20,
                      }}
                    >
                      Login
                    </Button>

                    {showDropdown && (
                      <div className="mt-4 space-y-2">
                        <div
                          className="top-full z-30
                        backdrop-blur-lg bg-black/10 border border-white/20 
                        shadow-xl overflow-hidden w-full items-center rounded-xl"
                        >
                          <Link
                            href="/auth"
                            onClick={() => setShowDropdown(false)}
                            className="block w-full px-4 py-3 text-white text-center body-small_regular 
                          transition-colors duration-200 hover:bg-white/10"
                          >
                            Alumni
                          </Link>
                          <hr className="border-white/10 mx-4" />
                          <Link
                            href="/auth"
                            onClick={() => setShowDropdown(false)}
                            className="block w-full px-4 py-3 text-white text-center body-small_regular 
                          transition-colors duration-200 hover:bg-white/10"
                          >
                            Industri
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;