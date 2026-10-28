/* @ds-bundle: {"format":4,"namespace":"CultivatePlayDesignSystem_d72bbd","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Blob","sourcePath":"components/brand/Doodles.jsx"},{"name":"Sprout","sourcePath":"components/brand/Doodles.jsx"},{"name":"Sparkle","sourcePath":"components/brand/Doodles.jsx"},{"name":"Squiggle","sourcePath":"components/brand/Doodles.jsx"},{"name":"Sun","sourcePath":"components/brand/Doodles.jsx"},{"name":"DotScatter","sourcePath":"components/brand/Doodles.jsx"},{"name":"Flower","sourcePath":"components/brand/Doodles.jsx"},{"name":"Vine","sourcePath":"components/brand/Doodles.jsx"},{"name":"LeafSprig","sourcePath":"components/brand/Doodles.jsx"},{"name":"Curl","sourcePath":"components/brand/Doodles.jsx"},{"name":"WavyDivider","sourcePath":"components/brand/Doodles.jsx"},{"name":"Doodles","sourcePath":"components/brand/Doodles.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Dialog","sourcePath":"components/navigation/Dialog.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"5221b0e25730","components/actions/IconButton.jsx":"0727ffd6ff7e","components/brand/Doodles.jsx":"1edb9eca0831","components/display/Avatar.jsx":"a9c8da72ceba","components/display/Badge.jsx":"1cc4900f22a9","components/display/Card.jsx":"bf2789e3f614","components/display/Stat.jsx":"0ceea5be0cbb","components/display/Tag.jsx":"ec54989b107c","components/feedback/Alert.jsx":"56482e7edb63","components/feedback/ProgressBar.jsx":"31d5fb9ec581","components/feedback/Toast.jsx":"3da563caa546","components/feedback/Tooltip.jsx":"b03042344a61","components/forms/Checkbox.jsx":"5b91027fce96","components/forms/Input.jsx":"9c747fadafd6","components/forms/Radio.jsx":"78898d83fc80","components/forms/Select.jsx":"e7a9198973d0","components/forms/Switch.jsx":"538ac925855c","components/forms/Textarea.jsx":"362cd107d5b5","components/navigation/Accordion.jsx":"4de3853713e2","components/navigation/Dialog.jsx":"9addb8466603","components/navigation/Tabs.jsx":"637bd1286e82","ui_kits/website/Footer.jsx":"f9f8f807ba9e","ui_kits/website/Hero.jsx":"065ae6f2b983","ui_kits/website/Nav.jsx":"31447c5926f2","ui_kits/website/Services.jsx":"ca9a4a339299","ui_kits/website/Team.jsx":"2ee408f887d5","ui_kits/website/shared.jsx":"cf10ffa53d90"},"inlinedExternals":[],"unexposedExports":[{"name":"getBlobClip","sourcePath":"components/brand/Doodles.jsx"}]} */

(() => {

const __ds_ns = (window.CultivatePlayDesignSystem_d72bbd = window.CultivatePlayDesignSystem_d72bbd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cultivate Play — Button
 * Pill-shaped, friendly action button. Variants map to brand roles:
 * primary = emerald green, secondary = lavender, plus soft/outline/ghost/danger.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  square = false,
  loading = false,
  disabled = false,
  leadingIcon = null,
  trailingIcon = null,
  as = "button",
  className = "",
  ...rest
}) {
  const Tag = as;
  const classes = ["cp-btn", `cp-btn--${variant}`, size !== "md" && `cp-btn--${size}`, block && "cp-btn--block", square && "cp-btn--square", (disabled || loading) && "is-disabled", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes,
    disabled: Tag === "button" ? disabled || loading : undefined,
    "aria-busy": loading || undefined
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "cp-btn__spinner",
    "aria-hidden": "true"
  }), !loading && leadingIcon && /*#__PURE__*/React.createElement("span", {
    className: "cp-btn__icon"
  }, leadingIcon), children, !loading && trailingIcon && /*#__PURE__*/React.createElement("span", {
    className: "cp-btn__icon"
  }, trailingIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cultivate Play — IconButton
 * Circular icon-only button. Pass a 20px SVG/icon node as children.
 */
function IconButton({
  children,
  variant = "ghost",
  size = "md",
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  const classes = ["cp-icon-btn", variant !== "ghost" && `cp-icon-btn--${variant}`, size !== "md" && `cp-icon-btn--${size}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes,
    "aria-label": label,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Doodles.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cultivate Play — Doodles
 * A whimsical, hand-drawn-feeling decorative graphic layer. Abstract organic
 * shapes (not representational illustration) that make layouts feel playful and
 * kid-friendly rather than clinical. All accept `color`, `size`, and standard
 * SVG/HTML props, and inherit brand colors by default.
 */

const S = (size, extra = {}) => ({
  width: size,
  height: size,
  display: "block",
  ...extra
});

/** Soft rounded organic blob — great as a background shape behind content. */
function Blob({
  color = "var(--green-300)",
  size = 160,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 200 200",
    style: S(size, style)
  }, rest, {
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M48 -66C61 -55 68 -37 71 -19C74 0 73 20 64 35C55 51 38 62 19 68C0 74 -21 74 -39 66C-57 57 -72 40 -76 21C-80 1 -74 -21 -62 -37C-49 -53 -31 -63 -11 -70C9 -76 30 -78 48 -66Z",
    transform: "translate(100 100)"
  }));
}

/** A little growing sprout / two-leaf motif — the brand's signature graphic, playful. */
function Sprout({
  color = "var(--green-500)",
  size = 64,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 64 64",
    style: S(size, style)
  }, rest, {
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: color,
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M32 58V30"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 34C32 22 24 15 12 14c-1 12 6 21 20 22Z",
    fill: color,
    fillOpacity: "0.18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 30C32 19 40 12 52 12c1 11-6 19-20 20Z",
    fill: color,
    fillOpacity: "0.18"
  })));
}

/** Four-point sparkle / twinkle. Scatter a few for a joyful accent. */
function Sparkle({
  color = "var(--lavender-500)",
  size = 34,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 40 40",
    style: S(size, style)
  }, rest, {
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M20 2C22 13 27 18 38 20C27 22 22 27 20 38C18 27 13 22 2 20C13 18 18 13 20 2Z"
  }));
}

/** Bouncy hand-drawn squiggle — nice under headings or as a divider flourish. */
function Squiggle({
  color = "var(--lavender-400)",
  width = 120,
  height = 18,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 120 18",
    style: {
      width,
      height,
      display: "block",
      ...style
    }
  }, rest, {
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: color,
    strokeWidth: "4",
    strokeLinecap: "round",
    d: "M3 12C12 3 21 3 30 10S48 16 57 9 75 3 84 10s18 6 27-1"
  }));
}

/** A cheerful little sun / burst. */
function Sun({
  color = "var(--warning)",
  size = 56,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 56 56",
    style: S(size, style)
  }, rest, {
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: color,
    strokeWidth: "3.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "28",
    cy: "28",
    r: "10",
    fill: color,
    fillOpacity: "0.25"
  }), Array.from({
    length: 8
  }).map((_, i) => {
    const a = i * Math.PI / 4;
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: 28 + Math.cos(a) * 16,
      y1: 28 + Math.sin(a) * 16,
      x2: 28 + Math.cos(a) * 22,
      y2: 28 + Math.sin(a) * 22
    });
  })));
}

/** Scattered dots (confetti). Deterministic, seeded layout so it stays put. */
function DotScatter({
  color = "var(--green-300)",
  size = 120,
  count = 14,
  style = {},
  ...rest
}) {
  const pts = [];
  let seed = 7;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let i = 0; i < count; i++) pts.push([rnd() * 100, rnd() * 100, 1.4 + rnd() * 3]);
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 100 100",
    style: S(size, style)
  }, rest, {
    "aria-hidden": "true"
  }), pts.map((p, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: p[2],
    fill: color
  })));
}

/** A simple, cheerful five-petal flower. */
function Flower({
  color = "var(--lavender-400)",
  center = "var(--warning)",
  size = 46,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 48 48",
    style: S(size, style)
  }, rest, {
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("g", null, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("ellipse", {
    key: i,
    cx: "24",
    cy: "12.5",
    rx: "6.4",
    ry: "11",
    fill: color,
    transform: `rotate(${i * 72} 24 24)`
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "24",
    r: "6",
    fill: center
  }));
}

/** A curling vine / tendril with a couple of leaves — echoes the logo's branches. */
function Vine({
  color = "var(--green-500)",
  size = 90,
  flip = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 80 120",
    style: {
      ...S(size, style),
      width: size * 80 / 120,
      transform: flip ? "scaleX(-1)" : "none"
    }
  }, rest, {
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: color,
    strokeWidth: "3.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 116 C20 88 46 82 40 56 C35 34 14 34 24 12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24 12 c-7 -1 -10 7 -4 10 s10 -1 6 -8"
  })), /*#__PURE__*/React.createElement("path", {
    fill: color,
    fillOpacity: "0.22",
    stroke: color,
    strokeWidth: "2.2",
    d: "M40 70 c14 2 22 -6 24 -20 -14 -1 -22 6 -24 20Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    fillOpacity: "0.22",
    stroke: color,
    strokeWidth: "2.2",
    d: "M31 44 c-13 1 -20 -7 -21 -20 13 0 20 7 21 20Z"
  }));
}

/** A tidy leaf sprig — a stem with paired leaves. */
function LeafSprig({
  color = "var(--green-400)",
  size = 64,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 64 80",
    style: S(size, style)
  }, rest, {
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: color,
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M32 76 V16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 40 C32 26 22 20 10 20 c0 14 10 20 22 20Z",
    fill: color,
    fillOpacity: "0.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 32 C32 18 42 12 54 12 c0 14 -10 20 -22 20Z",
    fill: color,
    fillOpacity: "0.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 56 C32 44 24 39 14 39 c0 12 8 17 18 17Z",
    fill: color,
    fillOpacity: "0.2"
  })));
}

/** A swirly flourish ornament — pairs of curls, nice under a heading or as a divider mark. */
function Curl({
  color = "var(--lavender-400)",
  width = 90,
  height = 34,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 96 36",
    style: {
      width,
      height,
      display: "block",
      ...style
    }
  }, rest, {
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: color,
    strokeWidth: "3.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M48 20 C40 6 22 6 20 18 c-1.5 9 12 12 13 2 1 -8 -10 -8 -11 -1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M48 20 C56 6 74 6 76 18 c1.5 9 -12 12 -13 2 -1 -8 10 -8 11 -1"
  })));
}

/** A full-width wavy divider band — put between sections. */
function WavyDivider({
  color = "var(--green-600)",
  height = 40,
  flip = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1200 40",
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height,
      display: "block",
      transform: flip ? "scaleY(-1)" : "none",
      ...style
    }
  }, rest, {
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M0 20C150 -5 300 -5 450 15S750 40 900 22 1200 8 1200 8V40H0Z"
  }));
}

/** A rounded organic-corner frame path you can use as a CSS clip via getBlobClip(). */
function getBlobClip() {
  return "path('M0,60 C0,20 20,0 60,0 L200,0 C240,0 260,20 260,60 L260,180 C260,220 235,245 190,242 L60,242 C20,242 0,220 0,180 Z')";
}

/** Namespace bundle of every doodle shape, for convenient destructuring. */
const Doodles = {
  Blob,
  Sprout,
  Sparkle,
  Squiggle,
  Sun,
  DotScatter,
  Flower,
  Vine,
  LeafSprig,
  Curl,
  WavyDivider,
  getBlobClip
};
Object.assign(__ds_scope, { Blob, Sprout, Sparkle, Squiggle, Sun, DotScatter, Flower, Vine, LeafSprig, Curl, WavyDivider, getBlobClip, Doodles });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Doodles.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map(n => n[0]).join("").toUpperCase();
}

/** Cultivate Play — Avatar */
function Avatar({
  name = "",
  src,
  size = "md",
  color = "lavender",
  className = "",
  ...rest
}) {
  const classes = ["cp-avatar", size !== "md" && `cp-avatar--${size}`, color === "green" && "cp-avatar--green", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes,
    title: name
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}

/** Overlapping avatar stack. */
function AvatarGroup({
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `cp-avatar-group ${className}`
  }, rest), children);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Cultivate Play — Badge (small status pill). */
function Badge({
  children,
  color = "neutral",
  solid = false,
  dot = false,
  className = "",
  ...rest
}) {
  const classes = ["cp-badge", color !== "neutral" && `cp-badge--${color}`, solid && "cp-badge--solid", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "cp-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cultivate Play — Card
 * Rounded, soft-shadow container. Use sub-parts or compose freely.
 */
function Card({
  variant = "default",
  interactive = false,
  className = "",
  children,
  ...rest
}) {
  const classes = ["cp-card", variant !== "default" && `cp-card--${variant}`, interactive && "cp-card--interactive", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), children);
}
Card.Media = function CardMedia({
  src,
  alt = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    className: "cp-card__media",
    src: src,
    alt: alt
  }, rest));
};
Card.Body = function CardBody({
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `cp-card__body ${className}`
  }, rest), children);
};
Card.Title = function CardTitle({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("h3", _extends({
    className: "cp-card__title"
  }, rest), children);
};
Card.Text = function CardText({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    className: "cp-card__text"
  }, rest), children);
};
Card.Footer = function CardFooter({
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `cp-card__footer ${className}`
  }, rest), children);
};
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Cultivate Play — Stat (big number + label). */
function Stat({
  value,
  label,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `cp-stat ${className}`
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "cp-stat__value"
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "cp-stat__label"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const X = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.4",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6L6 18"
}));

/** Cultivate Play — Tag (filter/removable chip). */
function Tag({
  children,
  active = false,
  onRemove,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["cp-tag", active && "cp-tag--active", className].filter(Boolean).join(" ")
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "cp-tag__x",
    role: "button",
    "aria-label": "Remove",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement(X, null)));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const icons = {
  info: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11v5M12 8h.01"
  })),
  success: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8.5 12 2.5 2.5 4.5-5"
  })),
  warning: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.3 4.3 2.5 18a2 2 0 0 0 1.7 3h15.6a2 2 0 0 0 1.7-3L13.7 4.3a2 2 0 0 0-3.4 0Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01"
  })),
  danger: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v5M12 16h.01"
  }))
};

/** Cultivate Play — Alert (inline banner). */
function Alert({
  tone = "info",
  title,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `cp-alert cp-alert--${tone} ${className}`,
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "cp-alert__icon"
  }, icons[tone]), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("p", {
    className: "cp-alert__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "cp-alert__body"
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Cultivate Play — ProgressBar */
function ProgressBar({
  value = 0,
  max = 100,
  tone = "green",
  className = "",
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["cp-progress", tone === "lavender" && "cp-progress--lavender", className].filter(Boolean).join(" "),
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": max
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "cp-progress__bar",
    style: {
      width: `${pct}%`
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const X = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6L6 18"
}));
const dot = {
  success: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m5 13 4 4L19 7"
  })),
  danger: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))
};

/** Cultivate Play — Toast (transient notification). */
function Toast({
  tone = "default",
  icon,
  children,
  onClose,
  className = "",
  ...rest
}) {
  const glyph = icon || dot[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["cp-toast", tone !== "default" && `cp-toast--${tone}`, className].filter(Boolean).join(" "),
    role: "status"
  }, rest), glyph && /*#__PURE__*/React.createElement("span", {
    className: "cp-toast__icon"
  }, glyph), /*#__PURE__*/React.createElement("span", null, children), onClose && /*#__PURE__*/React.createElement("span", {
    className: "cp-toast__close",
    role: "button",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(X, null)));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Cultivate Play — Tooltip (hover hint, wraps a trigger). */
function Tooltip({
  label,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `cp-tooltip ${className}`
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "cp-tooltip__bubble",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Check = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 13l4 4L19 7"
}));

/** Cultivate Play — Checkbox */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["cp-check", disabled && "is-disabled", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "cp-check__box"
  }, /*#__PURE__*/React.createElement(Check, null)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cultivate Play — Input (text field with optional label, hint, icon, error).
 */
function Input({
  label,
  hint,
  error,
  required = false,
  icon = null,
  id,
  className = "",
  ...rest
}) {
  const fieldId = id || (label ? `cp-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const input = /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: "cp-input",
    "aria-invalid": !!error
  }, rest));
  return /*#__PURE__*/React.createElement("div", {
    className: ["cp-field", error && "cp-field--error", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "cp-label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "cp-label__req"
  }, "*")), icon ? /*#__PURE__*/React.createElement("div", {
    className: "cp-input-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cp-input-wrap__icon"
  }, icon), input) : input, (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: "cp-hint"
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Cultivate Play — Radio */
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["cp-radio", disabled && "is-disabled", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "cp-radio__box"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Cultivate Play — Select (native, styled with custom arrow). */
function Select({
  label,
  hint,
  error,
  required = false,
  id,
  children,
  className = "",
  ...rest
}) {
  const fieldId = id || (label ? `cp-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ["cp-field", error && "cp-field--error", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "cp-label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "cp-label__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "cp-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    className: "cp-select",
    "aria-invalid": !!error
  }, rest), children)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: "cp-hint"
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Cultivate Play — Switch (toggle). */
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["cp-switch", disabled && "is-disabled", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "cp-switch__track"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Cultivate Play — Textarea */
function Textarea({
  label,
  hint,
  error,
  required = false,
  id,
  className = "",
  ...rest
}) {
  const fieldId = id || (label ? `cp-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ["cp-field", error && "cp-field--error", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "cp-label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "cp-label__req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    className: "cp-textarea",
    "aria-invalid": !!error
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: "cp-hint"
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Chev = () => /*#__PURE__*/React.createElement("svg", {
  className: "cp-accordion__chev",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.4",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));

/**
 * Cultivate Play — Accordion.
 * Pass `items` of { title, content }. `allowMultiple` lets several stay open.
 */
function Accordion({
  items = [],
  defaultOpen = [0],
  allowMultiple = false,
  className = "",
  ...rest
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `cp-accordion ${className}`
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `cp-accordion__item ${open.has(i) ? "is-open" : ""}`
  }, /*#__PURE__*/React.createElement("button", {
    className: "cp-accordion__head",
    "aria-expanded": open.has(i),
    onClick: () => toggle(i)
  }, /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement(Chev, null)), open.has(i) && /*#__PURE__*/React.createElement("div", {
    className: "cp-accordion__panel"
  }, it.content))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cultivate Play — Dialog (modal).
 * Render conditionally on `open`. `onClose` fires on overlay click & close button.
 */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  className = "",
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "cp-dialog-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: `cp-dialog ${className}`,
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "cp-dialog__body"
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: "cp-dialog__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "cp-dialog__text"
  }, children)), footer && /*#__PURE__*/React.createElement("div", {
    className: "cp-dialog__footer"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cultivate Play — Tabs (pill segmented control).
 * Controlled via `value`/`onChange`, or uncontrolled via `defaultValue`.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  className = "",
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `cp-tabs ${className}`,
    role: "tablist"
  }, rest), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    "aria-selected": active === it.value,
    className: `cp-tab ${active === it.value ? "cp-tab--active" : ""}`,
    onClick: () => select(it.value)
  }, it.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Cultivate Play — FAQ + footer + booking dialog. Exposes window.CPFaq, window.CPFooter, window.CPBooking.
const NSf = window.CultivatePlayDesignSystem_d72bbd;
const CALENDLY = "https://calendly.com/alyssaengel-cultivate-play/30min";
function CPFaq() {
  const {
    Accordion
  } = NSf;
  const {
    CPEyebrow
  } = window;
  const items = [{
    title: "Do you take insurance?",
    content: "We're in-network with Blue Cross Blue Shield, TennCare Select, and BlueCare. For other plans, we offer private pay (card, cash, or HSA) and can provide a superbill to submit for reimbursement. Katie Beckett Waiver and IEA funding may also apply."
  }, {
    title: "Where do sessions happen?",
    content: "In your home or community across Rutherford County (Murfreesboro, Smyrna, Lavergne, and nearby), in our Murfreesboro office, or via telehealth anywhere in Tennessee."
  }, {
    title: "What is DIR Floortime?",
    content: "A developmental, relationship-based approach we weave into occupational therapy. We also coach parents to use Floortime with their child at home."
  }, {
    title: "What ages do you work with?",
    content: "Children and teens, ages 0 to 18, with a focus on neurodiversity-affirming, strengths-based support."
  }, {
    title: "How do we get started?",
    content: "The easiest first step is a free phone consultation, just reach out and we'll talk about your child and family and whether we're the right fit. Prefer to skip the call? Have your pediatrician fax a referral to (615) 617-5873 and we'll take it from there."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: "0 auto",
      padding: "var(--space-24) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(CPEyebrow, null, "Good to know"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-4xl)",
      margin: 0
    }
  }, "Questions, answered")), /*#__PURE__*/React.createElement(Accordion, {
    items: items
  })));
}
function CPFooter({
  onBook
}) {
  const {
    Button
  } = NSf;
  const {
    CPLeafPanel
  } = window;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      background: "var(--surface-page)",
      borderTop: "1px solid var(--ink-100)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-24) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "cp-eyebrow",
    style: {
      margin: "0 0 var(--space-3)"
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-4xl)",
      margin: "0 0 var(--space-5)"
    }
  }, "We'd love to hear from you"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--ink-600)",
      lineHeight: 1.6,
      margin: "0 0 var(--space-8)",
      maxWidth: 460
    }
  }, "Reach out for a free phone consultation, or have your pediatrician fax a referral. We serve Rutherford County in home and community, our Murfreesboro office, and telehealth across Tennessee."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(ContactItem, {
    label: "Call",
    value: "(615) 768-9170",
    href: "tel:16157689170",
    icon: /*#__PURE__*/React.createElement("path", {
      d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2Z"
    })
  }), /*#__PURE__*/React.createElement(ContactItem, {
    label: "Fax",
    value: "(615) 617-5873",
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "3",
      width: "12",
      height: "5",
      rx: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 14h12v7H6zM4 8h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 17H2V10a2 2 0 0 1 2-2"
    }))
  }), /*#__PURE__*/React.createElement(ContactItem, {
    label: "Email",
    value: "alyssaengel@cultivate-play.com",
    href: "mailto:alyssaengel@cultivate-play.com",
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m3 7 9 6 9-6"
    }))
  }), /*#__PURE__*/React.createElement(ContactItem, {
    label: "Visit",
    value: "1810 Ward Drive, Ste 101, Murfreesboro, TN 37129",
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    }))
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/profile.php?id=61555848115417",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      marginTop: "var(--space-6)",
      fontWeight: 700,
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3v-1.5c0-.5.4-.5.5-.5Z"
  })), "Follow us on Facebook")), /*#__PURE__*/React.createElement(CPLeafPanel, {
    caption: "Murfreesboro, TN",
    tint: "green",
    style: {
      height: 340,
      borderRadius: "var(--radius-2xl)"
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "0 var(--space-6) var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--green-600)",
      borderRadius: "var(--radius-2xl)",
      padding: "var(--space-16)",
      textAlign: "center",
      color: "#fff",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      fontSize: "var(--text-4xl)",
      margin: "0 0 var(--space-4)"
    }
  }, "Let's grow together"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,.85)",
      fontSize: "var(--text-lg)",
      maxWidth: 520,
      margin: "0 auto var(--space-8)",
      lineHeight: 1.6
    }
  }, "Book a free phone consultation. We'll talk about your child and whether we're the right fit. No commitment needed."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    as: "a",
    href: CALENDLY,
    target: "_blank",
    rel: "noopener"
  }, "Book a free consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    as: "a",
    href: "tel:16157689170",
    style: {
      color: "#fff",
      border: "1.5px solid rgba(255,255,255,.5)"
    }
  }, "Call (615) 768-9170"))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink-900)",
      color: "rgba(255,255,255,.7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-12) var(--space-6)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xl)",
      color: "#fff",
      fontWeight: 600
    }
  }, "Cultivate Play"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontSize: "var(--text-sm)"
    }
  }, "Neurodiversity-affirming pediatric OT \xB7 Murfreesboro, TN"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: "var(--text-sm)"
    }
  }, "alyssaengel@cultivate-play.com \xB7 (615) 768-9170")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-8)",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services",
    style: {
      color: "rgba(255,255,255,.7)"
    }
  }, "Services"), /*#__PURE__*/React.createElement("a", {
    href: "#approach",
    style: {
      color: "rgba(255,255,255,.7)"
    }
  }, "Approach"), /*#__PURE__*/React.createElement("a", {
    href: "#team",
    style: {
      color: "rgba(255,255,255,.7)"
    }
  }, "Team"), /*#__PURE__*/React.createElement("a", {
    href: "#faq",
    style: {
      color: "rgba(255,255,255,.7)"
    }
  }, "FAQ")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-xs)"
    }
  }, "\xA9 2026 Cultivate Play Pediatric Therapy"))));
}
function CPBooking({
  open,
  onClose
}) {
  const {
    Dialog,
    Input,
    Select,
    Button,
    Alert
  } = NSf;
  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    if (open) setDone(false);
  }, [open]);
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    title: done ? "Thanks for reaching out!" : "Book a free consultation",
    footer: done ? /*#__PURE__*/React.createElement(Button, {
      onClick: onClose
    }, "Done") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setDone(true)
    }, "Request a call"))
  }, done ? /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Talk soon!"
  }, "We'll reach out within one business day to set up your free phone consultation. We can't wait to meet your family.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Parent / caregiver name",
    placeholder: "Jamie Rivera",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email or phone",
    placeholder: "jamie@email.com",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "What are you interested in?",
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Choose one\u2026"), /*#__PURE__*/React.createElement("option", null, "Occupational therapy"), /*#__PURE__*/React.createElement("option", null, "DIR Floortime & parent coaching"), /*#__PURE__*/React.createElement("option", null, "Training / education for our team"), /*#__PURE__*/React.createElement("option", null, "Not sure yet, help us point you"))));
}
function ContactItem({
  label,
  value,
  href,
  icon
}) {
  const inner = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-md)",
      background: "var(--green-100)",
      color: "var(--green-700)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, icon)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: 800,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--ink-400)",
      marginBottom: 2
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--ink-800)",
      lineHeight: 1.4
    }
  }, value)));
  return href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: "inherit"
    }
  }, inner) : inner;
}
Object.assign(window, {
  CPFaq,
  CPFooter,
  CPBooking
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Cultivate Play — website hero. Exposes window.CPHero.
const NSh = window.CultivatePlayDesignSystem_d72bbd;
const CALENDLY = "https://calendly.com/alyssaengel-cultivate-play/30min";
function CPHero({
  onBook
}) {
  const {
    Button,
    Badge
  } = NSh;
  const Noop = () => null;
  const {
    Sparkle = Noop,
    Sun = Noop,
    Vine = Noop,
    Flower = Noop,
    LeafSprig = Noop,
    Squiggle = Noop,
    Curl = Noop,
    Blob = Noop
  } = NSh;
  const {
    CPLeafPanel
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      background: "var(--cream)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "-14%",
      right: "-6%",
      opacity: 0.4,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(Blob, {
    color: "var(--mint-200)",
    size: 520
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "-20%",
      left: "-8%",
      opacity: 0.35,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(Blob, {
    color: "var(--lavender-200)",
    size: 360
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 24,
      left: "1%",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(Vine, {
    color: "var(--green-400)",
    size: 120
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 70,
      right: "44%",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(Flower, {
    color: "var(--lavender-400)",
    size: 40
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 70,
      left: "7%",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(LeafSprig, {
    color: "var(--green-400)",
    size: 54
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-20) var(--space-6) var(--space-24)",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      background: "var(--lavender-100)",
      color: "var(--lavender-700)",
      fontWeight: 700,
      fontSize: "var(--text-sm)",
      padding: "7px 14px",
      borderRadius: "var(--radius-pill)",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 20A7 7 0 0 1 4 13c0-5 3-9 9-11 0 6-1 9-2 11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 20c0-4 2-8 6-10"
  })), "Neurodiversity-affirming pediatric OT \xB7 Middle Tennessee"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-5xl)",
      lineHeight: 1.08,
      margin: "0 0 var(--space-3)",
      position: "relative"
    }
  }, "Helping kids grow, one", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: -6,
      right: -6,
      bottom: 10,
      height: "0.34em",
      background: "var(--mint-200)",
      borderRadius: "var(--radius-pill)",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      zIndex: 1
    }
  }, "playful"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -16,
      right: -24,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Flower, {
    color: "var(--warning)",
    center: "var(--green-600)",
    size: 30
  }))), " ", "step at a time."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Curl, {
    color: "var(--lavender-400)",
    width: 130,
    height: 30
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--ink-600)",
      maxWidth: 520,
      margin: "0 0 var(--space-8)",
      lineHeight: 1.6
    }
  }, "Child-led, strengths-based occupational therapy for kids across Middle Tennessee, in your home, your community, our Murfreesboro office, or by telehealth. We meet every child where they are."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    as: "a",
    href: CALENDLY,
    target: "_blank",
    rel: "noopener"
  }, "Book a free consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    as: "a",
    href: "#services"
  }, "Explore services"), /*#__PURE__*/React.createElement(LeafSprig, {
    color: "var(--green-400)",
    size: 30,
    style: {
      marginLeft: 2
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-8)",
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    v: "0\u201318",
    l: "Ages we serve"
  }), /*#__PURE__*/React.createElement(Stat, {
    v: "DIR",
    l: "Floortime certified"
  }), /*#__PURE__*/React.createElement(Stat, {
    v: "TN",
    l: "Telehealth statewide"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateRows: "1.3fr 1fr",
      gap: "var(--space-4)",
      height: 520,
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(CPLeafPanel, {
    caption: "Child-led play",
    tint: "mint"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(CPLeafPanel, {
    caption: "In-home therapy",
    tint: "lavender"
  }), /*#__PURE__*/React.createElement(CPLeafPanel, {
    caption: "Meaningful moments",
    tint: "green"
  })))));
}
function Stat({
  v,
  l
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--text-3xl)",
      color: "var(--green-600)",
      lineHeight: 1
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--ink-600)",
      marginTop: 4
    }
  }, l));
}
Object.assign(window, {
  CPHero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// Cultivate Play — website nav. Exposes window.CPNav.
const {
  useState
} = React;
const NS = window.CultivatePlayDesignSystem_d72bbd;
const CALENDLY = "https://calendly.com/alyssaengel-cultivate-play/30min";
function CPNav({
  onBook
}) {
  const {
    Button
  } = NS;
  const links = ["Services", "Our approach", "Team", "FAQ", "Contact"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "rgba(251,250,246,0.85)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--ink-100)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      height: 76,
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      padding: "0 var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.png",
    alt: "Cultivate Play",
    style: {
      height: 44
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      marginLeft: "auto"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#" + l.split(" ")[0].toLowerCase(),
    style: {
      color: "var(--ink-700)",
      fontWeight: 700,
      fontSize: "var(--text-base)"
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    as: "a",
    href: CALENDLY,
    target: "_blank",
    rel: "noopener"
  }, "Book a free consultation")));
}
Object.assign(window, {
  CPNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Cultivate Play — services + approach. Exposes window.CPServices, window.CPApproach.
const NSs = window.CultivatePlayDesignSystem_d72bbd;
const leaf = p => /*#__PURE__*/React.createElement("svg", _extends({
  width: "22",
  height: "22",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, p), /*#__PURE__*/React.createElement("path", {
  d: "M11 20A7 7 0 0 1 4 13c0-5 3-9 9-11 0 6-1 9-2 11"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 20c0-4 2-8 6-10"
}));
const hand = p => /*#__PURE__*/React.createElement("svg", _extends({
  width: "22",
  height: "22",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, p), /*#__PURE__*/React.createElement("path", {
  d: "M18 11V6a2 2 0 0 0-4 0M14 10V4a2 2 0 0 0-4 0v2M10 10.5V6a2 2 0 0 0-4 0v8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
}));
const chat = p => /*#__PURE__*/React.createElement("svg", _extends({
  width: "22",
  height: "22",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, p), /*#__PURE__*/React.createElement("path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
}));
function CPServices() {
  const {
    Card,
    Badge,
    Button
  } = NSs;
  const Noop = () => null;
  const {
    Blob = Noop,
    LeafSprig = Noop,
    Sprout = Noop,
    Vine = Noop
  } = NSs;
  const {
    CPEyebrow
  } = window;
  const items = [{
    icon: hand,
    tint: "green",
    age: "Ages 0–18",
    title: "Occupational Therapy",
    text: "Neurodiversity-affirming, strengths-based OT in your home, your community, or our office, turning your child's interests into meaningful growth."
  }, {
    icon: leaf,
    tint: "lavender",
    age: "Ages 0–18",
    title: "DIR Floortime",
    text: "A developmental, relationship-based approach woven into therapy, plus parent coaching so you can use Floortime at home."
  }, {
    icon: chat,
    tint: "mint",
    age: "For teams & orgs",
    title: "Training & Education",
    text: "Coaching and workshops on sensory processing, neurodiversity, ADHD, executive functioning and more, for schools, daycares, and organizations."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      background: "var(--surface-page)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 30,
      right: "3%",
      opacity: 0.85,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(Vine, {
    color: "var(--green-300)",
    size: 130,
    flip: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-24) var(--space-6)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      marginBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(CPEyebrow, null, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-4xl)",
      margin: "0 0 var(--space-4)",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, "Care that grows with your child ", /*#__PURE__*/React.createElement(Sprout, {
    size: 38
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--ink-600)",
      lineHeight: 1.6
    }
  }, "Neurodiversity-affirming occupational therapy across Rutherford County, with telehealth available statewide.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)"
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.title,
    interactive: true
  }, /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginBottom: "var(--space-4)",
      width: 60,
      height: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: -6,
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement(Blob, {
    color: it.tint === "lavender" ? "var(--lavender-200)" : it.tint === "green" ? "var(--green-200)" : "var(--mint-200)",
    size: 72
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 52,
      height: 52,
      borderRadius: "var(--radius-lg)",
      background: it.tint === "lavender" ? "var(--lavender-100)" : it.tint === "green" ? "var(--green-100)" : "var(--mint-100)",
      color: it.tint === "lavender" ? "var(--lavender-600)" : "var(--green-600)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, it.icon())), /*#__PURE__*/React.createElement(Badge, {
    color: it.tint === "lavender" ? "lavender" : "green",
    style: {
      marginBottom: 10
    }
  }, it.age), /*#__PURE__*/React.createElement(Card.Title, null, it.title), /*#__PURE__*/React.createElement(Card.Text, null, it.text)), /*#__PURE__*/React.createElement(Card.Footer, null, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    trailingIcon: /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    }))
  }, "Learn more")))))));
}
function CPApproach() {
  const {
    CPEyebrow,
    CPLeafPanel
  } = window;
  const Noop = () => null;
  const {
    WavyDivider = Noop,
    Sparkle = Noop
  } = window.CultivatePlayDesignSystem_d72bbd;
  const steps = [{
    n: "01",
    t: "Free phone consult",
    d: "A no-pressure call to talk about your child and see whether we're the right fit."
  }, {
    n: "02",
    t: "Play-based evaluation",
    d: "A relaxed, child-led session to understand your child's strengths and where support helps."
  }, {
    n: "03",
    t: "A plan built on strengths",
    d: "We set goals together, around your family's routines, priorities, and your child's interests."
  }, {
    n: "04",
    t: "Grow together",
    d: "Ongoing sessions at home, in the community, in office, or via telehealth, with progress you can see."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "approach",
    style: {
      background: "var(--green-600)",
      color: "#fff",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -1,
      left: 0,
      right: 0,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(WavyDivider, {
    color: "var(--cream)",
    height: 38
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-24) var(--space-6) var(--space-24)",
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "cp-eyebrow",
    style: {
      color: "var(--green-200)",
      margin: "0 0 var(--space-3)"
    }
  }, "Our approach"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-4xl)",
      color: "#fff",
      margin: "0 0 var(--space-5)"
    }
  }, "Gentle, playful, and built around your child"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "rgba(255,255,255,.82)",
      lineHeight: 1.6,
      marginBottom: "var(--space-8)"
    }
  }, "Every child develops at their own pace. Here's how we turn strengths-based, neurodiversity-affirming care into a plan your family can actually live with."), /*#__PURE__*/React.createElement(CPLeafPanel, {
    caption: "In-home & community",
    tint: "mint",
    style: {
      height: 220,
      borderRadius: "var(--radius-xl)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: "rgba(255,255,255,0.10)",
      border: "1px solid rgba(255,255,255,0.18)",
      borderRadius: "var(--radius-xl)",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--text-2xl)",
      color: "var(--green-200)",
      marginBottom: "var(--space-2)"
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: "#fff",
      fontSize: "var(--text-lg)",
      margin: "0 0 var(--space-2)"
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,.78)",
      fontSize: "var(--text-sm)",
      lineHeight: 1.6,
      margin: 0
    }
  }, s.d))))));
}
Object.assign(window, {
  CPServices,
  CPApproach
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Team.jsx
try { (() => {
// Cultivate Play — team + values. Exposes window.CPTeam, window.CPTestimonials.
const NSt = window.CultivatePlayDesignSystem_d72bbd;
function CPTeam() {
  const {
    Button
  } = NSt;
  const {
    CPEyebrow
  } = window;
  const people = [{
    name: "Alyssa Engel",
    title: "OTD, OTR/L, DIR-Proficient",
    role: "Owner & Occupational Therapist · DIR-Proficient",
    tint: "mint",
    bio: "Alyssa started Cultivate Play, PLLC in 2024 in response to a lack of neurodiversity-affirming providers in the Middle Tennessee area. She earned a B.S. in Exercise Science and her Occupational Therapy Doctorate (OTD) from the University of Tennessee, Chattanooga. She has experience across a variety of pediatric populations and specializes in neurodiversity-affirming, strengths-based care, including Autism, ADHD, and PDA (Persistent Drive for Autonomy). Alyssa is also neurodivergent (an ADHDer), so she understands first-hand many of the experiences of neurodivergent children and their families. A certified DIR Floortime provider, she is passionate about home and community-based care that supports authentic, meaningful participation. She lives in Murfreesboro and enjoys crafting, the outdoors, and traveling."
  }, {
    name: "Valerie Navis",
    title: "COTA/L",
    role: "Certified Occupational Therapy Assistant",
    tint: "lavender",
    bio: "Valerie is passionate about helping children grow through play. She believes the best therapy happens when children feel seen, heard, and excited to play. She uses a child-led, play-based approach to meet each child where they are, turning their interests into opportunities for growth. Her goal is to create a supportive, fun environment where kids can build skills, confidence, and independence, and be themselves."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "team",
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "var(--space-24) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      marginBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(CPEyebrow, null, "Meet the team"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-4xl)",
      margin: "0 0 var(--space-4)"
    }
  }, "Kind, credentialed, and on your side"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--ink-600)",
      lineHeight: 1.6
    }
  }, "A small, dedicated practice that treats your family like part of theirs.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-8)",
      maxWidth: 720,
      margin: "0 auto"
    }
  }, people.map(p => /*#__PURE__*/React.createElement(TeamMember, {
    key: p.name,
    person: p,
    Button: Button
  })))));
}
function TeamMember({
  person,
  Button
}) {
  const {
    CPLeafPanel
  } = window;
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200,
      height: 200,
      borderRadius: "50%",
      overflow: "hidden",
      marginBottom: "var(--space-5)",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement(CPLeafPanel, {
    caption: "Add photo",
    tint: person.tint,
    radius: "50%"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-xl)",
      fontWeight: 700,
      margin: "0 0 2px"
    }
  }, person.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--ink-500)",
      fontWeight: 600,
      margin: "0 0 var(--space-3)"
    }
  }, person.title), open && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--ink-600)",
      lineHeight: 1.65,
      margin: "0 0 var(--space-3)",
      maxWidth: 340
    }
  }, person.bio), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setOpen(v => !v),
    trailingIcon: /*#__PURE__*/React.createElement("svg", {
      width: "15",
      height: "15",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        transform: open ? "rotate(180deg)" : "none",
        transition: "transform var(--duration-normal) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "m6 9 6 6 6-6"
    }))
  }, open ? "Read less" : "Read more"));
}

// Renamed in spirit to "values" but kept the export name for the page composition.
function CPTestimonials() {
  const {
    Card
  } = NSt;
  const {
    CPEyebrow
  } = window;
  const values = [{
    t: "Child-led",
    d: "We follow your child's lead and interests. When play feels like theirs, real growth follows.",
    tint: "lavender"
  }, {
    t: "Strengths-based",
    d: "We start with what your child can do and build from there, never from a list of deficits.",
    tint: "default"
  }, {
    t: "Neurodiversity-affirming",
    d: "We honor how your child's brain works. The goal is authentic participation, not masking.",
    tint: "green"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--lavender-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-24) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(CPEyebrow, null, "What we believe"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-4xl)",
      margin: 0
    }
  }, "Care that honors every child")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)"
    }
  }, values.map((c, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    variant: c.tint === "default" ? "default" : c.tint === "green" ? "soft" : "lavender"
  }, /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xl)",
      color: "var(--ink-900)",
      margin: "0 0 var(--space-2)"
    }
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-base)",
      lineHeight: 1.6,
      color: "var(--ink-600)",
      margin: 0
    }
  }, c.d)))))));
}
Object.assign(window, {
  CPTeam,
  CPTestimonials
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Team.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shared.jsx
try { (() => {
// Cultivate Play — shared bits for the website kit. Exposes window.CPLeafPanel, window.CPSection.
const NSx = window.CultivatePlayDesignSystem_d72bbd;

// Playful on-brand image placeholder: tinted panel + big organic blob + scattered
// doodles (sprout, sparkles, dots, sun) + caption. Reads whimsical, not clinical.
function CPLeafPanel({
  caption = "Photo",
  tint = "mint",
  radius = "var(--radius-2xl)",
  style = {},
  aspect
}) {
  const Noop = () => null;
  const {
    Blob = Noop,
    Sprout = Noop,
    Flower = Noop,
    Vine = Noop,
    LeafSprig = Noop
  } = NSx;
  const themes = {
    mint: {
      bg: "var(--mint-100)",
      blob: "var(--green-300)",
      d1: "var(--green-500)",
      d2: "var(--lavender-400)"
    },
    green: {
      bg: "var(--green-100)",
      blob: "var(--green-400)",
      d1: "var(--lavender-500)",
      d2: "var(--warning)"
    },
    lavender: {
      bg: "var(--lavender-100)",
      blob: "var(--lavender-300)",
      d1: "var(--green-500)",
      d2: "var(--warning)"
    }
  };
  const t = themes[tint] || themes.mint;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.bg,
      borderRadius: radius,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      aspectRatio: aspect || undefined,
      width: "100%",
      height: aspect ? undefined : "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "-14%",
      bottom: "-18%",
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement(Blob, {
    color: t.blob,
    size: 260
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 92,
      height: 92,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.72)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement(Sprout, {
    color: t.d1,
    size: 52
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Vine, {
    color: t.d1,
    size: 64
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 18,
      right: 20
    }
  }, /*#__PURE__*/React.createElement(Flower, {
    color: t.d2,
    center: "var(--white)",
    size: 30
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 44,
      left: 18,
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement(LeafSprig, {
    color: t.d1,
    size: 46
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 14,
      left: 16,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--ink-500)",
      opacity: 0.85
    }
  }, caption));
}
function CPSection({
  id,
  bg,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg || "transparent",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-24) var(--space-6)"
    }
  }, children));
}
function CPEyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: "cp-eyebrow",
    style: {
      margin: "0 0 var(--space-3)"
    }
  }, children);
}
Object.assign(window, {
  CPLeafPanel,
  CPSection,
  CPEyebrow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Blob = __ds_scope.Blob;

__ds_ns.Sprout = __ds_scope.Sprout;

__ds_ns.Sparkle = __ds_scope.Sparkle;

__ds_ns.Squiggle = __ds_scope.Squiggle;

__ds_ns.Sun = __ds_scope.Sun;

__ds_ns.DotScatter = __ds_scope.DotScatter;

__ds_ns.Flower = __ds_scope.Flower;

__ds_ns.Vine = __ds_scope.Vine;

__ds_ns.LeafSprig = __ds_scope.LeafSprig;

__ds_ns.Curl = __ds_scope.Curl;

__ds_ns.WavyDivider = __ds_scope.WavyDivider;

__ds_ns.Doodles = __ds_scope.Doodles;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
