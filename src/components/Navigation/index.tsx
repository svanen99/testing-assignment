'use client'
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type NavigationProps = {
  onScrollToSection: (section: "aboutMe" | "projects" | "connect") => void;
  activeSection: "aboutMe" | "projects" | "connect";
};

const Navigation: React.FC<NavigationProps> = ({ onScrollToSection, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    setMenuOpen(!menuOpen);
  };

  const sections = [
    { id: "aboutMe", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "connect", label: "Connect" },
  ];

  const renderMenuItem = (id: string, label: string, testId: string, closeMenu = false) => (
    <li
    key={id}
      onClick={() => {
        onScrollToSection(id as "aboutMe" | "projects" | "connect");
        if (closeMenu) toggleMenu();
      }}
      className={`cursor-pointer text-lg ${activeSection === id ? "underline decoration-pink-500" : "hover:border-b-2 border-pink-500"}`}
      data-testid={testId}>
      {label}
    </li>
  );
  return (
    <nav className="sticky top-0 w-full text-black z-50 rounded">
      <div className="flex p-2 md:hidden">
        <button data-testid="open-menu-btn" onClick={toggleMenu} className="text-2xl absolute top-5 right-5">
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 text-white flex flex-col justify-center items-center gap-10 text-xl overflow-x-hidden w-full bg-pink-600">
          <button
            data-testid="close-menu-btn"
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-3xl">
            <XMarkIcon className="h-6 w-6" />
          </button>
          <ul data-testid="mobile-nav-list" className="space-y-5 w-full text-center bg-pink-600 text-pink-300">
            {sections.map((section) =>
              renderMenuItem(section.id, section.label, `mobile-${section.id}`, true)
            )}
          </ul>
        </div>
      )}
      <ul data-testid="desktop-nav" className="hidden md:flex pr-10 justify-end gap-10 py-4 px-2 w-full">
        {sections.map((section) => renderMenuItem(section.id, section.label, `desktop-${section.id}`))}
      </ul>
    </nav>
  );
};

export default Navigation;