function cekInput() {
            var inputNilai = document.getElementById('inputNilai').value;
            var jawabanBenar = '16 SEPTEMBER 2022'; // Ganti dengan jawaban yang benar
            
            if (inputNilai === jawabanBenar) {
                window.location.href = 'page1.html' // Redirect ke Google
            } else {
                alert('salah ay, masa lupa sih. kalau lupa tanya aku dulu.');
                alert('silahkan klik "Lupa tanggal jadian kita?"')
                alert('SILAHKAN COBA LAGI HINGGA BENAR'); // Tampilkan pesan jika input salah
            }
        }