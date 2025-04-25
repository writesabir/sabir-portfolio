  
$(document).ready(function() {
  var fixHeight = function() {
    $('.navbar-nav').css(
      'max-height',
      document.documentElement.clientHeight - 150
    );
  };
  fixHeight();
  $(window).resize(function() {
    fixHeight();
  });
  $('.navbar .navbar-toggler').on('click', function() {
    fixHeight();
  });
  $('.navbar-toggler, .overlay').on('click', function() {
    $('.mobileMenu, .overlay').toggleClass('open');
  });
});




$(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".box").show();
            }
        });
    }).change();
});





$(document).ready(function() {
	
	$('.card').delay(1800).queue(function(next) {
		$(this).removeClass('hover');
		$('a.hover').removeClass('hover');
		next();
	});
});




$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})









var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});











$(document).ready(function(){
  $(".accordion-panel").hide();//Hide accordions 

  /* Show all/Hide all accordions onclick */
  $(".control").click(function(){
    $(".accordion-panel").stop();//Stops user from spamming button
    /* Toggle text in button and panel */
    if ($(".control").text() == "Collapse All") {
      $(".control").text("Hide All");
      $(".accordion-panel").slideDown("slow");//Show all panels
      $(".fa-chevron-down").addClass("up"); 
    }else {
      $(".control").text("Collapse All");
      $(".accordion-panel").slideUp("slow");//Hide all panels
      $(".fa-chevron-down").removeClass("up"); 

    }
  });

  /* Slide accordion panel down onclick */
  $(".accordion").click(function(){
    /* Select only the accordion clicked on */
    $(this).parent().find(".fa-chevron-down").toggleClass("up"); 
    $(this).parent().find(".accordion-panel").slideToggle("slow");
    panelCheck();
  });

  /* Checks if all panels are closed */
  function panelCheck(){
    /* Panels are all hidden */
    if ($('.fa-chevron-down').hasClass("up") == false) {
      $(".control").text("Collapse All");
    }else{
      $(".control").text("Hide All");
    }
  }

});