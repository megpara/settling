import Link from "next/link";
import Modal from "../components/Modal";
import { useState } from "react";

const images = [
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_1.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_2.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_3.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_4.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_5.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_6.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_7.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_8.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_9.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_10.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_11.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_12.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_13.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_14.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_15.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_16.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_17.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_18.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_19.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_20.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_21.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_22.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_23.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_24.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_25.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_26.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_27.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_28.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_29.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_30.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_31.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_32.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_33.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_34.png",
  "1707507974978-acd1e6ea-9a7d-434b-84a3-58836a7f94db_35.png"
]

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  const openModal = () => {
      setIsModalOpen(true);
  };

  const checkIsModalOpen = () => {
      return isModalOpen;
  };

  return (
      <div className="relative">
        <img src="settling1_v7.jpg" className="w-full" />
        <img src="settling3_v7.jpg" className="w-full" />
        <img src="settling4_v7.jpg" className="w-full" />
        <img src="settling5_v7.jpg" className="w-full" />
        <div className="flex justify-between w-full h-full border-8 border-[#ffcc32]">
            <div className="basis-1/2 border-r-4 border-[#ffcc32]">
              <div
                style={{
                  padding: "56.25% 0 0 0",
                  position: "relative",
                }}
              >
                <iframe
                  src="https://player.vimeo.com/video/478167348?h=ccbe7295ed"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
            <div className="basis-1/2 border-l-4 border-[#ffcc32]">
              <div
                style={{
                  padding: "56.25% 0 0 0",
                  position: "relative",
                }}
              >
                <iframe
                  src="https://player.vimeo.com/video/479983342?h=c9d367f027"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        </div>
        <img src="settling6_v7.jpg" className="w-full" />
        <div className="">
          <a href="https://www.youtube.com/results?search_query=THE+NON-ESSENTIALS+%7C+adult+swim+smalls" target="_blank"><img src="settling7_v7.jpg"/></a>
        </div>
        <img src="settling8_v7.jpg" className="w-full" />
        <img src="settling9_v7.jpg" className="w-full" />
        <img src="settling10_v7.jpg" className="w-full" />
        <img src="settling11_v7.jpg" className="w-full" />
        <img src="settling12_v7.jpg" className="w-full" />

        <button className="absolute top-0 left-0 z-20" onClick={() => openModal()}>
          <img className="w-[75px] md:w-[125px] mt-4 ml-4 md:mt-8 md:ml-8" src="/view.png"/>
        </button>

        <Modal open={checkIsModalOpen()} closeModal={closeModal}>
          <div className="flex flex-col items-center justify-center overflow-scroll">
            {images.map((i) => (
              <img src={"/SettlingScript/" + i} className="w-full" key={i} />
            ))}
          </div>
        </Modal>

        <div  className="absolute bottom-2 md:bottom-4 w-full flex flex-col items-center">
          <a href="/">
            <img src="/SETTLING_SCROLL.png" className="w-[100px] md:w-[200px]"/>
          </a>
        </div>
        </div>
  );
}
