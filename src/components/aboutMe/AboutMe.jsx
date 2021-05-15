import { useEffect, useState } from "react";
import "./aboutMe.scss";
import AboutMeList from "../aboutMeList/AboutMeList";
import {
  aboutAboutMe,
  stationaryAboutMe,
  macBookAboutMe,
  gearAboutMe,
} from "../../data";

export default function AboutMe() {
  const [selected, setSelected] = useState("about");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "about",
      title: "About Me",
      left: "40%",
      right: "60%",
    },
    {
      id: "stationary",
      title: "Stationary PC",
      left: "60%",
      right: "40%",
    },
    {
      id: "macBook",
      title: "MacBook Pro",
      left: "40%",
      right: "60%",
    },
    {
      id: "gear",
      title: "Gear",
      left: "60%",
      right: "40%",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "about":
        setData(aboutAboutMe);
        break;
      case "stationary":
        setData(stationaryAboutMe);
        break;
      case "macBook":
        setData(macBookAboutMe);
        break;
      case "gear":
        setData(gearAboutMe);
        break;
      default:
        setData(aboutAboutMe);
        break;
    }
  });
  return (
    <div className="aboutMe" id="aboutMe">
      <h1>Thomas Thanh Công Vu</h1>
      <ul>
        {list.map((item) => (
          <AboutMeList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="slide">
            <div className="left">
              <img src={d.img} alt="" className="imgContainer" />
            </div>
            <div className="right">
              <div className="rightContainer">
                <div className="textContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
