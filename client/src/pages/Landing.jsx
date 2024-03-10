import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
// import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job<span> tracking</span> app
          </h1>
          <p>
            I'm baby meditation pug listicle, photo booth wolf everyday carry
            JOMO offal vaporware you probably haven't heard of them. Kinfolk
            neutra gatekeep ascot grailed, waistcoat XOXO mlkshk shaman fixie
            polaroid helvetica. Tofu letterpress tonx chicharrones seitan.
            Shoreditch freegan farm-to-table tumeric, shabby chic Brooklyn
            portland hella hexagon hot chicken palo santo marxism. Meditation
            chartreuse celiac, blog quinoa dreamcatcher selvage mukbang
            succulents hashtag roof party irony art party hammock tofu. Deep v
            gochujang paleo, marfa twee before they sold out microdosing edison
            bulb forage.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
