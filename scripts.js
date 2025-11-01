// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });
  
  // Close menu when clicking a link
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('open');
    });
  });
});






document.addEventListener('DOMContentLoaded', () => {
  const mainImages = document.querySelectorAll('.main-image');
  const thumbnails = document.querySelectorAll('.thumbnail');
  let currentIndex = 0;
  let startX = 0;
  let isDragging = false;
  
  // Update active image and thumbnail
  const showImage = (index) => {
    mainImages.forEach(img => img.classList.remove('active'));
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    
    mainImages[index].classList.add('active');
    thumbnails[index].classList.add('active');
    currentIndex = index;
  };
  
  // Thumbnail click
  thumbnails.forEach((thumb, i) => {
    thumb.addEventListener('click', () => showImage(i));
  });
  
  // Touch/Swipe support for main image
  const mainWrapper = document.querySelector('.main-image-wrapper');
  
  const handleStart = (e) => {
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    isDragging = true;
  };
  
  const handleMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < mainImages.length - 1) {
        showImage(currentIndex + 1);
      } else if (diff < 0 && currentIndex > 0) {
        showImage(currentIndex - 1);
      }
      isDragging = false;
    }
  };
  
  const handleEnd = () => {
    isDragging = false;
  };
  
  // Mouse events
  mainWrapper.addEventListener('mousedown', handleStart);
  mainWrapper.addEventListener('mousemove', handleMove);
  mainWrapper.addEventListener('mouseup', handleEnd);
  mainWrapper.addEventListener('mouseleave', handleEnd);
  
  // Touch events
  mainWrapper.addEventListener('touchstart', handleStart, { passive: true });
  mainWrapper.addEventListener('touchmove', handleMove, { passive: true });
  mainWrapper.addEventListener('touchend', handleEnd);
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && currentIndex < mainImages.length - 1) {
      showImage(currentIndex + 1);
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
      showImage(currentIndex - 1);
    }
  });
});







faqHTML = '';
iPhone17_FAQ_Data.forEach(({ question, answer }) => {
  // { question, answer } = data
  html = `
      <div class="faq-box">
        <div class="faq-question">
          <h3>${question}</h3>
          <span class="js-faq-btn">+</span>
        </div>
        <p class="answer">${answer}</p>
      </div>
    `
  
  faqHTML += html;
});
document.querySelector('.js-faq-grid').innerHTML = faqHTML;


faqBtn = document.querySelectorAll('.js-faq-btn')

faqBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    btn.innerText === '+'
      ? btn.innerText = '-' 
      : btn.innerText = '+';
      
    document.querySelectorAll('.answer')[i].classList.toggle('show-answer');
  });
});