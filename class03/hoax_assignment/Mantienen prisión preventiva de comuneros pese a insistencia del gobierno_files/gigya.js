//jQuery.cookie.json = true;

// revisa status de usuario
function gigyaInit() {
   // revisa si user esta logueado en cookie
   var gigya_user = null;

   try {
      gigya_user = jQ.cookie("gigya_user");
   } catch (err) {}

   if (gigya_user) {
      showMenuLogin(gigya_user);
   } else {
      showLoginUI();
      gigyaRegisterCookieSession();
   }

   // muestra comentarios si corresponde
   showCommentsCount();
}

function gigyaRegisterCookieSession() {
   // toma datos del usuario si esta logueado
   gigya.socialize.getUserInfo({callback: function(response) {
      if (response.errorCode == 0) {
         if (response['user'].isConnected) {
            // convierte objecto de gigya en uno simplificado
            tmpUser = convertGigyaUserToObject(response['user']);
            // graba cookie
            try {
               jQuery.cookie("gigya_user", tmpUser, {expires: 1, path: '/'});
            } catch (err) {}
            // actualiza menu
            showMenuLogin(tmpUser);
         }
      }
   }});
}

function gigyaCloseCookieSession() {
   try {
      jQuery.removeCookie('gigya_user', {path: '/'});
   } catch (err) {}
}

var register_params = {
   screenSet: 'Login-web',
   mobileScreenSet: 'Login-mobile',
   startScreen: 'gigya-register-screen',
   onBeforeSubmit: callbackProfileOnFieldChanged
   //onAfterSubmit: onAfterSubmitTest
   //onFieldChanged: onBeforeSubmitChange
};

function onLogin(response) {}
function onLogout(response) {}

// Captura eventos de login y logout
function loginEventHandler(eventObj) {
   // revisa si usuario esta logueado en gigya y registra datos en cookie
   gigyaRegisterCookieSession();

   // verifica si es primer registro del usuario
   gigya.accounts.getAccountInfo({callback: function(response) {
      if (response.errorCode == 0) {
         var dataUser = response['data'];

         if (!dataUser.origen_site || dataUser.origen_site == "") {

            // ingresa dominio como url de origen
            var paramsOrigen={
               data: {
                  origen_site: "www.latercera.com"
               },
               callback: function(responseOrigen) {
                  //alert(responseOrigen.errorCode);
               }
            };
            gigya.accounts.setAccountInfo(paramsOrigen);

         }
      }
   }});
}

function logoutEventHandler(eventObj) {
   gigyaCloseCookieSession();
   window.location = window.location.protocol + "//" + window.location.host + "/";
}

function onConnectionAddedEventHandler(eventObj) {
   //alert("onConnectionAddedEventHandler");
}

gigya.accounts.addEventHandlers({
   onLogin:loginEventHandler,
   onLogout:logoutEventHandler,
   onConnectionAdded: onConnectionAddedEventHandler
});

// funcion "callback" para impresion del numero de comentarios.
function callbackCountComments(response) {
   if (response.errorCode == 0) {
      tmpcount = response.streamInfo.commentCount;
      streamId = response.streamInfo.streamID;
      streamURL = response.streamInfo.streamURL;
      //alert(streamURL);
      if (streamURL) {
         jQuery("#" + streamId).html("<a class='comment' href='" + streamURL + "'>Comentarios: " + tmpcount + "</a>");
      } else {
         jQuery("#DEFAULT-" + streamId).show();
      }
   } else {
      //alert('Error :' + response.errorMessage);
   }
}

function callbackGetTopStreams(response) {
   if (response.errorCode == 0 ) {
      if ( null!=response.streams && response.streams.length>0) {
         for (i=0; i< response.streams.length; i++) {
            var tmpUrlComm = "<li><a href='" + response.streams[i].streamURL + "'>" + response.streams[i].streamTitle + "</a><br>" + response.streams[i].commentCount + " Comentarios</li>";
            jQuery("#divLosMasComentados").append(tmpUrlComm);
         }
      }
   } else {
      //alert('Error :' + response.errorMessage);
   }
}

function callbackProfileOnBeforeSubmit(eventObj) {
   ruts = document.getElementsByName("data.rut_usuario");

   if (ruts.length == 0) {
      return true;
   }

   for (i=0; i<ruts.length; i++) {
      if (ruts[i].value && ruts[i].value != "") {
         tmprut = ruts[i].value;
         tmprut = tmprut.toUpperCase();
         tmprut = tmprut.replace(/\./g, '');
         tmprut = tmprut.replace(/\s+/g, '');
         ruts[i].value = tmprut;
         break;
      }
   }
   //eventObj.isValid = false; // dont work, ready only
   //eventObj.errMsg = "Error. Rut invalido!"; // dont work, ready only
   //jQ('*[data-bound-to="data.rut_suscriptor"]').html("Error. Rut Invalido.");

}

//Modificada por Juan Zamorano
/*function callbackProfileOnFieldChanged(eventObj) {
   alert("Primera pantalla");
   // valida rut
   var tmprut = "";
   var tmprutObj;
   ruts = document.getElementsByName("data.rut_usuario");
   if (ruts.length == 0) {
      return true;
   }
   for (i=0; i<ruts.length; i++) {
      if (ruts[i].value && ruts[i].value != "") {
         tmprutObj = ruts[i];
         tmprut = ruts[i].value;
         break;
      }
   }

   if (tmprut != "") {
      isValid = Canela.Util.checkRUT(tmprut);
      if (isValid) {
         return true;
      } else {
         alert("Rut invalido.");
         return false;
      }
   }
   return true;

}*/

function callbackProfileOnFieldChanged(eventObj) {
   ruts = document.getElementsByName("data.rut_usuario");
   tipo_documento=document.getElementsByName("data.tipo_documento");

   if (ruts.length == 0) {
      return true;
   } else {
      if (tipo_documento.length>0) {
         if (tipo_documento[1].value == "rut") {
            if (ruts[1].value.length>0) {
               return validaRut(ruts[1]);
            } else {
            }
         } else {
            return Pasaporte(ruts[1]);
         }

         return false;
      }
   }

   return false;
}

function callbackProfileOnAfterSubmit(eventObj) {
   gigyaCloseCookieSession();
   gigyaRegisterCookieSession();
   // window.location = "/index.html"
}

function showMenuLogin(gigyaUser) {
   hideAll();

   if (gigyaUser['isConnected']) {
      if (gigyaUser['thumbnailURL'] && gigyaUser['thumbnailURL'] != "") {
         jQuery("ul.nav_user").css("background-image", "none");
         jQuery(".img_profile").html("<a href='" + document.location.origin + "/profile'><img src='" + gigyaUser['thumbnailURL'] + "' width='20' alt='" + gigyaUser['firstName'] + "'></img></a>").show();
      }

      jQuery(".profile_screen").before('Hola ').text(gigyaUser['firstName']).show();
      jQuery(".logout_screen").show();

      showAddConnectionsUI();
   } else {
      //alert('Error');
      jQuery(".login_screen").show();
      jQuery(".register_screen").show();
    }
}

// Por defecto desahbilita links de login. Si usuario estar logueado habilita algunos links
function hideAll() {
   jQuery(".img_profile").html("").hide();
   jQuery(".profile_screen").hide();
   jQuery(".login_screen").hide();
   jQuery(".register_screen").hide();
   jQuery(".logout_screen").hide();
}

/*
function showCompleteDataScreen(showCloseButton) {
   if (showCloseButton) {
      jQ.colorbox({width: "500", height: "540", transition:'none', scrolling:false, iframe: true, opacity: 0.6, href:"/comun/gigya/registrationCompletion.html"});
      jQ("#cboxClose").show();
   } else {
      jQ.colorbox({width: "500", height: "540", transition:'none', scrolling:false, iframe: true, opacity: 0.6, escKey:false, overlayClose: false, href:"/comun/gigya/registrationCompletion.html"});
      jQ("#cboxClose").hide();
   }
}
*/

// funcion que verifica si los datos que consideramos
// obligatorios estan grabados. Si hay alguno que no
// estÃ©, entonces lo solicita.
/*
function getCompleteDataResponse(response) {
    if ( response.errorCode == 0 ) {

        var profile = response['profile'];
        var data = response['data'];

        if (!profile.firstName || !profile.lastName || !profile.birthYear || !profile.birthMonth || !profile.birthDay) {
         showCompleteDataScreen(true);
        }

    }
}
gigya.accounts.getAccountInfo({callback:getCompleteDataResponse});
*/

function showCommentsCount() {
   jQuery(function() {
      if (typeof listCommentsGigya != 'undefined' && listCommentsGigya.length > 0) {
         jQuery.each(listCommentsGigya, function(key, id) {
            var params = {
               categoryID: 'General',
               streamID: 'LTPAPER-CONTENT-' + id,
               callback:callbackCountComments
            };

            gigya.comments.getStreamInfo(params);
         });
      }
   });
}

function getCommentCounter(nuevo, id, divId, tmpCommURL) {
   var params = {
      categoryID: 'latercera.com',
      streamID: 'LATERCERA-CONTENT-' + nuevo + id,
      callback: function(response) {
         if (response.errorCode == 0) {
            commCount = response.streamInfo.commentCount;
            streamId = response.streamInfo.streamID;
            //streamURL = response.streamInfo.streamURL;
            //alert(threadCount + " - " + streamId);

            //if (commCount >= 2) {
               tmpV  = commCount;
               jQuery("#" + divId).html(tmpV);
               jQuery("#" + divId).show();
            //}
         }
      }
   };

   gigya.comments.getStreamInfo(params);

}


function convertGigyaUserToObject(gigyaUser) {
   tmpUser = new Object();
   tmpUser.isConnected = gigyaUser.isConnected;
   tmpUser.thumbnailURL = gigyaUser.thumbnailURL;
   tmpUser.firstName = gigyaUser.firstName;
   tmpUser.email = gigyaUser.email;

   return tmpUser;
}

function showLoginUI() {
   var login_params = {
      showTermsLink: 'false',
      height: 30,
      width: 95,
      containerID: 'componentDivSocialLogin',
      UIConfig: '<config><body><controls><snbuttons buttonsize="20" /></controls></body></config>',
      autoDetectUserProviders: 'facebook',
      facepilePosition: 'none'
      //,onError: function(obj) {alert("onError fired: " + obj.errorCode + ": " + obj.errorMessage);}
   };

   gigya.socialize.showLoginUI(login_params);
}

function showAddConnectionsUI() {
   var login_params = {
      showTermsLink: 'false',
      height: 30,
      width: 95,
      containerID: 'componentDivSocialLogin',
      UIConfig: '<config><body><controls><snbuttons buttonsize="20" /></controls></body></config>',
      requiredCapabilities: 'Login'
      //,onError: function(obj) {alert("onError fired: " + obj.errorCode + ": " + obj.errorMessage);}
   };

   gigya.socialize.showAddConnectionsUI(login_params);
}

function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}


/**
 * Modificado por Juan Zamorano para la validacion de rut
 **/

function validarDigito( dvr ){
   dv = dvr + ""
   reg=/^\d$|[kK]/
   if (!dv.match(reg)){
      alert("Debe ingresar un digito verificador valido");
      return false;
   }

   return true;
}

function validarDigito2( crut ){
   largo = crut.length;
   if ( largo < 2 && largo!=0){
      alert("Debe ingresar el rut completo")
      return false;
   }
   if ( largo > 2 ){
      rut = crut.substring(0, largo - 1);
   }else{
      rut = crut.charAt(0);
   }
   dv = crut.charAt(largo-1);
   validarDigito( dv );

   if ( rut == null || dv == null ){
      return 0
   }

   var dvr = '0'
   suma = 0
   mul  = 2

   for (i= rut.length -1 ; i >= 0; i--){
      suma = suma + rut.charAt(i) * mul
      if (mul == 7){
         mul = 2
      }else{
         mul++
      }
   }
   res = suma % 11
   if (res==1){
      dvr = 'k'
   }else if (res==0){
      dvr = '0'
   }else{
      dvi = 11-res
      dvr = dvi + ""
   }
   if ( dvr != dv.toLowerCase() )   {
      alert("EL rut es incorrecto");
      return false
   }

   return true
}

function validaRut(campoRut)
{
   texto=campoRut.value;
   var tmpstr = "";
   for ( i=0; i < texto.length ; i++ ){
      if ( texto.charAt(i) != ' ' && texto.charAt(i) != '.' && texto.charAt(i) != '-' ){
         tmpstr = tmpstr + texto.charAt(i);
      }
   }
   texto = tmpstr;
   largo = texto.length;

   if ( largo < 2 && largo!=0 ){
      alert("Debe ingresar el rut completo")
      return false;
   }

   for (i=0; i < largo ; i++ ){
      reg=/^\d$|[kK]/
      if (!texto.charAt(i).match(reg)){
         alert("El valor ingresado no corresponde a un R.U.T valido");
         return false;
      }
   }

   var invertido = "";
   for ( i=(largo-1),j=0; i>=0; i--,j++ ){
      invertido = invertido + texto.charAt(i);
   }
   var dtexto = "";
   dtexto = dtexto + invertido.charAt(0);
   dtexto = dtexto + '-';
   cnt = 0;

   for ( i=1,j=2; i<largo; i++,j++ )   {
      if ( cnt == 3 ){
         j++;
         dtexto = dtexto + invertido.charAt(i);
         cnt = 1;
      }else{
         dtexto = dtexto + invertido.charAt(i);
         cnt++;
      }
   }

   invertido = "";
   for ( i=(dtexto.length-1),j=0; i>=0; i--,j++ ){
      invertido = invertido + dtexto.charAt(i);
   }

   campoRut.value = invertido.toUpperCase()

   if (validarDigito2(texto)){
      return true;
   }
   return false;
}

function Pasaporte(campoRut){
   texto=campoRut.value;
   largo = texto.length;
   if ( largo < 7 ){
      alert("Tiene que ingresar un pasaporte valido");
      return false;
   }else{
      return true;
   }
   return false;
}

/*{
   enabledProviders: 'facebook,twitter,googleplus,linkedin,yahoo,microsoft,aol,foursquare,instagram,vkontakte,renren,QQ,Sina,kaixin'
}
// This method is activated when the page is loaded
function onLoad() {
   // register for login event
   gigya.socialize.addEventHandlers({
      onLogin: onLoginHandler,
      onLogout: onLogoutHandler
   });
}
// onLogin Event handler
function onLoginHandler(eventObj) {
   // verify the signature ...
   verifyTheSignature(eventObj.UID, eventObj.timestamp, eventObj.signature);
   // Check whether the user is new by searching if eventObj.UID exists in your database
   var newUser = true; // lets assume the user is new

   if (newUser) {
      // 1. Register user
      // 2. Store new user in DB
      // 3. link site account to social network identity
      //   3.1 first construct the linkAccounts parameters
      var dateStr = Math.round(new Date().getTime() / 1000.0); // Current time in Unix format
      //(i.e. the number of seconds since Jan. 1st 1970)

      var siteUID = 'uTtCGqDTEtcZMGL08w'; // siteUID should be taken from the new user record
      // you have stored in your DB in the previous step
      var yourSig = createSignature(siteUID, dateStr);
      var params = {
         siteUID: siteUID,
         timestamp: dateStr,
         cid: '',
         signature: yourSig
      };

      //   3.1 call linkAccounts method:
      gigya.socialize.notifyRegistration(params);
   }

   $('#login').hide();
   $('#logout').show();
}
// Note: the actual signature calculation implementation should be on server side
function createSignature(UID, timestamp) {
   encodedUID = encodeURIComponent(UID); // encode the UID parameter before sending it to the server.
   // On server side use decodeURIComponent() function to decode an encoded UID
   return '';
}

// Note: the actual signature calculation implementation should be on server side
function verifyTheSignature(UID, timestamp, signature) {
   encodedUID = encodeURIComponent(UID); // encode the UID parameter before sending it to the server.
   // On server side use decodeURIComponent() function to decode an encoded UID
}

// Logout from Gigya platform. This method is activated when "Logout" button is clicked
function logoutFromGS() {
   gigya.socialize.removeConnection({
      callback: onLogoutHandler
   });
}

// onLogout Event handler
function onLogoutHandler(eventObj) {
  $('#login').show();
  $('#logout').hide();
}

onLoad();*/