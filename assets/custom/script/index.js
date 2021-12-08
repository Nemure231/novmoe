
 

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

document.addEventListener('alpine:init', () => {
    Alpine.data('penulis', () => ({
        open_penulis_mobile: true,
        open_penulis: true,
        user: {
            1: {
                id: 1,
                nama: 'Angelica',
                username: '@Ange',
                foto: './assets/img/profile.png',
                status: ' Hello, nice to meet you!'
            },
            2: {
                id: 2,
                nama: 'A02',
                username: '@Nine',
                foto: './assets/img/profile_2.png',
                status: 'Enakan baca komik.'

            },
            3: {
                id: 3,
                nama: 'Karol.Y',
                username: '@Nc',
                foto: './assets/img/profile_me.png',
                status: 'Haro haro, terima kasih sudah mampir!',
            },
           
           
           
        }

    }));
});



document.addEventListener('alpine:init', () => {
    Alpine.data('komentar_publik', () => ({
        komen_publik: {
            1: {
                id: 1,
                nama: 'Angelica',
                username: '@Ange',
                foto: './assets/img/profile.png',
                komentar: 'Ini ada lanjutannya lagi gak gan?',
                tanggal: 'hari ini',
                cerita: 'Distant Memory'
            },
            2: {
                id: 2,
                nama: 'A02',
                username: '@Nine',
                foto: './assets/img/profile_2.png',
                komentar: 'Menurutku ending di volume 1 ini agak lemah, banyak masalah yang belum kelar, yang menurutku bisa diberesin di volume ini sih.',
                tanggal: 'kemarin',
                cerita: 'Distant Journey'
            },

        },

        
    }));
});

function potong_komentar(komen){
    if (komen.split(" ").length > 12) {
        var mk = komen.split(" ").splice(0, 12).join(" ") + ' ....';
        return komen = mk;
    } else {
        return komen = komen;

    }
}




function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}




ready(function () {


    var grabScroll = document.getElementsByClassName('grab-scroll');
    Array.prototype.forEach.call(grabScroll, function (element) {

        let isDown = false; 
        let startX;
        let scrollLeft;
        
        element.addEventListener('mousedown', (e) => {
          isDown = true;
          element.classList.add('active');
          startX = e.pageX - element.offsetLeft;
          scrollLeft = element.scrollLeft;
        });
        element.addEventListener('mouseleave', () => {
          isDown = false;
          element.classList.remove('active');
        });
        element.addEventListener('mouseup', () => {
          isDown = false;
          element.classList.remove('active');
        });
        element.addEventListener('mousemove', (e) => {
          if(!isDown) return;
          e.preventDefault();
          const x = e.pageX - element.offsetLeft;
          const walk = (x - startX) * 3; //scroll-fast
          element.scrollLeft = scrollLeft - walk;
          console.log(walk);
        });
    });

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
      });

  

    // var swiper_mobile= new Swiper(".myswiper-mobile", {
    //     slidesPerView: 3,
    //     spaceBetween: 147,
    //     freeMode: true,
    //     loop: true,
        

    // });
   
    
    // var swiper_penulis = new Swiper(".myswiper-penulis-mobile", {
    //     slidesPerView: 3,
    //     loop: true,
    //     freeMode: true,
    
    // });

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



    // var tombolBlurb = document.getElementsByClassName('tombol-blurb-pendek');
    // Array.prototype.forEach.call(tombolBlurb, function (element) {
    //     element.addEventListener('click', function () {

    //         var blurbPendek = element.previousElementSibling;
    //         var blurbPendekHidden = blurbPendek.previousElementSibling;

    //         if (blurbPendekHidden.classList.contains('hidden')) {
    //             blurbPendek.classList.add('hidden');
    //             blurbPendekHidden.classList.remove('hidden');
    //             element.innerText = 'Less';
    //         } else {
    //             blurbPendek.classList.remove('hidden');
    //             blurbPendekHidden.classList.add('hidden');
    //             element.innerText = 'More';
    //         }


    //     });
    // });








});
