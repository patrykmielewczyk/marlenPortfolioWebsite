import Image from "next/image";
import styles from "./HomeSection.module.css";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const HomeSection = () => {
  const main = useRef();
  const smoother = useRef();
  const reveal = useRef();
  const revealText = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      /*smoother.current = ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
      });*/
      gsap.fromTo(
        revealText.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, delay: 1, duration: 2, ease: "power0" }
      );
      gsap.fromTo(
        reveal.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 2, ease: "power0" }
      );
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          start: "top top",
          end: "bottom 5%",
          scrub: true,
          pin: true,
        },
      });
      tl.to(main.current, {
        scale: 0.4,
        ease: "none",
      });
    }, main);
    return () => ctx.revert();
  }, []);
  return (
    <section>
      <div className={styles.heroTextWrapper} ref={reveal}>
        <img src={"/heroText.svg"} />
      </div>
      <div
        ref={revealText}
        style={{
          maxWidth: "30%",
          position: "absolute",
          zIndex: "2",
          marginLeft: "65%",
          marginTop: "15%",
        }}
      >
        <p
          style={{
            color: "white",
            fontWeight: "200",
            fontSize: "38px",
          }}
        >
          Lubię robić zdjęcia i wogóle jest super fajnie i elegancko a do tego
          wychodzi mi to w pyte
        </p>
        <div
          style={{
            marginTop: "10%",
            marginLeft: "40%",
          }}
        ></div>
      </div>

      <div className={styles.heroImageWrapper} ref={main}>
        <img alt="bg" src="/background.jpg" className={styles.heroImage} />
      </div>
      <div className=".next-section"></div>
    </section>
  );
};

export default HomeSection;
