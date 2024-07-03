import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { RiLoginCircleLine } from "react-icons/ri";

export default function Header() {
  const pathname = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      <Link to="/">
        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
          Dian&apos;s{" "}
        </span>
        <span className="self-center whitespace-nowrap text-lg font-light dark:text-white">
          Blog
        </span>
      </Link>
      <form>
        <TextInput
          type="search"
          placeholder="Search"
          rightIcon={AiOutlineSearch}
          className="hidden lg:block"
        />
      </form>
      <Button className="w-12 h-10 items-center lg:hidden" color={"gray"} pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 items-center hidden sm:block"
          color={"gray"}
          pill
        >
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button color={"gray"} pill>
            <div className="flex items-center gap-2">
              Sign In <RiLoginCircleLine size={16} />
            </div>
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={pathname === "/"} as={"div"}>
          <Link to={"/"}>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={pathname === "/projects"} as={"div"}>
          <Link to={"/projects"}>Projects</Link>
        </Navbar.Link>
        <Navbar.Link active={pathname === "/about"} as={"div"}>
          <Link to={"/about"}>About</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
