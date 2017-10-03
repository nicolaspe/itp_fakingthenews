var AUTO_REFRESH_MINS = 5;
//var AUTO_REFRESH_TIME = 1000;
var AUTO_REFRESH_TIME = (AUTO_REFRESH_MINS * 60) * 1000;

var vrudo;

//function autorefresh() { window.location.reload(); }

/*redirect suscripciones*/
if (window.location ==  "http://www.latercera.com/suscripciones" ||  window.location ==  "http://www.latercera.com/suscripciones/" ) {

    window.location = "http://suscripcioneslt.latercera.com";

}

/* Solución clear caché para el deportivo*/
//validamos si estamos en el deportivo.
if ( window.location.href.indexOf("/canal/el-deportivo/")!= -1 ) {

  var date = new Date();
      var h = date.getHours();
      var m= date.getMinutes();

      //marca de tiempo;
  var mm =  h.toString()+m.toString();
  if ( window.location.href.indexOf("?nocache="+mm)== -1 ) {
    window.location = "/canal/el-deportivo/?nocache="+mm;
  }
}

jQuery(document).ready(function() {

     //Se mantiene refresco automaticamente cada 5 minutos.

    //setTimeout( function() {  window.location.reload();  }, AUTO_REFRESH_TIME);


    $ = jQuery;

    //comprobamos la existencia de instancias de streaming de video...
    vrudo = $("#vrudolive");

    if ( vrudo.length > 0 ) {

        var vrudo_src = vrudo.attr("src");

        //en el caso que el video venga sin "mute" forzamos el volumen en cero.
        if ( vrudo_src == "http://rudo.video/live/lt") {

            vrudo.attr("src", vrudo_src+"/volume/0");
        }

    }




    //Agregar nombre de categorias como clases

    var categoria = "";
    var deportes1 = "deportesmedio-contra-uno";
    var deporteschomsky = "deportesel-archivo-de-chomsky";
    var depIronman = "deportesironman-pucon-2017";
    var eleccionesUsa = "elecciones-presidenciales-estados-unidos-2016mundo";
    var ligaselman = "deportesla-liga-de-selman";
    var minutoNBA = "deportesminuto-nba";
    var retoselman = "deportesel-reto-de-selman";
    var maratonSantiago = "deportesmaratn-de-santiago";
    var erikaOli = "corresponsalmaratondeportes";
    var ultimavuelta = "deportesultimavuelta";
    var conexeuropa = "conexin-europadeportes";

  $(".not_cat").each(function(i, value){
      categoria = $(this).find(".fond a").text();
      categoria = categoria.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toLowerCase();

      if(categoria != -1) {
      	$(value).addClass(categoria);
      	if(deportes1 == categoria) {
      		medioContraUno(value);
      	}
        if(depIronman == categoria) {
      		ironMan(value);
      	}
      	if(eleccionesUsa == categoria) {
      		htmleleccionesUsa();
      	}

        if(deporteschomsky == categoria) {
      		htmlArchivoChomsky(value);
      	}

        if(ligaselman == categoria) {
      		htmlLigaSelman(value);
      	}

        if(minutoNBA == categoria) {
      		htmlMinutoNBA(value);
      	}

        if(retoselman == categoria) {
      		htmlRetoSelman(value);
      	}

        if(maratonSantiago == categoria) {
      		htmlmaraton(value);
      	}

        if(erikaOli == categoria) {
      		htmlerikaOli(value);
      	}

        if(ultimavuelta == categoria) {
      		htmlultimavuelta(value);
      	}

        if(conexeuropa == categoria) {      		
                htmlConexEuropa(value);
      	}

      }
  });

  function htmlRetoSelman(este) {
  	var htmlRetodeSelman = '<a href="http://www.latercera.com/categoria/minuto-nba/"><div class="et_sup_00 reto_selman"><h2>El reto de Selman</h2></div><div class="clear"></div></a>';
		$(este).prepend(htmlRetodeSelman);
  }

  function htmlMinutoNBA(este) {
  	var htmlElMinutoNBA = '<a href="http://www.latercera.com/categoria/minuto-nba/"><div class="et_sup_00 minuto_nba"><img src="http://especiales.latercera.com/2016/minuto_nba/tit_not_log_lt.png" alt="Minuto NBA"></div><div class="clear"></div></a>';
		$(este).prepend(htmlElMinutoNBA);
  }

  function medioContraUno(este) {
  	var htmlMedioContraUno = '<a href="http://www.latercera.com/categoria/medio-contra-uno/"><div class="et_sup"><h2>Medio <span class="tx_white">contra uno</span></h2></div></a>';
		$(este).prepend(htmlMedioContraUno);
  }

  function htmlArchivoChomsky(este) {
    var htmlChomsky = '<a href="http://www.latercera.com/categoria/el-archivo-de-chomsky/"><div class="et_sup"><h2>El archivo de <span class="tx_orange">Chomsky</span></h2></div></a>';
		$(este).prepend(htmlChomsky);
  }

  function htmlLigaSelman(este) {
    var htmlSelman = '<a href="http://www.latercera.com/categoria/la-liga-de-selman/"><div class="et_sup_00 silbato_selman"><h2>La liga de Selman</h2></div><div class="clear"></div></a>';
		$(este).prepend(htmlSelman);
  }

  function ironMan(este) {
  	var htmlIronman = '<div class="ironman-pucon-2017"><a href="http://www.latercera.com/categoria/ironman-pucon-2017/"><div class="ipuc_sup"><div class="ipuc_logo"></div></div></a></div>';
		$(este).prepend(htmlIronman);
  }
  function htmleleccionesUsa() {
  	var htmlElecciones = '<div class="cabecera_eleciones_eeuu"><div class="tx_elec_eeuu"><h2>Elecciones Presidenciales en <span>EE.UU.</span></h2></div><div class="pie_elec_eeuu"></div><a href="https://ad.doubleclick.net/ddm/trackclk/N884.laterceira.cl/B10586603.141170127;dc_trk_aid=313404985;dc_trk_cid=76245107;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=" target="_blank" class="lk_santander"></a><IMG style="display:none;" SRC="https://ad.doubleclick.net/ddm/trackimp/N884.laterceira.cl/B10586603.141168339;dc_trk_aid=313403882;dc_trk_cid=76245107;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=?" BORDER="0" HEIGHT="1" WIDTH="1" ALT="Advertisement"></div>';
  	$(".elecciones-presidenciales-estados-unidos-2016mundo").prepend(htmlElecciones);
  	$(".elecciones-presidenciales-estados-unidos-2016mundo .fond").hide();
  }

  function htmlmaraton(este) {
    var htmlMaraton = '<div class="caja-completa-maraton"><a href="http://www.latercera.com/especial/maraton-de-santiago/"><div class="caja-maraton"><div class="logo-maraton"><h2 class="tit_maraton">MaratÃ³n de santiago</h2></div><div class="time-maraton"></div></div></a></div>';

    $(este).prepend(htmlMaraton);
  }
function htmlerikaOli(este) {
  var htmlerikaOliveora = '<div class="caja-completa-maraton-cor"><a href="http://www.latercera.com/especial/maraton-de-santiago/"><div class="caja-maraton-cor"><div class="logo-maraton-cor"><h2 class="tit_maraton-cor">Corresponsal en el MaratÃ³n</h2></div><div class="time-maraton-cor"></div></div></a></div>';

  $(este).prepend(htmlerikaOliveora);
}

function htmlultimavuelta(este) {
  var htmlVuelta = '<div class="ultima-vuelta-home"><div class="fran-pista"><a href="http://www.latercera.com/especial/ultima-vuelta/"><div class="tit_vuelta"><h2>&Uacute;ltima vuelta</h2></div></a></div></div>';

  $(este).prepend(htmlVuelta);
}

function htmlConexEuropa(este) {
  var htmlEuropa = '<div class="ultima-vuelta conexion-europa-home"><div class="tx-europa"><a href="http://www.latercera.com/especial/conexion-europa"><div class="tit_conex"><h2>Conexión Europa</h2></div></a></div></div>';

  $(este).prepend(htmlEuropa);
}
  /*
	*		Cabecera
  */
	var cabeceraMedioContraUno = $("body").hasClass("term-medio-contra-uno");
	var cabeceraHtmlMedioContraUno = '<a href="http://www.latercera.com/categoria/medio-contra-uno/"><div class="fran-gren"></div><div class="tit_bian"><h2>Medio <span class="tx_green">contra uno</span></h2><h3>La entrevista de <b>Felipe Bianchi Leiton</b></h3><h4>Se trata, simplemente y rapidito, de contestar en la extensiÃ³n mÃ¡xima de un tuit (140 caracteres) una pregunta que no podrÃ¡ exceder de medio (70)</h4></div></a>';
	if (cabeceraMedioContraUno === true) {
		$(".cab_seccion").prepend(cabeceraHtmlMedioContraUno);
	}

  var cabeceraChomsky = $("body").hasClass("term-el-archivo-de-chomsky");
  var cabeceraHtmlChomsky = '<a href="#" class="link_chomsky"><div class="franja_completa_con_guion"><div class="tit_"><h2>El archivo de <span class="tx_orange">Chomsky</span></h2></div></div></a>';

  if (cabeceraChomsky === true) {
    $(".cab_seccion").prepend(cabeceraHtmlChomsky);
  }

  /*Cabecera Reto Selman*/

  var cabeceraRetoSelman = $("body").hasClass("term-el-reto-de-selman");
  var cabeceraHtmlRetoSelman = '<div class="caja_completa reto_selman"><div class="caja_restriccion"><h1>El reto de Selman</h1></div></div>';

  if (cabeceraRetoSelman === true) {
    $(".cab_seccion").prepend(cabeceraHtmlRetoSelman);
  }

  /*Cabecera Minuto NBA*/

  var cabeceraMinutoNBA = $("body").hasClass("term-minuto-nba");
  var cabeceraHtmlMinutoNBA = '<div class="caja_completa minuto_nba"><div class="caja_restriccion"><h1><img src="http://especiales.latercera.com/2016/minuto_nba/tit_not.png" alt="Minuto NBA"></h1></div></div>';

  if (cabeceraMinutoNBA === true) {
    $(".cab_seccion").prepend(cabeceraHtmlMinutoNBA);
  }

  /*
  Cabecera La liga de Selman
  */

  var cabeceraSelman = $("body").hasClass("term-la-liga-de-selman");
  var cabeceraHtmlSelman = '<div class="caja_completa"><div class="caja_restriccion"><h1>La liga de Selman</h1></div></div>';
  if (cabeceraSelman === true) {
    $(".cab_seccion").prepend(cabeceraHtmlSelman);
  }

  /*
   * Cabecera Frente a Frente
  */

  var esunespecial = $("body").hasClass("single-especial");
  var htmlfrente = '<div class="faf-tag"><div class="frente-a-frente"><img src="http://especiales.latercera.com/2016/render/img/don-dato.png" alt="Don Dato"><h4>Frente a Frente:</h4></div><div class="faf-bar"></div></div>';
  if (esunespecial === true) {
  $(".frente-frente").parent().parent().parent().parent().prepend(htmlfrente);
}
 if ($("body").hasClass("single-noticia")) {
   $(".frente-frente").parent().parent().prepend(htmlfrente);
   //console.log("es una noticia");
 }
  /*
  	__FIN___
  */

  /*
  	Correccion SkyCrapp LIKE FACEBOOK
  */
  var htmlSociales = '<link rel="stylesheet" href="http://especiales.latercera.com/2016/render/rrss-fb.css?ver=1.0" type="text/css"><section class="gray-bg section-fixed apertura apertura_noticias"><div class="row ampliado"><div class="likefb-full"><div class="likefb-wrapper"><div class="likefb-logo"></div><h3>MÃ¡s conectados, en <a href="https://www.facebook.com/laterceracom" target="_blank"><strong>/laterceracom</strong></a></h3></div><iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Flaterceracom&width=188&layout=button_count&action=like&show_faces=false&share=true&height=46&appId" width="188" height="46" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div></div></section>';

  var idSkyC = $(".publi_sky [id^='div-gpt-ad-']").html();
	var skyHome = $("body").hasClass("home");
	if(skyHome === true) {
		if( idSkyC != undefined) {
		  $("body").addClass("con_sky");
		}
    //$(".apertura_noticias").first().before(htmlSociales);



	}
	/*
  	__FIN___
  */

   /*
    * Agregar estilos al billete
   */
  var d = new Date();
  var n = d.getTime();
  $('head').append('<link rel="stylesheet" href="http://especiales.latercera.com/2016/render/ppto2017.css?v='+n+'" type="text/css" />');

  $('.bl_columnistas').hide();

  /*
   * Cambiar url Latercera.tv
  */

  $(".bloque_terceratv").find("a").first().attr("href", "http://laterceratv.cl");

  /*
   * Quitar cabecera en articulos de los equipos
  */

  if ($("body").hasClass("single-noticia")) {
	$(".caja_info_1").hide();
	$(".caja_info_2").hide();
  }

  /*INICIO CoDIGO PARA MARCADORES OPTA*/
  var optaScriptIncludes = 0;
  var optaMarcador = false;

  $("script[type='text/javascript']").each(function(){
    var elurl = "";
    elurl = $(this).attr("src");
    if (elurl) {


      if (elurl.indexOf("widgets.opta.js") >= 0) {
        optaScriptIncludes++;
      }
    }
  });

  if (optaScriptIncludes > 0 && $('opta').length) {
    optaMarcador = true;
  } else {
    optaMarcador = false;
  }

  if (optaMarcador == true) {


      var ejecutado = false;
			$(document).ready(function(){
				$jqOpta.events.subscribe('widget.timeline.load', onwidgetready );
				$jqOpta.events.subscribe('widget.timeline.refresh', function(widget){
							ejecutado = false;
							onwidgetready();
							});
			});
			var x;
			function onwidgetready(widget){
				if(!ejecutado){
					ejecutado = true;

					var ancho = $(".opta-timeline").width();

					x = widget;

					if((ancho < 421 && $("#opta-widget-idx-0 .hometeam-crest").length == 0) ){

						var divImagenes = $(".opta-timeline")[0].getElementsByClassName('match-score-details');
						var idLocal = $(".opta-timeline")[0].getElementsByClassName('goal-scorers-home')[0].getAttribute("class").replace("goal-scorers-home team-", "");
						var idVisita = $(".opta-timeline")[0].getElementsByClassName('goal-scorers-away')[0].getAttribute("class").replace("goal-scorers-away team-", "");


						var local = document.createElement("IMG");
						local.src = "http://images.akamai.opta.net/football/team/badges_65/"+idLocal+".png";
						local.className = "hometeam-crest";
						if($(this).find(".hometeam-crest").length == 0){
							var divScore = divImagenes;
							divScore[0].insertBefore(local,divScore[0].firstChild);
						}

						var visita = document.createElement("IMG");
						visita.src = "http://images.akamai.opta.net/football/team/badges_65/"+idVisita+".png";
						visita.className = "awayteam-crest";
						if($(this).find(".awayteam-crest").length == 0){
							var divScore = divImagenes;
							divScore[0].insertBefore(visita,divScore[0].firstChild);
						}

					}
					$("#opta-widget-idx-0 .hometeam-crest").wrap('<div class="equipo-local"></div>');
					$("#opta-widget-idx-0 .awayteam-crest").wrap('<div class="equipo-visita"></div>');
					$(".timeline").removeClass("narrow");
					$(".match-score-details").addClass("hasImg");
				}
			}
  }
      /* FIN Cï¿½DIGO PARA MARCADORES OPTA */

      /*INICIO CODIGO COBERTURAS*/
  if ($("#coberturaGlamorama").length) {

        jQuery.getScript("https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js")

    	  .done(function() {
    		   var idsArreglo = "";
           var separador = "-"; //Guion el ï¿½nico que no convierte a entities $.cookie
           var coberturas = {};
           //var killvideocache = Math.floor((Math.random() * 10000) + 1);
           coberturas["coberturaglamorama"] = {
             nombreCookie: "coberturaglamorama",
             json_url: "http://www.glamorama.cl/caja-cobertura/",
             json_url_mobile: "http://www.glamorama.cl/wp-content/json/cobertura.json", //url de donde se descarga el json con los datos de los artï¿½culos
             container_id: "coberturaGlamorama", //este ID debe tenerlo el div que se inserte en el sitio, para que allï¿½ entre esta cobertura
             color: "#bc2767", //color del borde superior de la imagen grande de la caja
             //logo: "http://d2vpb0i3hb2k8a.cloudfront.net/wp-content/uploads/sites/7/2017/02/17/glamorama-vina-sm1.png" //logotipo que se muestra en la esquina de la caja
             logo: "http://d2vpb0i3hb2k8a.cloudfront.net/wp-content/uploads/sites/7/2017/02/28/glamorama-sm.png"
           };

           LeerJson("coberturaglamorama");

           function LeerJson(key){
             var d = new Date();
             var n = d.getTime();
             var nombreCookie = coberturas[key].nombreCookie;
             var json_url = coberturas[key].json_url;
             var is_mobile = false;
             if ( $( window ).width() < 768) {
               is_mobile = true;
               json_url = coberturas[key].json_url_mobile;
             }

             $.get(json_url, function(data) {
               if (is_mobile == false) {
                 var datos = JSON.parse(data.replace("<pre>","").replace("</pre>",""));
                 data = datos;
               }
               var idsArreglo;
               var primerIDshow = "";
               if (document.cookie.indexOf(nombreCookie) == -1) {
                 //quï¿½ hacer si no existe cookie
                 idsArreglo = data[0].ID;
                 primerIDshow = idsArreglo;
                 crearCookie(nombreCookie, idsArreglo, 1);
               } else {
                 //quï¿½ hacer si existe cookie
                 var cantidadVista = contarVistasCookies(nombreCookie);
                 var cantidadVistaCookie = Number(cantidadVista[1]);
                 var idEnLaCookie = cantidadVista[0];
                 var posicion = 0;
                 var proximaCant = 0;
                 var proximoID = "";
                 if (cantidadVistaCookie == 5) {
                 //tengo que cambiar el ID en la cookie
                   for (var art = 0; art < data.length; art++) {
                     //iterar el json para ver quï¿½ posiciï¿½n tiene el ID de la cookie, y guardar la posiciï¿½n siguiente en posicion
                     if (data[art].ID == idEnLaCookie && (art + 1) != data.length) {
                       posicion = art + 1;
                     } else if (data[art].ID == idEnLaCookie && (art + 1) == data.length) {
                       posicion = 0;
                     }
                   }
                   proximaCant = 1;
                   proximoID = data[posicion].ID;
                 } else {
                   proximaCant = cantidadVistaCookie + 1;
                   proximoID = idEnLaCookie;
                 }
                 modificarCookie(nombreCookie, proximoID, proximaCant);
                 primerIDshow = proximoID;
               }

               //primerIDshow contiene el primer ID a mostrar en la lista
               muestraTresAPartirDe(primerIDshow, data, coberturas[key].container_id, coberturas[key].color, coberturas[key].logo);
             }).fail(function(){
               //console.log("NOOOOOOOOOOOOOOOO");
             });
           }

           function muestraTresAPartirDe(primerID, data, container_id, color, logo){
             //console.log("DDD" + data);
             var cont = 0;
             var notaPrincipal = "";
             var otrasDosNotas = [];
             for (var art = 0; art < data.length && cont < 6; art++) {
               //iterar el json para ver quï¿½ posiciï¿½n tiene el ID de la cookie, y guardar la posiciï¿½n siguiente en posicion
               if (data[art].ID == primerID) {
                 notaPrincipal = modificaNotaPrincipal(data[art].ID, data[art].url, data[art].imagen, data[art].titulo, color);
                 cont++;
                 if ((art + 1) == data.length) {
                   art = -1;
                 }
               } else {
                 if (cont > 0) {
                   otrasDosNotas.push(modificaOtraNota(data[art].ID, data[art].url, data[art].imagen, data[art].titulo, cont + 1));
                   cont++;
                   if ((art + 1) == data.length) {
                     art = -1;
                   }
                 }
               }
             }
             var html = "<div class='tematico dd_clean'>"+
           	"	<div class='cab_tematico'>"+
           	"		<a href='http://www.glamorama.cl' target='_blank'>"+
           	"			<img class='' src='" + logo + "' data-original='' alt='cabecera' />"+
           	"		</a>"+
           	"	</div>"+
           	"	<div class='bl_tematico igualar'>"+
           	  notaPrincipal +
           	  otrasDosNotas[0] +
           	  otrasDosNotas[1];

              if(typeof(otrasDosNotas[2]) !== "undefined") {
                html += otrasDosNotas[2];
              }
 	      /*
	      if(typeof(otrasDosNotas[3]) !== "undefined") {

                html += otrasDosNotas[3];
              }

	      if(typeof(otrasDosNotas[4]) !== "undefined") {
                html += otrasDosNotas[4];
              }
	      if(typeof(otrasDosNotas[5]) !== "undefined") {
                html += otrasDosNotas[5];
              }
              */
            html += "	</div>"+
           	"</div>";

             $("#" + container_id).append(html);

           }

           function crearCookie(nombre, contenido, dias) {
             var d = new Date();
             var contenidoVisitas = contenido +separador+"1";
             d.setTime(d.getTime() + (dias*24*60*60*1000));
             var expira = "expires="+ d.toUTCString();
             //console.log(contenido);
             document.cookie = nombre + "=" + contenidoVisitas + "; " + expira;
           }

           function modificarCookie(nombre, idsArreglo, vistasContadas) {
             $.cookie(nombre, idsArreglo+separador+vistasContadas);
           }

           function contarVistasCookies(nombreCookie) {
             var contenidoCookie = $.cookie(nombreCookie);
             var vistas = contenidoCookie.split(separador);
             return vistas;
           }

           function modificaNotaPrincipal (id, link, imagen, titulo, color) {
           	var html = "<article class='noticia_tematica_destacada'>"+
           	"			<div class='img degrada_oscuro' style='border-top:5px solid " + color + "; background:transparent url("+ imagen +") no-repeat center center; background-size: cover;'>"+
           	"				<div class='dd_bottom'><h2><a href='" + link + "' target='_blank'>" + titulo + "</a></h2>"+
           	"				<div class='bl_comparte' style='border-bottom:1px solid #bc2767' >"+
           	"					<span>Comparte: </span>"+
           	"					<ul>"+
           	"						<li class='facebook'><a href='https://www.facebook.com/sharer.php?u="+ link +"' onclick=\"javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;\" title='Compartir en Facebook' target='_blank'>Facebook</a></li>"+
           	"						<li class='twitter'><a href='https://twitter.com/share?url="+ link +"&via=latercera&text=" + titulo + "' onclick=\"javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;\" title='Compartir en Twitter' target='_blank'>Twitter</a></li>"+
           	"					</ul>"+
           	"				</div></div>"+
           	"			</div>"+
           	"		</article>";

           	return html;
           }

           function modificaOtraNota (id, link, imagen, titulo, posicion) {
             var html = "<article class='noticia_tematica'>"+
           	"			<a href='" + link + "' target='_blank'><img src='" + imagen + "' alt='" + titulo + "'/></a>"+
           	"			<h2><a href='" + link + "' target='_blank'>" + titulo + "</a></h2>"+
           	"		</article>";

             return html;
           }

           /*
           $("a").click(function(){
             var id = $(this).attr('data-id');
             event.stopPropagation();
             console.log("click "+id);
             $.cookie(nombreCookie, id+separador+"5");
             //Al hacer click, modifica la cookie con la clickeada y el contador de clicks en 5 para que la saque de la lista
           });*/



        });

   } //fin del if inicial


      /*FIN CODIGO COBERTURAS*/

      $('div.cabecera ul li').each(function(){
        if ($(this).find('a').attr('href') == 'http://www.latercera.com/categoria/panamericanos/'  ) {
          $(this).hide();
        }
      });

      //Evento Analytics click en edicion impresa
      $("#menu-item-123").find("a").click(function() {
        ga('send', 'event', 'click', 'edicion impresa');
      });

      //Quitar titulo a la nota de la cartelera de cine
      $(".titulo_ficha").each(function(){
        if ($(this).text() == "Cartelera de cine" ) {
          $(this).hide();
          $(this).next(".autor_patro").find("div.autor").hide();
        }
      });
      
      //Copiar botones de compartir en notas de opinion deportes para mostrar en movil
      if ($("div.autor_patro").html()) {
        if ($("div.autor_patro").html().trim() == "") {
          $("div.autor_patro").html("<ul class='redes'>" + $("ul.redes").html() + "</ul>");
        }
      }
      
     //mostrar titulos de portadillas solo en opinion y cultura, para ComScore
     if ($("h1.portadilla").length > 0) {
       var textocanal = $("h1.portadilla").text();
       if (textocanal.indexOf("Opini") >= 0 || textocanal == "Cultura" ) {
         $("h1.portadilla").show(); 
       }
     }
      

});
