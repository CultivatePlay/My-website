// Cultivate Play — DIR Floortime page (/floortime/). Exposes window.CPFloortimePage.
// FAQ answers use <details> so every answer is in the page for search engines.
// window.__pageFaq feeds the FAQ structured data written by tools/build.py.
const NSp = window.CultivatePlayDesignSystem_d72bbd;
const CALENDLY_FT = "https://calendly.com/alyssaengel-cultivate-play/30min";

const FT_FAQ = [
  { q: "Do you offer DIR Floortime in Murfreesboro?", a: "Yes. Cultivate Play provides DIR Floortime in Murfreesboro and across Rutherford County, including Smyrna and La Vergne. Sessions happen in your home or community, at our Murfreesboro office at 1810 Ward Drive, or by telehealth anywhere in Tennessee." },
  { q: "Is DIR Floortime covered by insurance?", a: "We weave Floortime into our occupational therapy sessions, which are billed as occupational therapy. We're in-network with Blue Cross Blue Shield, TennCare Select, and BlueCare. For other plans, we offer private pay (card, cash, or HSA) and can provide a superbill to submit for reimbursement. Katie Beckett Waiver and IEA funding may also apply." },
  { q: "How is DIR Floortime different from ABA?", a: "Both are used with autistic children, but they start from different places. ABA (applied behavior analysis) generally uses structured teaching and reinforcement to build specific behaviors and skills. DIR Floortime is developmental and relationship-based. It follows your child's lead and interests and focuses on regulation, connection, communication, and emotional development, with new skills growing out of that foundation." },
  { q: "Can DIR Floortime help with social skills?", a: "Yes. Rather than teaching scripted social skills, Floortime builds the foundations underneath them: staying connected in back-and-forth play, solving problems together with another person, and using ideas and pretend play to express feelings. That way, social growth comes from genuine connection." },
  { q: "What ages do you work with?", a: "Children and teens, ages 0 to 18. Floortime looks different at every age, from floor play with toddlers to shared interests and problem solving with older kids and teens." },
  { q: "Do parents take part in sessions?", a: "Yes, and we encourage it. Parent coaching is a core part of how we use Floortime, so you'll leave sessions with ideas you can use during everyday routines at home." },
  { q: "How do we get started?", a: "The easiest first step is a free phone consultation. We'll talk about your child and family and whether we're the right fit. Prefer to skip the call? Have your pediatrician fax a referral to (615) 617-5873 and we'll take it from there." },
];
window.__pageFaq = FT_FAQ;

function FtCard({ title, children, tint }) {
  return (
    <div style={{ background: "var(--white)", border: "1.5px solid var(--ink-200)", borderRadius: "var(--radius-xl)", padding: "var(--space-6)", boxShadow: "var(--shadow-xs)" }}>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", color: tint || "var(--green-700)", margin: "0 0 var(--space-2)", lineHeight: 1.3 }}>{title}</h3>
      <p style={{ fontSize: "var(--text-sm)", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>{children}</p>
    </div>
  );
}

function CPFloortimePage() {
  const { Button } = NSp;
  const Noop = () => null;
  const { Vine = Noop, Flower = Noop, LeafSprig = Noop, Blob = Noop } = NSp;
  const { CPEyebrow } = window;

  const pillars = [
    { k: "D", t: "Developmental", d: "We meet your child at their current developmental stage and build up from there, one meaningful step at a time." },
    { k: "I", t: "Individual differences", d: "We honor the unique way your child takes in, processes, and responds to the world around them." },
    { k: "R", t: "Relationships", d: "Real growth happens through warm, trusting relationships, so connection always comes first." },
  ];
  const session = [
    { t: "Following your child's lead", d: "We start with what your child is drawn to, whether that's trains, water play, or a favorite show, and join them there." },
    { t: "Regulation comes first", d: "We pay close attention to your child's sensory profile and help them feel calm, safe, and ready to connect." },
    { t: "Building back-and-forth", d: "We gently stretch play into longer back-and-forth exchanges, using gestures, sounds, words, or ideas." },
    { t: "Just-right challenge", d: "Once your child is engaged, we add playful problems to solve so they can grow at their own pace." },
  ];
  const helps = ["Autism", "ADHD", "PDA (Persistent Drive for Autonomy)", "Developmental delays", "Down syndrome", "Sensory processing differences", "Social and emotional development", "Communication and connection"];
  const places = [
    { t: "In your home or community", d: "Murfreesboro, Smyrna, La Vergne, and across Rutherford County. Floortime works best where your child is most comfortable." },
    { t: "Our Murfreesboro office", d: "1810 Ward Drive, Ste 101, Murfreesboro, TN 37129." },
    { t: "Telehealth", d: "Floortime parent coaching and therapy by video, anywhere in Tennessee." },
  ];

  return (
    <React.Fragment>
      {/* Hero */}
      <section id="top" style={{ background: "var(--cream)", position: "relative", overflow: "hidden" }}>
        <div className="cp-decor-desktop" style={{ position: "absolute", top: "-14%", right: "-8%", opacity: 0.35, pointerEvents: "none" }}><Blob color="var(--lavender-200)" size={360} /></div>
        <div className="cp-decor-desktop" style={{ position: "absolute", top: 24, left: "3%", pointerEvents: "none" }}><Vine color="var(--green-400)" size={110} /></div>
        <div className="cp-decor-desktop" style={{ position: "absolute", bottom: 40, right: "6%", pointerEvents: "none" }}><Flower color="var(--lavender-400)" size={38} /></div>
        <div className="cp-hero-pad" style={{ maxWidth: 820, margin: "0 auto", padding: "var(--space-20) var(--space-6) var(--space-20)", textAlign: "center", position: "relative" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "var(--text-sm)", color: "var(--ink-500)", marginBottom: "var(--space-5)" }}>
            <a href="/" style={{ color: "var(--green-700)", fontWeight: 600 }}>Home</a> <span aria-hidden="true">/</span> DIR Floortime
          </nav>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--lavender-100)", color: "var(--lavender-700)", fontWeight: 700, fontSize: "var(--text-sm)", padding: "7px 14px", borderRadius: "var(--radius-pill)", marginBottom: "var(--space-5)" }}>
            Murfreesboro · Smyrna · La Vergne · Rutherford County
          </span>
          <h1 style={{ fontSize: "var(--text-5xl)", lineHeight: 1.08, margin: "0 0 var(--space-3)" }}>DIR Floortime in Murfreesboro, TN</h1>
          <p className="cp-hero-sub" style={{ fontSize: "var(--text-lg)", color: "var(--ink-600)", maxWidth: 600, margin: "var(--space-6) auto var(--space-8)", lineHeight: 1.6 }}>
            Child-led, relationship-based DIR Floortime for kids and teens ages 0 to 18, woven into
            neurodiversity-affirming occupational therapy. In your home or community across Rutherford
            County, at our Murfreesboro office, or by telehealth anywhere in Tennessee.
          </p>
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
            <Button variant="primary" size="lg" as="a" href={CALENDLY_FT} target="_blank" rel="noopener">Book a free consultation</Button>
            <Button variant="outline" size="lg" as="a" href="tel:16157689170">Call (615) 768-9170</Button>
          </div>
          <p style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--ink-500)", marginTop: "var(--space-6)" }}>
            Led by Alyssa Engel, OTD, OTR/L, DIR-Proficient
          </p>
        </div>
      </section>

      {/* What is DIR Floortime */}
      <section id="what-is-floortime" style={{ background: "var(--lavender-50)" }}>
        <div className="cp-section-pad" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)" }}>
          <div style={{ maxWidth: 720, marginBottom: "var(--space-10)" }}>
            <CPEyebrow>The basics</CPEyebrow>
            <h2 style={{ fontSize: "var(--text-4xl)", margin: "0 0 var(--space-4)" }}>What is DIR Floortime?</h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--ink-600)", lineHeight: 1.6, margin: "0 0 var(--space-4)" }}>
              DIR stands for Developmental, Individual differences, and Relationship-based. It's a framework for
              understanding how each child develops. Floortime is the playful, hands-on way of putting it into
              practice: joining your child where they are, following their lead, and building connection and new
              abilities through the things they already love.
            </p>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>
              Rather than drilling isolated skills, Floortime supports the foundations underneath them:
              regulation, engagement, two-way communication, problem solving, and emotional thinking.
            </p>
          </div>
          <div className="cp-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)" }}>
            {pillars.map((p) => (
              <div key={p.k} style={{ background: "var(--white)", border: "1.5px solid var(--ink-200)", borderRadius: "var(--radius-xl)", padding: "var(--space-7)", boxShadow: "var(--shadow-sm)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: "50%", background: "var(--lavender-100)", color: "var(--lavender-700)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-2xl)", marginBottom: "var(--space-4)" }}>{p.k}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--ink-900)", margin: "0 0 var(--space-2)" }}>{p.t}</h3>
                <p style={{ fontSize: "var(--text-base)", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What a session looks like */}
      <section id="sessions" style={{ background: "var(--surface-page)" }}>
        <div className="cp-section-pad" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)" }}>
          <div style={{ maxWidth: 680, marginBottom: "var(--space-10)" }}>
            <CPEyebrow>In practice</CPEyebrow>
            <h2 style={{ fontSize: "var(--text-4xl)", margin: "0 0 var(--space-4)" }}>What a Floortime session looks like</h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>
              To your child, it looks like play. Underneath, every moment is intentional.
            </p>
          </div>
          <div className="cp-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-4)" }}>
            {session.map((s) => <FtCard key={s.t} title={s.t}>{s.d}</FtCard>)}
          </div>
          <div style={{ marginTop: "var(--space-12)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-2xl)", color: "var(--ink-900)", margin: "0 0 var(--space-3)" }}>Who Floortime can help</h3>
            <p style={{ fontSize: "var(--text-base)", color: "var(--ink-600)", lineHeight: 1.6, margin: "0 0 var(--space-4)", maxWidth: 680 }}>
              Floortime can be used with children of every developmental profile. Families often come to us for support with:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
              {helps.map((x) => (
                <span key={x} style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--green-700)", background: "var(--green-100)", padding: "6px 14px", borderRadius: "var(--radius-pill)" }}>{x}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social-emotional growth (FEDC 4 & 5, described without jargon) */}
      <section id="social-emotional" style={{ background: "var(--lavender-50)" }}>
        <div className="cp-section-pad" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)" }}>
          <div style={{ maxWidth: 720, marginBottom: "var(--space-10)" }}>
            <CPEyebrow>Social-emotional learning</CPEyebrow>
            <h2 style={{ fontSize: "var(--text-4xl)", margin: "0 0 var(--space-4)" }}>Social and emotional growth, through play</h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>
              Social-emotional skills grow out of relationships. In Floortime, we support the building blocks
              that make things like friendships, sharing feelings, and working through frustration possible,
              in ways that feel natural to your child and never ask them to mask who they are.
            </p>
          </div>
          <div className="cp-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)" }}>
            {[
              { t: "Solving problems together", d: "Children learn to stay in long back-and-forth exchanges with a trusted adult to figure something out, like getting the lid off a container, finding a hidden toy, or building something together. Along the way, they practice reading facial expressions and gestures, showing what they want, and noticing how others respond. This shared problem solving builds flexibility, cooperation, and a growing sense of self." },
              { t: "Using ideas to share feelings", d: "Through pretend play and conversation, children begin to use ideas to show what they want, think, and feel. A stuffed animal might be scared of the dark, or a toy car might be upset it lost the race. Playing out feelings like these with a partner who joins in helps children understand emotions, put them into words or play, and imagine what someone else might be feeling." },
            ].map((s) => (
              <div key={s.t} style={{ background: "var(--white)", border: "1.5px solid var(--ink-200)", borderRadius: "var(--radius-xl)", padding: "var(--space-7)", boxShadow: "var(--shadow-sm)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--ink-900)", margin: "0 0 var(--space-3)" }}>{s.t}</h3>
                <p style={{ fontSize: "var(--text-base)", color: "var(--ink-600)", lineHeight: 1.65, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent coaching */}
      <section id="parent-coaching" style={{ background: "var(--green-600)", color: "#fff" }}>
        <div className="cp-section-pad cp-approach-grid" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "var(--space-16)", alignItems: "center" }}>
          <div>
            <p className="cp-eyebrow" style={{ color: "var(--green-200)", margin: "0 0 var(--space-3)" }}>Parent coaching</p>
            <h2 style={{ fontSize: "var(--text-4xl)", color: "#fff", margin: "0 0 var(--space-5)" }}>Floortime doesn't stop when the session ends</h2>
            <p style={{ fontSize: "var(--text-lg)", color: "rgba(255,255,255,.85)", lineHeight: 1.6, margin: 0 }}>
              You are the most important person in your child's world, so you're at the center of Floortime.
              We coach you during sessions and help you find simple, realistic ways to use Floortime in everyday
              moments like bath time, meals, car rides, and play.
            </p>
          </div>
          <div className="cp-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
            {[
              { t: "Coaching in the moment", d: "We model, then hand the play back to you, with gentle feedback as you go." },
              { t: "Ideas that fit your life", d: "No extra hour of homework. Floortime fits into routines you already have." },
              { t: "Understanding your child", d: "Learn to read your child's cues, sensory needs, and ways of connecting." },
              { t: "Support for the whole family", d: "Siblings and caregivers can join in, so connection grows at home." },
            ].map((s) => (
              <div key={s.t} style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "var(--radius-xl)", padding: "var(--space-6)" }}>
                <h3 style={{ color: "#fff", fontSize: "var(--text-lg)", margin: "0 0 var(--space-2)" }}>{s.t}</h3>
                <p style={{ color: "rgba(255,255,255,.8)", fontSize: "var(--text-sm)", lineHeight: 1.6, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider */}
      <section id="provider" style={{ background: "var(--surface-page)" }}>
        <div className="cp-section-pad cp-grid-2" style={{ maxWidth: "var(--container-lg)", margin: "0 auto", padding: "var(--space-24) var(--space-6)", display: "grid", gridTemplateColumns: "240px 1fr", gap: "var(--space-12)", alignItems: "center" }}>
          <div style={{ width: 220, height: 220, borderRadius: "50%", overflow: "hidden", boxShadow: "var(--shadow-sm)", margin: "0 auto" }}>
            <img src={(window.__resources && window.__resources.alyssaPhoto) || "/assets/img/alyssa-engel.jpg"} alt="Alyssa Engel, OTD, OTR/L, DIR-Proficient occupational therapist" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div>
            <CPEyebrow>Your Floortime provider</CPEyebrow>
            <h2 style={{ fontSize: "var(--text-3xl)", margin: "0 0 var(--space-4)" }}>Alyssa Engel, OTD, OTR/L, DIR-Proficient</h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--ink-600)", lineHeight: 1.6, margin: "0 0 var(--space-4)" }}>
              Alyssa is an occupational therapist certified at the DIR-Proficient level through ICDL, the home of
              DIRFloortime. She founded Cultivate Play in 2024 in response to a lack of neurodiversity-affirming
              providers in Middle Tennessee, and she brings Floortime into her work with every child.
            </p>
            <p style={{ fontSize: "var(--text-base)", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>
              She earned her Occupational Therapy Doctorate (OTD) from the University of Tennessee, Chattanooga.
            </p>
          </div>
        </div>
      </section>

      {/* Where */}
      <section id="where" style={{ background: "var(--lavender-50)" }}>
        <div className="cp-section-pad" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)" }}>
          <div style={{ maxWidth: 680, marginBottom: "var(--space-10)" }}>
            <CPEyebrow>Where we see families</CPEyebrow>
            <h2 style={{ fontSize: "var(--text-4xl)", margin: 0 }}>Floortime across Rutherford County</h2>
          </div>
          <div className="cp-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)" }}>
            {places.map((p) => <FtCard key={p.t} title={p.t} tint="var(--ink-900)">{p.d}</FtCard>)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="floortime-faq" style={{ background: "var(--surface-page)" }}>
        <div className="cp-section-pad" style={{ maxWidth: 820, margin: "0 auto", padding: "var(--space-24) var(--space-6)" }}>
          <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
            <CPEyebrow>Good to know</CPEyebrow>
            <h2 style={{ fontSize: "var(--text-4xl)", margin: 0 }}>DIR Floortime questions, answered</h2>
          </div>
          <div className="cp-accordion">
            {FT_FAQ.map((f) => (
              <details key={f.q} className="cp-accordion__item cp-ft-faq">
                <summary className="cp-accordion__head"><span>{f.q}</span>
                  <svg className="cp-accordion__chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="cp-accordion__panel">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

function FloortimeSite() {
  const [book, setBook] = React.useState(false);
  const open = () => setBook(true);
  return (
    <React.Fragment>
      <window.CPNav onBook={open} />
      <main><CPFloortimePage /></main>
      <window.CPFooter onBook={open} />
      <window.CPBooking open={book} onClose={() => setBook(false)} />
    </React.Fragment>
  );
}

Object.assign(window, { CPFloortimePage });
ReactDOM.createRoot(document.getElementById("root")).render(<FloortimeSite />);
