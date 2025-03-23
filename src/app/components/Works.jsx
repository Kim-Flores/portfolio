import Image from "next/image";
import { basePath } from "../../../next.config.mjs";

const Works = () => {
  return (
    <>
      <div className="m-6 flex justify-center flex-col">
        <div className="my-6 underline decoration-solid decoration-4 underline-offset-8 leading-5">
          Works
        </div>
        <div className="grid-cols-1 grid md:grid-cols-2 gap-4">
          <div className="pt-4 md:pt-0 flex items-center flex-col">
            <p className="text-xl">Yelp</p>
            <a
              href="https://kimflores-yelp.netlify.app"
              target="_blank"
              className="image py-3"
            >
              <Image src="/works/yelp.png" width={400} height={400} alt="" />
            </a>
            <div className="project flex flex-col items-center text-center">
              <p>Replicated page with responsive layout</p>
              <div className="flex gap-2 justify-center font-bold pt-2">
                <a
                  href="https://kimflores-yelp.netlify.app"
                  target="_blank"
                  className="hover:underline"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Kim-Flores/Yelp"
                  target="_blank"
                  className="hover:underline"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col">
            <p className="text-xl">JWLI</p>
            <a
              href="https://kimflores-jwli.netlify.app"
              target="_blank"
              className="image py-3"
            >
              <Image src="/works/jwli.png" width={400} height={400} alt="" />
            </a>
            <div className="project flex flex-col items-center text-center">
              <p>
                Responsive Replica the Japanese Womans Leadership Initiative
                site
              </p>
              <div className="flex gap-2 justify-center font-bold pt-2">
                <a
                  href="https://kimflores-jwli.netlify.app"
                  target="_blank"
                  className="hover:underline"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Kim-Flores/JWLI"
                  target="_blank"
                  className="hover:underline"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col">
            <p className="text-xl">Horoscope</p>
            <a
              href="https://kimflores-horoscope.netlify.app"
              target="_blank"
              className="image py-3"
            >
              <Image
                width={400}
                height={400}
                src="/works/horoscope.png"
                alt=""
              />
            </a>
            <div className="project flex flex-col items-center text-center">
              <p>Input your birthdate and see what Galactic feline you are.</p>
              <div className="flex gap-2 justify-center font-bold pt-2">
                <a
                  href="https://kimflores-horoscope.netlify.app"
                  target="_blank"
                  className="hover:underline"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Kim-Flores/Horoscope"
                  target="_blank"
                  className="hover:underline"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="project flex flex-col items-center text-center">
            <p className="text-xl">Parchment, Stone or Blade?</p>
            <a
              href="https://kimflores-parchment-stone-blade.netlify.app"
              target="_blank"
              className="image py-3"
            >
              <Image src="/works/RPS.png" width={400} height={400} alt="" />
            </a>
            <div className="project flex flex-col items-center text-center">
              <p>Medieval Spin on the classic Rock, Paper, Scissors game.</p>
              <div className="flex gap-2 justify-center font-bold pt-2">
                <a
                  href="https://kimflores-parchment-stone-blade.netlify.app"
                  target="_blank"
                  className="hover:underline"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Kim-Flores/Parchment-Stone-Blade"
                  target="_blank"
                  className="hover:underline"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <p className="text-xl">Slot Machine</p>
            <a
              href="https://kimflores-slotmachine.netlify.app"
              target="_blank"
              className="image py-3"
            >
              <Image
                src="/works/slots.png"
                width={400}
                height={400}
                alt="slots"
              />
            </a>
            <div className="project flex flex-col items-center text-center">
              <p>
                Are you lucky in love? Find out with Love or Loss Slot Machine
              </p>
              <div className="flex gap-2 justify-center font-bold pt-2">
                <a
                  href="https://kimflores-slotmachine.netlify.app"
                  target="_blank"
                  className="hover:underline"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Kim-Flores/slot-machine-2019-week05/tree/answer"
                  target="_blank"
                  className="hover:underline"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col">
            <p className="text-xl">NASA API</p>
            <a
              href="https://kimflores-nasa-api.netlify.app/"
              target="_blank"
              className="image py-3"
            >
              <Image
                src="/works/nasaAPI.png"
                width={300}
                height={300}
                alt="nasa-api"
              />
            </a>
            <div className="project flex flex-col items-center text-center">
              <p>Look through archival photos/videos with the NASA API</p>
              <div className="flex gap-2 justify-center font-bold pt-2">
                <a
                  href="https://kimflores-nasa-api.netlify.app/"
                  target="_blank"
                  className="hover:underline"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Kim-Flores/simple-nasa-api-bootcamp/tree/answer"
                  target="_blank"
                  className="hover:underline"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col">
            <p className="text-xl">Cafe Match Game</p>
            <a
              href="https://cafe-match-game.netlify.app/"
              target="_blank"
              className="image py-3"
            >
              <Image
                src="/works/matchGame.png"
                width={400}
                height={400}
                alt=""
              />
            </a>
            <div className="project flex flex-col items-center text-center">
              <p>Fun cafe theme matching game</p>
              <div className="flex gap-2 justify-center font-bold pt-2">
                <a
                  href="https://cafe-match-game.netlify.app/"
                  target="_blank"
                  className="hover:underline"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Kim-Flores/matching-card-bootcamp/tree/answer"
                  target="_blank"
                  className="hover:underline"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col">
            <p className="text-xl">Tallo</p>
            <a
              href="https://tallo.herokuapp.com/"
              target="_blank"
              className="image py-3"
            >
              <Image src="/works/tallo.png" width={400} height={400} alt="" />
            </a>
            <div className="project flex flex-col items-center text-center">
              <p>
                Social educational application where users can connect with each
                other through nature.
              </p>
              <div className="flex gap-2 justify-center font-bold pt-2">
                <a
                  href="https://github.com/Kim-Flores/Tallo"
                  target="_blank"
                  className="hover:underline"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
