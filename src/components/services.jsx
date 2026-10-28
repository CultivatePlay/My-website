// Cultivate Play — services + approach. Exposes window.CPServices, window.CPApproach.
const NSs = window.CultivatePlayDesignSystem_d72bbd;

const leaf = (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M11 20A7 7 0 0 1 4 13c0-5 3-9 9-11 0 6-1 9-2 11"/><path d="M11 20c0-4 2-8 6-10"/></svg>;
const hand = (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M18 11V6a2 2 0 0 0-4 0M14 10V4a2 2 0 0 0-4 0v2M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>;
const chat = (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;

function CPServices() {
  const { Card, Badge, Button } = NSs;
  const Noop = () => null;
  const { Blob = Noop, LeafSprig = Noop, Sprout = Noop, Vine = Noop } = NSs;
  const { CPEyebrow } = window;
  const items = [
    { icon: hand, tint: "green", age: "Ages 0–18", href: "/occupational-therapy/", title: "Occupational Therapy", text: "Neurodiversity-affirming, strengths-based OT in your home, your community, or our office, turning your child's interests into meaningful growth." },
    { icon: leaf, tint: "lavender", age: "Ages 0–18", href: "/floortime/", title: "DIR Floortime", text: "A developmental, relationship-based approach woven into therapy, plus parent coaching so you can use Floortime at home." },
    { icon: chat, tint: "mint", age: "For teams & orgs", href: "/training/", title: "Training & Education", text: "Coaching and workshops on sensory processing, neurodiversity, ADHD, executive functioning and more, for schools, daycares, and organizations." },
  ];
  const otSkills = [
    { t: "Sensory processing", d: "Supporting how your child takes in and responds to sights, sounds, textures, and movement so they can join in comfortably." },
    { t: "Fine motor & handwriting", d: "Hand strength and control for writing, drawing, buttons, zippers, and utensils." },
    { t: "Self-care & daily routines", d: "Growing independence with dressing, toileting, brushing teeth, and getting ready." },
    { t: "Feeding & mealtimes", d: "Gentle support for picky eating and making meals feel more comfortable." },
    { t: "Emotional regulation", d: "Noticing big feelings and building tools to feel safe and in control." },
    { t: "Motor planning & coordination", d: "Coordinating the body for play, sports, balance, and everyday movement." },
    { t: "Attention & executive function", d: "Focus, transitions, planning, and following multi-step routines." },
    { t: "Play & social connection", d: "Joining in, sharing, and building friendships in ways that feel authentic." },
  ];
  return (
    <section id="services" style={{ background: "var(--surface-page)", position: "relative", overflow: "hidden" }}>
      <div className="cp-decor-desktop" style={{ position: "absolute", top: 30, right: "3%", opacity: 0.85, pointerEvents: "none" }}><Vine color="var(--green-300)" size={130} flip={true} /></div>
      <div className="cp-section-pad" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)", position: "relative" }}>
        <div style={{ maxWidth: 640, marginBottom: "var(--space-12)" }}>
          <CPEyebrow>What we do</CPEyebrow>
          <h2 style={{ fontSize: "var(--text-4xl)", margin: "0 0 var(--space-4)", display: "flex", alignItems: "center", gap: 12 }}>Care that grows with your child <Sprout size={38} /></h2>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--ink-600)", lineHeight: 1.6 }}>
            Neurodiversity-affirming occupational therapy across Rutherford County,
            with telehealth available statewide.
          </p>
        </div>
        <div className="cp-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-6)" }}>
          {items.map((it) => (
            <Card key={it.title} interactive>
              <Card.Body>
                <div style={{ position: "relative", marginBottom: "var(--space-4)", width: 60, height: 60 }}>
                  <div style={{ position: "absolute", inset: -6, opacity: 0.6 }}><Blob color={it.tint === "lavender" ? "var(--lavender-200)" : it.tint === "green" ? "var(--green-200)" : "var(--mint-200)"} size={72} /></div>
                  <div style={{
                    position: "relative", width: 52, height: 52, borderRadius: "var(--radius-lg)",
                    background: it.tint === "lavender" ? "var(--lavender-100)" : it.tint === "green" ? "var(--green-100)" : "var(--mint-100)",
                    color: it.tint === "lavender" ? "var(--lavender-600)" : "var(--green-600)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>{it.icon()}</div>
                </div>
                <Badge color={it.tint === "lavender" ? "lavender" : "green"} style={{ marginBottom: 10 }}>{it.age}</Badge>
                <Card.Title>{it.title}</Card.Title>
                <Card.Text>{it.text}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="ghost" size="sm" as="a" href={it.href} trailingIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>}>Learn more</Button>
              </Card.Footer>
            </Card>
          ))}
        </div>
        <div id="occupational-therapy" style={{ marginTop: "var(--space-16)", paddingTop: "var(--space-12)", borderTop: "1.5px solid var(--ink-100)", scrollMarginTop: 90 }}>
          <div style={{ maxWidth: 640, marginBottom: "var(--space-8)" }}>
            <CPEyebrow>Occupational therapy</CPEyebrow>
            <h3 style={{ fontSize: "var(--text-3xl)", margin: "0 0 var(--space-3)", fontFamily: "var(--font-display)", color: "var(--ink-900)" }}>How occupational therapy can help</h3>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>
              Every child is different, so therapy is built around your child's strengths and your family's goals. These are some of the areas families come to us for support with.
            </p>
          </div>
          <div className="cp-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-4)" }}>
            {otSkills.map((s) => (
              <div key={s.t} style={{ background: "var(--white)", border: "1.5px solid var(--ink-200)", borderRadius: "var(--radius-xl)", padding: "var(--space-5)", boxShadow: "var(--shadow-xs)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--green-700)", margin: "0 0 var(--space-2)", lineHeight: 1.25 }}>{s.t}</div>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--ink-600)", lineHeight: 1.55, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "var(--space-8)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-3)" }}>
            <span style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--ink-700)" }}>Support for children with:</span>
            {["Autism", "ADHD (attention deficit hyperactivity disorder)", "PDA (Persistent Drive for Autonomy)", "Developmental delays", "Down syndrome", "Sensory processing disorder", "Developmental coordination disorder (dyspraxia)"].map((x) => (
              <span key={x} style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--green-700)", background: "var(--green-100)", padding: "6px 14px", borderRadius: "var(--radius-pill)" }}>{x}</span>
            ))}
          </div>
          <div style={{ marginTop: "var(--space-6)" }}>
            <a href="/occupational-therapy/" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: "var(--text-base)", color: "var(--green-700)" }}>
              Learn more about occupational therapy in Murfreesboro
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CPApproach() {
  const { CPEyebrow } = window;
  const Noop = () => null;
  const { WavyDivider = Noop, Sparkle = Noop } = window.CultivatePlayDesignSystem_d72bbd;
  const steps = [
    { n: "01", t: "Free phone consult", d: "A no-pressure call to talk about your child and see whether we're the right fit." },
    { n: "02", t: "Play-based evaluation", d: "A relaxed, child-led session to understand your child's strengths and where support helps. It may include standardized assessments and parent questionnaires." },
    { n: "03", t: "A plan built on strengths", d: "We set goals together, around your family's routines, priorities, and your child's interests." },
    { n: "04", t: "Grow together", d: "Ongoing sessions at home, in the community, in office, or via telehealth, with progress you can see." },
  ];
  return (
    <section id="approach" style={{ background: "var(--green-600)", color: "#fff", position: "relative" }}>
      <div className="cp-decor-desktop" style={{ position: "absolute", top: -1, left: 0, right: 0, lineHeight: 0 }}><WavyDivider color="var(--cream)" height={38} /></div>
      <div className="cp-section-pad cp-approach-grid" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6) var(--space-24)",
        display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "var(--space-16)", alignItems: "center" }}>
        <div>
          <p className="cp-eyebrow" style={{ color: "var(--green-200)", margin: "0 0 var(--space-3)" }}>Our approach</p>
          <h2 style={{ fontSize: "var(--text-4xl)", color: "#fff", margin: "0 0 var(--space-5)" }}>Gentle, playful, and built around your child</h2>
          <p style={{ fontSize: "var(--text-lg)", color: "rgba(255,255,255,.82)", lineHeight: 1.6, marginBottom: "var(--space-8)" }}>
            Every child develops at their own pace. Here's how we turn strengths-based,
            neurodiversity-affirming care into a plan your family can actually live with.
          </p>
        </div>
        <div className="cp-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
          {steps.map((s) => (
            <div key={s.n} style={{
              background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: "var(--radius-xl)", padding: "var(--space-6)",
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-2xl)", color: "var(--green-200)", marginBottom: "var(--space-2)" }}>{s.n}</div>
              <h3 style={{ color: "#fff", fontSize: "var(--text-lg)", margin: "0 0 var(--space-2)" }}>{s.t}</h3>
              <p style={{ color: "rgba(255,255,255,.78)", fontSize: "var(--text-sm)", lineHeight: 1.6, margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function CPFloortime() {
  const { CPEyebrow } = window;
  const dirPillars = [
    { k: "D", t: "Developmental", d: "We meet your child at their current developmental stage and build up from there, one meaningful step at a time." },
    { k: "I", t: "Individual differences", d: "We honor the unique way your child takes in, processes, and responds to the world around them." },
    { k: "R", t: "Relationships", d: "Real growth happens through warm, trusting relationships, so connection always comes first." },
  ];
  return (
    <section id="dir-floortime" style={{ background: "var(--lavender-50)", scrollMarginTop: 90 }}>
      <div className="cp-section-pad" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)" }}>
        <div style={{ maxWidth: 680, marginBottom: "var(--space-10)" }}>
          <CPEyebrow>DIR Floortime</CPEyebrow>
          <h2 style={{ fontSize: "var(--text-4xl)", margin: "0 0 var(--space-4)" }}>A relationship-based approach, woven into every session</h2>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>
            DIR Floortime is a child-led approach that values, acknowledges, and builds upon three things. It promotes development and genuine connection in a way that feels meaningful to your child.
          </p>
        </div>
        <div className="cp-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)" }}>
          {dirPillars.map((p) => (
            <div key={p.k} style={{ background: "var(--white)", border: "1.5px solid var(--ink-200)", borderRadius: "var(--radius-xl)", padding: "var(--space-7)", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: "50%", background: "var(--lavender-100)", color: "var(--lavender-700)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-2xl)", marginBottom: "var(--space-4)" }}>{p.k}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--ink-900)", margin: "0 0 var(--space-2)" }}>{p.t}</h3>
              <p style={{ fontSize: "var(--text-base)", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>{p.d}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "var(--text-lg)", color: "var(--ink-700)", lineHeight: 1.6, marginTop: "var(--space-8)", maxWidth: 760 }}>
          Cultivate Play weaves DIR Floortime into therapy with every child, and coaches parents to use it at home so connection and growth continue between sessions.
        </p>
        <a href="/floortime/" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: "var(--space-4)", fontWeight: 700, fontSize: "var(--text-base)", color: "var(--green-700)" }}>
          Learn more about DIR Floortime in Murfreesboro
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
    </section>
  );
}

function CPTraining() {
  const { CPEyebrow } = window;
  const { Button } = NSs;
  const topics = ["Sensory processing", "Neurodiversity", "Autism", "ADHD", "Fine motor development", "Executive functioning", "Self-care skills", "Behavior management", "Inclusion"];
  const past = [
    "Local church respite program volunteers",
    "Local speech therapists and music therapists",
    "Girl Scout summer camp staff",
    "Girl Scout troop leaders and volunteers",
  ];
  return (
    <section id="training" style={{ background: "var(--surface-page)", scrollMarginTop: 90 }}>
      <div className="cp-section-pad" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)" }}>
        <div className="cp-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-16)", alignItems: "start" }}>
          <div>
            <CPEyebrow>Training & Education</CPEyebrow>
            <h2 style={{ fontSize: "var(--text-4xl)", margin: "0 0 var(--space-4)" }}>Training for schools, teams, and organizations</h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--ink-600)", lineHeight: 1.6, margin: "0 0 var(--space-6)" }}>
              We provide coaching and training for daycares, preschools, private schools, churches, and community small businesses. We would love to collaborate and help train your staff or volunteers.
            </p>
            <div style={{ fontSize: "var(--text-xs)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ink-400)", marginBottom: "var(--space-3)" }}>Topics we cover</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginBottom: "var(--space-7)" }}>
              {topics.map((t) => (<span key={t} style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--green-700)", background: "var(--green-100)", padding: "6px 14px", borderRadius: "var(--radius-pill)" }}>{t}</span>))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-5)" }}>
              <Button variant="primary" as="a" href="#contact">Request training</Button>
              <a href="/training/" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: "var(--text-base)", color: "var(--green-700)" }}>
              Learn more about training
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "var(--text-xs)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ink-400)", marginBottom: "var(--space-4)" }}>Trainings we've provided</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {past.map((p) => (
                <div key={p} style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", background: "var(--white)", border: "1.5px solid var(--ink-200)", borderRadius: "var(--radius-lg)", padding: "var(--space-4) var(--space-5)" }}>
                  <span style={{ flex: "none", width: 34, height: 34, borderRadius: "50%", background: "var(--mint-100)", color: "var(--green-600)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </span>
                  <span style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--ink-800)" }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CPServices, CPApproach, CPFloortime, CPTraining });
