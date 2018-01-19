/*MOUSEMOVE TRANSFORM 3D*/
/*
!(function ($doc, $win) {
	var screenWidth = $win.screen.width / 2,
		screenHeight = $win.screen.height / 2,
		$elems = $doc.getElementsByClassName("elem"),
		validPropertyPrefix = '',
		otherProperty = 'perspective(1000px)',
		elemStyle = $elems[0].style;

	if(typeof elemStyle.webkitTransform == 'string') {
		validPropertyPrefix = 'webkitTransform';
	} else if (typeof elemStyle.MozTransform == 'string') {
		validPropertyPrefix = 'MozTransform';
	}



	$doc.addEventListener('mousemove', function (e) {
		var centroX = e.clientX - screenWidth,
			centroY = screenHeight - (e.clientY + 13),
			degX = centroX * 0.004,
			degY = centroY * 0.008,
			$elem

		for (var i = 0; i < $elems.length; i++) {
   			$elem = $elems[i];
			$elem.style[validPropertyPrefix] = otherProperty + 'rotateY('+ degX +'deg)  rotateX('+ degY +'deg)';
		};
	});

})(document, window);
*/

/*CONTACT FORM*/

$('.btn-title').on('click', function(){
  $('.transition-bar').addClass("barmove");
  $('.transition-bar p:nth-of-type(1)').addClass("inactive");
  $('.contact-content-1').addClass("inactive");
  $('.contact-content-1').delay(700).fadeOut(50);
  setTimeout(function () {
  $('.transition-bar p:nth-of-type(2)').removeClass("inactive");
    $('.contact-content-2').fadeIn(1000);
    $('.contact-content-2').removeClass('inactive');
	}, 1000);
    setTimeout(function () {
  $('.transition-bar').removeClass("barmove");
	}, 2000);
});


$('.close-contact').on('click', function(){
  $('.transition-bar').addClass("barmove");
  $('.transition-bar p:nth-of-type(2)').addClass("inactive");
  $('.contact-content-2').addClass("inactive");
  $('.contact-content-2').delay(700).fadeOut(200);
  setTimeout(function () {
  $('.transition-bar p:nth-of-type(1)').removeClass("inactive");
    $('.contact-content-1').fadeIn(1000).removeClass("inactive");
    $('.contact-content-2').addClass('inactive');
	}, 1000);
    setTimeout(function () {
  $('.transition-bar').removeClass("barmove");
	}, 2000);
});
