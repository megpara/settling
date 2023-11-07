import Layout from "../components/Layout";
import Menu from "../components/Menu";

export default function Contact() {
    return(
        <Layout>
            <Menu />
            <div className="paragraph leading-8 pt-16 md:px-32 uppercase !text-sm">
                <div className="pt-8 pb-2 border-b-[1px] border-black w-full"><strong>Contact</strong></div>
                <div className="border-b-[1px] border-black w-full py-2 flex"><div className="w-1/3">Email</div><div className="font-bold"><a href="mailto:meganparadowski@gmail.com">meganparadowski@gmail.com</a></div></div>
                <div className="border-b-[1px] border-black w-full py-2 flex"><div className="w-1/3">Social Media</div><div className="font-bold">Instagram</div></div>
                <div className="border-b-[1px] border-black w-full py-2 flex"><div className="w-1/3">Location</div><div>Los Angeles</div></div>
              </div>
        </Layout>
    )
}