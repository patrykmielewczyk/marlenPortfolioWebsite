import { motion, useScroll, useTransform } from "framer-motion";

export default function Section2() {
  let { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["-35%", "70%"]);
  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "0",
          position: "relative",
          height: "120vh",
          backgroundColor: "#402A22",
          zIndex: "1",
        }}
      >
        <h1
          style={{
            marginLeft: "50%",
            fontFamily: "montserrat",
            position: "absolute",
            color: "white",
            paddingTop: "0.5%",
            fontSize: "10rem",
          }}
        >
          Portfolio
        </h1>
        <motion.div
          style={{
            y,
            padding: "7%",
            marginTop: "5%",
          }}
        >
          <a href="https://www.instagram.com/foto_widok/">
            <motion.img
              transition={{ type: "spring", stiffness: 100, damping: 3 }}
              src="/children.jpg"
              whileHover={{
                scale: 0.98,
                WebkitFilter: "blur(0.6px)",
              }}
              style={{
                objectFit: "contain",
                width: "20vw",
                height: "60vh",
                cursor: "pointer",
              }}
            />
            <h1 style={{ color: "white", marginLeft: "3rem" }}>
              Sesje Dziecięce
            </h1>
          </a>
        </motion.div>
        <motion.div
          style={{
            objectFit: "contain",
            width: "auto",
            height: "auto",
            y,
            padding: "7%",
            marginTop: "5%",
          }}
        >
          <motion.img
            whileHover={{ scale: 0.98, WebkitFilter: "blur(0.6px)" }}
            transition={{ type: "spring", stiffness: 100, damping: 3 }}
            src="/woman.jpg"
            style={{
              objectFit: "contain",
              width: "20vw",
              height: "60vh",
              cursor: "pointer",
            }}
          />
          <h1 style={{ color: "white", marginLeft: "4rem" }}>Sesje Kobiece</h1>
        </motion.div>
        <motion.div
          style={{
            width: "auto",
            height: "auto",
            y,
            padding: "7%",
            marginTop: "5%",
          }}
        >
          <motion.img
            whileHover={{ scale: 0.98, WebkitFilter: "blur(0.6px)" }}
            transition={{ type: "spring", stiffness: 100, damping: 3 }}
            src="/couples.jpg"
            style={{
              objectFit: "contain",
              width: "20vw",
              height: "60vh",
              cursor: "pointer",
            }}
          />
          <h1 style={{ color: "white", marginLeft: "7rem" }}>Sesje Par</h1>
        </motion.div>
      </div>
    </>
  );
}
