import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { Instagram, LinkedIn, YouTube, GitHub } from "@material-ui/icons";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "C#",
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "Adobe Premier Pro",
        "Adobe Photoshop",
        "MS Office",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/kos.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Thomas Vu</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <div className="links">
            <GitHub
              onClick={() =>
                window.open("https://github.com/ThomasVuu1", "_blank")
              }
            />
            <Instagram
              onClick={() =>
                window.open("https://www.instagram.com/thomasvuu/", "_blank")
              }
            />
            <LinkedIn
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/thomas-vu-8813bb159/",
                  "_blank"
                )
              }
            />
            <YouTube
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCG8aZXSMy0PdOzWBix1Onmg",
                  "_blank"
                )
              }
            />
          </div>
        </div>
        <a href="#aboutMe">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
