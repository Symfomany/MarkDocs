/**
 * 1/ Utilisation de Bower
 * 2/ Bonnes pratiques et liens sur AngularJS (STyleGUide,Tutos blog + OpenClassRoom, Video Graphikart)
 * 3/
 *
 *
 * 3/ Utilisation de Gulp
 *
 */


 LA NOTION DE DATA-BINDING

 + La plupart des frameworks ...
 +Il s'agit d'un moyen de lier la partie vue à la partie logique.
 + En d'autres termes, grâce à cela, les éléments de votre code HTML seront liés à votre contrôleur JavaScript.
 + Le premier au niveau du champ input : vous constatez la présence de l'attribut ng-model dans la balise HTML. En fait, le binding Angular se fait au moyen de ce que l'on appelle des directives. Vous les reconnaissez car elles sont précédées de ng.
 + Le deuxième au niveau de la balise <b>. Cette fois, nous utilisons la directive ng-bind a laquelle nous lions une fonction qui retourne la chaîne de caractère "mineur ou majeur" en fonction de l'âge.
+ Le premier est lié à la case à cocher. Nous avons lié sa valeur à la variable showContent. Lorsque la case est cochée, la variable contiendra la valeur true  et false sinon !
+ Le deuxième binding se fait au moyen de la directive ng-show. Cette directive prend un booléen en paramètre et affichera le contenu si ce booléen est vrai, sinon il sera caché.



LA NOTION D'INJECTION DES DEPENDANCES


+ Dans la théorie, l'injection de dépendances permet à des modules de ne pas se soucier de l'instanciation des modules dont ils dépendent. Il suffit d'appeler les dépendances et Angular se charge de les instancier et de les injecter pour nous.

NB: Angular possède nativement un certain nombre de modules comme $scope , $location ...

Remarquez que ces modules sont tous précédés par $ . C'est une convention qui nous permet de savoir qu'il s'agit effectivement de modules natifs à Angular. Nous verrons par la suite qu'il est bien évidemment possible de développer nos propres modules. Il sera donc déconseillé de suivre la même convention.


+ Il existe de multiples intérêts à pratiquer l'injection de dépendances.

- La simplicité. Avouez que c'est très pratique pour un développeur. Vous n'avez plus à vous soucier du comment instancier les modules que vous utilisez. Cela suit le principe du "least knowledge". Lorsque vous développez quelque chose, vous n'avez pas envie de vous soucier des autres composants, vous voulez juste les utiliser !

- La fiabilité. Lorsque votre module est chargé, vous avez la certitude que toutes ses dépendances sont chargées et que vous avez la possibilité de les utiliser.

- La réutilisabilité. Nous le verrons lorsque nous aborderons la partie des services, mais il s'agit d'un point très important. Lorsque vous développez des services permettant par exemple de faire des conversions de dates, il y a fort à parier que vous souhaiteriez pouvoir réutiliser ce module dans d'autres projets. L'injection de dépendances permet donc d'inciter les développeurs à créer de petits modules unitaires et à les assembler par la suite pour créer des systèmes plus conséquents.

- Les tests. C'est un point extrêmement important. Vous commencez à me connaître et vous savez que j'accorde une très grande importance aux tests. Si le module que vous souhaitez tester possède 10 dépendances, il est assez embêtant d'avoir à instancier les 10 modules afin de pouvoir juste tester notre module. À la place, nous allons dire au système d'utiliser des mocks (des bouchons) qui vont se comporter comme nos dépendances.
