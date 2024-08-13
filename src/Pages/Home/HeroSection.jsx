export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">
                        Hey, I'm Frankie
                    </p>
                    <h1 className="hero--section--title">
                        <span className="hero-section--title--color">Software</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, vel rerum quae corrupti consequuntur aliquam error minus sequi consectetur a
                        <br /> eveniet sapiente itaque ullam est expedita numquam at modi nesciunt.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/about-me.jpeg" alt="Hero Section" />
            </div>
        </section>
    );
}