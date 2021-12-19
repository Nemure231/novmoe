


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
        cerita: {
            id: 1,
            sampul: './assets/img/cover.png',
            judul: ' Outcast Desire',
            penulis: 'Karol.Y',
            genre: 'Sci-Fi',
            status: 'Tamat',
            rating: '15+',
            jumlah_arc: '2',
            jumlah_bab: '3',
            tags: {
                1: {
                    id: 1,
                    nama: 'Petualangan',
                    
                },
                2: {
                    id: 2,
                    nama: 'Senjata Api',
                   
                },
                3: {
                    id: 3,
                    nama: 'Paramiliter',
                   
                },
                4: {
                    id: 4,
                    nama: 'Kekerasan',
                   
                },
                5: {
                    id: 5,
                    nama: 'Pasca Apokaliptik',
                   
                }
            }

        },


    }));
});

document.addEventListener('alpine:init', () => {
    Alpine.data('usulan', () => ({
        komentar: {
            1: {
                id: 1,
                nama: 'Angelica',
                username: '@Ange',
                foto: './assets/img/profile.png',
                komentar: 'Ini ada lanjutannya lagi gak gan?',
                tanggal: 'hari ini',
                reaksi: 'fas fa-thumbs-up text-green-400'
            },
            2: {
                id: 2,
                nama: 'A02',
                username: '@Nine',
                foto: './assets/img/profile_2.png',
                komentar: 'Menurutku ending di volume 1 ini agak lemah, banyak masalah yang belum kelar, yang menurutku bisa diberesin di volume ini sih.',
                tanggal: 'kemarin',
                reaksi: 'fas fa-thumbs-down text-red-400'
            },

        },


    }));
});



function potong_komentar(komen) {
    if (komen.split(" ").length > 50) {
        var mk = komen.split(" ").splice(0, 50).join(" ") + ' ....';
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
        if (!isDown) return;
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
