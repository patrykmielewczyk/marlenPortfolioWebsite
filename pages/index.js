import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import Section from "./section";
import Section2 from "./section2";
import Section3 from "./section3";
import Nav from "../components/Nav/Nav";

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
        <img
          src="./arrow.svg"
          style={{ marginLeft: "90%", marginTop: "10%" }}
        />
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
      >
        <img
          alt="bg"
          src="/background.jpg"
          style={{
            zIndex: "-1",
            top: "0",
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </motion.div>
      <Section />
      <Section2 />
      <Section3 />
    </>
  );
}
