"use client";

import React from "react";
import { createPortal } from "react-dom";
import { AlertTriangle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: "warning" | "danger" | "info";
  loading?: boolean;
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  type = "warning",
  loading = false,
}: ConfirmModalProps) {
  if (typeof window === "undefined") return null;

  const getColorClasses = () => {
    switch (type) {
      case "danger":
        return {
          icon: "text-red-500",
          iconBg: "bg-red-50",
          button: "bg-red-500 hover:bg-red-600",
        };
      case "info":
        return {
          icon: "text-blue-500",
          iconBg: "bg-blue-50",
          button: "bg-blue-500 hover:bg-blue-600",
        };
      default:
        return {
          icon: "text-yellow-500",
          iconBg: "bg-yellow-50",
          button: "bg-yellow-500 hover:bg-yellow-600",
        };
    }
  };

  const colors = getColorClasses();

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex gap-4 p-6">
                <div className={`p-3 rounded-full ${colors.iconBg}`}>
                  <AlertTriangle className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{message}</p>
                </div>
                <button onClick={onClose}>
                  <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                </button>
              </div>

              {/* Actions */}
              <div className="flex gap-3 p-6 bg-gray-50">
                <button
                  onClick={onClose}
                  disabled={loading}
                  className="flex-1 border rounded-xl py-2"
                >
                  {cancelText}
                </button>
                <button
                  onClick={onConfirm}
                  disabled={loading}
                  className={`flex-1 ${colors.button} text-white rounded-xl py-2`}
                >
                  {loading && (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin inline-block mr-2" />
                  )}
                  {confirmText}
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
