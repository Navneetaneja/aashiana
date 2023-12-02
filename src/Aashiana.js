import React from "react";
import { Link } from "react-router-dom";
import "./Aashiana.css";
import "./Common.css";
import data from "./data.json";

class Aashiana extends React.Component {
  name = "Sorry no any event Today";
  wish = "";
  to = "";
  age = "";
  me = "CLICK ME";
  desc = "Don't Be Sad Next Event Will be Soon";
  days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  src = [
    "https://media.tenor.com/images/7a1a4acf852f33dbf4b9d0f51320bc0f/tenor.gif",
    "images/aish.jpeg",
    "images/bhairvi.jpeg",
    "images/charu.jpeg",
    "images/garvit.jpeg",
    "images/jyoti.jpeg",
    "images/md_ann.jpeg",
    "images/me.jpeg",
    "images/mom.jpeg",
    "images/nani.jpeg",
    "images/nanu.jpeg",
    "images/nn_ann.jpeg",
    "images/nonu.jpeg",
    "images/papa.jpeg",
    "images/rajesh.jpeg",
    "images/rasi_ann.jpeg",
    "images/simmi.jpeg",
    "images/vikas.jpeg",
    "images/vj_ann.jpeg",
    "images/himanshu.jpeg",
  ];
  url = "";
  constructor() {
    super();
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    this.state = {
      date: date,
      month: month + 1,
      year: year,
      menu: false,
      music: false,
      birSong: new Audio("./birthday.mp3"),
      anniSong: new Audio("./anniversary.m4a"),
      video: false,
      hours: 23 - hours,
      minutes: 59 - minutes,
      seconds: 60 - seconds,
    };
  }

  check(d, m, y) {
    var nm = 0;
    if (d === 9 && m === 10) {
      this.name = "Aishwarya Aneja";
      this.age = y - 1998;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Birthday";
      nm = 1;
      this.me = "CLICK MY PIC";
      this.desc =
        "On this Beautiful Birthday,\n" +
        "भगवान करे आप Enjoyment से , भरपूर और Smile से अपना आज \n " +
        "का दिन Celebrate करो, और बहुत सारी Surprises पाओ,\n " +
        "🎂🎀🎁HAPPY BIRTHDAY🎂\n" +
        "And \n" +
        " ये लो तुम्हारा Birthday Gift… \n " +
        "1000 Rs. का Scratch कार्ड… \n " +
        "तुम भी क्या याद करोंगे… कर लो aish \n " +
        " ░░░░░░░░░░░░ \n" +
        "Scratch करो Aish करो... \n" +
        "🥳🍫🍔🍕😂🔥🎂🎂🍰🍦🍧🍬 \n" +
        "Happy Birthday to you!";
      this.url = "https://drive.google.com/file/d/1WDj-VrXlWP1oJSaEso24k2LAQiuPboZQ/preview";
    } else if (d === 12 && m === 12) {
      this.name = "Bhairvi Mehndiratta";
      this.age = y - 2007;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Birthday";
      nm = 2;
      this.me = "CLICK MY PIC";
      this.desc = `A birthday cake is always good,\n🥳🍫🍔🍕😂🔥🎂🎂🍰🍦🍧🍬 \nbut to me, a sister with a birthday cake is undoubtedly great. Happy birthday, sister.”`;
      this.url =
        "https://drive.google.com/file/d/1D5cE19mTfqyHwXPvG7uoO325gkUV12wP/preview";
    } else if (d === 3 && m === 6) {
      this.name = "Chaitanya Mehndiratta";
      this.age = y - 2005;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Birthday";
      nm = 3;
      this.me = "CLICK MY PIC";
    } else if (d === 25 && m === 1) {
      this.name = "Garvit Mehndiratta";
      this.age = y - 2012;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Birthday";
      nm = 4;
      this.me = "CLICK MY PIC";
    } else if (d === 5 && m === 1) {
      this.name = "Mrs Jyoti Mehndiratta";
      this.age = y - 1984;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Birthday";
      nm = 5;
      this.me = "CLICK MY PIC";
    } else if (d === 21 && m === 11) {
      this.name = "Mr Rajiv AND Mrs Savi";
      this.age = y - 1997;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Anniversary";
      nm = 6;
      this.me = "CLICK OUR PIC";
      this.url =
        "https://drive.google.com/file/d/18HGP3ocCX0JtDYyvtJlf1p_C_XDnc2Jj/preview";
      this.desc =
        "सात फेरों से बंधा यह प्यार का बंधन,\n" +
        "जीवन भर यूं ही बंधा रहे,\n" +
        "किसी की नजर ना लगे आपके प्यार को\n" +
        "और आप यूं ही हर साल सालगिरह मनाते रहे।";
    } else if (d === 19 && m === 10) {
      this.name = "Navneet Aneja";
      this.age = y - 2001;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Birthday";
      nm = 7;
      this.me = "CLICK MY PIC";
      this.desc = "Its my birthday.. 🥳🤩🎂🎉";
    } else if (d === 3 && m === 12) {
      this.name = "Mrs Savi Aneja";
      this.age = y - 1976;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Birthday";
      nm = 8;
      this.me = "CLICK MY PIC";
    } else if (d === 28 && m === 8) {
      this.name = "Mrs Asha Rani Mehndiratta";
      this.age = y - 1957;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Birthday";
      nm = 9;
      this.me = "CLICK MY PIC";
      this.desc =
        "WISHING HAPPY BIRTHDAY TO THE SPECIAL LADY (#nani,#dadi,#mom,#saas,#wife)\nCONGRATULATIONS!!";
    } else if (d === 8 && m === 4) {
      this.name = "Mr Om Prakash Mehndiratta";
      this.age = y - 1950;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Birthday";
      nm = 10;
      this.me = "CLICK MY PIC";
    } else if (d === 4 && m === 2) {
      this.name = "Mr Om Prakash And Mrs Asha Rani";
      this.age = y - 1976;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Anniversary";
      nm = 11;
      this.me = "CLICK OUR PIC";
    } else if (d === 11 && m === 8) {
      this.name = "Naunidh Mehndiratta";
      this.age = y - 2008;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Birthday";
      nm = 12;
      this.me = "CLICK MY PIC";
      this.desc =
        "N : Always one to take the path less traveled, you are a 'think outside the box' kind of person — creative and original.you are also quite systematic about your life, documenting experiences in diary form, and might have your share of romantic 'entanglements.'\n" +
        "A : It's little wonder A names are drawn to adjectives like ambitious or adventurous. You do not change your mind under someone else's pressure. A natural leader, you want to be in charge and need to have a purpose. You have courage, but make sure you're also flexible and take other people's ideas seriously. You may have some arrogant tendencies though (no one's perfect) — so just be sure to keep 'em in check.\n" +
        "U : If you have U in your name, then you probably have a give-and-take kind of life. You might gain a lot, only to lose it, but will always break even. The trick here is to commit — whatever the project or whoever the person. You're naturally lucky, but you should also remember to tap into your instinct and creativity.\n" +
        "N : Always one to take the path less traveled, you are a 'think outside the box' kind of person — creative and original.you are also quite systematic about your life, documenting experiences in diary form, and might have your share of romantic 'entanglements.'\n" +
        "I : Balance is key for I. You are a compassionate person who feels things deeply. Make sure you stick close to projects and have direction — otherwise, you might suffer from anxiety. Many Is have an affinity for the arts.\n" +
        "D : Determined, grounded, and pragmatic — sometimes to a fault. You have great systems in place for getting things done...[but] be careful not to be too stubborn, because at your best, you shine under pressure and can get things done fast,\n" +
        "H : H represents creativity and power.you fight any doubts you might have about yourself and spend plenty of time outdoors.";
    } else if (d === 20 && m === 2) {
      this.name = "Mr Rajiv Aneja";
      this.age = y - 1972;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Birthday";
      nm = 13;
      this.me = "CLICK MY PIC";
    } else if (d === 17 && m === 6) {
      this.name = "Mr Rajesh Mehndiratta";
      this.age = y - 1978;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Birthday";
      nm = 14;
      this.me = "CLICK MY PIC";
      this.desc =
        "R : You feel feelings — a lot. And, this inner intensity often emanates outward. Not only do you possess an inherently kind nature, but you also have an exemplary work ethic — meaning you'll make sure a job gets done, no matter what. That said, Numerology.com advises you make sure to keep a balance and to work well with others.\n" +
        "A : It's little wonder A names are drawn to adjectives like ambitious or adventurous. You do not change your mind under someone else's pressure, explains Numerology.com. A natural leader, you want to be in charge and need to have a purpose. You have courage, but make sure you're also flexible and take other people's ideas seriously. You may have some arrogant tendencies though (no one's perfect) — so just be sure to keep 'em in check.\n" +
        "J : In this specific case, 'J' is for justice. You are all about fairness and balancing the scales, says Numerology.com. You make an exemplary friend and try hard to make sure everyone is happy and comfortable. Don't forget about your own needs, though. Make sure to motivate yourself enough to tap into natural talents.\n" +
        "E : Es are a keen bunch, not easily deceived, and they can see a situation from many different sides. According to Numerology.com, those with the letter in their name are freedom-loving, sensual, and enthusiastic. You not only believe strongly in falling in love, but are outgoing and the life of the party.\n" +
        "S : Though charming and charismatic, S is also very sensitive and those with the letter in their names feel things deeply, according to Numerology.com. This, in turn, can lead to overly dramatic reactions and an intense inner life. Making sure you're seeing a situation for what it is will help you balance and steady your emotional ups and downs.\n" +
        "H : H represents creativity and power. Numerology.com advises those with the letter in their name to fight any doubts you might have about yourself and spend plenty of time outdoors.";
    } else if (d === 13 && m === 7) {
      this.name = "Mr Rajesh AND Mrs Smita";
      this.age = y - 2003;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Anniversary";
      nm = 15;
      this.me = "CLICK OUR PIC";
    } else if (d === 16 && m === 2) {
      this.name = "Mrs Smita Mehndiratta";
      this.age = y - 1981;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Birthday";
      nm = 16;
      this.me = "CLICK MY PIC";
    } else if (d === 7 && m === 1) {
      this.name = "Mr Vikas Mehndiratta";
      this.age = y - 1982;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Birthday";
      nm = 17;
      this.me = "CLICK MY PIC";
    } else if (d === 2 && m === 10) {
      this.name = "Mr Vikas AND Mrs Jyoti";
      this.age = y - 2006;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Anniversary";
      nm = 18;
      this.me = "CLICK OUR PIC";
      this.desc =
        "सात फेरों से बंधा यह प्यार का बंधन,\n" +
        "जीवन भर यूं ही बंधा रहे,\n" +
        "किसी की नजर ना लगे आपके प्यार को\n" +
        "और आप यूं ही हर साल सालगिरह मनाते रहे।";
      this.url =
        "https://drive.google.com/file/d/18LdlKztkTZdmtCeR43R5orRixgITHbbt/preview";
    } else if (d === 16 && m === 1) {
      this.name = "Himanshu Batra";
      this.age = y - 1995;
      this.to = "TO";
      this.wish = "Wishing " + this.age + " Happy Birthday";
      nm = 19;
      this.me = "CLICK MY PIC";
      this.desc =
        "Congratulations \n" +
        "🥳🍫🍔🍕😂🔥🎂🎂🍰🍦🍧🍬 \n" +
        "Happy Birthday to you";
    }

    const show = this.state.menu ? "show" : "";
    const rotate = this.wish === "" ? "" : "rotat";
    return (
      <div>
        <img
          onClick={() => {
            this.togle();
            this.media();
          }}
          className={"rounded-circle sticky-top " + rotate}
          src={this.src[nm]}
          alt="Birthday/Anniversary"
          height="250px"
          width="250px"
        />
        <br></br>
        <br></br>
        <span
          style={{ borderRadius: "20px" }}
          onClick={() => {
            this.togle();
            this.media();
          }}
          className="mypic btn btn-outline-warning bg-white"
        >
          {this.setTimeOrMe()}
        </span>
        <br></br>
        <br></br>
        <div
          id="description"
          style={{
            maxHeight: "20vh",
            overflow: "scroll",
            boxShadow: "0px 0px 5px 3px white",
          }}
          className={"bg-info rounded text-white ml-2 mr-2 collapse " + show}
        >
          <div style={{ whiteSpace: "pre-line", margin: "10px 20px" }}>
            <table>
              <tbody>
                <tr>
                  <th>{this.name}</th>
                </tr>
              </tbody>
            </table>
            <span style={{ textAlign: "left" }}>{this.desc}</span>
          </div>
        </div>
        <br></br>
        {this.tags()}
      </div>
    );
  }
  setTimeOrMe() {
    let index = this.findIndex();
    let length = data.length;
    if ((this.state.month === data[index % length].month && this.state.date === data[index % length].day - 1) ||
      (this.state.month === data[index % length].month - 1 && data[index % length].day === 1)) {
      this.me = (
        <span>
          {data[index % length].name}&nbsp;{data[index % length].type}
          <br />
          will be in
          <br />
          {this.state.hours} hrs : {this.state.minutes} min : {this.state.seconds} s
        </span>
      );
    }
    return this.me;
  }
  tags() {
    if (this.wish !== "") {
      return (
        <div>
          <h3 className="marquee text-danger bg-warning font-italic progress-bar-striped progress-bar-animated">
            <p>{this.wish}</p>
          </h3>
          <h3 className="text-white font-italic bg-danger progress-bar-striped progress-bar-animated">
            {this.to}
          </h3>
          <h3 className="marquee text-success font-italic bg-warning progress-bar-striped progress-bar-animated">
            <p>{this.name}</p>
          </h3>
        </div>
      );
    } else {
      return (
        <h3 className="marquee text-success font-italic bg-warning progress-bar-striped progress-bar-animated">
          <p>{this.name}</p>
        </h3>
      );
    }
  }
  togle() {
    this.setState({
      menu: !this.state.menu,
      music: !this.state.music,
    });
  }
  media() {
    if (this.me === "CLICK OUR PIC") {
      if (this.state.music === false) this.state.anniSong.play();
      else this.state.anniSong.pause();
    } else if (this.me === "CLICK MY PIC") {
      if (this.state.music === false) this.state.birSong.play();
      else this.state.birSong.pause();
    }
  }

  componentDidMount() {
    if (this.wish !== "") {
      document.getElementById("back").style.background =
        "url('images/6k2.gif'),url('images/cele.gif'),black";
    } else {
      document.getElementById("back").style.background = "whiteSmoke";
    }
    if (this.me === "CLICK OUR PIC") {
      this.state.anniSong.addEventListener("ended", () => {
        this.setState({ music: false, menu: false });
        this.media();
      });
    } else if (this.me === "CLICK MY PIC") {
      this.state.birSong.addEventListener("ended", () => {
        this.setState({ music: false, menu: false });
        this.media();
      });
    }
    if (
      this.name === "Bhairvi Mehndiratta" ||
      this.name === "Mr Vikas AND Mrs Jyoti" ||
      this.name === "Mr Rajiv AND Mrs Savi" ||
      this.name === "Aishwarya Aneja"
    ) {
      this.setState({
        video: true,
      });
    }
    if (this.me?.props?.children.includes("will be in")) {
      let sec = this.state.seconds;
      let min = this.state.minutes;
      let hrs = this.state.hours;
      const timeline = setInterval(() => {
        if (sec === 0) {
          if (min !== 0) {
            sec = 59;
            min = min - 1;
          }
          if (min === 0 && hrs !== 0) {
            min = 59;
            hrs = hrs - 1;
          }
        } else {
          sec = sec - 1;
        }
        if (hrs <= 0 && min <= 0 && sec <= 0) {
          clearInterval(timeline);
          window.location.assign(window.location.href);
        }
        this.setState({
          hours: hrs,
          minutes: min,
          seconds: sec
        });
      }, 1000);
    }
  }
  componentWillUnmount() {
    if (this.me === "CLICK OUR PIC") {
      this.state.anniSong.removeEventListener("ended", () => {
        this.setState({ music: false, menu: false });
        this.media();
      });
    } else if (this.me === "CLICK MY PIC") {
      this.state.birSong.removeEventListener("ended", () => {
        this.setState({ music: false, menu: false });
        this.media();
      });
    }
  }
  findIndex() {
    for (let i = 0; i < data.length; i++) {
      if (
        (data[i].month === this.state.month && data[i].day >= this.state.date) ||
        data[i].month > this.state.month
      )
        return i;
    }
    return 0;
  }
  getDayName(day, month) {
    return this.days[
      new Date(Date.UTC(this.state.year, month - 1, day)).getDay()
    ];
  }
  render() {
    const vid = this.state.video ? "block" : "none";
    const index = this.findIndex();
    const length = data.length;
    return (
      <div>
        <div
          id="back"
          align="center"
          style={{ padding: "20px", background: "whiteSmoke" }}
        >
          {this.check(this.state.date, this.state.month, this.state.year)}
        </div>
        <div style={{ width: "100vw", height: "100vh", display: vid }}>
          <iframe
            title="anniversaryvideo"
            width="100%"
            height="100%"
            src={this.url}
            allowFullScreen
          ></iframe>
        </div>
        <Link className="links" to="all-events">
          <h3 style={{ color: "purple", margin: "1rem" }}>
            UPCOMING EVENTS <i className="fa fa-chevron-right"></i>
          </h3>
        </Link>
        <div className="row m-2">
          <div className="col-12 col-lg-4 col-md-4 col-sm-4">
            <div
              className="text-center text-white"
              style={{
                backgroundColor: `${data[index % length].type === "Birthday"
                  ? "dodgerBlue"
                  : "red"
                  }`,
                borderRadius: "1rem",
                padding: "1rem",
                marginBottom: "0.5rem"
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
                  src={data[index % length].image}
                  style={{ borderRadius: "50%" }}
                  alt="img"
                  width="100%"
                  height="100%"
                />
              </div>
              <h4>{data[index % length].name}</h4>
              <h4>{data[index % length].type}</h4>
              <h4>
                {data[index % length].day} {data[index % length].month_name}
                {", "}
                {this.getDayName(
                  data[index % length].day,
                  data[index % length].month
                )}
              </h4>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4 col-sm-4">
            <div
              className="text-center text-white"
              style={{
                backgroundColor: `${data[(index + 1) % length].type === "Birthday"
                  ? "dodgerBlue"
                  : "red"
                  }`,
                borderRadius: "1rem",
                padding: "1rem",
                marginBottom: "0.5rem"
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
                  src={data[(index + 1) % length].image}
                  style={{ borderRadius: "50%" }}
                  alt="img"
                  width="100%"
                  height="100%"
                />
              </div>
              <h4>{data[(index + 1) % length].name}</h4>
              <h4>{data[(index + 1) % length].type}</h4>
              <h4>
                {data[(index + 1) % length].day}{" "}
                {data[(index + 1) % length].month_name}
                {", "}
                {this.getDayName(
                  data[(index + 1) % length].day,
                  data[(index + 1) % length].month
                )}
              </h4>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4 col-sm-4">
            <div
              className="text-center text-white"
              style={{
                backgroundColor: `${data[(index + 2) % length].type === "Birthday"
                  ? "dodgerBlue"
                  : "red"
                  }`,
                borderRadius: "1rem",
                padding: "1rem",
                marginBottom: "0.5rem"
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
                  src={data[(index + 2) % length].image}
                  style={{ borderRadius: "50%" }}
                  alt="img"
                  width="100%"
                  height="100%"
                />
              </div>
              <h4>{data[(index + 2) % length].name}</h4>
              <h4>{data[(index + 2) % length].type}</h4>
              <h4>
                {data[(index + 2) % length].day}{" "}
                {data[(index + 2) % length].month_name}
                {", "}
                {this.getDayName(
                  data[(index + 2) % length].day,
                  data[(index + 2) % length].month
                )}
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Aashiana;
