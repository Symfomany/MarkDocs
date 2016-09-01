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
  export class Markdocs {


      /**
       * Object Showdown
       */
      protected showdown: any;


      /**
       * All default options
       */
      protected options: Option = {
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

        if( typeof options.mdFiles === 'undefined' || !Array.isArray(options.mdFiles))
          throw new Error(`mdFiles doit être un tableau...`);

        this.showdown = showdown;
        this.options = options;
        this.loadPage(this.options.mdFiles, this.options.mdFiles[0]);
      }

     /**
      * Setter option
      */
     set option (value:Option){
        this.option = value;
     }

     /**
      * Getter option
      */
     get option (): Option{
       return this.options;
     }



      /**
       * Loading page
       * @param  {Array<string>} arrayFiles [description]
       * @param  {[type]} filePage   [description]
       * @return {[type]}            [description]
       */
      public loadPage(arrayFiles: Array<string>, filePage: string):void{

        // -**- Lit le fichier md, le converti en html et envoie son contenu à la vue
        this.readMdFile(filePage, data => {

            this.sendHtml(this.parseMdToHtml(data));

        });


      }


      /**
       * Add text to html
       * @param  {string} txt texte stringify
       */
       public sendHtml(txt:string):void{
         document.querySelector(`#${this.options.genericNames.container_docBody}`).innerHTML = `<div id="${this.options.genericNames.container_loadRender}">${txt}</div>`
       }


       /**
        * Convert to html
        * @param  {[md]} md Mardown
        */
       public parseMdToHtml(md:any):string{

         for (let opp in this.options.showdownOptions){
             this.showdown.setOption(opp, this.options.showdownOptions[opp]);
         }
         return this.showdown.makeHtml(md);
       }

       /**
        * Remove extention from file
        * @param  {string} file [description]
        */
       public static rmExtension(file: string):string{
         return file.trim().replace(/\..+$/, '');
       }

       /**
        * [convertToObject description]
        * @param  {Array<string>} arry [description]
        * @param  {[type]}        obj   [description]
        */
       public static convertToObject(array: Array<string>, obj: Array<any>):void{
          for (file in obj) {
              obj.push({
                name : Markdocs.rmExtension(file),
                path : file
              });
          }
       }


      public static convertPathToCategory(file, lvl): string|boolean {

          let arr = file.trim().split('/');

          if (arr.length > lvl + 1)
              return (arr[lvl]);

          return false;
      }


       public static readMdFile(urlFile: string, action?:any):any{

         let url = urlFile + ((/\?/).test(urlFile) ? "&" : "?") + (new Date()).getTime();

         request
           .get(url)
           .set("text/markdown; charset=UTF-8")
           .set("Cache-Control", "no-cache")
           .end(function(err, res){
             if(err){
               throw new Error('Il y a eu une erreur lors du chargement du fichier...');
             }
             else if(typeof action === 'function') {
                 action(res);
             }
           });

       }


  };
