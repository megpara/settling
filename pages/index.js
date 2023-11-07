import Layout from "../components/Layout";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <Layout>
        <Menu/>
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
