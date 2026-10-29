/* Block 3: five concise 30-minute teaching simulations.
   Loaded AFTER app.js and block3-redesign-20261029.js.
   No change to blocks 1 or 2. Case material only in the simulation panel. */
(function(){
  'use strict';
  if(typeof scenes === 'undefined' || !Array.isArray(scenes)) return;
  const app=document.getElementById('app');
  const panel=document.querySelector('.sim-pane[data-pane="promotion"]');
  if(!app||!panel) return;

  const tasks={"1":{"name":"NovaWorks · Skill-Budget-Challenge","topic":"Kompetenzen planen statt Stellen besetzen","photo":"redesign-novaworks.webp","icon":"🧩","situation":"NovaWorks will den digitalen Wartungsservice NovaCare in 12 Wochen bei drei Kunden starten. Die Projektleitung hat 30 Budgetpunkte für externe Maßnahmen. Ein Launch ist nur zulässig, wenn alle sechs Pflichtaufgaben mit dem notwendigen Skillniveau und ausreichender Kapazität besetzt sind.","goal":"Erstellt einen realistischen Skill- und Kapazitätsplan und entscheidet: Start in Woche 12 – ja oder nein?","facts":[["Pflichtaufgaben (Niveau / Kapazität)","Backend/API 3 / 8 · UX 2 / 5 · Kundenservice 2 / 5 · Datenschutz 3 / 3 · Prozessdesign 2 / 5 · Test/QA 2 / 4. Niveau 1 = Grundlagen, 2 = selbstständig, 3 = Expert:in. Kapazität = verfügbare Projekteinsatzpunkte, nicht Geld."],["Interne Skillprofile","Ada: Service 3, 7 Kap. · Ben: QA 2, 5 Kap. · Cem: Prozess 3, 6 Kap. · Dina: UX 3, 5 Kap. · Finn: Datenschutz 3, 3 Kap. · Eva: API 2, 4 Kap. Nicht genannte Skills gelten als Niveau 0. Jede Person kann nur ihre eigene Kapazität einsetzen."],["Maßnahmen und Kosten","HIRE: 20 Budgetpunkte, API 3 / 8 Kap., erst ab Woche 9. PARTNER: 15 Punkte, API 3 / 8 Kap., ab Woche 6. TRAIN: 8 Punkte, +1 Niveau bei einer Person, ab Woche 7; Kapazität bleibt gleich. Die interne Arbeit kostet keine Budgetpunkte."],["Risiko und Qualitätsregel","API-Schnittstelle und Datenschutz brauchen vor dem Start einen benannten Abnahmecheck. Die optionale KI-Ticketpriorisierung darf verschoben werden; die sechs Pflichtaufgaben nicht. Budget maximal 30 Punkte."]],"tasks":["Ordnet jeder der sechs Pflichtaufgaben eine Person oder Maßnahme zu. Prüft Niveau und Kapazität – besonders die API-Lücke.","Wählt eine Lösung für die API-Lücke, berechnet das externe Budget und begründet den Zeitpunkt.","Entscheidet über den Launch und benennt eine konkrete Qualitätskontrolle und ein Restrisiko."],"output":["Skill-Besetzung (6 Aufgaben, gern als kleine Tabelle)","Gewählte Maßnahme + Budgetrechnung","Launchentscheidung + Qualitätscheck"],"teacher":"Beispiel: PARTNER deckt API 3/8 ab Woche 6 (15/30 Punkte), übrige Aufgaben intern. TRAIN von Eva erhöht nur das Niveau auf 3, ihre Kapazität bleibt 4 und reicht allein nicht für 8. HIRE kann zeitlich eng werden. Der Launch ist unter Abnahmebedingungen möglich.","transfer":"Skills-based Organization: Warum genügt die Berufsbezeichnung „Entwickler:in“ nicht für die Entscheidung?"},"2":{"name":"Generation Clash · Zusammenarbeit retten","topic":"Stereotype prüfen, Zusammenarbeit gestalten","photo":"redesign-people.webp","icon":"🤝","situation":"Im gemischten NovaCare-Team häufen sich Konflikte. Der Pilot ist sechs Wochen im Rückstand. In Meetings heißt es bereits: „Das liegt an den Generationen.“ Ihr seid ein internes Beratungsteam und sollt ohne Altersklischees eine umsetzbare Lösung entwickeln.","goal":"Findet die zwei wichtigsten belegbaren Ursachen und entwickelt einen Vier-Wochen-Stabilisierungsplan.","facts":[["Projektdaten","18 offene Kunden-Tickets; 7 von 40 KI-Priorisierungen waren falsch; bei zwei Freigaben ist die Zuständigkeit ungeklärt. Neueinstellungen sind ausgeschlossen."],["Aussagen aus dem Team","Thomas (Service): „Änderungen landen erst nach der Kundennachfrage bei uns.“ Mia (Digital): „Bei KI-Vorschlägen weiß niemand, wer final freigibt.“ Sabine (Betrieb): „Jede Woche gelten neue Prioritäten.“ Daniel (Projektleitung): „Wir haben die Freigabe nicht ausdrücklich vergeben.“"],["Eskalation","Ein Kunde fordert bis morgen 12 Uhr eine verbindliche Antwort zu drei kritischen Tickets. Eine automatisch hoch priorisierte Anfrage ist nach Prüfung nicht dringend. Das Team hat nur eine gemeinsame 30-Minuten-Abstimmung pro Tag."],["Entscheidungsspielraum","Ihr dürft Rollen und Freigaben neu festlegen, tägliche Kurzabsprachen einführen und Wissenstransfer organisieren. Keine zusätzlichen Stellen, kein neues IT-System. Ziel: in vier Wochen weniger Fehler und klare Zuständigkeiten."]],"tasks":["Nennt zwei Ursachen und je einen konkreten Beleg. Was ist Fakt – was bloße Generationenzuschreibung?","Legt zwei verbindliche Teamregeln mit verantwortlicher Rolle fest. Reagiert auch auf den Kundenfall.","Definiert einen messbaren KPI und einen Checktermin nach vier Wochen."],"output":["2 Ursachen + Belege","2 Teamregeln + Zuständigkeit","KPI + Vier-Wochen-Check"],"teacher":"Möglich: KI-Prioritäten nur nach menschlicher Freigabe, klare Ticket-Verantwortung, täglicher 10-Minuten-Abgleich, gemeinsamer Statuskanal. KPI: Anteil falscher KI-Priorisierungen von 7/40 senken; offene Tickets und ungeklärte Freigaben wöchentlich prüfen. Generationenetiketten erklären keine Prozesslücke.","transfer":"Generationenforschung: Welche Annahmen über Alter, Lebensphase und Arbeitsstil sind in diesem Fall empirisch nicht belegt?"},"3":{"name":"Leadership Inbox · Der kritische Vormittag","topic":"Priorisieren, delegieren und transparent führen","photo":"redesign-leader.webp","icon":"📥","situation":"Ihr führt ein hybrides Team mit acht Mitarbeitenden. Um 8:30 Uhr treffen drei kritische Meldungen ein. In 45 Minuten beginnt ein Leitungstermin. Ihr dürft Aufgaben delegieren, Kunden informieren und technische Prüfungen anstoßen – aber keine Datenschutzfreigabe allein erteilen.","goal":"Entwickelt einen ersten 60-Minuten-Aktionsplan und zeigt, wie moderne Führung unter Druck funktioniert.","facts":[["08:30 · Ausfall","Das NovaCare-Portal ist bei zwei Pilotkunden nicht erreichbar. Ein Kunde verlangt bis 9:30 Uhr eine belastbare Rückmeldung. Ben (QA) und Dina (UX) sind verfügbar; das IT-Betriebsteam kann innerhalb von 15 Minuten zugeschaltet werden."],["08:35 · KI-Risiko","Drei sensible Tickets wurden möglicherweise falsch priorisiert. Finn (Datenschutz) ist bis 9:00 Uhr in einem Termin; Eva (KI) ist erreichbar. Automatische Priorisierung kann vorübergehend deaktiviert werden."],["08:40 · Überlastung","Ada (Service) meldet 14 offene Rückfragen und bittet um Priorisierung. Sie ist allein im Kundenkontakt. Cem (Prozesse) könnte zwei Stunden unterstützen, wenn eine andere Aufgabe verschoben wird."],["Führungsrahmen","Ihr habt 60 Minuten für Sofortmaßnahmen. Sicherheit und Kundenkommunikation sind verbindlich. Entscheidet, was ihr selbst übernehmt, was ihr delegiert und was ihr ausdrücklich vertagt."]],"tasks":["Priorisiert die ersten drei Maßnahmen mit Uhrzeit und begründet die Reihenfolge.","Weist jeder Maßnahme eine verantwortliche Person zu und nennt eine Eskalationsgrenze.","Formuliert eine konkrete Kunden- oder Teamnachricht (max. 3 Sätze)."],"output":["Prioritäten 1–3 mit Zeiten","Verantwortliche + Eskalation","Kommunikationsbeispiel"],"teacher":"Möglich: 08:30 IT-Störung an Betrieb/QA, Kunde bis 09:00 Status; KI-Priorisierung stoppen und Eva/Finn prüfen lassen; Ada entlasten und Aufgaben mit Cem priorisieren. Gute Führung bedeutet nicht, alles selbst zu tun, sondern Verantwortung, Fristen und Kommunikation zu klären.","transfer":"New Leadership: Wo zeigt sich Empowerment, wo braucht es klare Führung und Kontrolle?"},"4":{"name":"Promotion Decision · Faire Auswahl","topic":"Kompetenzen bewerten und KI-Bias erkennen","photo":"redesign-care.webp","icon":"⚖️","situation":"NovaWorks besetzt eine Teamleitung „Digitale Transformation“. Vier interne Personen bewerben sich. Eine KI empfiehlt Thomas. Ihr seid das Auswahlgremium und müsst die Entscheidung transparent und anhand vorher festgelegter Kriterien treffen.","goal":"Wählt nachvollziehbar eine Person oder fordert gezielt fehlende Evidenz nach – ohne Präsenz-, Teilzeit- oder Ähnlichkeitsbias.","facts":[["Stelle und Gewichtung","Menschen führen 40 % · Transformationsprojekte steuern 35 % · Kommunikation/Konflikte lösen 25 %. Die Rolle kann grundsätzlich auch in einem geeigneten Teilzeitmodell ausgeübt werden."],["Thomas und Sarah","Thomas: 12 Jahre Betriebszugehörigkeit, zweimal Vertretung der Leitung; Teamfeedback 3/5, Projektergebnis 3/5. Sarah: erfolgreiches Digitalprojekt, Teamfeedback 5/5, Projektergebnis 4/5; arbeitet 30 Stunden."],["Daniel und Miriam","Daniel: technisches Fachwissen 5/5, Projektsteuerung 3/5, Teamfeedback 2/5; dokumentierte Konflikte. Miriam: zwei Transformationen erfolgreich begleitet, Projektsteuerung 5/5, Teamfeedback 4/5; Karriereunterbrechung für Weiterbildung."],["KI-Hinweis und Datenlücke","Die KI gewichtet Betriebszugehörigkeit und Präsenz stark – beides steht nicht in den Auswahlkriterien. Die Teamfeedbacks sind nicht standardisiert erhoben. Ihr könnt eine strukturierte Führungsfallfrage als zusätzliche Evidenz verlangen."]],"tasks":["Legt eure Favoritin/e euren Favoriten anhand der drei gewichteten Kriterien fest; nennt zwei Belege und eine offene Frage.","Prüft die KI-Empfehlung kritisch: Welche Merkmale sind sachfremd und welche Daten unsicher?","Formuliert zwei faire Verfahrensregeln für die endgültige Auswahl."],"output":["Vorläufige Entscheidung + 2 Belege","KI-Audit + Datenlücke","2 faire Auswahlregeln"],"teacher":"Sarah oder Miriam sind gut begründbar; es gibt keine zwingende Musterperson. Kriterien müssen vorab feststehen, gleiche Fragen und Nachweise gelten für alle, Teilzeit und Karriereunterbrechungen sind keine automatischen Nachteile. Der KI-Score ist kein Ersatz für eine nachvollziehbare Entscheidung.","transfer":"Frauen in Führung / Broken Rung: Wie können Präsenznormen und unstrukturierte Bewertungen Karrierechancen verzerren?"},"5":{"name":"Build Your Own AI Recruiter · Interviewlabor","topic":"Berufsstart, Prompt Engineering und kritische Selbstreflexion","photo":"redesign-career.webp","icon":"🤖","situation":"Ihr wollt euch auf echte Bewerbungsgespräche vorbereiten. Entwickelt in einer KI eurer Wahl einen anspruchsvollen Interviewer für eine konkrete Stellenanzeige. Die KI darf nicht vorschnell loben oder euch automatisch einstellen. Ihr arbeitet zu zweit; echte personenbezogene Daten werden nicht hochgeladen.","goal":"Erstellt einen wiederverwendbaren Prompt, testet ihn mit einer Probeantwort und verbessert die Qualität des Feedbacks.","facts":[["Stellenanzeige","Verwendet eine echte Stellenanzeige (Text ohne personenbezogene Daten). Falls keine vorliegt: Junior Project Manager Digital Transformation; Aufgaben: Termine/Stakeholder koordinieren, KPIs auswerten, Workshops moderieren; Anforderungen: Struktur, Kommunikation, Datenverständnis, Umgang mit Konflikten."],["Anforderungen an euren Recruiter","Der Recruiter analysiert die Anzeige, identifiziert drei relevante Kompetenzen, stellt Fragen einzeln, verlangt STAR-Beispiele (Situation, Aufgabe, Handlung, Ergebnis), fragt kritisch nach und unterscheidet Behauptung von Nachweis."],["Faire Bewertung","Am Ende gibt es Feedback pro Kompetenz: 0 = kein Beleg, 1 = teilweise, 2 = überzeugend; dazu zwei Entwicklungsfelder. Keine Bewertung von Alter, Geschlecht, Herkunft, Foto oder anderen irrelevanten Merkmalen. Keine erfundene Zusage."],["Mini-Test","Eine Person antwortet bewusst vage: „Ich bin sehr teamfähig und habe schon Projekte organisiert.“ Die andere beobachtet, ob die KI konkret nach eigenem Beitrag, Ergebnis und Konflikten fragt. Maximal drei Interviewfragen im Seminar."]],"tasks":["Erstellt einen eigenen Prompt mit Rolle, Stellenbezug, Interviewregeln und Bewertungsraster.","Testet drei Fragen und mindestens eine kritische Nachfrage mit einer bewusst vagen Antwort.","Überarbeitet den Prompt anhand einer beobachteten Schwäche. Zeigt Vorher/Nachher."],"output":["Prompt-Kern (3–5 Regeln)","Testfrage + kritische Nachfrage","Verbesserung + Nutzen fürs echte Interview"],"teacher":"Guter Prompt fordert belegbare Beispiele, stellt Fragen einzeln, bewertet nachvollziehbar und gibt kein unverdientes positives Feedback. Test: „Welchen Beitrag haben Sie persönlich geleistet? Woran lässt sich der Erfolg messen?“ Datenschutz: nur anonymisierte oder fiktive Bewerbungsdaten.","transfer":"Your Future: Welche konkrete Kompetenz könnt ihr im nächsten Bewerbungsgespräch mit einem belastbaren Beispiel belegen?"}};
  const H=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const stages=[{n:1,t:'Lesen',mins:5,d:'Fall und Rahmenbedingungen verstehen'},{n:2,t:'Bearbeiten',mins:17,d:'Kompetenzen anwenden und entscheiden'},{n:3,t:'Präsentation',mins:8,d:'Eine Ergebnisfolie vorbereiten'}];
  const timebar=()=>`<div class="b3q-timebar">${stages.map(s=>`<div><span>${s.mins} MIN</span><strong>${s.t}</strong><small>${s.d}</small></div>`).join('')}</div>`;
  const missions=Object.entries(tasks).map(([ch,g])=>`<article class="mission current b3q-mission" data-b3q-ch="${ch}">
    <header class="b3q-head"><span class="b3q-ch">KAPITEL ${ch}</span><div><h4>${g.icon} ${g.name}</h4><p>${g.topic}</p></div><span class="b3q-duration">30 MIN</span></header>
    <details class="b3q-doc" ${ch==='1'?'open':''}><summary>Fallakte und Arbeitsauftrag öffnen</summary>
      ${timebar()}
      <p class="b3q-intro">${g.situation}</p>
      <h5>1 · Ausgangslage und Material (5 Minuten)</h5><p class="b3q-goal"><b>Euer Auftrag:</b> ${g.goal}</p><div class="b3q-facts">${g.facts.map(([label,desc])=>`<div><b>${label}</b><p>${desc}</p></div>`).join('')}</div>
      <h5>2 · Arbeitsauftrag (17 Minuten)</h5><ol class="b3q-questions">${g.tasks.map(q=>`<li>${q}</li>`).join('')}</ol>
      <h5>3 · Ergebnisfolie vorbereiten (8 Minuten)</h5><p class="b3q-pitch"><strong>Auf die Folie:</strong> <ol class="b3q-pitch-list">${g.output.map(v=>`<li>${v}</li>`).join('')}</ol><small>Eine Folie, maximal drei Kernaussagen. Die Kurzvorstellung erfolgt anschließend im Plenum.</small></p>
      <div class="b3q-workbook" data-b3q-form="${ch}">
        <label>Unsere Entscheidung / Kernaussage<textarea data-b3q-input="decision" rows="2" placeholder="Kurzer Satz mit eurer wichtigsten Entscheidung"></textarea></label>
        <label>Zwei Belege bzw. Maßnahmen<textarea data-b3q-input="evidence" rows="2" placeholder="Was spricht für eure Entscheidung?"></textarea></label>
        <label>Risiko, KPI oder Verbesserung<textarea data-b3q-input="measure" rows="2" placeholder="Was muss abgesichert oder überprüft werden?"></textarea></label>
        <div class="b3q-actions"><button type="button" data-b3q-copy="${ch}">Text für die Folie kopieren</button><span class="b3q-state">Lokal gespeichert</span></div>
      </div>
      <div class="b3q-transfer"><b>Transfer zum Kapitel:</b> ${g.transfer}</div><details class="b3q-teacher"><summary>Lehrperson · Lösungs-/Diskussionsimpuls</summary><p>${g.teacher}</p></details>
    </details>
  </article>`).join('');
  const list=panel.querySelector('.mission-list');
  if(list)list.innerHTML=missions;
  const intro=panel.querySelector('.sim-intro');
  if(intro)intro.textContent='Fünf anwendungsorientierte Planspiele: 5 Min Fall lesen, 17 Min gemeinsam entscheiden, 8 Min eine Ergebnisfolie erstellen. Alle Fallakten und Arbeitsmaterialien stehen ausschließlich hier.';
  const title=panel.querySelector('h3');if(title)title.textContent='Planspiele Block 3 · jeweils 30 Minuten';
  const kicker=panel.querySelector('.sim-kicker');if(kicker)kicker.textContent='BLOCK 3 · KAPITEL 1–5 · KOMPAKTFÄLLE';

  // Replace former bulky teaching-game slides with short navigation and method slides;
  // exclusive source of full case data is the simulation panel.
  const groups={
    1:['b3c1-case','b3c1-requirements','b3c1-profiles','b3c1-rules','b3c1-game','b3c1-debrief'],
    2:['b3x2-briefing','b3x2-cases','b3x2-gameplus'],
    3:['b3c3-inbox','b3c3-inbox-cases','b3c3-score'],
    4:['b3k4-game-start','b3k4-game-profiles','b3k4-game-reveal','b3k4-game-ai','b3k4-game-decision','b3k4-debrief'],
    5:['b3x6-ai-mission','b3x6-ai-build','b3x6-ai-prompt','b3x6-ai-live','b3x6-ai-eval']
  };
  const headings={
    1:['NovaWorks: Könnt ihr den Pilot starten?','Was muss das Team können?','Welche Menschen und Kapazitäten sind verfügbar?','Welche Maßnahmen sind erlaubt?','Jetzt entscheidet ihr','Welche Entscheidung überzeugt?'],
    2:['Generation Clash: Zusammenarbeit retten','Wo liegen die belegbaren Ursachen?','Sind eure Regeln wirksam?'],
    3:['Leadership Inbox: Was kommt zuerst?','Wem übertragt ihr Verantwortung?','Was lernt ihr aus eurer Priorisierung?'],
    4:['The Promotion Decision: Wen wählt ihr?','Welche Profile überzeugen?','Welche Informationen fehlen?','Dürft ihr dem KI-Score vertrauen?','Trefft eure Entscheidung','Wie fair war euer Verfahren?'],
    5:['Build Your Own AI Recruiter','Welche Regeln braucht euer Recruiter?','Euer eigener Prompt','Testet drei echte Fragen','Wie wird die KI kritischer?']
  };
  const prompts={
    1:['Welche Kompetenzen fehlen für NovaCare?','Vergleicht Pflicht-Skills mit Verfügbarkeit.','Denkt an Niveau UND verfügbare Kapazität.','Bewertet Kosten und Zeitpunkt, nicht nur Fachwissen.','Begründet einen realistischen Launchplan.','Was ist das größte verbleibende Risiko?'],
    2:['Welche Probleme sind wirklich belegt?','Trennt Beobachtung von Generationenklischee.','Legt zwei überprüfbare Regeln fest.'],
    3:['Drei Nachrichten, begrenzte Zeit.','Priorisiert und delegiert mit konkreter Frist.','Formuliert eine klare Rückmeldung.'],
    4:['Vier Kandidaturen, klare Kriterien.','Bewertet Kompetenzen statt Ähnlichkeit.','Prüft fehlende Angaben fair.','KI-Empfehlungen sind keine neutralen Tatsachen.','Wählt und begründet eure Entscheidung.','Was würdet ihr im Auswahlprozess verbessern?'],
    5:['Entwerft einen anspruchsvollen Recruiter-Prompt.','Fragen einzeln, kritisch, fair und stellenbezogen.','Definiert die Bewertung vor dem Interview.','Testet nur drei Fragen in dieser Kurzfassung.','Verbessert eine konkrete Schwäche des Prompts.']
  };
  let replaced=0;
  for(const [ch,ids] of Object.entries(groups)){
    const g=tasks[ch];
    ids.forEach((id,j)=>{
      const i=scenes.findIndex(x=>x.id===id);
      if(i<0)return;
      const node=app.children[i];if(!node)return;
      const markup=`<section class="scene-inner b3-scene b3q-slide"><div class="b3q-top"><span>BLOCK 3 · KAPITEL ${ch} · KOMPAKT-PLANSPIEL</span><span>30 MIN GESAMT</span></div><h1>${headings[ch][j]}</h1><p class="b3q-lead">${j===0?g.goal:prompts[ch][j]}</p><div class="b3q-hero"><div>${timebar()}<div class="b3q-slideinfo"><b>${j===0?'Euer Auftrag:': 'Vertiefung und Anwendung:'}</b><p>Wählt dort Kapitel ${ch}. Hier findet ihr die Fallinformationen, konkreten Entscheidungsdaten, drei Arbeitsfragen und die Vorlage für eure Ergebnisfolie.</p><button type="button" data-b3q-open="${ch}">Fallakte & Arbeitsblatt öffnen ↗</button></div></div><figure><img src="assets/block3/${g.photo}" alt="Berufliche Teamarbeit" loading="lazy"><figcaption>${H(g.name)} · 30-Minuten-Format</figcaption></figure></div></section>`;
      const tmp=document.createElement('template');tmp.innerHTML=markup;
      const fresh=tmp.content.firstElementChild;
      const active=node.classList.contains('active');
      node.className=fresh.className+' scene'+(active?' active':'');
      node.innerHTML=fresh.innerHTML;
      node.dataset.index=String(i);
      scenes[i].html=markup;
      replaced++;
    });
  }
  function openGame(ch){
    const panelEl=document.getElementById('simulationPanel');
    if(panelEl&&!panelEl.classList.contains('open'))document.getElementById('simulationBtn')?.click();
    if(!panel.classList.contains('active'))document.querySelector('.sim-tab[data-simtab="promotion"]')?.click();
    const target=panel.querySelector(`[data-b3q-ch="${ch}"]`);
    if(target){target.querySelector('.b3q-doc')?.setAttribute('open','');target.scrollIntoView({block:'nearest'});}
  }
  document.addEventListener('click',e=>{
    const opener=e.target.closest('[data-b3q-open]');
    if(opener){e.preventDefault();openGame(opener.dataset.b3qOpen);}
    const copy=e.target.closest('[data-b3q-copy]');
    if(copy){
      const card=copy.closest('[data-b3q-form]');if(!card)return;
      const ch=copy.dataset.b3qCopy;
      const values=[...card.querySelectorAll('[data-b3q-input]')].map(el=>el.value.trim()||'Noch offen');
      const text=['Kapitel '+ch+' · '+tasks[ch].name,'1. Kernaussage: '+values[0],'2. Belege / Maßnahmen: '+values[1],'3. Risiko / KPI / Verbesserung: '+values[2]].join('\n');
      if(navigator.clipboard?.writeText){navigator.clipboard.writeText(text).then(()=>copy.textContent='Kopiert ✓').catch(()=>copy.textContent='Bitte manuell kopieren');}
      else copy.textContent='Bitte manuell kopieren';
    }
  });
  panel.querySelectorAll('[data-b3q-form]').forEach(form=>{
    const ch=form.dataset.b3qForm;
    form.querySelectorAll('[data-b3q-input]').forEach(field=>{
      const key='b3q30-'+ch+'-'+field.dataset.b3qInput;
      try{field.value=localStorage.getItem(key)||'';}catch(_){}
      field.addEventListener('input',()=>{
        try{localStorage.setItem(key,field.value);}catch(_){}
        const status=form.querySelector('.b3q-state');if(status)status.textContent='Lokal gespeichert';
      });
    });
  });
  window.__BLOCK3_PLANSPIELE_30MIN__={active:true,missions:Object.keys(tasks).length,slidesReplaced:replaced,version:'20261029-balanced-2'};
  console.info('Block 3: 30-minute compact planspiele active',window.__BLOCK3_PLANSPIELE_30MIN__);
})();
