(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
/**
 * @class Markdocs
 * @version 1.0
 */
var Markdocs = (function () {
<<<<<<< HEAD
    function Markdocs() {
    }
    /**
=======
    /**
     * Constructor
     */
    function Markdocs(options) {
        this.options = options;
    }
    /**
     * Merge all option with default params
     */
    Markdocs.prototype.merge = function (option) { };
    /**
>>>>>>> eb653e30da11fd74664654ce42156b9e112da327
     * Loading page
     * @param  {Array<string>} arrayFiles [description]
     * @param  {[type]} filePage   [description]
     * @return {[type]}            [description]
     */
<<<<<<< HEAD
    Markdocs.prototype.loadPage = function (arrayFiles, filePage) {
    };
=======
    Markdocs.prototype.loadPage = function (arrayFiles, filePage) { };
>>>>>>> eb653e30da11fd74664654ce42156b9e112da327
    return Markdocs;
}());
;

},{}]},{},[1])


//# sourceMappingURL=app.js.map
