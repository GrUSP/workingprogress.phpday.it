# TODO

## Page: workshop

* ???

## Theme

* a special `defaults.sass` file for each conference, with color palette
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
	* location
		* link in "get directions"!
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
* conference logo: in `source` invece che nel tema!
* privacy policy
* aria attributes in links
* parameterized labels for language agnosticism
* social links as component
* 404 page (https://blog.kiprosh.com/show-custom-404-error-page-for-netlify-applications/)
* "buy ticket" in main menu
