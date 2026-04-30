import React from 'react';

const PrivacyContent = () => {
  return (
    <div style={{ textAlign: 'left', fontSize: '0.95rem' }}>
      <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Privacy & Cookie Policy</p>
      <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>Ultimo aggiornamento: 30 aprile 2026</p>
      
      <p>La presente informativa descrive le modalità di trattamento dei dati personali degli utenti che visitano il sito web <a href="https://marcosavoldi.github.io/teoecampadev/" target="_blank" rel="noreferrer">https://marcosavoldi.github.io/teoecampadev/</a> e che utilizzano i servizi disponibili sul sito, in particolare il modulo di iscrizione alla newsletter e/o di richiesta dei contenuti informativi gratuiti.</p>
      
      <p>La presente informativa è resa ai sensi del Regolamento UE 2016/679, “GDPR”, e della normativa italiana applicabile in materia di protezione dei dati personali.</p>

      <hr style={hrStyle} />

      <h3 style={h3Style}>1. Titolare del trattamento</h3>
      <p>Il Titolare del trattamento è:</p>
      <p><strong>Andrea Campana</strong><br />
      Email di contatto: <a href="mailto:teoecampa@gmail.com">teoecampa@gmail.com</a></p>
      <p>Per qualsiasi richiesta relativa al trattamento dei dati personali è possibile contattare il Titolare all’indirizzo email sopra indicato.</p>

      <hr style={hrStyle} />

      <h3 style={h3Style}>2. Dati personali trattati</h3>
      <p>Attraverso il sito possono essere trattati i seguenti dati personali.</p>
      <p><strong>Dati forniti volontariamente dall’utente</strong><br />
      Quando l’utente compila il modulo presente sul sito, possono essere raccolti:</p>
      <ul style={ulStyle}>
        <li>nome;</li>
        <li>cognome;</li>
        <li>indirizzo email.</li>
      </ul>
      <p>Questi dati sono necessari per permettere l’iscrizione alla newsletter e/o l’invio dei contenuti informativi gratuiti richiesti.</p>
      
      <p><strong>Dati tecnici di navigazione</strong><br />
      Durante la navigazione sul sito possono essere trattati alcuni dati tecnici, come:</p>
      <ul style={ulStyle}>
        <li>indirizzo IP;</li>
        <li>informazioni sul browser e sul dispositivo utilizzato;</li>
        <li>data e ora di accesso;</li>
        <li>dati tecnici relativi alla navigazione.</li>
      </ul>
      <p>Questi dati possono essere trattati dal servizio di hosting utilizzato per il funzionamento tecnico e la sicurezza del sito.</p>

      <hr style={hrStyle} />

      <h3 style={h3Style}>3. Finalità del trattamento</h3>
      <p>I dati personali raccolti tramite il sito sono trattati per le seguenti finalità:</p>
      <ol style={olStyle}>
        <li>invio di contenuti informativi gratuiti richiesti dall’utente tramite il modulo presente sul sito;</li>
        <li>iscrizione alla newsletter, per ricevere comunicazioni informative, aggiornamenti, materiali gratuiti e contenuti relativi alle attività promosse tramite il sito;</li>
        <li>gestione tecnica e sicurezza del sito, compreso il corretto funzionamento delle pagine web e la prevenzione di abusi o accessi non autorizzati;</li>
        <li>adempimento di eventuali obblighi di legge, ove applicabile.</li>
      </ol>

      <hr style={hrStyle} />

      <h3 style={h3Style}>4. Base giuridica del trattamento</h3>
      <p>Il trattamento dei dati personali si basa su:</p>
      <ul style={ulStyle}>
        <li>consenso dell’utente, per l’invio di newsletter, comunicazioni informative e contenuti gratuiti;</li>
        <li>legittimo interesse del Titolare, per garantire il corretto funzionamento e la sicurezza del sito;</li>
        <li>obblighi di legge, ove il trattamento sia necessario per adempiere a disposizioni normative applicabili.</li>
      </ul>
      <p>L’utente può revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento effettuato prima della revoca.</p>

      <hr style={hrStyle} />

      <h3 style={h3Style}>5. Modalità del trattamento</h3>
      <p>Il trattamento dei dati personali avviene con strumenti informatici e telematici, adottando misure tecniche e organizzative adeguate a proteggere i dati da accessi non autorizzati, perdita, uso improprio, divulgazione o modifica.</p>
      <p>I dati non saranno oggetto di diffusione indiscriminata.</p>

      <hr style={hrStyle} />

      <h3 style={h3Style}>6. Servizi di terze parti utilizzati</h3>
      <p><strong>MailerLite</strong><br />
      Per la gestione della newsletter e l’invio delle comunicazioni email, il sito utilizza il servizio MailerLite.</p>
      <p>Quando l’utente compila il modulo di iscrizione, i dati inseriti possono essere trasmessi a MailerLite, che li tratta per conto del Titolare come responsabile esterno del trattamento.</p>
      <p>MailerLite può trattare i dati secondo le proprie misure di sicurezza e secondo quanto previsto dai propri termini e dalla propria documentazione privacy.</p>
      
      <p><strong>GitHub Pages</strong><br />
      Il sito è pubblicato tramite GitHub Pages, servizio utilizzato per l’hosting delle pagine web.</p>
      <p>Durante la visita del sito, GitHub può trattare dati tecnici di navigazione, inclusi gli indirizzi IP dei visitatori, per finalità tecniche, di sicurezza e di funzionamento del servizio.</p>

      <hr style={hrStyle} />

      <h3 style={h3Style}>7. Trasferimento dei dati fuori dallo Spazio Economico Europeo</h3>
      <p>Alcuni servizi utilizzati, come MailerLite e GitHub Pages, potrebbero comportare il trattamento dei dati personali anche al di fuori dello Spazio Economico Europeo.</p>
      <p>In tali casi, il trasferimento avviene sulla base di garanzie adeguate previste dalla normativa applicabile, come decisioni di adeguatezza, clausole contrattuali standard o altri strumenti riconosciuti dal GDPR.</p>

      <hr style={hrStyle} />

      <h3 style={h3Style}>8. Periodo di conservazione dei dati</h3>
      <p>I dati raccolti per l’iscrizione alla newsletter e l’invio di comunicazioni informative saranno conservati fino a revoca del consenso da parte dell’utente o fino alla richiesta di cancellazione.</p>
      <p>L’utente può disiscriversi in qualsiasi momento tramite il link di cancellazione presente nelle comunicazioni ricevute oppure contattando il Titolare all’indirizzo email indicato nella presente informativa.</p>
      <p>I dati tecnici di navigazione sono conservati dai servizi tecnici utilizzati secondo le rispettive policy e per il tempo necessario a garantire sicurezza e funzionamento del sito.</p>

      <hr style={hrStyle} />

      <h3 style={h3Style}>9. Comunicazione dei dati</h3>
      <p>I dati personali potranno essere comunicati a:</p>
      <ul style={ulStyle}>
        <li>fornitori di servizi tecnici necessari al funzionamento del sito;</li>
        <li>fornitori di servizi email/newsletter;</li>
        <li>soggetti autorizzati dal Titolare al trattamento;</li>
        <li>autorità pubbliche, ove richiesto dalla legge.</li>
      </ul>
      <p>I dati non saranno venduti né ceduti a terzi per finalità non dichiarate nella presente informativa.</p>

      <hr style={hrStyle} />

      <h3 style={h3Style}>10. Diritti dell’utente</h3>
      <p>L’utente, nei limiti previsti dalla normativa applicabile, ha diritto di:</p>
      <ul style={ulStyle}>
        <li>accedere ai propri dati personali;</li>
        <li>chiedere la rettifica dei dati inesatti;</li>
        <li>chiedere la cancellazione dei dati;</li>
        <li>chiedere la limitazione del trattamento;</li>
        <li>opporsi al trattamento;</li>
        <li>chiedere la portabilità dei dati;</li>
        <li>revocare il consenso prestato;</li>
        <li>proporre reclamo all’Autorità Garante per la protezione dei dati personali.</li>
      </ul>
      <p>Per esercitare i propri diritti, l’utente può contattare il Titolare all’indirizzo email indicato nella presente informativa.</p>

      <hr style={hrStyle} />

      <h2 style={{...h3Style, fontSize: '1.4rem'}}>Cookie Policy</h2>

      <h3 style={h3Style}>11. Cosa sono i cookie</h3>
      <p>I cookie sono piccoli file di testo che i siti web possono salvare sul dispositivo dell’utente durante la navigazione. Possono essere utilizzati per diverse finalità, ad esempio per garantire il funzionamento del sito, memorizzare preferenze o effettuare attività di analisi e profilazione.</p>

      <hr style={hrStyle} />

      <h3 style={h3Style}>12. Cookie utilizzati da questo sito</h3>
      <p>Allo stato attuale, il sito non utilizza cookie di profilazione, cookie pubblicitari, strumenti di remarketing o sistemi di tracciamento statistico come Google Analytics, Meta Pixel o Google Tag Manager.</p>
      <p>Il sito può utilizzare esclusivamente strumenti tecnici necessari al suo funzionamento e servizi tecnici collegati all’hosting e alla sicurezza.</p>
      <p>Poiché non vengono utilizzati cookie di profilazione o strumenti equivalenti che richiedono consenso, non è necessario mostrare un banner cookie con richiesta di accettazione.</p>

      <hr style={hrStyle} />

      <h3 style={h3Style}>13. Cookie e servizi di terze parti</h3>
      <p>Il sito può utilizzare servizi tecnici di terze parti, tra cui:</p>
      <ul style={ulStyle}>
        <li>GitHub Pages, per l’hosting del sito;</li>
        <li>MailerLite, per la gestione della newsletter e dell’invio delle comunicazioni email.</li>
      </ul>
      <p>Tali servizi possono trattare dati tecnici o dati forniti volontariamente dall’utente secondo le rispettive informative privacy e condizioni di servizio.</p>

      <hr style={hrStyle} />

      <h3 style={h3Style}>14. Modifiche alla presente informativa</h3>
      <p>Il Titolare si riserva il diritto di modificare o aggiornare la presente Privacy & Cookie Policy in qualsiasi momento, anche in seguito a modifiche normative, tecniche o organizzative.</p>
      <p>Gli utenti sono invitati a consultare periodicamente questa pagina per verificare eventuali aggiornamenti.</p>

    </div>
  );
};

const h3Style = {
  marginTop: '25px',
  marginBottom: '10px',
  fontSize: '1.2rem',
  color: '#392F5A',
  fontWeight: 'bold'
};

const hrStyle = {
  margin: '25px 0',
  border: '0',
  borderTop: '1px solid #e0e0e0'
};

const ulStyle = {
  paddingLeft: '20px',
  marginBottom: '15px'
};

const olStyle = {
  paddingLeft: '20px',
  marginBottom: '15px'
};

export default PrivacyContent;
