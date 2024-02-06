import { saveAs } from "file-saver";

export default function Home() {

  const downloadScript = () => {
    saveAs(
      "SettlingScript.pdf",
      "SettlingScript.pdf"
    );
  };

  return (
      <div className="relative">
        <img src="settling1_v7.jpg" className="w-full" />
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
        <button onClick={downloadScript} className="fixed top-0 left-0"><img className="w-[150px] md:w-[200px] pt-4 pl-4 md:pt-8 md:pl-8" src="/SETTLING_DOWNLOAD.png"/></button>
        <div  className="absolute bottom-2 md:bottom-4 w-full flex flex-col items-center">
          <a href="/">
            <img src="/SETTLING_SCROLL.png" className="w-[100px] md:w-[200px]"/>
          </a>
        </div>
        </div>
  );
}
