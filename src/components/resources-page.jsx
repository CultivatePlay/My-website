// Cultivate Play — Recommended Resources page (/resources/).
// To add an item, add a line to BOOKS, PODCASTS, ACCOUNTS or the toys section, then rebuild.
(function () {
  const { Hero, Head, render } = window.CPKit;
  const NS = window.CultivatePlayDesignSystem_d72bbd;

  const STOREFRONT = "https://amzn.to/47WofbK";

  const BOOKS = [
    { t: "Beyond Behaviors", sub: "Using Brain Science and Compassion to Understand and Solve Children's Behavioral Challenges", by: "Mona Delahooke, PhD", url: "https://amzn.to/48sEihv", fav: true,
      d: "Explains the brain science behind children's behavior in a way that's easy to follow, and offers a compassionate, relationship-based approach that builds resilience and secure connection." },
    { t: "Uniquely Human", sub: "A Different Way of Seeing Autism", by: "Barry M. Prizant, PhD", url: "https://amzn.to/4oeUJD1",
      d: "Reframes autism through a strengths-based, neurodiversity-affirming lens, helping families understand the reasons behind their child's behaviors." },
    { t: "Unmasking Autism", sub: "Discovering the New Faces of Neurodiversity", by: "Devon Price, PhD", url: "https://amzn.to/44dGjf2",
      d: "For adults learning about their child or themselves, and for older teens. Covers masking, autistic strengths, common stereotypes, building support, and self-discovery." },
    { t: "The Way of Play", sub: "Using Little Moments of Big Connection to Raise Calm and Confident Kids", by: "Tina Payne Bryson & Georgie Wisen-Vincent", url: "https://amzn.to/44rT9q3",
      d: "Shows how play supports development, with practical ways for families to play together that build emotional regulation and problem solving." },
    { t: "The Whole-Brain Child", sub: "12 Revolutionary Strategies to Nurture Your Child's Developing Mind", by: "Daniel J. Siegel & Tina Payne Bryson", url: "https://amzn.to/3X8x1x9",
      d: "Explains how emotions and the developing brain work, including how stress can take over the thinking brain, with everyday strategies to help. All of Dan Siegel's books are worth reading." },
    { t: "Smart but Scattered", sub: "The Revolutionary \"Executive Skills\" Approach to Helping Kids Reach Their Potential", by: "Peg Dawson & Richard Guare", url: "https://amzn.to/3XH6dEf",
      d: "From two ADHD and executive functioning experts, with strategies that build on strengths while supporting harder areas. A teen and adult edition is also available." },
    { t: "Collaborative Approaches to Learning for Pupils with PDA", sub: "Strategies for Education Professionals", by: "Ruth Fidler & Phil Christie", url: "https://amzn.to/4omxWFq",
      d: "Helps parents and educators support children with PDA (Persistent Drive for Autonomy) at school and in learning." },
  ];

  const PODCASTS = [
    { t: "We Choose Play", by: "Affect Autism", url: "https://open.spotify.com/show/3uGJ4vweKzqMc7hIUitqTe" },
    { t: "Two Sides of the Spectrum", url: "https://open.spotify.com/show/2y638lqpHxBuXPvd7CikLy" },
    { t: "Uniquely Human: The Podcast", url: "https://open.spotify.com/show/11CVbU16dVfuhmMrm0TQBm" },
  ];

  const ACCOUNTS = [
    { t: "No Pressure PDA", url: "https://www.facebook.com/nopressurepda" },
    { t: "Dr Naomi Fisher", url: "https://www.facebook.com/drnaomifisher" },
    { t: "The Child Led SLP", url: "https://www.facebook.com/thechildledslp" },
    { t: "Seeds of Learning, LLC", url: "https://www.facebook.com/profile.php?id=100032453423734" },
    { t: "Autism Level UP", url: "https://www.facebook.com/AutismLevelUP" },
    { t: "That Spicy Autistic Femme", url: "https://www.facebook.com/profile.php?id=100086155522669" },
    { t: "Kaelynn's Autistic Angle", url: "https://www.facebook.com/AutisticAngle" },
    { t: "PlaySpark", url: "https://www.facebook.com/PlaySparkTherapy" },
    { t: "Kristy Forbes", url: "https://www.facebook.com/inTunePathways" },
    { t: "Fidgets and Fries", url: "https://www.facebook.com/fidgetsandfries" },
    { t: "NeuroWild", url: "https://www.facebook.com/profile.php?id=100087870753308" },
    { t: "Robyn Gobbel", url: "https://www.facebook.com/RobynGobbelMSW" },
    { t: "The Occuplaytional Therapist", url: "https://www.facebook.com/occuplaytional" },
    { t: "Learn Play Thrive", url: "https://www.facebook.com/megproctorOT" },
    { t: "Rachel Dorsey, Autistic SLP", url: "https://www.facebook.com/dorseyslp" },
    { t: "Kelly Mahler", url: "https://www.facebook.com/kellymahler" },
  ];

  const ext = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}><path d="M7 17 17 7M8 7h9v9"/></svg>
  );
  const linkStyle = { display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 700, fontSize: "var(--text-sm)", color: "var(--green-700)" };

  function Book({ b }) {
    return (
      <article className={b.fav ? "cp-span-2" : undefined} style={{ display: "flex", flexDirection: "column", background: "var(--white)", border: "1.5px solid var(--ink-200)", borderRadius: "var(--radius-xl)", padding: "var(--space-6)", boxShadow: "var(--shadow-xs)", minWidth: 0 }}>
        {b.fav && <span style={{ alignSelf: "flex-start", fontSize: "var(--text-xs)", fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--lavender-700)", background: "var(--lavender-100)", padding: "4px 10px", borderRadius: "var(--radius-pill)", marginBottom: "var(--space-3)" }}>Alyssa's top pick</span>}
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--ink-900)", margin: 0, lineHeight: 1.25 }}>{b.t}</h3>
        <p style={{ fontSize: "var(--text-sm)", fontStyle: "italic", color: "var(--ink-500)", margin: "4px 0 0", lineHeight: 1.4 }}>{b.sub}</p>
        <p style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--ink-700)", margin: "var(--space-2) 0 var(--space-3)" }}>{b.by}</p>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--ink-600)", lineHeight: 1.6, margin: "0 0 var(--space-4)", flex: 1 }}>{b.d}</p>
        <a href={b.url} target="_blank" rel="sponsored noopener" style={linkStyle}>View on Amazon {ext}</a>
      </article>
    );
  }

  function LinkTile({ item, rel }) {
    return (
      <a href={item.url} target="_blank" rel={rel || "noopener"} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)", background: "var(--white)", border: "1.5px solid var(--ink-200)", borderRadius: "var(--radius-lg)", padding: "var(--space-4) var(--space-5)", color: "var(--ink-800)", minWidth: 0 }}>
        <span style={{ minWidth: 0 }}>
          <span style={{ display: "block", fontWeight: 700, fontSize: "var(--text-base)" }}>{item.t}</span>
          {item.by && <span style={{ display: "block", fontSize: "var(--text-sm)", color: "var(--ink-500)" }}>{item.by}</span>}
        </span>
        <span style={{ color: "var(--green-600)" }}>{ext}</span>
      </a>
    );
  }

  function Page() {
    const { Button } = NS;
    return (
      <React.Fragment>
        <Hero crumb="Resources" chip="Books · Podcasts · Social media · Toys"
          title="Recommended Resources for Families"
          primary={<Button variant="primary" size="lg" as="a" href="#books">Browse resources</Button>}>
          Neurodiversity-affirming books, podcasts, and voices we love, plus toys and sensory tools we use and
          recommend. A good place to start learning alongside your child.
        </Hero>

        <nav aria-label="Resource sections" style={{ background: "var(--cream)", borderBottom: "1px solid var(--ink-100)" }}>
          <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "0 var(--space-6) var(--space-6)", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "var(--space-3)" }}>
            {[["#books", "Books"], ["#podcasts", "Podcasts"], ["#social", "Social media"], ["#toys", "Toys & sensory tools"]].map(([h, l]) => (
              <a key={h} href={h} style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--green-700)", background: "var(--white)", border: "1.5px solid var(--green-200)", padding: "8px 16px", borderRadius: "var(--radius-pill)" }}>{l}</a>
            ))}
          </div>
        </nav>

        <section id="books" style={{ background: "var(--lavender-50)", scrollMarginTop: 90 }}>
          <div className="cp-section-pad" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)" }}>
            <Head eyebrow="Books & audiobooks" title="Books we recommend">
              Our go-to reads for understanding your child, from brain science and regulation to autism,
              ADHD, and PDA. Most are also available as audiobooks.
            </Head>
            <div className="cp-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-5)" }}>
              {BOOKS.map((b) => <Book key={b.t} b={b} />)}
            </div>
          </div>
        </section>

        <section id="podcasts" style={{ background: "var(--surface-page)", scrollMarginTop: 90 }}>
          <div className="cp-section-pad" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)" }}>
            <Head eyebrow="Podcasts" title="Podcasts to listen to">
              Linked on Spotify, and also available on Apple Podcasts and most other podcast apps.
            </Head>
            <div className="cp-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-4)" }}>
              {PODCASTS.map((p) => <LinkTile key={p.t} item={p} />)}
            </div>
          </div>
        </section>

        <section id="social" style={{ background: "var(--lavender-50)", scrollMarginTop: 90 }}>
          <div className="cp-section-pad" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)" }}>
            <Head eyebrow="Social media" title="Voices worth following">
              A mix of neurodivergent self-advocates and professionals who work with neurodivergent people.
              Links go to Facebook, and most are also on Instagram and other platforms.
            </Head>
            <div className="cp-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-3)" }}>
              {ACCOUNTS.map((a) => <LinkTile key={a.t} item={a} />)}
            </div>
          </div>
        </section>

        <section id="toys" style={{ background: "var(--green-600)", color: "#fff", scrollMarginTop: 90 }}>
          <div className="cp-section-pad cp-approach-grid" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "var(--space-12)", alignItems: "center" }}>
            <div>
              <p className="cp-eyebrow" style={{ color: "var(--green-200)", margin: "0 0 var(--space-3)" }}>Toys, games & sensory tools</p>
              <h2 style={{ fontSize: "var(--text-4xl)", color: "#fff", margin: "0 0 var(--space-5)" }}>Our favorite toys and tools</h2>
              <p style={{ fontSize: "var(--text-lg)", color: "rgba(255,255,255,.85)", lineHeight: 1.6, margin: 0 }}>
                We keep our favorite toys, games, and sensory tools together in one Amazon storefront. Many of
                them are also easy to find in stores, thrift shops, or on Facebook Marketplace, so you don't
                need to buy new.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--space-4)" }}>
              <Button variant="secondary" size="lg" as="a" href={STOREFRONT} target="_blank" rel="sponsored noopener">Shop our Amazon storefront</Button>
            </div>
          </div>
        </section>

        <section id="disclosure" style={{ background: "var(--surface-page)" }}>
          <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-10) var(--space-6)" }}>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--ink-500)", lineHeight: 1.6, margin: 0, maxWidth: 760 }}>
            <strong style={{ color: "var(--ink-700)" }}>A note on links:</strong> As an Amazon Associate, Cultivate Play earns a small
            commission from qualifying purchases made through the Amazon links on this page, at no extra cost to you.
            We only recommend things we genuinely use and love. These resources are for general learning and aren't a
            substitute for individualized therapy.
          </p>
          </div>
        </section>
      </React.Fragment>
    );
  }

  render(Page, null);
})();
