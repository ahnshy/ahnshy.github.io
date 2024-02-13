import React from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const Footer = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container id="footer">
      <Profile>
        <Slide direction="right" delay={1}>
          <h1>HoSeong, Ahn</h1>
        </Slide>
        <div className="address">
          <Slide direction="right">
            <h1></h1>
          </Slide>
          <Slide direction="left">
            <p>45, Heolleung-ro 8-gil, Seocho-gu, Seoul, Republic of Korea</p>
          </Slide>
        </div>
        <div className="links">
          <Slide direction="left">
            <h3></h3>
          </Slide>
          <div>
            <span>
              <FiPhoneCall/>
            </span>
            <Slide direction="left">
              <a href="tel:+82-10-9655-0787">+82-10-9655-0787</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen/>
              </span>
            </Slide>
            <Slide>
              <a href="mailto:ahnshy@naver.com">ahnshy@naver.com</a>
            </Slide>
          </div>
        </div>
        <div className="profiles">
        </div>
          <div className="profiles">
            <Slide direction="right">
              <h1></h1>
            </Slide>
            <div className="icons">
              <Zoom>
              <span>
                <a href="https://github.com/ahnshy/">
                  <AiFillGithub/>
                </a>
              </span>
              </Zoom>
              <Zoom>
              <span>
                <a href="/">
                  <AiFillLinkedin/>
                </a>
              </span>
              </Zoom>
              <Zoom>
              <span>
                <a href="/">
                  <BsFacebook/>
                </a>
              </span>
              </Zoom>
              <Zoom>
              <span>
                <a href="/">
                  <BsSlack/>
                </a>
              </span>
              </Zoom>
            </div>
          </div>
          <Fade>
            <ArrowUp onClick={scrollUp}>
              <AiOutlineArrowUp/>
            </ArrowUp>
          </Fade>
      </Profile>
    </Container>
);
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }
  }

  .footers {
    float: right;
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: orange;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #078cbd;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #078cbd;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #078cbd51);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #078cbd51);
      }
    }
  }
`;
