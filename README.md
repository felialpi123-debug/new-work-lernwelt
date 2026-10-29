# Digital Organization – Block 2 (Bearbeitungsversion)

Diese ZIP enthält eine eigenständig startbare HTML-Lernwelt mit ausschließlich den Folien aus Block 2.

## Start
ZIP vollständig entpacken, dann `index.html` im Browser öffnen.

## Folien bearbeiten
Die Folieninhalte stehen in `app.js` im Array `const block2Scenes = [...]`.
Jeder Eintrag enthält eine `id`, einen `title` und den HTML-Inhalt `html`.
Die Schätzfragen für Block 2 befinden sich im Array `block2EstimateScenes`.
Designregeln liegen in `styles.css`, Bilder in `assets/block2/`.
Bei Änderungen an JavaScript/HTML bitte eine Sicherheitskopie anlegen.

## Rückgabe
Den gesamten Ordner einschließlich Bilder und CSS erneut als ZIP zurückgeben.
Bitte möglichst die Folien-IDs beibehalten, damit die Änderungen später
in die gemeinsame Lernwelt übernommen werden können.

## Versionshinweis
Grundlage ist die bereitgestellte vollständige Lernwelt v4.7.1.
Die separat bereitgestellte Datei „Block3_Menschenbilder_Update“ ist ein
Teilupdate für Block 3 und wird hier bewusst nicht eingespielt.

## Neu: Alle Modelle in Block 2 → Kapitel 1
Im Menü **BLOCK 2 → Kapitel 1 · Purpose Driven Organization** befindet sich direkt nach der Kapitel-Titelfolie die Seite **Modellübersicht · alle 8 Grafiken**. Die Kacheln führen zu Purpose, Golden Circle, Fink/Moeller, Pink, Mintzberg, Partizipation, Agilitäts-Eisberg und Cynefin. Alle acht Grafiken liegen in `assets/diagrams/`.

**Wichtig zur Veröffentlichung:** Diese ZIP ist ein lokales Bearbeitungspaket. Das Hochladen hier veröffentlicht die Änderungen nicht automatisch auf `new-work-lernwelt.vercel.app`. Die geänderten Dateien müssen in das tatsächlich mit Vercel verbundene Repository/Projekt übernommen und neu deployed werden.


## Kahoot in Block 2 Kapitel 1
- Quiz Teil 1 nach Partizipation (ungefähr 90 Minuten).
- Quiz Teil 2 nach Kapitelabschluss (am Ende der Einheit).
- Beide Buttons öffnen die vom Nutzer bereitgestellten Kahoot-Links in neuem Tab.
