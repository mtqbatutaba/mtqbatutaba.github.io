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

const icon1 = document.querySelectorAll('#mySidenav i');
icon1[0].classList.add('fa', 'fa-times-circle-o');
icon1[1].classList.add('fa', 'fa-whatsapp');
icon1[2].classList.add('fa', 'fa-telegram');

const icon2 = document.querySelectorAll('a.nav-link');
icon2[0].classList.add('fa', 'fa-home');
icon2[1].classList.add('fa', 'fa-file-pdf-o');
icon2[2].classList.add('fa', 'fa-file-pdf-o');
icon2[3].classList.add('fa', 'fa-map-marker');
icon2[4].classList.add('fa', 'fa-chevron-circle-down');

document.querySelector('i.waktu').classList.add('fa','fa-calendar');
document.querySelector('i.lokasi').classList.add('fa','fa-map-marker');
document.querySelector('i.daftar').classList.add('fa','fa-file-text-o');
