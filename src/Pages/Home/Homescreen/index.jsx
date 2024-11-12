import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyDegrees from "../MyDegrees";
import AboutMe from "../AboutMe";
import References from "../References";
import ContactMe from "../ContactMe";
import Footer from "../Footer";


export default function Home () {
    return(
        <>
            <HeroSection />
            <MySkills />
            <hr className="horizontal_line"></hr>
            <MyDegrees />
            <hr className="horizontal_line"></hr>
            <AboutMe />
            <References />
            <ContactMe />
            <Footer />
        </>
    )
}