
 

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
    Alpine.data('bab', () => ({

        cerita:{
            judul: '[0] Caltanepent',
            isi: `Hutan ini terletak di sebuah dataran rendah, sangat rimbun, hijau, dan gelap. Suasana lembap
            tersebar melalui embun pagi yang datang setelah hujan turun.

            Akar Caltanepent mendapat sentuhan akar lain, yang memberitahu informasi tentang manusia.

            Dia pun segera mengangkat mulut besarnya yang berada di atas tanah, semua akarnya berpusat pada satu
            tempat untuk membuat tangkainya berdiri.

            Ketika berhasil terangkat, dia meraung dengan suara basah. Sebuah raungan kemarahan yang tidak dapat
            dijelaskan secara vokal.

            Di dalam tanah, akarnya mencoba mencari jalan menuju akar teman terdekat, untuk menyalurkan
            informasi tentang manusia tersebut. Ketika berhasil menemukan satu, temannya akan menyalurkan lagi
            informasi itu pada yang lain.

            Perlahan, mulutnya turun, membuka, lalu menutup. Kumpulan taring merah tajamnya berlumuran lendir.
            Sebuah lengkungan yang kaku pada mulutnya terlihat seperti senyuman keji.

            Perasaan yang aneh antara marah dan gembira saat menemukan manusia, terasa menyenangkan.

            “Pergi?”

            Akarnya tidak sengaja menyentuh akar lain, sepertinya berasal dari salah satu pohon di sekitar sini
            yang mencoba berkomunikasi dengannya.

            “Ya.”

            Mereka sebenarnya tidak benar-benar bicara, atau mungkin hal semacam ini hanyalah delusi Caltanepent
            sebagai tumbuhan aneh di muka bumi.

            “Untuk?”

            Pohon terdengar sangat penasaran, dia kembali bertanya.

            “Manusia.”

            Jawaban itu memberi jeda yang lama bagi pohon untuk menjawab.

            “Kenapa?”

            “Manusia. Dosa. Kikir. Sombong. Serakah. Kotor.”

            Sekali lagi, Caltanepent mengungkapkan pendapat bijaknya pada pohon.

            Selain itu, tanpa manusia bumi akan tetap seimbang. pohon tidak membutuhkan manusia, hewan pun
            demikian, begitu juga yang lainnya. Lantas, untuk apa makhluk itu hidup?
            Tidak ada tanggapan dari pohon, maka Caltanepent menunggu dengan sabar.

            “Tidak. Semua.”

            Jawaban itu membuat Caltanepent terkejut. Dia menengadah, lalu meraung sekuat tenaga pada setiap
            pohon di sini. Dia memajukan mulut, memperlihatkan taringnya sebagai tanda penolakan pendapat.
            Dia tidak tahu pohon mana yang berani menentang pendapatnya.

            “Alasan?”

            Jika dipikir kembali, Caltanepent tidak berpengaruh banyak pada keseimbangan alam. Bukankah mereka
            juga sama seperti manusia? Tidak dibutuhkan di dunia ini.

            Caltanepent berusaha keras untuk menjawab pertanyaan itu, tetapi dia memutuskan untuk menyerah
            ketika tidak ada alasan yang logis.

            “Perintah. Pencipta.”

            Dia sempat ragu, karena kata pencipta tiba-tiba ada dalam pikirannya. Padahal, dia sama sekali tidak
            ingat pernah diciptakan oleh siapa.

            “Pencipta. Yang. Mana?”

            Pohon kembali bertanya, maka Caltanepent mulai meragukan alasannya untuk diciptakan. Diciptakan
            untuk membunuh manusia terdengar seperti pekerjaan besar di akhir dunia.

            Jika memang tugasnya adalah mengakhiri peradaban manusia, lantas mengapa dia tidak diberikan
            kekuatan yang lebih besar? Dengan begitu, pekerjaannya akan lebih mudah.

            “Pencipta. Yang. Mana?”

            Pohon kembali mendesak dengan pertanyaan yang sama, hal itu makin membuat Caltanepent tidak suka
            dengan makhluk yang bicara seolah-olah paling tahu segalanya.

            Dia tidak perlu berurusan dengan pohon lebih jauh dalam perdebatan tidak berguna, dia hanya harus
            menunjukan kepada semua makhluk bahwa anggapannya benar.

            “Manusia. Butuh. Kami.”

            Pohon mengucapkan itu untuk dirinya sendiri.

            Caltanepent menganga. “Takdir. Yang. Aneh.”

            Caltanepent bergerak ke aliran sungai, dia mengisi mulutnya dengan air sampai penuh.

            Bunyi akar-akar terdengar semakin dekat. Ratusan Caltanepent yang terpanggil telah berkumpul di satu
            titik lokasi.
            
            Mereka bergerak perlahan, dari kegelapan hutan, untuk sebuah perintah yang tidak jelas asalnya.`
        }
     


    }));
});


function appendHtml(el, str) {
    var div = document.createElement('div'); //container to append to
    div.innerHTML = str;
    while (div.children.length > 0) {
        el.appendChild(div.children[0]);
    }
}

document.addEventListener('alpine:init', () => {
    Alpine.data('komen', () => ({
        open_komen: true,
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
                        <img class="mb-3 lg:h-10 lg:w-10 md:w-10 md:h-10 w-9 h-9 rounded-full border-2 border-indigo-500"
                            src="./assets/img/profile_me.png" alt="">
                    </div>
                    <div class="ml-3 flex-grow">
                        <div class="font-medium text-base inline dark:text-white"> Karol.Y

                        </div>
                        <div class="inline text-xs text-gray-500 dark:text-gray-400">(@Nc)</div>
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
