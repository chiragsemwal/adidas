import React from "react";
import NavBar from "./Components/NavBar";
import EndOfSeasonSaleBanner from "./Components/EndOfSeasonSaleBanner";
import StealsOfTheSeason from "./Components/StealsOfTheSeason";
import StockUpAndSave from "./Components/StockUpAndSave";
import { AiFillInstagram } from "react-icons/ai";

function App() {
  return (
    <>
      <NavBar />
      <EndOfSeasonSaleBanner />
      <StealsOfTheSeason />
      <StockUpAndSave />

      <div className=" relative">
        <img
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/Crciket_ecom_set_mast_head_2880x1280_afbf8a7023.jpg"
          alt=" indian team banner "
        />

        <div className=" absolute bottom-32 left-16 ">
          <p className="mb-1">
            <span className=" bg-white border text-xl font-bold p-1 ">
              WEAR YOUR STRIPES
            </span>
          </p>
          <p className="mt-2">
            <span className=" bg-white border font-light text-base p-1 ">
              All New adidas Team India ODI Jersey
            </span>
          </p>
          <button className="bg-white border font-bold text-lg py-3 px-8 mt-6 ">
            Shop Now
          </button>
        </div>
      </div>

      <div className=" bg-black text-white ">
        <div className=" flex flex-col items-center gap-4 py-20 px-96 ">
          <h2 className=" text-3xl font-bold ">
            STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949
          </h2>

          <p className=" font-light ">
            Sport keeps us fit. Keeps you mindful. Brings us together. Through
            sport we have the power to change lives. Whether it is through
            stories of inspiring athletes. Helping you to get up and get moving.
            Sportswear featuring the latest technologies, to up your
            performance. Beat your PB. adidas offers a home to the runner, the
            basketball player, the soccer kid, the fitness enthusiast. The
            weekend hiker that loves to escape the city. The yoga teacher that
            spreads the moves. The 3-Stripes are seen in the music scene. On
            stage, at festivals. Our sports clothing keeps you focused before
            that whistle blows. During the race. And at the finish lines. We’re
            here to support creators. Improve their game. Their lives. And
            change the world.
          </p>
          <p className=" font-light ">
            adidas is about more than sportswear and workout clothes. We partner
            with the best in the industry to co-create. This way we offer our
            fans the sports apparel and style that match their athletic needs,
            while keeping sustainability in mind. We’re here to support
            creators. Improve their game. Create change. And we think about the
            impact we have on our world.
          </p>

          <a href="">
            {" "}
            <img
              className=" h-[40px] "
              src="https://static.vecteezy.com/system/resources/previews/010/994/239/non_2x/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg"
              alt="logo"
            />{" "}
          </a>
        </div>
      </div>

      <section>
        <div className=" bg-customAdidasYellow flex items-center justify-center gap-5 p-12 ">
          <p className=" text-3xl font-bold uppercase  ">
            <span>Join adidas and get 15% OFF</span>
          </p>

          <button className="  bg-black text-white py-3 px-8 uppercase text-sm tracking-wide ">
            sign up for free
          </button>
        </div>
      </section>

      <section>
        <div className="  ">
          <ul className=" footer-ul flex gap-10 justify-center px-[40px] pt-[40px] pb-[30px] mx-[95px] ">
            <li>
              <h5 className=" font-bold text-lg ">PRODUCTS</h5>
              <ul>
                <li className=" font-extralight text-sm ">Footwear</li>
                <li className="">Clothing</li>
                <li>Accessories</li>
                <li>
                  <div className="seprator h-2 "></div>
                </li>
                <li>Outlet-Sale</li>
                <li>New Arrivals</li>
                <li className=" whitespace-break-spaces">
                  WEEKEND SALE - EXTRA <br />
                  20% OFF
                </li>
                <li>Flat 50% Off!</li>
              </ul>
            </li>
            <li>
              <h5 className=" font-bold  ">SPORTS</h5>
              <ul>
                <li>CRICKET</li>
                <li>Running</li>
                <li>Football</li>
                <li>Gym/Training</li>
                <li>Tennis</li>
                <li>Outdoor</li>
                <li>Basketball</li>
                <li>Swimming</li>
                <li>Skateboarding</li>
              </ul>
            </li>
            <li>
              <h5 className=" font-bold  ">COLLECTIONS</h5>
              <ul>
                <li>Ultraboost</li>
                <li>Superstar</li>
                <li>NMD</li>
                <li>Stan Smith</li>
                <li>Sustainability</li>
                <li>Predator</li>
                <li>Parley</li>
                <li>Adicolor</li>
              </ul>
            </li>
            <li>
              <h5 className=" font-bold  ">SUPPORT</h5>
              <ul>
                <li>Help</li>
                <li>Customer Services</li>
                <li>Returns & Exchanges</li>
                <li>Shipping</li>
                <li>Order Tracker</li>
                <li>Store Finder</li>
                <li>adiClub</li>
                <li>
                  adiclub Terms and <br /> conditions
                </li>
              </ul>
            </li>
            <li>
              <h5 className=" font-bold  ">COMPANY INFO</h5>
              <ul>
                <li>About Us</li>
                <li>adidas stories</li>
                <li>adidas Apps</li>
                <li>Entity Details</li>
                <li>Press</li>
                <li>Careers</li>
              </ul>
            </li>
            <li>
              <h5 className=" font-bold  ">FOLLOW US</h5>
              <ul>
                <li>
                  <AiFillInstagram />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <div className=" text-center bg-customAdidasGrey text-white  pt-3 pb-5">
          <ul className=" flex justify-center gap-4 items-center mb-3 ">
            <li className=" border-r-2 px-[15px] my-[15px] text-xs font-thin  ">
              Privacy Policy
            </li>
            <li className="border-r-2 px-[15px] my-[15px] text-xs font-thin ">
              Terms and Conditions
            </li>
            <li className=" px-[15px] my-[15px] text-xs font-thin ">Cookies</li>
          </ul>
          <span className="text-xs font-thin">
            ©2024 adidas India Marketing Pvt. Ltd
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
