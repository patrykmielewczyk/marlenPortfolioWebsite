import { motion, useScroll, useTransform } from "framer-motion";
import Section from "./section";
import Section2 from "./section2";
import Section3 from "./section3";
import Nav from "../components/Nav/Nav";

export default function Home() {
  let { scrollY } = useScroll({
    offset: ["start start", "end start"],
  });
  let scale = useTransform(scrollY, [0, 1500], ["120%", "70%"]);
  return (
    <>
      <Nav />
      <div
        style={{
          position: "absolute",
          marginLeft: "10%",
          marginTop: "10%",
          maxWidth: "60%",
          fontSize: "8rem",
          color: "white",
          zIndex: "100",
        }}
      >
        My photographer portfolio website
        <svg
          width="100"
          height="150"
          viewBox="0 0 100 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_103_3)">
            <path
              d="M53 0C53 -1.65685 51.6569 -3 50 -3C48.3431 -3 47 -1.65685 47 0L53 0ZM47.8787 64.1213C49.0503 65.2929 50.9497 65.2929 52.1213 64.1213L71.2132 45.0294C72.3848 43.8579 72.3848 41.9584 71.2132 40.7868C70.0416 39.6152 68.1421 39.6152 66.9706 40.7868L50 57.7574L33.0294 40.7868C31.8579 39.6152 29.9584 39.6152 28.7868 40.7868C27.6152 41.9584 27.6152 43.8579 28.7868 45.0294L47.8787 64.1213ZM47 0L47 62H53L53 0L47 0Z"
              fill="white"
            />
          </g>
          <rect
            x="1"
            y="1"
            width="98"
            height="148"
            rx="30"
            stroke="white"
            stroke-width="2"
          />
          <defs>
            <clipPath id="clip0_103_3">
              <rect width="100" height="150" rx="31" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <motion.div
        style={{
          WebkitBoxShadow: "1px 1px 40px 5px rgba(64, 42, 34, 1)",
          MozBoxShadow: "1px 1px 40px 5px rgba(64, 42, 34, 1)",
          boxShadow: "1px 1px 40px 5px rgba(64, 42, 34, 1)",
          scale,
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
