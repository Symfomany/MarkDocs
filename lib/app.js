"use strict";
var _ = require('lodash');
var Markdocs = (function () {
    function Markdocs(showdown, options) {
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
        console.log(_([1, 2, 3]).map(function (x) { return x * 2; }));
        if (typeof options.mdFiles === 'undefined' || !Array.isArray(options.mdFiles))
            throw new Error("mdFiles doit \u00EAtre un tableau...");
        this.showdown = showdown;
        this.options = options;
        this.loadPage(this.options.mdFiles, this.options.mdFiles[0]);
    }
    Object.defineProperty(Markdocs.prototype, "option", {
        get: function () {
            return this.options;
        },
        set: function (value) {
            this.option = value;
        },
        enumerable: true,
        configurable: true
    });
    Markdocs.prototype.loadPage = function (arrayFiles, filePage) {
    };
    Markdocs.prototype.sendHtml = function (txt) {
        document.querySelector("#" + this.options.genericNames.container_docBody).innerHTML = "<div id=\"" + this.options.genericNames.container_loadRender + "\">" + txt + "</div>";
    };
    Markdocs.prototype.parseMdToHtml = function (md) {
        for (var opp in this.options.showdownOptions) {
            this.showdown.setOption(opp, this.options.showdownOptions[opp]);
        }
        return this.showdown.makeHtml(md);
    };
    Markdocs.rmExtension = function (file) {
        return file.trim().replace(/\..+$/, '');
    };
    Markdocs.convertToObject = function (array, obj) {
    };
    Markdocs.convertPathToCategory = function (file, lvl) {
        var arr = file.trim().split('/');
        if (arr.length > lvl + 1)
            return (arr[lvl]);
        return false;
    };
    Markdocs.readMdFile = function (urlFile, action) {
        var url = urlFile + ((/\?/).test(urlFile) ? "&" : "?") + (new Date()).getTime();
    };
    return Markdocs;
}());
exports.Markdocs = Markdocs;
;
