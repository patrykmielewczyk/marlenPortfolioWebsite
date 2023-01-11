export default function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        display: "flex",
        flexWrap: "wrap",
        zIndex: "5",
        backgroundColor: "rgb(44,43,43,60%)",
        width: "100%",
        height: "80px",
      }}
    >
      <a
        href=""
        style={{
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
