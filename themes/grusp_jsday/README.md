# Hexo/Bulma Grusp Theme

## Configurazione

### Importante

Ci deve essere **almeno un post**, anche se vuoto, in `/source/_posts`, altrimenti **non viene generato l'`index` del sito**

### Tema

Selezione del tema:
* scommentare la riga corrispondente alla conferenza in `_config.yml` (ad es. lasciare non commentato solo "grusp_angularday" nella sezione "Theme selection" all'inizio del file)
* scommentare la riga corrispondente alla conferenza in `site/data/_defaults.yml`, nella prima sezione "Conference tag". Questo è necessario per poter dare il colore giusto agli oggetti "MS Tile" e "Safari pinned tab" in <head>, perché la view non può leggere direttamente il file "defaults.sass" del tema

## Contenuti

### Info base sulla conferenza

Si trovano in `/source/_data/defaults.yml`