import React from "react";
import vacationImg1 from "../assets/vacation-vector-1.avif";
import vacationImg2 from "../assets/vacation-vector-2.avif";

function Home() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="">
              <h1 className="text-5xl font-bold">
                Download Now
                <small className="text-3xl font-bold block mt-4">
                  Lorem Ipsum
                </small>
              </h1>
              <a
                href="#"
                className="mt-5 px-8 py-2 bg-blue-700 rounded-3xl text-white hover:bg-blue-800 transition-all inline-block    "
              >
                Get started
              </a>
            </div>
            <div>
              <img src={vacationImg2} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mx-auto max-w-screen-sm">
            <img src={vacationImg1} alt="" />
            <small className="text-5xl font-bold block mt-4">
              Lorem Ipsum Yojo
            </small>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
