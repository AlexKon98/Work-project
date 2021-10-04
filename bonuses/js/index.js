document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.my-bonuses__link').forEach(function(tabs) {
    tabs.addEventListener('click', function(click) {
      const btn = click.currentTarget.dataset.path;
      document.querySelectorAll('.my-bonuses__link').forEach(function(tab) {
        tab.classList.remove('my-bonuses__link_active');
      });
      document.querySelector(`[data-path="${btn}"]`).classList.add('my-bonuses__link_active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.your-bonuses__link').forEach(function(tabs) {
    tabs.addEventListener('click', function(click) {
      const btn = click.currentTarget.dataset.path;
      document.querySelectorAll('.your-bonuses__link').forEach(function(tab) {
        tab.classList.remove('your-bonuses__link_active');
      });
      document.querySelector(`[data-path="${btn}"]`).classList.add('your-bonuses__link_active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.your-bonuses__link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.swipe-content-active').forEach(function(tabContent) {
        tabContent.classList.remove('your-bonuses__main-list');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('your-bonuses__main-list');
    });
  });
});
