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
            <MyDegrees />
            <AboutMe />
            <References />
            <ContactMe />
            <Footer />
        </>
    )
}