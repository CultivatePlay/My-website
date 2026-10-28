// Cultivate Play — team + values. Exposes window.CPTeam, window.CPTestimonials.
const NSt = window.CultivatePlayDesignSystem_d72bbd;

function CPTeam() {
  const { Button } = NSt;
  const { CPEyebrow } = window;
  const people = [
    {
      name: "Alyssa Engel",
      title: "OTD, OTR/L, DIR-Proficient",
      role: "Owner & Occupational Therapist · DIR-Proficient",
      tint: "mint",
      photo: (window.__resources && window.__resources.alyssaPhoto) || "assets/alyssa-engel.jpg",
      bio: "Alyssa started Cultivate Play, PLLC in 2024 in response to a lack of neurodiversity-affirming providers in the Middle Tennessee area. She earned a B.S. in Exercise Science and her Occupational Therapy Doctorate (OTD) from the University of Tennessee, Chattanooga. She has experience across a variety of pediatric populations and specializes in neurodiversity-affirming, strengths-based care, including Autism, ADHD, and PDA (Persistent Drive for Autonomy). Alyssa is also neurodivergent (an ADHDer), so she understands first-hand many of the experiences of neurodivergent children and their families. A certified DIR Floortime provider, she is passionate about home and community-based care that supports authentic, meaningful participation. She lives in Murfreesboro and enjoys crafting, the outdoors, and traveling.",
    },
    {
      name: "Valerie Navis",
      title: "COTA/L",
      role: "Certified Occupational Therapy Assistant",
      tint: "lavender",
      photo: (window.__resources && window.__resources.valeriePhoto) || "assets/valerie-navis.jpg",
      bio: "Valerie is passionate about helping children grow through play. She believes the best therapy happens when children feel seen, heard, and excited to play. She uses a child-led, play-based approach to meet each child where they are, turning their interests into opportunities for growth. Her goal is to create a supportive, fun environment where kids can build skills, confidence, and independence, and be themselves.",
    },
  ];
  return (
    <section id="team" style={{ background: "var(--surface-page)" }}>
      <div className="cp-section-pad" style={{ maxWidth: "var(--container-lg)", margin: "0 auto", padding: "var(--space-24) var(--space-6)" }}>
        <div style={{ maxWidth: 640, marginBottom: "var(--space-12)" }}>
          <CPEyebrow>Meet the team</CPEyebrow>
          <h2 style={{ fontSize: "var(--text-4xl)", margin: "0 0 var(--space-4)" }}>Kind, credentialed, and on your side</h2>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--ink-600)", lineHeight: 1.6 }}>
            A small, dedicated practice that treats your family like part of theirs.
          </p>
        </div>
        <div className="cp-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)", maxWidth: 720, margin: "0 auto" }}>
          {people.map((p) => <TeamMember key={p.name} person={p} Button={Button} />)}
        </div>
      </div>
    </section>
  );
}

function TeamMember({ person, Button }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <div style={{ width: 200, height: 200, borderRadius: "50%", overflow: "hidden", marginBottom: "var(--space-5)", boxShadow: "var(--shadow-sm)" }}>
        <img src={person.photo} alt={person.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 700, margin: "0 0 2px" }}>{person.name}</h3>
      <p style={{ fontSize: "var(--text-sm)", color: "var(--ink-500)", fontWeight: 600, margin: "0 0 var(--space-3)" }}>{person.title}</p>
      <p hidden={!open} style={{ fontSize: "var(--text-sm)", color: "var(--ink-600)", lineHeight: 1.65, margin: "0 0 var(--space-3)", maxWidth: 340 }}>{person.bio}</p>
      <Button variant="ghost" size="sm" onClick={() => setOpen((v) => !v)}
        trailingIcon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform var(--duration-normal) var(--ease-out)" }}><path d="m6 9 6 6 6-6"/></svg>}>
        {open ? "Read less" : "Read more"}
      </Button>
    </div>
  );
}

// Renamed in spirit to "values" but kept the export name for the page composition.
function CPTestimonials() {
  const { Card } = NSt;
  const { CPEyebrow } = window;
  const values = [
    { t: "Child-led", d: "We follow your child's lead and interests. When play feels like theirs, real growth follows.", tint: "lavender" },
    { t: "Strengths-based", d: "We start with what your child can do and build from there, never from a list of deficits.", tint: "default" },
    { t: "Neurodiversity-affirming", d: "We honor how your child's brain works. The goal is authentic participation, not masking.", tint: "green" },
  ];
  return (
    <section style={{ background: "var(--lavender-50)" }}>
      <div className="cp-section-pad" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)" }}>
        <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
          <CPEyebrow>What we believe</CPEyebrow>
          <h2 style={{ fontSize: "var(--text-4xl)", margin: 0 }}>Care that honors every child</h2>
        </div>
        <div className="cp-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-6)" }}>
          {values.map((c, i) => (
            <Card key={i} variant={c.tint === "default" ? "default" : c.tint === "green" ? "soft" : "lavender"}>
              <Card.Body>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--ink-900)", margin: "0 0 var(--space-2)" }}>{c.t}</h3>
                <p style={{ fontSize: "var(--text-base)", lineHeight: 1.6, color: "var(--ink-600)", margin: 0 }}>{c.d}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
function CPReviews() {
  const { CPEyebrow } = window;
  const reviews = [
    "I highly recommend occupational therapy services at Cultivate Play! Alyssa is an extremely knowledgeable and compassionate occupational therapist, and I love the way that she prioritizes connection. My son is making great progress with her and has benefitted from receiving OT services at home. Alyssa has helped educate me to better support my son's unique needs and to see things from his perspective. Her willingness to collaborate with my son's other providers has also been very valuable.",
    "Alyssa is very knowledgeable and kind. She takes time to connect with our kiddo in a way no other therapist ever has! We appreciate her so much.",
    "Alyssa has been just what our family needs. She has been a teacher, encourager, and support system to our son with ADHD. And as a parent learning to support him best, learning from her has been a gift! She is so natural, gentle, and kind in the care she gives. I couldn't recommend her more.",
    "It feels like our family had looked in every nook and cranny trying to find neuroaffirming care for our amazing AuDHDer. So much trauma was collected on the way, until we found Alyssa. She defines meeting a child where they are and following their lead. She is an absolute treasure to our family. We finally have a professional in our lives who doesn't look at my child like a collection of deficits and challenges that need to be fixed. She sees the strengths in him and protects and supports his highly sensitive nervous system just like we aim to do at home. Thank you, Alyssa!",
    "Alyssa is fantastic! She's kind, patient, and knowledgeable about modern techniques. My daughter warmed up to her quickly too. After years of working with different OTs, Alyssa is definitely one of the good ones!",
  ];
  const Stars = () => (
    <div style={{ display: "flex", gap: 2, marginBottom: "var(--space-4)" }} aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--warning)" aria-hidden="true"><path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 18.9l-5.8 3.05 1.1-6.45-4.7-4.6 6.5-.95z"/></svg>
      ))}
    </div>
  );
  const ReviewCard = ({ text }) => {
    const [open, setOpen] = React.useState(false);
    const LIMIT = 150;
    const long = text.length > LIMIT;
    let preview = text;
    if (long) {
      const cut = text.slice(0, LIMIT);
      preview = cut.slice(0, cut.lastIndexOf(" ")).trim() + "\u2026";
    }
    return (
      <figure style={{ breakInside: "avoid", margin: "0 0 var(--space-6)", background: "var(--white)", border: "1.5px solid var(--ink-200)", borderRadius: "var(--radius-xl)", padding: "var(--space-7)", boxShadow: "var(--shadow-sm)" }}>
        <Stars />
        <blockquote style={{ margin: 0 }}>
          <p style={{ fontSize: "var(--text-base)", color: "var(--ink-700)", lineHeight: 1.7, margin: "0 0 var(--space-4)" }}>{open || !long ? text : preview}</p>
        </blockquote>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)" }}>
          <figcaption style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--ink-500)" }}>Parent</figcaption>
          {long && (
            <button onClick={() => setOpen((o) => !o)} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", fontFamily: "inherit", fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--green-700)" }}>{open ? "Read less" : "Read more"}</button>
          )}
        </div>
      </figure>
    );
  };
  return (
    <section id="reviews" style={{ background: "var(--mint-50)", scrollMarginTop: 90 }}>
      <div className="cp-section-pad" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-24) var(--space-6)" }}>
        <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
          <CPEyebrow>Kind words</CPEyebrow>
          <h2 style={{ fontSize: "var(--text-4xl)", margin: 0 }}>What families say</h2>
        </div>
        <div className="cp-reviews-cols" style={{ columnCount: 3, columnGap: "var(--space-6)" }}>
          {reviews.map((r, i) => (<ReviewCard key={i} text={r} />))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CPTeam, CPTestimonials, CPReviews });
