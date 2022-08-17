const modal = document.getElementById('id01');
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// $('#play-video').on('click', function(e){
//   e.preventDefault();
//   $('#video-overlay').addClass('open');
//   $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
// });

// $('.video-overlay, .video-overlay-close').on('click', function(e){
//   e.preventDefault();
//   close_video();
// });

// $(document).keyup(function(e){
//   if(e.keyCode === 27) { close_video(); }
// });

// function close_video() {
//   $('.video-overlay.open').removeClass('open').find('iframe').remove();
// };

window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  header.classList.toggle("sticky", window.scrollY > 0);
});

// loader
let maskL = document.querySelector('.maskL');
window.addEventListener('load', () => {
  maskL.classList.add('hide');
  setTimeout(() => {
    maskL.remove();
  }, 3000)
});
// ANIMATION
const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};
const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}
window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
// burger
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-header-navigation-list');
burger.addEventListener('click', toggleNav);
function toggleNav() {
  console.log('clicked');
  burger.classList.contains('active') ? burger.classList.remove('active') : burger.classList.add('active');
  burgerMenu.classList.contains('is-active') ? burgerMenu.classList.remove('is-active') : burgerMenu.classList.add('is-active');
}
// SLIDER
const swiper_home = new Swiper('.home-swiper', {
  speed: 1000,
  slidesPerView: 4,
  loop: false,
  spaceBetween: 25,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    // when window width is <= 480px
    425: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is <= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
const swiper_courses = new Swiper('.courses-swiper', {
  speed: 1000,
  slidesPerView: 3,
  loop: true,
  // centeredSlides: true,
  autoHeight: false,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    // // when window width is <= 480px
    425: {
      slidesPerView: 2,
      spaceBetween: 10
    },    
    // when window width is <= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
const swiper_events = new Swiper('.events-swiper', {
  speed: 1000,
  slidesPerView: 3,
  loop: true,
  // centeredSlides: true,
  autoHeight: false,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    // // when window width is <= 480px
    425: {
      slidesPerView: 2,
      spaceBetween: 10
    },    
    // when window width is <= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
// 
// ACCORDION
const accordionTriggers = document.querySelectorAll('.accordion__item--trigger, .accordion-footer__item--trigger');

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener('click', expandAccordion);
});

function expandAccordion(event) {
  const { target: targetElement } = event;
  const isPanelExpanded = targetElement.getAttribute('aria-expanded');

  collapseAllAccordions();

  if (isPanelExpanded === "false") {
    targetElement.setAttribute('aria-expanded', true);
  } else {
    targetElement.setAttribute('aria-expanded', false);
  }
}

function collapseAllAccordions() {
  accordionTriggers.forEach((trigger) => {
    trigger.setAttribute('aria-expanded', false);
  });
}
// ..............................
// Load
$('.courses_all.courses-items').simpleLoadMore({
  item: '.courses.section-courses-item',
  count: 6,
  itemsToLoad: 3,
  easing: 'fade',
  showCounter: true
});
$('.blog.section-blog-items').simpleLoadMore({
  item: '.blog.section-blog-items-item',
  count: 6,
  itemsToLoad: 3,
  easing: 'fade',
  showCounter: true
});
$('.events.section-events-items').simpleLoadMore({
  item: '.events.section-events-items-item',
  count: 4,
  itemsToLoad: 4,
  easing: 'fade',
  showCounter: true
});
// ...............................
// Filter 
$(function($) {
  $.autofilter({
    duration: 300
  });
});
// .....................
const paragraph = `
© All rights reserved. ${new Date().getFullYear()} 
    `;
document.getElementById('copyright').innerHTML = paragraph;

//Get the button:
const mybutton = document.getElementById("myBtn");
const rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
mybutton.addEventListener("click", scrollToTop);
// COUNTER
// const headline = document.getElementById('headline');
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const countDown = new Date("1925-02-23T10:00").getTime(); // Choose your date "07.11.2014"

const counter = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDown + now;
  // headline.innerText = `It's been ${Math.floor(Math.floor(distance / (day)) / 365)} years`;
  document.getElementById("days").innerText = Math.floor(distance / (day));
  document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
  document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
  document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
}, 0);