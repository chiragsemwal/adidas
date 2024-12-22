import { data } from "autoprefixer";
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

function StealsOfTheSeason() {
  const images = [
    {
      img: `https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/running_Copy_2_9b60a74c6b.jpg`,
      text: `RUNNING SHOES at MIN. 40% OFF`,
    },
    {
      img: `https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/winter_wear_4_Copy_d8edc03031.jpg`,
      text: `WINTERWEAR MIN. 30% OFF`,
    },
    {
      img: `https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/sneakers_women_Copy_2_3497801530.jpg`,
      text: `Sneakers Min 40% OFF`,
    },
    {
      img: `https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/women_pants_Copy_de257f8e32.jpg`,
      text: `Pants at Min 40% OFF`,
    },
    {
      img: `https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/LAST_SIZE_MEN_Copy_2_7c8ffef5c6.jpg`,
      text: `Last Sizes up to 60% OFF`,
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
        <h1 className=" text-3xl my-9 font-bold m-4 ">STEAL OF THE SEASON</h1>

        <Slider {...settings}>
          {images.map((d) => (
            <div className=" m-4 h-[410px] w-[305px] ">
              <div className=" mx-3 ">
                <img src={d.img} alt="" />
              </div>
              <div>
                <p className=" font-semibold mx-4  underline my-6  uppercase ">
                  {d.text}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default StealsOfTheSeason;
