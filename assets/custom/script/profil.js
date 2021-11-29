
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



function komens(){
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
        open_komen: false,
        open_balasan: false,
        balasan: `<div class="mb-3">
        <div class="p-3 h-auto bg-white flex flex-row">
            <div class="mr-3 flex-shrink-0 text-center">
                <img class="mb-3 h-16 w-16 rounded-full border-2 border-indigo-500"
                    src="./assets/img/profile_me.png" alt="">
            </div>
            <div class="ml-3 flex-grow">
                <div class="font-medium text-base">Karol.Y
                    <div class="inline text-sm text-gray-500">(@Nc)</div>
                </div>
                <small class="text-gray-400 text-xs">Baru saja</small>
                <div class="mt-3 text-sm border-b border-gray-400 border-opacity-75">

                
                </div>
            </div>
        </div>
    </div>`,
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
            },
      
        }
       
       
        // tombol_balasan_komen() {
        //     this.open_komen = false;
        //     this.open_balasan = true;
        //     var pesan = `<div class="mb-3">
        //                     <div class="p-3 h-auto bg-white flex flex-row">
        //                         <div class="mr-3 flex-shrink-0 text-center">
        //                             <img class="mb-3 h-16 w-16 rounded-full border-2 border-indigo-500"
        //                                 src="./assets/img/profile_me.png" alt="">
        //                         </div>
        //                         <div class="ml-3 flex-grow">
        //                             <div class="font-medium text-base">Karol.Y
        //                                 <div class="inline text-sm text-gray-500">(@Nc)</div>
        //                             </div>
        //                             <small class="text-gray-400 text-xs">Baru saja</small>
        //                             <div class="mt-3 text-sm border-b border-gray-400 border-opacity-75">
        //                                 `+this.$refs.teks_balasan_komen.value+`
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>`;
        //     appendHtml(this.$refs.html_balasan, pesan);
        //     this.$refs.teks_balasan_komen.value = '';

        // }
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
