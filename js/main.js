/* ---------------------- */
/* ---- NAVBAR - NAV ---- */
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

/* ---------------------- */
/* ----/NAVBAR - NAV ---- */
/* ---------------------- */



/* ---------------------- */
/* ------- CONTENT ------ */
/* ---------------------- */

/* ---------------------- */
/* ------- LOADING ------ */
/* ---------------------- */
window.onload = changeText;
window.onresize = changeText;

window.addEventListener("load", function() {
    var spinner = document.querySelector(".loading-spinner");
    spinner.style.display = "none";
});


/* ---------------------- */
/* ------ NEW TAB ------- */
/* ---------------------- */
function openNewTab(event) {
    event.preventDefault(); // Mencegah tautan default
    
    const url = event.target.href;
    window.open(url, '_blank');
}
/* ---------------------- */
/* ------ /NEW TAB ------ */
/* ---------------------- */

// Function to Open Portofolio
function openPortoRAY() {
    var url         = 'https://www.github.com/andriraymond';
    window.open(url);
}

// FUNCTION TO openEmailRAY
function openLocationRAY() {
    var url         = 'https://goo.gl/maps/NRUZkaTCuAt3rZEg7';
    window.open(url);
}

function openEmailRAY() {
var emailAddress    = 'andriraymondo@gmail.com';
    var subject     = 'Email from Portofolio';
    var body        = 'Halo Perkenalkan saya adalah .... Saya melihat Portofolio Anda';

    var mailtoLink  =  'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink;
}

//  Function to openWhatsAppRAY
function openWhatsAppRAY() {
    var phoneNumber = '+62 813-7569-6792'
    // var phoneNumber = '+62 851-7445-2288'
    var message     = 'Halo... saya ingin menghubungi Anda'   

    var url         = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
    window.open(url);
}

// Function to Check Form - Contact Form
function onFormSubmit(e) {
    e.preventDefault()
    const name      = $("#name")
    const email     = $("#email")
    const phone     = $("#phone")
    const company   = $("#company")
    const message   = $("#message")

    // INPUTAN UNTUK - NAMA
    const InpName = document.getElementById('name');
    
    // INPUTAN UNTUK - EMAIL
    const InpEmail = document.getElementById('email');

    // INPUTAN UNTUK - PHONE
    const InpPhone  = document.getElementById('phone');

    // INPUTAN UNTUK - FIELD COMPANY
    const InpComp  = document.getElementById('company');

    // INPUTAN UNTUK - FIELD MESSAGE
    const InpMessage = document.getElementById('message');

    // console.log(name.val()) // console.log(email.val()) // console.log(phone.val()) // console.log(company.val()) // console.log(message.val())s
    
    // FUNCTIONS UNTUK PENGECEKAN FIELD INPUTAN - NAMA
    if(name.val().length > 2 && name.val().trim() !== ""){
        console.log("Nama Valid");
        // Menampilkan Hijau ke field Inputan
        InpName.style.border = "2px solid #64C348";
    }
    else if(name.val() == ""){
        console.log("Nama Tidak Valid")
        // Menampilkan Merah ke field Inputan
        InpName.style.border = "2px solid red";
        // InpName.replaceChild("Input", "Input");
    }
    else {
        console.log("Nama Harus Lebih dari 3 character");
        InpName.style.border = "2px solid red";
    }

    // FUNCTIONS UNTUK PENGECEKAN FIELD INPUTAN - NAMA
    if(email.val().includes("@") && email.val().includes('.com') || email.val().includes('.net') || email.val().includes('.co.id')){
        console.log("Email Vakud");
        InpEmail.style.border = "2px solid #64C348";
    }
    else {
        console.log("Email Tidak Valid");
        InpEmail.style.border = "2px solid red";
    }

    // FUNCTIONS UNTUK PENGECEKAN FIELD INPUTAN - PHONE
    if(phone.val().length < 7 || phone.val().length > 14){
        console.log("Nomor Valid")
        InpPhone.style.border = "2px solid red";
    }else {
        console.log("Inputan Nomor telah  sesuai")
        InpPhone.style.border = "2px solid #64C348";
    }

    // FUNCTIONS UNTUK PENGECEKAN FIELD INPUTAN - COMPANY
    if(company.val().trim() == "" || company.val().length <= 3){
        console.log("Company tidak Valid")
        InpComp.style.border = "2px solid red";
    }else {
        console.log("Company Valid")
        InpComp.style.border = "2px solid #64C348";
    }

    // FUNCTIONS UNTUK PENGECEKAN FIELD INPUTAN - MESSAGE
    if(message.val().trim() == "" || message.val().length <= 3){
        console.log("Mesage tidak boleh kosong")
        InpMessage.style.border = "2px solid red";
    }else {
        console.log("Message Valid")
        InpMessage.style.border = "2px solid #64C348";
    }
}

// Trigger Submit Button
$("#send_message").click(onFormSubmit)

// FUNCTION SEND EMAILS

// function SendEmailRAY() {
//     var emailAddress     = 'andriraymondo@gmail.com';
//     var subject          = 'Email from Portofolio';
//     var body             = 

//     var mailtoLink       =  'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
//     window.location.href = mailtoLink;
// }

// $("#contact-form").click(onFormSubmit)

/* ---------------------- */
/* ------ /CONTENT ------ */
/* ---------------------- */


/* ---------------------- */
/* ---- BTN - BUTTON ---- */
/* ---------------------- */

/* ---------------------- */
/* ---- /BTN - BUTTON ---- */
/* ---------------------- */
