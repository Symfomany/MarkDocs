var app = angular.module('myApp', []);

app.controller('MainCtrl', function MainCtrl($scope) {

  $scope.title = "Mon titre initial";

  $scope.datas = ["Julien", "Damien", "Mathias"];

  $scope.ajout = function(){
    $scope.datas.push('Florian', 'Matthieu')
  }

});
