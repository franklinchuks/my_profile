import { useState } from "react";
import data from "../../data/index.json";

function PortfolioSection() {
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            window.open(selectedValue, '_blank');
        }
    };

    return (
        <div className="portfolio--section--container">
            <select className="custom--select" onChange={handleSelectChange}>
                <option value="" disabled selected hidden>Please click here to view a project...</option>
                {data?.DropDown?.map((group, groupIndex) => (
                    <optgroup key={groupIndex} label={group.label}>
                        {group.options.map((item, itemIndex) => (
                            <option key={itemIndex} value={item.link}>{item.title}</option>
                        ))}
                    </optgroup>
                ))}
            </select>
        </div>
    );
  }

export default function MySkills() {
    
    return (
        <section className="skills--section" id="MySkills">
            <div className="portfolio--container">
                <h2 className="skills--section--heading">My Expertise</h2>
            </div>
            <div className="skills--section--container">
                {data?.MySkills?.map((item, index) => (
                    <div key={index}
                    className="skills--section--card">
                        <div className="skills--section--img">
                            <img className="skills--logo" src={item.src} alt="Product Chain" />
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            <p className="skills--section--description">{item.description}</p>
                        </div>

                        <div>
                            <a href="https://www.linkedin.com/in/franklin-chukwuemeka-5514ab150/recent-activity/all/" target="_blank">View project samples</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <h2 className="skills-section-heading">My Portfolio</h2>
                </div>
            </div>
            <PortfolioSection />
        </section>
    );
}