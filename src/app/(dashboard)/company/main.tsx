'use client'

import React from "react";

import { useState } from "react";
import {
  LayoutDashboard,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Home,
  Users,
  Package,
  ShoppingCart,
  BarChart,
  Bell,
  HelpCircle,
} from "lucide-react";

export default function Companymain() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  // Menu items
  const menuItems = [
    { id: "profile", label: "Profile", icon: User, submenu: false },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      submenu: false,
    },
    {
      id: "data",
      label: "Data Master",
      icon: Package,
      submenu: true,
      items: [
        { id: "users", label: "Users", icon: Users },
        { id: "products", label: "Products", icon: Package },
        { id: "orders", label: "Orders", icon: ShoppingCart },
      ],
    },
    { id: "analytics", label: "Analytics", icon: BarChart, submenu: false },
    { id: "notifications", label: "Notifications", icon: Bell, submenu: false },
    { id: "help", label: "Help & Support", icon: HelpCircle, submenu: false },
    { id: "settings", label: "Settings", icon: Settings, submenu: false },
  ];

  const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);

  const toggleSubmenu = (menuId: string) => {
    if (openSubmenus.includes(menuId)) {
      setOpenSubmenus(openSubmenus.filter((id) => id !== menuId));
    } else {
      setOpenSubmenus([...openSubmenus, menuId]);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarCollapsed ? "w-16" : "w-64"
        } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}
      >
        {/* Logo Section */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          {!sidebarCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
              <span className="font-bold text-lg">Admin</span>
            </div>
          )}
          {sidebarCollapsed && (
            <div className="w-8 h-8 bg-blue-600 rounded-lg mx-auto"></div>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1.5 rounded-lg hover:bg-gray-100 ml-2"
          >
            {sidebarCollapsed ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </button>
        </div>

        {/* User Profile Section */}
        <div className="p-4 border-b border-gray-200">
          {!sidebarCollapsed ? (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">A</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm truncate">
                  Administrator
                </h3>
                <p className="text-xs text-gray-500 truncate">
                  admin@example.com
                </p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">A</span>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-2 overflow-y-auto">
          {menuItems.map((item) => (
            <div key={item.id}>
              {/* Main Menu Item */}
              <button
                onClick={() =>
                  item.submenu ? toggleSubmenu(item.id) : setActiveMenu(item.id)
                }
                className={`flex items-center w-full p-3 rounded-lg mb-1 transition-all ${
                  activeMenu === item.id && !item.submenu
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                } ${sidebarCollapsed ? "justify-center" : "justify-between"}`}
              >
                <div className="flex items-center">
                  <item.icon size={20} />
                  {!sidebarCollapsed && (
                    <span className="ml-3 text-sm font-medium">
                      {item.label}
                    </span>
                  )}
                </div>
                {item.submenu && !sidebarCollapsed && (
                  <ChevronRight
                    size={16}
                    className={`transition-transform ${
                      openSubmenus.includes(item.id) ? "rotate-90" : ""
                    }`}
                  />
                )}
              </button>

              {/* Submenu Items */}
              {item.submenu &&
                !sidebarCollapsed &&
                openSubmenus.includes(item.id) && (
                  <div className="ml-8 space-y-1 mb-1">
                    {item.items?.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => setActiveMenu(subItem.id)}
                        className={`flex items-center w-full p-2 rounded-lg text-sm ${
                          activeMenu === subItem.id
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <subItem.icon size={16} />
                        <span className="ml-2">{subItem.label}</span>
                      </button>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </nav>

        {/* Footer / Logout Section */}
        <div className="p-4 border-t border-gray-200">
          <button
            className={`flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-gray-50 ${
              sidebarCollapsed ? "justify-center" : ""
            }`}
          >
            <LogOut size={20} />
            {!sidebarCollapsed && (
              <span className="ml-3 text-sm font-medium">Logout</span>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)}
            </h1>
            <p className="text-gray-600 mt-1">
              {activeMenu === "dashboard" && "Overview of your system"}
              {activeMenu === "profile" && "Manage your profile information"}
              {activeMenu === "settings" && "Configure system settings"}
              {activeMenu === "users" && "Manage user accounts"}
              {activeMenu === "products" && "Manage product catalog"}
              {activeMenu === "orders" && "View and manage orders"}
              {activeMenu === "analytics" && "View system analytics"}
              {activeMenu === "notifications" && "Manage notifications"}
              {activeMenu === "help" && "Get help and support"}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              {activeMenu === "dashboard" && (
                <LayoutDashboard size={32} className="text-blue-600" />
              )}
              {activeMenu === "profile" && (
                <User size={32} className="text-blue-600" />
              )}
              {activeMenu === "settings" && (
                <Settings size={32} className="text-blue-600" />
              )}
              {activeMenu === "users" && (
                <Users size={32} className="text-blue-600" />
              )}
              {activeMenu === "products" && (
                <Package size={32} className="text-blue-600" />
              )}
              {activeMenu === "orders" && (
                <ShoppingCart size={32} className="text-blue-600" />
              )}
              {activeMenu === "analytics" && (
                <BarChart size={32} className="text-blue-600" />
              )}
              {activeMenu === "notifications" && (
                <Bell size={32} className="text-blue-600" />
              )}
              {activeMenu === "help" && (
                <HelpCircle size={32} className="text-blue-600" />
              )}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)} Content
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              {activeMenu === "dashboard" &&
                "This is your main dashboard. Add your widgets, charts, and important metrics here."}
              {activeMenu === "profile" &&
                "This is where you can view and edit your profile information."}
              {activeMenu === "settings" &&
                "Configure your application settings, preferences, and system options."}
              {activeMenu === "users" &&
                "Manage user accounts, roles, and permissions in this section."}
              {activeMenu === "products" &&
                "Add, edit, or remove products from your catalog."}
              {activeMenu === "orders" &&
                "View and manage customer orders and transactions."}
              {activeMenu === "analytics" &&
                "View detailed analytics and reports about your system."}
              {activeMenu === "notifications" &&
                "Manage your notification settings and view alerts."}
              {activeMenu === "help" &&
                "Find help articles, documentation, and contact support."}
            </p>
            <div className="mt-6 text-sm text-gray-500">
              This area is currently empty. Add your content here.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
