export default function ContactMe() {
    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure provident, magnam quae impedit nobis rem dolorem sequi et? Repellat eum quos rem earum! Ratione vero, eius sunt cum repellat exercitationem?
                </p>
            </div>
            <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input
                            type="text" className="contact--input" name="first-name"
                            id="first-name"
                            required
                        />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input
                            type="text" className="contact--input" name="last-name"
                            id="last-name"
                            required
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input
                            type="email" className="contact--input" name="email"
                            id="email"
                            required
                        />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input
                            type="number" className="contact--input" name="phone-number"
                            id="phone-number"
                            required
                        />
                    </label>
                    <label htmlFor="choose-topic" className="contact--label">
                        <span className="text-md">Choose a topic</span>
                        <select id="choose-topic"
                        className="contact--input text-md">
                            <option>Select One...</option>
                            <option>Item 1</option>
                            <option>Item 2</option>
                            <option>Item 3</option>
                        </select>
                    </label>
                    <label htmlFor="message" className="contact--label">
                        <span className="text-md">Message</span>
                        <textarea className="contact--input text-md"
                        id="message"
                        rows="8"
                        placeholder="Type your message..."
                        />
                    </label>
                    <label htmlFor="checkbox" className="checkbox--label">
                        <input
                            type="checkbox" className="checkbox--input" name="checkbox"
                            id="checkbox"
                            required
                        />
                        <span className="text-sm">Message</span>
                    </label>
                    <div><button className="btn btn-ptimary contact--form--btn">Submit</button></div>
                </div>
            </form>
        </section>
    )
}