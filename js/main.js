(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$(".toggle-password").click(function() {

	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});

})(jQuery);

document.getElementById('ingresar').addEventListener('click', validar)

function validar() {
	const user = document.getElementById('user-field')
	const password = document.getElementById('password-field')

	if (user.value && password.value ){
		Swal.fire('¡Bienvenido!', '', 'success').then(()=>location.href = 'pages/funciones_ia.html')

	}else{
		Swal.fire('¡Atención!', 'Debes ingresar usuario y contraseña', 'info')
	}
}
