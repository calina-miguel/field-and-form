import "./field-and-form.css";
import "./pathway.css";
import { Pathway } from "./pathway";

export const metadata = {
  title: "Field & Form | A little more clarity",
  description: "A practical food and wellbeing guide built around everyday choices that fit your life.",
};

const checklist = [
  "Name the moment you want to improve",
  "Choose one routine that feels realistic",
  "Keep a short list of options worth exploring",
  "Revisit what feels good for your day",
];

export default function Page() {
  return (
    <main className="field-page" id="top">
      <div className="field-main">
        <header className="field-nav">
          <a href="#top" className="field-brand" aria-label="Field & Form home">
            <span className="field-mark">F</span><span>Field &amp; Form</span>
          </a>
          <nav className="field-nav-menu" aria-label="Main navigation">
            <a href="#approach">Approach</a>
            <a href="#work">Your day</a>
            <a href="#guide">The guide</a>
          </nav>
          <a className="field-nav-link" href="#guide">Get the field guide</a>
        </header>

        <figure className="field-cover" aria-label="A quiet river in Yosemite Valley">
          <img className="field-cover-image" src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/field-valley.webp`} alt="A river winding through a forest beneath Yosemite's granite peaks" fetchPriority="high" decoding="async" />
          <div className="field-cover-shade" aria-hidden="true" />
          <div className="field-cover-center">
            <div className="field-cover-card">
              <h1>Field<br />&amp; Form</h1>
            </div>
            <p className="field-cover-subtitle">Functional wellbeing<br />for real, everyday life</p>
            <a className="field-scroll-cue" href="#approach">Scroll to explore<i aria-hidden="true" /></a>
          </div>
          <figcaption className="field-photo-credit">
            <a href="https://unsplash.com/@hportillo" target="_blank" rel="noreferrer">Yosemite Valley, photographed by Humberto Portillo</a>
          </figcaption>
        </figure>

        <section className="field-benefit-section" id="approach">
          <div className="field-story-head">
            <span>A FIELD NOTE FOR EVERYDAY WELLBEING</span>
            <h2>Small choices. More ease.</h2>
          </div>
          <div className="field-benefits" id="work">
            <div><span>01 / NOTICE</span><h2>Start with your day.</h2><p>What needs a little more ease: mornings, meals, or the middle of the afternoon?</p></div>
            <div><span>02 / EXPLORE</span><h2>Keep it useful.</h2><p>Build a shortlist from the products and habits that feel relevant to you.</p></div>
            <div><span>03 / REVISIT</span><h2>Let your needs lead.</h2><p>Good routines can change. Give yourself room to adjust as you go.</p></div>
          </div>
        </section>

        <section className="field-download" id="guide">
          <div className="download-copy">
            <p className="field-kicker">THE FIELD NOTE / PERSONAL GUIDE</p>
            <h2>Keep a little<br /><i>goodness handy.</i></h2>
            <p>Choose a moment in your day and get a useful starting point to keep close.</p>
            <div className="download-meta"><span>3 PROMPTS</span><span>PERSONAL ROUTE</span><span>YOURS TO KEEP</span></div>
          </div>
          <Pathway />
        </section>

        <footer className="field-footer">
          <a className="field-brand" href="#top"><span className="field-mark">F</span><span>Field &amp; Form</span></a>
          <span>Better days, built one choice at a time.</span>
          <span>© 2026 FIELD &amp; FORM</span>
        </footer>
      </div>
    </main>
  );
}
