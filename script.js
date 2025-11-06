// let path = document.querySelector('path')
// let pathlength = path.getTotalLength()

// path.style.strokeDasharray = pathlength + ' ' + pathlength;

// path.style.strokeDashoffset = pathlength;

// window.addEventListener('scroll',() => {
//     var scrollPercentage = (document.documentElement.scrollTop/2 + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight);

//     var drawLength = pathlength * scrollPercentage;

//     path.style.strokeDashoffset = pathlength - drawLength;
// })

// const typingElement = document.getElementById('typingText');

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           typingElement.classList.add('typing');
//           typingElement.style.opacity = 1;
//         }
//       });
//     }, { threshold: 0.5 }); // trigger when 50% visible

//     observer.observe(typingElement);

const text = document.querySelector('.budget-text');
    window.addEventListener('scroll', () => {
      const rect = text.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        text.classList.add('visible');
      }
    });

const textual = document.querySelector('.monetary-text');
    window.addEventListener('scroll', () => {
      const rect = textual.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        textual.classList.add('visible');
      }
    });
