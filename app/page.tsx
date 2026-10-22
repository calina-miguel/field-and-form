import "./field-and-form.css";

export const metadata = { title: "Field & Form | A little more clarity", description: "A practical food and wellbeing guide built around the everyday choices that suit you." };

const checklist = ["Name the moment you want to improve", "Choose one routine that feels realistic", "Keep a short list of options worth exploring", "Revisit what feels good for your day"];

export default function Page() {
  return <main className="field-page">
    <aside className="field-rail"><span>FIELD NOTES / 01</span><span className="rail-line"/><span>WELLNESS, WITHOUT THE NOISE</span><a href="#guide" aria-label="Jump to the guide">↓</a></aside>
    <div className="field-main">
      <header className="field-nav"><a href="#top" className="field-brand"><span className="field-mark">F<span>&</span></span><span>FIELD <i>& FORM</i></span></a><a className="field-nav-link" href="#guide">Get the free guide <b>↗</b></a></header>
      <section className="field-hero" id="top">
        <div className="field-copy"><p className="field-kicker">A SMALL GUIDE FOR EVERYDAY WELLBEING</p><h1>Make your<br />day feel <i>good.</i></h1><p className="field-lede">A practical, no-pressure checklist for finding food and wellness choices that fit the rhythm of your real life.</p><a className="field-cta" href="#guide">Get the checklist <span>↓</span></a><div className="field-note"><span>01</span><p>Simple ideas. Your own pace.</p></div></div>
        <div className="field-stilllife" aria-label="A printed everyday wellbeing checklist">
          <div className="field-sun"/><div className="leaf leaf-one"/><div className="leaf leaf-two"/><div className="leaf leaf-three"/>
          <article className="field-paper"><div className="paper-heading"><span>FIELD & FORM</span><span>DAILY PRACTICE / 01</span></div><p className="paper-title">A good day,<br /><i>by design.</i></p><div className="paper-rule"/>{checklist.slice(0,3).map((item,index)=><div className="paper-check" key={item}><span>{String(index+1).padStart(2,"0")}</span><i/><p>{item}</p></div>)}<div className="paper-signoff">A NOTE TO KEEP CLOSE <b>✳</b></div></article>
          <div className="field-seal">FREE<br /><i>FIELD GUIDE</i></div>
          <span className="field-annotation">A GENTLE<br />PLACE TO START</span>
        </div>
      </section>
      <section className="field-benefits"><div><span>01 / NOTICE</span><h2>Start with your day.</h2><p>What needs a little more ease: mornings, meals, or the middle of the afternoon?</p></div><div><span>02 / EXPLORE</span><h2>Keep it useful.</h2><p>Build a shortlist from the products and habits that feel relevant to you.</p></div><div><span>03 / REVISIT</span><h2>Let your needs lead.</h2><p>Good routines can change. Give yourself room to adjust as you go.</p></div></section>
      <section className="field-download" id="guide"><div className="download-copy"><p className="field-kicker">THE FIELD NOTE / FREE DOWNLOAD</p><h2>Keep a little<br /><i>goodness handy.</i></h2><p>Get the Everyday Wellbeing Checklist - a short guide for shaping a routine around what matters to you.</p><div className="download-meta"><span>4 PROMPTS</span><span>3 MINUTES</span><span>YOURS TO KEEP</span></div></div><form className="download-form"><span className="form-edition">FIELD & FORM / VOL. 01</span><label htmlFor="field-email">Send me the checklist</label><p>Where can we send your copy?</p><input id="field-email" name="email" type="email" placeholder="Email address" required/><button type="submit">Send my guide <span>↗</span></button><small>Only practical notes from Field & Form.</small></form></section>
      <footer className="field-footer"><a className="field-brand" href="#top"><span className="field-mark">F<span>&</span></span><span>FIELD <i>& FORM</i></span></a><span>Better days, built one choice at a time.</span><span>© 2026 FIELD & FORM</span></footer>
    </div>
  </main>;
}
