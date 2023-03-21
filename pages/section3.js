import { motion, useScroll, useTransform } from "framer-motion";
export default function Section3() {
  let { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["90", "-30%"]);
  return (
    <>
      <div
        style={{
          zIndex: "1",
          display: "flex",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#A66D58",
          position: "absolute",
        }}
      >
        <div style={{ top: "0", paddingLeft: "5rem", width: "800px" }}>
          <h1
            style={{
              whiteSpace: "nowrap",
              color: "white",
              paddingLeft: "7rem",
              paddingTop: "0.5rem",
              fontSize: "9rem",
            }}
          >
            O Mnie
          </h1>
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod
          </p>
          <div>
            <a href="https://www.facebook.com/MarlenaSzczepanskaFotografia">
              <img src="./Facebook.svg" style={{ padding: "2rem" }}></img>
            </a>
            <a href="https://www.instagram.com/foto_widok/">
              <img src="./Instagram.svg" style={{ padding: "2rem" }}></img>
            </a>
            <a href="https://www.tiktok.com/pl-PL/">
              <img src="./TikTok.svg" style={{ padding: "2rem" }}></img>
            </a>
          </div>
        </div>
        <motion.div
          style={{
            y,
            width: "auto",
            height: "auto",
            position: "absolute",
            marginLeft: "65rem",
            marginTop: "6rem",
          }}
        >
          <img
            src="./about.jpg"
            style={{
              width: "100%",
              height: "100%",
              WebkitBoxShadow: "1px 1px 40px 5px rgba(64, 42, 34, 1)",
              MozBoxShadow: "1px 1px 40px 5px rgba(64, 42, 34, 1)",
              boxShadow: "1px 1px 40px 5px rgba(64, 42, 34, 1)",
            }}
          />
        </motion.div>
      </div>
    </>
  );
}
