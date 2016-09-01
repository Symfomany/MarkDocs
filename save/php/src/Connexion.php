<?php

/**
 * @class Connexion
 */
class Connexion{

  protected $host;

  protected $login;

  protected $password;

  protected $encodage;

  protected $bdd;

  /**
   * Constructeur: construire un objet
   * @param [type] $host     [description]
   * @param [type] $login    [description]
   * @param [type] $password [description]
   */
  public function __construct(
  $host, $login, $password, $encodage = "utf8", $dbName="testl10"
  ){

    $this->host = $host;
    $this->login = $login;
    $this->password = $password;
    $this->encodage = $encodage;

    //1er argument: chaine (DSN) host:serveur;dbName : nom de la base
    $this->bdd = new PDO('mysql:host='.$host.';dbname='.$dbName, $login, $password);
  }

/**
 * Getters
 */
  public function getHost(){
    // $this : représente l'objet courant
    // host: l'attribut de l'objet
    return $this->host;
  }

  public function getLogin(){
    return $this->login;
  }

  public function getPassword(){
    return $this->password;
  }

  public function getEncodage(){
      return $this->encodage;
  }


  public function getConnexionEnChaine(){
      return "Ma connexion est: {$this->host} et mon login est {$this->login} et mon password est {$this->password}";
  }

  /**
   * Retourne les 5 derniers utilisateurs
   */
  public function getFiveLastUser(){
      $sql = "SELECT * FROM user ORDER BY date_created DESC LIMIT 5";
      return $this->bdd->query($sql);
  }

  /*
  *  Retourne le nombre de commentaire
   */
  public function getNbComments(){
    $sql = "SELECT COUNT(*) AS nb FROM comment";
    return $this->bdd->query($sql);
  }




}













 ?>
