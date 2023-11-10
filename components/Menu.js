import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu() {
    const router = useRouter();
    let path = router.asPath;

    return (
        <div className="h-[26px] grid grid-cols-2 md:grid-cols-4 fixed w-full z-10">
            <Link href="/">
            <div className="group bg-black text-[#d2d2d2] px-4 font-bold text-[10px] uppercase flex justify-between cursor-pointer">
                <div className="flex flex-col justify-center">Featured</div>
                <div className="flex flex-col justify-center"><div className={"w-[6px] h-[6px] bg-[#d2d2d2] group-hover:block" + (path !== ("/") ? " hidden" : "")} /></div>
            </div>
            </Link>
            <Link href="/about">
            <div className={"group px-4 font-bold text-[10px] uppercase flex justify-between cursor-pointer bg-[#ffffff17]" + (path == "/" ? " text-white" : " text-black")}>
                <div className="flex flex-col justify-center order-2 md:order-none">About</div>
                <div className="flex flex-col justify-center"><div className={"w-[6px] h-[6px] group-hover:block" + (!path.includes("about") ? " hidden" : "") + (path == "/" ? " bg-white" : " bg-black")} /></div>
            </div>
            </Link>
            <Link href="/work">
            <div className="group bg-black text-[#d2d2d2] px-4 font-bold text-[10px] uppercase flex justify-between cursor-pointer">
                <div className="flex flex-col justify-center order-2 md:order-none"><div className={"w-[6px] h-[6px] bg-[#d2d2d2] group-hover:block" + (!path.includes("work") ? " hidden" : "")} /></div>
                <div className="flex flex-col justify-center">Work</div>
            </div>
            </Link>
            <a className="group bg-black text-[#d2d2d2] px-4 font-bold text-[10px] uppercase flex justify-between" href="mailto:meganparadowski@gmail.com">
                <div className="flex flex-col justify-center"><div className="w-[6px] h-[6px] bg-[#d2d2d2] hidden group-hover:block" /></div>
                <div className="flex flex-col justify-center">Say Hello</div>
            </a>
        </div>
    )
}