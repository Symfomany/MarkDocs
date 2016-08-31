/**
 * This example:
 *  Uses the built-in BrowserSync server for HTML files
 *  Watches & compiles SASS files
 *  Watches & injects CSS files
 */
var browserSync = require('browser-sync');
var gulp        = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var notify = require("gulp-notify");
var rename = require('gulp-rename');
var	plumber = require('gulp-plumber');
//init tyo reload brower
var reload      = browserSync.reload;
var ts = require('gulp-typescript');
var tsify = require('tsify');
var browserify = require('browserify');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function() {
    browserSync({
        port: 8066,
        server: {
            baseDir: "./", //base
            index: "index.html" //fichier a chargé
        }
    });
});

// reload a server
gulp.task('browser-reload', function (){
  reload({stream:true});
});

//For js
gulp.task('js', function() {
  var bundler = browserify({debug: true})
       .add('./lib/app.ts')
       .plugin(tsify);

   return bundler.bundle()
       .on('error', function(err) {
          gutil.log(err);
          this.emit('end');
       })
       .pipe(source('app.js'))
       .pipe(buffer())
       .pipe(sourcemaps.init({loadMaps: true}))
       //.pipe(uglify({ mangle: false }))
       .pipe(sourcemaps.write('./', {includeContent: true}))
       .pipe(gulp.dest('dist/js/'))
       .pipe(notify("TypeScript Modifié :)"))
       .pipe(reload({stream:true}));
});


// Default task to be run with `gulp`
gulp.task('default', ['js', 'browser-sync'], function () {
    gulp.watch(["./lib/*.ts"], ['js']);
    gulp.watch(["*.html"]).on('change', browserSync.reload); //reload on HTML
});
