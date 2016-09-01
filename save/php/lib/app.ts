/// <reference path="jquery.d.ts" />
/// <reference path="moment.d.ts" />

/**
 * Default
 */
export const Default = {
  taille: 30,
  poid: 1.6,
  hauteur: 11
}

/**
 * class Animal
 */
export class Animal{

  protected name:string;
  protected couleur:string;
  protected poid:any;

  constructor(name:string, couleur:string, poid:any){
    this.name = name;
    this.couleur = couleur;
    this.poid = poid;
    $('h3').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  }


}
