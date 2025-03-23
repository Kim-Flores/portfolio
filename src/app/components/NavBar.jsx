import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  return (
    <div className="items-center justify-between flex sticky sm:justify-center sm:gap-8 left-0 top-0 w-full bg-gradient-to-b from-zinc-200 pb-6 pt-8 px-6 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <Link href="/">
        <div className="gap-1 flex items-center">
          <span className="hover:rotate-20">
            <FontAwesomeIcon icon={faStar} size="sm" />
          </span>
          <span>Kim Flores</span>
        </div>
      </Link>
      <Link href="/works" className="hidden sm:flex">
        Works
      </Link>
      <a
        target="_blank"
        className="hidden sm:flex"
        href="https://www.linkedin.com/in/kflores20/"
      >
        LinkedIn
      </a>
      <a
        target="_blank"
        className="hidden sm:flex"
        href="https://github.com/Kim-Flores"
      >
        Github
      </a>
      <div className="flex items-center sm">
        <ThemeToggle />
        <span className="sm:hidden">
          <MobileMenu />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
