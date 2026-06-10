"use client";

import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
import styles from "./contact.module.css";
import { LuMapPin } from "react-icons/lu";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { createContact } from "@/app/actions/contact.action";
import SubmitButton from "./SubmitButton";
import { toast } from "sonner";

export default function Contact() {
  async function handleSubmit(formData) {
    const result = await createContact(formData);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  }
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.header}>
        <h1>Get In Touch</h1>
        <p>
          Ready to transform your business? Let us discuss your next project and
          bring your vision to life.
        </p>
      </div>

      <div className={styles.container}>
        <form className={styles.form} action={handleSubmit}>
          <h2>Send us a Message</h2>
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder=" "
              required
            />
            <label htmlFor="fullName">Full Name</label>
          </div>
          <div className={styles.inputGroup}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className={styles.inputGroup}>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder=" "
              required
            />
            <label htmlFor="phone">Phone Number</label>
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder=" "
              required
            />
            <label htmlFor="subject">Subject</label>
          </div>
          <div className={styles.inputGroup}>
            <textarea
              id="msg"
              name="message"
              placeholder=" "
              required
            ></textarea>
            <label htmlFor="msg">Your Message</label>
          </div>
          <SubmitButton />
        </form>
        <div className={styles.contactInfo}>
          <h1>Contact Information</h1>

          <div className={styles.infoCard}>
            <IoCallOutline />
            <div>
              <h2>Phone</h2>
              <a href="tel:8088651951">+91 8088651951</a>
            </div>
          </div>
          <div className={styles.infoCard}>
            <IoMailOpenOutline />
            <div>
              <h2>Email</h2>
              <a href="mailto:support@ugyan.in">support@ugyan.in</a>
            </div>
          </div>
          <div className={styles.infoCard}>
            <LuMapPin />
            <div>
              <h2>Address</h2>
              <p>
                6th Floor, Sigma Tech Park Gamma, Whitefield Main Rd, Bengaluru,
                Karnataka 560066
              </p>
              <a href="https://www.google.com/search?sca_esv=6b19787a6a994d6b&rlz=1C1RXQR_enIN1031IN1031&sxsrf=AE3TifP83tS_gQHTSwuXIk_tjAHomFKZVQ:1750273591922&kgmid=/g/11lmqbssh2&q=UGYAN+PRIVATE+LIMITED&shndl=30&shem=lcuae,lsptc,uaasie&source=sh/x/loc/uni/m1/1&kgs=50e46e4d4e0f1b38">
                View on Google Maps
              </a>
            </div>
          </div>

          <div className={styles.socials}>
            <h3>Follow Us</h3>
            <div className="flex gap-2.5">
              <div>
                <FaXTwitter />
              </div>
              <div>
                <FaInstagram />
              </div>
              <a href="https://www.linkedin.com/company/ugyan-tech-solutions/">
                <CiLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
