"use strict";
var app_1 = require('./app');
var user = new app_1.Markdocs(null, {
    mdFiles: [
        'md/doc_markdocs.v1.md',
        'md/samples.md'
    ],
});
document.body.innerHTML = "<h3>Hye " + user + "</h3>";
