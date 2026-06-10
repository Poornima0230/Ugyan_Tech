import { HiOutlineDesktopComputer } from "react-icons/hi";
import styles from "./service.module.css";
import { RiAiGenerate2 } from "react-icons/ri";
import { FaBrain, FaChartLine, FaRocket } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";

export default function Services() {
  const data = [
    {
      icon: <HiOutlineDesktopComputer />,
      title: "Web Development",
      desc: "Custom web applications built with modern frameworks and responsive design principles.",
    },
    {
      icon: <RiAiGenerate2 />,
      title: "Generative AI Solutions",
      desc: "Implementing cutting-edge AI models to automate tasks, generate content, and enhance decision-making.",
    },
    {
      icon: <FaBrain />,
      title: "Machine Learning",
      desc: "Building and deploying ML models that deliver insights, predictions, and automated processes.",
    },
    {
      icon: <FaChartLine />,
      title: "Data Science",
      desc: "Transforming raw data into valuable business insights through analysis, visualization, and modeling.",
    },
    {
      icon: <FaTools />,
      title: "Custom Tool Development",
      desc: "Engineering bespoke software tools tailored to your specific business needs and workflows.",
    },
    {
      icon: <FaRocket />,
      title: "Application Deployment & Scaling",
      desc: "Expert deployment, scaling, and maintenance services to ensure your applications perform at their best.",
    },
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.servicesHeader}>
        <h1>Our Services</h1>
        <p>
          We provide a comprehensive range of tech solutions to help businesses
          innovate, grow, and stay competitive in the digital landscape.
        </p>
      </div>
      <div className={styles.grid}>
        {data.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{service.icon}</div>

            <h2>{service.title}</h2>

            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
