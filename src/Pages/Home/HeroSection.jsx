export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Hello</span>,<br></br>I'm Franklin.
                    </h1>
                    <h2 className="hero--section--title--small">
                        I utilize quantitative and programming skills to transform data into actionable insights.
                    </h2>
                </div>
                <a href="https://www.linkedin.com/in/franklin-chukwuemeka-5514ab150/" target="_blank"><button className="btn btn-primary">Get In Touch</button>
                </a>
                    <p className="hero--section--description">
                        With a robust background in applied mathematics, predictive modeling, and computer programming, I specialize in developing quantitative models and algorithms that enhance strategic decision-making and optimize operational strategies.
                    </p>
            </div>
            <div className="hero--section--img">
                <img src="./img/hmm.jpg" alt="Hero Section" />
            </div>
        </section>
    );
}