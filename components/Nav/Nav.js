export default function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        display: "flex",
        flexWrap: "wrap",
        zIndex: "5",
        width: "100%",
        height: "auto",
        backgroundColor: "rgb(50,31,24,45%)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div style={{ marginLeft: "5%" }}>
        <img src="./logo.svg" style={{ scale: "0.7" }} />
      </div>
      <a
        href=""
        style={{
          fontSize: "24px",
          color: "white",
          marginRight: "10%",
          marginLeft: "40%",
          marginTop: "2%",
        }}
      >
        Home
      </a>
      <a
        href=""
        style={{
          fontSize: "24px",
          color: "white",
          marginTop: "2%",
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
          marginTop: "2%",
          marginRight: "10%",
        }}
      >
        About
      </a>
    </nav>
  );
}
