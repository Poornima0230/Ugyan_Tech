import styles from "./navbar.module.css";

export default function NavLinks() {
  return (
    <nav className={styles.links}>
      <a href="#">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#contact">Contact Us</a>
    </nav>
  );
}
