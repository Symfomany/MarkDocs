import {Option} from './option';

/**
 * @class Markdocs
 * @version 1.0
 * TODO: importer underscore
 * TODO: convertToObject return void ?
 * TODO: user superagent
 * TODO: user Promises
 * TODO: use multi assignements
 * TODO
 */
class Markdocs {


    /**
     * Object Showdown
     */
    public showdown: any;


    /**
     * All default options
     */
    public options: Option = {
        mdFiles: undefined,
        showdownOptions: {
            tables: true
        },
        genericNames: {
            container_docBody: 'markdocs-render',
            container_docNav: 'markdocs-nav',
            container_navGenerated: 'markdocs-nav-generated',
            container_filesNav: 'markdocs-nav-files',
            container_loadRender: 'markdocs-renderLoad',
            data_btnFilesNav: 'file-name'
        }
    };

    /**
     * [constructor description]
     */
    public constructor(showdown:any, options?: Option) {

      console.log('okkk');
      if( typeof options.mdFiles === 'undefined' || !Array.isArray(options.mdFiles))
        throw new Error(`mdFiles doit être un tableau...`);

      this.showdown = showdown;
      this.options = options;
      this.loadPage(this.options.mdFiles, this.options.mdFiles[0]);
    }

    /**
     * Merge all option with default params
     */
    public merge(option: Option){}


    /**
     * Loading page
     * @param  {Array<string>} arrayFiles [description]
     * @param  {[type]} filePage   [description]
     * @return {[type]}            [description]
     */
    public loadPage(arrayFiles: Array<string>, filePage: string){

      // -**- Lit le fichier md, le converti en html et envoie son contenu à la vue
      this.readMdFile(filePage, data => {

          this.sendHtml(this.parseMdToHtml(data));

      });


    }


    /**
     * Add text to html
     * @param  {string} txt texte stringify
     */
     public sendHtml(txt:string){
       document.querySelector(`#${this.options.genericNames.container_docBody}`).innerHTML = `<div id="${this.options.genericNames.container_loadRender}">${txt}</div>`
     }


     /**
      * Convert to html
      * @param  {[md]} md Mardown
      */
     public parseMdToHtml(md:any){

       for (let opp in this.options.showdownOptions){
           this.showdown.setOption(opp, this.options.showdownOptions[opp]);
       }
       return this.showdown.makeHtml(md);
     }

     /**
      * Remove extention from file
      * @param  {string} file [description]
      */
     public static rmExtension(file: string){

       return file.trim().replace(/\..+$/, '');
     }

     /**
      * [convertToObject description]
      * @param  {Array<string>} arry [description]
      * @param  {[type]}        obj   [description]
      */
     public static convertToObject(array: Array<string>, obj){
        for(let i=0; array.length > i; i++){
            obj[i] = {};
            obj[i].name = Markdocs.rmExtension(array[i]);
            obj[i].path = array[i];
        }
     }


     readMdFile (urlFile: string, action: any):any{

       let reader = new XMLHttpRequest();

       reader.onload = function(){
           let data = this.responseText;

           if(typeof action === 'function') {
               action(data);
           }
       };

       reader.open("GET", urlFile + ((/\?/).test(urlFile) ? "&" : "?") + (new Date()).getTime(), true);

       reader.overrideMimeType("text/markdown; charset=UTF-8");
       reader.setRequestHeader("Cache-Control", "no-cache");

       if(reader.status == 0 || reader.status == 200) {
           return reader.send();
       }else{
           throw new Error('Il y a eu une erreur lors du chargement du fichier...');
       }

     }


};



var user = new Markdocs(
  null,
  {
      mdFiles: [
          'md/doc_markdocs.v1.md',
          'md/samples.md'
      ],
  }
);
document.body.innerHTML =  `<h3>Hye ${user}</h3>`;
