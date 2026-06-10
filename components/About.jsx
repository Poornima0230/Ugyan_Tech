import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import styles from "./about.module.css";
import { FaArrowRight } from "react-icons/fa6";
import img from "@/public/img3.png";

import Image from "next/image";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.content}>
        <div className={styles.badge}>
          <p>About us</p>
        </div>

        <div className={styles.heading}>
          <h1>Innovating the</h1>
          <h1>Future of Tech</h1>
        </div>

        <p className={styles.description}>
          At Ugyan Tech Solutions, we are passionate about harnessing
          cutting-edge technology to solve complex business challenges. Our team
          combines deep expertise across AI, machine learning, and web
          development with a keen understanding of business needs.
        </p>

        <p className={styles.description}>
          Founded with a vision to bridge the gap between technical excellence
          and practical business applications, we have grown into a trusted
          partner for companies seeking innovative tech solutions that drive
          real business value.
        </p>

        <div className={styles.features}>
          <p>
            <IoMdCheckmarkCircleOutline />
            Cutting-edge AI & ML Solutions
          </p>
          <p>
            <IoMdCheckmarkCircleOutline />
            Custom Web Development
          </p>
          <p>
            <IoMdCheckmarkCircleOutline />
            Data Science & Analytics
          </p>
          <p>
            <IoMdCheckmarkCircleOutline />
            24/7 Technical Support
          </p>
        </div>

        <button className={styles.cta}>
          Work With Us
          <FaArrowRight />
        </button>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={img}
          alt="Work with us Img"
          placeholder="blur"
          blurDataURL=""
          priority
          fill
        />
      </div>
    </section>
  );
}
