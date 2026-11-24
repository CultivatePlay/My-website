// Cultivate Play — Join our team page (/join-our-team/).
(function () {
  const { Head, Band, Card, Grid, render } = window.CPKit;
  const NS = window.CultivatePlayDesignSystem_d72bbd;
  const Noop = () => null;
  const APPLY = "mailto:alyssaengel@cultivate-play.com?subject=Pediatric%20OT%20position";
  const label = { fontSize: "var(--text-xs)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase" };

  const values = [
    { t: "Neurodiversity-affirming", d: "We build on each child's strengths and honor how they experience the world, rather than trying to make them look \"typical.\"" },
    { t: "Child-led and play-based", d: "Sessions follow the child's interests, with DIR Floortime woven into everything we do." },
    { t: "Real-life settings", d: "Therapy happens in homes, preschools, and the community, where the skills matter most, plus our Murfreesboro office." },
  ];

  const glance = [
    { t: "Schedule", d: "Start as soon as you're ready. Ramp up your caseload at your own pace, help cover a maternity leave along the way, and grow to full time if you'd like." },
    { t: "Pay", d: "Hourly, with paid documentation and admin time, paid cancellations, and mileage reimbursement" },
    { t: "Where", d: "Homes, preschools, the community, and our Murfreesboro office, mostly within Rutherford County" },
    { t: "DIR Floortime", d: "Training and certification required. Not certified yet? We'll pay for it." },
  ];

  const quals = [
    "A valid Tennessee occupational therapy license, with a focus on pediatrics",
    "DIR Floortime certification, or a willingness to become certified after you're hired",
    "Strong knowledge of neurodiversity, child development and milestones, anatomy, physiology, neuroscience, and medical terminology",
    "Experience supporting autistic and disabled children from a strengths-based approach",
    "Confidence with affirming emotional regulation, interoception, and sensory processing interventions",
    "Strong clinical reasoning, and comfort providing therapy in a family's home",
    "Excellent communication skills for partnering with families and multidisciplinary teams",
    "1+ years of experience (preferred, not required)",
  ];

  const benefits = [
    { t: "Paid time off", d: "2 weeks a year to use anytime, plus about a week of paid days off between Christmas Eve and New Year's." },
    { t: "Paid holidays", d: "Time to rest and be with the people you love." },
    { t: "Health coverage", d: "Medical, dental, vision, and short-term disability insurance." },
    { t: "Professional liability insurance", d: "Covered by the practice." },
    { t: "DIR Floortime training", d: "Paid training and certification, or a CEU stipend if you're already certified." },
    { t: "Mentorship", d: "Ongoing support and guidance from an experienced, DIR-Proficient OT." },
  ];

  const stats = [["ASAP", "Start date"], ["Flexible", "Set your own hours"], ["DIR", "Paid Floortime training"]];

  function JoinHero() {
    const { Button, LeafSprig = Noop, Flower = Noop, Blob = Noop } = NS;
    return (
      <section id="top" style={{ background: "var(--cream)", position: "relative", overflow: "hidden" }}>
        <div className="cp-decor-desktop" style={{ position: "absolute", top: "-14%", right: "-8%", opacity: 0.35, pointerEvents: "none" }}><Blob color="var(--mint-200)" size={360} /></div>
        <div className="cp-decor-desktop" style={{ position: "absolute", top: "-10%", left: "-10%", opacity: 0.3, pointerEvents: "none" }}><Blob color="var(--lavender-200)" size={300} /></div>
        <div className="cp-decor-desktop" style={{ position: "absolute", bottom: 40, left: "5%", pointerEvents: "none" }}><LeafSprig color="var(--green-400)" size={50} /></div>
        <div className="cp-decor-desktop" style={{ position: "absolute", bottom: 40, right: "6%", pointerEvents: "none" }}><Flower color="var(--lavender-400)" size={38} /></div>
        <div className="cp-hero-pad" style={{ maxWidth: 820, margin: "0 auto", padding: "var(--space-20) var(--space-6)", textAlign: "center", position: "relative" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "var(--text-sm)", color: "var(--ink-500)", marginBottom: "var(--space-5)" }}>
            <a href="/" style={{ color: "var(--green-700)", fontWeight: 600 }}>Home</a> <span aria-hidden="true">/</span> Join our team
          </nav>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--lavender-100)", color: "var(--lavender-700)", fontWeight: 700, fontSize: "var(--text-sm)", padding: "7px 14px", borderRadius: "var(--radius-pill)", marginBottom: "var(--space-5)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 0 1 4 13c0-5 3-9 9-11 0 6-1 9-2 11"/><path d="M11 20c0-4 2-8 6-10"/></svg>
            Now hiring · Pediatric occupational therapist
          </span>
          <h1 style={{ fontSize: "var(--text-5xl)", lineHeight: 1.08, margin: "0 0 var(--space-3)" }}>Grow with us at Cultivate Play</h1>
          <p className="cp-hero-sub" style={{ fontSize: "var(--text-lg)", color: "var(--ink-600)", maxWidth: 600, margin: "var(--space-6) auto var(--space-8)", lineHeight: 1.6 }}>
            We're looking for a neurodiversity-affirming pediatric occupational therapist who loves child-led,
            play-based therapy and wants to do it in the places kids actually live, learn, and play.
          </p>
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", justifyContent: "center" }}>
            <Button variant="primary" size="lg" as="a" href={APPLY}>Email your resume</Button>
            <Button variant="outline" size="lg" as="a" href="#role">See the role</Button>
          </div>
          <div className="cp-hero-stats" style={{ display: "flex", gap: "var(--space-8)", marginTop: "var(--space-10)", justifyContent: "center", flexWrap: "wrap" }}>
            {stats.map(([v, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-3xl)", color: "var(--green-600)", lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--ink-600)", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function Page() {
    const { Button } = NS;
    const pad = { maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)" };
    return (
      <React.Fragment>
        <JoinHero />

        <Band id="about" bg="var(--lavender-50)">
          <Head eyebrow="Who we are" title="A small practice with a big heart for neurodivergent kids">
            Cultivate Play, PLLC provides pediatric occupational therapy in children's natural environments: their
            homes, preschools, and community, as well as our office in Murfreesboro, TN. Neurodiversity-affirming,
            play-based care is what we do best.
          </Head>
          <Grid cols={3}>{values.map((v) => <Card key={v.t} title={v.t}>{v.d}</Card>)}</Grid>
        </Band>

        <section id="role" style={{ background: "var(--surface-page)", scrollMarginTop: 90 }}>
          <div className="cp-section-pad" style={pad}>
            <div className="cp-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-16)", alignItems: "start" }}>
              <div>
                <p className="cp-eyebrow" style={{ margin: "0 0 var(--space-3)" }}>The role</p>
                <h2 style={{ fontSize: "var(--text-4xl)", margin: "0 0 var(--space-4)" }}>Pediatric Occupational Therapist</h2>
                <p style={{ fontSize: "var(--text-lg)", color: "var(--ink-600)", lineHeight: 1.6, margin: "0 0 var(--space-5)" }}>
                  You'll provide individualized, child-led therapy for kids with a wide range of needs, including autism,
                  ADHD, and other disabilities. You'll design and carry out care plans built around each child's strengths,
                  and partner closely with families, caregivers, and other professionals to support meaningful
                  participation in everyday life.
                </p>
                <p style={{ fontSize: "var(--text-lg)", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>
                  We're hiring <strong style={{ color: "var(--ink-800)" }}>now</strong>, and you can start as soon as
                  you're ready. You'll ramp up your caseload at your own pace, part time or up to full time, and help cover
                  a maternity leave along the way. We'd love for the right person to stay on long term with their own
                  caseload, full time or part time.
                </p>
              </div>
              <div>
                <div style={{ ...label, color: "var(--ink-400)", marginBottom: "var(--space-4)" }}>At a glance</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                  {glance.map((g) => (
                    <div key={g.t} style={{ background: "var(--white)", border: "1.5px solid var(--ink-200)", borderRadius: "var(--radius-lg)", padding: "var(--space-4) var(--space-5)" }}>
                      <div style={{ ...label, color: "var(--green-700)", marginBottom: 4 }}>{g.t}</div>
                      <div style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--ink-800)", lineHeight: 1.5 }}>{g.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Band id="qualifications" bg="var(--lavender-50)">
          <Head eyebrow="What we're looking for" title="You might be a great fit if you have…">
            More than anything, we're looking for someone who genuinely believes in strengths-based, affirming care.
            One or more years of experience is preferred.
          </Head>
          <div className="cp-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
            {quals.map((q) => (
              <div key={q} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", background: "var(--white)", border: "1.5px solid var(--ink-200)", borderRadius: "var(--radius-lg)", padding: "var(--space-4) var(--space-5)" }}>
                <span style={{ flex: "none", width: 30, height: 30, borderRadius: "50%", background: "var(--mint-100)", color: "var(--green-600)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                </span>
                <span style={{ fontSize: "var(--text-base)", color: "var(--ink-800)", lineHeight: 1.5 }}>{q}</span>
              </div>
            ))}
          </div>
        </Band>

        <section id="benefits" style={{ background: "var(--green-600)", color: "#fff" }}>
          <div className="cp-section-pad cp-approach-grid" style={{ ...pad, display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "var(--space-16)", alignItems: "center" }}>
            <div>
              <p className="cp-eyebrow" style={{ color: "var(--green-200)", margin: "0 0 var(--space-3)" }}>Benefits</p>
              <h2 style={{ fontSize: "var(--text-4xl)", color: "#fff", margin: "0 0 var(--space-5)" }}>We take care of the people who take care of kids</h2>
              <p style={{ fontSize: "var(--text-lg)", color: "rgba(255,255,255,.85)", lineHeight: 1.6, margin: "0 0 var(--space-4)" }}>
                Every therapist gets paid documentation and admin time, paid cancellations, and mileage reimbursement from day one.
              </p>
              <div style={{ background: "var(--white)", color: "var(--ink-800)", borderRadius: "var(--radius-xl)", padding: "var(--space-6)", margin: "0 0 var(--space-5)", boxShadow: "var(--shadow-md)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-2)" }}>
                  <span style={{ flex: "none", width: 40, height: 40, borderRadius: "50%", background: "var(--mint-100)", color: "var(--green-600)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                  </span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--green-700)", margin: 0 }}>A truly flexible schedule</h3>
                </div>
                <p style={{ fontSize: "var(--text-base)", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>
                  Set your own hours, whatever works best for you and your life. The one requirement: offer after-school
                  appointments on at least 2 days a week.
                </p>
              </div>
              <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,.75)", lineHeight: 1.6, margin: 0 }}>
                The full benefits package starts once you reach full time, at 25 or more scheduled treatment sessions.
              </p>
            </div>
            <div className="cp-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
              {benefits.map((b) => (
                <div key={b.t} style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "var(--radius-xl)", padding: "var(--space-5)" }}>
                  <h3 style={{ color: "#fff", fontSize: "var(--text-lg)", margin: "0 0 var(--space-2)" }}>{b.t}</h3>
                  <p style={{ color: "rgba(255,255,255,.8)", fontSize: "var(--text-sm)", lineHeight: 1.6, margin: 0 }}>{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="apply" style={{ background: "var(--cream)", scrollMarginTop: 90 }}>
          <div style={{ maxWidth: "var(--container-lg)", margin: "0 auto", padding: "var(--space-24) var(--space-6)" }}>
            <div className="cp-cta-pad" style={{ background: "var(--green-600)", borderRadius: "var(--radius-2xl)", padding: "var(--space-16)", textAlign: "center", color: "#fff", boxShadow: "var(--shadow-lg)" }}>
              <h2 style={{ color: "#fff", fontSize: "var(--text-4xl)", margin: "0 0 var(--space-4)" }}>Ready to grow with us?</h2>
              <p style={{ color: "rgba(255,255,255,.85)", fontSize: "var(--text-lg)", maxWidth: 540, margin: "0 auto var(--space-8)", lineHeight: 1.6 }}>
                Email your resume to Alyssa Engel at{" "}
                <a href={APPLY} style={{ color: "#fff", fontWeight: 700, textDecoration: "underline", overflowWrap: "anywhere" }}>alyssaengel@cultivate-play.com</a>.
                {" "}We can't wait to meet you.
              </p>
              <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center", flexWrap: "wrap" }}>
                <Button variant="secondary" size="lg" as="a" href={APPLY}>Email your resume</Button>
                <Button variant="ghost" size="lg" as="a" href="tel:16157689170" style={{ color: "#fff", border: "1.5px solid rgba(255,255,255,.5)" }}>Call (615) 768-9170</Button>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }

  render(Page, null, { footerOnly: true });
})();
