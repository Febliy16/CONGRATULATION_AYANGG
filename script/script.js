const bar = document.querySelector('nav.smartphone i.fa-bars');

const nav = document.querySelector('nav.desktop');

bar.addEventListener('click', () => {
    nav.classList.toggle('active');
    bar.classList.toggle('active2');
});

const slidingContainer = document.querySelector('.sliding-container');
    const toggleButton = document.getElementById('popup');

    let isOpen = false;

    toggleButton.addEventListener('click', () => {
      if (isOpen) {
        slidingContainer.classList.remove('hidden');
        toggleButton.textContent = 'Tentang Bakingannya';
      } else {
        slidingContainer.classList.add('hidden');
        toggleButton.textContent = 'Sudah Tau';
      }
      isOpen = !isOpen;
    });

const project = document.querySelector('.project');
  const images = document.querySelectorAll('.image img');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  let currentIndex = 0;

  function slide(direction) {
    if (direction === 'next') {
      currentIndex = (currentIndex + 1) % images.length;
    } else {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    project.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevButton.addEventListener('click', () => slide('prev'));
  nextButton.addEventListener('click', () => slide('next'));

  