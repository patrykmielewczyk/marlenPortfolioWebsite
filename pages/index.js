import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./index.module.css";
import Section from "./section";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Nav from "../components/Nav/Nav";
import react from "react";

export default function Home() {
  let { scrollY } = useScroll({
    offset: ["start start", "end start"],
  });
  let scale = useTransform(scrollY, [0, 1200], ["120%", "60%"]);
  return (
    <>
      <Nav />
      <div className={styles.heroTextContainer}>
        My photographer portfolio website
        <Image src="/arrow.svg" alt="arrow" width={100} height={100} />
      </div>
      <motion.div style={{ scale }} className={styles.heroImageContainer}>
        <img alt="bg" src="/background.jpg" className={styles.heroImage} />
      </motion.div>
      <Section />
      <Section2 />
      <Section3 />
    </>
  );
}
