/* eslint-disable @next/next/no-img-element */
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./section2.module.css";
import classNames from "classnames";

export default function Section2() {
  return (
    <>
      <div className={styles.sectionContainer}>
        <h1 className={styles.sectionHeader}>Portfolio</h1>
        <div className={styles.textContainer}>
          <h1>Sesje kobiece</h1>
          <p style={{ fontWeight: "100", position: "relative" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.womanImg} id={styles.woman1}>
          <Image src="/woman.jpg" alt="1" fill cover />
        </div>
        <div className={styles.womanImg} id={styles.woman2}>
          <Image src="/woman3.jpg" alt="1" fill cover />
        </div>
        <div className={styles.womanImg} id={styles.woman3}>
          <Image src="/woman2.jpg" alt="1" fill cover />
        </div>
        <div
          style={{
            position: "absolute",
            width: "30vw",
            marginTop: "125rem",
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
            Sesje dziecięce
          </p>
          <p style={{ fontWeight: "100", position: "relative" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          style={{
            marginLeft: "8%",
            position: "absolute",
            marginTop: "70%",
            maxHeight: "100vh",
            height: "70vh",
            width: "25vw",
          }}
        >
          <Image src="/kid3.jpg" alt="1" fill cover />
        </div>
        <div
          style={{
            marginTop: "70%",
            marginLeft: "36.5%",
            position: "absolute",
            maxHeight: "100vh",
            height: "70vh",
            width: "25vw",
          }}
        >
          <Image src="/kid1.jpg" alt="1" fill cover />
        </div>
        <div
          style={{
            marginTop: "70%",
            marginLeft: "65%",
            position: "absolute",
            maxHeight: "100vh",
            height: "70vh",
            width: "25vw",
          }}
        >
          <Image src="/kid2.jpg" alt="1" fill cover />
        </div>
        <div
          style={{
            marginTop: "135%",
            marginLeft: "6%",
            position: "absolute",
            height: "50vh",
            width: "20vw",
          }}
        >
          <Image src="/couples2.jpg" alt="1" fill cover />
        </div>
        <div
          style={{
            marginTop: "135%",
            marginLeft: "30%",
            position: "absolute",
            height: "55vh",
            width: "18vw",
          }}
        >
          <Image src="/couples3.jpg" alt="1" fill cover />
        </div>
        <div
          style={{
            marginTop: "135%",
            marginLeft: "54%",
            position: "absolute",
            height: "50vh",
            width: "40vw",
          }}
        >
          <Image src="/couples1.jpg" alt="1" fill cover />
        </div>
        <div
          style={{
            position: "absolute",
            width: "30vw",
            marginTop: "163%",
            marginLeft: "30%",
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
            Sesje par
          </p>
          <p style={{ fontWeight: "100", position: "relative" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
}
