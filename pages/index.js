import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <img src="/index2.png" className="w-full h-full object-cover absolute z-[-1]"/>
      <div className="!w-full !h-full flex flex-col items-center justify-center text-white">
        <div className="max-w-min">
          <div className="name">Megan</div>
          <div className="name">Paradowski</div>
          <div className="text-xs uppercase tracking-[5px] text-[#2c3033]">Choreographer</div>
        </div>
      </div>
    </Layout>
  );
}
