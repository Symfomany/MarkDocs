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
        if (typeof options.mdFiles === 'undefined' || !Array.isArray(options.mdFiles))
            throw new Error("mdFiles doit \u00EAtre un tableau...");
        this.showdown = showdown;
        this.options = options;
        this.loadPage(this.options.mdFiles, this.options.mdFiles[0]);
    }
<<<<<<< HEAD
=======
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
>>>>>>> b1171884ed09b62fccdf407d22c84a14c18de03b
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
        for (file in obj) {
            obj.push({
                name: Markdocs.rmExtension(file),
                path: file
            });
        }
    };
    Markdocs.convertPathToCategory = function (file, lvl) {
        var arr = file.trim().split('/');
        if (arr.length > lvl + 1)
            return (arr[lvl]);
        return false;
    };
    Markdocs.readMdFile = function (urlFile, action) {
        var url = urlFile + ((/\?/).test(urlFile) ? "&" : "?") + (new Date()).getTime();
        request
            .get(url)
            .set("text/markdown; charset=UTF-8")
            .set("Cache-Control", "no-cache")
            .end(function (err, res) {
            if (err) {
                throw new Error('Il y a eu une erreur lors du chargement du fichier...');
            }
            else if (typeof action === 'function') {
                action(res);
            }
        });
    };
    return Markdocs;
}());
exports.Markdocs = Markdocs;
;
