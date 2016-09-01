(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/// <reference path="jquery.d.ts" />
/// <reference path="moment.d.ts" />
"use strict";
/**
 * Default
 */
exports.Default = {
    taille: 30,
    poid: 1.6,
    hauteur: 11
};
/**
 * class Animal
 */
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

},{}],2:[function(require,module,exports){
"use strict";
var app_1 = require('./app');
var app_2 = require('./app');
var chien = new app_1.Animal("Moka", "noir", { "taille": 30, poid: 1.5 });
console.log(chien);
console.log(app_2.Default);

},{"./app":1}]},{},[2])


//# sourceMappingURL=app.js.map
