let tabs = document.querySelectorAll('.your-bonuses__link');
let swipeContent = document.querySelectorAll('.swipe-content-active');

document.querySelectorAll('.my-bonuses__link').forEach(function(tabs) {
  tabs.addEventListener('click', function(click) {
    const btn = click.currentTarget.dataset.path;
    document.querySelectorAll('.my-bonuses__link').forEach(function(tab) {
      tab.classList.remove('my-bonuses__link_active');
    });
    document.querySelector(`[data-path="${btn}"]`).classList.add('my-bonuses__link_active');
  });
});

tabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    const path = event.currentTarget.dataset.path;
    swipeContent.forEach((tabContent) => {
      tabContent.classList.remove('your-bonuses__main-list');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('your-bonuses__main-list');
  });
});
