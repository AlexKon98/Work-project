document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.swiper__link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.swipe-content-active').forEach(function(tabContent) {
        tabContent.classList.remove('article__block');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('article__block');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.swiper__link').forEach(function(tabs) {
    tabs.addEventListener('click', function(click) {
      const btn = click.currentTarget.dataset.path;
      document.querySelectorAll('.swiper__link').forEach(function(tab) {
        tab.classList.remove('swipe-item-active');
      });
      document.querySelector(`[data-path="${btn}"]`).classList.add('swipe-item-active');
    });
  });
});
