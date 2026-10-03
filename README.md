# New Work Lernwelt v3.0

Block 1 bereinigt: Kapitel 6 Agile/Organisationsformen aus Block 1 entfernt; Kapitel 4 kompakter.
Block 2 neu: Digital Organization mit 6 Kapiteln und NovaWorks-Finale.
Inhaltliche Basis Block 2: „Digital Organization and New Work – Skript WS24/25“ von Christoph Witt / Claudia Schwabe.
Repräsentative Originalfolien wurden als lokale visuelle Referenzen übernommen; die Lernwelt selbst bleibt im bestehenden THI/New-Work-Design.

# v2.1 – Navigation vollständig neu aufgebaut

Die alte, über viele Versionen gepatchte Drawer-Navigation wurde ersetzt. Version 2.1 zeigt eine sichtbare Versionsmarke im Menü, enthält Einführung exakt einmal, Kapitel 1–6 und Finale als eigene Akkordeons und verwendet nur einen Scrollbereich. Beim Öffnen eines Kapitels wird ein anderes Kapitel automatisch geschlossen.

# v2.0.3 – definitive Navigationskorrektur

Einführung & Organisation enthält jetzt explizit nur sechs Intro-Seiten. #drawerNav ist der einzige Scroll-Container; Kapitel 6 und Finale sind erreichbar.

# New Work Lernwelt v2.0 – Kapitel 6 + NovaWorks Finale

Kapitel 6 mit Challenges, Mission 07, Ereigniskarte sowie Red-Team- und Executive-Blueprint-Finale.

# New Work Lernwelt v1.9 – Kapitel 5 KI & Zukunft der Arbeit

Vollständiges Kapitel 5 mit 12 Szenen, visueller Dramaturgie und NovaWorks Mission 06. Bestehende v1.8.4-Navigation bleibt erhalten.

# New Work Lernwelt v1.8.4 – Navigation hard fix

Ausgangspunkt war das tatsächlich deployte v1.8.3-Paket. Geprüft wurden app.js, index.html und styles.css.

Änderungen:
- zentrale Szenenliste wird einmal direkt aus `#app > .scene` aufgebaut
- `go()`, `nextScene()` und `prevScene()` erzwingen die Sichtbarkeit inline mit `!important`
- Kapitel-Einträge verwenden direkte `onclick`-Handler
- Vorlesungsmodus hat direkte Weiter-/Zurück-Handler plus Inline-Fallback
- CSS und JS erhalten `?v=1.8.4`, damit Browser/Vercel nicht alte Dateien aus dem Cache mischen
- Startseite kann bei Kapitelwechseln nicht mehr parallel sichtbar bleiben


# New Work Lernwelt v1.8.3 – Home-Overlay-Fix

Behebt die eigentliche Ursache der Navigation: Die Startseite hatte `display:grid!important` und blieb deshalb trotz Szenenwechsel sichtbar. Jetzt wird sie ausschließlich als aktive Szene angezeigt. Kapitel-Sprünge und Vorlesungsmodus zeigen damit nur noch die gewählte Seite.

# New Work Lernwelt v1.8.1 – Online-Navigation repariert

Bugfix: zentrale show()/go()-Navigation ergänzt. Dadurch funktionieren Planspiel, Kapitel-Sprünge, Vorlesungsmodus/Lernmodus, Home sowie Weiter/Zurück wieder auch im Vercel-Deployment.

# New Work Lernwelt v1.8 – Kapitel 4 finalisiert

Kapitel 4 „Zusammenarbeit & Selbstorganisation“ ist vollständig eingebaut. Mission 05 wurde auf den abgestimmten 15-Minuten-Slot verdichtet (12 Min. Design + 3 Min. Ereigniskarte). Das Kapitel endet mit dem Übergang zum KI-Schwerpunkt von Tag 2.

# New Work Lernwelt v0.1

Erster klickbarer Prototyp für „Digital Organization & New Work“.

## Testen
Einfach `index.html` im Browser öffnen.

## Enthalten
- Startseite / Kapitel-Navigation
- Vorlesungsmodus
- Lernmodus
- New-Work-Landkarte
- Aktivierung
- Bergmann-Einordnung und Originalgedanke
- Bedeutungswandel
- Arbeitsdefinition
- fünf Dimensionen
- Spannungsfelder
- Technologie–Organisation–Mensch
- erstes interaktives Entscheidungsspiel
- Übergang zu „Arbeitszeit“

## Online stellen
Die drei Dateien `index.html`, `styles.css` und `app.js` können später gemeinsam in ein GitHub-Repository geladen und über Vercel als statische Website veröffentlicht werden.

## v0.2
- Vorlesungsmodus ist jetzt ein echtes 100vh-Slide-Layout ohne Scrollen.
- Inhalte skalieren im Präsentationsmodus kompakter.
- Pfeiltasten wechseln zwischen Szenen.
- Kleiner „Lernmodus“-Button oben rechts beendet den Präsentationsmodus.

## v0.3 Pilot
- Lernmodus und Vorlesungsmodus stärker getrennt.
- Lernmodus enthält aufklappbare Vertiefungen und Quellenhinweise.
- Aktivierung „Was gehört für Sie zu New Work?“ ist anklickbar.
- Neues Zuordnungsspiel „Bergmanns Ursprung oder heutige Debatte?“.
- Managemententscheidung bleibt als dritter Interaktionstyp erhalten.
- Fortschrittsanzeige im Vorlesungsmodus.

## v0.4 People & Visuals
- Startseite mit echtem Menschen-/Teamfoto statt abstraktem Platzhalter.
- Aktivierungsseite als 50/50 Editorial-Layout mit Workshopfoto.
- Bergmann-Seite mit Porträt.
- Bedeutungswandel mit historischem Produktionsbild vs. moderner Zusammenarbeit.
- Menschenbilder zusätzlich bei Mensch–Organisation–Technologie und Managemententscheidung im Lernmodus.
- Bilder werden aus öffentlich erreichbaren Webquellen geladen; für die spätere veröffentlichte Version werden wir sie lizenzsauber lokal hosten bzw. durch freigegebene Assets ersetzen.

## v0.5 – mehr Menschen im Vorlesungsmodus
- Bergmanns Drei-Bausteine-Seite erhält ein großes Menschen-/Workshopmotiv.
- Fünf-Dimensionen-Seite erhält ein großes Teamfoto.
- Karten wurden dafür kompakter angeordnet, ohne Scrollen im Vorlesungsmodus.
- Menschenbilder sind jetzt nicht nur auf einzelnen Spezialseiten, sondern sichtbar in der laufenden Vorlesungsdramaturgie.

## v0.6 – Bildfehler behoben
Die Ursache war ein JavaScript-Reihenfolgefehler: Die Bild-Layouts wurden gesucht, bevor die Seiten ihre `data-index`-Attribute erhalten hatten. Dadurch wurden die Bildbereiche gar nicht eingebaut. Die Seitensuche greift jetzt direkt auf die bereits gerenderten Scenes zu.

## v0.7 – Modul-Einstieg
Vor Kapitel 1 wurden sechs Einführungsseiten ergänzt:
1. Willkommen / Modulauftakt
2. Dozierende: Felicitas Albrecht und Christoph Witt
3. Modulaufbau mit Block 1 New Work und Block 2 New Business Models
4. Vorlesungstermine WS 2026/27 (DB5, G107)
5. Arbeitsweise im Modul
6. Nutzung der Lernwelt: Vorlesungs- und Lernmodus

Die inhaltliche Modulstruktur orientiert sich an den vorhandenen New-Work-Unterlagen. Biografische Angaben zu den Dozierenden und eine Prüfungsleistungsfolie wurden bewusst noch nicht erfunden/ergänzt, solange dafür keine eindeutige aktuelle Grundlage vorliegt.

## v0.8 – Navigation
Das Inhaltsverzeichnis ist jetzt hierarchisch aufgebaut:
- MODUL → Modul-Einstieg (aufklappbar)
- KAPITEL 1 → New Work · Grundlagen (aufklappbar)
Die Navigationsfläche selbst ist zusätzlich scrollbar. Künftige Kapitel werden als eigene aufklappbare Oberpunkte ergänzt.

## v0.9 – Blockstruktur + Kapitel 2 Arbeitszeit
Navigation nun dreistufig: MODUL / BLOCK 1 / BLOCK 2, darunter aufklappbare Kapitel.
Kapitel 2 enthält aktuelle deutsche, europäische und internationale Evidenz mit anklickbaren Originalquellen im Lernmodus. Zahlen werden mit Population/Definition und methodischen Einschränkungen gezeigt.

## v1.0 – Quellen & Arbeitsaufträge
- Quellenangaben sind auf zentralen Zahlenfolien auch im Vorlesungsmodus sichtbar.
- Teilzeit 31,9 % vs. 39,9 % ist jetzt ein Rechercheauftrag in Zweiergruppen mit Originalquellen und Kurzpräsentation.
- Missverständliches ≥1:5 ersetzt durch „mind. 1 von 5“.
- ILO-Folie erläutert Datenbasis: 160 Länder, ca. 95 % der globalen Beschäftigung, regionale Abdeckung und Beispiele.
- Arbeitszeitmodelle und Management-Case haben konkrete Gruppengröße, Zeit, Fragestellung, Output und Präsentationsformat.

## v1.1 – NovaWorks Transformation Lab
Eigener Planspiel-Bereich über den Button „Planspiel“:
- Unternehmen: Ausgangslage und Rahmenbedingungen der fiktiven NovaWorks GmbH
- Aufträge: alle Transformationsmissionen gesammelt, aktuelle und zukünftige Kapitel
- Transformationsboard: Entscheidungen der Teams können lokal im Browser festgehalten werden
Die Teilzeit-Vergleichsfolie verrät die Lösung nicht mehr.

## v1.2 – Planspiel-Fix, Musterlösung, Schriftgrößen
- Planspiel-Fix: app.js wird erst nach dem Planspiel-DOM geladen; der Button ist dadurch zuverlässig verdrahtet.
- Zahlenvergleich: Lösung zunächst verborgen, per Button ein-/ausklappbar.
- Hörsaal-Audit: Fließ-/Aufgabentext im Vorlesungsmodus i.d.R. mindestens 16 px, Quellen/Metadaten mindestens 14 px.
- Kleine Spezialtexte (micro, source, Aufgaben, Labels) wurden gezielt angehoben, ohne das No-Scroll-Prinzip grundsätzlich aufzugeben.

## v1.3 – Block 2 Zahlen-Challenge
- Firmenname im Planspiel konsistent auf NovaWorks vereinheitlicht.
- Eigener Bereich in BLOCK 2: fünf Schätzfragen mit vier Antwortoptionen.
- Lösung jeweils erst nach Klick auf „Antwort auflösen“.
- Jede Auflösung enthält „Warum relevant?“ und einen Link zur verwendeten Studie/Originalquelle.
- Datenbasis: WEF Future of Jobs 2025, Deloitte Gen Z & Millennial Survey 2025, Gallup State of the Global Workplace 2026 (Datenjahr 2025).

## v1.4.1 – korrigierter Aufbau
- BLOCK 1 zeigt jetzt sichtbar Kapitel 1, Kapitel 2 und Kapitel 3.
- Kapitel 1 endet mit 5 Schätzfragen zu Arbeitszeit.
- Kapitel 2 endet mit 5 Schätzfragen zu Arbeitsort/Hybrid Work.
- Kapitel 3 enthält Arbeitsort/Hybrid Work inklusive NovaWorks Mission 03.
- BLOCK 2 enthält ausschließlich die separate New-Business-Models-Zahlen-Challenge.

## v1.5 – NovaWorks Mission 04: Design the New Workplace
- Neue 35–40-Minuten-Challenge am Ende von Kapitel 3.
- Ausgangsgrundriss der bestehenden Büroetage für 60 Beschäftigte.
- 100-Punkte-Budget mit zehn Workplace-Bausteinen.
- Gruppen erstellen eine visuelle Darstellung / neuen Grundriss.
- Präsentation 3–5 Minuten pro Gruppe mit Konzept, Regeln, KPIs und Trade-off.
- Ereigniskarte mit 20-Punkte-Nachbesserungsbudget.
- Mission 04 und eigenes Workplace-Design-Feld im Planspiel-Reiter ergänzt.

## v1.6
- Einführung und alle Inhalte von Kapitel 1 sind im Inhaltsverzeichnis direkt anwählbar.
- Home-Button führt jederzeit zur Übersicht.
- Startseite komplett neu gestaltet.
- Planspiel-Aufträge besitzen direkte Sprungbuttons zu den jeweiligen Arbeitsaufträgen.

## v1.7
- Planspiel-Button robust repariert.
- Kapitel 4 Zusammenarbeit & Selbstorganisation ergänzt.
- NovaWorks Mission 05: Operating Model.
