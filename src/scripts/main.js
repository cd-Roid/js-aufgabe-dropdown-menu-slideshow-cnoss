/**
 * toogleMenu
 *
 * Blendet das Menü aus oder ein.
 *
 */

function toogleMenu() {
  const interactionElementClass = ".js-navigation-interaction-element";
  const interactionElementAdditionalClass = "hamburger-button--is-open";
  const menuElementClass = "main-header__menu-bar-nav--is-open";

  const interactionElement = document.querySelector(interactionElementClass);
  const interactionTarget = interactionElement.dataset.jsInteractionTarget;
  const menuElement = document.querySelector(interactionTarget);

  interactionElement.addEventListener("click", () => {
    interactionElement.classList.toggle(interactionElementAdditionalClass);
    menuElement.classList.toggle(menuElementClass);
  });
}

/**
 * switchSlides
 *
 * Blättert in der Slideshow ein Bild vor oder zurück
 *
 */


//Funktion  wählt alles Bilder aus der Bilderliste und weist denen das Fullscreen Attribut zu.
//Ist das Bild bereits in Fullscreen wird onClick das Fullscreen attribut zurüclgesetzt.
function goFullScreen() {
  const slides = document.querySelectorAll("[data-js-slide]");
 function fullscreen(image) {
  image.addEventListener("click", () => {
    if (image.requestFullscreen) {
      image.requestFullscreen();
      document.exitFullscreen();
    
    }
  });
}
  for (let index = 0; index < slides.length; index++) {
    fullscreen(slides[index]);
  }
}


function switchSlides() {
  const wrapAroundAttribute = document.querySelector("[data-slide-show]")
  var wrapAroundAttributeString = JSON.parse(wrapAroundAttribute.dataset.slideShow)
  var wrapAroundAttributeStringValue = wrapAroundAttributeString['wrapAround']
  console.log(wrapAroundAttributeStringValue)
  const slides = document.querySelectorAll("[data-js-slide]");
  const interactionElementNext = document.querySelector(
    "[data-js-nav-next-slide]"
  );
  const interactionElementPrevious = document.querySelector(
    "[data-js-nav-previous-slide]"
  );
  const slideClassVisible = "slide-show__slide--visible";

  let activeSlide = 0;

  function showSlide(activeSlide) {
    slides[activeSlide].classList.add(slideClassVisible);
  }

  function hideSlide(activeSlide) {
    slides[activeSlide].classList.remove(slideClassVisible);
  }
 
  function changeSlide(direction) {
    hideSlide(activeSlide);

    if (direction === "next") {
      if (activeSlide + 1 < slides.length) {
        activeSlide += 1;
      } else if (wrapAroundAttributeStringValue == true ) {
        activeSlide = 0;
      }
    } else if (activeSlide - 1 < 0 && wrapAroundAttributeStringValue == true ) {
      activeSlide = slides.length - 1; 
    } else  if(activeSlide -1 >= 0){
      activeSlide -= 1;
    }

    

    showSlide(activeSlide);
  }

  showSlide(activeSlide);

  interactionElementNext.addEventListener("click", () => {
    changeSlide("next");
  });
  interactionElementPrevious.addEventListener("click", () => {
    changeSlide("previous");
  });
}
goFullScreen();
toogleMenu();
switchSlides();
