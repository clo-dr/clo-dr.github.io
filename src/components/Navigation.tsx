import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, FolderOpen, Mail, User, Menu } from "lucide-react";

const navItems = [
  { path: "/", label: "Accueil", icon: Home },
  { path: "/description", label: "Description", icon: User },
  { path: "/projects", label: "Projets", icon: FolderOpen },
  { path: "/contact", label: "Contact", icon: Mail },
];

const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="nav-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="font-bold text-xl text-indigo-600 tracking-wide">Portfolio@cdr</div>
        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link flex items-center gap-2 px-3 py-2 rounded transition-all duration-200 ${isActive ? "active font-bold" : ""}`}
              >
                <item.icon size={20} className={`transition-all ${isActive ? "text-indigo-600" : "text-gray-400"}`} />
                <span>{item.label.toUpperCase()}</span>
                {isActive && (
                  <span
                    className="nav-border absolute left-0 right-0 -bottom-1 h-1 rounded"
                    style={{ background: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }}
                  />
                )}
              </Link>
            );
          })}
        </div>
        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          <Menu size={28} className="text-indigo-600" />
        </button>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-100"
          >
            <div className="flex flex-col px-4 py-4 gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link flex items-center gap-2 px-3 py-3 rounded transition-all duration-200 ${isActive ? "active font-bold" : ""}`}
                    onClick={handleLinkClick}
                  >
                    <item.icon size={22} className={`transition-all ${isActive ? "text-indigo-600" : "text-gray-400"}`} />
                    <span>{item.label.toUpperCase()}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
