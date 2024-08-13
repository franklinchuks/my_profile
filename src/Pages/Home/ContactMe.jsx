export default function ContactMe() {
    return (
      <section id="Contact" className="contact--section">
        <div>
          <h1>Contact Me</h1>
          <p className="text-sm">
            Phone Number: +372 5830 0891, Email: franklinchukwuemeka234@gmail.com
          </p>
        </div>
        <form className="contact--form--container">
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name<span className="hero--section--title--color">*</span></span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email<span className="hero--section--title--color">*</span></span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">Phone-number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
              />
            </label>
          </div>
          <label htmlFor="choode-topic" className="contact--label">
            <span className="text-md">Choose a topic<span className="hero--section--title--color">*</span></span>
            <select id="choose-topic" className="contact--input text-md">
              <option>Select One...</option>
              <option>Academic Project</option>
              <option>Job Opportunity</option>
              <option>Financial Advice</option>
              <option>Investment Idea</option>
              <option>Enquiry</option>
              <option>Others</option>
            </select>
          </label>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message<span className="hero--section--title--color">*</span></span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              placeholder="Type your message..."
              required
            />
          </label>
          <label htmlFor="checkboc" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms<span className="hero--section--title--color">*</span></span>
          </label>
          <div>
            <button className="btn btn-primary contact--form--btn">Send</button>
          </div>
        </form>
      </section>
    );
  }
  