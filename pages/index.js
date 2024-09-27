import Link from "next/link";
import Modal from "../components/Modal";
import { useState } from "react";

const images = [
  "Settling_Pozner_Page_01.png",
  "Settling_Pozner_Page_02.png",
  "Settling_Pozner_Page_03.png",
  "Settling_Pozner_Page_04.png",
  "Settling_Pozner_Page_05.png",
  "Settling_Pozner_Page_06.png",
  "Settling_Pozner_Page_07.png",
  "Settling_Pozner_Page_08.png",
  "Settling_Pozner_Page_09.png",
  "Settling_Pozner_Page_10.png",
  "Settling_Pozner_Page_11.png",
  "Settling_Pozner_Page_12.png",
  "Settling_Pozner_Page_13.png",
  "Settling_Pozner_Page_14.png",
  "Settling_Pozner_Page_15.png",
  "Settling_Pozner_Page_16.png",
  "Settling_Pozner_Page_17.png",
  "Settling_Pozner_Page_18.png",
  "Settling_Pozner_Page_19.png",
  "Settling_Pozner_Page_20.png",
  "Settling_Pozner_Page_21.png",
  "Settling_Pozner_Page_22.png",
  "Settling_Pozner_Page_23.png",
  "Settling_Pozner_Page_24.png",
  "Settling_Pozner_Page_25.png",
  "Settling_Pozner_Page_26.png",
  "Settling_Pozner_Page_27.png",
  "Settling_Pozner_Page_28.png",
  "Settling_Pozner_Page_29.png",
  "Settling_Pozner_Page_30.png",
  "Settling_Pozner_Page_31.png",
  "Settling_Pozner_Page_32.png",
  "Settling_Pozner_Page_33.png",
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
          <a href="https://vimeo.com/478169209" target="_blank"><img src="settling7_v7.jpg"/></a>
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
