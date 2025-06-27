import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "What We Offer", path: "/whatweoffer" },
  { name: "Why Join", path: "/whyjoin" },
];

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-stone-200/70 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <img
                 src="/logo.PNG"
                 alt="Healing Together Logo"
                 className="w-12 h-12 rounded-full"
            />

              <span className="text-xl font-medium text-stone-700 hidden sm:block">
                Healing Together
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path}>
                  <Button
                    variant="ghost"
                    className={`text-base font-medium rounded-full px-4 py-2 transition-colors ${
                      location.pathname === item.path
                        ? "bg-emerald-100 text-emerald-800 rounded-2x1" 
                        : "text-stone-600 hover:bg-stone-100/70 rounded-full"
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              <Button
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full font-medium shadow-sm hover:shadow-md"
                onClick={() =>
                  window.open(
                    "https://calendly.com/healingtogethercircle/30min?month=2025-06",
                    "_blank"
                  )
                }
              >
                Book a Call
              </Button>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
    </div>
  );
}
