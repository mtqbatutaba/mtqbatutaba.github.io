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

const icon2 = document.querySelectorAll('#mySidenav i');
icon2[0].classList.add('fa', 'fa-times-circle-o');
icon2[1].classList.add('fa', 'fa-whatsapp');
icon2[2].classList.add('fa', 'fa-telegram');

const icon3 = document.querySelector('.active i');
icon3.classList.add('fa', 'fa-home');

const icon4 = document.querySelectorAll('a.nav-link');
for (let i = 1; i < icon4.length; i++) {
  const iBaru = document.createElement('i');
  icon4[i].appendChild(iBaru);
  iBaru.classList.add('fa', 'fa-chevron-circle-down');
}

document.querySelector('i.waktu').classList.add('fa','fa-calendar')
document.querySelector('i.lokasi').classList.add('fa','fa-map-marker');
document.querySelector('i.daftar').classList.add('fa','fa-link');