$(document).ready(function() {

  var regexPseudo = /^[^0-9](?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9\_]{6,}$/;
  var regexFlickr = /^((http|ftp)s?:\/\/)?(www\.)?(flickr\.com\/)[\w\-\/\:]+(\.jpe?g\/?|\.img\/?|\.png\/?|\.gif\/?)$/i;
  var regexBirth =  /^[0-9]{2}[\-\/ ][0-9]{2}[\-\/ ][0-9]{4}$/i;
  var regexCB16 = /^([0-9]{4}[\-\.\/ ]?){3}[0-9]{4}$/;
  var regCbExpiration = /^(([0][\d]|[1][012])\/[\d]{2})$/;

  // exemple pour mot de passe (groupage)
  // ^(?=.*[0-9])(?=.*[a-z])(?=.*[\@\_\-])(?=.*[A-Z])([a-zA-Z0-9\-]{8,})$

  /**
   *  Validation for class wraning & success
   * @param  {[type]} elt [description]
   * @return {[type]}     [description]
   */
  function validation(elt, condition){
    if (!condition) {
      elt.parent('div').addClass('has-warning');
    } else {
      elt.parent('div').removeClass('has-warning');
    }
  }


  $('form button#send').click(function(){

    if (!$("input[name=sex]").is(":checked")) {
      $("input[name=sex]").parent('div').addClass('has-warning');
    } else {
      $("input[name=sex]").parent('div').removeClass('has-warning');
    }

  });

  $('input#pseudo').keyup(function(){

    if(!regexPseudo.test($(this).val())){
      $(this).parent('div').addClass('has-warning');
    }else{
      $(this).parent('div').removeClass('has-warning');
    }

  })

  $('input#avatar').keyup(function(){
      if(!regexFlickr.test($(this).val())){
        $(this).parent('div').addClass('has-warning');
      }else{
        $(this).parent('div').removeClass('has-warning');
      }
  });

    $('input#birthDate').keyup(function(){
        // validat date
        if(!regexBirth.test($(this).val()) || !isAdult($(this).val())){
          $(this).parent('div').addClass('has-warning');
        }else{
          $(this).parent('div').removeClass('has-warning');
        }

    });

    $("select#hobbies").change(function(){
      console.log($(this).val());

        if($(this).val().length < 2 || $(this).val().length > 5){
          $(this).parent('div').addClass('has-warning');
        }else{
          $(this).parent('div').removeClass('has-warning');
        }

    });


    $('input#cbNumber').keyup(function(){
        // validat date
        if(!regexCB16.test($(this).val())){
          $(this).parent('div').addClass('has-warning');
        }else{
          $(this).parent('div').removeClass('has-warning');
        }

    });

    $('input#cbExpiration').keyup(function(){
        // validat date
        // console.log($(this).val());
        if(!regCbExpiration.test($(this).val())
        || !valideExpire($(this).val())){
          $(this).parent('div').addClass('has-warning');
        }else{
          $(this).parent('div').removeClass('has-warning');
        }

    });



    function isAdult(date) {
       var annee = parseInt(date.substring(6,10));
       var mois = parseInt(date.substring(4,6)) - 1;
       var jour = parseInt(date.substring(0,2));

       var dateUser = new Date(annee+18,mois,jour);
       var now = new Date();// today

       var m = moment(date,  ["DD/MM/YYYY"]);
       return now >= dateUser && m.isValid();
    }

    /**
     * [valideExpire description]
     * @param  {[type]} datefr [description]
     * @return {[type]}        [description]
     * @todo: A finir, A deboger
     */
    function valideExpire(datefr) {
       var mois = parseInt(datefr.substr(0,2)) - 1;
       var annee = parseInt("20"+datefr.substr(3,2));

       var dateUser = new Date(annee,mois);
       var now = new Date();// today

      //  var m = moment(date,  ["DD/MM/YYYY"]);

      return now <= dateUser;
    }

});
