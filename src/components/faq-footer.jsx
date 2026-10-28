// Cultivate Play — FAQ + footer + booking dialog. Exposes window.CPFaq, window.CPFooter, window.CPBooking.
const NSf = window.CultivatePlayDesignSystem_d72bbd;
const CALENDLY = "https://calendly.com/alyssaengel-cultivate-play/30min";

function CPFaq() {
  const { Accordion } = NSf;
  const { CPEyebrow } = window;
  const items = [
    { title: "Do you take insurance?", content: "We're in-network with Blue Cross Blue Shield, TennCare Select, and BlueCare. For other plans, we offer private pay (card, cash, or HSA) and can provide a superbill to submit for reimbursement. Katie Beckett Waiver and IEA funding may also apply." },
    { title: "Where do sessions happen?", content: "In your home or community across Rutherford County (Murfreesboro, Smyrna, Lavergne, and nearby), in our Murfreesboro office, or via telehealth anywhere in Tennessee." },
    { title: "What is DIR Floortime?", content: "A developmental, relationship-based approach we weave into occupational therapy. We also coach parents to use Floortime with their child at home." },
    { title: "What ages do you work with?", content: "Children and teens, ages 0 to 18, with a focus on neurodiversity-affirming, strengths-based support." },
    { title: "How do we get started?", content: "The easiest first step is a free phone consultation, just reach out and we'll talk about your child and family and whether we're the right fit. Prefer to skip the call? Have your pediatrician fax a referral to (615) 617-5873 and we'll take it from there." },
  ];
  return (
      <section id="faq" style={{ background: "var(--surface-page)" }}>
        <div className="cp-section-pad" style={{ maxWidth: 820, margin: "0 auto", padding: "var(--space-24) var(--space-6)" }}>
        <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
          <CPEyebrow>Good to know</CPEyebrow>
          <h2 style={{ fontSize: "var(--text-4xl)", margin: 0 }}>Questions, answered</h2>
        </div>
        <Accordion items={items} />
      </div>
    </section>
  );
}

function CPFooter({ onBook }) {
  const { Button } = NSf;
  return (
    <>
      <section id="contact" style={{ background: "var(--surface-page)", borderTop: "1px solid var(--ink-100)" }}>
        <div className="cp-section-pad" style={{ maxWidth: "var(--container-lg)", margin: "0 auto", padding: "var(--space-24) var(--space-6)" }}>
          <div>
            <p className="cp-eyebrow" style={{ margin: "0 0 var(--space-3)" }}>Get in touch</p>
              <h2 style={{ fontSize: "var(--text-4xl)", margin: "0 0 var(--space-5)" }}>We'd love to hear from you</h2>
              <p style={{ fontSize: "var(--text-lg)", color: "var(--ink-600)", lineHeight: 1.6, margin: "0 0 var(--space-8)", maxWidth: 620 }}>
                Reach out for a free phone consultation, or have your pediatrician fax a
                referral. We serve Rutherford County in home and community, our
                Murfreesboro office, and telehealth across Tennessee.
              </p>
              <div className="cp-contact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,340px))", gap: "var(--space-5)" }}>
                <ContactItem label="Call" value="(615) 768-9170" href="tel:16157689170"
                  icon={<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2Z"/>} />
                <ContactItem label="Fax" value="(615) 617-5873"
                  icon={<><rect x="6" y="3" width="12" height="5" rx="1"/><path d="M6 14h12v7H6zM4 8h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M4 17H2V10a2 2 0 0 1 2-2"/></>} />
                <ContactItem label="Email" value="info@cultivate-play.com" href="mailto:info@cultivate-play.com"
                  icon={<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>} />
                <ContactItem label="Visit" value="1810 Ward Drive, Ste 101, Murfreesboro, TN 37129"
                  icon={<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>} />
              </div>
              <a href="https://www.facebook.com/profile.php?id=61555848115417" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: "var(--space-6)", fontWeight: 700, fontSize: "var(--text-sm)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3v-1.5c0-.5.4-.5.5-.5Z"/></svg>
                Follow us on Facebook
              </a>
          </div>
        </div>
      </section>
      <section style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "var(--container-lg)", margin: "0 auto", padding: "0 var(--space-6) var(--space-24)" }}>
          <div className="cp-cta-pad" style={{
            background: "var(--green-600)", borderRadius: "var(--radius-2xl)",
            padding: "var(--space-16)", textAlign: "center", color: "#fff",
            boxShadow: "var(--shadow-lg)",
          }}>
            <h2 style={{ color: "#fff", fontSize: "var(--text-4xl)", margin: "0 0 var(--space-4)" }}>Let's grow together</h2>
            <p style={{ color: "rgba(255,255,255,.85)", fontSize: "var(--text-lg)", maxWidth: 520, margin: "0 auto var(--space-8)", lineHeight: 1.6 }}>
              Book a free phone consultation. We'll talk about your child and whether
              we're the right fit. No commitment needed.
            </p>
            <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center", flexWrap: "wrap" }}>
              <Button variant="secondary" size="lg" as="a" href={CALENDLY} target="_blank" rel="noopener">Book a free consultation</Button>
              <Button variant="ghost" size="lg" as="a" href="tel:16157689170" style={{ color: "#fff", border: "1.5px solid rgba(255,255,255,.5)" }}>Call (615) 768-9170</Button>
            </div>
          </div>
        </div>
      </section>
      <footer style={{ background: "var(--ink-900)", color: "rgba(255,255,255,.7)" }}>
        <div className="cp-footer-inner" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-12) var(--space-6)",
          display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--space-6)", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "#fff", fontWeight: 600 }}>Cultivate Play</div>
            <p style={{ margin: "6px 0 0", fontSize: "var(--text-sm)" }}>Neurodiversity-affirming pediatric OT · Murfreesboro, TN</p>
            <p style={{ margin: "4px 0 0", fontSize: "var(--text-sm)" }}>info@cultivate-play.com · (615) 768-9170</p>
          </div>
          <div style={{ display: "flex", gap: "var(--space-8)", fontSize: "var(--text-sm)" }}>
            <a href="/#services" style={{ color: "rgba(255,255,255,.7)" }}>Services</a>
            <a href="/floortime/" style={{ color: "rgba(255,255,255,.7)" }}>DIR Floortime</a>
            <a href="/#approach" style={{ color: "rgba(255,255,255,.7)" }}>Approach</a>
            <a href="/#team" style={{ color: "rgba(255,255,255,.7)" }}>Team</a>
            <a href="/#faq" style={{ color: "rgba(255,255,255,.7)" }}>FAQ</a>
          </div>
          <p style={{ margin: 0, fontSize: "var(--text-xs)" }}>© 2026 Cultivate Play Pediatric Therapy</p>
        </div>
      </footer>
    </>
  );
}

function CPBooking({ open, onClose }) {
  const { Dialog, Input, Select, Button, Alert } = NSf;
  const [done, setDone] = React.useState(false);
  React.useEffect(() => { if (open) setDone(false); }, [open]);
  return (
    <Dialog open={open} onClose={onClose}
      title={done ? "Thanks for reaching out!" : "Book a free consultation"}
      footer={done
        ? <Button onClick={onClose}>Done</Button>
        : <><Button variant="ghost" onClick={onClose}>Cancel</Button><Button onClick={() => setDone(true)}>Request a call</Button></>}>
      {done ? (
        <Alert tone="success" title="Talk soon!">
          We'll reach out within one business day to set up your free phone
          consultation. We can't wait to meet your family.
        </Alert>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", marginTop: "var(--space-2)" }}>
          <Input label="Parent / caregiver name" placeholder="Jamie Rivera" required />
          <Input label="Email or phone" placeholder="jamie@email.com" required />
          <Select label="What are you interested in?" defaultValue="">
            <option value="" disabled>Choose one…</option>
            <option>Occupational therapy</option>
            <option>DIR Floortime & parent coaching</option>
            <option>Training / education for our team</option>
            <option>Not sure yet, help us point you</option>
          </Select>
        </div>
      )}
    </Dialog>
  );
}
function ContactItem({ label, value, href, icon }) {
  const inner = (
    <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
      <span style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", background: "var(--green-100)", color: "var(--green-700)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
      </span>
      <div>
        <div style={{ fontSize: "var(--text-xs)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ink-400)", marginBottom: 2 }}>{label}</div>
        <div style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--ink-800)", lineHeight: 1.4 }}>{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} style={{ color: "inherit" }}>{inner}</a> : inner;
}

Object.assign(window, { CPFaq, CPFooter, CPBooking });