import "./about.css";
import Award from "../../img/award.png";
import Me2 from "../../img/me2.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me2}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Be with a Attitude that "If i can't do, Nobody can do"
        </p>
        <p className="a-desc">
          I have worked as a Technical and Aptitute Trainner and Trainned 
          more over 1000+ Students . The Trainned Students are placed in 
          Top MNC's that includs both Service based and Product based Companys
          in INDIA. 
          And i am Recently Addicted to Java.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">World Record Awards 2017</h4>
            <p className="a-award-desc">
              I Won a World Record on Hackandroid for the Hacking Mulitple device
              at a single time. Record ID : HA-WRH CBE 5054.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;