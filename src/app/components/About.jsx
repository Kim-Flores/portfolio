import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="m-6 flex justify-center flex-col">
      <div className="flex justify-center">
        <Image
          className="hover:animate-pulse"
          src="./works/spaceBunny.png"
          alt="Womp Model"
          width={250}
          height={150}
        />
      </div>
      <div className="flex pt-8 px-2 justify-center">
        <Link
          href="/works"
          className="p-2 bg-white/60 hover:bg-white/70 rounded dark:bg-black/50 dark:hover:bg-black/70"
        >
          My Portfolio
        </Link>
      </div>

      <div className="my-6">
        <p className="text-4xl font-bold">Kim Flores</p>
        <p>Artist & Developer | Based in Boston</p>
      </div>
      <div>
        <div>
          <p className="underline decoration-solid decoration-4 underline-offset-8 leading-5 font-bold">
            About
          </p>
          <div className="my-6">
            I’m a Software Engineer with a passion for blending technology and
            creativity. Currently exploring the intersection of code, art, and
            design. I enjoy building interactive experiences and bringing
            imaginative ideas to life.
          </div>
        </div>
      </div>
      <div className="mb-6">I &#9829; dogs, music, art & boba tea</div>
      <div className="flex justify-center"></div>
    </div>
  );
};

export default About;
