import React from "react";

function HowToUse() {
  return (
    <section className="mt-3  flex flex-row p-3 border-gray-300 border m-3 rounded-lg justify-between bg-white">
        <article className="w-[32.5%] flex flex-col  items-center gap-1">
          <h3 className="border-gray-600 border w-full text-center py-2 rounded-lg text-base ">
            Step 01: Get the video link from{" "}
            <a href="https://www.youtube.com" rel="norefer">
              Youtube{" "}
            </a>
          </h3>
          <img
            className="rounded-md"
            src="./images/img.jpg"
            alt="getthe link from youtube"
          />
        </article>
        <article className="w-[32.5%] flex flex-col  items-center gap-1">
          <h3 className="border-gray-600 border w-full text-center py-2 rounded-lg text-base ">
            Step 02: Paste the link in our site input field
          </h3>
          <img
            className="rounded-md "
            src="./images/img.jpg"
            alt="getthe link from youtube"
          />
        </article>
        <article className="w-[32.5%] flex flex-col  items-center gap-1 ">
          <h3 className="border-gray-600 border w-full text-center py-2 rounded-lg text-base ">
            Step 03: Click Download button to start downloading{" "}
          </h3>
          <img
            className="rounded-md "
            src="./images/img.jpg"
            alt="getthe link from youtube"
          />
        </article>
      
    </section>
  );
}

export default HowToUse;
