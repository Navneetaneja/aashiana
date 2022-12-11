export default function Header() {
  const paths = ["/", "/all-events"];
  const path = window.location.pathname;
  let index = paths.indexOf(path);
  if (index === -1) {
    index = 0;
    window.location.href = "/";
  }
  const mstyle = {
    backgroundImage: `url('images/aashiana.jpeg')`,
    height: "200px",
    backgroundSize: `contain`,
    opacity: "0.9",
  };
  return (
    <div style={mstyle} className="container-fluid">
      <div
        style={{
          display: "flex",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "cursive",
          opacity: "0.7",
        }}
      >
        <h3 className="text-white font-italic font-weight-bolder text-white">
          AASHIANA
        </h3>
      </div>
    </div>
  );
}
