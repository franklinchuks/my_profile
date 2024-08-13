import { Link } from "react-scroll";

export default function AboutMe() {
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/hero_img.jpeg" alt="About Me" />
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <h1 className="skills-section-heading">About Me</h1>
                    <p className="text-md">
                        Data science-driven analyst with a passion for applying quantitative analysis and AI solutions to complex financial challenges. Possesses a strong foundation in finance combined with a deep understanding of quantitative analysis and machine learning. 
                    </p>
                    <p className="text-md">
                        Currently, I put together a strong analytical skillset, in-depth knowledge of financial markets, and proficiency in programming languages to develop quantitative strategies. My experience includes building profitable algorithmic bots for the commodities market at QNC, 3 of which were based on my own strategies. These strategies deliver consistent returns, with even the lowest performer netting at least 25% annual ROI, a Sharpe Ratio of 0.7, and a maximum drawdown of 15% (depending on lot size).
                    </p>
                    <Link className="btn btn-outline-primary">Resume</Link>
                </div>
            </div>

            <div className="portfolio--container">
                <h1 className="section--heading">Hobbies</h1>
            </div>
        </section>
    );
}