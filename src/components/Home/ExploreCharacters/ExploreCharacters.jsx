import React, { useEffect, useState } from "react";
import classes from "./ExploreCharacters.module.css";
import "./ExploreCharacters.css";
import clsx from "clsx";
import { FaStar } from "react-icons/fa";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import {
  smartAdvisor,
  friendlyHelper,
  techGuru,
  creativeMind,
  fitnessCoach,
} from "images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Heading, Text } from "components/common";

const ExploreCharacters = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const charectars = [
    {
      rating: "4.5",
      img: smartAdvisor,
      title: "Smart Advisor",
      info: "Offers professional advice on business, tech, and more.",
    },
    {
      rating: "4.5",
      img: friendlyHelper,
      title: "Friendly Helper",
      info: "Provides support with a warm, friendly tone.",
    },
    {
      rating: "4.5",
      img: techGuru,
      title: "Tech Guru",
      info: "Specializes in solving complex issues and providing insights.",
    },
    {
      rating: "4.5",
      img: creativeMind,
      title: "Tech Guru",
      info: "Inspires with artistic and creative ideas for projects.",
    },
    {
      rating: "4.5",
      img: fitnessCoach,
      title: "Fitness Coach",
      info: "Guides users with personalized workouts and fitness tips Guides users with pe.",
    },
  ];
  const [slidesToShow, setSlidesToShow] = useState(3.7);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setSlidesToShow(3.8);
      } else if (width >= 1199) {
        setSlidesToShow(2.9);
      } else if (width >= 991) {
        setSlidesToShow(2.2);
      } else if (width >= 767) {
        setSlidesToShow(1.9);
      } else if (width >= 575) {
        setSlidesToShow(1.1);
      } else {
        setSlidesToShow(3.7);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.7,
    arrows: true,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
    nextArrow: (
      <CustomNextArrow
        currentSlide={currentSlide}
        slideCount={charectars.length}
        slidesToShow={slidesToShow}
      />
    ),
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3.8,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2.9,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.9,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.1,
        },
      },
    ],
  };

  return (
    <section className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <div className={classes.header}>
          <Heading xl gradient medium>
            Explore Characters
          </Heading>
        </div>
        <div className={classes.charectars}>
          <Slider {...settings}>
            {charectars?.map((character, i) => (
              <div key={i}>
                <div className={classes.character}>
                  <Text className={classes.rating} sm medium primitive400>
                    <FaStar className={classes.star} />
                    {character.rating}
                  </Text>
                  <img src={character.img} className={classes.img} alt="#" />

                  <div className={classes.info}>
                    <Heading lg medium primitive50>
                      {character.title}
                    </Heading>

                    <Text base primitive400>
                      {character.info}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <Button primary className={classes.button}>
          See All
        </Button>
      </div>
    </section>
  );
};

export default ExploreCharacters;
const CustomPrevArrow = ({ currentSlide, slideCount, onClick }) => {
  const isActive = currentSlide !== 0; // Check if current slide is not the first slide
  return (
    <button
      onClick={onClick}
      className={clsx(classes.nextButton, isActive && classes.activeButton)}
    >
      <FaCircleChevronLeft className={classes.arrow} />
    </button>
  );
};

const CustomNextArrow = ({
  currentSlide,
  slideCount,
  onClick,
  slidesToShow,
}) => {
  const isActive = currentSlide < slideCount - slidesToShow;

  return (
    <button
      onClick={onClick}
      className={clsx(classes.previousButton, {
        [classes.activeButton]: isActive,
      })}
    >
      <FaCircleChevronRight className={classes.arrow} />
    </button>
  );
};
