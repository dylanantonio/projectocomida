$(document).on("ready", inicializar);

function inicializar(){
	//$("body").hide().fadeIn(300);
	$(".popup-button").on("click", mostrarLightbox);
	$("#close-button").on("click", ocultarLightbox);

	function activar(event){
		//$(event.currentTarget).addClass("active");
		if( $(this).hasClass("active") ){
			$(this).removeClass("active")
		}/*fin del if*/else{
			$("nav a").removeClass("active");
			$(this).addClass("active");
		}/* fin del else */

		event.preventDefault();
	} // fin de activar

	function mostrarLightbox(){
    event.preventDefault();
    $(".lightbox").find("img").attr("src", $(this).attr("data-img"));
		$(".lightbox").slideDown(300);
	} // fin de mostrarLightbox

	function ocultarLightbox(){
    event.preventDefault();
		// $(".lightbox").addClass("hidden");
		$(".lightbox").slideUp(200);
	} // fin de ocultarLightbox

} // fin de inicializar
