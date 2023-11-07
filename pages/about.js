import Layout from "../components/Layout";
import Menu from "../components/Menu";

export default function About() {
    return(
        <Layout>
          <Menu />
            <div className="wrapper">
              {/* <div className="px-[15px] py-4 w-full">
                <div className="name !text-7xl !sm:text-[12vh]">Mover and Maker</div>
              </div> */}
              <div className="md:flex flex-row md:px-32 items-center">
                <div className="paragraph md:pt-0 pt-8 md:text-left text-justify">
                Megan Paradowski is a mover and maker based in Los Angeles. She has created and performed in contemporary dance works across the US and Europe. She co-founded <a href="https://www.voltacollective.com/" target="_blank" className="underline underline-offset-2 decoration-1">Volta</a>, a Los Angeles based dance theatre company, and has worked on commercial photo and video shoots including CloZee, Loren Stewart, and Undesigned LA, amongst others. Megan is interested in collaborating with other artists and celebrating other forms, as well as transcendence through live performance. She holds a BFA in Dance from Tisch School of the Arts at NYU and teaches at schools across Los Angeles.
                </div>
              </div>
              <img src="/teaching2.png" className="md:px-32 pt-16" />
              <div className="paragraph leading-8 pt-16 md:px-32 uppercase !text-sm">
                <div className="pt-8 pb-2 border-b-[1px] border-black w-full"><strong>Teaching</strong></div>
                <div className="border-b-[1px] border-black w-full py-2">Genesis Studios</div>
                <div className="border-b-[1px] border-black w-full py-2">University of Redlands</div>
                <div className="border-b-[1px] border-black w-full py-2">South Pasadena High School</div>
                <div className="border-b-[1px] border-black w-full py-2">Twinkle Toes Dance Company</div>
              </div>
              <div className="paragraph leading-8 pt-16 md:px-32 uppercase !text-sm">
                <div className="pt-8 pb-2 border-b-[1px] border-black w-full"><strong>Contact</strong></div>
                <div className="border-b-[1px] border-black w-full py-2 md:flex"><div className="md:w-1/3">Email</div><div className="font-bold text-xs"><a href="mailto:meganparadowski@gmail.com">meganparadowski@gmail.com</a></div></div>
                <div className="border-b-[1px] border-black w-full py-2 md:flex"><div className="md:w-1/3">Social Media</div><div className="font-bold text-xs"><a href="https://www.instagram.com/megparadowski/" target="_blank">Instagram</a></div></div>
                <div className="border-b-[1px] border-black w-full py-2 md:flex"><div className="md:w-1/3">Location</div><div>Los Angeles</div></div>
              </div>
            </div>
        </Layout>
    )
}