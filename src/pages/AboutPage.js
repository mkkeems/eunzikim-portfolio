import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { getvw } from "../assets/styles/mixins";
import { colors } from "../assets/styles/variables";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PageContainer } from "../components/PageContainer";
import aboutImg from "../assets/images/about-img.jpg";

const Content = styled.div`
  flex: 1 0 auto;
  padding: ${getvw(125)} ${getvw(306)};
  justify-content: space-around;
`;

const Wrap = styled.div`
  display: flex;

  .about-img {
    width: ${getvw(480)};
    margin-right: ${getvw(131)};
  }
  .about-text {
    .title {
      font-size: ${getvw(30)};
      line-height: ${getvw(36)};
      width: 100%;
      padding-bottom: ${getvw(10)};
      border-bottom: 1px solid black;
    }
    p {
      margin-top: ${getvw(30)};
      font-size: ${getvw(18)};
      line-height: ${getvw(30)};
    }
  }
  .links {
    color: black;
  }
`;

const AboutPage = () => {
  return (
    <PageContainer>
      <Navbar />
      <Content>
        <Wrap>
          <img src={aboutImg} alt="about-image" className="about-img" />
          <div className="about-text">
            <div className="title">A little more about me</div>
            <p>
              I’m a product designer and creative thinker with a background in
              art and digital marketing. Working and studying different fields
              help me to broaden my perspective and perform based on both
              qualitative and quantitative research. I am specifically
              passionate about building products to raise questions to people to
              acknowledge social issues.
            </p>
            <p>
              In my spare time, I go to museums or watch artists’ interviews.
              Artist mindset gives me motivation and inspiration in little
              things. I take photos both film and digital. Recently, I’ve been
              making some 4D art on Blender!
            </p>
            <p>
              Let’s get to know each other! Would love to chat about design,
              tech, job - you name it! Reach me via{" "}
              <a href={`mailto:eunzoaz@gmail.com`} className="links">
                email
              </a>
              , connect with me on{" "}
              <Link
                to={{
                  pathname: "https://www.linkedin.com/in/eunji-kim-449686b8/",
                }}
                target="_blank"
                className="links"
              >
                LinkedIn
              </Link>
              .
            </p>
          </div>
        </Wrap>
      </Content>
      <Footer />
    </PageContainer>
  );
};

export default AboutPage;
