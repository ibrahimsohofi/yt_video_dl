import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="h-fit bg-gray-800 text-white p-4">
      <article className="flex justify-evenly items-center">
        <section>
          <Link to="/">
            <img className="h-16 w-16" src="logo512.png" alt="" />
          </Link>
        </section>
        <section className="flex flex-col">
          <h2>Follow US</h2>
          <hr />
          <Link to="https://www.instagram.com"> Instagram</Link>
          <Link to="https://www.facebook.com"> Facebook</Link>
          <Link to="https://www.twitter.com"> Twitter</Link>
          <Link to="https://www.telegram.com"> Telegram</Link>
        </section>
        <section className="flex flex-col">
          <h2>Useful Links</h2>
          <hr />
          <Link>Downlader</Link>
          <Link>Converter</Link>
          <Link>FAQs</Link>
          <Link>Contact US</Link>
        </section>
      </article>
      <hr className="w-10/12 justify-self-center flex  mt-3" />
      <p className="p-2  justify-self-center flex ">
        ©️Copyright 2024-2025 All right reserved
      </p>
    </footer>
  );
}

export default Footer;
