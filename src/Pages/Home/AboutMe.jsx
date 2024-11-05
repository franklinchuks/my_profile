import { Link } from "react-scroll";

export default function AboutMe() {
    return (
        <section id="AboutMe" className="about--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <h1 className="skills-section-heading">About Me</h1>
                    <p className="text-md">
                        Currently, I employ strong analytical skills, extensive knowledge of financial markets, and proficiency in programming languages to develop quantitative strategies. At QNC, I have successfully built profitable algorithmic bots for the commodities market, three of which are based on my own strategies. These strategies consistently deliver impressive returns, with the lowest performer achieving at least a 150% annual ROI on AUM, a Sharpe Ratio close to 1, and a maximum drawdown of 15% (depending on lot size). Compared to the S&P 500 index’s average yield of about 20%, this represents an alpha of over 120%! I utilized the Value at Risk model to monitor risk thresholds, implement Monte Carlo simulations, and used Geometric Brownian Model specifically the black scholes formular to simulate price paths.
                        <br></br>
                        <br></br>
                        In addition to my technical expertise, I am dedicated to continuous learning and staying updated with the latest advancements in quantitative finance and software development. Whether it’s developing high-performance computing solutions or integrating machine learning techniques, I am always exploring new ways to push the boundaries of what’s possible in the financial industry.
                    </p>
                    <a href="./doc/cv.pdf" target="_blank"><button className="btn btn-primary">View my resume</button></a>
                </div>
            </div>
            <div className="about--section--img">
                <img src="./img/hero_img.jpeg" alt="About Me" />
            </div>
        </section>
    );
}