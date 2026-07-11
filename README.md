# Croatian Home Care — Website

Dreisprachige (DE / HR / EN) statische Website für den Objektbetreuungs-Service
**Croatian Home Care** in Zadar. Aufgebaut wie die Skipper-Seite: Node-Build,
gemeinsame Vorlage, Ausgabe nach `/dist`.

## Aufbau
- `build.js` — Generator: Layout (Header/Footer/Floating-Buttons/Sprachumschalter) + alle Seiten
- `src/data.js` — Marke, Kontaktdaten, Navigation, UI-Texte (DE/HR/EN), Bildpfade
- `src/content.js` — sämtliche Seiteninhalte je Sprache
- `assets/` — `styles.css`, `script.js`, Bilder (Logo, Zadar-Fotos, Boot)
- `dist/` — **fertige Website** (das kommt aufs Hosting)

## Bauen
```
node build.js
```
Erzeugt `dist/de`, `dist/hr`, `dist/en` (je 8 Seiten) + `dist/index.html`
(Root-Weiterleitung auf Deutsch). Assets werden automatisch nach `dist/assets/` kopiert.

## Veröffentlichen
Einfach den kompletten Inhalt von `dist/` auf das Hosting hochladen. Die Seite ist
statisch – kein Server, keine Datenbank nötig.

## Seiten (je Sprache)
Start · Über Zadar · Über mich · Partner · Kontakt · Impressum · Datenschutz · AGB
Leistungen liegen als Abschnitt auf der Startseite (`index.html#leistungen`).

## Noch offen / To-do
1. **Kontaktformular** an einen Versand anbinden (aktuell nur Frontend-Hinweis).
2. **Rechtstexte** (Impressum/Datenschutz/AGB) sind Entwürfe mit `[…]`-Lücken
   (OIB, Hosting-Anbieter etc.) → vor Veröffentlichung fachkundig prüfen lassen.
3. **Skipper-Link:** zeigt aktuell auf die GitHub-Pages-Version der Skipper-Seite
   (`SKIPPER_URL` in `src/data.js`) → auf die finale Domain umstellen, sobald live.
4. **Zwei Dekobilder** (Region-Block, Insel-Band) sind Stock-Aufnahmen von Unsplash
   (`regionAerial`, `islesView` in `src/data.js`). Am besten durch eigene
   Drohnen-/Insel-Fotos ersetzen (Datei in `assets/` legen und Pfad eintragen).
5. **Instagram** ergänzen, sobald ein eigener Home-Care-Account existiert.
6. **Gegenseitige Verlinkung:** auf der Skipper-Seite (Partner) einen Link zu
   Croatian Home Care setzen.

## Kontaktdaten (im Einsatz)
- Croatian Home Care · Inhaber: Andreas Fruhnert
- Ul. Ante Trumbića 26, 23000 Zadar
- Tel/WhatsApp: +385 99 780 6063 · E-Mail: fruhnert.service.zadar@gmail.com
