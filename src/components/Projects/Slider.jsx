import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "https://image.zdnet.co.kr/2020/02/21/yoyoma_gW0RoOsXWcJCU.jpg",
        disc : "[HANCOM] PKI Certification Tookit Development"
    },
    {
        img : "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/302127747_375068878154697_6945516361758070674_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=TGCTV8TUroQAX8JjU-7&_nc_ht=scontent-ssn1-1.xx&oh=00_AfAkltXCjmV5x8lInXHtLmi95ZKyxtqVvDmRVE1wtQQQ7Q&oe=65D019BA",
        disc : "[Namo Interactive] Web Editor, Web Editor Active-X, E-Book Editor"
    },
    {
        img : "https://i0.wp.com/elinformante.com.do/wp-content/uploads/2020/07/Samsung-Logotipo.jpg?resize=1068%2C601&ssl=1",
        disc : "[Samsung Electronics] Javascripts and Win32/COM Active-X Developer"
    },
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SejnIwPAdoLNG2EaTaFJ8XsBDdGIFpCg-icXh8YD4PFa1ExZThC2fs6q_fTn4y_LN0U&usqp=CAU",
        disc : "[Osstem Implant] Dental Orthodontic Software Development"
    },
    {
        img : "https://blog.kakaocdn.net/dn/Rwynw/btrwZYwTo6a/r4k4KIYmTY2JSA61kCGiBK/img.png",
        disc : "[Korean Government Ministry of Foreign Affairs] Server, Console Security Agent Application"
    },
    {
        img : "https://images.ctfassets.net/69ywg46tbhs3/auGJym4uLSa5fcVH8bHrk/6d63fafd030623cb97227fdd44ed5b79/LG.png?w=486&h=273&fit=pad&q=100&fm=webp&bg=rgb%3Affffff",
        disc : "[LG Electronics] Spring Boot 2.7 and Javascripts react.js"
    },
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`
