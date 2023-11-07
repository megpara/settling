import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu() {
    const router = useRouter();
    let path = router.asPath;

    return (
        <div className="bg-white h-[25px] flex">
            <div className="w-1/4 bg-black text-[#d2d2d2] px-4 font-bold text-[10px] uppercase flex justify-between">
                <div className="flex flex-col justify-center"><Link href="/">Home</Link></div>
                <div className="flex flex-col justify-center"><div className={"w-[6px] h-[6px] bg-[#d2d2d2]" + (path !== ("/") ? " hidden" : "")} /></div>
            </div>
            <div className="w-1/4 bg-[#1a1919] text-[#d2d2d2] px-4 font-bold text-[10px] uppercase flex justify-between">
                <div className="flex flex-col justify-center"><Link href="/about">About</Link></div>
                <div className="flex flex-col justify-center"><div className={"w-[6px] h-[6px] bg-[#d2d2d2]" + (!path.includes("about") ? " hidden" : "")} /></div>
            </div>
            <div className="w-1/4 bg-[#5f5f5f] text-[#d2d2d2] px-4 font-bold text-[10px] uppercase flex justify-between">
                <div className="flex flex-col justify-center"><Link href="/work">Work</Link></div>
                <div className="flex flex-col justify-center"><div className={"w-[6px] h-[6px] bg-[#d2d2d2]" + (!path.includes("work") ? " hidden" : "")} /></div>
            </div>
            <div className="w-1/4 bg-[#403f3f] text-[#d2d2d2] px-4 font-bold text-[10px] uppercase flex justify-between">
                <div className="flex flex-col justify-center"><a href="mailto:meganparadowski@gmail.com">Say Hello</a></div>
                <div className="flex flex-col justify-center"></div>
            </div>
        </div>
    )
}