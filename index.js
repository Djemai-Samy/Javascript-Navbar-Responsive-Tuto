//Sélectionner l'élément HTML représentant le bouton du menu.
const menuButtonElement = document.getElementById("menu-button");

//Ajouter un observateur d'évènements sur le bouton
menuButtonElement.addEventListener("click", () => {
  //Sélectionner l'élément HTML ul représentant not menu
  const menuElement = document.querySelector(".menu");

  //Tester si le menu est fermé
  if (menuElement.id == "menu-closed") {
    //Changer l'id de l'élément pour l'afficher
    menuElement.id = "menu-opened";
  } else {
    //Sinon changer l'id de l'élément pour le cacher
    menuElement.id = "menu-closed";
  }
});
