import { Link } from "react-router-dom";
import allData from "./data.json";
import "./Common.css";

export default function Events() {
  return (
    <>
    <Link to="/" className="links">
    <h3 style={{ color: "purple", margin: "1rem" }}>
          ALL EVENTS <i className="fa fa-chevron-down"></i>
    </h3>
    </Link>
    <div className="row m-2">
      {allData.map((data, index) => {
        return (
            <div className="col-12 col-lg-4 col-md-4 col-sm-4">
              <div
                key={index}
                className="text-center text-white"
                style={{
                  backgroundColor: `${
                    data.type === "Birthday" ? "dodgerBlue" : "red"
                  }`,
                  borderRadius: "1rem",
                  padding: "1rem",
                  marginBottom: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: "65%",
                    height: "30vh",
                    margin: "auto",
                    padding: "10px",
                  }}
                >
                  <img
                    src={data.image}
                    style={{ borderRadius: "50%" }}
                    alt="img"
                    width="100%"
                    height="100%"
                  />
                </div>
                <h4>{data.name}</h4>
                <h4>{data.type}</h4>
                <h4>
                  {data.day} {data.month_name}
                </h4>
              </div>
            </div>
        );
      })}
    </div>
    </>
  );
}
