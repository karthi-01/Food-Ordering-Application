import foody from "../assets/images/foody.png";
import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./elements/Button";
import { useEffect, useState } from "react";

export const Header = ({ cartCount, active, setActive }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [path, setPath] = useState("");

  const handleLogout = () => {
    sessionStorage.removeItem("Auth token");
    sessionStorage.removeItem("User Id");
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  const handleScroll = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const checkAuthToken = () => {
      const token = sessionStorage.getItem("Auth token");
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    window.addEventListener("storage", checkAuthToken);

    return () => {
      window.removeEventListener("storage", checkAuthToken);
    };
  }, []);

  useEffect(() => {
    let location = window.location.pathname;
    console.log(location);
    setPath(location);
  });

  return (
    <nav id="header" className="bg-black text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="logo-wrapper pl-4 flex items-center">
          <Link
            to="/"
            className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          >
            <img src={foody} alt="logo" className="w-40 h-40 object-cover" />
          </Link>
        </div>
        <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
          <Link to="/" className={`"text-xl" ${path === "/" ? "active" : ""}`}>
            Home
          </Link>
          {/*<Link
            to="#about"
            onClick={handleScroll}
            className={`"text-xl" ${path === "#about" ? "active" : ""}`}
          >
            About
  </Link>*/}
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link
            to="/cart"
            className={`" mr-4 relative" ${
              path === "/cart" ? "active" : "white"
            }`}
          >
            <i class="fa-solid fa-cart-shopping"></i>
            {cartCount > 0 ? (
              <div className="bg-yellow-400 px-2 mx-2 rounded-xl text-white inline-flex justify-center items-center">
                {cartCount}
              </div>
            ) : (
              ""
            )}
            {/* {cartCount > 0 ? <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -top-1 -right-1">{cartCount}</div> : null} */}
          </Link>
          {isLoggedIn ? (
            <Button onClick={handleLogout}>Log Out</Button>
          ) : (
            <>
              <Link
                to="/login"
                className={`"text-xl" ${path === "/login" ? "active" : ""}`}
              >
                Log In
              </Link>
              <Link
                to="/register"
                className={`"text-xl" ${path === "/register" ? "active" : ""}`}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};