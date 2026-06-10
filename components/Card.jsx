import { Eye, Target } from "lucide-react";
import style from "./about.module.css";
import { LiaCertificateSolid } from "react-icons/lia";

export default function Cards() {
  return (
    <div>
      <div className={style.vmGrid}>
        <div className={`${style.vmCard} ${style.vision}`}>
          <LiaCertificateSolid />
          <h3>Our Vision</h3>
          <p>
            To create a world where quality education is accessible to everyone,
            empowering individuals to unlock their full potential.
          </p>
        </div>

        <div className={`${style.vmCard} ${style.mission}`}>
          <Target />
          <h3>Our Mission</h3>
          <p>
            To deliver technology-driven educational experiences that nurture
            curiosity, practical learning, and real-world success.
          </p>
        </div>
      </div>
    </div>
  );
}
