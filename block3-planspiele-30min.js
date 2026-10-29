/* Block 3: five concise 30-minute teaching simulations.
   Loaded AFTER app.js and block3-redesign-20261029.js.
   No change to blocks 1 or 2. Case material only in the simulation panel. */
(function(){
  'use strict';
  if(typeof scenes === 'undefined' || !Array.isArray(scenes)) return;
  const app=document.getElementById('app');
  const panel=document.querySelector('.sim-pane[data-pane="promotion"]');
  if(!app||!panel) return;

  const tasks={
    1:{name:'NovaWorks Skill Gap',topic:'Skill-Lücken schließen',icon:'🧩',photo:'redesign-novaworks.webp',
      intro:'NovaCare soll in zwölf Wochen bei drei Pilotkunden starten. Euer Team entscheidet, wie die nötigen Kompetenzen rechtzeitig verfügbar werden.',
      facts:[
        '<b>Pflichtbedarf:</b> Backend/API Niveau 3 · 8 Kap.; UX Niveau 2 · 5 Kap.; Service Niveau 2 · 5 Kap.; Datenschutz Niveau 3 · 3 Kap.; Prozessdesign Niveau 2 · 5 Kap.; QA Niveau 2 · 4 Kap.',
        '<b>Interne Besetzung:</b> Dina (UX 3 · 5 Kap.), Ada (Service 3 · 7), Finn (Datenschutz 3 · 3), Cem (Prozessdesign 3 · 6), Ben (QA 2 · 5). <b>Backend/API fehlt</b> auf Niveau 3.',
        '<b>Spielregeln:</b> 30 Budgetpunkte. HIRE: 20 Punkte, ab Woche 9, API 3/8 Kap. · PARTNER: 15 Punkte, ab Woche 6, API 3/8 Kap. · TRAIN: 8 Punkte, ab Woche 7, +1 Skillniveau. KI-Priorisierung ist optional.'
      ],
      tasks:['Ordnet die sechs Pflichtaufgaben internen Personen oder einer Maßnahme zu.','Entscheidet, wie ihr die Backend-Lücke schließt, und rechnet die Budgetpunkte.','Benennt ein Risiko und eine konkrete Qualitätskontrolle.'],
      pitch:'Launch ja/nein · Besetzung & Budget · größtes Risiko + Qualitätscheck',
      demo:'Beispiel: Backend/API mit PARTNER (15 Punkte) ab Woche 6; übrige Pflichtaufgaben mit internem Team. Risiko: fehlerhafte Schnittstellenübergabe – durch gemeinsame Abnahmetests absichern.'},
    2:{name:'Generation Clash',topic:'Konflikte ohne Altersklischees lösen',icon:'🤝',photo:'redesign-people.webp',
      intro:'Der NovaCare-Pilot ist sechs Wochen in Verzug. Ihr seid ein internes Beratungsteam und sollt die Zusammenarbeit stabilisieren – ohne die Generationenzugehörigkeit als Erklärung vorauszusetzen.',
      facts:[
        '<b>Projektlage:</b> 18 offene Tickets, 7 von 40 KI-Priorisierungen falsch, zwei Freigaben ungeklärt. Kunden warten auf verbindliche Auskünfte.',
        '<b>Stimmen aus dem Team:</b> Thomas (Service): „Änderungen erreichen uns zu spät.“ Mia (Digital): „Für KI-Vorschläge kenne ich keine Freigaberegel.“ Sabine (Betrieb): „Prioritäten wechseln ohne Entscheidung.“ Daniel (Projektleitung): „Alle dachten, jemand anders gibt frei.“',
        '<b>Rahmen:</b> Keine Neueinstellungen. Das Team kann Freigaben, Abstimmungen und Wissenstransfer sofort neu regeln.'
      ],
      tasks:['Benennt zwei Konfliktursachen und belegt sie mit Aussagen oder Zahlen.','Formuliert zwei klare Teamregeln inklusive Verantwortlicher.','Legt einen KPI für die nächsten vier Wochen fest.'],
      pitch:'2 Ursachen mit Belegen · 2 Teamregeln · 1 KPI',
      demo:'Beispiel: Ein Freigabeverantwortlicher für KI-Tickets; täglicher 10-Minuten-Abgleich. KPI: Anteil fehlpriorisierter KI-Tickets sinkt innerhalb von vier Wochen.'},
    3:{name:'Leadership Inbox',topic:'Unter Zeitdruck richtig priorisieren',icon:'📥',photo:'redesign-leader.webp',
      intro:'Ihr leitet ein hybrides NovaWorks-Team. Drei dringende Nachrichten treffen gleichzeitig ein. Ihr könnt selbst priorisieren und delegieren, aber weder neue Stellen schaffen noch Datenschutzfreigaben allein erteilen.',
      facts:[
        '<b>08:30 · Kundenproblem:</b> Das Portal ist bei zwei Pilotkunden nicht erreichbar. Ein Kunde erwartet innerhalb von 60 Minuten eine Rückmeldung.',
        '<b>08:35 · KI-Risiko:</b> Drei sensible Tickets wurden von einem System möglicherweise falsch priorisiert. Datenschutz und Fachbereich müssen einbezogen werden.',
        '<b>08:40 · Teamüberlastung:</b> Eine Mitarbeiterin meldet deutlich zu viel Arbeit und bittet um Prioritätenklärung vor dem nächsten Meilenstein.'
      ],
      tasks:['Legt die Reihenfolge der ersten drei Schritte fest und begründet sie.','Bestimmt für jeden Schritt eine verantwortliche Rolle.','Schreibt eine kurze Botschaft an Team oder Kunden.'],
      pitch:'Prioritäten 1–3 · Verantwortliche · Kommunikationssatz',
      demo:'Beispiel: Kundenstörung sofort eskalieren und Rückmeldung sichern; KI-Priorisierung bis zur Prüfung stoppen; danach Aufgabenlast neu verteilen. Entscheidungen und Fristen sichtbar dokumentieren.'},
    4:{name:'The Promotion Decision',topic:'Eine faire Beförderung entscheiden',icon:'⚖️',photo:'redesign-care.webp',
      intro:'Vier interne Personen bewerben sich auf eine Teamleitung für digitale Transformation. Ihr seid das Auswahlgremium und sollt nachvollziehbar entscheiden – nicht nach Bauchgefühl.',
      facts:[
        '<b>Rolle & Kriterien:</b> Menschen führen (40 %), Veränderungsprojekte steuern (35 %), Kommunikation & Konflikte lösen (25 %).',
        '<b>Kandidaturen:</b> Thomas: langjährige Vernetzung, Leitung mehrfach vertreten, Teamfeedback durchschnittlich. Sarah: starke Teamfeedbacks, Digitalprojekt erfolgreich, arbeitet 30 Stunden. Daniel: technisch sehr stark, wenig Personalentwicklung, wiederholte Konflikte. Miriam: zwei Transformationen erfolgreich begleitet, Karriereunterbrechung für Weiterbildung.',
        '<b>KI-Hinweis:</b> Ein automatischer Score bevorzugt Thomas wegen längerer Betriebszugehörigkeit. Betriebszugehörigkeit ist aber kein eigenes Bewertungskriterium.'
      ],
      tasks:['Wählt eine Person auf Basis der drei Kriterien und nennt zwei Nachweise.','Erklärt, warum ihr die KI-Empfehlung bestätigt oder zurückweist.','Nennt eine Regel, die die Auswahl fairer macht.'],
      pitch:'Entscheidung & 2 Belege · KI-Kritik · faire Auswahlregel',
      demo:'Es gibt keine zwingende Musterperson. Gute Lösungen begründen die Wahl anhand der Kriterien, gewichten Teilzeit oder Unterbrechung nicht pauschal negativ und hinterfragen den KI-Score.'},
    5:{name:'Build Your Own AI Recruiter',topic:'Einen kritischen KI-Interviewer entwickeln',icon:'🤖',photo:'redesign-career.webp',
      intro:'Entwickelt zu zweit einen Prompt für einen KI-Recruiter. Die KI soll eine echte oder bereitgestellte Stellenanzeige nutzen, kritisch nachfragen und Bewerbende nicht automatisch loben oder einstellen.',
      facts:[
        '<b>Input:</b> Nutzt eine mitgebrachte Stellenanzeige (oder diese Übungsstelle: Junior Project Manager Digital Transformation – Aufgaben: Teamkoordination, KPIs, Stakeholder-Abstimmung; Anforderungen: Struktur, Kommunikation, Datenverständnis).',
        '<b>Pflichtregeln:</b> Der Recruiter stellt Fragen einzeln, fragt bei vagen Antworten konkret nach, fordert Beispiele, bewertet nur Belege und nennt am Ende Stärken sowie zwei Lücken. Keine Benachteiligung wegen persönlicher Merkmale.',
        '<b>Kurztest:</b> Führt drei Interviewfragen mit mindestens einer kritischen Nachfrage durch. Die vollständige Anwendung oder ein längeres Interview sind freiwillige Vertiefung nach dem Seminar.'
      ],
      tasks:['Schreibt einen eigenen Systemprompt mit Rolle, Eingabe, Fragemethode und Bewertungsregel.','Testet den Prompt mit drei Fragen inklusive einer kritischen Nachfrage.','Verbessert eine Schwäche und erklärt, warum der Recruiter nun anspruchsvoller ist.'],
      pitch:'Prompt-Prinzip · 1 kritische Nachfrage · getestete Verbesserung',
      demo:'Eine gute KI fragt z. B. „Welchen konkreten Beitrag haben Sie selbst geleistet, und woran zeigt sich der Erfolg?“ statt eine allgemeine Teamfähigkeitsbehauptung sofort zu akzeptieren. Lebensläufe nur anonymisiert verwenden.'}
  };
  const H=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const stages=[{n:1,t:'Lesen',mins:5,d:'Fall und Rahmenbedingungen verstehen'},{n:2,t:'Entscheiden',mins:15,d:'Die drei Arbeitsfragen beantworten'},{n:3,t:'Präsentation',mins:10,d:'Eine Ergebnisfolie vorbereiten'}];
  const timebar=()=>`<div class="b3q-timebar">${stages.map(s=>`<div><span>${s.mins} MIN</span><strong>${s.t}</strong><small>${s.d}</small></div>`).join('')}</div>`;
  const missions=Object.entries(tasks).map(([ch,g])=>`<article class="mission current b3q-mission" data-b3q-ch="${ch}">
    <header class="b3q-head"><span class="b3q-ch">KAPITEL ${ch}</span><div><h4>${g.icon} ${g.name}</h4><p>${g.topic}</p></div><span class="b3q-duration">30 MIN</span></header>
    <details class="b3q-doc" ${ch==='1'?'open':''}><summary>Fallakte und Arbeitsauftrag öffnen</summary>
      ${timebar()}
      <p class="b3q-intro">${g.intro}</p>
      <h5>1 · Kurzfall (5 Minuten)</h5><div class="b3q-facts">${g.facts.map(v=>`<div>${v}</div>`).join('')}</div>
      <h5>2 · Drei Aufgaben (15 Minuten)</h5><ol class="b3q-questions">${g.tasks.map(q=>`<li>${q}</li>`).join('')}</ol>
      <h5>3 · Eine Präsentationsfolie (10 Minuten)</h5><p class="b3q-pitch"><strong>Auf die Folie:</strong> ${g.pitch}. <br><small>Maximal 1 Folie, 3 Kernpunkte; kurze Vorstellung anschließend im Plenum.</small></p>
      <div class="b3q-workbook" data-b3q-form="${ch}">
        <label>Unsere Entscheidung / Kernaussage<textarea data-b3q-input="decision" rows="2" placeholder="Kurzer Satz mit eurer wichtigsten Entscheidung"></textarea></label>
        <label>Zwei Belege bzw. Maßnahmen<textarea data-b3q-input="evidence" rows="2" placeholder="Was spricht für eure Entscheidung?"></textarea></label>
        <label>Risiko, KPI oder Verbesserung<textarea data-b3q-input="measure" rows="2" placeholder="Was muss abgesichert oder überprüft werden?"></textarea></label>
        <div class="b3q-actions"><button type="button" data-b3q-copy="${ch}">Text für die Folie kopieren</button><span class="b3q-state">Lokal gespeichert</span></div>
      </div>
      <details class="b3q-teacher"><summary>Lehrperson · Lösungs-/Diskussionsimpuls</summary><p>${g.demo}</p></details>
    </details>
  </article>`).join('');
  const list=panel.querySelector('.mission-list');
  if(list)list.innerHTML=missions;
  const intro=panel.querySelector('.sim-intro');
  if(intro)intro.textContent='Fünf kurze Planspiele, jeweils 30 Minuten: 5 Min lesen · 15 Min bearbeiten · 10 Min eine Ergebnisfolie erstellen. Alle Falldaten stehen nur hier – nicht doppelt auf den Vorlesungsfolien.';
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
      const markup=`<section class="scene-inner b3-scene b3q-slide"><div class="b3q-top"><span>BLOCK 3 · KAPITEL ${ch} · KOMPAKT-PLANSPIEL</span><span>30 MIN GESAMT</span></div><h1>${headings[ch][j]}</h1><p class="b3q-lead">${prompts[ch][j]}</p><div class="b3q-hero"><div>${timebar()}<div class="b3q-slideinfo"><b>Die komplette Fallakte steht im Planspielbereich.</b><p>Wählt dort Kapitel ${ch}. Ihr lest die Kurzinfos, löst die drei Fragen und bereitet eine einzige Ergebnisfolie vor.</p><button type="button" data-b3q-open="${ch}">Fallakte & Arbeitsblatt öffnen ↗</button></div></div><figure><img src="assets/block3/${g.photo}" alt="Berufliche Teamarbeit" loading="lazy"><figcaption>${H(g.name)} · 30-Minuten-Format</figcaption></figure></div></section>`;
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
  window.__BLOCK3_PLANSPIELE_30MIN__={active:true,missions:Object.keys(tasks).length,slidesReplaced:replaced,version:'20261029-short-1'};
  console.info('Block 3: 30-minute compact planspiele active',window.__BLOCK3_PLANSPIELE_30MIN__);
})();
