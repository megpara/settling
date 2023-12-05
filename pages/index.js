import Link from "next/link";
import Layout from "../components/Layout";
import Menu from "../components/Menu";

export default function Home() {
  const isBrowser = () => typeof window !== 'undefined';

  const scrollToTop = () => {
    console.log("hello")
    if (!isBrowser()) {
      console.log("what")
    };
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log(window.innerHeight);
  }

  return (
      <div className="relative">
        <img src="SETTLING_1.jpg" className="w-full" />
        <img src="SETTLING_2.jpg" className="w-full" />
        <img src="SETTLING_3.jpg" className="w-full" />
        <img src="SETTLING_4.jpg" className="w-full" />
        <img src="SETTLING_5.jpg" className="w-full" />
        <img src="SETTLING_6.jpg" className="w-full" />
        <img src="SETTLING_7.jpg" className="w-full" />
        <img className="fixed bottom-8 left-8 w-[150px] md:w-[200px]" src="/SETTLING_DOWNLOAD.png"/>
        <div  className="absolute bottom-2 md:bottom-4 w-full flex flex-col items-center">
          <a href="/">
            <img src="/SETTLING_SCROLL.png" className="w-[100px] md:w-[200px]"/>
          </a>
        </div>
        </div>
  );
}
