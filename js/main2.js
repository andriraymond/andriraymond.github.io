// function toggleDetail(e) {
//   const target = $(e.target)

//   if($(target).hasClass("active")) {
//     $(target).html("More Info").removeClass("active")
//   }else {
//     $(target).html("Less Info").addClass("active")
//   }
  
//   const item = $(target).parents(".about-exp-item")
//   const detail = $(item).children(".about-exp-item-detail")
//   $(detail).slideToggle()
// }

// function hiddenClass(el) {
//   comst target = $(el.target)

//   if($target.hasClass("d-none")) {
//     $(target).html("menu-section").removeClass(("d-none"))
//   }else {    
//     $(target).html("menu-section").addClass(("d-none"))
//   }
//   const item2 = $(target).parents(".ray-section")
//   const detail = $(item2).children(".menu-section")
// }

// $("body").on("click", "nav-item", function(){
//   let item = ['#home', '#about','#portofolio', '#contact']
//   let id = $(this).attr("id");
//   let idSplitRight = id.idSplit("-")[1];
//   arr.forEach(element => {
//     $("#" + i).addClass("d-none");
//   });
//   if(arr.includes(idSplitRight)){
//     $("#" + idSplitRight).removeClass("d-none");
//   }
// })

// function toggleNavbar(navbarId) {
//   // Mendapatkan elemen navbar yang diklik
//   var clickedNavbar = document.getElementById(navbarId);

//   // Mendapatkan semua elemen navbar
//   var allNavbars = document.getElementsByClassName('nav-link');

//   // Menghapus kelas 'd-none' dari navbar yang diklik
//   clickedNavbar.classList.remove('d-none');

//   // Menambahkan kelas 'd-none' pada navbar lainnya
//   for (var i = 0; i < allNavbars.length; i++) {
//     if (allNavbars[i].id !== navbarId) {
//       allNavbars[i].classList.add('d-none');
//     }
//   }
// }

// function toggleNavbar(navbarId) {
//   // Mendapatkan elemen navbar yang diklik
//   var clickedNavbar = document.getElementById(navbarId);

//   // Mendapatkan semua elemen navbar
//   var allNavbars = document.getElementsByClassName('nav-link');

//   // Menghapus kelas 'd-none' dari navbar yang diklik
//   clickedNavbar.classList.remove('d-none');

//   // Menambahkan kelas 'd-none' pada navbar lainnya
//   for (var i = 0; i < allNavbars.length; i++) {
//     if (allNavbars[i].id !== navbarId) {
//       allNavbars[i].classList.add('d-none');
//     }
//   }
// }

// // Mendapatkan semua elemen <a> dalam navbar
// var navbarLinks = document.querySelectorAll('.navbar a');

// // Menambahkan event listener pada setiap elemen <a>
// navbarLinks.forEach(function(navbarLink) {
//   navbarLink.addEventListener('click', function(event) {
//     // Mencegah tindakan default dari elemen <a> (mengikuti tautan)
//     event.preventDefault();

//     // Mendapatkan ID navbar yang terkait dengan elemen <a> yang diklik
//     var navbarId = navbarLink.getAttribute('href').substring(1);

//     // Memanggil fungsi toggleNavbar dengan ID navbar yang diklik
//     toggleNavbar(navbarId);
//   });
// });


// Active Navbar
// function toggleActive(event, activeId) {
//   // Mencegah tindakan default dari event klik pada elemen navbar
//   event.preventDefault();

//   // Mendapatkan semua elemen navbar
//   var allNavLinks = document.querySelectorAll('.nav-item');
//   var allSections = document.querySelectorAll('.menu-section');

//   // Menambahkan kelas 'active' pada elemen navbar yang diklik
//   var clickedNavLink = document.querySelector('#' + activeId);
//   clickedNavLink.classList.add('active');
  
//   // allSections = classList.remove('d-none');
//   // Menambah kelas

//   // Menghapus kelas 'active' pada elemen navbar lainnya
//   for (var i = 0; i < allNavLinks.length; i++) {
//     if (allNavLinks[i].id !== activeId) {
//       allNavLinks[i].classList.remove('active');
//     }
//   }

//   for (var i = 0; i < allSections.length; i++) {
//     if (allSections[i].id !== activeId) {
//       allSections[i].classList.remove('d-none');
//     }
//   }
// }


// Ambil semua elemen a dalam navbar
// const navLinks = document.querySelectorAll('nav li');
// // Ambil semua elemen section
// // const sections = document.querySelectorAll('.menu-section');

// // Ambil semua elemen div dengan kelas "content"
// const contentDivs = document.querySelectorAll('.menu-section');

// // Tambahkan event listener pada setiap elemen a
// navLinks.forEach(link => {
//     link.addEventListener('click', function (event) {
//         event.preventDefault(); // Mencegah tindakan default saat mengklik tautan

//         // Hapus kelas aktif dari semua tautan
//         navLinks.forEach(link => {
//             link.classList.remove('active');
//         });

//         // Hapus kelas d-none dari semua section
//         // sections.forEach(section => {
//         //     section.classList.remove('d-none');
//         // });

//         // Hapus kelas d-none dari semua div dengan kelas menu-section
//         contentDivs.forEach(div => {
//           div.classList.remove('d-none');
//         })

//         // Tambahkan kelas aktif ke tautan yang diklik
//         link.classList.add('active');

//         // Tambahkan kelas d-none ke semua section kecuali yang terkait dengan tautan yang diklik
//         // sections.forEach(section => {
//         //     if (section.id !== link.id) {
//         //         section.classList.add('d-none');
//         //     }
//         // });
        
//         // Tambahkan kelas d-none ke semua div dengan kelas "content" kecuali yang terkait dengan tautan yang diklik
//         contentDivs.forEach(div => {
//           if (div.id !== link.id) {
//             div.classList.add('d-none');
//         }
//       });
//     })
// });


//
// Ambil semua elemen a dalam navbar
// Biasanya diambil itu li bukan ul namun karena inputan  di bagian Contact menggunakan li sehingga jadi d-none kalau di klik oleh sebab itu saya menggunkan ul
const navLinks = document.querySelectorAll('div ul .nav-item');
// Ambil semua elemen div dengan kelas "content"
const contentDivs = document.querySelectorAll('div .menu-section');

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

// Function New Tab
function openNewTab(event) {
    event.preventDefault(); // Mencegah tautan default
    
    const url = event.target.href;
    window.open(url, '_blank');
  }

// Loading
window.addEventListener("load", function() {
    var spinner = document.querySelector(".loading-spinner");
    spinner.style.display = "none";
  });

//   Function to openEmailRAY 
function openEmailRAY() {
    var emailAddress     = 'andriraymondo@gmail.com';
    var subject          = 'Email from Portofolio';
    var body             = 'Halo Perkenalkan saya adalah .... Saya melihat Portofolio Anda';

    var mailtoLink       =  'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink;

}

//  Function to openWhatsAppRAY
function openWhatsAppRAY() {
    var phoneNumber = '+62 813-7727-8968'
    var message     = 'Halo... saya ingin menghubungi Anda'   

    var url = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
    window.open(url);

}


// Function to Check Form - Contact FOrm
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
        InpName.replaceChild("Input", "Input");
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
    }

    // FUNCTIONS UNTUK PENGECEKAN FIELD INPUTAN - MESSAGE
    if(message.val().trim() == "" || message.val().length <= 3){
        console.log("Mesage tidak boleh kosong")
        InpMessage.style.border = "2px solid red";
    }

}

// Trigger Submit Button
$("#send_message").click(onFormSubmit)

// $("#contact-form").click(onFormSubmit)

function showPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  function hidePopup() {
    document.getElementById("popup").style.display = "none";
  }
  