'use strict'

const ChooseLang = function() {
	const currentLang = document.getElementById('cur-lang');
	const select = document.getElementById('lang-select');
	const options = document.getElementsByClassName("b-header__nav__regist__choose-lang__select__option");

	currentLang.addEventListener("click", function(e){
		if(select.classList.contains("b-header__nav__regist__choose-lang__select--opened")){
			select.classList.remove("b-header__nav__regist__choose-lang__select--opened");
		}else{
			select.classList.add("b-header__nav__regist__choose-lang__select--opened");
		}	
	});

	for (var i = 0; i < options.length; i++) {
		options[i].addEventListener('click', function(e){
			var target = e.target;
			while(target.tagName != "LI"){
				target = target.parentNode;
			}
			
			var curFlag = currentLang.querySelector(".b-header__nav__regist__choose-lang__flag>i");
			var newFlag = target.querySelector(".b-header__nav__regist__choose-lang__flag>i");

			curFlag.classList = newFlag.classList;

			var curLang = currentLang.querySelector(".b-header__nav__regist__choose-lang__lang");
			var newLang = target.querySelector(".b-header__nav__regist__choose-lang__lang");
			curLang.innerText = newLang.innerText;
			
			select.classList.remove("b-header__nav__regist__choose-lang__select--opened");
		});
	}

}
ChooseLang();


const DeskSlider = function(){
	const slider = document.getElementById("desk-slider");
	const leftBtn = document.getElementById("desk-left-btn");
	const rightBtn = document.getElementById("desk-right-btn");
	var shifting = 0;
	
	leftBtn.addEventListener("click", function(){
		if(!(shifting >= 0)){
			if(slider.style.webkitTransform){
				slider.style.webkitTransform  = "translateX("+ (shifting += 300) +"px)";
			}	else {
				slider.style.transform = "translateX("+ (shifting += 300) +"px)";
			}	
		}	
	});

	rightBtn.addEventListener("click", function(){
		var maxShifting = 0;
		if(document.documentElement.clientWidth > 600){
			maxShifting = -600;
		} else{
			maxShifting = -900;
		}
		if(!(maxShifting == shifting)){
			if(slider.style.webkitTransform){
				slider.style.webkitTransform  = "translateX("+ (shifting -= 300) +"px)";
			} else {
				slider.style.transform = "translateX("+ (shifting -= 300) +"px)";
			}	
		}

		
	})

	window.addEventListener('resize', function(){
		if(document.documentElement.clientWidth >= 600){
			slider.style.webkitTransform = "translateX(0px)";
			slider.style.transform = "translateX(0px)";
			shifting = 0;
		}
	})
}
DeskSlider();