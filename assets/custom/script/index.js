
 

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


document.addEventListener('alpine:init', () => {
    Alpine.data('cerita', () => ({
        open: true,
        buku: {
            1: {
                id: 1,
                judul: 'Outcast Desir',
                penulis: 'Karol.Y',
                sampul: './assets/img/cover.png',
                blurb: 'Aegis, militer swasta yang mencegah monster tumbuhan bernama Caltanepent di Jerman utara',
            },
            2: {
                id: 2,
                judul: 'Distant Memory',
                penulis: 'Karol.Y',
                sampul: './assets/img/cover_2.jpg',
                blurb: ' Setelah kehilangan ingatan dan tujuan hidup, Riess dipungut oleh Eldia Amberness, wanita bangsawan pemilik tempat pandai besi terbesar bernama Amberness.',
            },
            3: {
                id: 3,
                judul: 'Distant Memory 2',
                penulis: 'Karol.Y',
                sampul: './assets/img/cover_3.jpg',
                blurb: ' Setelah kehilangan ingatan dan tujuan hidup, Riess dipungut oleh Eldia Amberness, wanita bangsawan pemilik tempat pandai besi terbesar bernama Amberness.',
            },
            4: {
                id: 4,
                judul: 'Distant Journey',
                penulis: 'Karol.Y',
                sampul: './assets/img/cover_4.png',
                blurb: `Eiril adalah salah satu pejuang elf dalam perang. Rasa benci, muak, gelisah
                        akan peperangan membuatnya lari dari garis depan demi menepati janji
                        adiknya--Namesa--untuk tetap hidup.`,
            },
           
        }

    }));
});




function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}




ready(function () {


    var swiper_mobile= new Swiper(".myswiper-mobile", {
        slidesPerView: 3,
        spaceBetween: 147,
        loop: true,
        // freeMode: true,
    
    });
    
    var swiper_penulis = new Swiper(".myswiper-penulis-mobile", {
        slidesPerView: 3,
        loop: true,
        freeMode: true,
    
    });

    window.onload = (event) => {

        document.getElementById("kategori-pertama").style.display = null;

        document.getElementById("pilihan-kategori-pertama").selected = "true";


        document.getElementById("penulis-pertama").style.display = null;
        document.getElementById("pilihan-penulis-pertama").selected = "true";

        document.getElementById("genre-mobile-pertama").style.display = null;

        document.getElementById("apresiator_pertama_mobile").style.display = null;




    };


    document.querySelector('.pencet-kategori-mobile-pertama').addEventListener('click', () => {

        document.getElementById("genre-mobile-pertama").style.display = 'none';
    });



    var tombolBlurb = document.getElementsByClassName('tombol-blurb-pendek');
    Array.prototype.forEach.call(tombolBlurb, function (element) {
        element.addEventListener('click', function () {

            var blurbPendek = element.previousElementSibling;
            var blurbPendekHidden = blurbPendek.previousElementSibling;

            if (blurbPendekHidden.classList.contains('hidden')) {
                blurbPendek.classList.add('hidden');
                blurbPendekHidden.classList.remove('hidden');
                element.innerText = 'Less';
            } else {
                blurbPendek.classList.remove('hidden');
                blurbPendekHidden.classList.add('hidden');
                element.innerText = 'More';
            }


        });
    });








});
