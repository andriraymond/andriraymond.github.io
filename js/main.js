/* ---------------------- */
/* ---- NAVBAR - NAV ---- */
/* ---------------------- */

// FUNCTION MENGUBAH TITLE NAVBAR SESUAI DENGAN RESOLUTION --------------------------------
const myName  = document.getElementById('title');
const contLeft = document.getElementById('content-left');
const elFooter = document.getElementsByClassName('.ray-footer');

function changeText() {
    if (window.innerWidth <= 410) {
        myName.innerHTML = "Andri Reimondo";
        

    } else if (window.innerWidth <= 678){
        myName.innerHTML = "Andri Reimondo";
    }    else {
        myName.innerHTML = "Andri Reimondo Tamba";
    }
}

// Memanggil fungsi saat halaman di muat dan saat ukuran layar berubah
window.onload = changeText;
window.onresize = changeText;

/* ---------------------- */
/* ----/NAVBAR - NAV ---- */
/* ---------------------- */
const navLinks = document.querySelectorAll('div ul .nav-item');
// Ambil semua elemen div dengan kelas "content"
const contentDivs = document.querySelectorAll('div .main-content');

// Tambahkan event listener pada setiap elemen a
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah tindakan default saat mengklik tautan

        // Hapus kelas aktif dari semua tautan
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Hapus kelas d-none dari semua div dengan kelas "content"
        contentDivs.forEach(div => {
            div.classList.remove('d-none');
        });

        // Tambahkan kelas aktif ke tautan yang diklik
        link.classList.add('active');

        // Tambahkan kelas d-none ke semua div dengan kelas "content" kecuali yang terkait dengan tautan yang diklik
        contentDivs.forEach(div => {
            if (div.id !== link.id) {
                div.classList.add('d-none');
            }
        });
    });
});

/* ---------------------- */
/* ---- BTN - BUTTON ---- */
/* ---------------------- */

/* ---------------------- */
/* ---- BTN - BUTTON ---- */
/* ---------------------- */
