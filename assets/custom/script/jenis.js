
 

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
            5: {
                id: 5,
                judul: 'Outcast Desir',
                penulis: 'Karol.Y',
                sampul: './assets/img/cover.png',
                blurb: 'Aegis, militer swasta yang mencegah monster tumbuhan bernama Caltanepent di Jerman utara',
            },
            6: {
                id: 6,
                judul: 'Distant Memory',
                penulis: 'Karol.Y',
                sampul: './assets/img/cover_2.jpg',
                blurb: ' Setelah kehilangan ingatan dan tujuan hidup, Riess dipungut oleh Eldia Amberness, wanita bangsawan pemilik tempat pandai besi terbesar bernama Amberness.',
            },
            7: {
                id: 7,
                judul: 'Distant Memory 2',
                penulis: 'Karol.Y',
                sampul: './assets/img/cover_3.jpg',
                blurb: ' Setelah kehilangan ingatan dan tujuan hidup, Riess dipungut oleh Eldia Amberness, wanita bangsawan pemilik tempat pandai besi terbesar bernama Amberness.',
            },
            8: {
                id: 8,
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

    const slider = document.querySelector('.grab-scroll');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });


    window.onload = (event) => {

        document.getElementById("genre-mobile-pertama").style.display = null;
    };

    document.querySelector('.pencet-kategori-mobile-pertama').addEventListener('click', () => {

        document.getElementById("genre-mobile-pertama").style.display = 'none';
    });


});
