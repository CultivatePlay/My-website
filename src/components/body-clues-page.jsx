// Cultivate Play — Body Clues "coming soon" page (/body-clues/).
// Screenshots live in assets/img/body-clues-*.jpg. Update FAQ answers here when the app launches.
(function () {
  const { Hero, Head, Band, Card, Grid, Faq, render } = window.CPKit;
  const NS = window.CultivatePlayDesignSystem_d72bbd;

  const NOTIFY = "mailto:info@cultivate-play.com?subject=Tell%20me%20when%20Body%20Clues%20launches";

  // The app's own tagline, shown as its three steps.
  const STEPS = [
    { word: "Notice it.", color: "var(--green-700)", img: "/assets/img/body-clues-notice.jpg",
      alt: "Body Clues check-in screen asking where you notice something, with the tummy and heart chosen on a grid of body pictures",
      text: "Tap the parts of the body that are sending a clue, then pick what it feels like: butterflies, a fast heart, wiggly legs, or something in your own words." },
    { word: "Wonder about it.", color: "#C4511F", img: "/assets/img/body-clues-wonder.jpg",
      alt: "Body Clues screen suggesting that butterflies and a fast heart together have meant worried three times before",
      text: "Body Clues remembers past check-ins and gently suggests what a clue has meant before. \"Not sure yet\" is always a great answer." },
    { word: "Find what helps.", color: "var(--lavender-700)", img: "/assets/img/body-clues-helps.jpg",
      alt: "Body Clues toolkit card listing what helps for each body clue, such as move my body and squeeze or hug",
      text: "Try a strategy and say whether it helped. Over time it builds a personal \"What helps my body\" toolkit to share with family and teachers." },
  ];

  const FEATURES = [
    ["Pictures or words", "Picture tiles and simple words for kids, or clear everyday wording for teens and adults. Every screen can be read aloud."],
    ["Patterns over time", "See which feelings and needs each body clue has been linked to, which clues show up together, and when and where they tend to happen."],
    ["A summary for the care team", "Make a PDF of check-in patterns to share with a therapist, teacher or doctor, only when your family chooses."],
    ["Profiles for the whole family", "Siblings and grown-ups each get their own check-ins and settings. A passcode lock keeps a child's settings the way you set them."],
    ["Motivation without pressure", "Badges for exploring, discoveries and a friendly buddy. No streaks, nothing taken away, and no rewards for \"calm\" answers."],
    ["Made to include everyone", "A customizable body picture with different hair styles and mobility aids, and body clues that glow without assuming a skin color."],
  ];

  const FAQ = [
    { q: "When will Body Clues be available?",
      a: "We're finishing Body Clues now. Email info@cultivate-play.com and we'll let you know as soon as it's ready." },
    { q: "What is interoception?",
      a: "Interoception is the sense that tells us what's happening inside our bodies, like hunger, a racing heart, needing the bathroom or feeling tired. Noticing these signals helps us understand our emotions and needs and figure out what helps." },
    { q: "Who is Body Clues for?",
      a: "Kids, teens and adults, including neurodivergent people who are still learning to read their body's signals. Parents, therapists and teachers can set it up for someone they support, or use it alongside them." },
    { q: "Where is my family's information kept?",
      a: "Check-ins are saved on your family's own device, not on our servers. You can save a backup file to move them to another phone or tablet, and a care team summary is only shared when you choose to send it." },
    { q: "Does Body Clues replace therapy?",
      a: "No. Body Clues is a tool for noticing and learning, not a diagnosis or a substitute for therapy. Many families find it helpful to bring their patterns to sessions with their occupational therapist, speech therapist or counselor." },
  ];

  function Phone({ src, alt }) {
    return (
      <div style={{ width: "100%", maxWidth: 260, margin: "0 auto", background: "#1B1918", padding: 8, borderRadius: 40, boxShadow: "0 22px 40px -22px rgba(20,48,31,.55)" }}>
        <img src={src} alt={alt} width="390" height="844" loading="lazy" style={{ display: "block", width: "100%", height: "auto", borderRadius: 32 }} />
      </div>
    );
  }

  function Page() {
    const { Button } = NS;
    return (
      <React.Fragment>
        <Hero crumb="Body Clues" chip="Coming soon · An interoception app by Cultivate Play Studio"
          title="Body Clues"
          noCall
          primary={<Button variant="primary" size="lg" as="a" href={NOTIFY}>Email me when it launches</Button>}>
          A personalized way to notice what your body is telling you, figure out what it might mean, and keep
          track of what helps. Designed by the occupational therapists at Cultivate Play for kids, teens and adults.
        </Hero>

        <section id="how" style={{ background: "#D7E8DC", scrollMarginTop: 90 }}>
          <div className="cp-section-pad" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)" }}>
            <Head eyebrow="How it works" title="Notice it. Wonder about it. Find what helps." center>
              Each check-in takes about a minute. Curiosity comes first: there are no right answers and nothing to keep up with.
            </Head>
            <div className="cp-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-10)" }}>
              {STEPS.map((s) => (
                <figure key={s.word} style={{ margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-5)", minWidth: 0 }}>
                  <Phone src={s.img} alt={s.alt} />
                  <figcaption>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-2xl)", color: s.color, margin: "0 0 var(--space-2)", textAlign: "center" }}>{s.word}</h3>
                    <p style={{ fontSize: "var(--text-base)", color: "var(--ink-700)", lineHeight: 1.6, margin: 0, textAlign: "center" }}>{s.text}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <Band id="features">
          <Head eyebrow="What's inside" title="Built for real families">
            Body Clues grows with each person, from a first check-in to a toolkit they can share.
          </Head>
          <Grid cols={3}>
            {FEATURES.map(([t, d]) => <Card key={t} title={t}>{d}</Card>)}
          </Grid>
        </Band>

        <Band id="approach" bg="var(--lavender-50)" narrow>
          <Head eyebrow="Our approach" title="Curiosity, not compliance">
            Body Clues treats every sensation as information worth exploring, never as a problem to fix or a behavior to
            correct. It's neurodiversity-affirming, follows each person's lead, and celebrates noticing, including
            "not sure yet" and "it's okay just as it is."
          </Head>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
            <Button variant="primary" size="lg" as="a" href={NOTIFY}>Email me when it launches</Button>
            <Button variant="outline" size="lg" as="a" href="/occupational-therapy/">Learn about our OT services</Button>
          </div>
        </Band>

        <Faq title="Questions about Body Clues" items={FAQ} />
      </React.Fragment>
    );
  }

  render(Page, FAQ);
})();
