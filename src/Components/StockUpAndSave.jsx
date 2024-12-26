import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function changeImages() {}

function StockUpAndSave() {
  const images = [
    {
      img: `https://assets.adidas.com/images/w_600,f_auto,q_auto/980b261d1ede4f98bb2baf49006a4796_9366/HYPERON_1.0_SHOES_Grey_CM4822_01_standard.jpg`,
      text: `price`,
    },
    {
      img: `https://assets.adidas.com/images/w_600,f_auto,q_auto/09a74b1023f2497989f9ad55005f1538_9366/CLEAR_FACTOR_SHOES_Black_EX2038_01_standard.jpg`,
      text: `price`,
    },
    {
      img: `https://assets.adidas.com/images/w_600,f_auto,q_auto/53d5675eeb214477a348ad8600490fe3_9366/ADIVAT_SHOES_Black_EX2046_01_standard.jpg`,
      text: `price`,
    },
    {
      img: `https://assets.adidas.com/images/w_600,f_auto,q_auto/f552a0820d4c49fe9141aede0080cae3_9366/ADI_EASE_SHOES_Black_EY2903_01_standard.jpg`,
      text: `price`,
    },
    {
      img: `https://assets.adidas.com/images/w_600,f_auto,q_auto/ddfb91ab03b94727b3e6adcd00848e2a_9366/ADI_RUDH_SHOES_Black_EY2980_01_standard.jpg`,
      text: `price`,
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow className={`bg-black`} />,
    prevArrow: <Arrow />,
  };

  return (
    <>
      <div className=" w-full px-12 m-auto ">
        <h1 className="text-3xl font-bold m-4"> Stock Up & Save </h1>

        <div className=" ml-4  ">
          <ul className=" flex gap-2 ">
            <li>
              <button
                className="  border-2 p-2 border-black hover:bg-black hover:text-white  "
                type="button"
              >
                RUNNING
              </button>
            </li>
            <li>
              <button
                className=" border-2 p-2 border-black hover:bg-black hover:text-white "
                type="button"
              >
                SPORTSWEAR
              </button>
            </li>
            <li>
              <button
                className=" border-2 p-2 border-black hover:bg-black hover:text-white "
                type="button"
              >
                LIFESTYLE
              </button>
            </li>
            <li>
              <button
                className=" border-2 p-2 border-black hover:bg-black hover:text-white "
                type="button"
              >
                TRAINING
              </button>
            </li>
          </ul>
        </div>

        <Slider {...settings}>
          {images.map((d) => (
            <div className="m-4 h-[278px] w-[278px] ">
              <div className="mx-1">
                <img src={d.img} alt="" />
              </div>
              <div>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default StockUpAndSave;
