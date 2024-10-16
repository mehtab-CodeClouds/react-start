import React from "react";
import contactImg from "../assets/contact-us.jpg";

function Contact() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <img src={contactImg} alt="" />
            </div>
            <div className="">
              <h1 className="text-5xl font-bold">Get in Touch with Us</h1>
              <p className="mt-5">
                We're here to help you plan the vacation of a lifetime. Whether
                you have questions, need assistance, or want personalized
                recommendations, our team is ready to assist. Reach out to us
                today, and let's make your dream getaway a reality!
              </p>
              <a
                href="#"
                className="mt-5 px-8 py-2 bg-blue-700 rounded-3xl text-white hover:bg-blue-800 transition-all inline-block    "
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
