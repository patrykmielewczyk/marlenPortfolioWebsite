import styles from "./Nav.module.css";
export default function Nav() {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <img src="./logo.svg" />
      </div>
      <a
        href=""
        style={{
          fontSize: "24px",
          color: "white",
          marginRight: "10%",
          marginLeft: "40%",
          marginTop: "3%",
        }}
      >
        Home
      </a>
      <a
        href=""
        style={{
          fontSize: "24px",
          color: "white",
          marginTop: "3%",
          marginRight: "10%",
        }}
      >
        Portfolio
      </a>

      <a
        href=""
        style={{
          fontSize: "24px",
          color: "white",
          marginTop: "3%",
          marginRight: "10%",
        }}
      >
        About
      </a>
    </nav>
  );
}
