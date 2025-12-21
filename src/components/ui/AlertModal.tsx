"use client";

import React from "react";
import { CheckCircle, XCircle, AlertCircle, Info, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
  confirmText?: string;
}

export default function AlertModal({
  isOpen,
  onClose,
  title,
  message,
  type,
  confirmText = "OK",
}: AlertModalProps) {
  const getConfig = () => {
    switch (type) {
      case "success":
        return {
          icon: CheckCircle,
          iconColor: "text-green-500",
          iconBg: "bg-green-50",
          button: "bg-green-500 hover:bg-green-600",
        };
      case "error":
        return {
          icon: XCircle,
          iconColor: "text-red-500",
          iconBg: "bg-red-50",
          button: "bg-red-500 hover:bg-red-600",
        };
      case "warning":
        return {
          icon: AlertCircle,
          iconColor: "text-yellow-500",
          iconBg: "bg-yellow-50",
          button: "bg-yellow-500 hover:bg-yellow-600",
        };
      case "info":
        return {
          icon: Info,
          iconColor: "text-blue-500",
          iconBg: "bg-blue-50",
          button: "bg-blue-500 hover:bg-blue-600",
        };
    }
  };

  const config = getConfig();
  const Icon = config.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              {/* Content */}
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-full ${config.iconBg} mb-4`}>
                    <Icon className={`w-8 h-8 ${config.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {message}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={onClose}
                  className={`w-full px-4 py-2.5 ${config.button} text-white rounded-xl font-medium transition-colors`}
                >
                  {confirmText}
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}