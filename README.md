# Javascript-Navbar-Responsive-Tuto

Tutoriel pour créer une Navbar responsive avec HTML, CSS et Javascript.

La Navbar s'adaptera à la taille de l'écran, et affichera un bouton pour dérouler le menu pour petit écran.

## Avant de commencer

Afin de pouvoir suivre le tutoriel, il est conseillé d'avoir des bases en HTML, CSS et Javascript.

[Suivre le tutoriel directement sur mon site ->](https://djemai-samy.com/posts/javascript-menu-slide.article)

## 1/ Structure du projet

Pour l'exemple, nous allons garder les choses simples. Nous aurons donc 3 fichiers:

```bash

📦Javascript-Navbar-Responsive-Tuto
 ┣ 📜index.html
 ┣ 📜index.css
 ┗ 📜index.js

```

## 2/ La page HTML

Dans notre page html `index.html`, nous allons mettre dans la balise `head`:

- [Le lien du CDN des icônes de Bootstrap.](https://icons.getbootstrap.com/#install)
- Le lien vers notre fichier css `index.css`.

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

Puis dans la balise `body` nous allons ajouter:

- La balise `nav` contenant une icône et une liste de liens.
- Le lien vers notre fichier script `index.js`.

```html
<!DOCTYPE html>
<html lang="fr">
  <!--... La balise head ...-->

  <body>
    <!--La Navbar-->
    <nav>
      <i id="menu-button" class="bi bi-list"></i>
      <span class="brand">BRAND</span>
      <ul id="menu-closed" class="menu">
        <li>
          <a class="link" href="index.html">Acceuil</a>
        </li>
        <li>
          <a class="link" href="index.html">Contact</a>
        </li>
        <li>
          <a class="link" href="index.html">A propos</a>
        </li>
      </ul>
    </nav>

    <!--Script pour l'interaction avec le bouton-->
    <script src="index.js"></script>
  </body>
</html>
```

## 3/ Le style

Nous allons commencer par s'occuper du style pour grands écrans:

```css
* {
  list-style: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

header,
main {
  max-width: 800px;
  margin: auto;
  padding: 0.5em;
}

nav {
  position: sticky;
  top: 0;
  height: 3.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(4, 36, 84);
}

.menu {
  position: relative;
  display: flex;
}

.link {
  color: whitesmoke;
  padding: 0 0.5em;
}

/*Cacher le bouton */
#menu-button {
  display: none;
}

.brand {
  color: whitesmoke;
  padding: 0 10px;
}
```

- Le bouton du menu ```#menu-button``` est caché pour grands écrans. Dans l'étape suivante, nous allons changer son style et l'afficher pour les écrans inférieurs à 600px.

---

Pour pouvoir modifier le style des éléments suivant la taille de l'écran, nous allons utiliser le query `@media`:

- 1: Afficher le bouton `#menu-button`.
- 2: Mettre le menu en position absolue, pour pouvoir changer sa position.
- 3: Ajouter une transition quand l'une des propriétés est modifiée.
- 4: Les selecteurs `#menu-closed` et `#menu-opened` sont responsables de la position du menu (ouvert ou fermé)

```css
@media screen and (max-width: 600px) {
  #menu-button {
    /*1: Afficher le bouton*/
    display: inline;
    color: whitesmoke;
    font-size: 2em;
    padding: 0 0.5em;
    cursor: pointer;
  }
  .menu {
    /*2: Mettre le menu en position absolue */
    position: absolute;
    top: 3.6em;
    background-color: rgba(4, 36, 84, 0.952);
    flex-direction: column;
    padding: 2em;
    min-width: 50%;
    /*3: Ajouter une transition*/
    transition: all 0.5s ease-in-out;
  }
  /*4: Selecteurs pour changer la position*/
  #menu-closed {
    left: -100%;
  }
  #menu-opened {
    left: 0;
  }
}
```

<img
    style="width: 100%; maxHeight: 60vh; objectFit: contain;"
    src="https://djemai-samy.com/blog/2.programmation/1.web/3.javascript/1.javascript-menu-slide/JS-MenuSlide-3.gif"
  />

## 4/ Le Javascript

Nous allons utiliser le Javascript dans le fichier `index.js`, pour ajouter de l'interaction avec notre page, et afficher ou cacher le menu:

- `1`: Sélectionner l'élément HTML représentant le bouton du menu avec son id `menu-button`.
- `2`: Ajouter un observateur d'événements clique, qui exécute une fonction.

Dans la fonction qui s'éxecute lors du clique, nous allons:

- `3`: Sélectionner l'élément HTML représentant notre menu avec sa classe `.menu`.
- `4`: Tester si son id est égal à `menu-closed`:
  - `5`: Nous lui affectons la valeur `menu-opened`
  - `6`: Sinon nous lui affectons la valeur `menu-closed`

```js
//1: Sélectionner l'élément HTML représentant le bouton du menu.
const menuButtonElement = document.getElementById("menu-button");

//2: Ajouter un observateur d'événements sur le bouton
menuButtonElement.addEventListener("click", () => {
  //3: Sélectionner l'élément HTML ul représentant not menu
  const menuElement = document.querySelector(".menu");

  //4: Tester si le menu est fermé
  if (menuElement.id == "menu-closed") {
    //5: Changer l'id de l'élément pour l'afficher
    menuElement.id = "menu-opened";
  } else {
    //6: Sinon changer l'id de l'élément pour le cacher
    menuElement.id = "menu-closed";
  }
});
```

<img
    style="width: 100%; maxHeight: 60vh; objectFit: contain;"
    src="https://djemai-samy.com/blog/2.programmation/1.web/3.javascript/1.javascript-menu-slide/4_MenuSlideJS.gif"
  />

---

## FIN

---
