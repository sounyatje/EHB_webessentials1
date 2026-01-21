// On récupère le bouton sur lequel on va cliquer
let btn = document.getElementById('btn1');

// On récupère la div container
// Cette div est le PARENT dans lequel on veut ajouter le paragraphe
// En JavaScript, on ne peut pas ajouter un élément sans parent
let container = document.getElementById('container');

// On écoute l'événement "click" sur le bouton
btn.addEventListener('click', function () {

  // On crée un nouvel élément <p>
  let p = document.createElement('p');

  // On crée le texte à placer dans le paragraphe
  let text = document.createTextNode('Yes! Het werkt');

  // On ajoute le texte dans le paragraphe
  p.appendChild(text);

  // On ajoute le paragraphe à la fin de la div container
  // appendChild fonctionne toujours comme : parent.appendChild(enfant)
  // Sans container, JavaScript ne saurait pas où insérer le paragraphe dans le DOM
  container.appendChild(p);

});
