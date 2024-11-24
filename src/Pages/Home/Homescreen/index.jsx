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
            <hr className="horizontal_line"></hr>
            <MySkills />
            <hr className="horizontal_line"></hr>
            <MyDegrees />
            <hr className="horizontal_line"></hr>
            <AboutMe />
            <hr className="horizontal_line"></hr>
            <References />
            <hr className="horizontal_line"></hr>
            <ContactMe />
            <hr className="horizontal_line"></hr>
            <Footer />
        </>
    )
}