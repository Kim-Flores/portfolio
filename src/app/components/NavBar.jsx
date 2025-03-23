import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="flex sticky justify-evenly left-0 top-0 w-full bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <Link href="/">
        <div className="gap-1 flex items-center">
          <span className="hover:rotate-20">
            <FontAwesomeIcon icon={faStar} size="sm" />
          </span>
          <span>Kim Flores</span>
        </div>
      </Link>
      <a href="/works">Works</a>
      <a target="_blank" href="https://www.linkedin.com/in/kflores20/">
        LinkedIn
      </a>
      <a target="_blank" href="https://github.com/Kim-Flores">
        Github
      </a>
      <ThemeToggle />
      <FontAwesomeIcon icon={faBars} size="lg" />
    </div>
  );
};

export default NavBar;
