import { FaArrowRight } from "react-icons/fa6";
import styles from "./hero.module.css";
import { LuRocket } from "react-icons/lu";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundIcons}>
        <span>{"</>"}</span>
        <span>{"{}"}</span>
        <span>{"[]"}</span>
        <span>{"<AI/>"}</span>
        <span>{"const"}</span>
        <span>{"npm"}</span>
        <span>{"React"}</span>
        <span>{"API"}</span>
      </div>
      <div className={styles.badge}>
        <p>
          <LuRocket /> Innovation • Technology • Excellence
        </p>
      </div>

      <div className={styles.heading}>
        <h1>Building the</h1>
        <h1 className={styles.gradientText}>Future of Tech</h1>
        <h1>One Solution at a Time</h1>
      </div>

      <div className={styles.description}>
        <h2>
          Transform your business with cutting-edge{" "}
          <b>AI Solutions, Web Development, </b> and <b>Data Science</b>{" "}
          expertise.
        </h2>
      </div>

      <div className={styles.features}>
        <div>
          <h3>AI & Machine Learning</h3>
        </div>
        <div>
          <h3>Custom Development</h3>
        </div>
        <div>
          <h3>Data Analytics</h3>
        </div>
        <div>
          <h3>Cloud Solutions</h3>
        </div>
      </div>

      <div className={styles.actions}>
        <a href="#services" className={styles.primaryBtn}>
          Explore Services <FaArrowRight />
        </a>
        <a href="#contact" className={styles.secondaryBtn}>
          Get Started Today
        </a>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <h2>20+</h2>
          <p>Projects Delivered</p>
        </div>

        <div className={styles.stat}>
          <h2>98%</h2>
          <p>Client Satisfaction</p>
        </div>

        <div className={styles.stat}>
          <h2>5+</h2>
          <p>Years Experience</p>
        </div>
      </div>
    </section>
  );
}
