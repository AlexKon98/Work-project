let link = document.querySelectorAll('.personal_area__link');

link.forEach((li) => {
  li.addEventListener('click', () => {
    link.forEach((item) => {
      item.classList.remove('personal_area__link_active');
    });
    li.classList.add('personal_area__link_active');
  });
});

const form = document.getElementById('form');

form.addEventListener('submit', (f) => {
  setTimeout(() => {
      document.getElementById('name').setAttribute('disabled','disabled')
      document.getElementById('tel').setAttribute('disabled', 'disabled');
  },1);
}, true);
