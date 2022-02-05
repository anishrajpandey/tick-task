import Head from "next/head";
import Image from "next/image";
import React from "react";
import style from "../../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className={style.navbar}>
        <div className={style.navItems}>
          <div className={style.logoContainer}>
            <span>
              <a href="../">myTasks</a>
            </span>
          </div>
          <div className={style.itemContainer}>
            <ul>
              <li>
                <a href="../">Home</a>
              </li>
              <li>
                <a href="../components/Tasks">Tasks</a>
              </li>
              <li>
                <a href="../components/About">About</a>
              </li>
            </ul>
          </div>
          <div className={style.signContainer}>
            <button>Sign In</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
