//boxes fade-in while scrolling animation
const elements = document.querySelectorAll('.fade-in1');

const appearOptions = {
  root: null,
  threshold: 1,
  rootMargin: "0px 0px 10px 0px"
};

const appearOnScroll = new IntersectionObserver
  (function (
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
    appearOptions);

elements.forEach(fader => {
  appearOnScroll.observe(fader);
});

const elements1 = document.querySelectorAll('.fade-in2');
const appearOptions1 = {
  root: null,
  threshold: 1,
  rootMargin: "0px 0px 10px 0px"
};
const appearOnScroll1 = new IntersectionObserver
  (function (
    entries,
    appearOnScroll1
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll1.unobserve(entry.target);
      }
    });
  },
    appearOptions1);
elements1.forEach(fader => {
  appearOnScroll1.observe(fader);
});


const elements2 = document.querySelectorAll('.fade-in3');
const appearOptions2 = {
  root: null,
  threshold: 1,
  rootMargin: "0px 0px 10px 0px"
};
const appearOnScroll2 = new IntersectionObserver
  (function (
    entries,
    appearOnScroll2
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll2.unobserve(entry.target);
      }
    });
  },
    appearOptions2);
elements2.forEach(fader => {
  appearOnScroll2.observe(fader);
});

// Integrating the roles from CSS
const rolesElements = document.querySelectorAll('.roles');
const words = rolesElements[0].innerText.split(' '); // Assuming there's only one element with class 'roles'
let index = 0;
function loopThroughWords() {
  setTimeout(() => {
    // Hide the current word
    rolesElements.forEach(el => el.style.opacity = '0');
    // Show the next word
    const nextIndex = (index + 1) % words.length;
    rolesElements.forEach(el => {
      el.innerText = words[nextIndex];
      el.style.opacity = '1';
    });
    index = nextIndex;
  }, index * 200);
}
setTimeout(() => {
  loopThroughWords();
  setInterval(() => {
    loopThroughWords();
  }, words.length * 250);
}, 3500);

//slideshow animation
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycbwG9vCMBREFM4suhSiTdVPFu7-F-6JclKyZGGuKjFS-dqaZT6kKXS6r_15kub3YH2R5yw/exec'

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody })
    .then(response => {
      alert('Success!', response)
      submitButton.disabled = false
    })
    .catch(error => {
      alert('Error!', error.message)
      submitButton.disabled = false

    }
    )
})
window.addEventListener("load", function () {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
      .then(() => {
        alert("Success!");
      })
  });
});


var clicked = false;
var container;
function dropDown() {
    if (!container) {
        container = document.createElement('div');
        container.className = 'dropdown-container';
        const icons = ['fa-house', 'fa-building-columns', 'fa-wrench', 'fa-award', 'fa-message'];
        const links = ['#Home', '#Projects', '#Education', '#Honors', '#Contact'];
        icons.forEach((icon, index) => {
            const link = document.createElement('a');
            link.href = links[index];
            link.style.textDecoration = 'none';
            link.style.color = '#FB8500';
            const iconElement = document.createElement('i');
            iconElement.className = `fa-solid ${icon} fa-lg`;
            iconElement.style.paddingLeft = '2em';
            iconElement.style.display = 'inline-flex';
            link.appendChild(iconElement);
            container.appendChild(link);
        });
        document.getElementById('dropdown-root').appendChild(container);
    }
    if (!clicked) {
        container.classList.add('show');
    } else {
        container.classList.remove('show');
    }
    clicked = !clicked;
}

document.getElementById('toggle-button').addEventListener('click', toggleDropdown);


/*  if (index < words.length - 1) {
    words[index + 1].style.opacity = '1'; // Show the next word
  } else {
    words[0].style.opacity = '1'; // Show the first word for infinite loop
  }
}, index * 2000); 

setTimeout(() => { loopThroughWords();
setInterval(loopThroughWords, words.length * 2000);}, 4000); */
