# Note

* produzione: github pages e usano la ci per generare
	* (il sito è fatto con jekyll)
	* usano travis per generare

* OPEN GRAPH
  * le proprietà vanno definite nel `_config` del SITO (non del tema!)
  * documentare

* IMPORTANTE per le breadcrumbs
  * il `front-matter` della pagina DEVE includere `parent`
    * x es: le sottopagine di "welcome" devono avere `parent: welcome`
    * le sottopagine di "workshop" (se ce ne sono) devono avere `parent: workshops`
    * DOCUMENTARE nella guida alla creazione di workshop multipli

* PROTIP: added `width` and `height` attributes to icon SVGs to prevent FOUSVG on Firefox B-)

# TODO

* iubenda & google analytics
  * (procedura loro interna per generare id etc: https://gist.github.com/mbeccati/1bd9e562905a90e14d7d88ed3dcea34c)
  * scripts: https://github.com/GrUSP/2020.phpday.it/blob/master/_includes/layout/scripts.html
  * config (site.data.defaults): https://github.com/GrUSP/2020.phpday.it/blob/master/_data/conference.yml 
    * **ocio** la privacy policy url è specificata **due** volte. toglierne una!

## features

* schedule
  * se la schedule è ancora vuota, non generare pagina o generarla parziale?

* conferenze online
  * date: aggiungere `timezone` in `site.config` [doc](https://hexo.io/docs/configuration.html)
  * icone: quelle a destra nella prova di manu
  * home page
    * location non scompare; cambiano le info e l'immagine di background
    * (online) in hero, aggiungere l'ora col fuso orario in chiaro
    * ? il countdown fa già il conto considerando il fuso? 
  * venue diventa WHERE (sempre)!
  * schedule
    * il fuso orario! aggiungerlo all'ora in chiaro se online
    * stamparlo **ovunque** appaiano date

* SCRIVERE README
  * workshop
    * **DOCUMENTARE BENE** l'utilizzo

* togliere da `_data/defaults` i dati che non sono contenuti e spostarli in `_config`?

* https://developer.mozilla.org/en-US/docs/Web/Performance/dns-prefetch
  * (x es link google maps): `- url_to_prefetch = new URL(data.location_maps_url)`


# DONE

* 20200520
  * readme
  * (qualche rioridnatina negli YML dei dati)

* 20200519
  * venue diventa WHERE (sempre)!
  * community partner
    * aggiungere (stampare) NOME sponsor
  * schedule
    * possono esserci talk di lunghezza maggiore (doppia): gestire slot di durata maggiore

* 20200515
  * schedule
    * ripristinati link a talks_speakers
    * corretto layout celle vuote
  * temi
    * completati (manca solo qualche immagine negli asset, in particolare per workshop) e testati

* 20200514
  * schedule
    * METTERE SEMPRE NOME TRACK anche negli extra, perché magari come titolo track si usa il nome della sala
    * ordinare i dati per ora inizio invece che per ordine del file
    * nella stessa track ci possono essere slot vuoti

* 20200512
  * cambiare il logo in footer <- da manu
    * footer background #4e4d4d
  * talks_speakers
    * se c'è una giornata sola, luogo e data in alto a destra del titolo
    * se ci sono più giornate, aggiungere giorno vicino all'orario
  * se c'è una track sola non mettere la track vicino all'orario

* 20200507
  * components/speakers
    * non sono più in ordine alfabetico
  * talks
    * aggiunti diversi tipi di talk (talk normale, keynote, workshop, service)
    * titolo cliccabile = link al talk nello schedule
    * track title nello stesso rigo dell'orario (con icona apposta)
    [ ] schedule: prevedere eventi tipo “PUG MEETING” che vanno in schedule ma non in pagina talk
  * schedule
    * schedule: prevedere keynote e workshop
    * titolo talk cliccabile = link al talk nei talk
    * aggiungere un parametro facoltativo per il tipo di talk (keynote by, workshop by...) da prependere al/ai nome/i speaker(s)
    * in una track ci possono essere "eventi" che non sono né talk né service e insomma si mette solo:
      * ora (of course)
      * titolo (non cliccabile)
      * descrizione facoltativa
    * speaker - schedule: link reciproci tra talk e schedule

* 2020506
  * schema.org:
    * welcome e figlie
    * talks
    * schedule

* 20200505
  * fixes
    [*] home - header: il bottone “buy tickets now” non è allineato a titolo/countdown
    [*] home - ws: link anche dal titolo del ws
    [*] home - form newsletter: solo in home, forse ha senso mettere questo componente più in alto (per es. subito dopo i ws)?
    [*] workshop - pagina sommario: togliere gli sponsor
  * assets
    * logo conference x tema
    * immagini: hero, location, workshop x tema (NB workshop c'è solo rubyday) (la maggior parte sono in "varianti")
    * **css**: page header nel tema (hero, venue, workshop_single)
  * conditional image credits (hero background, venue header, workshop page header)

* 20200430
  * **assets**
    * a special `defaults.sass` file for each conference, with color palette -> commit 0368dc88 - 30/04

* 20200426
  * components
    * _social
      * label "follow us" invece di "follow the conf"
      * manca linkedin
    * cfp
      * il pulsante deve puntare alla pagina call for papers!
      * nella pagina cfp, se la CFP è chiusa deve sparire il pulsante APPLY NOW
    * location
      * DUE pulsanti: uno "read more" (a pagina location), l'altro quello che c'è già. uno di fianco all'altro 
    * newsletter:
      * più padding sopra e sotto
  * pages
    * workshop single:
      * fascia teacher: togli "register"
      * "see all workshops" va nella fascia nera subito sopra al posto di "register"
    * schedule:
      * titolo al centro solo se ci sono i due bottoni, se no a sinistra
    * welcome
      * le celle degli info blocks diventano 6
        * la quinta è venue
        * la sesta è TICKETS:
          * icona (da home) e titolo
          * l'intro dice "i biglietti di trovano su eventbrite"
          * il link invece di read more dice GO (e va su eventbrite!)
    * talks:
      * header come schedule
      * titolo al centro solo se ci sono i due bottoni, se no a sinistra
      * fascia data viola scuro, più sottile, con dentro la info row che togliamo da dove c'è il titolo
      * info row singolo talk: track | [icona] orario
      * l'icona dell'orario deve essere orologio (manu)
  * footer
    * sotto le edizioni precedenti aggiungere riga
    * "tutti i video delle edizioni precedenti sono disponibili su [vimeo](link) e [youtube](link)

* schema.org:
  * general (header)
  * home (speakers, workshop; location coperta da general)
  * PRIMO workshop_single per risolvere errori in validazione cfr https://search.google.com/structured-data/testing-tool/
  * home: finire componenti
  * sponsor
* favicon + tiles (grusp logo); done quickly with sample logo
* colored header on scroll

* home
	* hero
	  * countdown
	  * la hero image DEVE ESSERE IN SOURCE e non nel tema
	* parallax
	* speaker
		* prima titolo talk e poi nome e qualifica più piccoli
		* eventualmente troncare se è lungo; magari se il n. di speaker è > 10
		* .speaker-card {max-width: 250px}
    * revisione per consistenza con workshop v2
	* location
		* link in "get directions"!
	* geninfo
		* i 4 pulsanti su mobile
			min-width: 150px;
			height: 150px;
	* workshop:
		* nome non in foto ma in info row!
		* titolo cliccabile
		* allineamento come geninfo (su mobile andare a capo un po' meno di merda)
  	* workshop: versione 2
    * workshop: versione 3
	* subito sotto alla hero, una fascia "hidden" con testo arbitario (titolo, testo, link) che se si setta a visible:true compare (x es per avvisi o che)
		* formattazione alternativa:
			* avviso
			* update
	* sotto gli speaker una fascia argomenti
		* mettere in config un parametro con un array di tag scelti dall'admin (e un paramento show/hide)
  * speaker: 1-speakerHome.jpg
  * in home nei workshop, manca il nome del docente
  * component: media
    * no carousel, solo 2-3 foto di pubblico
    * e il video recap che di solito c'è
    * aggiungere link "guarda tutti i video"
  * NUOVO component: community partner
    * fascia bordata tipo speaker in talks
  * **TUTTI** i componenti facoltativi
  * media
    * icona vimeo al canale della conf
    * icone youtube alla playlist

* welcome
  * grafica confermata (7-welcomeOk.jpg)
  * info blocks
    * titolo sia link
    * "read more" allineato a SX
    * più respiro prima del pulsantone

* welcome/about
  * pagina about confermata (8-about)

* date in CFP come hero
* [Netlify] Alert: Insecure mixed content detected in compassionate-goldstine-1d9c01
  * (i namespace skiantati nei SVG hanno `http`)
* pulsante Back to top like we were in the 1990s :)

* pagina speaker
	* foto più grande (200)
	* descrizione talk sotto il titolo, di fianco alla foto; se sbrodola piuttosto gira attorno alla foto(?)

* mobile menu

* pagina sponsor
	* nuovi colori 
	* automatizzato conteggio available slots

* breadcrumbs:
	* installato `hexo-breadcrumbs`
	* **non funziona**: `page.breadcrumb` == undefined, `page.breadcrumb.html` -> BOOOM
	* fatti breadcrumb a manella
	* disinstallato `hexo-breadcrumbs`
  * migliorati breadcrumbs con gestione pagine intermedie in `front-matter`

* conference logo: in `source` invece che nel tema!

* privacy policy

* aria attributes in links

* parameterized labels for language agnosticism

* social links as component

* 404 page (https://blog.kiprosh.com/show-custom-404-error-page-for-netlify-applications/)

* "buy ticket" in main menu

* ICONE VIOLA AL POSTO DI QUELLE NERE IN SCHEDULE

* `speakers.pug`: non troncare il titolo, aggiungi classe al p.title! così il non vedente sente comunque il titolo intero (https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/)

* pagina workshop
  * single
  * mixins page header (img sets)
	* no sponsor
  * pagina esempio con più docenti
  * sopra il blocco nero a colonne, aggiungere fascetta viola con testo "compra i biglietti e fai presto perché i prezzi aumentano" col pulsante BUY gigante
  * il pulsante registrati deve sempre essere visibile (metterlo sotto ogni sottosezione) o ripeterlo alla fine di ogni sezione
  * potrebbe esserci un trailer video (embed youtube nella parte bianca delle info generali (colonna sulla destra)) finora è successo solo con kerning ma esiste
  * single
    * togliere nomi speaker da info row
  * per se ce n'è più di uno:
    * list
    * due pagine "single"
    * ogni "single" in quel caso deve essere messa sotto `source/_data/workshop` e **deve avere `parent`, `path` e `permalink`**
    * in fondo alla single inserire il link agli altri workshop (alla pagina intermedia!) prima della fascia newsletter
  	* generare sottomenu solo se ce ne sono due (vedi breadcrumbs)
	* fare pagina intermedia (+- stesse info che in home)

* talks
  * layout: 4-talkNew.jpg
	* nel blocco del talk, dove c'è l'abstract, a volte si vuole poter caricare il video ex post (embed prima della bio)
	* ci sono speaker con più talk, talk con più speaker
	* quindi blocco descrizione talk e poi 1:n bio degli speaker
	* nella bio: link github / linkedin / twitter nel riquadro bio
	* (francesco) invertire la priorità? cioè dare priorità ai talk
  * talk 
    * subito prima del titolo aggiungere data e ora (SE SONO NOTI)
    * titolo
      * allineato a SX non centrato
  * CSS aggiungere:
    .block-speaker
      margin: 1em 5em
  * dal menu laterale il link deve puntare al titolo del primo talk dove lui compare e non alla bio
  * loro hanno due file YML uno con gli speaker e uno coi talk per poter gestire meglio i dati (ovvero per non dover copiare più volte i dati del talk o dello speaker)
  * TROVATA SOLUZIONE usare alias:
    * `site.data.test.yml`
    * `talks_speakers.pug` in fondo
  * date in talks come hero

* schedule
  * by track!
    * non si può più usare `ul`
    * per ogni talk nel day:
      * se `service_item` una colonna sola
      * se no, due colonne, una per track
      * il fottuto pallino va inserito con un `:before`
      * e se gli orari sono sfasati?
    * usare una track 0 per i service item? no, perché se no è come se ne avessi una in più e non riesci a distinguere in un loop
  * mettere track prima del day?
    * allora il service item dovrebbe avere comunque larghezza doppia
    * il day andrebbe "ricomposto"
  * talks: indicare numero o titolo track prima di ogni talk?

* schedule
	* aggiungere thanks to our sponsors prima del footer
  * by day! 
    * se ci sono più giorni, una tabella x giorno (e in cima il link al secondo, terzo giorno etc)

* newsletter
  * embed mailchimp
	* quale lista in file di configurazione
	* nascondere tutto tranne i campi nome, cognome, email e "can you understand italian?"

* componente community OVUNQUE ci siano gli sponsor

* Venue
  * figlia di Welcome, stesso schema delle pagine di About e famiglia
  * un po' di info
  * dove ci sarebbe il video in About, mettere la mappa
  * dove in About ci sarebbe il team, hotel agreements
  * un po' di info sulla città

* CFP
  * intro
  * un po' di info
  * link alla form
