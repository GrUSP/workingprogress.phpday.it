# Note

* produzione: github pages e usano la ci per generare
	* (il sito è fatto con jekyll)
	* usano travis per generare

* IMPORTANTE per le breadcrumbs
  * il `front-matter` della pagina DEVE includere `parent`
    * x es: le sottopagine di "welcome" devono avere `parent: welcome`
    * le sottopagine di "workshop" (se ce ne sono) devono avere `parent: workshops`
    * DOCUMENTARE nella guida alla creazione di workshop multipli

# TODO

* home
	* subito sotto alla hero, una fascia "hidden" con testo arbitario (titolo, testo, link) che se si setta a visible:true compare (x es per avvisi o che)
		* formattazione alternativa:
			* avviso
			* update
	* sotto gli speaker una fascia argomenti
		* mettere in config un parametro con un array di tag scelti dall'admin (e un paramento show/hide)

* newsletter
	* layout nuovo di manu OK
	* aggiungi check privacy! (html da giulia con nuovo campo; link a privacy policy locale)
	* la frase "Usiamo Mailchimp come piattaforma ..." va via
	* quando si clicca in un campo la label ricompare in piccolo subito sopra il campo (cfr formidable)


* ICEBOX
	* in home con la nuova impostazione non c'è riferimento a nessun talk
		* talk ha anche tag argomento
		* in home page, si crea una fascia con i tag (unique)

* talk
  * layout: 4-talkNew.jpg

* home
  * speaker: 1-speakerHome.jpg
  * in home nei workshop, manca il nome del docente

* newsletter
  * marketing permissions in file di configurazione (siamo sicuri?)

* welcome:
	* fare pagina intermedia (giulia ci dice quale delle due)

* speaker:
	* nel blocco del talk, dove c'è l'abstract, a volte si vuole poter caricare il video ex post (embed prima della bio)
	* ci sono speaker con più talk, talk con più speaker
	* quindi blocco descrizione talk e poi 1:n bio degli speaker
	* nella bio: link github / linkedin / twitter nel riquadro bio

	* (francesco) invertire la priorità? cioè dare priorità ai talk
		* loro hanno due file YML uno con gli speaker e uno coi talk per poter gestire meglio i dati (ovvero per non dover copiare più volte i dati del talk o dello speaker)
		* DIVIDERE e rifare la pagina speakers/talk e anche la schedule (e la sezione speaker in home, il link punta alla prima istanza dello speaker nella pagina dei talk)
		* tanto nella schedule bisognava aggiungere day # e track


* workshop: ok fare pagine con `hexo new page`
	* generare sottomenu solo se ce ne sono due
	* fare pagina intermedia (+- stesse info che in home)
	* il pulsante registrati deve sempre essere visibile (metterlo sotto ogni sottosezione) o ripeterlo alla fine di ogni sezione
	* in fondo inserire il link agli altri workshop (alla pagina intermedia!) prima della fascia newsletter
	* CI POSSONO ESSERE PIÙ DOCENTI
	* potrebbe esserci un trailer video (embed youtube nella parte bianca delle info generali (colonna sulla destra)) finora è successo solo con kerning ma esiste
	* sopra il blocco nero a colonne, aggiungere fascetta viola con testo "compra i biglietti e fai presto perché i prezzi aumentano" col pulsante BUY gigante
	* NO SPONSOR


* dubbi
	* sponsor:
		* potrebbero esserci le supporting communities (che adesso sono tra i media partner)
		* i media partner potrebbero anche non esserci

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
	* newsletter
		* embed mailchimp
* dove ci andrebbero form: PULSANTI che vanno alle google form o quant'altro
  * pulsanti fatti; farsi dare link
* schedule page
* about page
* workshop page

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
* home
	* workshop: versione 2
* schedule
	* aggiungere thanks to our sponsors prima del footer

* newsletter
	* quale lista in file di configurazione
	* nascondere tutto tranne i campi nome, cognome, email e "can you understand italian?"
