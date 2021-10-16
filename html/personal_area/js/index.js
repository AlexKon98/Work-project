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
const inp = document.querySelectorAll('.personal_area__input');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  inp.forEach((a) => {
    if(a.hasAttribute('disabled')) {
      a.setAttribute('disabled', 'disabled');
    }
  });
});
