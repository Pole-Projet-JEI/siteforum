import React, { useState, useEffect } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import Landing from "../landing/Landing";
import Axios from "axios";
export default function Slider() {
  const [dataSlider, setDataSlider] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/galerie/")
      .then((response) => {
        setDataSlider(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // dataSlider=[
  //     {
  //         "id":0,
  //         "img":"s1"
  //     },
  //     {
  //         "id":1,
  //         "img":"s2"
  //     },
  //     {
  //         "id":2,
  //         "img":"s3"
  //     },
  // ]
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div>
      {slideIndex}

      <Landing
        subtitle="FORUM"
        title="Editions Précédentes Du Forum"
        color="#004059"
      />

      <div className="container-slider">
        {/* {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src="/Imgs/s1.png"
                        />
                    </div>
                )
            })} */}
        <div className="slide active-anim">
          <img src="/Imgs/s3.png" />
        </div>
        {/* <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />

        <div className="container-dots">
          {Array.from({ length: dataSlider.length }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
