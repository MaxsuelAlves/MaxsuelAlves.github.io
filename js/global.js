// botao open
	var open = $('.open');
	var menu = $('.menu');
	// esconde menu
	menu.hide();
	open.on('click', function(e){
		e.preventDefault();
		menu.slideToggle();
	});

	// verifica o tamanho do viewport do navegador pra definir o menu
	if($(window).width() > 800) {
		menu.show();
		open.hide();
	}
	else {
		menu.hide();
		open.show();
	}
	// quando diminuir o navegador
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 799) {
			menu.show();
			open.hide();
		}
		else {
			menu.hide();
			open.show();
		}

	});
