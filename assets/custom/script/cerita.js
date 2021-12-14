
 

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


function potong_komentar(komen) {
    if (komen.split(" ").length > 70) {
        var mk = komen.split(" ").splice(0, 70).join(" ") + ' ....';
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

    // const slider = document.querySelector('.grab-scroll');
    // let isDown = false;
    // let startX;
    // let scrollLeft;
    
    // slider.addEventListener('mousedown', (e) => {
    //   isDown = true;
    //   slider.classList.add('active');
    //   startX = e.pageX - slider.offsetLeft;
    //   scrollLeft = slider.scrollLeft;
    // });
    // slider.addEventListener('mouseleave', () => {
    //   isDown = false;
    //   slider.classList.remove('active');
    // });
    // slider.addEventListener('mouseup', () => {
    //   isDown = false;
    //   slider.classList.remove('active');
    // });
    // slider.addEventListener('mousemove', (e) => {
    //   if(!isDown) return;
    //   e.preventDefault();
    //   const x = e.pageX - slider.offsetLeft;
    //   const walk = (x - startX) * 3; //scroll-fast
    //   slider.scrollLeft = scrollLeft - walk;
    //   console.log(walk);
    // });


 

    window.onload = (event) => {

        document.getElementById("genre-mobile-pertama").style.display = null;
    };

    document.querySelector('.pencet-kategori-mobile-pertama').addEventListener('click', () => {

        document.getElementById("genre-mobile-pertama").style.display = 'none';
    });


});
