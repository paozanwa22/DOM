// Ada dua cara Menjalankan / Mendengarkan even pada DOM
    // Event Handler       //cara panggil       // on<event>        tulis on dan even nya apa
        // inline HTML attribute        //  Menuliskan langsung di dalam HTML
        // Element method               //  Menggunakan function
    // addEventListener()           // Lebih baru dari Event Handler


// Element method
    // kasus
        // Jika .p2 pada HTML di tekan, rubah backgroundColor
    // onclick
// function ubahWarna() {
//     p2.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarna;



// kasus
    // Jika p4 di tekan, tambhakan element baru
    // addEventListener()
    // const p4 = document.querySelector('section#b p');
    // p4.addEventListener('click', function() {
        // const ul = document.querySelector('section#b ul');  //Ambil parent
        // const liBaru = document.createElement('li');    //buat li baru
        // const teksLiBaru = document.createTextNode('item Baru');    //buat text yang akan di masukkan
        // liBaru.appendChild(teksLiBaru);     //masukkan teks
        // ul.appendChild(liBaru);     //masukkan li baru ke ul
    // });


// PERBEDAAN Event Handler dengan addEventListener()
    // ini akan meghasikan p3 pertama akan ditimpa p3 yang ke dua
    // const p3 = document.querySelector('.p3');
    // p3.onclick = function() {
    //     p3.style.backgroundColor = 'lightblue';
    // }
    // p3.onclick = function() {
    //     p3.style.color = 'red';
    // }

    // ini akan meghasikan p3 kedua tidak menimpa p3 pertama
    // const p3 = document.querySelector('.p3');
    // p3.addEventListener('click', function(){
    //     p3.style.backgroundColor = 'lightblue';
    // });
    // p3.addEventListener('click', function(){
    //     p3.style.color = 'red';
    // });


// Daftar Event     // https://developer.mozilla.org/en-US/docs/Web/Events
    // Mouse Event      // saat mouse di click, di geser, double click, dll
    // Keyboard Event      // ketika keybord di tekan di lepas dan sebagainya
    // Resources Event      // ketika halaman di load (jadi kita tau koneksinya sedang lambat atau tidak)
    // Focus Event      // ini penting ketika kita bikin form (ketika sebuah teks fill atau inputan itu di click)
    // View Event
    // Form Event
    // CSS Animation & Transition Event
    // Drag & Drop Event
    // dll.

        // Mouse Event
            // click
            // dblclick
            // mouseover
            // mouseenter
            // mouserup
            // wheel
            // ...

        // keyboard Event
            // keydown
            // keypress
            // keyup

        // View Event
            // resize
            // scroll
        
        // Form Event
            // reset
            // submit













