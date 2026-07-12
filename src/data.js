// ============================================================
//  Croatian Home Care — shared data & i18n dictionaries
// ============================================================

const LANGS = ["de", "hr", "en"];

// Live base URL (no trailing slash) — used for canonical, hreflang & sitemap.
const BASE_URL = "https://homecare-zadar.com";

// Google Search Console verification code (from the "HTML tag" method).
// Paste the content value here (just the token) to add the meta tag on every page.
const GSC_VERIFICATION = "";

const BRAND = {
  big: "Croatian Home Care",
  small: "Skipper &amp; Boat Rent &middot; Zadar",
  owner: "Andreas Fruhnert",
};

const CONTACT = {
  phone: "+385 99 780 6063",
  phoneHref: "tel:+385997806063",
  email: "fruhnert.service.zadar@gmail.com",
  address: "Ul. Ante Trumbi&cacute;a 26, 23000 Zadar",
  wa: "https://wa.me/385997806063",
};

// Link to the sister site (Skipper) — live domain (served over http).
const SKIPPER_URL = "http://skipper-zadar.com/";

// Contact form -> email (FormSubmit, free, no backend). AJAX endpoint keeps the
// visitor on the page. First submission triggers a one-time confirmation email.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/fruhnert.service.zadar@gmail.com";

// Google Maps embed (no API key needed) for the contact page.
const MAP_SRC = "https://www.google.com/maps?q=Ul.%20Ante%20Trumbi%C4%87a%2026%2C%2023000%20Zadar&output=embed";

const IMAGES = {
  logo: "../assets/logo.jpg",
  zadarDusk: "../assets/zadar-dusk.jpg",
  zadarAerial: "../assets/zadar-aerial.jpg",
  boatBow: "../assets/boat-bow.jpg",
  portrait: "../assets/andreas.jpg",
  harbor: "../assets/zadar-harbor.jpg",
  night: "../assets/zadar-night.jpg",
  // remote stock (decorative) — swap for own drone shots anytime
  regionAerial: "https://images.unsplash.com/photo-1684228696914-b66b5da26a05?auto=format&fit=crop&w=1400&q=80",
  islesView: "https://images.unsplash.com/photo-1646564752003-29efa5845846?auto=format&fit=crop&w=1800&q=80",
};

// Page keys and their file names
const PAGES = [
  { key: "index",      file: "index.html" },
  { key: "ueberZadar", file: "ueber-zadar.html" },
  { key: "ueberMich",  file: "ueber-mich.html" },
  { key: "partner",    file: "partner.html" },
  { key: "kontakt",    file: "kontakt.html" },
  { key: "impressum",  file: "impressum.html" },
  { key: "datenschutz",file: "datenschutz.html" },
  { key: "agb",        file: "agb.html" },
];

// Navigation labels
const NAV = {
  de: { index: "Start", leistungen: "Leistungen", ueberZadar: "&Uuml;ber Zadar", ueberMich: "&Uuml;ber mich", partner: "Partner", kontakt: "Kontakt" },
  hr: { index: "Po&#269;etna", leistungen: "Usluge", ueberZadar: "O Zadru", ueberMich: "O meni", partner: "Partneri", kontakt: "Kontakt" },
  en: { index: "Home", leistungen: "Services", ueberZadar: "About Zadar", ueberMich: "About me", partner: "Partners", kontakt: "Contact" },
};

// UI strings
const UI = {
  de: {
    anfrage: "Anfrage", anfrageBtn: "Unverbindlich anfragen", callBtn: "Jetzt anrufen",
    wa: "WhatsApp", waWrite: "WhatsApp schreiben", toSkipper: "Zur Skipper-Seite",
    viewServices: "Leistungen ansehen", requestOffer: "Individuelles Angebot anfragen",
    langLabel: "Sprache", menu: "Men&uuml;", backHome: "Zur Startseite",
    footerAbout: "Deutschsprachige Objektbetreuung &amp; Hausverwaltung rund um Zadar und die Inseln &ndash; pers&ouml;nlich, zuverl&auml;ssig, mit eigenem Boot.",
    footerQuick: "Schnellzugriff", footerContact: "Kontakt",
    rights: "Alle Rechte vorbehalten.",
    impressum: "Impressum", datenschutz: "Datenschutz", agb: "AGB",
    formName: "Name", formNamePh: "Ihr Name", formEmail: "E-Mail", formEmailPh: "ihre@email.de",
    formObject: "Wo liegt Ihr Objekt?", formObjectPh: "z.B. Zadar, Ugljan, Dugi Otok &hellip;",
    formTopic: "Wof&uuml;r kontaktieren Sie uns?",
    formTopicOpts: ["Bitte w&auml;hlen &hellip;", "Schl&uuml;sselservice &amp; Objektkontrolle", "G&auml;ste Check-in / Check-out", "Reinigung &amp; W&auml;sche", "Instandhaltung &amp; Reparaturen", "Verwaltung &amp; Beh&ouml;rden", "Insel-Service per Boot", "Komplette Rundum-Betreuung", "Klingelschilder", "Sonstiges"],
    formMsg: "Ihre Nachricht", formMsgPh: "Was d&uuml;rfen wir f&uuml;r Ihr Objekt tun?",
    formSend: "Anfrage senden",
    formNote: "Vielen Dank! Ihre Anfrage ist bei uns eingegangen &ndash; wir melden uns zeitnah bei Ihnen.",
    formErr: "Da ist etwas schiefgelaufen. Bitte melden Sie sich direkt per WhatsApp, Telefon oder E-Mail.",
    mapTitle: "So finden Sie uns",
  },
  hr: {
    anfrage: "Upit", anfrageBtn: "Zatra&#382;ite ponudu", callBtn: "Nazovite odmah",
    wa: "WhatsApp", waWrite: "Poru&#269;ite na WhatsApp", toSkipper: "Na Skipper stranicu",
    viewServices: "Pogledajte usluge", requestOffer: "Zatra&#382;ite individualnu ponudu",
    langLabel: "Jezik", menu: "Izbornik", backHome: "Na po&#269;etnu",
    footerAbout: "Upravljanje nekretninama i ku&#263;epaziteljstvo oko Zadra i na otocima &ndash; osobno, pouzdano, s vlastitim brodom.",
    footerQuick: "Brzi pristup", footerContact: "Kontakt",
    rights: "Sva prava pridr&#382;ana.",
    impressum: "Impressum", datenschutz: "Za&#353;tita podataka", agb: "Uvjeti",
    formName: "Ime", formNamePh: "Va&#353;e ime", formEmail: "E-mail", formEmailPh: "vas@email.com",
    formObject: "Gdje se nalazi va&#353;a nekretnina?", formObjectPh: "npr. Zadar, Ugljan, Dugi otok &hellip;",
    formTopic: "Za&#353;to nas kontaktirate?",
    formTopicOpts: ["Odaberite &hellip;", "Usluga klju&#269;a i kontrola objekta", "Prijava / odjava gostiju", "&#268;i&#353;&#263;enje i rublje", "Odr&#382;avanje i popravci", "Administracija i slu&#382;be", "Oto&#269;na usluga brodom", "Potpuna briga", "Plo&#269;ice za zvono", "Ostalo"],
    formMsg: "Va&#353;a poruka", formMsgPh: "&#352;to mo&#382;emo u&#269;initi za va&#353;u nekretninu?",
    formSend: "Po&#353;alji upit",
    formNote: "Hvala! Va&#353; upit je zaprimljen &ndash; javljamo vam se ubrzo.",
    formErr: "Ne&#353;to je po&#353;lo po zlu. Molimo javite se izravno putem WhatsAppa, telefona ili e-maila.",
    mapTitle: "Gdje se nalazimo",
  },
  en: {
    anfrage: "Enquiry", anfrageBtn: "Request a quote", callBtn: "Call now",
    wa: "WhatsApp", waWrite: "Message on WhatsApp", toSkipper: "To the Skipper site",
    viewServices: "See our services", requestOffer: "Request a tailored quote",
    langLabel: "Language", menu: "Menu", backHome: "Back to home",
    footerAbout: "German-speaking property care &amp; management around Zadar and the islands &ndash; personal, reliable, with our own boat.",
    footerQuick: "Quick links", footerContact: "Contact",
    rights: "All rights reserved.",
    impressum: "Imprint", datenschutz: "Privacy", agb: "Terms",
    formName: "Name", formNamePh: "Your name", formEmail: "Email", formEmailPh: "you@email.com",
    formObject: "Where is your property?", formObjectPh: "e.g. Zadar, Ugljan, Dugi Otok &hellip;",
    formTopic: "What are you contacting us about?",
    formTopicOpts: ["Please select &hellip;", "Key service &amp; property checks", "Guest check-in / check-out", "Cleaning &amp; laundry", "Maintenance &amp; repairs", "Administration &amp; authorities", "Island service by boat", "Complete all-round care", "Doorbell nameplates", "Other"],
    formMsg: "Your message", formMsgPh: "What can we do for your property?",
    formSend: "Send enquiry",
    formNote: "Thank you! Your enquiry has reached us &ndash; we&rsquo;ll get back to you shortly.",
    formErr: "Something went wrong. Please reach us directly via WhatsApp, phone or email.",
    mapTitle: "Where to find us",
  },
};

module.exports = { LANGS, BASE_URL, GSC_VERIFICATION, BRAND, CONTACT, SKIPPER_URL, FORM_ENDPOINT, MAP_SRC, IMAGES, PAGES, NAV, UI };
