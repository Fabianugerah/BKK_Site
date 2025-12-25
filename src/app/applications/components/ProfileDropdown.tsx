"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { User, LogOut, Settings, Briefcase, FileText } from "lucide-react";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import ConfirmModal from "@/components/ui/ConfirmModal";

interface ProfileDropdownProps {
  userType: "jobseeker" | "company";
  userName: string;
  userEmail: string;
  avatarUrl?: string | null;
}

export default function ProfileDropdown({
  userType,
  userName,
  userEmail,
  avatarUrl,
}: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const supabase = createClient();
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await supabase.auth.signOut();
      setShowLogoutModal(false);
      setIsOpen(false);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const getInitials = () => {
    return userName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const menuItems =
    userType === "jobseeker"
      ? [
          {
            icon: User,
            label: "Profile",
            href: "/jobseeker",
            onClick: () => setIsOpen(false),
          },
          {
            icon: Briefcase,
            label: "Lamaran Saya",
            href: "/jobseeker",
            onClick: () => setIsOpen(false),
          },
          {
            icon: Settings,
            label: "Pengaturan",
            href: "/jobseeker",
            onClick: () => setIsOpen(false),
          },
        ]
      : [
          {
            icon: User,
            label: "Profile Perusahaan",
            href: "/company",
            onClick: () => setIsOpen(false),
          },
          {
            icon: FileText,
            label: "Lowongan",
            href: "/company",
            onClick: () => setIsOpen(false),
          },
          {
            icon: Settings,
            label: "Pengaturan",
            href: "/company",
            onClick: () => setIsOpen(false),
          },
        ];

  return (
    <div ref={dropdownRef} className="relative">
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full 
          bg-white/10 backdrop-blur-md border border-white/20
          hover:bg-white/20 transition-all duration-300 cursor-pointer"
      >
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={userName}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-white text-sm font-semibold">
              {getInitials()}
            </span>
          )}
        </div>

        {/* User Name */}
        <span className="text-white text-sm font-medium hidden sm:block">
          {userName}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div
            className="absolute right-0 top-full mt-4 z-50 w-64
              backdrop-blur-lg bg-black/80 border border-white/20 
              rounded-2xl shadow-xl overflow-hidden"
          >
            {/* User Info */}
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt={userName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-white text-lg font-bold">
                      {getInitials()}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm truncate">
                    {userName}
                  </p>
                  <p className="text-white/60 text-xs truncate">{userEmail}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-white/10 text-white/80 text-[10px] rounded-full">
                    {userType === "jobseeker" ? "Jobseeker" : "Company"}
                  </span>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={item.onClick}
                  className="flex items-center gap-3 px-4 py-3 text-white/80 
                    hover:bg-white/10 hover:text-white transition-colors duration-200"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Logout */}
            <div className="border-t border-white/10 p-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowLogoutModal(true);
                }}
                className="flex items-center gap-3 w-full px-4 py-3 text-red-400 
                  hover:bg-red-500/10 hover:text-red-300 transition-colors duration-200 rounded-lg"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Logout Confirmation Modal - Portal to body */}
      {showLogoutModal && (
        <ConfirmModal
          isOpen={showLogoutModal}
          onClose={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
          title="Konfirmasi Logout"
          message="Apakah Anda yakin ingin keluar dari akun ini? Anda perlu login kembali untuk mengakses dashboard."
          confirmText="Ya, Logout"
          cancelText="Batal"
          type="danger"
          loading={isLoggingOut}
        />
      )}
    </div>
  );
}