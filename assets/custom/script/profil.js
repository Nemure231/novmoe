
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
           
        }

    }));
});




function komens() {
    return {
        open_komen: false,
        open_balasan: false,
        komen: {
            1: {
                id: 1,
                nama: 'Angelica',
                username: '@Ange',
                foto: './assets/img/profile.png',
                komentar: 'Haloooooooooooo',
                tanggal: 'kemarin',
                open_komen: 'balas_komen_1'
            },
            2: {
                id: 2,
                nama: 'A02',
                username: '@Nine',
                foto: './assets/img/profile_2.png',
                komentar: 'Hiiiiiiiiiiiiiiiii',
                tanggal: 'Hari ini',
                open_komen: 'balas_komen_2'
            }
        }
    }
}

function appendHtml(el, str) {
    var div = document.createElement('div'); //container to append to
    div.innerHTML = str;
    while (div.children.length > 0) {
        el.appendChild(div.children[0]);
    }
}

document.addEventListener('alpine:init', () => {
    Alpine.data('komen', () => ({
        open_balas: false,
        // id: $id('teks_balas'),
        komen: {
            1: {
                id: 1,
                nama: 'Angelica',
                username: '@Ange',
                foto: './assets/img/profile.png',
                komentar: 'Halo!',
                tanggal: 'kemarin',
                balas_komen: 'balas_komen_1'
            },
            2: {
                id: 2,
                nama: 'A02',
                username: '@Nine',
                foto: './assets/img/profile_2.png',
                komentar: 'If i eat my own hand does it turn me into cannibal?',
                tanggal: 'Hari ini',
                balas_komen: 'balas_komen_2'
            },

        },

        tekan() {
            //Tag <p> di sini perlu break all, karena setiap diappend pasti teksnya keluar dari layar
            var pesan = `
                <div class="mb-3 w-auto h-auto dark:bg-gray-800 flex flex-row">
                    <div class="flex-shrink-0 text-center">
                        <img class="mb-3 lg:h-16 lg:w-16 md:w-16 md:h-16 sm:w-12 sm:h-12 w-12 h-12 rounded-full border-2 border-indigo-500"
                            src="./assets/img/profile_me.png" alt="">
                    </div>
                    <div class="ml-3 flex-grow">
                        <div class="font-medium text-base inline dark:text-white"> Karol.Y

                        </div>
                        <div class="inline text-sm text-gray-500 dark:text-gray-400">(@Nc)</div>
                        <small class="text-gray-400 dark:text-gray-300 text-xs block">Baru saja</small>
                        <div class="w-auto mt-3 border-b border-gray-400 border-opacity-75  dark:border-gray-500">
                            <p class="break-all text-sm dark:text-white">
                            `+ document.getElementById('balas_'+this.id).value + `
                            </p>
                        </div>
                    </div>
                </div>`;
            appendHtml(document.getElementById(this.open_balas), pesan);
            this.open_balas = false;
            document.getElementById('balas_'+this.id).value = '';
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




    window.onload = (event) => {

        document.getElementById("genre-mobile-pertama").style.display = null;
    };

    document.querySelector('.pencet-kategori-mobile-pertama').addEventListener('click', () => {

        document.getElementById("genre-mobile-pertama").style.display = 'none';
    });



});
