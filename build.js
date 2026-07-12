// ============================================================
//  Croatian Home Care — static site generator
//  Run:  node build.js   ->  outputs to /dist/{de,hr,en}
// ============================================================
const fs = require("fs");
const path = require("path");
const { LANGS, BRAND, CONTACT, SKIPPER_URL, FORM_ENDPOINT, MAP_SRC, IMAGES, PAGES, NAV, UI } = require("./src/data.js");
const { content } = require("./src/content.js");

const DIST = path.join(__dirname, "dist");

// ---------- small helpers / icons ----------
const waIcon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2z"/></svg>`;
const calIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16v16H4z"/><path d="M4 9h16M9 4v16"/></svg>`;
const waText = { de: "Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihren%20Home-Care%20Service.", hr: "Pozdrav%2C%20zanima%20me%20va%C5%A1a%20Home-Care%20usluga.", en: "Hello%2C%20I%27m%20interested%20in%20your%20Home%20Care%20service." };
const waLink = (lang) => `${CONTACT.wa}?text=${waText[lang]}`;

// ---------- layout ----------
function layout(lang, pageKey, main) {
  const ui = UI[lang], nav = NAV[lang], meta = content[lang].meta[pageKey];
  const file = PAGES.find(p => p.key === pageKey).file;
  const navItem = (key, href, extra) =>
    `<li><a href="${href}"${pageKey === key ? ' class="active"' : ''}>${nav[key]}</a></li>`;
  const langSwitch = (cls) => `<div class="lang-switch${cls ? ' ' + cls : ''}">` +
    LANGS.map(l => `<a href="../${l}/${file}"${l === lang ? ' class="active"' : ''}>${l.toUpperCase()}</a>`).join("") + `</div>`;

  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${meta.t}</title>
<meta name="description" content="${meta.d}">
<meta name="robots" content="index,follow">
<meta name="geo.region" content="HR-13"><meta name="geo.placename" content="Zadar">
<meta property="og:type" content="website">
<meta property="og:title" content="${meta.t}">
<meta property="og:description" content="${meta.d}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/styles.css">
</head>
<body>
<header class="site-header">
  <nav class="nav">
    <a class="brand" href="index.html">
      <img src="${IMAGES.logo}" alt="${BRAND.big}">
      <span class="brand-text">${BRAND.big}<small>${BRAND.small}</small></span>
    </a>
    <ul class="nav-links" id="navLinks">
      ${navItem("index", "index.html")}
      ${navItem("leistungen", "index.html#leistungen")}
      ${navItem("ueberZadar", "ueber-zadar.html")}
      ${navItem("ueberMich", "ueber-mich.html")}
      ${navItem("partner", "partner.html")}
      ${navItem("kontakt", "kontakt.html")}
      <li>${langSwitch()}</li>
    </ul>
    <div class="nav-cta">
      ${langSwitch("desktop")}
      <a class="btn btn-primary" href="kontakt.html">${ui.anfrage}</a>
      <button class="hamburger" id="hamburger" aria-label="${ui.menu}"><span></span><span></span><span></span></button>
    </div>
  </nav>
</header>

${main}

<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">
          <img src="${IMAGES.logo}" alt="${BRAND.big}">
          <span class="brand-text" style="color:#fff">${BRAND.big}<small>${BRAND.small}</small></span>
        </div>
        <p style="color:#cfe6e8;max-width:34ch">${ui.footerAbout}</p>
      </div>
      <div>
        <h4>${ui.footerQuick}</h4>
        <a href="index.html">${nav.index}</a>
        <a href="ueber-zadar.html">${nav.ueberZadar}</a>
        <a href="ueber-mich.html">${nav.ueberMich}</a>
        <a href="partner.html">${nav.partner}</a>
        <a href="kontakt.html">${nav.kontakt}</a>
      </div>
      <div>
        <h4>${ui.footerContact}</h4>
        <a href="${CONTACT.phoneHref}">${CONTACT.phone}</a>
        <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>
        <a href="#">${CONTACT.address}</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 ${BRAND.big}. ${ui.rights}</span>
      <span><a href="impressum.html">${ui.impressum}</a> &middot; <a href="datenschutz.html">${ui.datenschutz}</a> &middot; <a href="agb.html">${ui.agb}</a></span>
    </div>
  </div>
</footer>

<div class="floaters">
  <a class="float-btn float-wa" href="${waLink(lang)}" target="_blank" rel="noopener" aria-label="WhatsApp">${waIcon}<span>${ui.wa}</span></a>
  <a class="float-btn float-book" href="kontakt.html" aria-label="${ui.anfrage}">${calIcon}<span>${ui.anfrage}</span></a>
</div>
<script src="../assets/script.js"></script>
</body>
</html>`;
}

// ---------- page: index ----------
function renderIndex(lang) {
  const c = content[lang].index, ui = UI[lang];
  const badges = c.hero.badges.map(b => `<span class="hero-badge">${b}</span>`).join("");
  const cardItems = c.hero.cardItems.map(i => `<li>${i}</li>`).join("");
  const warumCards = c.warum.cards.map(k => `<div class="card"><div class="ic">${k.ic}</div><h3>${k.h}</h3><p>${k.p}</p></div>`).join("");
  const svc = c.leistungen.svc.map(s => `<div class="svc"><div class="ic">${s.ic}</div><h3>${s.h}</h3><ul>${s.items.map(i=>`<li>${i}</li>`).join("")}</ul></div>`).join("");
  const steps = c.ablauf.steps.map(s => `<li><b>${s.b}</b> ${s.p}</li>`).join("");
  const pills = c.region.pills.map(p => `<span class="pill">${p}</span>`).join("");

  const main = `
<section class="hero">
  <img class="hero-bg" src="${IMAGES.zadarDusk}" alt="" style="opacity:.28">
  <div class="container">
    <div>
      <span class="eyebrow">${c.hero.eyebrow}</span>
      <h1>${c.hero.h1}</h1>
      <p class="lead">${c.hero.lead}</p>
      <div class="hero-badges">${badges}</div>
      <div class="hero-actions">
        <a class="btn btn-primary btn-lg" href="#leistungen">${ui.viewServices}</a>
        <a class="btn btn-wa btn-lg" href="${waLink(lang)}" target="_blank" rel="noopener">${waIcon}${ui.wa}</a>
      </div>
    </div>
    <div class="hero-card">
      <h3>${c.hero.cardTitle}</h3>
      <div class="price-big">${c.hero.cardSub}</div>
      <ul>${cardItems}</ul>
      <a class="btn btn-primary" style="margin-top:16px;width:100%;justify-content:center" href="kontakt.html">${ui.anfrageBtn}</a>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="center" style="max-width:640px;margin:0 auto">
      <span class="eyebrow">${c.warum.eyebrow}</span><h2>${c.warum.h2}</h2><p class="lead">${c.warum.lead}</p>
    </div>
    <div class="grid grid-2" style="margin-top:34px">${warumCards}</div>
  </div>
</section>

<section class="scenic" style="padding:0">
  <img src="${IMAGES.zadarDusk}" alt="Zadar">
  <div class="ov"></div>
  <div class="c"><span class="eyebrow" style="color:var(--aqua)">${c.scenicDusk.eyebrow}</span><h2>${c.scenicDusk.h2}</h2><p class="lead">${c.scenicDusk.lead}</p></div>
</section>

<section id="leistungen" class="section-sand">
  <div class="container">
    <div class="center" style="max-width:640px;margin:0 auto">
      <span class="eyebrow">${c.leistungen.eyebrow}</span><h2>${c.leistungen.h2}</h2><p class="lead">${c.leistungen.lead}</p>
    </div>
    <div class="grid grid-3" style="margin-top:34px">${svc}</div>
    <div class="extra-svc"><div class="ic">${c.leistungen.extra.ic}</div><div class="txt"><h3>${c.leistungen.extra.h}</h3><p>${c.leistungen.extra.p}</p></div></div>
    <div class="center" style="margin-top:28px">
      <p class="lead" style="margin-bottom:14px">${c.leistungen.note}</p>
      <a class="btn btn-dark btn-lg" href="kontakt.html">${ui.requestOffer}</a>
    </div>
  </div>
</section>

<section id="ablauf">
  <div class="container split narrow" style="align-items:center">
    <div>
      <span class="eyebrow">${c.ablauf.eyebrow}</span><h2>${c.ablauf.h2}</h2>
      <ol class="itinerary" style="margin-top:22px">${steps}</ol>
    </div>
    <div class="photo-frame" style="aspect-ratio:4/3;position:relative">
      <img src="${IMAGES.zadarAerial}" alt="Zadar"><span class="tag-float">&#128205; Zadar</span>
    </div>
  </div>
</section>

<section id="region" class="section-sand">
  <div class="container split" style="align-items:center">
    <div class="photo-frame" style="aspect-ratio:16/11;position:relative">
      <img src="${IMAGES.regionAerial}" alt="Zadar &amp; Inseln"><span class="tag-float">&#9875; Zadar</span>
    </div>
    <div>
      <span class="eyebrow">${c.region.eyebrow}</span><h2>${c.region.h2}</h2><p>${c.region.p}</p>
      <div class="pill-row">${pills}</div>
      <a class="btn btn-primary" style="margin-top:22px" href="kontakt.html">${ui.anfrageBtn}</a>
    </div>
  </div>
</section>

<section class="scenic" style="padding:0">
  <img src="${IMAGES.islesView}" alt="Inseln">
  <div class="ov"></div>
  <div class="c"><span class="eyebrow" style="color:var(--aqua)">${c.islands.eyebrow}</span><h2>${c.islands.h2}</h2><p class="lead">${c.islands.lead}</p></div>
</section>

<section id="ueber" class="section-tint">
  <div class="container">
    <div class="partner-box">
      <img src="${IMAGES.boatBow}" alt="Skipper &amp; Boat Rent">
      <div class="txt">
        <b style="color:var(--petrol-deep);font-size:1.05rem">${c.partnerBox.title}</b>
        <p style="margin:.3em 0 0;color:var(--muted)">${c.partnerBox.text}</p>
      </div>
      <a class="btn btn-outline" href="${SKIPPER_URL}" target="_blank" rel="noopener">${ui.toSkipper}</a>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="cta-band">
      <span class="eyebrow" style="color:var(--aqua)">${c.cta.eyebrow}</span><h2>${c.cta.h2}</h2><p>${c.cta.p}</p>
      <div class="cta-actions">
        <a class="btn btn-primary btn-lg" href="${CONTACT.phoneHref}">&#128222; ${ui.callBtn}</a>
        <a class="btn btn-wa btn-lg" href="${waLink(lang)}" target="_blank" rel="noopener">${waIcon}${ui.waWrite}</a>
      </div>
    </div>
  </div>
</section>`;
  return layout(lang, "index", main);
}

// ---------- generic page hero ----------
function pageHero(h) {
  return `<section class="page-hero"><div class="container"><span class="eyebrow">${h.eyebrow}</span><h1>${h.h1}</h1><p class="lead">${h.p}</p></div></section>`;
}

// ---------- page: ueber-zadar ----------
function renderUeberZadar(lang) {
  const c = content[lang].ueberZadar, ui = UI[lang];
  const body = c.body.map(b => (b.h ? `<h2>${b.h}</h2>` : "") + `<p>${b.p}</p>`).join("\n");
  const main = `${pageHero(c.hero)}
<section><div class="container split" style="align-items:center;gap:44px">
  <div class="prose" style="max-width:none">${body}</div>
  <div class="photo-frame" style="aspect-ratio:4/5;position:relative"><img src="${IMAGES.zadarAerial}" alt="Zadar"><span class="tag-float">&#128205; Zadar</span></div>
</div></section>
<section class="scenic" style="padding:0"><img src="${IMAGES.zadarDusk}" alt="Zadar"><div class="ov"></div>
  <div class="c"><h2>${c.closing.h2}</h2><p class="lead">${c.closing.p}</p>
  <div style="margin-top:16px"><a class="btn btn-primary btn-lg" href="kontakt.html">${ui.anfrage}</a></div></div></section>`;
  return layout(lang, "ueberZadar", main);
}

// ---------- page: ueber-mich ----------
function renderUeberMich(lang) {
  const c = content[lang].ueberMich, ui = UI[lang];
  const body = c.body.map(b => (b.h ? `<h2>${b.h}</h2>` : "") + `<p>${b.p}</p>`).join("\n");
  const creds = c.creds.map(x => `<div class="item"><b>${x.b}</b><span>${x.s}</span></div>`).join("");
  const main = `${pageHero(c.hero)}
<section><div class="container split" style="align-items:start;gap:44px">
  <div class="prose" style="max-width:none">${body}</div>
  <div style="display:flex;justify-content:center"><div class="photo-frame" style="aspect-ratio:4/5;position:relative;width:100%;max-width:280px"><img src="${IMAGES.portrait}" alt="Andreas Fruhnert" style="object-position:center top"><span class="tag-float">Andreas Fruhnert</span></div></div>
</div></section>
<section class="section-sand"><div class="container">
  <span class="eyebrow">${lang==='de'?'Meine Qualifikationen':lang==='hr'?'Moje kvalifikacije':'My qualifications'}</span>
  <div class="cred">${creds}</div>
</div></section>
<section class="scenic" style="padding:0"><img src="${IMAGES.zadarAerial}" alt="Zadar"><div class="ov"></div>
  <div class="c"><h2>${c.closing.h2}</h2><p class="lead">${c.closing.p}</p>
  <div style="margin-top:16px"><a class="btn btn-primary btn-lg" href="kontakt.html">${ui.anfrage}</a></div></div></section>`;
  return layout(lang, "ueberMich", main);
}

// ---------- page: partner ----------
function renderPartner(lang) {
  const c = content[lang].partner, ui = UI[lang];
  const sections = c.sections.map(sec => {
    const cards = sec.cards.map(card => `<div class="partner-card"><div class="cat">${card.cat}</div><h3>${card.h}</h3><p>${card.p}</p>${card.rate?`<div class="rate">${card.rate}</div>`:''}<a class="btn btn-outline go" href="${card.url}" target="_blank" rel="noopener">${card.h} &rarr;</a></div>`).join("");
    return `<div style="margin-top:34px"><h2 style="margin-bottom:18px">${sec.title}</h2><div class="grid grid-3">${cards}</div></div>`;
  }).join("");
  const main = `${pageHero(c.hero)}
<section><div class="container">${sections}</div></section>
<section class="section-sand"><div class="container">
  <div class="partner-box">
    <img src="${IMAGES.boatBow}" alt="Skipper &amp; Boat Rent">
    <div class="txt"><b style="color:var(--petrol-deep);font-size:1.05rem">${c.skipperBox.title}</b>
    <p style="margin:.3em 0 0;color:var(--muted)">${c.skipperBox.text}</p></div>
    <a class="btn btn-primary" href="${SKIPPER_URL}" target="_blank" rel="noopener">${ui.toSkipper}</a>
  </div>
</div></section>`;
  return layout(lang, "partner", main);
}

// ---------- page: kontakt ----------
function renderKontakt(lang) {
  const c = content[lang].kontakt, ui = UI[lang];
  const main = `${pageHero(c.hero)}
<section><div class="container">
  <div class="split" style="align-items:start">
    <div>
      <div class="contact-info" style="margin-top:4px">
        <div class="contact-item"><div class="ic">&#128222;</div><div><b>${ui.wa} &amp; Telefon</b><a href="${CONTACT.phoneHref}">${CONTACT.phone}</a></div></div>
        <div class="contact-item"><div class="ic">&#9993;&#65039;</div><div><b>E-Mail</b><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></div></div>
        <div class="contact-item"><div class="ic">&#128205;</div><div><b>${lang==='en'?'Address':lang==='hr'?'Adresa':'Adresse'}</b>${CONTACT.address}</div></div>
      </div>
      <div style="margin-top:18px"><a class="btn btn-wa btn-lg" href="${waLink(lang)}" target="_blank" rel="noopener">${waIcon}${ui.waWrite}</a></div>
    </div>
    <form class="form" id="contactForm" action="${FORM_ENDPOINT}" method="POST">
      <label for="n">${ui.formName}</label><input id="n" name="Name" type="text" placeholder="${ui.formNamePh}" required>
      <label for="e">${ui.formEmail}</label><input id="e" name="email" type="email" placeholder="${ui.formEmailPh}" required>
      <label for="o">${ui.formObject}</label><input id="o" name="Objekt" type="text" placeholder="${ui.formObjectPh}">
      <label for="t">${ui.formTopic}</label><select id="t" name="Anliegen">${ui.formTopicOpts.map((o,i)=>`<option${i===0?' value="" selected':''}>${o}</option>`).join("")}</select>
      <label for="m">${ui.formMsg}</label><textarea id="m" name="Nachricht" placeholder="${ui.formMsgPh}"></textarea>
      <input type="hidden" name="_subject" value="Neue Anfrage &ndash; Home Care Website">
      <input type="hidden" name="_template" value="table">
      <input type="hidden" name="_captcha" value="false">
      <button class="btn btn-primary btn-lg" style="width:100%;justify-content:center;margin-top:16px" type="submit">${ui.formSend}</button>
      <p id="formNote" class="notice" style="display:none;margin-top:14px">${ui.formNote}</p>
      <p id="formErr" class="notice" style="display:none;margin-top:14px;background:#fdecea;border-color:#f5c6c2;border-left-color:#e05b4b;color:#8a2c22">${ui.formErr}</p>
    </form>
  </div>
  <div style="margin-top:34px">
    <span class="eyebrow">${ui.mapTitle}</span>
    <div class="map-embed" style="margin-top:12px"><iframe src="${MAP_SRC}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="${ui.mapTitle}"></iframe></div>
  </div>
</div></section>`;
  return layout(lang, "kontakt", main);
}

// ---------- page: legal ----------
function renderLegal(lang, key) {
  const c = content[lang].legal[key];
  const blocks = c.blocks.map(b => `<h2>${b.h}</h2><p>${b.p}</p>`).join("\n");
  const main = `<section class="page-hero"><div class="container"><h1>${c.h1}</h1></div></section>
<section><div class="container"><div class="prose">
  ${blocks}
</div></div></section>`;
  return layout(lang, key, main);
}

// ---------- build ----------
function writeFile(p, html) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, html); }

function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (e.isDirectory()) copyDir(s, d); else fs.copyFileSync(s, d);
  }
}

function build() {
  if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true, force: true });
  // copy assets into /dist so the output folder is self-contained (pages use ../assets/)
  copyDir(path.join(__dirname, "assets"), path.join(DIST, "assets"));
  let count = 0;
  for (const lang of LANGS) {
    const dir = path.join(DIST, lang);
    writeFile(path.join(dir, "index.html"), renderIndex(lang)); count++;
    writeFile(path.join(dir, "ueber-zadar.html"), renderUeberZadar(lang)); count++;
    writeFile(path.join(dir, "ueber-mich.html"), renderUeberMich(lang)); count++;
    writeFile(path.join(dir, "partner.html"), renderPartner(lang)); count++;
    writeFile(path.join(dir, "kontakt.html"), renderKontakt(lang)); count++;
    writeFile(path.join(dir, "impressum.html"), renderLegal(lang, "impressum")); count++;
    writeFile(path.join(dir, "datenschutz.html"), renderLegal(lang, "datenschutz")); count++;
    writeFile(path.join(dir, "agb.html"), renderLegal(lang, "agb")); count++;
  }
  // root redirect -> German
  writeFile(path.join(DIST, "index.html"),
    `<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Croatian Home Care</title>` +
    `<meta http-equiv="refresh" content="0; url=./de/index.html"><link rel="canonical" href="./de/index.html"></head>` +
    `<body><p>Weiter zu <a href="./de/index.html">Croatian Home Care</a></p></body></html>`);
  console.log(`Built ${count} pages (${LANGS.length} languages) + root redirect -> /dist`);
}

build();
