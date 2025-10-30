// Variabel untuk elemen DOM
let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');
let buyNowBtn = document.querySelector('.buy-now-btn');

// -------------------- TOGGLE NAVIGASI BAR (MOBILE) --------------------
menuBtn.onclick = () => {
    navbar.classList.toggle('active');
}

// -------------------- SCROLL REVEAL ANIMATION --------------------
// Fungsi untuk mengecek elemen yang terlihat di viewport
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Jarak sebelum elemen muncul

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            // Optional: Hapus kelas 'active' saat di luar viewport untuk animasi berulang
            // reveals[i].classList.remove("active"); 
        }
    }
}

// Tambahkan class 'active' ke .reveal pada CSS
// .reveal { opacity: 0; transform: translateY(20px); transition: 1s all ease; }
// .reveal.active { opacity: 1; transform: translateY(0); }

window.addEventListener("scroll", reveal);

// Jalankan saat load untuk memastikan elemen yang sudah terlihat langsung aktif
reveal();


// -------------------- BUTTON CHART Fungsionalitas (Sederhana) --------------------
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Produk berhasil ditambahkan ke Chart!');
        // Tambahkan logika update Chart Count di sini
    });
});

// -------------------- BUTTON BUY NOW Fungsionalitas (Mobile) --------------------
buyNowBtn.addEventListener('click', function() {
    // Navigasi ke produk dan tutup menu jika aktif
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }
    // Logika lain jika diperlukan
});

// -------------------- Menghilangkan Navbar saat Scroll Jauh (Opsional) --------------------
window.onscroll = () => {
    // Hilangkan menu mobile saat scroll
    if (menuBtn && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }

    // Ubah background header saat scroll
    if (window.scrollY > 80) {
        document.querySelector('.header').style.background = 'var(--bg-color)';
        document.querySelector('.header').style.boxShadow = 'var(--box-shadow)';
    } else {
        document.querySelector('.header').style.background = 'var(--dark-bg)';
        document.querySelector('.header').style.boxShadow = 'none';
    }
};