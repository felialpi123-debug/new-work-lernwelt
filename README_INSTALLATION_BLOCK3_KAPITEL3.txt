UPDATE: BLOCK 3 / KAPITEL 3 „NEW LEADERSHIP“
Stand: 30.10.2026

INHALT
- Neue Leadership-Lernfolien innerhalb von Block 3, Kapitel 3
- Zwei eingebettete Videos mit YouTube-Fallback:
  https://www.youtube.com/watch?v=9HZ-Ul6OH8M
  https://www.youtube.com/watch?v=4D_1_1HtZGE
- Führung früher / heute / Zukunft, Leadership vs. Management,
  acht Leadership-Kompetenzen, situative Führung, psychologische
  Sicherheit und Verbindlichkeit, Skillentwicklung, Stromberg-Reflexion,
  persönlicher Entwicklungsplan (lokal gespeichert).
- Bestehende Schätzfragen, Folien zu mittlerem Management / KI und
  die Leadership Inbox bleiben erhalten.

NEUE DARSTELLUNG
Die Inhalte sind in 9 übersichtliche Lernseiten aufgeteilt, die innerhalb
von drei bestehenden Kapitel-3-Folien mit „Weiter“ bzw. Pfeiltasten
nacheinander angezeigt werden. So bleibt die bestehende Navigation stabil,
und Block 2 sowie das Planspiel werden nicht geändert.

DATEIEN HOCHLADEN (GitHub-Repository DER LERNWELT)
1. ZIP entpacken. Nicht die ZIP-Datei selbst hochladen.
2. Im Repository-Hauptverzeichnis ergänzen:
   - block3-new-leadership-20261030.js
   - block3-new-leadership-20261030.css
3. Ordnerstruktur beibehalten und Bild hochladen:
   - assets/block3/redesign-leader.webp
4. index.html ersetzen, WENN du die zuletzt erstellte Version
   „UPDATE_BLOCK3_PLANSPIELE_NEU_AUSGEARBEITET“ verwendest.
   In dieser index.html sind nur zwei neue Verweise hinzugefügt;
   alle bisherigen Inhalte bleiben erhalten.
5. Falls deine index.html seitdem weiter geändert wurde:
   NICHT blind ersetzen. Stattdessen nur diese zwei Zeilen ergänzen:
   Im <head>, NACH den bisherigen Block-3-Styles:
   <link rel="stylesheet" href="block3-new-leadership-20261030.css?v=20261030-k3-v1"/>
   Vor </body>, NACH den bisherigen Block-3-Skripten:
   <script src="block3-new-leadership-20261030.js?v=20261030-k3-v1"></script>
6. Commit changes ausführen, in Vercel das neue Production Deployment
   prüfen und die Lernwelt mit Strg+F5 neu laden.

NICHT ERSETZEN
- app.js
- styles.css
- Dateien von Block 1 oder Block 2
- Vorhandene Block-3-Planspielskripte

HINWEISE ZU DEN VIDEOS
- Videos werden erst beim Öffnen der jeweiligen Lernseite geladen.
- Wenn YouTube die Einbettung blockiert, gibt es jeweils den Link
  „Auf YouTube öffnen“.
- Eine Live-Prüfung der YouTube-Wiedergabe war lokal nicht möglich.

PRÜFUNG
- JavaScript-Syntax mit Node.js geprüft.
- Isolierter Browsertest: 9 Lernseiten, Vor-/Zurück-Navigation,
  beide Video-Einbindungen, bestehende Planspielseiten, keine JS-Fehler.
- Die öffentliche Vercel-Installation wurde nicht verändert.
