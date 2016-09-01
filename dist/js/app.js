(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
/**
 * @class Markdocs
 * @version 1.0
 * TODO: importer underscore
 * TODO: convertToObject return void ?
 * TODO: user superagent
 * TODO: user Promises
 * TODO: use multi assignements
 * TODO
 */
var Markdocs = (function () {
    /**
     * [constructor description]
     */
    function Markdocs(showdown, options) {
        /**
         * All default options
         */
        this.options = {
            mdFiles: undefined,
            showdownOptions: {
                tables: true
            },
            genericNames: {
                container_docBody: 'markdocs-render',
                container_docNav: 'markdocs-nav',
                container_navGenerated: 'markdocs-nav-generated',
                container_filesNav: 'markdocs-nav-files',
                container_loadRender: 'markdocs-renderLoad',
                data_btnFilesNav: 'file-name'
            }
        };
        if (typeof options.mdFiles === 'undefined' || !Array.isArray(options.mdFiles))
            throw new Error("mdFiles doit \u00EAtre un tableau...");
        this.showdown = showdown;
        this.options = options;
        this.loadPage(this.options.mdFiles, this.options.mdFiles[0]);
    }
    /**
     * Loading page
     * @param  {Array<string>} arrayFiles [description]
     * @param  {[type]} filePage   [description]
     * @return {[type]}            [description]
     */
    Markdocs.prototype.loadPage = function (arrayFiles, filePage) {
        var _this = this;
        // -**- Lit le fichier md, le converti en html et envoie son contenu à la vue
        this.readMdFile(filePage, function (data) {
            _this.sendHtml(_this.parseMdToHtml(data));
        });
    };
    /**
     * Add text to html
     * @param  {string} txt texte stringify
     */
    Markdocs.prototype.sendHtml = function (txt) {
        document.querySelector("#" + this.options.genericNames.container_docBody).innerHTML = "<div id=\"" + this.options.genericNames.container_loadRender + "\">" + txt + "</div>";
    };
    /**
     * Convert to html
     * @param  {[md]} md Mardown
     */
    Markdocs.prototype.parseMdToHtml = function (md) {
        for (var opp in this.options.showdownOptions) {
            this.showdown.setOption(opp, this.options.showdownOptions[opp]);
        }
        return this.showdown.makeHtml(md);
    };
    /**
     * Remove extention from file
     * @param  {string} file [description]
     */
    Markdocs.rmExtension = function (file) {
        return file.trim().replace(/\..+$/, '');
    };
    /**
     * [convertToObject description]
     * @param  {Array<string>} arry [description]
     * @param  {[type]}        obj   [description]
     */
    Markdocs.convertToObject = function (array, obj) {
        for (var i = 0; array.length > i; i++) {
            obj[i] = {};
            obj[i].name = Markdocs.rmExtension(array[i]);
            obj[i].path = array[i];
        }
    };
    Markdocs.prototype.readMdFile = function (urlFile, action) {
        var reader = new XMLHttpRequest();
        reader.onload = function () {
            var data = this.responseText;
            if (typeof action === 'function') {
                action(data);
            }
        };
        reader.open("GET", urlFile + ((/\?/).test(urlFile) ? "&" : "?") + (new Date()).getTime(), true);
        reader.overrideMimeType("text/markdown; charset=UTF-8");
        reader.setRequestHeader("Cache-Control", "no-cache");
        if (reader.status == 0 || reader.status == 200) {
            return reader.send();
        }
        else {
            throw new Error('Il y a eu une erreur lors du chargement du fichier...');
        }
    };
    return Markdocs;
}());
;
var user = new Markdocs(null, {
    mdFiles: [
        'md/doc_markdocs.v1.md',
        'md/samples.md'
    ],
});
document.body.innerHTML = "<h3>Hye " + user + "</h3>";

},{}]},{},[1])


//# sourceMappingURL=app.js.map
