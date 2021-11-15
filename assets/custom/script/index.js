// function blurbPendek() {
//     var blurbPendek = document.getElementsByClassName('blurb-pendek');
//     var num = 7;

//     for (var i = 0; i < blurbPendek.length; i++) {

//         if (blurbPendek[i].innerText.split(" ").length > num) {
//             var mk = blurbPendek[i].innerText.split(" ").splice(0, num).join(" ") + ' ....';
//             blurbPendek[i].innerText = mk;

//         } else {
//             blurbPendek[i].innerText = blurbPendek[i].innerText;
//             blurbPendek[i].nextElementSibling.remove();

//         }

//     }
// }

// blurbPendek();




// Event dropdown profil
const dropdownProfil = document.getElementById('dropdown-profil');
document.addEventListener('alpine:init', () => {
    Alpine.data('profil', () => ({
        open: false,
        pencet_profil() {
            if (dropdownProfil.classList.contains('hidden')) {
                dropdownProfil.classList.remove('hidden');
            }
            this.open = !this.open
        }
    }));
});

// Event dropdown notif
const dropdownNotif = document.getElementById('dropdown-notif');
document.addEventListener('alpine:init', () => {
    Alpine.data('notif', () => ({
        open: false,
        pencet_notif() {
            if (dropdownNotif.classList.contains('hidden')) {
                dropdownNotif.classList.remove('hidden');
            }
            this.open = !this.open
        }
    }));
});

// Event dropdown navbar genre
const dropdownNavbarGenre = document.getElementById('dropdown-navbar-genre');
document.addEventListener('alpine:init', () => {
    Alpine.data('navbar_genre', () => ({
        open: false,
        pencet_navbar_genre() {
            if (dropdownNavbarGenre.classList.contains('hidden')) {
                dropdownNavbarGenre.classList.remove('hidden');
            }
            this.open = !this.open
        }
    }));
});

// Event dropdown navbar genre
const dropdownNavbarKategori = document.getElementById('dropdown-navbar-kategori');
document.addEventListener('alpine:init', () => {
    Alpine.data('navbar_kategori', () => ({
        open: false,
        pencet_navbar_kategori() {
            if (dropdownNavbarKategori.classList.contains('hidden')) {
                dropdownNavbarKategori.classList.remove('hidden');
            }
            this.open = !this.open
        }
    }));
});


// const mySiema = new Siema({
//     perPage: 1,
//     loop: true,
//     startIndex: 0,
// });
// document.querySelector('.prev-carousel').addEventListener('click', () => mySiema.prev());
// document.querySelector('.next-carousel').addEventListener('click', () => mySiema.next());

var swiper = new Swiper(".myswiper", {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


ready(function () {


    window.onload = (event) => {

        document.getElementById("kategori-pertama").style.display = null;
        document.getElementById("pilihan-kategori-pertama").selected = "true";

        document.getElementById("kategori-pertama-mobile").style.display = null;

        document.getElementById("penulis-pertama").style.display = null;
        document.getElementById("pilihan-penulis-pertama").selected = "true";

    
    };

    document.querySelector('.pencet-kategori').addEventListener('change', () => {

        document.getElementById("kategori-pertama").style.display = 'none';

        // const kategoriKedua = document.getElementById("kategori-kedua");
        // const kategoriKetiga = document.getElementById("kategori-ketiga");

        // if (kategoriKedua.classList.contains('hidden')) {
        //     kategoriKedua.classList.remove('hidden');
        // } else {
        //     // kategoriKedua.classList.add('hidden');
        // }

        // if (kategoriKetiga.classList.contains('hidden')) {
        //     kategoriKetiga.classList.remove('hidden');
        // } else {
        //     // kategoriKetiga.classList.add('hidden');
        // }

        const bgDefaultKategori = document.getElementById("bg-default-kategori");
        bgDefaultKategori.classList.add('hidden');




    });

    document.querySelector('.pencet-penulis').addEventListener('change', () => {

        document.getElementById("penulis-pertama").style.display = 'none';

        const penulisKedua = document.getElementById("penulis-kedua");

        if (penulisKedua.classList.contains('hidden')) {
            penulisKedua.classList.remove('hidden');
        } else {
            penulisKedua.classList.add('hidden');
        }

        const bgDefaultPenulis = document.getElementById("bg-default-penulis");
        bgDefaultPenulis.classList.add('hidden');



    });

    var tombolBlurb = document.getElementsByClassName('tombol-blurb-pendek');
    Array.prototype.forEach.call(tombolBlurb, function (element) {
        element.addEventListener('click', function () {

            var blurbPendek = element.previousElementSibling;
            var blurbPendekHidden = blurbPendek.previousElementSibling;

            if (blurbPendekHidden.classList.contains('hidden')) {
                blurbPendek.classList.add('hidden');
                blurbPendekHidden.classList.remove('hidden');
                element.innerText = 'Show less';
            } else {
                blurbPendek.classList.remove('hidden');
                blurbPendekHidden.classList.add('hidden');
                element.innerText = 'Show more';
            }


        });
    });








});
