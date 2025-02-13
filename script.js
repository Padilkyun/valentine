let scale = 1;  // Variabel untuk melacak ukuran tombol

function shrinkYes() {
  var yesButton = document.getElementById('yesButton');
  var noButton = document.getElementById('noButton');
  // Setiap kali tombol "No" ditekan, ukurannya akan semakin besar
  scale += 0.5; // Tambahkan 0.1 pada ukuran tombol
  yesButton.style.transform = `scale(${scale})`; // Ubah ukuran tombol "Yes"
}

function changeContent() {
  var questionText = document.getElementById('questionText');
  var gifImage = document.getElementById('gifImage');
  var yesButton = document.getElementById('yesButton');  // Ambil tombol "Yes"
  var noButton = document.getElementById('noButton');

  // Ganti teks pertanyaan
  questionText.textContent = "LOPPPPP UUUUU SAYANGKU, Happy Valentine By! 💖";

  // Ganti gambar (ganti dengan URL gambar lain yang sesuai)
  gifImage.src = "cat1.gif";

if (yesButton) {
    yesButton.style.display = "none";  // Menyembunyikan tombol Yes
    noButton.style.display = "none";
  }
  if (noButton) {  // Menyembunyikan tombol Yes
    noButton.style.display = "none";
  }
}
