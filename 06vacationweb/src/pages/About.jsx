import React from "react";
import aboutImg from "../assets/about-img.jpg";

function About() {
  return (
    <section className="py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 items-center">
          <div className="">
            <h1 className="text-5xl font-bold">
              Escape to Your Dream Vacation
            </h1>
            <p className="mt-5">
              Discover the perfect getaway with tailored experiences for every
              traveler. Whether you're seeking adventure, relaxation, or
              cultural exploration, we have destinations that will inspire and
              refresh. Start planning your unforgettable journey today!
            </p>
            <a
              href="#"
              className="mt-5 px-8 py-2 bg-blue-700 rounded-3xl text-white hover:bg-blue-800 transition-all inline-block    "
            >
              Get started
            </a>
          </div>
          <div>
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
