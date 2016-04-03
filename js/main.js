function anichange (objName) {
	if ( $(objName).css('display') == 'none' ) {
		$(objName).animate({height: 'show'}, 400);
	} else {
		$(objName).animate({height: 'hide'}, 200);
	}
}

/*Инициализация слайдера на главной*/
$(document).ready(function() {
	$('.mediahead_main').carousel({
		slider: '.main_slider',
		slide: '.gellery_item',
		slideHed: '.gallery_item figcaption',
		nextSlide : '.next',
		prevSlide : '.prev',
		addPagination: false,
		addNav : false
	}).bind();
	/*Автокликер для воспроизведения картинок в слайдере*/
//	setInterval(function(){
//		$("a.next").click()
//	}, 10000);
});


//многоуровневое меню
var site = function() {
	this.navLi = $('.nav li ul.subs li').children('ul').hide().end();
	this.init();
};
site.prototype = {
	init : function() {
		this.setMenu();
	},
	// Enables the slidedown menu, and adds support for IE6
	setMenu : function() {
		$.each(this.navLi, function() {
			if ( $(this).children('ul')[0] ) {
				$(this)
					.append('<span />')
					.children('span')
					.addClass('hasChildren')
			}
		});
	}
}
new site();

var site2 = function() {
	this.navLiAnim = $('.nav li').children('ul').hide().end();
	this.init();
};
site2.prototype = {
	init : function() {
		this.setMenu();
	},
	// Enables the slidedown menu, and adds support for IE6
	setMenu : function() {
		$.each(this.navLiAnim, function() {
		});
		this.navLiAnim.hover(function() {
			// mouseover
			$(this).find('> ul').stop(true, true).slideDown('slow', 'easeOutQuart');
		}, function() {
			// mouseout
			$(this).find('> ul').stop(true, true).hide();
		});
	}
}
new site2();

(function($) {
	$(function() {
		$('select').styler();
	})
})(jQuery)