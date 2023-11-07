import Modal from "./Modal";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Popup from "./Popup";

const paths = {
  "/info": "01",
  "/work": "02",
  "/press": "03",
};
const homePath = "/";

export default function Nav({ props }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const closeModal = () => setIsModalOpen(false);
  const closePopup = () => setIsPopupOpen(false);

  const router = useRouter();
  let path = router.asPath;
  const showAlternateNav = path !== homePath;
  if (showAlternateNav) {
    var nav = (
      <div className="absolute md:p-[3rem] p-[2rem] flex w-full">
        <Link href="/">
          <img className="h-[20px] cursor-pointer" src="/volta.png" />
        </Link>
        <div className="w-full flex justify-end items-center md:text-base text-xs">
          <div
            className={
              "md:pl-4 pl-2" + (path.includes("info") ? " font-thin" : "")
            }
          >
            <Link href="/info">About</Link>
          </div>
          <div
            className={
              "md:pl-4 pl-2" + (path.includes("work") ? " font-thin" : "")
            }
          >
            <Link href="/work">Work</Link>
          </div>
          <div
            className={
              "md:pl-4 pl-2" + (path.includes("press") ? " font-thin" : "")
            }
          >
            <Link href="/press">Press</Link>
          </div>
          <div
            className={
              "md:pl-4 pl-2" + (path.includes("co-lab") ? " font-thin" : "")
            }
          >
            <Link href="/teaching">Teaching</Link>
          </div>
        </div>
      </div>
    );
  } else {
    var nav = (
      <div className={styles.nav}>
        <div className={`${styles.topleft} ${styles.navbg}`}>01</div>
        <div className={styles.topleft}>
          {/* <div className={styles.topleft} onClick={() => setIsModalOpen(true)}> */}
          <Link href="/info">About</Link>
        </div>
        {/* <div className={`${styles.bottomleft} ${styles.navbg}`}>Say Hello</div> */}
        <button className={`${styles.bottomleft} buttonTertiary`}>
          <a target="_blank" href="mailto:meganparadowski@gmail.com">
            Say Hello
          </a>
        </button>
        <div className={`${styles.bottomright} flex justify-end`}>
          <div className={styles.icons}>
            <a
              target="_blank"
              href="https://www.instagram.com/megparadowski/"
            >
              <img src="/insta-logo-white.png" />
            </a>
            {/* <a target="_blank" href="https://vimeo.com/voltacollective">
              <img src="/vimeo-logo-white.png" />
            </a>
            <a href="mailto:meganparadowski@gmail.com">
              <img src="/email_icon_white.png" />
            </a>
            <a target="_blank" href="https://meganparadowski.com">
              <img src="/web-simple-white.png" />
            </a> */}
          </div>
        </div>
        <div className={`${styles.topright} ${styles.navbg}`}>02</div>
        <Link href="/teaching">
          <a className={styles.topright}>Portfolio</a>
        </Link>
        {/* <Modal open={isModalOpen} closeModal={closeModal} /> */}
        {/* <Popup open={isPopupOpen} closePopup={closePopup} /> */}
      </div>
    );
  }

  return <div>{nav}</div>;
}
