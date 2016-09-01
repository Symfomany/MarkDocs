"use strict";
exports.Default = {
    taille: 30,
    poid: 1.6,
    hauteur: 11
};
var Animal = (function () {
    function Animal(name, couleur, poid) {
        this.name = name;
        this.couleur = couleur;
        this.poid = poid;
        $('h3').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }
    return Animal;
}());
exports.Animal = Animal;
