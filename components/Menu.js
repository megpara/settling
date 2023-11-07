import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu() {
    const router = useRouter();
    let path = router.asPath;

    return (
        <div className="h-[26px] flex">
            <Link href="/">
            <div className="group w-1/4 bg-black text-[#d2d2d2] px-4 font-bold text-[10px] uppercase flex justify-between cursor-pointer">
                <div className="flex flex-col justify-center">Home</div>
                <div className="flex flex-col justify-center"><div className={"w-[6px] h-[6px] bg-[#d2d2d2] group-hover:block" + (path !== ("/") ? " hidden" : "")} /></div>
            </div>
            </Link>
            <Link href="/about">
            <div className="group w-1/4 bg-[#bbbfb0] px-4 font-bold text-[10px] uppercase flex justify-between cursor-pointer">
                <div className="flex flex-col justify-center">About</div>
                <div className="flex flex-col justify-center"><div className={"w-[6px] h-[6px] bg-black group-hover:block" + (!path.includes("about") ? " hidden" : "")} /></div>
            </div>
            </Link>
            <Link href="/work">
            <div className="group w-1/4 bg-[#5f5f5f] text-[#d2d2d2] px-4 font-bold text-[10px] uppercase flex justify-between cursor-pointer">
                <div className="flex flex-col justify-center"><div className={"w-[6px] h-[6px] bg-[#d2d2d2] group-hover:block" + (!path.includes("work") ? " hidden" : "")} /></div>
                <div className="flex flex-col justify-center">Work</div>
            </div>
            </Link>
            <a className="group w-1/4 bg-[#403f3f] text-[#d2d2d2] px-4 font-bold text-[10px] uppercase flex justify-between" href="mailto:meganparadowski@gmail.com">
                <div className="flex flex-col justify-center"><div className="w-[6px] h-[6px] bg-[#d2d2d2] hidden group-hover:block" /></div>
                <div className="flex flex-col justify-center">Say Hello</div>
            </a>
        </div>
    )
}