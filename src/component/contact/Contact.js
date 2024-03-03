import React from "react";
import { contactConfig } from "./ContactIt";
import './contact.css';
import Navbar from "../Navbar/Navbar";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-0 m-5 md:m-10">

        <div className="mb-5 mt-3 ">
          <h1 className="text-3xl md:text-4xl mb-2 md:mb-4 text-zinc-950 flex align-center">Contact Me</h1>
          <hr className="border-t-2 my-2 mx-4 md:my-4" />
        </div>
        <div className="md:flex md:space-x-5 m-5 md:m-10">
          <div className="w-full md:w-1/2 mb-5">
            <h3 className="text-2xl py-2 md:py-4 font-semibold">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </div>
          <div className="w-full md:w-1/2">
            <form className="w-full">
              <div className="mb-4">
                <input
                  className="w-full p-2 border border-gray-600 rounded"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <div className="text-center">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
