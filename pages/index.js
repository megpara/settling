import Link from "next/link";
import Layout from "../components/Layout";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <Layout>
        <Menu/>
        <div className="w-full h-full flex flex-col text-[#d2d2d2] bg-black">
          <div className="fixed md:flex w-full pt-16 md:pt-32">
            <div className="text-white name font-light text-4xl w-1/5 pl-8">Megan Paradowski</div>
            <div className="w-1/2"/>
            <div className="w-[30%] pl-8">
              <div className="text-xs uppercase tracking-[5px] pt-2">Choreographer</div>
            </div>
          </div>
          <div className="w-full h-full flex pt-32">
              <div className="w-1/5 hidden md:block" />
              <div className="w-full md:w-1/2 flex flex-col items-center">
                <img src="/index3.png" className="w-full h-full object-cover"/>
              </div>
              <div className="w-[30%] hidden md:block" />
          </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 pt-32 pb-16 bg-black text-[#d2d2d2] font-bold uppercase text-xs text-center">
              <Link href="/work/levis">
                <div className="group relative cursor-pointer">
                  <img src="/Levis.png" className="aspect-[2/1.1] object-cover group-hover:opacity-40"/>
                  <div className="hidden group-hover:flex absolute z-10 w-full h-full top-0 left-0 items-center justify-center">
                    Levi's
                  </div>
                </div>
              </Link>
              <Link href="/work/backwash">
                <div className="group relative cursor-pointer">
                  <img src="/backwashpaige.png" className="aspect-[2/1.1] object-cover group-hover:opacity-40"/>
                  <div className="hidden group-hover:flex absolute z-10 w-full h-full top-0 left-0 items-center justify-center">
                    VOLTA X Navel LA
                  </div>
                </div>
              </Link>
              <Link href="/work/clozee">
                <div className="group relative cursor-pointer">
                  <img src="/clozee.png" className="aspect-[2/1.1] object-cover group-hover:opacity-40"/>
                  <div className="hidden group-hover:flex absolute z-10 w-full h-full top-0 left-0 items-center justify-center">
                    CloZee
                  </div>
                </div>
              </Link>
              <Link href="/work/milk">
              <div className="group relative cursor-pointer">
                <img src="/milk.jpg" className="aspect-[2/1.1] object-cover group-hover:opacity-40"/>
                <div className="hidden group-hover:flex absolute z-10 w-full h-full top-0 left-0 items-center justify-center">
                  VOLTA X Institute for Art and Olfaction
                </div>
              </div>
              </Link>
            </div>
            <div className="text-[#d2d2d2] bg-black pb-32 px-4 font-bold text-[10px] w-full text-center uppercase cursor-pointer"><Link href="work">More</Link></div>
        </div>
    </Layout>
  );
}
