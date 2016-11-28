$(document).on('click', ".link", function(e){ 
      // quita todas las clases activas de los li
      $(this).siblings('li').removeClass("active");
      // agrega al li presionado la clase active
      $(this).addClass("active");
});

$(document).ready(function() {
	$("#dancar-introduccion").siblings('div').hover(function() {
        $('a[href*="#dancar-introduccion"]').parents('li').siblings('li').removeClass("active");
        $('a[href*="#dancar-introduccion"]').parents('li').addClass("active");
    });
    $("#dancar-grids").siblings('div').hover(function() {
        $('a[href*="#dancar-grids"]').parents('li').siblings('li').removeClass("active");
        $('a[href*="#dancar-grids"]').parents('li').addClass("active");
    });
    $("#dancar-formularios").siblings('div').hover(function() {
        $('a[href*="#dancar-formularios"]').parents('li').siblings('li').removeClass("active");
        $('a[href*="#dancar-formularios"]').parents('li').addClass("active");
    });
    $("#dancar-navigacion").siblings('div').hover(function() {
        $('a[href*="#dancar-navigacion"]').parents('li').siblings('li').removeClass("active");
        $('a[href*="#dancar-navigacion"]').parents('li').addClass("active");
    });
    $("#dancar-tipografia").siblings('div').hover(function() {
        $('a[href*="#dancar-tipografia"]').parents('li').siblings('li').removeClass("active");
        $('a[href*="#dancar-tipografia"]').parents('li').addClass("active");
    });
});

