let link = document.querySelectorAll('.get_ready__link');
let playerList = document.querySelectorAll('.get_ready__player');
let player = document.getElementById('get_ready__main-player');
let playPause = document.getElementById('playPause');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let i = 0;
let pauseBtn = `<svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 63C49.1208 63 63 49.1208 63 32C63 14.8792 49.1208 1 32 1C14.8792 1 1 14.8792 1 32C1 49.1208 14.8792 63 32 63Z" stroke="url(#paint0_linear_643:882)" stroke-width="2"/>
<line x1="27.5" y1="24.5" x2="27.5" y2="41.5" stroke="url(#paint1_linear_643:882)" stroke-width="3" stroke-linecap="round"/>
<line x1="35.5" y1="24.5" x2="35.5" y2="41.5" stroke="url(#paint2_linear_643:882)" stroke-width="3" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_643:882" x1="1" y1="-32.5833" x2="14.1176" y2="128.207" gradientUnits="userSpaceOnUse">
<stop stop-color="#7BC1E8"/>
<stop offset="1" stop-color="#276F97"/>
</linearGradient>
<linearGradient id="paint1_linear_643:882" x1="26.5417" y1="23" x2="23.931" y2="23.0106" gradientUnits="userSpaceOnUse">
<stop stop-color="#60A7CE"/>
<stop offset="1" stop-color="#6ACAFF"/>
</linearGradient>
<linearGradient id="paint2_linear_643:882" x1="34.5417" y1="23" x2="31.931" y2="23.0106" gradientUnits="userSpaceOnUse">
<stop stop-color="#60A7CE"/>
<stop offset="1" stop-color="#6ACAFF"/>
</linearGradient>
</defs>
</svg>`
let playBtn = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z" stroke="url(#paint0_linear_599:704)" stroke-width="2"/>
<path d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z" stroke="url(#paint1_linear_599:704)" stroke-width="2"/>
<path d="M13.8438 12.263L20.3164 16L13.8438 19.737V12.263Z" stroke="url(#paint2_linear_599:704)" stroke-width="1.5"/>
<defs>
<linearGradient id="paint0_linear_599:704" x1="1" y1="-15.25" x2="7.34723" y2="62.552" gradientUnits="userSpaceOnUse">
<stop stop-color="#7BC1E8"/>
<stop offset="1" stop-color="#276F97"/>
</linearGradient>
<linearGradient id="paint1_linear_599:704" x1="1" y1="-15.25" x2="7.34723" y2="62.552" gradientUnits="userSpaceOnUse">
<stop stop-color="#7BC1E8"/>
<stop offset="1" stop-color="#276F97"/>
</linearGradient>
<linearGradient id="paint2_linear_599:704" x1="13.8438" y1="8.21466" x2="15.6657" y2="27.555" gradientUnits="userSpaceOnUse">
<stop stop-color="#7BC1E8"/>
<stop offset="1" stop-color="#276F97"/>
</linearGradient>
</defs>
</svg>`;

link.forEach((li) => {
  li.addEventListener('click', () => {
    link.forEach((item) => {
      item.classList.remove('get_ready__link_active');
    });
    li.classList.add('get_ready__link_active');
  });
});

let musicArray = [];
playerList.forEach((play) => {
  let name = play.src.split('/');
  musicArray.push(name.pop().replace('.mp3', '').split('%20').join(' '))
});
document.querySelector('.get_ready__name').textContent = musicArray[i];
player.src = `../../mus/${musicArray[i]}.mp3`;

next.addEventListener('click', () => {
  playPause.classList.remove('active-block');
  playPause.innerHTML = playBtn;
  if(i < musicArray.length-1) {
    player.src = `../../mus/${musicArray[++i]}.mp3`;
    document.querySelector('.get_ready__name').textContent = musicArray[i];
  }
});

prev.addEventListener('click', () => {
  playPause.classList.remove('active-block');
  playPause.innerHTML = playBtn;
  if(i > 0) {
    player.src = `../../mus/${musicArray[--i]}.mp3`;
    document.querySelector('.get_ready__name').textContent = musicArray[i];
  }
});

playPause.addEventListener('click', () => {
  playPause.classList.toggle('active-block');
  if(playPause.classList.contains('active-block')) {
    playPause.innerHTML = pauseBtn;
    player.play();
  } else {
    playPause.innerHTML = playBtn;
    player.pause();
  }
});