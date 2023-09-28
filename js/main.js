// Nav Mobile

const navBtn = document.querySelector('.nav-icon-btn')
const navIcon = document.querySelector('.nav-icon')
const nav = document.querySelector('.nav__nav-mobile')
const heightOfMobileMenu = 796;
const navActive = document.querySelector('.nav__nav-mobile.active')

navBtn.onclick = function () {
  navIcon.classList.toggle('nav-icon--active')
  nav.classList.toggle('active')
}

// Popup

const popup = document.querySelector('.popup')
const buttonToPopup = document.querySelectorAll('[data-popup-btn]')
const popupButtonClose = document.querySelector('.popup__remove')

// console.log(buttonToPopup[0])

buttonToPopup[0].onclick = function () {
  popup.classList.toggle('none')
  document.body.classList.toggle('overflow-hidden')
}

buttonToPopup[1].onclick = function () {
  popup.classList.toggle('none')
  document.body.classList.toggle('overflow-hidden')
}

popupButtonClose.onclick = function () {
  popup.classList.toggle('none')
  document.body.classList.toggle('overflow-hidden')
}

// Change Img

const types = document.querySelector('.types__inner')
const typesSectionFirst = document.querySelector('.types__section.first')
const typesSectionSecond = document.querySelector('.types__section.second')
const typesSectionThird = document.querySelector('.types__section.third')
const typesSectionFourth = document.querySelector('.types__section.fourth')
const typesSectionFifth = document.querySelector('.types__section.fifth')

typesSectionFirst.addEventListener("mouseover", (event) => {
  if (types.classList.contains('img5') || types.classList.contains('img4') || types.classList.contains('img3') || types.classList.contains('img2')) {
    types.classList.remove('img5', 'img4', 'img3', 'img2')
  }
  types.classList.add('img1')
  // console.log(1)
});

typesSectionSecond.addEventListener("mouseover", (event) => {
  if (types.classList.contains('img5') || types.classList.contains('img4') || types.classList.contains('img3') || types.classList.contains('img1')) {
    types.classList.remove('img5', 'img4', 'img3', 'img1')
  }
  types.classList.add('img2')
  // console.log(2)
});

typesSectionThird.addEventListener("mouseover", (event) => {
  if (types.classList.contains('img5') || types.classList.contains('img4') || types.classList.contains('img2') || types.classList.contains('img1')) {
    types.classList.remove('img5', 'img4', 'img2', 'img1')
  }
  types.classList.add('img3')
  // console.log(3)
});

typesSectionFourth.addEventListener("mouseover", (event) => {
  if (types.classList.contains('img5') || types.classList.contains('img3') || types.classList.contains('img2') || types.classList.contains('img1')) {
    types.classList.remove('img5', 'img3', 'img2', 'img1')
  }
  types.classList.add('img4')
  // console.log(4)
});

typesSectionFifth.addEventListener("mouseover", (event) => {
  if (types.classList.contains('img4') || types.classList.contains('img4') || types.classList.contains('img2') || types.classList.contains('img1')) {
    types.classList.remove('img4', 'img3', 'img2', 'img1')
  }
  types.classList.add('img5')
  // console.log(5)
});

// Swiper

const swiper = new Swiper(".best-offer__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  }
});

const swiperFeedback = new Swiper(".feedback__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  slidesPerView: 1,
  spaceBetween: 24,

  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1048: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
});

// Phone Mask

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('[data-tel-input]'), function (input) {
    let keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      let reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);

  });

});

// Form

function buttonClick() {
  const inputPhone = getInputText()
  if (inputPhone.length < 18 || inputPhone.length > 18) {
    document.querySelector('[data-tel-input]').classList.add('error-placeholder')
  }
}

function getInputText() {
  const inputText = document.querySelector('[data-tel-input]')
  return inputText.value
}

function addClassToInput() {

}
