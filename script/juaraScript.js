// .navbar -sub: overlauy
function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
}
function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

// juara MTQ

// const juara = document.getElementById('juara');
// juara.addEventListener('click', function () {
//   Swal.fire({
//     icon: 'success',
//     title: 'Data sudah tersedia',
//     text: 'Notice: Keputusan Dewan Juri tidak dapat diganggugat',
//   });
//   const juaraMTQ = document.getElementById('juaraMTQ');
//   juara.style.display = 'none';
//   juaraMTQ.style.display = 'block';
// });

const alert = document.getElementById('alert');
alert.addEventListener('click', function () {
  Swal.fire({
    icon: 'error',
    title: 'Data belum tersedia',
    text: 'Harap menunggu 1x24 jam setelah pengumuman MTQ mesjid Raya Batu Taba',
  });
});
