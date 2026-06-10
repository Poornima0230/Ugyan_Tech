"use client";

import Image from "next/image";
import styles from "./testmonials.module.css";
import { Star } from "lucide-react";
import logo1 from "@/public/logo1.png";
import logo2 from "@/public/logo2.jpg";
import img from "@/public/dp.jpg";

export default function Testimonials() {
  const tests = [
    {
      img: logo1,
      note: "We, at Kodai Charitable Trust, are truly grateful for the outstanding work done by Ugyan Tech Solutions in developing our official website – www.kodaicharity.in. From the initial planning stages to the final deployment, their team demonstrated professionalism, creativity, and a deep understanding of our mission and values as a charitable organization. The website not only looks visually appealing but also functions seamlessly, making it easier for us to connect with supporters and communicate our cause more effectively. We highly appreciate their dedication, timely delivery, and exceptional technical support",
      by: "Sri Vidya Hariharan",
      deg: "Director, Kodai Charitable Trust",
      website: "https://kodaicharity.in/",
    },
    {
      img: logo2,
      note: "We sincerely appreciate the excellent work done by Ugyan Tech Solutions in designing and developing our website, which showcases a wide range of plants and plant-based products. The team perfectly captured the essence of our brand and translated it into a clean, user-friendly, and visually appealing platform. Their attention to detail, responsiveness, and commitment to quality made the entire experience smooth and satisfying. The website has significantly enhanced our online presence and helped us connect better with our customers and partners.",
      by: "N.Vemachalam",
      deg: "Managing Director, NGG Company",
      website: "https://sakal.lovable.app/",
    },
    {
      img: img,
      note: "We at DevSecEngOps are extremely pleased with the website and digital solutions delivered by Ugyan Tech Solutions. As an education and training company, it was essential for us to have a platform that clearly communicates our services, values, and vision. The team at Ugyan Tech not only understood our requirements but also added their technical expertise and creative insight to build a modern, responsive, and engaging website. Their professionalism, timely support, and commitment to quality exceeded our expectations. We look forward to continuing this partnership.",
      by: "Sandhya G",
      deg: "Founder & CEO, DevSecEngOps",
      website: "https://janapriya.netlify.app/",
    },
    {
      img: img,
      note: "We are extremely satisfied with the website developed by Ugyan Tech Solutions for our legal practice. Their team understood the importance of presenting our services in a professional and trustworthy manner. The final website reflects our firm's values, expertise, and commitment to clients while maintaining a clean and modern design. Throughout the project, the team demonstrated excellent communication, technical proficiency, and attention to detail. We appreciate their dedication, timely delivery, and ongoing support. We highly recommend Ugyan Tech Solutions to any organization seeking a reliable technology partner.",
      by: "GK Legal Firm",
      deg: "Managing Partner",
      website: "https://www.gklegalfirm.com/",
    },
    {
      img: img,
      note: "We sincerely thank Ugyan Tech Solutions for creating a beautiful and elegant website for our gemstone business. The team successfully captured the essence of our brand and transformed it into a visually appealing, responsive, and user-friendly platform. Their creative approach, technical expertise, and commitment to quality helped us showcase our products effectively to customers worldwide. The entire development process was smooth, professional, and completed within the promised timeline. We are delighted with the outcome and look forward to working with them again in the future.",
      by: "Srinivas Rao",
      deg: "Director",
      website: "https://spektrumgems.com/",
    },
    {
      img: img,
      note: "We are grateful to Ugyan Tech Solutions for delivering a modern and professionally designed website that perfectly aligns with our business goals. From understanding our requirements to implementing the final design, their team displayed exceptional professionalism and technical knowledge. The website offers a seamless user experience across devices and effectively communicates our services and brand identity. Their responsiveness, attention to detail, and commitment to excellence made the entire experience highly satisfactory. We confidently recommend Ugyan Tech Solutions to businesses looking for innovative and reliable web development services.",
      by: "Vinuthna Designers",
      deg: "Management Team",
      website: "https://vinuthnadesigners.lovable.app/",
    },
  ];

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.header}>
        <h1>Client Testimonials</h1>
        <p>
          Do not just take our word for it — hear what our clients have to say
          about working with Ugyan Tech Solutions.
        </p>
      </div>

      <div className={styles.slider}>
        <div className={styles.track}>
          {tests.concat(tests).map((test, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() =>
                window.open(test.website, "_blank", "noopener,noreferrer")
              }
            >
              <div className={styles.stars}>
                <Star />
                <Star /> <Star /> <Star /> <Star />
              </div>
              <p className={styles.note}>{test.note}</p>
              <div className="flex items-center gap-3 justify-center">
                <div className={styles.logo}>
                  <Image alt={test.by} src={test.img} fill priority />
                </div>
                <div>
                  <p className={styles.name}>{test.by}</p>
                  <p className={styles.role}>{test.deg}</p>
                </div>
              </div>
              <button className={styles.cta}>Visit Project</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
