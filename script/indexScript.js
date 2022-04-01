// .navbar -sub: overlauy
function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
}
function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

// ----------------------------------------------------------------

// -sub: icon
document.querySelector('a.navbar-brand i').classList.add('fa', 'fa-user-circle');

const iconOverlay = document.querySelectorAll('#mySidenav i');
iconOverlay[0].classList.add('fa', 'fa-times-circle-o');
iconOverlay[1].classList.add('fa', 'fa-whatsapp');
iconOverlay[2].classList.add('fa', 'fa-telegram');

const iconNavbar = document.querySelectorAll('a.nav-link');
iconNavbar[0].classList.add('fa', 'fa-home');
iconNavbar[1].classList.add('fa', 'fa-file-pdf-o');
iconNavbar[2].classList.add('fa', 'fa-calendar');
iconNavbar[3].classList.add('fa', 'fa-file-text-o');
iconNavbar[4].classList.add('fa', 'fa-map-marker');
iconNavbar[5].classList.add('fa', 'fa-chevron-circle-down');

const iconTimeLine = document.querySelectorAll('.timeline');
for (let i = 0; i < iconTimeLine.length; i++) {
  iconTimeLine[i].classList.add('fa', 'fa-calendar');
}

const iconMap = document.querySelectorAll('.map');
for (let i = 0; i < iconMap.length; i++) {
  iconMap[i].classList.add('fa', 'fa-map-marker');
}

const iconDaftar = document.querySelectorAll('.daftar');
for (let i = 0; i < iconDaftar.length; i++) {
  iconDaftar[i].classList.add('fa', 'fa-file-text-o');
}

const iconFileUndangan = document.querySelectorAll('.fileUndangan');
for (let i = 0; i < iconFileUndangan.length; i++) {
  iconFileUndangan[i].classList.add('fa', 'fa-file-pdf-o');
}

const iconLink = document.querySelectorAll('.link');
for (let i = 0; i < iconLink.length; i++) {
  iconLink[i].classList.add('fa', 'fa-link');
}