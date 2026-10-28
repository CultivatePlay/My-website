// Cultivate Play — website hero. Exposes window.CPHero.
const NSh = window.CultivatePlayDesignSystem_d72bbd;
const CALENDLY = "https://calendly.com/alyssaengel-cultivate-play/30min";

function CPHero({ onBook }) {
  const { Button, Badge } = NSh;
  const Noop = () => null;
  const { Sparkle = Noop, Sun = Noop, Vine = Noop, Flower = Noop, LeafSprig = Noop, Squiggle = Noop, Curl = Noop, Blob = Noop } = NSh;
  return (
    <section id="top" style={{ background: "var(--cream)", position: "relative", overflow: "hidden" }}>
      {/* big soft background blobs, balanced behind the centered column */}
      <div className="cp-decor-desktop" style={{ position: "absolute", top: "-16%", right: "-8%", opacity: 0.35, pointerEvents: "none" }}><Blob color="var(--mint-200)" size={380} /></div>
      <div className="cp-decor-desktop" style={{ position: "absolute", top: "-10%", left: "-10%", opacity: 0.3, pointerEvents: "none" }}><Blob color="var(--lavender-200)" size={300} /></div>
      {/* botanical + swirly accents */}
      <div className="cp-decor-desktop" style={{ position: "absolute", top: 24, left: "3%", pointerEvents: "none" }}><Vine color="var(--green-400)" size={110} /></div>
      <div className="cp-decor-desktop" style={{ position: "absolute", top: 28, right: "4%", pointerEvents: "none" }}><Flower color="var(--lavender-400)" size={38} /></div>
      <div className="cp-decor-desktop" style={{ position: "absolute", bottom: 40, left: "5%", pointerEvents: "none" }}><LeafSprig color="var(--green-400)" size={50} /></div>
      <div className="cp-decor-desktop" style={{ position: "absolute", bottom: 44, right: "6%", pointerEvents: "none" }}><Curl color="var(--lavender-400)" width={90} height={22} /></div>
      <div className="cp-hero-pad" style={{
        maxWidth: 820, margin: "0 auto",
        padding: "var(--space-20) var(--space-6) var(--space-24)",
        textAlign: "center",
      }}>
        <div>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--lavender-100)", color: "var(--lavender-700)",
            fontWeight: 700, fontSize: "var(--text-sm)", padding: "7px 14px",
            borderRadius: "var(--radius-pill)", marginBottom: "var(--space-5)",
            justifyContent: "center",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-5 3-9 9-11 0 6-1 9-2 11"/><path d="M11 20c0-4 2-8 6-10"/></svg>
            Neurodiversity-affirming pediatric OT · Middle Tennessee
          </span>
          <h1 style={{ fontSize: "var(--text-5xl)", lineHeight: 1.08, margin: "0 0 var(--space-3)", position: "relative" }}>
            Helping kids grow, one{" "}
            <span style={{ position: "relative", display: "inline-block", whiteSpace: "nowrap" }}>
              <span style={{ position: "absolute", left: -6, right: -6, bottom: 10, height: "0.34em", background: "var(--mint-200)", borderRadius: "var(--radius-pill)", zIndex: 0 }} />
              <span style={{ position: "relative", zIndex: 1 }}>playful</span>
            </span>{" "}
            step at a time.
          </h1>
          <p className="cp-hero-sub" style={{ fontSize: "var(--text-lg)", color: "var(--ink-600)", maxWidth: 560, margin: "var(--space-6) auto var(--space-8)", lineHeight: 1.6 }}>
            Child-led, strengths-based occupational therapy for kids across Middle
            Tennessee, in your home, your community, our Murfreesboro office, or by
            telehealth. We meet every child where they are.
          </p>
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
            <Button variant="primary" size="lg" as="a" href={CALENDLY} target="_blank" rel="noopener">Book a free consultation</Button>
            <Button variant="outline" size="lg" as="a" href="#services">Explore services</Button>
            <LeafSprig color="var(--green-400)" size={30} style={{ marginLeft: 2 }} />
          </div>
          <div className="cp-hero-stats" style={{ display: "flex", gap: "var(--space-8)", marginTop: "var(--space-10)", justifyContent: "center", flexWrap: "wrap" }}>
            <Stat v="0–18" l="Ages we serve" />
            <Stat v="DIR" l="Floortime certified" />
            <Stat v="TN" l="Telehealth statewide" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ v, l }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-3xl)", color: "var(--green-600)", lineHeight: 1 }}>{v}</div>
      <div style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--ink-600)", marginTop: 4 }}>{l}</div>
    </div>
  );
}
Object.assign(window, { CPHero });
