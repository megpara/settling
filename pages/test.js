import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function Test() {
  return (
    <Layout>
        <div className="bg-white h-[25px] flex">
            <div className="w-1/3 bg-[#0e0e0e] text-[#d2d2d2] pl-2 font-bold text-[10px] uppercase flex flex-col justify-center">About</div>
            <div className="w-1/3 bg-[#5f5f5f] text-[#d2d2d2] pl-2 font-bold text-[10px] uppercase flex flex-col justify-center">Work</div>
            <div className="w-1/3 bg-[#403f3f] text-[#d2d2d2] pl-2 font-bold text-[10px] uppercase flex flex-col justify-center">Say Hello</div>
        </div>
        <div className="w-full h-full flex flex-col bg-[#2e2e2e] text-[#d2d2d2]">
        <div className="px-[15px] py-4 w-full">
            <div className="name">Megan Paradowski</div>
            <div className="text-xs uppercase tracking-[5px]">Choreographer</div>
        </div>
        <div className="h-full border-[15px] border-[#2e2e2e]">
            <img src="/index2.png" className="w-full h-full object-cover"/>
        </div>
        </div>
    </Layout>
  );
}
