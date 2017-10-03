jQuery(document).ready(function($) {
    $(document).on('click', '.noticias-mas', function() {
        if ($(this).hasClass('abierto')) {
            $(this).removeClass('abierto');
            $('#cabecera-noticias-mas').hide();
        } else {
            $(this).parent().parent().find('.noticias-mas').removeClass('abierto');
            $(this).parent().parent().parent().find('.bot_destacamos').removeClass('abierto');
            $('.subheader .nav_v').removeClass('muestra');
            $(this).addClass('abierto');
            $('#cabecera-noticias').hide();

            $.post(
                PT_Ajax.ajaxurl,
                {
                    action : 'ajax-mostrarCabeceraNoticias',
                    tipo : this.id,
                    nonce : PT_Ajax.nonce
                },
                function(response) {
                    $('#cabecera-noticias-mas').hide().html(response).show();
                }
            );
            return false;
        }
    });

    $(document).on('click', '.bot_destacamos', function() {
        if ($(this).hasClass('abierto')) {
            $(this).removeClass('abierto');
            $('#cabecera-noticias').hide();
        } else {
            $(this).parent().find('.noticias-mas').removeClass('abierto');
            $(this).addClass('abierto');
            $('#cabecera-noticias-mas').hide();
            //$('#cabecera-noticias').show();

            $.post(
                PT_Ajax.ajaxurl,
                {
                    action : 'ajax-mostrarCabeceraDestacamos',
                    nonce : PT_Ajax.nonce
                },
                function(response) {
                    $('#cabecera-noticias').hide().html(response).show();
                }
            );
            return false;
        }
    });

    $(document).on('mouseover', '.menu-destacamos-container > ul > li', function() {
        var categoria = $(this).attr('class').split(' ')[0];
        $('#cabecera-destacamos > div').hide();
        $('#slider-cabecera-' + categoria).show();
    });

    $(document).on('click', '#menu-tv-ajax a', function(e) {
        e.preventDefault();
        $(this).parent().parent().find('.activo').removeClass('activo');
        $(this).parent().addClass('activo');

        var id_post = -1;

        if ($('.ficha').length) {
            id_post = $('.ficha').attr('id').substr(8);
        }

        $.post(
            PT_Ajax.ajaxurl,
            {
                action : 'ajax-mostrarPostsTVCategoria',
                categoria : $(this).parent().attr('class').split(' ')[0],
                id_post : id_post,
                nonce : PT_Ajax.nonce
            },
            function(response) {
                $('#categoria-la-tercera-tv').hide().html(response).show();
           }
        );
        return false;
    });
});