var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css');
 	sass      = require('gulp-sass'),       // Conversion des SCSS en CSS
    uglify    = require('gulp-uglify'),     // Minification/Obfuscation des JS
    notify = require("gulp-notify"),
    concat = require('gulp-concat');

     // Minification des CSS

// Créer une tache default
gulp.task('default', function() {
  
});



// tache SASS
gulp.task('sass', function() {
return gulp.src('./sass/*.sass')    // Prend en entrée les fichiers *.scss
    .pipe(sass())
    .pipe(concat('productionsass.min.css'))
    .pipe(minifyCss())                 // Minifie le CSS qui a été généré
    .pipe(gulp.dest('./dist/css'))  // Sauvegarde le tout dans /src/style
    .pipe(notify("Finish SASS CSS!"));

});


// Créer une tache css
gulp.task('css', function() {
  // compresser ma css
  // concatener ma css
  console.log('Demarrage de ma tache css...');

return gulp.src('./css/*.css')    // Prend en entrée les fichiers *.scss
    .pipe(concat('production.min.css'))
    .pipe(minifyCss())                 // Minifie le CSS qui a été généré
    .pipe(gulp.dest('./dist/css'))  // Sauvegarde le tout dans /src/style
    .pipe(notify("Finish CSS!"));

});


// WATCH TASK
gulp.task('watch', function() 
{
	gulp.watch('./sass/*.sass', ['sass']);
  gulp.watch('./css/*.css', ['css']);
});


//default : watch
gulp.task('default', ['watch']);



