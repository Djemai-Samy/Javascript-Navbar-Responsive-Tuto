# Javascript-Navbar-Responsive-Tuto

## Avant de commencer

Afin de pouvoir suivre le tutoriel, il est conseillé d'avoir des bases en HTML, CSS et Javascript.

[Lien vers le tuto sur mon site](http://localhost:3000/posts/javascript-menu-slide.article)

## 1/ Structure du projet

Pour l'exemple nous allons garder les chose simple. Nous auront donc 3 fchiers:

```bash

📦Javascript-Navbar-Responsive-Tuto
 ┣ 📜index.css
 ┣ 📜index.html
 ┣ 📜index.js
 ┗ 📜README.md

```

## 2/ La page HTML

Dans notre page html `index.html`, nous allons mettre dans la balise `head`:

- [Le lien du CDN des icones de Bootstrap.](https://icons.getbootstrap.com/#install)
- Le liens vers notre fichier css `index.css`.

---

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />

    <!--CDN Bootstrap pour l'icone du Menu-->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
    />

    <!--Notre style-->
    <link rel="stylesheet" href="index.css" />

    <title>Javascript Navbar Responsive Tuto</title>
  </head>
</html>
```

---

Puis dans dans la balise `body` nous allons ajouter:

- `Lignes 8-15`: La
  balise `nav` contenant une icone et une liste de liens.
- `Ligne 18`: Le lien vers
  notre fichier script `index.js`.

````html
<!DOCTYPE html>
<html lang="fr">
  <!--... La balise head ...-->

  <body>
    <!--La Navbar-->
    <nav>
      <i id="menu-button" class="bi bi-list"></i>
      <ul id="menu-closed">
        <a href="index.html">Acceuil</a>
        <a href="index.html">Contact</a>
        <a href="index.html">A propos</a>
      </ul>
    </nav>

    <!--Script pour l'interaction avec le bouton-->
    <script src="index.js"></script>
  </body>
</html>
```
````
