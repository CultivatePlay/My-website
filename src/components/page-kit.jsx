// Cultivate Play — building blocks for service pages (/occupational-therapy/, /training/).
// Exposes window.CPKit. Needs shared.js, nav.js and faq-footer.js loaded first.
(function () {
  const NS = window.CultivatePlayDesignSystem_d72bbd;
  const CALENDLY = "https://calendly.com/alyssaengel-cultivate-play/30min";
  const Noop = () => null;
  const wrap = { maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)" };

  function Hero({ crumb, chip, title, children, credit, primary }) {
    const { Button, Vine = Noop, Flower = Noop, Blob = Noop } = NS;
    return (
      <section id="top" style={{ background: "var(--cream)", position: "relative", overflow: "hidden" }}>
        <div className="cp-decor-desktop" style={{ position: "absolute", top: "-14%", right: "-8%", opacity: 0.35, pointerEvents: "none" }}><Blob color="var(--mint-200)" size={360} /></div>
        <div className="cp-decor-desktop" style={{ position: "absolute", top: 24, left: "3%", pointerEvents: "none" }}><Vine color="var(--green-400)" size={110} /></div>
        <div className="cp-decor-desktop" style={{ position: "absolute", bottom: 40, right: "6%", pointerEvents: "none" }}><Flower color="var(--lavender-400)" size={38} /></div>
        <div className="cp-hero-pad" style={{ maxWidth: 820, margin: "0 auto", padding: "var(--space-20) var(--space-6)", textAlign: "center", position: "relative" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "var(--text-sm)", color: "var(--ink-500)", marginBottom: "var(--space-5)" }}>
            <a href="/" style={{ color: "var(--green-700)", fontWeight: 600 }}>Home</a> <span aria-hidden="true">/</span> {crumb}
          </nav>
          <span style={{ display: "inline-flex", background: "var(--lavender-100)", color: "var(--lavender-700)", fontWeight: 700, fontSize: "var(--text-sm)", padding: "7px 14px", borderRadius: "var(--radius-pill)", marginBottom: "var(--space-5)" }}>{chip}</span>
          <h1 style={{ fontSize: "var(--text-5xl)", lineHeight: 1.08, margin: "0 0 var(--space-3)" }}>{title}</h1>
          <p className="cp-hero-sub" style={{ fontSize: "var(--text-lg)", color: "var(--ink-600)", maxWidth: 600, margin: "var(--space-6) auto var(--space-8)", lineHeight: 1.6 }}>{children}</p>
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", justifyContent: "center" }}>
            {primary || <Button variant="primary" size="lg" as="a" href={CALENDLY} target="_blank" rel="noopener">Book a free consultation</Button>}
            <Button variant="outline" size="lg" as="a" href="tel:16157689170">Call (615) 768-9170</Button>
          </div>
          {credit && <p style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--ink-500)", marginTop: "var(--space-6)" }}>{credit}</p>}
        </div>
      </section>
    );
  }

  function Head({ eyebrow, title, children, center }) {
    const { CPEyebrow } = window;
    return (
      <div style={{ maxWidth: center ? "none" : 720, textAlign: center ? "center" : "left", marginBottom: "var(--space-10)" }}>
        <CPEyebrow>{eyebrow}</CPEyebrow>
        <h2 style={{ fontSize: "var(--text-4xl)", margin: children ? "0 0 var(--space-4)" : 0 }}>{title}</h2>
        {children && <p style={{ fontSize: "var(--text-lg)", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>{children}</p>}
      </div>
    );
  }

  function Band({ id, bg, children, narrow }) {
    return (
      <section id={id} style={{ background: bg || "var(--surface-page)" }}>
        <div className="cp-section-pad" style={narrow ? { ...wrap, maxWidth: 820 } : wrap}>{children}</div>
      </section>
    );
  }

  function Card({ title, children, tint }) {
    return (
      <div style={{ background: "var(--white)", border: "1.5px solid var(--ink-200)", borderRadius: "var(--radius-xl)", padding: "var(--space-6)", boxShadow: "var(--shadow-xs)" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", color: tint || "var(--green-700)", margin: "0 0 var(--space-2)", lineHeight: 1.3 }}>{title}</h3>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>{children}</p>
      </div>
    );
  }

  function Grid({ cols, children }) {
    const cls = cols === 4 ? "cp-grid-4" : cols === 2 ? "cp-grid-2" : "cp-grid-3";
    return <div className={cls} style={{ display: "grid", gridTemplateColumns: `repeat(${cols || 3}, 1fr)`, gap: "var(--space-5)" }}>{children}</div>;
  }

  function Chips({ items }) {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
        {items.map((x) => <span key={x} style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--green-700)", background: "var(--green-100)", padding: "6px 14px", borderRadius: "var(--radius-pill)" }}>{x}</span>)}
      </div>
    );
  }

  // Answers stay in the page (native <details>) so search engines can read them.
  function Faq({ title, items, bg }) {
    return (
      <Band id="page-faq" bg={bg} narrow>
        <Head eyebrow="Good to know" title={title} center />
        <div className="cp-accordion">
          {items.map((f) => (
            <details key={f.q} className="cp-accordion__item cp-ft-faq">
              <summary className="cp-accordion__head"><span>{f.q}</span>
                <svg className="cp-accordion__chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="cp-accordion__panel">{f.a}</div>
            </details>
          ))}
        </div>
      </Band>
    );
  }

  // Mounts a page inside the site nav and footer; faq feeds the FAQ structured data.
  function render(Page, faq) {
    if (faq) window.__pageFaq = faq;
    function Site() {
      const [book, setBook] = React.useState(false);
      const open = () => setBook(true);
      return (
        <React.Fragment>
          <window.CPNav onBook={open} />
          <main><Page /></main>
          <window.CPFooter onBook={open} />
          <window.CPBooking open={book} onClose={() => setBook(false)} />
        </React.Fragment>
      );
    }
    ReactDOM.createRoot(document.getElementById("root")).render(<Site />);
  }

  const answers = {
    insurance: "We're in-network with Blue Cross Blue Shield, TennCare Select, and BlueCare. For other plans, we offer private pay (card, cash, or HSA) and can provide a superbill to submit for reimbursement. Katie Beckett Waiver and IEA funding may also apply.",
    start: "The easiest first step is a free phone consultation. We'll talk about your child and family and whether we're the right fit. Prefer to skip the call? Have your pediatrician fax a referral to (615) 617-5873 and we'll take it from there.",
  };

  window.CPKit = { Hero, Head, Band, Card, Grid, Chips, Faq, render, answers, CALENDLY };
})();
