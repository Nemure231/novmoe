


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
    Alpine.data('list_bab', () => ({
        list: {
            1: {
                id: 1,
                judul: '[0] Caltanepent',
                link: './bab.html',
                status: '1'
            },
            2: {
                id: 2,
                judul: '[1] A02',
                link: './bab.html',
                status: '2',
            },
            3: {
                id: 3,
                judul: '[2] Welrod',
                link: './bab.html',
                status: '2',
            },


        },
    }));
});



document.addEventListener('alpine:init', () => {
    Alpine.data('bab', () => ({

        cerita: {
            judul: '[0] Caltanepent',
            isi: `<p>Hutan ini terletak di sebuah dataran rendah, sangat rimbun, hijau, dan gelap. Suasana lembap
            tersebar melalui embun pagi yang datang setelah hujan turun.</p>

                <p>Akar Caltanepent mendapat sentuhan akar lain, yang memberitahu informasi tentang manusia.

                <p>Dia pun segera mengangkat mulut besarnya yang berada di atas tanah, semua akarnya berpusat pada satu
                tempat untuk membuat tangkainya berdiri.</p>

                <p>Ketika berhasil terangkat, dia meraung dengan suara basah. Sebuah raungan kemarahan yang tidak dapat
                dijelaskan secara vokal.</p>

                <p>Di dalam tanah, akarnya mencoba mencari jalan menuju akar teman terdekat, untuk menyalurkan informasi tentang manusia tersebut. Ketika berhasil menemukan satu, temannya akan menyalurkan lagi informasi itu pada yang lain.</p>

                <p>Perlahan, mulutnya turun, membuka, lalu menutup. Kumpulan taring merah tajamnya berlumuran lendir.
                Sebuah lengkungan yang kaku pada mulutnya terlihat seperti senyuman keji.</p>

                <p>Perasaan yang aneh antara marah dan gembira saat menemukan manusia, terasa menyenangkan.</p>

                <p>“Pergi?”</p>

                <p>Akarnya tidak sengaja menyentuh akar lain, sepertinya berasal dari salah satu pohon di sekitar sini
                yang mencoba berkomunikasi dengannya.</p>

                <p>“Ya.”</p>

                <p>Mereka sebenarnya tidak benar-benar bicara, atau mungkin hal semacam ini hanyalah delusi Caltanepent
                sebagai tumbuhan aneh di muka bumi.</p>

                <p>“Untuk?”</p>

                <p>Pohon terdengar sangat penasaran, dia kembali bertanya.</p>

                <p>“Manusia.”</p>

                <p>Jawaban itu memberi jeda yang lama bagi pohon untuk menjawab.</p>

                <p>“Kenapa?”</p>

                <p>“Manusia. Dosa. Kikir. Sombong. Serakah. Kotor.”</p>

                <p>Sekali lagi, Caltanepent mengungkapkan pendapat bijaknya pada pohon.</p>

                <p>Selain itu, tanpa manusia bumi akan tetap seimbang. pohon tidak membutuhkan manusia, hewan pun
                demikian, begitu juga yang lainnya. Lantas, untuk apa makhluk itu hidup?
                Tidak ada tanggapan dari pohon, maka Caltanepent menunggu dengan sabar.</p>

                <p>“Tidak. Semua.”</p>

                <p>Jawaban itu membuat Caltanepent terkejut. Dia menengadah, lalu meraung sekuat tenaga pada setiap
                pohon di sini. Dia memajukan mulut, memperlihatkan taringnya sebagai tanda penolakan pendapat.
                Dia tidak tahu pohon mana yang berani menentang pendapatnya.</p>

                <p>“Alasan?”</p>

                <p>Jika dipikir kembali, Caltanepent tidak berpengaruh banyak pada keseimbangan alam. Bukankah mereka
                juga sama seperti manusia? Tidak dibutuhkan di dunia ini.</p>

                <p>Caltanepent berusaha keras untuk menjawab pertanyaan itu, tetapi dia memutuskan untuk menyerah
                ketika tidak ada alasan yang logis.</p>

                <p>“Perintah. Pencipta.”</p>

                <p>Dia sempat ragu, karena kata pencipta tiba-tiba ada dalam pikirannya. Padahal, dia sama sekali tidak
                ingat pernah diciptakan oleh siapa.</p>

                <p>“Pencipta. Yang. Mana?”</p>

                <p>Pohon kembali bertanya, maka Caltanepent mulai meragukan alasannya untuk diciptakan. Diciptakan
                untuk membunuh manusia terdengar seperti pekerjaan besar di akhir dunia.</p>

                <p>Jika memang tugasnya adalah mengakhiri peradaban manusia, lantas mengapa dia tidak diberikan
                kekuatan yang lebih besar? Dengan begitu, pekerjaannya akan lebih mudah.</p>

                <p>“Pencipta. Yang. Mana?”</p>

                <p>Pohon kembali mendesak dengan pertanyaan yang sama, hal itu makin membuat Caltanepent tidak suka
                dengan makhluk yang bicara seolah-olah paling tahu segalanya.</p>

                <p>Dia tidak perlu berurusan dengan pohon lebih jauh dalam perdebatan tidak berguna, dia hanya harus
                menunjukan kepada semua makhluk bahwa anggapannya benar.</p>

                <p>“Manusia. Butuh. Kami.”</p>

                <p>Pohon mengucapkan itu untuk dirinya sendiri.</p>

                <p>Caltanepent menganga. “Takdir. Yang. Aneh.”</p>

                <p>Caltanepent bergerak ke aliran sungai, dia mengisi mulutnya dengan air sampai penuh.</p>

                <p>Bunyi akar-akar terdengar semakin dekat. Ratusan Caltanepent yang terpanggil telah berkumpul di satu
                titik lokasi.</p>
                <p>Mereka bergerak perlahan, dari kegelapan hutan, untuk sebuah perintah yang tidak jelas asalnya.</p>`,
            catatan: `<p>Halo,</p>
                <p>Terima kasi sudah membaca bab 1</p>
                <p>Rilisnya cepet kok</p>
                <p>Pengaruh juga kalo dikasih like dan komen hehe</p>`
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
                        <img class="mb-3 lg:h-14 lg:w-14 md:w-14 md:h-14 sm:w-11 sm:h-11 w-11 h-11 rounded-full border-2 border-indigo-500"
                            src="./assets/img/profile_me.png" alt="">
                    </div>
                    <div class="ml-3 flex-grow">
                        <div class="font-medium text-base inline dark:text-white"> Karol.Y

                        </div>
                        <div class="inline text-sm text-gray-500 dark:text-gray-400">(@Nc)</div>
                        <small class="text-gray-400 dark:text-gray-300 text-xs block">Baru saja</small>
                        <div class="w-auto mt-3 border-b border-gray-400 border-opacity-75  dark:border-gray-500">
                            <p class="break-all text-sm dark:text-white">
                            `+ document.getElementById('balas_' + this.id).value + `
                            </p>
                        </div>
                    </div>
                </div>`;
            appendHtml(document.getElementById(this.open_balas), pesan);
            this.open_balas = false;
            document.getElementById('balas_' + this.id).value = '';
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

 

dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}






    window.onload = (event) => {

        document.getElementById("genre-mobile-pertama").style.display = null;
    };

    document.querySelector('.pencet-kategori-mobile-pertama').addEventListener('click', () => {

        document.getElementById("genre-mobile-pertama").style.display = 'none';
    });


});
