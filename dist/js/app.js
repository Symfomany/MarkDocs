(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
// declare let _: UnderscoreStatic;
// import * as _ from 'underscore';
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
        // let arr = _.countBy([1,3,5], function (item) {
        //     return item % 2;
        // });
        console.log(_.range(10));
        // let tab = _.map([1, 2, 3], function(num){ return num * 3; });
        // console.log(tab);
        if (typeof options.mdFiles === 'undefined' || !Array.isArray(options.mdFiles))
            throw new Error("mdFiles doit \u00EAtre un tableau...");
        this.showdown = showdown;
        this.options = options;
        this.loadPage(this.options.mdFiles, this.options.mdFiles[0]);
    }
    Object.defineProperty(Markdocs.prototype, "option", {
        /**
         * Getter option
         */
        get: function () {
            return this.options;
        },
        /**
         * Setter option
         */
        set: function (value) {
            this.option = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Loading page
     * @param  {Array<string>} arrayFiles [description]
     * @param  {[type]} filePage   [description]
     * @return {[type]}            [description]
     */
    Markdocs.prototype.loadPage = function (arrayFiles, filePage) {
        // -**- Lit le fichier md, le converti en html et envoie son contenu à la vue
        // this.readMdFile(filePage, data => {
        //
        //     this.sendHtml(this.parseMdToHtml(data));
        //
        // });
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
        // for (file in obj) {
        //     obj.push({
        //       name : Markdocs.rmExtension(file),
        //       path : file
        //     });
        // }
    };
    Markdocs.convertPathToCategory = function (file, lvl) {
        var arr = file.trim().split('/');
        if (arr.length > lvl + 1)
            return (arr[lvl]);
        return false;
    };
    Markdocs.readMdFile = function (urlFile, action) {
        var url = urlFile + ((/\?/).test(urlFile) ? "&" : "?") + (new Date()).getTime();
        //  request
        //    .get(url)
        //    .set("text/markdown; charset=UTF-8")
        //    .set("Cache-Control", "no-cache")
        //    .end(function(err, res){
        //      if(err){
        //        throw new Error('Il y a eu une erreur lors du chargement du fichier...');
        //      }
        //      else if(typeof action === 'function') {
        //          action(res);
        //      }
        //    });
    };
    return Markdocs;
}());
exports.Markdocs = Markdocs;
;

},{}],2:[function(require,module,exports){
"use strict";
var app_1 = require('./app');
var user = new app_1.Markdocs(null, {
    mdFiles: [
        'md/doc_markdocs.v1.md',
        'md/samples.md'
    ],
});
document.body.innerHTML = "<h3>Hye " + user + "</h3>";

},{"./app":1}],3:[function(require,module,exports){

},{}]},{},[3,2])


//# sourceMappingURL=app.js.map
