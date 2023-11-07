import Link from "next/dist/client/link";
import Layout from "../components/Layout";
import Menu from "../components/Menu";

const works = [
    {
        title: "CloZee feat. ROZET",
        thumbnail: "clozee.png",
        link: "/work/clozee",
    },
    {
        title: "VOLTA X 2220 Arts + Archives",
        thumbnail: "saltcover.png",
        link: "/work/salt",
    },
    {
        title: "Levi's",
        thumbnail: "Levis.png",
        link: "/work/levis",
    },
    {
        title: "Volta X Institute for Art and Olfaction",
        thumbnail: "milk.jpg",
        link: "/work/milk",
    },
    {
        title: "Loren Stewart",
        thumbnail: "ls4.jpg",
        link: "/work/lorenstewart",
    },
    {
        title: "VOLTA X Navel LA",
        thumbnail: "backwashpaige.png",
        link: "/work/backwash",
    },
    {
        title: "VOLTA X Hosek Contemporary Berlin",
        thumbnail: "IWTBIL.png",
        link: "/work/iwtbil",
    },
    {
        title: "VOLTA X Museum of Neon Art",
        thumbnail: "ILL.png",
        link: "/work/ill",
    },  
]

export default function Work() {
    return(
        <Layout>
            <Menu />
            <div className="wrapper">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-24">
                {works.map((work) => (
                    <div className="z-[2] cursor-pointer" key={work.title}>
                    <Link href={work.link}>
                        <div>
                        <img
                            src={work.thumbnail}
                            className="aspect-[2/1.1] object-cover"
                        />
                        <div className="subtitle pt-4 text-center !text-sm">
                            {work.title}
                        </div>
                        </div>
                    </Link>
                    </div>
                ))}
                </div>
            </div>
        </Layout>
    )
}