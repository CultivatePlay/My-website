// Cultivate Play — Training & Education page (/training/).
(function () {
  const { Hero, Head, Band, Card, Grid, Faq, render } = window.CPKit;
  const NS = window.CultivatePlayDesignSystem_d72bbd;

  const FAQ = [
    { q: "Who do you provide training for?", a: "Daycares, preschools, private schools, churches, camps, youth programs, and community small businesses. We train staff, teachers, and volunteers who work with children." },
    { q: "What topics can you cover?", a: "Sensory processing, neurodiversity, autism, ADHD, fine motor development, executive functioning, self-care skills, behavior, and inclusion. We can combine topics to fit what your team needs." },
    { q: "Can training be tailored to our group?", a: "Yes. We'll talk with you about your setting, the children you serve, and what your team is finding hard, and build the training around that." },
    { q: "How do we request a training?", a: "Call (615) 768-9170 or email info@cultivate-play.com with a little about your organization and what you're hoping to cover, and we'll follow up to plan it together." },
    { q: "Do you also provide therapy for children?", a: "Yes. Cultivate Play provides neurodiversity-affirming pediatric occupational therapy and DIR Floortime for children ages 0 to 18 across Rutherford County, plus telehealth anywhere in Tennessee." },
  ];

  const audiences = [
    { t: "Daycares & preschools", d: "Support for teachers working with young children's sensory needs, big feelings, and early skills." },
    { t: "Schools", d: "Practical strategies for including neurodivergent students in classrooms and school routines." },
    { t: "Churches & respite programs", d: "Training for volunteers so every child can feel welcome and supported." },
    { t: "Camps, youth programs & businesses", d: "Help for staff at camps, troops, and community businesses that serve kids and families." },
  ];

  const topics = [
    { t: "Sensory processing", d: "How children take in sensory input, and simple changes that help kids feel regulated." },
    { t: "Neurodiversity", d: "What neurodiversity-affirming support looks like, and why it matters for kids." },
    { t: "Autism", d: "Understanding autistic children's strengths, communication styles, and needs." },
    { t: "ADHD", d: "Supporting attention, movement, and regulation in group settings." },
    { t: "Fine motor development", d: "How hand skills develop, with play-based ways to build them." },
    { t: "Executive functioning", d: "Planning, transitions, and routines that help kids follow through." },
    { t: "Self-care skills", d: "Supporting independence with dressing, toileting, and mealtimes." },
    { t: "Behavior", d: "Understanding what's behind challenging behavior and responding with connection." },
    { t: "Inclusion", d: "Practical ways to make activities work for every child in the group." },
  ];

  const past = [
    "Local church respite program volunteers",
    "Local speech therapists and music therapists",
    "Girl Scout summer camp staff",
    "Girl Scout troop leaders and volunteers",
  ];

  function Page() {
    const { Button } = NS;
    return (
      <React.Fragment>
        <Hero crumb="Training & Education" chip="For schools, daycares, churches & organizations"
          title="Neurodiversity & Sensory Training for Schools and Organizations"
          credit="Led by Alyssa Engel, OTD, OTR/L, DIR-Proficient"
          primary={<Button variant="primary" size="lg" as="a" href="#contact">Request training</Button>}>
          Coaching and workshops from a pediatric occupational therapist for daycares, preschools, private
          schools, churches, and community organizations in and around Murfreesboro, TN.
        </Hero>

        <Band id="who" bg="var(--lavender-50)">
          <Head eyebrow="Who we train" title="Training for the people who support kids every day">
            We would love to collaborate with your team and help train your staff or volunteers to support
            every child, including neurodivergent kids.
          </Head>
          <Grid cols={4}>{audiences.map((a) => <Card key={a.t} title={a.t} tint="var(--ink-900)">{a.d}</Card>)}</Grid>
        </Band>

        <Band id="topics">
          <Head eyebrow="Topics" title="What we cover">
            Each training draws on everyday experience as a pediatric OT, with practical strategies your team can use the next day.
          </Head>
          <Grid cols={3}>{topics.map((t) => <Card key={t.t} title={t.t}>{t.d}</Card>)}</Grid>
        </Band>

        <section id="past-trainings" style={{ background: "var(--green-600)", color: "#fff" }}>
          <div className="cp-section-pad cp-approach-grid" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "var(--space-16)", alignItems: "center" }}>
            <div>
              <p className="cp-eyebrow" style={{ color: "var(--green-200)", margin: "0 0 var(--space-3)" }}>Experience</p>
              <h2 style={{ fontSize: "var(--text-4xl)", color: "#fff", margin: "0 0 var(--space-5)" }}>Trainings we've provided</h2>
              <p style={{ fontSize: "var(--text-lg)", color: "rgba(255,255,255,.85)", lineHeight: 1.6, margin: 0 }}>
                We've trained volunteers, staff, and fellow professionals in our local community.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {past.map((p) => (
                <div key={p} style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "var(--radius-lg)", padding: "var(--space-4) var(--space-5)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--green-200)", flex: "none" }}><path d="M20 6 9 17l-5-5"/></svg>
                  <span style={{ fontSize: "var(--text-base)", fontWeight: 600 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Faq title="Training questions, answered" items={FAQ} bg="var(--lavender-50)" />
      </React.Fragment>
    );
  }

  render(Page, FAQ);
})();
