# Hexo/Bulma Grusp Themes

## Informazioni generali

Il file di configurazione del sito si trova nella root directory del repo; i file di configurazione nelle rispettive directory (in `themes/[directory del tema]/`).

Gli asset comuni (icone, immagini di sfondo delle testate, etc.) si trovano nei singoli temi.

I contenuti (testi) invece si trovano in `/source/_data/`; gli asset specifici della singola conferenza (le foto degli speaker, i loghi dei partner, etc) si trovano in si trovano in `/source/_data/img/`. Per i dettagli vedere "Contenuti".

## Configurazione

### Importante

Ci deve essere **almeno un post**, anche se vuoto, in `/source/_posts`, altrimenti **non viene generato l'`index` del sito**

### Configurazione generale del sito

La configurazione generale si trova nel file `_config.yml` nella root directory del repo.

Qui si definiscono:
* il **tema** (cfr. paragrafo successivo "Tema")
* i dati per schema.org e OpenGraph
* la visualizzazione (o no) della *breadcrumbs* nelle pagine interne
* l'URL del sito
* i formati delle date
* i parametri di configurazione standard di Hexo (separati da un commento "############# standard config: do not change")

**OpenGraph**

Tra i dati "interessanti" ci sono `title`, `description`, etc.; vengono usati per generare i microdata (json-ld) nelle varie pagine. vedere anche la [documentazione di Hexo](https://hexo.io/docs/configuration.html)

```
# Site / OG
type: website
title: "ruby day 2020"
description: "Ruby Day 2020, Verona, Italy"
#   separate keywords by comma, no spaces
keywords: conference,software conference,ruby,ruby on rails
author: GrUSP
language: en
timezone: 'Europe/Rome'
image: 'img/grusp-logo-full.svg'
open_graph:
  image: 'img/grusp-logo-full.svg'
twitter:
  twitter_id: rubydayIT
fb:
  fb_id: RubyDayIT
```
**NB** c'è un bug aperto per cui
```
open_graph:
  image: 'img/grusp-logo-full.svg'
```
a volte non viene interpretato correttamente e in OpenGraph non risulta l'immagine

**Breadcrumbs**

```
# Breadcrumbs
breadcrumb:
  display: true
```
Basta cambiare `true` con `false` per nascondere le *breadcrumbs* in tutte le pagine

**URL del sito**

Es.: `url: https://grusp.isunder.review/` è il valore predefinito nel repo originale, ed l'URL completo del sito di staging

Viene usato per generare FQURLs dagli URI relativi.

**formati data**

Usati sia nel frontend, sia per generare i valori dei tag `<time>` delle pagine.

```
# Date / Time format
date_format: YYYY-MM-DD
time_format: HH:mm:ss
date_format_hero: MMMM DD, YYYY
time_format_schedule: HH:mm
```
Oltre a quello standard, ce ne sono due specifici per `hero` (inrealtà viene usato quasi ovunque questo) e per `schedule` (viene *visualizzata* solo l'ora)

* i parametri di configurazione standard di Hexo (separati da un commento "############# standard config: do not change")


### Tema

Selezione del tema:
* scommentare la riga corrispondente alla conferenza in `_config.yml` (ad es. lasciare non commentato solo "grusp_angularday" nella sezione "Theme selection" all'inizio del file)
* scommentare la riga corrispondente alla conferenza in `site/data/_defaults.yml`, nella prima sezione "Conference tag". Questo è necessario per poter dare il colore giusto agli oggetti "MS Tile" e "Safari pinned tab" in <head>, perché la view non può leggere direttamente il file "defaults.sass" del tema

### Configurazione generale del tema

Si trova in `themes/[directory del tema]/_config.yml` e contiene:

* selezione della lingua
* main menu
* workshops submenu (se serve)
* welcome submenu
* stylesheets e scripts (da non cambiare! puntano direttamente ai file compilati e vengono usati in `<header>`)

**selezione della lingua**

Es.: `language: "en"`

La lingua è in formato ISO (ovvero si potrebbe usare `"en-us"`)

**main menu**

```
# main menu navigation
menu:
  welcome: welcome
  talks_speakers: talks
  sponsor: sponsor
  schedule: schedule
  # menu item for workshop
  workshop: workshop
```
Ad es. se non si vuole la pagina `schedule` nel menu, perché per esempio non è stata ancora definita, basta commentare la riga corrispondente.

La chiave è il filename della pagina corrispondente (ad es. `talks_speakers`; nel menu viene creato il link a `talks_speakers.html`); il valore è la label della voce di menu.

**workshops submenu**

```
# workshops submenu (comment out if only one workshop: add items for multiple workshops)
workshop_submenu:
  workshop_1: rails and vue
  workshop_2: sample second workshop
```
Se c'è un solo workshop, si commenta l'intera sezione. Altrimenti, qui si definiscono gli `id` dei singoli workshop e i titoli delle voci di menu.

Vedere anche più avanti, "Workshop"

**welcome submenu**

```
# welcome submenu
welcome_submenu:
  about: about
  coc: code of conduct
  scholarships: scholarships
  where: where
  # delete this row to take out of the menu
  cfp: call for papers
```
Qui si definisce il sottomenu di "welcome". In genere si può non toccare; se si vuole non creare una voce del sottomenu, basta commentare la riga corrispondente (ad es. per non fare apparire nel menu la voce "cfp")

## Contenuti

**NB** scrivere **sempre** le date in Formato ISO (`YYYY-MM-DDTHH:MM`), ad es. `2020-09-16T09:00`; le date, oltre a essere riformattate per la visualizzazione in pagina, vengono usate per generare i tag `<time>` nelle varie pagine, e in alcuni casi per fare dei calcoli

**NB** per tutte le chiavi che contengono testo, si può scrivere HTML, basta che il valore sia incluso fra doppi apici **"** -- se servono apici nel contenuto, ad es. per un link, usare apici singoli **'** : ad es. `"bla bla <a href='url' >"...`

### Info base sulla conferenza

Si trovano in `/source/_data/defaults.yml`. Il file è diviso in diverse sezioni, che -- a parte la selezione del tema e la (ri)definizione del colore dominante, come descritto in "Tema", corrispondono ai diversi componenti della home page (alcuni dei quali vengono replicati in altre pagine).

Il file inoltre contiene alcuni dati usati "sotto il cofano" nella generazione del sito.

Dopo la sezione "Additional config" dove come detto si seleziona il tema, segue "Conference defaults". Tutti i dati si trovano all'interno della chiave `conference:`

```
  # menu and general params
  menu_buy_tickets_label: "Buy tickets"
  buy_tickets_url: "https://rubyday-2020.eventbrite.com/"
```
Label dei pulsanti *Buy tickets*, tranne quello presente nella *hero section* della home page (vedi sotto); URL del sito per l'acquisto dei biglietti

```
  # additional info for microdata / schema.org
  md_city: "Verona"
  md_province: "VR"
  md_postal_code: "37138"
  md_address: "Via Longhena 42"
  organizer_url: "http://grusp.org/"
```
Dati addizionali per generare i microdata

```
  # contact email
  contact_email: "info@grusp.org"
```
La mail di contatto, usata un po' ovunque (footer, pagina COC, etc.)

### Home page e componenti

**hero section**
```
  # these are for the hero section
  title_pre: "Welcome to"
  title: "RubyDay"
  city: "Verona"
  date: 2020-09-16T09:00
  countdown_visible: true
  countdown_days: "days"
  countdown_hours: "hours"
  countdown_minutes: "minutes"
  countdown_seconds: "seconds"
  ticket_button_visible: true
  hero_buy_tickets_label: "Buy tickets now"
```
`countdown_visible` e `ticket_button_visible` se impostati a `false` nascondono rispettivamente la riga del countdown e il pulsante *Buy tickets now*
```
  # image credits (l'esempio è per la hero del CSS Day!)
  # hero_img_credits: "Image by Gianni Careddu - Own work, <a href='https://commons.wikimedia.org/w/index.php?curid=74821344ì target='_blank' rel='noopener noreferrer'>CC BY-SA 4.0</a>"
```
Se si usano immagini per le quali bisogna accreditare l'autore (o altre informazioni di licensing), si può usare `hero_img_credits` per farle visualizzare. Oltre al background di `hero`, vale lo stesso meccanismo per `location` e per le testate della pagina *Where* e delle pagine dei workshop.

**Update**: fascia da visualizzare subito sotto la `hero` in caso si voglia mettere in evidenza un annuncio o un'informazione "extra"
```
  # "update" component. set the first parameter to true to make it appear in home page, false means hidden
  update_visible: true
  update_is_warning: true
  update_warning_header: "Questo testo appare se l'update è impostato a *warning*. Potremmo sostituirlo con un'icona o altro 'segnale'"
  update_title: "Important information"
  update_description: "This is the description of such important information"
  update_link_url: "https://google.com/"
  update_link_label: "a link to google, just for the demo"
```
Impostando `update_visible` a `false` si nasconde il componente. Questo vale anche per **tutti gli altri componenti della home page**.

**Call for papers**
```
  # "call for papers" component. set the first parameter to true to make it appear in home page, false means hidden
  cfp_open: true
  cfp_readmore_label: "Read more"
  cfp_open_label: "Submissions accepted until"
  cfp_open_title: "Call For Papers Now Open!"
  cfp_deadline: 2020-06-30T17:00
  cfp_register_label: "Apply now"
  cfp_register_aria_label: "Apply now for our Call for papers"
```
(Non viene nascosta automaticamente qyando si raggiunge la data della deadline perché si potrebbe voler visualizzare per un periodo "Call for papers closed"...)

**General info**: la fascia con i 4 pulsanti quadrati sulla destra
```
  # "general information" ("what is it?") component
  geninfo_visible: true
  geninfo_title: "What is it?"
  geninfo_description: "bla bla bla... testo libero"
  geninfo_about_label: "About"
  geninfo_coc_label: "Code of conduct"
  geninfo_scholarships_label: "Scholarships"
  geninfo_tickets_label: "Buy tickets"
```
**NB** le info per il blocco dei pulsanti social vegono inserite più avanti, vedere "Footer"

**newsletter**

Il componente *newsletter* viene riutilizzato in (quasi) tutte le pagine.

Qui, oltre alle label per la form, si definiscono i parametri "nascosti", che vengono passati al parziale `` insieme a nome, mail etc.
```
  # this is for the Newsletter block
  newsletter_title: "Stay in the loop!"
  newsletter_subtitle: "Subscribe to our newsletter"
```
Qui si definisce a quali liste iscrivere il mittente:
```
  # fields taken from the Mail chimp default form -- set to `true` to add subscription
  newsletter_lists:
    php: false
    javascript: false
    design: false
    devops: false
    frontend: false
    ruby: true
    entrepreneurship: false
    local_events: false
    everything: false
```
Queste sono le label dei campi della form:
```
  newsletter_firstname_label: "First name"
  newsletter_lastname_label: "Surname"
  newsletter_email_label: "Email"
  newsletter_lang_challenge: "Can you understand Italian?"
  newsletter_lang_label: "Of course, certamente!"
  newsletter_privacy_label: "I have read and accept the "
  newsletter_privacy_link_label: "privacy policy"
```
E questi sono i dati per creare i link alle privacy policy -- quella di Mailchimp ma anche quella del sito!
```
  newsletter_privacy_link_url: "https://www.iubenda.com/privacy-policy/13404179"
  newsletter_disclaimer: "We use Mailchimp as our email marketing platform. By subscribing to the newsletter, you accept that your data are transmitted to Mailchimp to be processed. "
  newsletter_legal_url: "https://mailchimp.com/legal/"
  newsletter_legal_label: "Information about Mailchimp's privacy policy"
```

**speakers**
```
  # "speakers" component. set the first parameter to true to make it appear in home page, false means hidden
  speakers_visible: true
  speakers_title: "speaker"
```
Gli altri dati vengono presi dal file `talks_speakers.yml`; vedere più avanti.

**topics**
```
  # "topics" component. set the first parameter to true to make it appear in home page, false means hidden
  topics_visible: true
  topics_title: "Topics and themes"
  topics_description: "This is what we shall talk about..."
  topics:
    - "Ruby"
    - "Ruby on Rails"
  topics_payoff: "...and much more!"
```
I topic non sono altro che tag. Per inserirne di nuovi, aggiungere righe
```
    - "new topic"
```
Attenzione al trattino iniziale! è **necessario** (perchè non c'è `key`: i topic sono un array e non un oggetto JSON)

**workshops**
```
  # "workshop" component. set the first parameter to true to make it appear in home page, false means hidden
  workshop_visible: true
  workshops_title: "workshop"
  workshops_tickets_label: "Buy tickets"
  workshops_readmore_label: "Read more"
  workshops_register_label: "Register"
```
Gli altri dati vengono presi dal file `workshop.yml`; vedere più avanti.

***media** (fascia con immagini e video)
```
  # Media section in home page. set the first parameter to true to make it appear in home page, false means hidden
  media_visible: true
```
In questa fascia possiamo inserire 4 immagini a scelta...
```
  media_pic_1: "sample_pic_1.jpg"
  media_pic_2: "sample_pic_2.jpeg"
  media_pic_3: "sample_pic_3.jpeg"
  media_pic_4: "sample_pic_4.jpg"
```
**NB**: inserire le immagini in `/source/img/media/`, i `src` vengono creati dinamicamente ma non troppo ;)

...e una playlist
```
  #   playlist: if true, the iframe will be created. if false, it will not
  media_video_playlist: true
```
(se `false`, non viene visualizzato nessun video)
```
  # if `media_video_is_youtube` is `true`, the relevant playlist will be embedded via "media_video_playlist". If it is `false`, the relevant Vimeo channel will be embedded via "media_vimeo_channel"
  media_video_is_youtube: false
```
(se `true`, viene creato un link per YouTube; se `false`, per Vimeo)

Questi sono dati statici: li cambieremo se YouTube e/o Vimeo cambieranno la struttura dei loro siti ;)
```
  youtube_base_url: "https://www.youtube.com/embed/videoseries?list="
  vimeo_base_url: "https://vimeo.com/album/"
  vimeo_url_suffix: "/embed"
```
Qui invece i dati "veri": l'ID della playlist di YouTube, o l'ID dello "showcase" di Vimeo
```
  #   (embed YouTube playlist: prendere l'ID della lista dall'URL, la parte dopo '&list=', e metterla qui sotto)
  youtube_playlist_id: "PLWK9j6ps_unmgzGOw3cbjS8ID-b-cF1d9"
  #   (embed Vimeo showcase: prendere l'ID dello showcase e metterla qui sotto)
  vimeo_showcase_id: "6048109"
```

**location**
```
  # Location section in home page. set the first parameter to true to make it appear in home page, false means hidden
  location_visible: true
  location_name: "Hotel San Marco"
  location_address: "Via Longhena 42, 37138 Verona (VE) Italy"
  location_maps_url: "https://www.google.com/maps/place/Hotel+San+Marco+Fitness+Pool+%26+SPA/@45.4399961,10.9697441,17z/data=!3m1!4b1!4m8!3m7!1s0x4781e1e30a8be6af:0x8091b108e1d130c6!5m2!4m1!1i2!8m2!3d45.4399961!4d10.9719328"
  location_maps_label: "Get directions"
  location_readmore_label: "Read more"
  # image credits (l'esempio è per la hero del CSS Day!)
  venue_img_credits: "Image by Gianni Careddu - Own work, <a href='https://commons.wikimedia.org/w/index.php?curid=74821344ì target='_blank' rel='noopener noreferrer'>CC BY-SA 4.0</a>"
```
Impostare `location_visible` a `false` se non si vuole fare comparire la fascia! Ad es. nel caso delle conferenze solo online

**sponsor**

Il componente *sponsor* viene riutilizzato in (quasi) tutte le pagine.
```
  # Sponsors section in home page. set the first parameter to true to make it appear in home page, false means hidden
  sponsors_visible: true
  sponsor_title_home: "Sponsors"
```
Gli altri dati vengono presi dal file `sponsors.yml`; vedere più avanti.

**community partner**
```
  # this is for the Community partners section in home page
  community_partners: true
  community_partners_title: "Community Partners"
```
Anche questi dati vengono presi dal file `sponsors.yml`; vedere più avanti.

### Footer

Nel footer, alcuni dati (ad es., la data)  vengono ripresi da ciò che abbiamo definito all'inizio del file; il resto è qui!

pulsanti **social**
```
  # this is for the Social links block
  social_follow: "Follow us on"
  social_fb_url: "https://www.facebook.com/RubyDayIT/"
  social_linkedin_url: "https://www.linkedin.com/company/grusp/"
  social_twitter_url: "https://twitter.com/rubydayIT"
  social_vimeo_url: "https://vimeo.com/grusp"
  social_youtube_url: "https://www.youtube.com/channel/UCdWnwC8nz_CCFQrmLBrLCVw"
```
(il blocco, oltre che nel componente "general info" visto sopra, viene riutilizzato anche nella pagina *welcome*)

**extra**
```
  # 404
  back_to_home_label: "back to home page"
```
Questo dato è usato solo come testo per un link nella pagina *404 - not found*: vedere più avanti, "404 page"

**past editions**
Questo viene usato per creare i link ai siti delle passate edizioni:
```
  #   this is for the "previous editions" links
```
L'URL base dei siti:
```
  base_url: "rubyday.it/"
```
...dopodiché i link vengono creati dinamicamente, ad es. `https://2011.[base_url]`
```
  past_editions_pre: "Browse past editions:"
  past_editions:
    2011: "2011"
    2012: "2012"
    2013: "2013"
    2014: "2014"
    2015: "2015"
    2016: "2016"
    2019: "2019"
  past_editions_videos_pre: "All videos from the past editions are available on "
  past_editions_videos_vimeo_label: "Vimeo"
  past_editions_videos_mid: " and "
  past_editions_videos_youtube_label: "YouTube"
  past_editions_videos_post: "."
```
...gli altri dati sono i testi e le label. **NB** le URL dei link a Vimeo e YouTube sono presi dal blocco **social**!

**e per finire...**

...l'ultima parte del footer, in fondo a tutto:
```
  footer_copy_text: "is &copy; by Grusp and its awesome staff"
  footer_contact_text: "Contact us at "
  footer_links_pre: "You can read our "
  footer_links_privacy_link_label: "privacy policy"
  footer_link_middle: " and our "
  privacy_policy_url: "https://www.iubenda.com/privacy-policy/13404179"
  footer_coc_link_label: "code of conduct"
```

### welcome

I dati si trovano in `/source/_data/page_welcome.yml`.

Il blocco "intro" contiene solo del testo libero...
```
intro:
  main_title: "Welcome"
  content_1: "RubyDay 2020 is the eighth edition of the Italian Ruby Conference, organised by GrUSP, organisers of events such as PHPDay and JSDay. Tehe event has an international audience and all session will be held in English."
  content_2: "The event's goal is to allow all Rubyists to meet and share experiences while having fun and networking in an enjoyable context."
```
...e i due parziali "past editions" e "social" che abbiamo già visto in `defaults.yml`

Poi c'è la label per i link "read more", che vengono creati programmaticamente:
```
# this is the global "read more" label
readmore_label: "Read more"
```

Gli altri sono i blocchetti della fascia nera: sono tutti uguali...
```
info_about:
  title: "About"
  content: "Short intro to About page"
```
...e contengono solo il titoletto e la breve descrizione. L'unica eccezione è la label del link dei biglietti, e infatti l'ultimo blocco ha un parametro in più:
```
info_ticket:
  title: "Tickets"
  content: "The tickets are available on Eventbrite"
  # the tickets link is the only one that does not use the "global" label
  readmore_label: "GO"
```

### welcome/about

I dati si trovano in `/source/_data/page_about.yml`.

Comincia con l'intro sotto il titolo:
```
intro:
  main_title: "About"
  content_1: "[testo libero e/o HTML]"
  content_2: "[testo libero e/o HTML]"
```
(`content_2` è facoltativo; se è vuoto non viene visualizzato il secondo paragrafo)

Poi c'è la fascia colorata:
```
more:
  title: "More information"
  content_1: "[testo libero e/o HTML]"
  content_2: "[testo libero e/o HTML]"
```
(anche qui `content_2` è facoltativo; se è vuoto non viene visualizzato il secondo paragrafo)

Se non serve la fascia, commentare l'intero blocco. Se `more` e/o il suo contenuto non viene trovata o è vuota, la sezione non viene generata

Poi la fascia con il video:
```
past_edition:
  title: "Browse past editions"
  video_url: "https://www.youtube.com/embed/kgA2V85dPEg"
  video_caption: "Watch the video of the latest edition"
```
Se non serve la fascia, commentare l'intero blocco. Se `past_edition` e/o il suo contenuto non viene trovata o è vuota, la sezione non viene generata

Per finire c'è il team degli organizzatori: inizia con un breve testo
```
team:
  title: "Our team"
  intro: "Nata nel 2003 come associazione dedicata al solo mondo del PHP il GrUSP è diventata il punto di riferimento in Italia per le buone pratiche nel mondo dello sviluppo web. Organizziamo eventi, conferenze ed incontri informali coinvolgendo professionisti italiani ed internazionali. Puntiamo a rendere l'ecosistema del mondo italiano dello sviluppo web migliore sia sotto l'aspetto delle competenze che delle opportunità creando maggiore consapevolezza."
```
E poi ci sono i componenti del team
```
  members:
    member_1:
      name: "Francesco Fullone"
      role: "(his role)"
      pic_filename: "fili1.jpg"
    member_2:
      name: "Giulia Tosato"
      role: "(her role)"
      pic_filename: "giulia.jpeg"
```
**NB** le foto del team vanno messe in `/source/img/team/`

Per aggiungere nuovi membri del team, aggiungere uno o più blocchi `member_X` (attenzione: la chiave **deve** essere univoca, ad es. `member_3`, `member_4`, ...)

### welcome/coc

I dati si trovano in `/source/_data/page_coc.yml`.
```
intro:
  main_title: "Code of Conduct"
  content_1: "[testo libero e/o HTML]"
  content_2: "[testo libero e/o HTML]"
```
Poi ci sono la "short version" e la "long version". Entrambe iniziano allo stesso modo...
```
short_version:
  title: "The short version"
  content_1: "[testo libero e/o HTML]"
```
e
```
long_version:
  title: "The long version"
  content_1: "[testo libero e/o HTML]"
```
...ed entrambe possono includere fino a 6 paragrafi/sezioni di testo: `content_1`, `content_2`, ...`content_6`. Solo le sezioni "popolate" verranno visualizzate.

La `long_version` contiene anche un sottoblocco aggiuntivo, che viene usato per la sezione con il bordo colorato:
```
  contact_info_title: "Contact information"
  contact_content_1: "[testo libero e/o HTML]"
```
Anche qui ci sono diversi paragrafi/sezioni a disposizione, da `contact_content_1` a `contact_content_5`. Solo le sezioni "popolate" verranno visualizzate.

### welcome/scholarships

I dati si trovano in `/source/_data/page_scholarships.yml`.
```
intro:
  main_title: "Scholarships"
  content_1: "Diversity and inclusivity matter"
```
`intro` ha a disposizione fino a 3 paragrafi/sezioni a disposizione.

Poi ci sono la "short version" e la "long version". Entrambe iniziano allo stesso modo...
```
short_version:
  title: "The short version"
  content_1: "[testo libero e/o HTML]"
```
e
```
long_version:
  title: "The long version"
  content_1: "[testo libero e/o HTML]"
```
**NB** i `title` dfi entrambi i blocchi sono facoltativi. Se vuoti o non presenti non verranno visualizzati!

La `short_version` può includere fino a 6 paragrafi/sezioni di testo: `content_1`, `content_2`, ...`content_6`. Solo le sezioni "popolate" verranno visualizzate.

La `long_version` è differente: al posto di un unico `content_2` ci sono diverse chiavi...
```
  content_2_beginning: "You are invited to apply for "
  content_2_link_label: "a single conference ticket for rubyday"
  content_2_link_url: "https://forms.gle/K7b38LbqVuAJ61MK9"
  content_2_ending: "  . We will notify all applicants regarding the outcome of their application. We don’t cover travel/accommodation expenses."
```
...per permettere di non scrivere HTML direttamente nel "punto delicato" in cui si definisce il link per i biglietti dedicati.

Infine ci sono i *diversity sponsors*:
```
diversity_sponsors_title: "Thanks to our diversity sponsors"
diversity_sponsors:
  - logo_filename: "logo-welaika.png"
    site_url: "https://welaika.com/"
    name: "weLaika"
```
Per aggiungere uno o più sponsor, aggiungere un sottoblocco di tre righe come il primo di esempio (**NB** qui non c'è bisogno di specificare una chiave ma è importante il trattino iniziale! Insomma fare copiaeincolla ;) )

I loghi degli sponsor vanno messi in `/source/img/logos/`.

### welcome/where

**NB** questa sezione è da **aggiornare** appena terminate le modifiche per l'opzione "conferenza online"

I dati si trovano in `/source/_data/page_where.yml`.

La testata:
```
header:
  title_pre: "...and a lovely "
```
(il nome della città è preso da `defaults`!)

L'intro sotto la testata:
```
intro:
  main_title: "Where"
  content_1: "[testo libero e/o HTML]"
  content_2: "[testo libero e/o HTML]"
```
(`content_2` è facoltativo)

Le info sulla città ospite:
```
city_info:
  title: "The city"
  subtitle_1: "Subtitle 1"
  description_1: "[testo libero e/o HTML]"
  subtitle_2: "Subtitle 2"
  description_2: "[testo libero e/o HTML]"
```
**Tutti** i campi tranne `title` sono facoltativi (nel caso delle conferenze online, al posto di "The city" si può mettere ad es. "Useful information", e usare gli altri campi per dare informazioni su streaming e quant'altro)

La mappa:
```
map:
  title: "Location"
  map_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.4793358997117!2d10.969744115556647!3d45.43999607910055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781e1e30a8be6af%3A0x8091b108e1d130c6!2sHotel%20San%20Marco%20Fitness%20Pool%20%26%20SPA!5e0!3m2!1sen!2sit!4v1587388989438!5m2!1sen!2sit"
  video_caption: "Watch the video of the latest edition"
```
L'intero blocco è facoltativo. Se è vuoto o non presente, non compare la fascia con la mappa

Gli hotel: (**NB** l'intero blocco sarà facoltativo come quello della mappa, appena fatte le modifiche per l'opzione "conferenze online")
```
hotels:
  title: "Hotel agreements"
  intro: "[testo libero e/o HTML]"
```
E i relativi accordi / convenzioni:
```
  agreements:
    hotel_1:
      name: "Hotel Leopardi"
      address: "Via Giacomo Leopardi, 16, 37138 Verona VR"
      website: "http://leopardi.vr.it"
      maps_url: "https://www.google.com/maps/place/Hotel+Leopardi/@45.4399957,10.963178,15z/data=!4m21!1m12!2m11!1shotel!3m5!1shotel!2s45.44,+10.9717!4m2!1d10.9716968!2d45.4399886!5m3!5m2!4m1!1i2!3m7!1s0x4781e1fb205821fd:0xa49414ecb16b1b73!5m2!4m1!1i2!8m2!3d45.4433788!4d10.9689555"
      phone: "+390458101444"
      phone_label: "045 8101444"
      email: "leopardi@leopardi.vr.it"
```
Per aggiungerne uno, copiare e incollare l'intero sottoblocco. **Attenzione**: qui è importante che l'ID sia univoco, ad es. `hotel_1`, `hotel_2`, etc.

Per finire, gli attributi `aria-label` per gli attributi di accessibilità dei link per i contatti degli hotel:
```
address_aria_label: "hotel address"
email_aria_label: "hotel email"
phone_aria_label: "hotel phone"
website_aria_label: "hotel phone"
```

### welcome/cfp

I dati si trovano in `/source/_data/page_cfp.yml`.

```
intro:
  main_title: "Call for papers"
  date_intro: "The call for papers is open until "
  # NB la data è definita in `defaults`
  content_1: "[testo libero e/o HTML]"
  content_2: "[testo libero e/o HTML]"
```
(`content_2` è facoltativo; come dice anche il commento, la deadline è già stata definita in `defaults`!)

La fascia colorata:
```
more_info:
  title: "More information"
  description_1: "[testo libero e/o HTML]"
  description_2: "[testo libero e/o HTML]"
```
(`description_2` è facoltativo)

La fascia con contatti e il pulsante "Apply":
```
contact:
  email_intro: "For any information that you may need, please write to "
  help_intro: "If you need suggestions on how to write the abstract, see "
  help_url: "http://helpmeabstract.com/"
```
(Il pulsante *Apply* è generato programmaticamente; label e URL sono stati definiti in `defaults`)
