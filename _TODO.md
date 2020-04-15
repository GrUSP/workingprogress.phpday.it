# Note

* produzione: github pages e usano la ci per generare
	* (il sito è fatto con jekyll)
	* usano travis per generare

* caricare tutte le palette di colori del team e farli scegliere dinamicamente in header.pug da un parametro (conference tag)

* ma: e fare la stessa cosa per logo e favicon?

* IMPORTANTE per le breadcrumbs
  * il `front-matter` della pagina DEVE includere `parent`
    * x es: le sottopagine di "welcome" devono avere `parent: welcome`
    * le sottopagine di "workshop" (se ce ne sono) devono avere `parent: workshops`
    * DOCUMENTARE nella guida alla creazione di workshop multipli

# TODO

* una volta estratte le palette di colori, mettere tutti i relativi file sass nel repo, aggiungere un parametro in defaults, e aggiungere dinamicamente il css della palette in header.pug così si evita di toccare il _config e si genera comunque il sito con la palette giusta

* home
  * component: foto/video
    * no carousel, solo 2-3 foto di pubblico
    * e il video recap che di solito c'è
    * aggiungere link "guarda tutti i video"
  * NUOVO component: community partner
    * ? fascia tipo topics colorata con riquadri bianchi che contengono i loghi ? fascia bianca coi loghi ma che si distingua da qualle degli sponsor ? 

* welcome
  * grafica confermata (7-welcomeOk.jpg)
* welcome/about
  * pagina about confermata (8-about)
    * **ocio** bio team! (8-about-teamAperto)

* workshop
  * single
    * togliere nomi speaker da info row
  * per se ce n'è più di uno:
    * list
    * due pagine "single"
    * in fondo alla single inserire il link agli altri workshop (alla pagina intermedia!) prima della fascia newsletter
  	* generare sottomenu solo se ce ne sono due (vedi breadcrumbs)
	* fare pagina intermedia (+- stesse info che in home)

* talks
  * talk 
    * subito prima del titolo aggiungere data e ora (SE SONO NOTI)
    * titolo
      * allineato a SX non centrato
      * icona talk accanto al titolo
  * CSS aggiungere:
    .block-speaker
      margin: 1em 5em
  * dal menu laterale il link deve puntare al titolo del primo talk dove lui compare e non alla bio
  * loro hanno due file YML uno con gli speaker e uno coi talk per poter gestire meglio i dati (ovvero per non dover copiare più volte i dati del talk o dello speaker)
  * TROVATA SOLUZIONE usare alias:
    * `site.data.test.yml`
    * `talks_speakers.pug` in fondo
  * togli quel ciadello di mappe da `components/speakers/spekaers` e probabilmente da `talks_speakers`

* schedule
  * by day! 
    * se ci sono più giorni, una tabella x giorno (e in cima il link al secondo, terzo giorno etc)
  * by track!


## Theme

* https://developer.mozilla.org/en-US/docs/Web/Performance/dns-prefetch
  * (x es link google maps): `- url_to_prefetch = new URL(data.location_maps_url)`

* a special `defaults.sass` file for each conference, with color palette (manu)

* home
	* hero: 
		* background: ora il tema si aspetta `hero.jpg` (e `location.jpg`) -- rendere possibile usare altri tipi di immagine. 
			* usare `defaults`?
			* usare semplicemente qualsiasi cosa ci sia in `img/home/` indipendentemente dal filetype?
	* workshop
		* link a pagina workshop (`#anchor` se pagina unica) (vediamo prima come si fanno i workshop)
* dove ci andrebbero form: PULSANTI che vanno alle google form o quant'altro
  * pulsanti fatti; farsi dare link
* about page
* workshops (multiple) page

## Assets

* favicon + tiles: (by site) favicon + tiles with conference logos!
* PROTIP: added `width` and `height` attributes to icon SVGs to prevent FOUSVG on Firefox B-)

## Content

* links & info: opengraph
* date in speakers come hero
* schema.org: in JSON-LD! specie per schema.org/Event

# DONE

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
	* subito sotto alla hero, una fascia "hidden" con testo arbitario (titolo, testo, link) che se si setta a visible:true compare (x es per avvisi o che)
		* formattazione alternativa:
			* avviso
			* update
	* sotto gli speaker una fascia argomenti
		* mettere in config un parametro con un array di tag scelti dall'admin (e un paramento show/hide)
  * speaker: 1-speakerHome.jpg
  * in home nei workshop, manca il nome del docente

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

* talk / speaker
  * layout: 4-talkNew.jpg
	* nel blocco del talk, dove c'è l'abstract, a volte si vuole poter caricare il video ex post (embed prima della bio)
	* ci sono speaker con più talk, talk con più speaker
	* quindi blocco descrizione talk e poi 1:n bio degli speaker
	* nella bio: link github / linkedin / twitter nel riquadro bio
	* (francesco) invertire la priorità? cioè dare priorità ai talk

* schedule
	* aggiungere thanks to our sponsors prima del footer

* newsletter
  * embed mailchimp
	* quale lista in file di configurazione
	* nascondere tutto tranne i campi nome, cognome, email e "can you understand italian?"
