"use strict"

var shopItems = Array.prototype.slice.call(document.querySelectorAll(".shop_by_item"));

var arrow = document.querySelector(".shop_by_menu_arrow");
var menu = document.querySelector(".shop_by_menu");

    shopItems.forEach(function(el) {
	    el.addEventListener("click", function(event) {
			event.preventDefault();
			if(el.children[1] && el.children[2]) {
				el.children[1].classList.toggle("shop_by_menu_arrow--show");
				el.children[2].classList.toggle("shop_by_menu--show");
	        }
	        return;
	    }, false);
});

$(document).ready(function() {
 
  $(".js_main").owlCarousel({

	  items : 1,
	  pagination: true,
	  responsive: false,
	  autoPlay: true,
	  autoPlayTimeout: 3000
  });

});
