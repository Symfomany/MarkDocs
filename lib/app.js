"use strict";
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
        console.log('okkk');
        if (typeof options.mdFiles === 'undefined' || !Array.isArray(options.mdFiles))
            throw new Error("mdFiles doit \u00EAtre un tableau...");
        this.showdown = showdown;
        this.options = options;
        this.loadPage(this.options.mdFiles, this.options.mdFiles[0]);
    }
    Markdocs.prototype.merge = function (option) { };
    Markdocs.prototype.loadPage = function (arrayFiles, filePage) {
        var _this = this;
        this.readMdFile(filePage, function (data) {
            _this.sendHtml(_this.parseMdToHtml(data));
        });
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
