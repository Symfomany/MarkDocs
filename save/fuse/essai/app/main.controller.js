/**
* Recommended
*
* no globals are left behind
*/

(function() {


    /**
     * Strict Mode pour le Javascript
     */
    'use strict';

    angular
        .module('MyApp', []) // chargement du Module
        .controller('mainCtrl', mainCtrl); // chargement du controller




    function mainCtrl() {
        var vm = this; //this représente la scope, la couche entre le HTML et le JS

        vm.title = "Okay ça marche!"
        vm.verifier = verifier
        vm.datas = [
          {title: "Le JOlie Vert"},
          {title: "Le JOlie Bleus"},
          {title: "Le JOlie Blanc"},
          {title: "Le JOlie Rouge"},
        ];

        function verifier(elt){
              console.log(elt);
        };


        // activate();
        //
        // function activate() {
        //     console.log("coucou");
        //
        // }
    }

})();
