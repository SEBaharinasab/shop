import React from "react";
import Banner from "../../../Components/Main/Banner";
import bannerImage from "../../../images/image_20171103172326.jpg";
import Incredible from "../../../Components/Main/Incredible";
import HeroItem from "../../../Components/Main/HeroItem";
import ContactUs from "../../../Components/Main/ContactUs";
import ShowOne from "../../../Components/Main/ShowOne";
import ShowTwo from "../../../Components/Main/ShowTwo";
import ShowThree from "../../../Components/Main/ShowTree";

export default function Home() {
  return (
    <>
      {/* -------------------------------- Banner -------------------------------- */}
      <Banner
        image={bannerImage}
        alignment={"left"}
        content={<>
          <p>مرسدس بنز</p>
          <p>جی-کلاس G-500</p>
        </>}
        route={"/products/mercedes-g-500"}
      />

      {/* ------------------------- incredible products ------------------------- */}
      <Incredible />

      {/* ------------------------------ Hero Link ------------------------------ */}
      <HeroItem />

      {/* -------------ShowThree------------ incredible products ------------------------- */}
      <ShowOne />
      <ShowTwo />
      <ShowThree />

      {/* ------------------------------ Contact Us ------------------------------ */}
      <ContactUs />
    </>
  );
}
