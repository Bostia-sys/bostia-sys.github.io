# Boostia — site vitrine

Site vitrine statique, responsive et sans dépendances de build pour **Boostia Web Development**. Il fonctionne en français et en arabe, avec bascule de langue côté client et affichage RTL pour l'arabe. Le projet est compatible avec GitHub Pages.

Le logo est maintenant intégré directement en SVG dans `index.html` : le site ne dépend plus d'un fichier de logo séparé ni d'un chemin `assets/`.

## Réglages rapides

Toutes les informations qui changent le plus souvent sont regroupées au début de `script.js` :

```js
const siteConfig = {
  contactEmail: 'votre-adresse@domaine.com',
  ordersEmail: 'commandes@domaine.com',
  whatsappNumber: '212600000000',
  emailSubject: 'Parlons de mon projet',
  orderSubject: 'Nouvelle commande',
  contactInfo: {
    name: 'Votre nom / entreprise',
    role: 'Direction & développement web',
    phone: '+000 00 00 00 00',
    location: 'Votre ville, votre pays',
    hours: 'Lun — Ven · 09:00 — 18:00'
  }
};
```

- `contactEmail` alimente les boutons de contact général.
- `ordersEmail` alimente le bouton **Passer une commande**, son adresse affichée dans l'encart contact et la destination FormSubmit du formulaire.
- `whatsappNumber` utilise le format international sans `+` ni espaces, par exemple `212699779715` pour un numéro marocain.
- `contactInfo` remplit l'encart des informations personnelles ou professionnelles.
- Le sélecteur **FR / عربي** est intégré dans la barre de navigation. La préférence est conservée dans le navigateur.

Les textes, la structure et le formulaire de demande sont dans `index.html`. Le formulaire demande le nom complet, l'e-mail, le numéro de téléphone, le type de service, le budget approximatif et la description du projet, puis envoie la demande par **FormSubmit** vers `ordersEmail`. Un bouton WhatsApp utilise `whatsappNumber` pour ouvrir une conversation avec un message prérempli. Les traductions sont regroupées dans l'objet `translations` de `script.js`. Les couleurs, espacements, typographies et points de rupture responsive sont regroupés dans `styles.css`.

## Activer FormSubmit

Remplacez `ordersEmail` dans `script.js` par l'adresse qui doit recevoir les demandes. Lors de la première soumission, FormSubmit envoie généralement un e-mail de confirmation à cette adresse : il faut cliquer sur le lien de confirmation avant de recevoir les prochaines demandes. Le formulaire utilise le modèle tableau, désactive le CAPTCHA et contient un champ anti-robot invisible.

Le formulaire contient également l'attribut `action="https://formsubmit.co/boostiawebdevelopment@gmail.com"` directement dans `index.html` comme solution de secours. En fonctionnement normal, `script.js` intercepte l'envoi et utilise l'endpoint AJAX FormSubmit afin que le visiteur reste sur la même page et voie un message de succès intégré. Après avoir remplacé l'adresse, il faut donc modifier cette valeur dans `index.html` et `ordersEmail` dans `script.js`, puis republier les deux fichiers. Si l'ancienne page FormSubmit générale s'ouvre encore, GitHub sert probablement une ancienne version : republiez tous les fichiers, attendez la mise à jour de GitHub Pages, puis rechargez avec `Ctrl + F5`. Si l'adresse n'a jamais été confirmée, vérifiez aussi le message d'activation FormSubmit reçu dans Gmail.

## Lancer localement

Avec Python :

```bash
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Publier sur GitHub Pages

1. Créer un dépôt GitHub et y déposer le contenu de ce dossier.
2. Dans **Settings → Pages**, choisir **Deploy from a branch**.
3. Sélectionner la branche principale et le dossier `/ (root)`.
4. Enregistrer, puis attendre l'URL GitHub Pages.

Le fichier `.nojekyll` est déjà inclus et les chemins utilisés sont relatifs, ce qui convient à GitHub Pages.

## Contenu

- `index.html` — page, sections, sélecteur de langue, formulaire de demande et logo SVG intégré.
- `styles.css` — direction artistique, responsive design et adaptations RTL.
- `script.js` — configuration des e-mails/coordonnées, traductions, menu mobile, année automatique et animations.
- `manus-routes.json` — manifeste de la route d'accueil.

## Si la page apparaît sans mise en forme

L'affichage brut avec les liens bleus et le texte noir signifie que `styles.css` ou `script.js` n'est pas dans le même dossier que `index.html`. Il faut publier **tout le contenu du dossier**, pas uniquement `index.html`, puis activer GitHub Pages depuis la branche et le dossier qui contiennent réellement `index.html`. Le logo étant intégré au HTML, aucun fichier d'image supplémentaire n'est nécessaire. Le fichier ZIP fourni a ses fichiers directement à la racine de l'archive pour éviter ce problème.
