// Cultivate Play — website nav. Exposes window.CPNav.
const { useState } = React;
const NS = window.CultivatePlayDesignSystem_d72bbd;
const CALENDLY = "https://calendly.com/alyssaengel-cultivate-play/30min";

function CPNav({ onBook }) {
  const { Button } = NS;
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Services", href: "/#services" },
    { label: "DIR Floortime", href: "/floortime/" },
    { label: "Our approach", href: "/#approach" },
    { label: "Team", href: "/#team" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "#contact" },
  ];
  const closeMenu = () => setOpen(false);
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 40,
      background: "rgba(251,250,246,0.85)", backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--ink-100)",
    }}>
      <div style={{
        position: "relative",
        maxWidth: "var(--container-xl)", margin: "0 auto", height: 76,
        display: "flex", alignItems: "center", gap: "var(--space-6)",
        padding: "0 var(--space-6)",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center" }} onClick={closeMenu}>
          <img src={(window.__resources && window.__resources.navLogo) || "assets/logo-horizontal.png"} alt="Cultivate Play Pediatric Therapy logo" style={{ height: 44 }} />
        </a>
        <nav className={open ? "cp-nav-links cp-open" : "cp-nav-links"} style={{ gap: "var(--space-6)", marginLeft: "auto" }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={closeMenu} style={{
              color: "var(--ink-700)", fontWeight: 700, fontSize: "var(--text-base)",
            }}>{l.label}</a>
          ))}
        </nav>
        <Button className="cp-nav-book-desktop" variant="primary" as="a" href={CALENDLY} target="_blank" rel="noopener" style={{ marginLeft: "auto" }}>Book a free consultation</Button>
        <button
          className="cp-nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{
            marginLeft: "auto", alignItems: "center", justifyContent: "center",
            width: 44, height: 44, borderRadius: "var(--radius-md)",
            border: "1.5px solid var(--ink-200)", background: "var(--white)",
            color: "var(--ink-700)", cursor: "pointer", flex: "none",
          }}>
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          )}
        </button>
      </div>
    </header>
  );
}
Object.assign(window, { CPNav });
