let link = document.querySelectorAll('.get_ready__link');

link.forEach((li) => {
  li.addEventListener('click', () => {
    link.forEach((item) => {
      item.classList.remove('get_ready__link_active');
    });
    li.classList.add('get_ready__link_active');
  });
});

// let playPause = document.getElementById('playPause');

// playPause.addEventListener('click', () => {
//   playPause.classList.toggle('active-block');
//   if(playPause.classList.)
// })
