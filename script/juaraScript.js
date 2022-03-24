// .navbar -sub: overlauy
function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
}
function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

// juara MTQ
const juara = document.getElementById('juara');
juara.addEventListener('click', function () {
  const juaraMTQ = document.getElementById('juaraMTQ');
  juara.style.display = 'none';
  juaraMTQ.style.display = 'block';
});

const alert = document.getElementById('alert');
alert.addEventListener('click', function () {
  const alertMTQ = document.getElementById('alertMTQ');
  alert.style.display = 'none';
  alertMTQ.style.display = 'block';

});


