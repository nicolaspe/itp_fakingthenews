function obtener_publicidad_noticia_encadenada(path, id_publicidad, numero_pagina) {
//obtener_publicidad_noticia_encadenada(categoria, namepath, id_categoria_publi, numero_pagina);
  //----PUBLI GLOBAL
  var publicidad_skin = {
    path: '/124506296/La_Tercera_com/La_Tercera_com_'+path+'/'+path+'_Skin',
    id: 'div-gpt-ad-'+id_publicidad+'-11',
    size: [],
    pos: function(pag) {
      return jq(jq('article').get(0)).siblings('.publi_skin_wrap');
    }
  };
  var publicidad_especial_A = {
    path: '/124506296/La_Tercera_com/La_Tercera_com_'+path+'/'+path+'_especial-A',
    id: 'div-gpt-ad-'+id_publicidad+'-12',
    size: [],
    pos: function(pag) {
      return jq(jq('article').get(0)).siblings('.publi_skin_wrap');
    }
  };
  var publicidad_especial_B = {
    path: '/124506296/La_Tercera_com/La_Tercera_com_'+path+'/'+path+'_especial-B',
    id: 'div-gpt-ad-'+id_publicidad+'-13',
    size: [],
    pos: function(pag) {
      return jq(jq('article').get(0)).siblings('.publi_skin_wrap');
    }
  };
  var publicidad_top_1 = {
    path: '/124506296/La_Tercera_com/La_Tercera_com_'+path+'/'+path+'_Interior_728x90',
    id: 'div-gpt-ad-'+id_publicidad+'-0',
    size: [728, 90],
    pos: function(pag) {
      return jq(jq('article').get(0)).siblings('.bl_publi_top');
    }
  };
  var publicidad_top_2 = {
    path: '/124506296/La_Tercera_com/La_Tercera_com_'+path+'/'+path+'_Interior_220x90',
    id: 'div-gpt-ad-'+id_publicidad+'-1',
    size: [220, 90],
    pos: function(pag) {
      return jq(jq('article').get(0)).siblings('.bl_publi_top');
    }
  };

  //---PUBLI REPEATER
  var publicidad_sky = {
    path: '/124506296/La_Tercera_com/La_Tercera_com_'+path+'/'+path+'_Interior_160x600',
    id: 'div-gpt-ad-'+id_publicidad+'-2',
    size: [160, 600],
    pos: function(pag) {
      return jq(jq('article .publi_sky').get(numero_pagina));
    }
  };
  var publicidad_sobre_titulo = {
    path: '/124506296/La_Tercera_com/La_Tercera_com_'+path+'/'+path+'_Interior_barra',
    id: 'div-gpt-ad-'+id_publicidad+'-3',
    size: [1, 1],
    pos: function(pag) {
      return jq(jq('article .publicidad_titulo').get(pag));
    }
  };

  var publicidad_lateral_derecho_zona_1_1 = {
    path: '/124506296/La_Tercera_com/La_Tercera_com_'+path+'/'+path+'_Interior_300x50',
    id: 'div-gpt-ad-'+id_publicidad+'-4',
    size: [300, 50],
    pos: function(pag) {
      return jq(jq('article .publi_widget_1').get(pag));
    },
    pos_movil: function(pag) {
      return jq(jq('article .publicidad_titulo').get(pag));
    },
    pos_movil2: function(pag) {
      return jq(jq('article .publicidad_tras_bajada').get(pag - 1));
    }
  };

  var publicidad_lateral_derecho_zona_1_2 = {
    path: '/124506296/La_Tercera_com/La_Tercera_com_'+path+'/'+path+'_Interior_300x250-A',
    id: 'div-gpt-ad-'+id_publicidad+'-5',
    size: [300, 250],
    pos: function(pag) {
      return jq(jq('article .publi_widget_1').get(pag));
    },
    pos_movil: function(pag) {
      return jq(jq('article').get(pag)).find('.publicidad_intercalada_1');
    }
  };

  var publicidad_lateral_derecho_zona_1_3 = {
    path: '/124506296/La_Tercera_com/La_Tercera_com_'+path+'/'+path+'_Interior_300x250-B',
    id: 'div-gpt-ad-'+id_publicidad+'-6',
    size: [300, 250],
    pos: function(pag) {
      return jq(jq('article .publi_widget_1').get(pag));
    },
    pos_movil: function(pag) {
      return jq(jq('article').get(pag)).find('.publicidad_intercalada_2');
    }
  };

  var publicidad_lateral_derecho_zona_2_1 = {
    path: '/124506296/La_Tercera_com/La_Tercera_com_'+path+'/'+path+'_Interior_300x250-C',
    id: 'div-gpt-ad-'+id_publicidad+'-7',
    size: [300, 250],
    pos: function(pag) {
      return jq(jq('article .publi_widget_2').get(pag));
    },
    pos_movil: function(pag) {
      return jq(jq('article').get(pag)).find('.publicidad_intercalada_3');
    }
  };

  var publicidad_lateral_derecho_zona_2_2 = {
    path: '/124506296/La_Tercera_com/La_Tercera_com_'+path+'/'+path+'_Interior_300x250-D',
    id: 'div-gpt-ad-'+id_publicidad+'-8',
    size: [300, 250],
    pos: function(pag) {
      return jq(jq('article .publi_widget_2').get(pag));
    },
    pos_movil: function(pag) {
      return jq(jq('article').get(pag)).find('.publicidad_intercalada_4');
    }
  };

  var publicidad_lateral_derecho_zona_2_3 = {
    path: '/124506296/La_Tercera_com/La_Tercera_com_'+path+'/'+path+'_Interior_300x250-E',
    id: 'div-gpt-ad-'+id_publicidad+'-9',
    size: [300, 250],
    pos: function(pag) {
      return jq(jq('article .publi_widget_2').get(pag));
    }
  };

  var publicidad_pie = {
    path: '/124506296/La_Tercera_com/La_Tercera_com_'+path+'/'+path+'_Interior_970x250-A',
    id: 'div-gpt-ad-'+id_publicidad+'-10',
    size: [970, 250],
    pos: function(pag) {
      return jq(jq('article').get(pag)).next('.publi_pie_2');
    }
  };

  var width = window.innerWidth || document.documentElement.clientWidth;
  if (width >= 768) {
    if (numero_pagina == 0) {

      //____FIRST INIT
      /*---publi global---*/

      first_ad_init(publicidad_top_1);
      first_ad_init(publicidad_top_2);

      /*---publi repeater---*/
      first_ad_init(publicidad_sky);
      first_ad_init(publicidad_sobre_titulo);
      first_ad_init(publicidad_lateral_derecho_zona_1_1);
      first_ad_init(publicidad_lateral_derecho_zona_1_2);
      first_ad_init(publicidad_lateral_derecho_zona_1_3);
      first_ad_init(publicidad_lateral_derecho_zona_2_1);
      first_ad_init(publicidad_lateral_derecho_zona_2_2);
      first_ad_init(publicidad_lateral_derecho_zona_2_3);
      first_ad_init(publicidad_pie);


      //____REFRESCAR TODOS LOS ADS POR PRIMERA VEZ OJO INCLUYE GLOBALS!

      enable_ads_services([publicidad_top_1.slot, publicidad_top_2.slot, publicidad_sky.slot, publicidad_sobre_titulo.slot, publicidad_lateral_derecho_zona_1_1.slot, publicidad_lateral_derecho_zona_1_2.slot, publicidad_lateral_derecho_zona_1_3.slot, publicidad_lateral_derecho_zona_2_1.slot, publicidad_lateral_derecho_zona_2_2.slot, publicidad_lateral_derecho_zona_2_3.slot, publicidad_pie.slot]);

      //____FIRST APPEND
      /*---publi global---*/

      first_append_ad(numero_pagina, publicidad_top_1);
      first_append_ad(numero_pagina, publicidad_top_2);

      /*---publi repeater---*/
      first_append_ad(numero_pagina, publicidad_sky);
      first_append_ad(numero_pagina, publicidad_sobre_titulo);
      first_append_ad(numero_pagina, publicidad_lateral_derecho_zona_1_1);
      first_append_ad(numero_pagina, publicidad_lateral_derecho_zona_1_2);
      first_append_ad(numero_pagina, publicidad_lateral_derecho_zona_1_3);
      first_append_ad(numero_pagina, publicidad_lateral_derecho_zona_2_1);
      first_append_ad(numero_pagina, publicidad_lateral_derecho_zona_2_2);
      first_append_ad(numero_pagina, publicidad_lateral_derecho_zona_2_3);
      first_append_ad(numero_pagina, publicidad_pie);

      //--lOAD OUT OF PAGE PUBLI
      load_publi_skin('.publi_skin_wrap', publicidad_skin);
      load_publi_especial_A('.publi_skin_wrap', publicidad_especial_A);
      load_publi_especial_B('.publi_skin_wrap', publicidad_especial_B);


    } else {

      //____FAKE INIT
      fake_div_ad(numero_pagina, next_fake_id_generator(), publicidad_sky);
      fake_div_ad(numero_pagina, next_fake_id_generator(), publicidad_sobre_titulo);
      fake_div_ad(numero_pagina, next_fake_id_generator(), publicidad_lateral_derecho_zona_1_1);
      fake_div_ad(numero_pagina, next_fake_id_generator(), publicidad_lateral_derecho_zona_1_2);
      fake_div_ad(numero_pagina, next_fake_id_generator(), publicidad_lateral_derecho_zona_1_3);
      fake_div_ad(numero_pagina, next_fake_id_generator(), publicidad_lateral_derecho_zona_2_1);
      fake_div_ad(numero_pagina, next_fake_id_generator(), publicidad_lateral_derecho_zona_2_2);
      fake_div_ad(numero_pagina, next_fake_id_generator(), publicidad_lateral_derecho_zona_2_3);
      fake_div_ad(numero_pagina, next_fake_id_generator(), publicidad_pie);

      //____REFRESH ALL SLOTS ADS!
      refresh_all_ads([publicidad_sky.fakeslot, publicidad_sobre_titulo.fakeslot, publicidad_lateral_derecho_zona_1_1.fakeslot, publicidad_lateral_derecho_zona_1_2.fakeslot, publicidad_lateral_derecho_zona_1_3.fakeslot, publicidad_lateral_derecho_zona_2_1.fakeslot, publicidad_lateral_derecho_zona_2_2.fakeslot, publicidad_lateral_derecho_zona_2_3.fakeslot, publicidad_pie.fakeslot]);
    }
  } else if ((width >= 300) && (width < 768)) {

    //---CONTAR PALABRAS

    if (numero_pagina == 0) {
      //___FIRST AD INIT
      var total_numero_palabras = 0;

      jq('p', jq('.ficha .cuerpo .contenido').get(numero_pagina)).each(function(i) {
        total_numero_palabras += jq(this).text().split(' ').length;
      });

      var numero_palabras_parrafo = 0;
      var numero_publicidad = 1;

      first_ad_init(publicidad_lateral_derecho_zona_1_1);

      jq('p', jq('.ficha .cuerpo .contenido').get(numero_pagina)).each(function(i) {
        numero_palabras_parrafo += jq(this).text().split(' ').length;

        ////console.log('total_numero_palabras: ' + total_numero_palabras);
        ////console.log('numero_palabras_parrafo: ' + numero_palabras_parrafo);

        if (total_numero_palabras >= 1000 && numero_palabras_parrafo >= 500) {
          jq(this).after('<div class="publicidad_intercalada_' + numero_publicidad + '"></div>');

          if (numero_publicidad == 1) {

            first_ad_init(publicidad_lateral_derecho_zona_1_2);

          } else if (numero_publicidad == 2) {

            first_ad_init(publicidad_lateral_derecho_zona_1_3);

          } else if (numero_publicidad == 3) {

            first_ad_init(publicidad_lateral_derecho_zona_2_1);
          }
          numero_publicidad++;
          numero_palabras_parrafo = 0;

        }


      }); ////---fin:each

      if (numero_publicidad == 1) {
        jq(jq('.ficha .cuerpo .contenido').get(numero_pagina)).append('<div class="publicidad_intercalada_1"></div><div class="publicidad_intercalada_2" style="display:none"></div><div class="publicidad_intercalada_3" style="display:none"></div>');
        first_ad_init(publicidad_lateral_derecho_zona_1_2);
        first_ad_init(publicidad_lateral_derecho_zona_1_3);
        first_ad_init(publicidad_lateral_derecho_zona_2_1);
      }

      //___ENABLE SERVICES & REFRESH!
      enable_ads_services([publicidad_lateral_derecho_zona_1_1.slot, publicidad_lateral_derecho_zona_1_2.slot, publicidad_lateral_derecho_zona_1_3.slot, publicidad_lateral_derecho_zona_2_1.slot]);


      //____FIRST APPEND AD!
      first_append_ad(numero_pagina, publicidad_lateral_derecho_zona_1_1, '');
      first_append_ad(numero_pagina, publicidad_lateral_derecho_zona_1_2, '');
      first_append_ad(numero_pagina, publicidad_lateral_derecho_zona_1_3, '');
      first_append_ad(numero_pagina, publicidad_lateral_derecho_zona_2_1, '');


    } else {
      //___FIRST AD INIT

      var total_numero_palabras = 0;

      jq('p', jq('.ficha .cuerpo .contenido').get(numero_pagina)).each(function(i) {
        total_numero_palabras += jq(this).text().split(' ').length;
      });

      var numero_palabras_parrafo = 0;
      var numero_publicidad = 1;

      jq('p', jq('.ficha .cuerpo .contenido').get(numero_pagina)).each(function(i) {
        numero_palabras_parrafo += jq(this).text().split(' ').length;
        total_numero_palabras += jq(this).text().split(' ').length;

        ////console.log('total_palabras: ' + total_numero_palabras + '  palabras_parrafo: ' + numero_palabras_parrafo);

        if (total_numero_palabras >= 1000 && numero_palabras_parrafo >= 500) {
          jq(this).after('<div class="publicidad_intercalada_' + numero_publicidad + '"></div>');

          numero_publicidad++;
          numero_palabras_parrafo = 0;

        }
      }); ////---fin:each

      //console.log('numero_publicidad: ' + numero_publicidad);

      var slot_refresh_fake = [];

      if (numero_publicidad === 1) {
        jq(jq('.ficha .cuerpo .contenido').get(numero_pagina)).append('<div class="publicidad_intercalada_1"></div>');
        fake_div_ad(numero_pagina, next_fake_id_generator(), publicidad_lateral_derecho_zona_1_1, 'pos_movil2');
        slot_refresh_fake.push(publicidad_lateral_derecho_zona_1_1.fakeslot);
        fake_div_ad(numero_pagina, next_fake_id_generator(), publicidad_lateral_derecho_zona_1_2, '');
        slot_refresh_fake.push(publicidad_lateral_derecho_zona_1_2.fakeslot);

        //console.log('numero_publicidad1');

      }if(numero_publicidad === 2){
        fake_div_ad(numero_pagina, next_fake_id_generator(), publicidad_lateral_derecho_zona_1_1, 'pos_movil2');
        slot_refresh_fake.push(publicidad_lateral_derecho_zona_1_1.fakeslot);
        fake_div_ad(numero_pagina, next_fake_id_generator(), publicidad_lateral_derecho_zona_1_2, '');
        slot_refresh_fake.push(publicidad_lateral_derecho_zona_1_2.fakeslot);
        fake_div_ad(numero_pagina, next_fake_id_generator(), publicidad_lateral_derecho_zona_1_3, '');
        slot_refresh_fake.push(publicidad_lateral_derecho_zona_1_3.fakeslot);

        //console.log('numero_publicidad2');

      }if(numero_publicidad >= 3){
        fake_div_ad(numero_pagina, next_fake_id_generator(), publicidad_lateral_derecho_zona_1_1, 'pos_movil2');
        slot_refresh_fake.push(publicidad_lateral_derecho_zona_1_1.fakeslot);
        fake_div_ad(numero_pagina, next_fake_id_generator(), publicidad_lateral_derecho_zona_1_2, '');
        slot_refresh_fake.push(publicidad_lateral_derecho_zona_1_2.fakeslot);
        fake_div_ad(numero_pagina, next_fake_id_generator(), publicidad_lateral_derecho_zona_1_3, '');
        slot_refresh_fake.push(publicidad_lateral_derecho_zona_1_3.fakeslot);
        fake_div_ad(numero_pagina, next_fake_id_generator(), publicidad_lateral_derecho_zona_2_1, '');
        slot_refresh_fake.push(publicidad_lateral_derecho_zona_2_1.fakeslot);

        //console.log('numero_publicidad3');
      }




      //console.log('slot_refresh_fake: ' + slot_refresh_fake.length);
      refresh_all_ads(slot_refresh_fake);

    } //--- fin: las demás paginas menos 0

  } //----- fin: MOBILE
} // fin: obtener_publi

//---PRIMERA LLAMADA PUBLI FUNCTIONS
function first_ad_init(publi) {
  googletag.cmd.push(function() {
    publi.slot = googletag.defineSlot(publi.path, publi.size, publi.id).
    setTargeting('test', 'refresh').
    addService(googletag.pubads());
  });
}

function first_ad_init_out(publi) {
  googletag.cmd.push(function() {
    publi.slot = googletag.defineSlot(publi.path, publi.id).
    setTargeting('test', 'refresh').
    addService(googletag.pubads());
  });
}


function enable_ads_services(slot_arr) {
  googletag.pubads().setTargeting('CxSegments',cX.getUserSegmentIds({ persistedQueryId: '1e71f5d217d2466a2c28a8f572d1e7cdb635b306' }));
  googletag.pubads().enableSingleRequest();
  googletag.pubads().disableInitialLoad();
  googletag.pubads().refresh(slot_arr);
  googletag.enableServices();
};

function first_append_ad(pag, publi, movil) {
  var movil = typeof movil === 'undefined' ? 'none' : movil;

  var slot_div = document.createElement('div');
  slot_div.id = publi.id;

  if (movil === 'none') {
    var jq_elm = publi.pos(pag);
    jq_elm.append(slot_div);
  } else {
    var jq_elm = publi.pos_movil(pag);
    jq_elm.append(slot_div);
  }

  googletag.cmd.push(function() {
    googletag.display(publi.id);
  });
}

//---EL RESTO DE LLAMADAS PUBLI FUNCTIONS
function fake_div_ad(pag, fake_id, publi, movil) {
  var movil = typeof movil === 'undefined' ? 'none' : movil;
  var slot_div = document.createElement('div');
  slot_div.id = fake_id;

  if (movil === 'none') {
    var jq_elm = publi.pos(pag);
    jq_elm.append(slot_div);
  } else if (movil === 'pos_movil2') {
    var jq_elm = publi.pos_movil2(pag);
    jq_elm.append(slot_div);

  } else {
    var jq_elm = publi.pos_movil(pag);
    jq_elm.append(slot_div);
  }

  googletag.cmd.push(function() {
    publi.fakeslot = googletag.defineSlot(publi.path, publi.size, fake_id).
    setTargeting('test', 'refresh').
    addService(googletag.pubads());
    googletag.display(fake_id);
  });


}


function refresh_all_ads(slot_arr) {
  googletag.cmd.push(function() {
    googletag.pubads().refresh(slot_arr);
  });
};

function load_publi_skin(elm, publi){

  jq(elm).prepend('<div id="'+ publi.id +'"></div></div>');

  googletag.cmd.push(function() {

//---publi uno
    publi.slot = googletag.defineOutOfPageSlot(publi.path, publi.id).
    setTargeting('test', 'refresh').
    addService(googletag.pubads());
    googletag.display(publi.id);
    googletag.pubads().refresh([publi.slot]);

  });
  //---detecta la carga de skin
  jq('#' + publi.id + ' > div > iframe').load(function(){

    jq(elm).prepend(jq(this).contents().find('a').addClass('link_skin'));
    jq(elm).prepend(jq(this).contents().find('style'));
    jq('body').addClass('conskin');
    jq('#wrapper').addClass('publi_skin');
  });
}

function load_publi_especial_A(elm, publi){
  jq(elm).prepend('<div id="'+ publi.id +'"></div></div>');

  googletag.cmd.push(function() {

//---publi uno
    publi.slot = googletag.defineOutOfPageSlot(publi.path, publi.id).
    setTargeting('test', 'refresh').
    addService(googletag.pubads());
    googletag.display(publi.id);
    googletag.pubads().refresh([publi.slot]);

  });
  //---detecta la carga
  jq('#' + publi.id + ' > div > iframe').load(function(){

    jq(elm).prepend(jq(this).contents().find('#intersticial'));

  });
}


function load_publi_especial_B(elm, publi){

  jq(elm).prepend('<div id="'+ publi.id +'"></div></div>');

  googletag.cmd.push(function() {

//---publi uno
    publi.slot = googletag.defineOutOfPageSlot(publi.path, publi.id).
    setTargeting('test', 'refresh').
    addService(googletag.pubads());
    googletag.display(publi.id);
    googletag.pubads().refresh([publi.slot]);

  });

  //---detecta la carga
  jq('#' + publi.id + ' > div > iframe').load(function(){

    var infooter=jq(this).contents().find('#infooter');
    var itt=jq(this).contents().find('#itt');
    var inffoter_imgbg=jq(this).contents().find('#infooter > a');
    var cerrar=jq(this).contents().find('#cerrar');
    var cerrar_in=jq(this).contents().find('#cerrar-in a');

    jq(elm).prepend( itt );
    jq(elm).prepend( infooter );
    jq(elm).prepend(jq(this).contents().find('style'));
    //jq(elm).prepend(jq(this).contents().find('script'));

    inffoter_imgbg.on('mouseenter',function(){
      itt.css('display','block');
    });
    cerrar.on('click', function(){
      itt.css('display','none');
    });

    cerrar_in.on('click', function(){
      infooter.css('display','none');
    });



  });
}


function next_fake_id_generator() {
  var id = nextFakeId++;
  return 'fake_ad' + id;
}

/*----------------------------*/
  // SOCIAL ICONS EN MOVIL
/*----------------------------*/


jq(document).ready(function(){
  if (window.matchMedia('(max-width: 500px)').matches){

    stylingOnAjaxScroll(0);

  }
  $(window).resize(function(){
    if (window.matchMedia('(max-width: 500px)').matches){
      stylingOnAjaxScroll(0);
    }

  });

});
function stylingOnAjaxScroll(num){
  var thearticle=jq(jq('article').get(num));
  var socials_elm=thearticle.find('.red_movil');
  var offset_socials=socials_elm.offset();


  var offset_comments=thearticle.find('.tags_comentarios').offset();

  jq(window).scroll(function() {

    if (jq(window).scrollTop() > offset_socials.top && (jq(window).scrollTop() + $(window).height()) < offset_comments.top) {
      socials_elm.addClass('fixed-socials');
    } else {
      socials_elm.removeClass('fixed-socials');
    }

  });
}
