
// Quand mon document HTML est prêt
// avec ses elements
$(document).ready(function(){

	// $() sert a selectionner 1 ou
	// plusieurs elements
	// ex: Tous mes h1
	var element = $("h1");

	console.log(element);

	// la fonction text() permet d'extraire
	// le texte de mon h1
	console.log(element.text());

	// Selection par l'identifiant
	var paragraphe = $("p#joli");
	console.log(paragraphe.text());

	// selection par la classe, par la profondeur des elts
	// et  par leur hierarchie
	var link = $('div.box div div').text();
	console.log(link);

	//h1,p, tous les h3 de ma boite
	var elements = $('h1,p,div .box h3').text();
	console.log(elements);

	// h2 le frere imédiat de h1
	var titres = $('h1 + h2').text();
	console.log(titres);

	// tield : les elements frères après le h1
	var titres = $('h1 ~ h2').text();
	console.log(titres);


	/*
	* Pseudo Selecteur
    */

   	// eq(): égal à: indice qui commence par 0
   	var secondparagraphe = $('p:eq(2)').text();
   	console.log(secondparagraphe);

   	// Toute l'arborescence et toutes ses profondeurs
   	var titre = $('h3:eq(1)').text();
   	console.log(titre);


   	// :last a selectioner le dernier element
   	var dernierparagraphe = $('p:last').text();
   	console.log(dernierparagraphe);

   	// :span 1er element
   	var premierspan = $('span:first').text();
   	console.log(premierspan);

   	// css() modifie les propriété css
   	$('h3,span').css({
   		"color": "blue",
   		"font-size": "20px"
   	});



// Exo1:  Modifier la font size et la font family des 3 derniers
// paragraphes, des h1, et des liens qui ont une classe "link"

// Exo2: Modifier en style oblique tous les paragraphes
//  sauf le dernier

// Exo3: Modifier la bordure en rouge tous les inputs
// dans un formulaire
// et modifier la bordure en vert pour les textarea


// Exo4: Selection tous les titres h5
// dans les sections de classe "block"
// et le texte en gras pour le mettre en gris et en majuscule

// Selecti





});
