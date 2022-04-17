import React from "react";
import Head from "next/head";
import AboutUs from "/container/AboutUs/AboutUs";

const AboutUsPage = (props) => {

  return (
    <>
      <Head>
        <title>Our Story | Study Abroad Apartments</title>
      </Head>
      <div className="container" >
      <AboutUs />
    </div>
    </>

  );
};

export default AboutUsPage;
