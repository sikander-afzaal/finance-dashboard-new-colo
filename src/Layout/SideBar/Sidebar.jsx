import React, { useEffect } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faCircleUser,
  faBolt,
  faCalculator,
  faBook,
  faEye,
  faCartArrowDown,
  faImagePortrait,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faTelegram,
  faTwitter,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
function Sidebar({ open, func }) {
  const clickHandler = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    func(false);
  };
  useEffect(() => {
    const path = window.location.pathname;
    switch (path) {
      case "/":
        document.querySelector(".active").classList.remove("active");
        document.querySelector(".mint-link").classList.add("active");
        break;
      case "/view":
        document.querySelector(".active").classList.remove("active");
        document.querySelector(".view-link").classList.add("active");
        break;
      case "/traits":
        document.querySelector(".active").classList.remove("active");
        document.querySelector(".traits-link").classList.add("active");
        break;
      case "/collection":
        document.querySelector(".active").classList.remove("active");
        document.querySelector(".collection-link").classList.add("active");
        break;

      default:
        break;
    }
  });

  return (
    <>
      <div
        onClick={() => func(false)}
        className={`overlay ${open ? "open-overlay" : ""}`}
      ></div>
      <div className={`sidebar ${open ? "open-sidebar" : ""}`}>
        <img src={logo} className={"display logo"} alt="" />
        <div className="top-sidebar">
          <Link
            to={"/"}
            onClick={clickHandler}
            className="row-link active mint-link"
          >
            <FontAwesomeIcon icon={faCartArrowDown} />
            <p>Mint Killer Whales</p>
          </Link>
          <Link
            to={"/view"}
            onClick={clickHandler}
            className="row-link view-link"
          >
            <FontAwesomeIcon icon={faEye} />
            <p>View Killer Whales</p>
          </Link>
          <Link
            to={"/traits"}
            onClick={clickHandler}
            className="row-link traits-link"
          >
            <FontAwesomeIcon icon={faImagePortrait} />
            <p>Killer Whale Traits</p>
          </Link>
          <Link
            to={"/collection"}
            onClick={clickHandler}
            className="row-link collection-link"
          >
            <FontAwesomeIcon icon={faImagePortrait} />
            <p>Mint Eth Collection</p>
          </Link>
        </div>
        <div className="bottom-sidebar">
          <a href="#">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faMedium} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
