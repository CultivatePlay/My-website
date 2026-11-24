// Cultivate Play — Team page (/team/). Needs team.js loaded first for CPPeople and CPTestimonials.
(function () {
  const { Hero, Band, render } = window.CPKit;
  const NS = window.CultivatePlayDesignSystem_d72bbd;

  function Person({ person }) {
    return (
      <article className="cp-grid-2" style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "var(--space-10)", alignItems: "start", background: "var(--white)", border: "1.5px solid var(--ink-200)", borderRadius: "var(--radius-xl)", padding: "var(--space-8)", boxShadow: "var(--shadow-xs)" }}>
        <div style={{ width: 200, height: 200, borderRadius: "50%", overflow: "hidden", boxShadow: "var(--shadow-sm)", margin: "0 auto" }}>
          <img src={person.photo} alt={person.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div>
          <h2 style={{ fontSize: "var(--text-3xl)", margin: "0 0 4px" }}>{person.name}</h2>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--ink-500)", fontWeight: 700, margin: "0 0 2px" }}>{person.title}</p>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--green-700)", fontWeight: 700, margin: "0 0 var(--space-4)" }}>{person.role}</p>
          <p style={{ fontSize: "var(--text-base)", color: "var(--ink-600)", lineHeight: 1.7, margin: 0 }}>{person.bio}</p>
        </div>
      </article>
    );
  }

  function Page() {
    return (
      <React.Fragment>
        <window.CPHiringBanner />
        <Hero crumb="Team" chip="Meet the team" title="Kind, credentialed, and on your side">
          A small, dedicated practice that treats your family like part of theirs. Get to know the
          therapists who will be playing, learning, and growing alongside your child.
        </Hero>
        <Band id="team">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", maxWidth: 960, margin: "0 auto" }}>
            {window.CPPeople.map((p) => <Person key={p.name} person={p} />)}
          </div>
        </Band>
        <window.CPTestimonials />
      </React.Fragment>
    );
  }

  render(Page);
})();
