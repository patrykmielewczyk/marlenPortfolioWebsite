/* eslint-disable @next/next/no-img-element */
import { motion, useScroll, useTransform } from "framer-motion";

export default function Section2() {
  let { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["-20", "50%"]);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingTop: "0",
          position: "relative",
          height: "400vh",
          backgroundColor: "#402A22",
          zIndex: "1",
        }}
      >
        <h1
          style={{
            marginLeft: "50%",
            fontWeight: "100",
            position: "absolute",
            color: "white",
            paddingTop: "0.5%",
            fontSize: "10rem",
          }}
        >
          Portfolio
        </h1>
        <div
          style={{
            position: "absolute",
            width: "30vw",
            marginTop: "50%",
            marginLeft: "40%",
            color: "white",
          }}
        >
          <p
            style={{
              fontWeight: "300",
              fontSize: "300%",
              position: "relative",
            }}
          >
            Sesje kobiece
          </p>
          <p style={{ fontWeight: "100", position: "relative" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <motion.div
          style={{
            y,
            marginTop: "17%",
            position: "relative",
            marginLeft: "2%",
            maxHeight: "100vh",
          }}
        >
          <img
            src="./woman.jpg"
            alt="2"
            style={{ width: "100%", height: "90vh" }}
          />
        </motion.div>
        <motion.div
          style={{
            y,
            marginTop: "17%",
            marginLeft: "4%",
            position: "relative",

            maxHeight: "100vh",
          }}
        >
          <img
            src="./woman2.jpg"
            alt="1"
            style={{ width: "100%", height: "60vh" }}
          />
        </motion.div>
        <motion.div
          style={{
            y,
            marginTop: "17%",
            marginLeft: "4%",
            position: "relative",

            maxHeight: "100vh",
          }}
        >
          <img
            src="./woman3.jpg"
            alt="1"
            style={{ width: "100%", height: "44vh" }}
          />
        </motion.div>
        <div
          style={{
            position: "absolute",
            width: "30vw",
            marginTop: "135rem",
            marginLeft: "8%",
            color: "white",
          }}
        >
          <p
            style={{
              fontWeight: "300",
              fontSize: "300%",
              position: "relative",
            }}
          >
            Sesje dzieci??ce
          </p>
          <p style={{ fontWeight: "100", position: "relative" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <motion.div
          style={{
            y,
            marginLeft: "8%",
            position: "absolute",
            marginTop: "75%",
            maxHeight: "100vh",
          }}
        >
          <img
            src="./kid3.jpg"
            alt="1"
            style={{ width: "100%", height: "70vh" }}
          />
        </motion.div>
        <motion.div
          style={{
            y,
            marginTop: "75%",
            marginLeft: "37.5%",
            position: "absolute",
            maxHeight: "100vh",
          }}
        >
          <img
            src="./kid1.jpg"
            alt="2"
            style={{ width: "100%", height: "70vh" }}
          />
        </motion.div>
        <motion.div
          style={{
            y,
            marginTop: "75%",
            marginLeft: "65%",
            position: "absolute",
            maxHeight: "100vh",
          }}
        >
          <img
            src="./kid2.jpg"
            alt="1"
            style={{ width: "100%", height: "70vh" }}
          />
        </motion.div>
      </div>
    </>
  );
}
