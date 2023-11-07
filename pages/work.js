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
        title: "SALT by Volta",
        thumbnail: "saltcover.png",
        link: "/work/salt",
    },
    {
        title: "Levi's",
        thumbnail: "Levis.png",
        link: "/work/levis",
    },
    {
        title: "MILK by Volta",
        thumbnail: "milk.jpg",
        link: "/work/milk",
    },
    {
        title: "Loren Stewart",
        thumbnail: "ls4.jpg",
        link: "/work/lorenstewart",
    },
    {
        title: "BACKWASH by Volta",
        thumbnail: "backwashpaige.png",
        link: "/work/backwash",
    },
    {
        title: "I Want To Be In Love by Volta",
        thumbnail: "IWTBIL.png",
        link: "/work/iwtbil",
    },
    {
        title: "In Liquid Light",
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