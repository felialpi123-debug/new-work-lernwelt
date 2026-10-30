/* New Leadership chapter 3, Block 3 only. Runs after app.js and both existing Block 3 overlays. */
(function(){
 'use strict';
 if(typeof scenes==='undefined'||!Array.isArray(scenes))return;
 const app=document.getElementById('app');if(!app)return;
 const content={"b3c3-start":["<article class=\"b3l-page\"><div class=\"b3l-body nl-slide\"><div class=\"eyebrow\">BLOCK 3 · NEW LEADERSHIP</div><h1>New Leadership – Brauchen wir noch Chefs?</h1><div class=\"b3-layout\"><div><p>Wenn KI Informationen liefert, Teams selbst arbeiten und Konzerne Führungsebenen abbauen: Wofür brauchen wir dann noch Führung?</p><div class=\"challenge-output\">EINSTIEG · Handzeichen: Brauchen wir in 20 Jahren noch klassische Teamleiter?</div></div></div></div></article>","<article class=\"b3l-page\"><div class=\"b3l-body nl-slide\"><div class=\"eyebrow\">BLOCK 3 · NEW LEADERSHIP</div><h1>Führung auf dem Prüfstand: Stromberg</h1><div class=\"b3-layout\"><div><p>Beobachtet die Führungssituation im Video. Welche drei Verhaltensweisen erschweren Zusammenarbeit, Motivation oder Lernen?</p><div id=\"nl-video-stromberg\" class=\"challenge-output\"><strong>Stromberg-Ausschnitt</strong> · Video in der Vorlesung zeigen. Analysiert: Wie wird mit Fehlern, Verantwortung und Mitarbeitenden umgegangen?</div><div class=\"challenge-output\">DISKUSSION · Schlechte Führung ist nicht dasselbe wie jede klassische Führung.</div></div></div></div></article>","<article class=\"b3l-page\"><div class=\"b3l-body nl-slide\"><div class=\"eyebrow\">BLOCK 3 · NEW LEADERSHIP</div><h1>Warum verändert sich Führung?</h1><div class=\"b3-layout\"><div><div class=\"stack-cards\"><b>Wissen ist verteilt</b><b>Hybridarbeit verändert Abstimmung</b><b>KI automatisiert Routinen</b><b>Veränderung wird schneller</b><b>Mehr Schnittstellen und komplexe Probleme</b></div><p>Eine Führungskraft kann nicht jede fachliche Antwort kennen. Sie muss Zusammenarbeit und Entscheidungen ermöglichen.</p></div></div></div></article>","<article class=\"b3l-page\"><div class=\"b3l-body nl-slide\"><div class=\"eyebrow\">BLOCK 3 · NEW LEADERSHIP</div><h1>Schätzfrage: Wie engagiert sind Führungskräfte?</h1><div class=\"b3-layout\"><div><p>Wie groß war laut Gallup der weltweite Anteil engagierter Führungskräfte im Jahr 2025?</p><button type=\"button\" data-nl-reveal>Lösung anzeigen / ausblenden</button><div hidden><div class=\"big-stat\">22 %</div><p>Gallup, State of the Global Workplace 2026. Engagement misst emotionale Bindung und Beteiligung – nicht unmittelbar die Führungsqualität.</p></div><p><small>Quelle: gallup.com/workplace/349484/state-of-the-globalworkplace.aspx</small></p></div></div></div></article>","<article class=\"b3l-page\"><div class=\"b3l-body nl-slide\"><div class=\"eyebrow\">BLOCK 3 · NEW LEADERSHIP</div><h1>Was bedeutet New Leadership?</h1><div class=\"b3-layout\"><div><p><strong>Arbeitsdefinition:</strong> New Leadership beschreibt ein Führungsverständnis, das durch Orientierung, Vertrauen, Befähigung, Beteiligung und klare Verantwortungsräume selbstständiges Arbeiten ermöglicht.</p><p>Kein einheitlich definierter Führungsstil und kein Synonym für Führung ohne Hierarchie.</p></div></div></div></article>"],"b3c3-manager":["<article class=\"b3l-page\"><div class=\"b3l-body nl-slide\"><div class=\"eyebrow\">BLOCK 3 · NEW LEADERSHIP</div><h1>Klassische Führung und New Leadership</h1><div class=\"b3-layout\"><div><div class=\"stack-cards\"><b>Anweisung → Ziel und Handlungsrahmen</b><b>Detailkontrolle → Ergebnis und Feedback</b><b>Wissen beim Chef → Wissen im Team</b><b>Einzelentscheidungen → delegierte Entscheidungsrechte</b><b>Fehlerzuweisung → Lernen und Verantwortung</b></div><p>Idealtypische Gegenüberstellung – gute klassische Führung kann ebenfalls partizipativ sein.</p></div></div></div></article>","<article class=\"b3l-page\"><div class=\"b3l-body nl-slide\"><div class=\"eyebrow\">BLOCK 3 · NEW LEADERSHIP</div><h1>Typische Sätze einer neuen Führungskraft</h1><div class=\"b3-layout\"><div><div class=\"stack-cards\"><b>„Welche Lösung schlägst du vor?“</b><b>„Was brauchst du von mir?“</b><b>„Wer kann das fachlich am besten entscheiden?“</b><b>„Was lernen wir aus dem Fehler?“</b><b>„Du kannst innerhalb dieser Grenzen selbst entscheiden.“</b></div></div></div></div></article>","<article class=\"b3l-page\"><div class=\"b3l-body nl-slide\"><div class=\"eyebrow\">BLOCK 3 · NEW LEADERSHIP</div><h1>Ein Arbeitstag – zwei Führungswelten</h1><div class=\"b3-layout\"><div><div class=\"stack-cards\"><b>08:30 – Aufgaben: Zuteilen oder Team-Prioritäten?</b><b>10:00 – Problem: Freigabe oder eigenständige Lösung?</b><b>11:30 – Entscheidung: Chef oder Fachkompetenz?</b><b>14:00 – Fehler: Schuld oder Ursachenanalyse?</b><b>15:30 – Leistung: Anwesenheit oder Ergebnisse?</b></div><div class=\"challenge-output\">FRAGE · Wo muss die Teamleitung weiterhin selbst entscheiden?</div></div></div></div></article>","<article class=\"b3l-page\"><div class=\"b3l-body nl-slide\"><div class=\"eyebrow\">BLOCK 3 · NEW LEADERSHIP</div><h1>Was ändert sich im täglichen Führungsalltag?</h1><div class=\"b3-layout\"><div><div class=\"stack-cards\"><b>1:1-Gespräche und Coaching</b><b>Delegations- und Eskalationsregeln</b><b>Regelmäßiges Feedback</b><b>Retrospektiven</b><b>Zielklarheit und messbare Ergebnisse</b><b>Psychologische Sicherheit</b></div><p>Methoden sind Hilfsmittel, keine Garantie für erfolgreiche Führung.</p></div></div></div></article>","<article class=\"b3l-page\"><div class=\"b3l-body nl-slide\"><div class=\"eyebrow\">BLOCK 3 · NEW LEADERSHIP</div><h1>Führung verstehen – zweites Video</h1><div class=\"b3-layout\"><div><p>Achtet darauf, welche Aufgaben von Führung auch bei selbstorganisierten Teams unverzichtbar bleiben.</p><div id=\"nl-video-leadership\" class=\"challenge-output\"><div class=\"b3l-video-ratio\"><iframe data-b3l-video=\"https://www.youtube-nocookie.com/embed/9HZ-Ul6OH8M\" title=\"Führung – Video\" loading=\"lazy\" allowfullscreen></iframe></div><a href=\"https://www.youtube.com/watch?v=9HZ-Ul6OH8M\" target=\"_blank\" rel=\"noopener\">Video auf YouTube öffnen ↗</a></div><div class=\"challenge-output\">MERKFRAGE · Welche Aussage im Video würdet ihr unterstützen oder kritisch sehen?</div></div></div></div></article>"],"b3c3-shift":["<article class=\"b3l-page\"><div class=\"b3l-body nl-slide\"><div class=\"eyebrow\">BLOCK 3 · NEW LEADERSHIP</div><h1>Wie entwickelt man sich zum New Leader?</h1><div class=\"b3-layout\"><div><div class=\"stack-cards\"><b>1 · Eigenes Kontrollverhalten reflektieren</b><b>2 · Teamfeedback einholen</b><b>3 · Offene Coachingfragen üben</b><b>4 · Entscheiden und Delegieren trennen</b><b>5 · Neue Routinen testen</b><b>6 · Wirksamkeit und Belastung prüfen</b></div><p>Führung verändert sich durch geübtes Verhalten, nicht nur durch einen neuen Titel.</p></div></div></div></article>","<article class=\"b3l-page\"><div class=\"b3l-body nl-slide\"><div class=\"eyebrow\">BLOCK 3 · NEW LEADERSHIP</div><h1>Wenn Unternehmen Managementebenen abbauen</h1><div class=\"b3-layout\"><div><p>Delayering entfernt hierarchische Zwischenstufen. Es kann Entscheidungswege verkürzen – oder die verbleibenden Führungskräfte überlasten.</p><div class=\"stack-cards\"><b>Modell A · Weniger Chefs, gleiche Freigaben</b><b>Modell B · Weniger Ebenen, echte Entscheidungsrechte im Team</b></div><div class=\"challenge-output\">KERNFRAGE · Wer übernimmt die bisherige Führungsarbeit?</div></div></div></div></article>","<article class=\"b3l-page\"><div class=\"b3l-body nl-slide\"><div class=\"eyebrow\">BLOCK 3 · NEW LEADERSHIP</div><h1>Fallstudie: Bayer unter der Lupe</h1><div class=\"b3-layout\"><div><p><strong>Recherchiert selbstständig.</strong> Ihr bekommt bewusst keine fertigen Antworten und keine vorgegebenen Kennzahlen.</p><ol><li>Was verändert Bayer konkret an seiner Organisation und Führung?</li><li>Ist der Umbau ein Beispiel für New Leadership oder vor allem Kostensenkung? Belegt eure Einschätzung.</li><li>Würdet ihr selbst gerne in dieser Organisation arbeiten? Warum oder warum nicht?</li></ol><div class=\"challenge-output\">3–4 Personen · 20 Minuten Recherche + 10 Minuten Diskussion · Mindestens zwei Quellen notieren. Keine Bayer-Fakten vorab.</div></div></div></div></article>","<article class=\"b3l-page\"><div class=\"b3l-body nl-slide\"><div class=\"eyebrow\">BLOCK 3 · NEW LEADERSHIP</div><h1>Bayer: Ergebnisse diskutieren</h1><div class=\"b3-layout\"><div><div class=\"stack-cards\"><b>Welche konkreten Maßnahmen habt ihr gefunden?</b><b>Welche Aussage ist belegte Tatsache, welche ist Unternehmensversprechen?</b><b>Was könnte für Mitarbeitende besser werden?</b><b>Welche Risiken seht ihr?</b></div><div class=\"challenge-output\">AUSWERTUNG · Jede Gruppe nennt eine Erkenntnis und eine offene Frage.</div></div></div></div></article>","<article class=\"b3l-page\"><div class=\"b3l-body nl-slide\"><div class=\"eyebrow\">BLOCK 3 · NEW LEADERSHIP</div><h1>Fazit: Führung wird neu verteilt</h1><div class=\"b3-layout\"><div><p><strong>New Work</strong> verändert die Zusammenarbeit. <strong>New Leadership</strong> verändert Führungsverhalten. <strong>Flachere Hierarchien</strong> verändern die Verteilung von Entscheidungen.</p><p><strong>Weniger Management ist nicht automatisch bessere Führung.</strong> Entscheidend sind klare Ziele, echte Entscheidungsspielräume, Kompetenz und Verantwortung.</p><div class=\"challenge-output\">ABSCHLUSS · Brauchen wir überhaupt noch Chefs?</div></div></div></div></article>"]};
 const hostIds=Object.keys(content);
 const hosts=new Map();
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 for(const id of hostIds){
   const idx=scenes.findIndex(s=>s.id===id);if(idx<0)continue;
   const node=app.children[idx];if(!node)continue;
   const wasActive=node.classList.contains('active');
   node.className='scene b3l-host'+(wasActive?' active':'');
   node.innerHTML='<div class="b3l-shell"><div class="b3l-pages">'+content[id].map((s,j)=>'<div class="b3l-screen" data-b3l-screen="'+j+'"'+(j?' hidden':'')+'>'+s+'</div>').join('')+'</div><div class="b3l-nav"><div class="b3l-dots">'+content[id].map((_,j)=>'<button type="button" class="b3l-dot" data-b3l-page="'+j+'" aria-label="Lernfolie '+(j+1)+'" aria-current="'+(j===0?'true':'false')+'">'+(j+1)+'</button>').join('')+'</div><span class="b3l-count">1 / '+content[id].length+'</span><div class="b3l-buttons"><button type="button" data-b3l-prev disabled>← Zurück</button><button type="button" data-b3l-next>Weiter →</button></div></div></div>';
   scenes[idx].html=node.innerHTML;
   const titles={'b3c3-start':'New Leadership · Grundlagen & Wandel','b3c3-manager':'New Leadership · Kompetenzen & Teamkultur','b3c3-shift':'New Leadership · Lernen & Transfer'};
   scenes[idx].title=titles[id]||scenes[idx].title;
   document.querySelectorAll('#drawerNav .nav-item[data-go="'+idx+'"]').forEach(b=>b.textContent=scenes[idx].title);
   hosts.set(id,{node,idx,page:0,count:content[id].length});
 }
 function currentHost(){for(const h of hosts.values())if(h.node.classList.contains('active'))return h;return null;}
 function setPage(h,n){
   if(!h)return false;
   const next=Math.max(0,Math.min(h.count-1,n));if(next===h.page&&h.node.querySelector('.b3l-screen:not([hidden])'))return false;
   h.page=next;
   h.node.querySelectorAll('.b3l-screen').forEach((el,i)=>{
     const active=i===next;el.hidden=!active;
     el.querySelectorAll('iframe[data-b3l-video]').forEach(f=>{
       if(active){if(!f.src)f.src=f.dataset.b3lVideo;}
       else if(f.hasAttribute('src'))f.removeAttribute('src');
     });
   });
   h.node.querySelectorAll('.b3l-dot').forEach((b,i)=>b.setAttribute('aria-current',i===next?'true':'false'));
   const prev=h.node.querySelector('[data-b3l-prev]');if(prev)prev.disabled=next===0;
   const nextBtn=h.node.querySelector('[data-b3l-next]');if(nextBtn)nextBtn.textContent=next===h.count-1?'Nächste Vorlesungsfolie →':'Weiter →';
   const count=h.node.querySelector('.b3l-count');if(count)count.textContent=(next+1)+' / '+h.count;
   h.node.scrollTop=0;return true;
 }
 for(const h of hosts.values()){h.page=-1;setPage(h,0);}
 app.addEventListener('click',e=>{
   const h=currentHost();if(!h)return;
   const dot=e.target.closest('[data-b3l-page]');
   if(dot&&h.node.contains(dot)){setPage(h,Number(dot.dataset.b3lPage));return;}
   if(e.target.closest('[data-b3l-prev]')){setPage(h,h.page-1);return;}
   if(e.target.closest('[data-b3l-next]')){
     if(h.page<h.count-1){setPage(h,h.page+1);return;}
     if(typeof window.nextScene==='function')window.nextScene();return;
   }
   const copy=e.target.closest('.b3l-copy');if(copy){
     const s=h.node.querySelector('[data-b3l-skill]')?.value||'';
     const p=h.node.querySelector('[data-b3l-practice]')?.value||'';
     const k=h.node.querySelector('[data-b3l-success]')?.value||'';
     const text=['Mein Leadership-Entwicklungsplan','Kompetenz: '+s,'Übung: '+p,'Erfolgskriterium: '+k].join('\n');
     if(navigator.clipboard?.writeText)navigator.clipboard.writeText(text).then(()=>copy.textContent='Kopiert ✓').catch(()=>copy.textContent='Bitte manuell kopieren');
     else copy.textContent='Bitte manuell kopieren';
   }
 });
 // Capture keyboard / presentation arrows BEFORE the original lecture navigation.
 function intercept(direction,e){
   const h=currentHost();if(!h)return;
   if((direction===1&&h.page<h.count-1)||(direction===-1&&h.page>0)){
     e.preventDefault();e.stopImmediatePropagation();setPage(h,h.page+direction);
   }
 }
 document.addEventListener('keydown',e=>{
   if(e.altKey||e.ctrlKey||e.metaKey)return;
   if(e.target?.closest('textarea,input,select,[contenteditable="true"]'))return;
   if(e.key==='ArrowRight'||e.key==='PageDown')intercept(1,e);
   if(e.key==='ArrowLeft'||e.key==='PageUp')intercept(-1,e);
 },true);
 document.addEventListener('click',e=>{
   if(e.target.closest('#presentationNext'))intercept(1,e);
   if(e.target.closest('#presentationPrev'))intercept(-1,e);
 },true);
 // Stop videos when a chapter 3 host becomes inactive.
 const updateActiveClass=()=>document.body.classList.toggle('b3l-active',!!currentHost());
 const obs=new MutationObserver(()=>{
   updateActiveClass();
   for(const h of hosts.values()){
     if(!h.node.classList.contains('active'))h.node.querySelectorAll('iframe[src]').forEach(f=>f.removeAttribute('src'));
     else h.node.querySelectorAll('.b3l-screen:not([hidden]) iframe[data-b3l-video]').forEach(f=>{if(!f.hasAttribute('src'))f.src=f.dataset.b3lVideo;});
   }
 });
 for(const h of hosts.values())obs.observe(h.node,{attributes:true,attributeFilter:['class']});
 updateActiveClass();
 // Personal practice plan persists only in this browser.
 const planHost=hosts.get('b3c3-shift')?.node;
 if(planHost){planHost.querySelectorAll('[data-b3l-skill],[data-b3l-practice],[data-b3l-success]').forEach(el=>{
   const key='new-leadership-20261030-'+(el.dataset.b3lSkill!==undefined?'skill':el.dataset.b3lPractice!==undefined?'practice':'success');
   try{const saved=localStorage.getItem(key);if(saved!==null)el.value=saved;}catch(_){}
   el.addEventListener('input',()=>{try{localStorage.setItem(key,el.value)}catch(_){}});
 });}
 window.__B3_NEW_LEADERSHIP__={version:'2026-10-30-rebuild',hosts:hosts.size,learningScreens:[...hosts.values()].reduce((s,h)=>s+h.count,0),videos:['9HZ-Ul6OH8M','4D_1_1HtZGE']};
 console.info('Block 3 · New Leadership loaded',window.__B3_NEW_LEADERSHIP__);
})();

document.addEventListener("click",e=>{const b=e.target.closest("[data-nl-reveal]");if(!b)return;const t=b.nextElementSibling;if(t)t.hidden=!t.hidden;});
