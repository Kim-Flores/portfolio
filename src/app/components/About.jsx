// import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="m-6 flex justify-center flex-col">
      <div className="flex p-3 justify-center">
        <p className="p-2 bg-teal-400 border-2 border-solid border-cyan-500 rounded-lg">
          Hello! I am a Software Engineer based in Boston :D
        </p>
      </div>
      <div className="my-6">
        <p className="text-4xl">Kim Flores</p>
        <p>Artist & Developer</p>
      </div>
      <div>
        <div>
          <p className="underline decoration-solid decoration-4 underline-offset-8 leading-5">
            About
          </p>
          <div className="my-6">
            Software Engineer based in Boston. Working towards combining tech
            and art.
          </div>
        </div>
      </div>
      <div className="mb-6">I &#9829; dogs, music, art & boba tea</div>
      <div className="flex justify-center">
        <Link
          href="/works"
          className="p-2 bg-pink-400 border-2 border-solid rounded border-pink-300"
        >
          My Portfolio
        </Link>
      </div>
    </div>
  );
};

export default About;
