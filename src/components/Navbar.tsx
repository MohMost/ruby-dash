import classes from "../assets/styles/Navbar.module.css";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useState } from "react";
import Modal from "./Modal";
export default function Navbar() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler(e: any) {
    setModalIsVisible(true);
  }
  function hideModalHandler(e: any) {
    setModalIsVisible(false);
  }
  return (
    <nav className={classes.navbar_container}>
      <div className={classes.navbar_bg_top}>
        <div className={classes.filler_div}></div>
        <img className={classes.top_svg} src="/svgs/waves.svg" alt="" />
      </div>
      <div className={classes.navbar}>
        <Link to="/">
          <div className={classes.logo}>
            <a href="">
              <img src="/svgs/logo.svg" alt="logo" />
            </a>
          </div>
        </Link>
        <div className={classes.links}>
          <ul className={classes.links_ul}>
            <div className={classes.pages}>
              <Link to="/">
                <li className={classes.links_li}>
                  <a className={classes.links_a}>Home</a>
                </li>
              </Link>
              <Link to="/blogs">
                <li className={classes.links_li}>
                  <a className={classes.links_a} href="#">
                    Blogs
                  </a>
                </li>
              </Link>
            </div>

            <div className={classes.log_in_out}>
              <Link to="/login">
                <li className={classes.links_li}>
                  <a className={classes.log_in} href="#">
                    Login
                  </a>
                </li>
              </Link>
              <Link to="signup">
                <li className={classes.links_li}>
                  <a className={classes.sign_up} href="#">
                    Sign up
                  </a>
                </li>
              </Link>
            </div>
          </ul>
        </div>

        <div className={classes.menu}>
          <img src="/svgs/menu.svg" alt="" />
        </div>
        <svg
          onClick={showModalHandler}
          className={classes.icon}
          width="45"
          viewBox="0 0 24 24"
          fill="#fff8f8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="#fff8f8" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9999 6C9.79077 6 7.99991 7.79086 7.99991 10C7.99991 12.2091 9.79077 14 11.9999 14C14.209 14 15.9999 12.2091 15.9999 10C15.9999 7.79086 14.209 6 11.9999 6ZM17.1115 15.9974C17.8693 16.4854 17.8323 17.5491 17.1422 18.1288C15.7517 19.2966 13.9581 20 12.0001 20C10.0551 20 8.27215 19.3059 6.88556 18.1518C6.18931 17.5723 6.15242 16.5032 6.91351 16.012C7.15044 15.8591 7.40846 15.7251 7.68849 15.6097C8.81516 15.1452 10.2542 15 12 15C13.7546 15 15.2018 15.1359 16.3314 15.5954C16.6136 15.7102 16.8734 15.8441 17.1115 15.9974Z"
            fill="#42240c"
          />
        </svg>
      </div>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <ProfileMenu />
        </Modal>
      )}
    </nav>
  );
}
