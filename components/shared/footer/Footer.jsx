import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import styles from "./footer.module.css";
import { FiGithub } from "react-icons/fi";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOpenOutline,
} from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.col}>
          <h1 className={styles.brand}>Ugyan Tech</h1>
          <p>
            Transforming ideas into innovative tech solutions. We specialize in
            web development, AI, ML, and data science to help businesses scale
            and succeed.
          </p>

          <div className={styles.socials}>
            <FaXTwitter />
            <FiGithub />
            <FaLinkedinIn />
          </div>
        </div>

        <div className={styles.col}>
          <h3>Services</h3>
          <a href="#services">Web Development</a>
          <a href="#services">GenAI Solutions</a>
          <a href="#services">Machine Learning</a>
          <a href="#services">Data Science</a>
          <a href="#services">Custom Tools</a>
          <a href="#services">App Deployment</a>
        </div>

        <div className={styles.col}>
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#about">About Us</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>

        <div className={styles.col}>
          <h3>Contact</h3>
          <div className={styles.contactItem}>
            <IoLocationOutline />
            <p>
              6th Floor, Sigma Tech Park Gamma, Whitefield Main Rd, Bengaluru,
              Karnataka 560066
            </p>
          </div>
          <div className={styles.contactItem}>
            <IoMailOpenOutline />
            <a href="mailto:support@ugyan.in">support@ugyan.in</a>
          </div>
          <div className={styles.contactItem}>
            <IoCallOutline />
            <a href="tel:7975165470">+91 7975165470</a>
          </div>
          <div>
            <a href="#contact" className={styles.ctaButton}>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <p>© 2026 Ugyan Tech Solutions. All rights reserved.</p>
        </div>
        <div className={styles.bottomLinks}>
          <Link className={styles.link} href="#">
            Privacy Policy
          </Link>
          <Link className={styles.link} href="#">
            Terms of service
          </Link>
          <Link className={styles.link} href="#">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
