// Cultivate Play — Occupational Therapy page (/occupational-therapy/).
(function () {
  const { Hero, Head, Band, Card, Grid, Chips, Faq, render, answers } = window.CPKit;
  const res = window.__resources || {};

  const FAQ = [
    { q: "Do you take insurance for occupational therapy?", a: answers.insurance },
    { q: "Do we need a referral from our doctor?", a: answers.start },
    { q: "Where do OT sessions happen?", a: "In your home or community across Rutherford County (Murfreesboro, Smyrna, La Vergne, and nearby), in our Murfreesboro office at 1810 Ward Drive, or by telehealth anywhere in Tennessee." },
    { q: "What ages do you work with?", a: "Children and teens, ages 0 to 18." },
    { q: "What happens at the first evaluation?", a: "The evaluation is a relaxed, child-led play session. We get to know your child, learn what's going well and what feels hard, and talk with you about your family's priorities. Then we set goals together." },
    { q: "Do you work with autistic children?", a: "Yes. We are a neurodiversity-affirming practice, and many of the children we see are autistic, ADHD, or both. We support things like sensory needs, regulation, daily routines, and play in ways that respect how your child's brain works." },
  ];

  const skills = [
    { t: "Sensory processing", d: "Helping your child take in and respond to sights, sounds, textures, and movement so everyday places feel more comfortable." },
    { t: "Fine motor & handwriting", d: "Building hand strength and control for writing, drawing, cutting, buttons, zippers, and utensils." },
    { t: "Self-care & daily routines", d: "Growing independence with dressing, toileting, brushing teeth, bathing, and getting out the door." },
    { t: "Feeding & mealtimes", d: "Gentle, pressure-free support for picky eating and making meals feel calmer for the whole family." },
    { t: "Emotional regulation", d: "Noticing big feelings and body signals, and building tools that help your child feel safe and in control." },
    { t: "Motor planning & coordination", d: "Coordinating the body for play, playground equipment, sports, balance, and everyday movement." },
    { t: "Attention & executive function", d: "Support with focus, transitions, planning, and multi-step routines at home and school." },
    { t: "Play & social connection", d: "Joining in, taking turns, and building friendships in ways that feel authentic to your child." },
  ];

  const steps = [
    { n: "1", t: "Free phone consult", d: "A no-pressure call to talk about your child and see whether we're the right fit." },
    { n: "2", t: "Play-based evaluation", d: "A relaxed, child-led session to understand your child's strengths and where support helps." },
    { n: "3", t: "A plan built on strengths", d: "Goals we set together, around your family's routines, priorities, and your child's interests." },
    { n: "4", t: "Grow together", d: "Ongoing sessions at home, in the community, in office, or by telehealth, with progress you can see." },
  ];

  const team = [
    { name: "Alyssa Engel", title: "OTD, OTR/L, DIR-Proficient", photo: res.alyssaPhoto, bio: "Alyssa founded Cultivate Play in 2024 in response to a lack of neurodiversity-affirming providers in Middle Tennessee. She earned her Occupational Therapy Doctorate from the University of Tennessee, Chattanooga, and specializes in strengths-based care for autistic, ADHD, and PDA kids. She is a certified DIR Floortime provider and an ADHDer herself." },
    { name: "Valerie Navis", title: "COTA/L", photo: res.valeriePhoto, bio: "Valerie is a certified occupational therapy assistant who believes the best therapy happens when children feel seen, heard, and excited to play. She uses a child-led approach to turn each child's interests into opportunities for growth." },
  ];

  function Page() {
    const { CPEyebrow } = window;
    return (
      <React.Fragment>
        <Hero crumb="Occupational Therapy" chip="Murfreesboro · Smyrna · La Vergne · Rutherford County"
          title="Pediatric Occupational Therapy in Murfreesboro, TN" credit="Neurodiversity-affirming OT for kids and teens ages 0 to 18">
          Child-led, strengths-based occupational therapy for kids across Rutherford County, in your home or
          community, at our Murfreesboro office, or by telehealth anywhere in Tennessee.
        </Hero>

        <Band id="what-is-ot" bg="var(--lavender-50)">
          <Head eyebrow="The basics" title="What is pediatric occupational therapy?">
            A child's "occupations" are the everyday things they need and want to do: playing, getting dressed,
            eating, sleeping, learning, and spending time with family and friends. Pediatric occupational therapy
            helps kids take part in those things in ways that work for their body and brain.
          </Head>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--ink-700)", lineHeight: 1.6, margin: 0, maxWidth: 720 }}>
            Our goal is to help each child feel comfortable, confident, and able to join in on their own terms,
            without masking who they are.
          </p>
        </Band>

        <Band id="how-ot-helps">
          <Head eyebrow="How we help" title="Areas we support">
            Every child is different, so therapy is built around your child's strengths and your family's goals.
            These are some of the areas families come to us for.
          </Head>
          <Grid cols={4}>{skills.map((s) => <Card key={s.t} title={s.t}>{s.d}</Card>)}</Grid>
          <div style={{ marginTop: "var(--space-12)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-2xl)", color: "var(--ink-900)", margin: "0 0 var(--space-4)" }}>Who we work with</h3>
            <Chips items={["Autism", "ADHD", "PDA (Persistent Drive for Autonomy)", "Developmental delays", "Down syndrome", "Sensory processing disorder", "Developmental coordination disorder (dyspraxia)"]} />
          </div>
        </Band>

        <section id="getting-started" style={{ background: "var(--green-600)", color: "#fff" }}>
          <div className="cp-section-pad cp-approach-grid" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "var(--space-16)", alignItems: "center" }}>
            <div>
              <p className="cp-eyebrow" style={{ color: "var(--green-200)", margin: "0 0 var(--space-3)" }}>Getting started</p>
              <h2 style={{ fontSize: "var(--text-4xl)", color: "#fff", margin: "0 0 var(--space-5)" }}>From first call to real progress</h2>
              <p style={{ fontSize: "var(--text-lg)", color: "rgba(255,255,255,.85)", lineHeight: 1.6, margin: 0 }}>
                Here's how strengths-based, neurodiversity-affirming care turns into a plan your family can actually live with.
              </p>
            </div>
            <div className="cp-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
              {steps.map((s) => (
                <div key={s.n} style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "var(--radius-xl)", padding: "var(--space-6)" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-2xl)", color: "var(--green-200)", marginBottom: "var(--space-2)" }}>Step {s.n}</div>
                  <h3 style={{ color: "#fff", fontSize: "var(--text-lg)", margin: "0 0 var(--space-2)" }}>{s.t}</h3>
                  <p style={{ color: "rgba(255,255,255,.8)", fontSize: "var(--text-sm)", lineHeight: 1.6, margin: 0 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Band id="our-approach">
          <Head eyebrow="Our approach" title="Play-based, child-led, and affirming" />
          <Grid cols={2}>
            <Card title="Child-led and strengths-based">We follow your child's lead and start with what they can do, never from a list of deficits. When play feels like theirs, real growth follows.</Card>
            <Card title="DIR Floortime in every session">
              We weave DIR Floortime, a relationship-based approach, into therapy with every child and coach parents to use it at home.{" "}
              <a href="/floortime/" style={{ fontWeight: 700, color: "var(--green-700)" }}>Learn about DIR Floortime</a>
            </Card>
          </Grid>
        </Band>

        <Band id="ot-team" bg="var(--lavender-50)">
          <Head eyebrow="Your therapy team" title="Meet your occupational therapy team" />
          <div className="cp-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)" }}>
            {team.map((p) => (
              <div key={p.name} style={{ display: "flex", gap: "var(--space-5)", alignItems: "flex-start", background: "var(--white)", border: "1.5px solid var(--ink-200)", borderRadius: "var(--radius-xl)", padding: "var(--space-6)" }}>
                <img src={p.photo} alt={p.name + ", " + p.title} style={{ width: 96, height: 96, borderRadius: "50%", objectFit: "cover", flex: "none" }} />
                <div style={{ minWidth: 0 }}>
                  <h3 style={{ fontSize: "var(--text-xl)", margin: "0 0 2px" }}>{p.name}</h3>
                  <p style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--ink-500)", margin: "0 0 var(--space-3)" }}>{p.title}</p>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Band>

        <Band id="where">
          <Head eyebrow="Where we see families" title="Occupational therapy across Rutherford County" />
          <Grid cols={3}>
            <Card title="In your home or community" tint="var(--ink-900)">Murfreesboro, Smyrna, La Vergne, and across Rutherford County, wherever your child is most comfortable.</Card>
            <Card title="Our Murfreesboro office" tint="var(--ink-900)">1810 Ward Drive, Ste 101, Murfreesboro, TN 37129.</Card>
            <Card title="Telehealth" tint="var(--ink-900)">Occupational therapy and parent coaching by video, anywhere in Tennessee.</Card>
          </Grid>
        </Band>

        <Faq title="Occupational therapy questions, answered" items={FAQ} bg="var(--lavender-50)" />
      </React.Fragment>
    );
  }

  render(Page, FAQ);
})();
