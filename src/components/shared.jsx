// Cultivate Play — shared bits for the website kit. Exposes window.CPSection, window.CPEyebrow.
const NSx = window.CultivatePlayDesignSystem_d72bbd;

function CPSection({ id, bg, children, style = {} }) {
  return (
    <section id={id} style={{ background: bg || "transparent", ...style }}>
      <div style={{
        maxWidth: "var(--container-xl)", margin: "0 auto",
        padding: "var(--space-24) var(--space-6)",
      }}>{children}</div>
    </section>
  );
}

function CPEyebrow({ children }) {
  return <p className="cp-eyebrow" style={{ margin: "0 0 var(--space-3)" }}>{children}</p>;
}

Object.assign(window, { CPSection, CPEyebrow });
