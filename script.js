let scale = 1;  // Variabel untuk melacak ukuran tombol

function shrinkYes() {
  var yesButton = document.getElementById('yesButton');
  
  // Setiap kali tombol "No" ditekan, ukurannya akan semakin besar
  scale += 0.5; // Tambahkan 0.1 pada ukuran tombol
  yesButton.style.transform = `scale(${scale})`; // Ubah ukuran tombol "Yes"
}

function changeContent() {
  var questionText = document.getElementById('questionText');
  var gifImage = document.getElementById('gifImage');

  // Ganti teks pertanyaan
  questionText.textContent = "LOPPPPP UUUU SAYANGGGGGGG Happy Valentine 💖";

  // Ganti gambar (ganti dengan URL gambar lain yang sesuai)
  gifImage.src = "cat1.gif";
}
