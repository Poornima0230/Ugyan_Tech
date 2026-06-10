import styles from "./project.module.css";
import webDev from "@/public/webDev.png";
import ai from "@/public/img4.png";
import supplyChain from "@/public/ds.png";
import cmr from "@/public/img3.png";
import cloud from "@/public/img2.png";
import ml from "@/public/MachineLearning.jpg";
import Image from "next/image";

export default function Project() {
  const projects = [
    {
      img: webDev,
      title: "E-commerce Platform Optimization",
      desc: "Rebuilt and optimized an e-commerce platform resulting in 40% faster page loads and 25% increase in conversion rates.",
      category: "Web Development",
    },
    {
      img: ai,
      title: "AI-Powered Customer Service Bot",
      desc: "Developed an intelligent chatbot that handles 70% of customer inquiries automatically, reducing support costs by 35%.",
      category: "GenAI",
    },
    {
      img: ml,
      title: "Predictive Maintenance System",
      desc: "Implemented ML algorithms to predict equipment failures before they occur, reducing downtime by 45% for a manufacturing client..",
      category: "Machine Learning",
    },
    {
      img: supplyChain,
      title: "Supply Chain Analytics Dashboard",
      desc: "Created interactive data visualizations that helped optimize inventory levels and reduce carrying costs by 18%.",
      category: "Data Science",
    },
    {
      img: cmr,
      title: "Custom CRM Integration Tool",
      desc: "Developed a custom middleware that seamlessly connects disparate CRM systems, increasing team productivity by 30%.",
      category: "Custom Tools",
    },
    {
      img: cloud,
      title: "Cloud Migration & Infrastructure Scaling",
      desc: "Successfully migrated on-premises systems to cloud infrastructure, improving scalability and reducing costs by 25%.",
      category: "DevOps",
    },
  ];
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.header}>
        <h1>Our Projects</h1>
        <p>
          Explore some of our recent projects and discover how we have helped
          our clients achieve their goals.
        </p>
      </div>
      <div className={styles.filters}>
        <p>All</p>
        <p>Web Development</p>
        <p>GenAI</p>
        <p>Machine Learning</p>
        <p>Data Science</p>
        <p>Custom Tools</p>
        <p>DevOps</p>
      </div>

      <div className={styles.projectGrid}>
        {projects.map((project, index) => {
          return (
            <div key={index} className={styles.projectCard}>
              <p className={styles.category}>{project.category}</p>

              <div className={styles.imageWrapper}>
                <Image src={project.img} alt="Project image" fill priority />
              </div>
              <div className={styles.content}>
                <h2>{project.title}</h2>
                <p>{project.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
