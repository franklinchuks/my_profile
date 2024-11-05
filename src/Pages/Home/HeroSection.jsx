export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <h3 className="hero--section--title">
                        <span className="hero--section--title--color">Quant</span>{""}itative Analysis,
                        <br />
                        Software Development
                    </h3>
                    <p className="hero--section--description">
                        With a robust background in applied mathematics, statistical modeling, and computer programming, I specialize in developing and implementing quantitative models and algorithms that enhance strategic decision-making and optimize operational strategies.
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