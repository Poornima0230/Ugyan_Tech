import Image from "next/image";
import MobileMenu from "./MobileMenu";
import styles from "./navbar.module.css";
import NavLinks from "./NavLinks";
import logo from "@/public/ugyanTech.png";

export default function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <Image src={logo} alt="Ugyan Logo" fill priority />
      </div>

      <div className={styles.desktopMenu}>
        <NavLinks />
      </div>

      <div className={styles.mobileOnly}>
        <MobileMenu />
      </div>
    </div>
  );
}
