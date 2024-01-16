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




    /*  if (index < words.length - 1) {
        words[index + 1].style.opacity = '1'; // Show the next word
      } else {
        words[0].style.opacity = '1'; // Show the first word for infinite loop
      }
    }, index * 2000); 

setTimeout(() => { loopThroughWords();
setInterval(loopThroughWords, words.length * 2000);}, 4000); */
