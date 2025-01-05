"use client";

import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { contact, projects, skills, header } from "@/portfolio";

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="flex justify-between items-center p-4">
      <div className="hidden sm:flex">
        <ul className="flex space-x-4">
          {projects.length ? (
            <li>
              <a
                href="#projects"
                className="text-base lg:text-base lg:text-xl font-semibold text-fg hover:text-primary hover:underline"
              >
                projects
              </a>
            </li>
          ) : null}

          {skills.length ? (
            <li>
              <a
                href="#skills"
                className="text-base lg:text-xl font-semibold text-fg hover:text-primary hover:underline"
              >
                skills
              </a>
            </li>
          ) : null}

          {contact.email ? (
            <li>
              <a
                href="#contact"
                className="text-base lg:text-xl font-semibold text-fg hover:text-primary hover:underline"
              >
                contact
              </a>
            </li>
          ) : null}
        </ul>
      </div>

      <button
        type="button"
        onClick={toggleNavList}
        className="p-2 text-primary hover:underline sm:hidden"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>

      {showNavList && (
        <ul className="flex sm:hidden flex-col items-center justify-center fixed inset-0 w-full h-full bg-bg z-20">
          {projects.length ? (
            <li className="my-2">
              <a
                href={header.homepage}
                onClick={toggleNavList}
                className="text-2xl font-bold text-primary"
              >
                {header.title}
              </a>
            </li>
          ) : null}

          {projects.length ? (
            <li className="my-2">
              <a
                href="#projects"
                onClick={toggleNavList}
                className="text-base lg:text-xl font-semibold text-fg hover:underline"
              >
                Projects
              </a>
            </li>
          ) : null}

          {skills.length ? (
            <li className="my-2">
              <a
                href="#skills"
                onClick={toggleNavList}
                className="text-base lg:text-xl font-semibold text-fg hover:underline"
              >
                Skills
              </a>
            </li>
          ) : null}

          {contact.email ? (
            <li className="my-2">
              <a
                href="#contact"
                onClick={toggleNavList}
                className="text-base lg:text-xl font-semibold text-fg hover:underline"
              >
                Contact
              </a>
            </li>
          ) : null}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
