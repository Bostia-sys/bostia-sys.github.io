# Plan — Site vitrine Boostia

## Objectif
Créer un site vitrine professionnel, responsive et facilement publiable sur GitHub Pages pour Boostia Web Development. Le site doit accueillir de nouveaux clients, présenter clairement l'offre et orienter les échanges vers un e-mail direct, sans formulaire ni backend.

## Approche d'implémentation
- Site statique HTML/CSS/JavaScript, sans framework ni dépendance de build.
- Une seule page structurée en sections : accueil, services, méthode, preuves de valeur et contact.
- `script.js` centralise les éléments modifiables comme les coordonnées, l'e-mail général, l'e-mail des commandes et l'année du footer.
- Le contenu est disponible en français et en arabe, avec bascule de langue, persistance locale et direction RTL pour l'arabe.
- Le logo fourni est intégré directement en SVG dans l'en-tête et le footer, avec une favicon SVG en data URI.
- Compatible GitHub Pages grâce à `.nojekyll`, chemins relatifs et absence de backend.

## Structure
- `index.html` : structure sémantique et contenu éditorial.
- `styles.css` : design system, responsive layout, animations et accessibilité visuelle.
- `script.js` : traductions, menu mobile, année automatique, injection des liens e-mail et informations de contact.
- Logo SVG intégré dans `index.html` : aucune ressource d'image externe n'est requise.
- `README.md` : instructions de personnalisation et publication GitHub Pages.
- `TODO.md` : éléments à personnaliser avant mise en ligne.
- `manus-routes.json` : manifeste de route statique.

## Design
- **Mouvement** : editorial tech / dark premium, avec la précision d'un studio produit et une énergie de lancement.
- **Principes** : lisibilité immédiate, contrastes nets, respiration généreuse, détails lumineux maîtrisés.
- **Philosophie couleur** : le bleu nuit crée la confiance et la profondeur ; le turquoise du logo devient la signature de mouvement, d'optimisme et d'innovation ; les blancs froids donnent une sensation de clarté technique.
- **Paradigme de mise en page** : compositions asymétriques, colonne éditoriale forte et cartes décalées ; éviter l'effet catalogue uniforme.
- **Signatures** : halo turquoise discret, lignes de grille fines, micro-labels en capitales et bordures lumineuses.
- **Interaction** : chaque action principale doit rapprocher du contact ; les survols soulèvent légèrement les cartes et renforcent le liseré turquoise.
- **Animation** : apparition douce au scroll, mouvement lent des halos, transitions courtes et respect de `prefers-reduced-motion`.
- **Typographie** : `Manrope` pour les titres et le corps, avec `Space Mono` pour les labels techniques et les repères de navigation.
- **Essence de marque** : Boostia transforme les idées digitales en expériences web nettes, rapides et crédibles — pour les entreprises qui veulent avancer avec confiance.
- **Personnalité** : précise, énergique, accessible.
- **Voix** : directe, humaine, sans jargon inutile. Exemples : « Une présence en ligne qui travaille vraiment pour vous. » et « Parlons de ce que votre prochain site doit rendre possible. »
- **Couleur signature** : `#19C3B1`, reprise du symbole de montée du logo.
- **Logo** : utiliser la marque fournie comme point d'ancrage visuel, sur surface sombre pour conserver le contraste du wordmark clair.
