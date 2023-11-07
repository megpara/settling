import Layout from "../components/Layout";
import Menu from "../components/Menu";

export default function About() {
    return(
        <Layout>
            <Menu />
            <div className="wrapper">
        <div className="md:flex flex-row md:px-16 items-center">
          {/* <div>
            <img src="headshot2.jpg" className="md:max-w-sm" />
            <div className="text-[8px] pt-2">Photo by Katy Shayne</div>
          </div> */}
          <div className="paragraph md:pt-0 pt-8 md:pl-8 md:text-left text-justify">
          Megan Paradowski received her BFA in Dance from Tisch School of the Arts at NYU. She has created and performed in contemporary dance works across the US and Europe. She co-founded <a href="https://www.voltacollective.com/" target="_blank" className="underline underline-offset-2 decoration-1">Volta</a>, a Los Angeles based dance theatre company, and has worked on commercial photo and video shoots including CloZee, Loren Stewart, and Undesigned LA, amongst others. Megan is interested in collaborating with other artists and celebrating other forms, as well as transcendence through live performance.
          </div>
        </div>
        <div className="paragraph text-center leading-8 pt-16">
          <div className="pt-8"><strong>Teaching</strong></div>
          Genesis Studios<br />
          University of Redlands<br />
          South Pasadena High School<br />
          Twinkle Toes Dance Company
        </div>
      </div>
        </Layout>
    )
}