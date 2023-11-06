import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function Teaching() {
  return (
    <Layout>
      <div className="wrapper">
      <div className="accentFont uppercase text-center text-5xl pb-8 pt-24">
          Colliding Bodies
        </div>
        <div className="flex flex-col items-center">
          <div className="text-center md:max-w-6xl pb-8 text-justify md:text-center w-full md:w-3/4">
          Colliding Bodies explores highly physical and acrobatic partnering in a safe and grounded way. Rebound, theatricality, and gesture are used to tell stories through connection to another body. We will discover how to manage each other’s weight in unusual contexts and learn Volta's phrase work and repertory.
          </div>
          <div className="accentFont uppercase text-center text-5xl pb-8 pt-24">
          Colliding Bodies; Everybody
        </div>
        <div className="text-center md:max-w-6xl pb-8 text-justify md:text-center w-full md:w-3/4">
          Colliding Bodies explores highly physical and acrobatic partnering in a safe and grounded way. Rebound, theatricality, and gesture are used to tell stories through connection to another body. We will discover how to manage each other’s weight in unusual contexts and learn Volta's phrase work and repertory.
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 grid-flow-row gap-4 ">
            <img src="../teaching/1.jpg" className="w-full h-full object-cover" />
            <img src="../teaching/2.jpg" className="w-full h-full object-cover" />
            <img src="../teaching/3.jpg" className="w-full h-full object-cover" />
            <img src="../teaching/4.jpg" className="w-full h-full object-cover" />
            <img src="../teaching/5.jpg" className="w-full h-full object-cover" />
            <img src="../teaching/6.jpg" className="w-full h-full object-cover" />
            <img src="../teaching/7.jpg" className="w-full h-full object-cover" />
            <img src="../teaching/8.jpg" className="w-full h-full object-cover" />
            <img src="../teaching/9.jpg" className="w-full h-full object-cover" />
            <img src="../teaching/10.jpg" className="w-full h-full object-cover" />
            <img src="../teaching/11.jpg" className="w-full h-full object-cover" />
            <img src="../teaching/12.jpg" className="w-full h-full object-cover" />
            <img src="../teaching/13.jpg" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="accentFont uppercase text-center text-5xl pb-8 pt-24">
          Volta Co-Lab
        </div>
        <div className="flex flex-col items-center">
          <div className="text-center md:max-w-6xl pb-8 text-justify md:text-center w-full md:w-3/4">
            Volta Co-Lab is a workshop series that brings together dance artists
            from different backgrounds who share a passion for inclusive and
            innovative dance-making. Stay tuned for the next iteration!
          </div>
          <video loop autoPlay muted className="w-full">
            <source src="colab.mp4" />
          </video>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
