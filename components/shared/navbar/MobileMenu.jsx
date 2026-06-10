"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./navbar.module.css";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);

      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);
  return (
    <div className={styles.mobileMenu} ref={menuRef}>
      <button
        className={styles.hamburger}
        onClick={(e) => {
          e.stopPropagation();
          setOpenMenu(!openMenu);
        }}
      >
        {!openMenu ? <Menu /> : <X />}
      </button>

      {openMenu && (
        <div className={styles.mobileLinks}>
          <a href="#" onClick={() => setOpenMenu(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setOpenMenu(false)}>
            About
          </a>
          <a href="#services" onClick={() => setOpenMenu(false)}>
            Services
          </a>
          <a href="#projects" onClick={() => setOpenMenu(false)}>
            Projects
          </a>
          <a href="#testimonials" onClick={() => setOpenMenu(false)}>
            Testimonials
          </a>
          <a href="#contact" onClick={() => setOpenMenu(false)}>
            Contact Us
          </a>
        </div>
      )}
    </div>
  );
}
