// form to spreadsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbxqKtMtHwI51Dy6Fo2Pp4DfEazMDl4fAWgpLwT1fnbA5swabVUaQIz9qMT8JdbA407Y/exec';

const form = document.forms['pendataran-MTQ'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

function alert() {
  Swal.fire({
    icon: 'success',
    title: 'Data berhasil dikirim !',
    text: 'Silahkan cek Email anda dan lengkapi syarat pendaftaran',
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      alert();
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
