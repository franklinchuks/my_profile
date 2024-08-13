export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">
                        Hey, I'm Franklin...
                    </p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Quant</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        Strong foundation in finance with expertise in quantitative analysis and machine learning.
                        <br /> 
                        Data science-driven developer with a passion for applying AI solutions to complex financial challenges.
                        <br /> <br /> 
                    </p>
                </div>
                <a href="https://www.linkedin.com/in/franklin-chukwuemeka-5514ab150/" target="_blank"><button className="btn btn-primary">Get In Touch</button></a>
            </div>
            <div className="hero--section--img">
                <img src="./img/about-me.jpeg" alt="Hero Section" />
            </div>
        </section>
    );
}