import React from "react";

function EndOfSeasonSaleBanner() {
  return (
    <>
      <div className=" relative">
        <img
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/mh3_3114f2894c.jpg"
          alt="end of season sale"
        />
        <div className=" absolute bottom-32 left-16">
          <h2 className=" mb-4 ">
            <span className="bg-white border text-2xl font-bold p-2 ">
              FLAT 30% OFF
            </span>
          </h2>
          <p>
            <span className=" bg-white border p-2 text-base font-light">
              Save an extra 15% on 4499 INR and above!
            </span>
          </p>

          <ul className=" flex gap-2 mt-6 ">
            <li>
              <button className=" bg-white border px-5 font-bold  ">
                SHOP MEN
              </button>
            </li>
            <li>
              <button className=" bg-white border px-5 font-bold  ">
                SHOP WOMEN
              </button>
            </li>
            <li>
              <button className=" bg-white border px-5 font-bold  ">
                SHOP KIDS
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default EndOfSeasonSaleBanner;
