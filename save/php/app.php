<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.2/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>

    <?php

    // inclusion du fichier où il y a ma classe
    require "src/Connexion.php";

     // new NomdemaClasse()
     // crée un objet de ma classe Connexion <=> instance de classe
    $connexion = new Connexion("localhost", "root", "djscrave");
    // getter est utilisé par mon objer $connexion
    echo "La connexion de mon serveur est: {$connexion->getHost()}";
    echo $connexion->getLogin();
    // la méthode getHost() retour l'attribut host
    echo "<pre>";
      print_r($connexion);
    echo "</pre>";

    $connexionTwo = new Connexion('localhost', "root", "djscrave", "utf_swedish");

    echo $connexionTwo->getPassword();
    echo $connexionTwo->getEncodage();

    // la méthode getHost() retour l'attribut host
    echo "<pre>";
      print_r($connexionTwo);
    echo "</pre>";


    echo "<h3>{$connexion->getConnexionEnChaine()}</h3>";
    echo "<h3>{$connexionTwo->getConnexionEnChaine()}</h3>";

    $resultat = $connexion->getFiveLastUser();
    foreach($resultat as $user){
      echo "<h4>{$user['nom']} {$user['prenom']}</h4>";
    }


    $nbCommentaire = $connexion->getNbComments();
    $nombre = $nbCommentaire->fetch();

    echo "<p>Le nombre de comms est ".$nombre['nb']."</p>";

    /**
     * PDO:
     * Connexion avec PDO sous Mysql => new PDO()
     * query() => execution d'une requête
     * fetch() => permete de récupérer 1 resultat
     * fetchAll() => Permet de recupérer tous LES resultats
     * prepare() et execute() => execution
     */




    // Ajouter un attribut encodage à notre objet,
    // ayant la valeur par defaut utf8,
    // et pouvoir le renseigner lors de la construction de mon objet
    // Ccrée un nouvel objet de la classe Connexion

    ?>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </body>
</html>



















 ?>
