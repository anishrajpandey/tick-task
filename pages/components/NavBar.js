import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
              <Link href="../">myTasks</Link>
            </span>
          </div>
          <div className={style.itemContainer}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/components/Tasks">Tasks</Link>
              </li>
              <li>
                <Link href="/components/About">About</Link>
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
