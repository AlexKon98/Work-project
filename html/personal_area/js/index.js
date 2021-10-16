let link = document.querySelectorAll('.personal_area__link');

link.forEach((li) => {
  li.addEventListener('click', () => {
    link.forEach((item) => {
      item.classList.remove('personal_area__link_active');
    });
    li.classList.add('personal_area__link_active');
  });
});

// const form = document.getElementById('form');
// const btn = document.getElementById('submit');
// const ref = document.getElementById('ref');

// form.addEventListener('submit', (f) => {
//   f.preventDefault();
//   document.getElementById('name').setAttribute('disabled', 'disabled');
//   document.getElementById('tel').setAttribute('disabled', 'disabled');
// }, true);

// btn.addEventListener('click', () => {
//   if(ref.value) {
//     ref.setAttribute('disabled', 'disabled');
//   }
// })
