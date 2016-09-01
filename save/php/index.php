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


    <div class="container">
      <?php

        echo "<h3 style='color: blue'>
        Welcome in the new world!</h3>";
        $nombre = 123;
        echo "<p>Mon nombre est {$nombre}</p>"; //inline
        /*
          * Commentaire en bloc
         */
        echo "<p>Mon autre concaténation est ".$nombre."</p>";

        if ($nombre < 125) {
          echo "<p>Je n'ai pas l'age de Gandalf</p>";
        }else{
          echo "<p>Vous ne passerez pas</p>";
        }

        for ($i=0; $i < 10; $i++) {
          echo "<p>Boucle {$i} </p>";
        }

        switch ($nombre) {
          case 123:
            echo "Nombre 123";
            break;

          default:
            # code...
            break;
        }

        $tableau = ["Julien", "Florian", "Damien", "Mathias"];

        for ($i=0; $i < count($tableau) ; $i++) {
          echo "<p>{$tableau[$i]}</p>";
        }

        // Tableau associatif
        // clefs => valeur
        $profil = [
          "nom" => "Boyer",
          "prenom" => "Julien",
          "age" => 28,
          "email" => "julien@meetserious.com",
          "ville" => "Lyon",
          "sports" => ['Rugby', 'Boxe', 'Danse']
        ];

        $profil['age'] = 15;
        echo $profil["ville"];
        $profil['sports'][1] = "Basket-Ball"; //modifier Boxe

        foreach ($profil['sports'] as $value) {
          echo $value;
        }
        //boucle associative
        foreach ($profil as $key => $value) {
          if(is_array($value)){
                foreach($value as $val){
                  echo $val;
                }
          }else{
            echo "<p>{$key} : {$value}</p>";
          }
        }

      ?>
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </body>
</html>
