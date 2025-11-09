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

const budgetText = document.querySelector('.budgeting-text');
window.addEventListener('scroll', () => {
  const rect = budgetText.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    budgetText.classList.add('visible');
  }
});

const textual = document.querySelector('.monetary-text');
    window.addEventListener('scroll', () => {
      const rect = textual.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        textual.classList.add('visible');
      }
    });

const insuranceText = document.querySelector('.insurance-text');
window.addEventListener('scroll', () => {
  const rect = insuranceText.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    insuranceText.classList.add('visible');
  }
});


const stockText = document.querySelector('.stock-text');
window.addEventListener('scroll', () => {
  const rect = stockText.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    stockText.classList.add('visible');
  }
});


 const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.member').forEach(el => observer.observe(el));
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  // Scroll fade-in animation
  const user = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    user.observe(el);
  });