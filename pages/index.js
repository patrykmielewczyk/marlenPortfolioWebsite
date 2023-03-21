import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
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
      <div
        style={{
          position: "absolute",
          marginLeft: "10%",
          marginTop: "10%",
          maxWidth: "50%",
          fontSize: "7rem",
          fontWeight: "100",
          color: "white",
          zIndex: "100",
        }}
      >
        My photographer portfolio website
        <img src="./arrow.svg" style={{ marginTop: "10%" }} />
      </div>
      <motion.div
        style={{
          top: "0",
          WebkitBoxShadow: "1px 1px 40px 5px rgba(64, 42, 34, 1)",
          MozBoxShadow: "1px 1px 40px 5px rgba(64, 42, 34, 1)",
          boxShadow: "1px 1px 40px 5px rgba(64, 42, 34, 1)",
          scale,
          filter: "brightness(70%)",
          position: "fixed",
        }}
      ></motion.div>
      <Section />
      <Section2 />
      <Section3 />
    </>
  );
}
