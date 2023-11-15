import Layout from "../../components/Layout";
import Menu from "../../components/Menu";

export default function SunLover() {
    return (
        <Layout>
            <Menu />
            <div className="wrapper">
                <img src="/sunlover/1.png" className="pb-4"/>
                <img src="/sunlover/2.png" className="pb-4"/>
                <img src="/sunlover/3.png" className="pb-4"/>
                <img src="/sunlover/4.png" className="pb-4"/>
                <img src="/sunlover/5.png"/>
            </div>
        </Layout>
    )
}