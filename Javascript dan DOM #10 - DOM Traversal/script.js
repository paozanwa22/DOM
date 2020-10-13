// const card = document.querySelector('.card');   //querySelector = hanya mengambil element pertama yang ditemukan
// const close = document.querySelector('.close');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });

// DOM Traversal
const close = document.querySelectorAll('.close'); //mengambil semua card

// for( let i = 0; i < close.length; i++ ) {
//     close[i].addEventListener('click', function(e) {
//         // close[i].parentElement.style.display = 'none';
//         // console.log(e); //berisi semua yang terjadi saat even click berjalan
//         // console.log(e.target);   //.target berada di dalam e Silahkan lihat menggunakan console.log(e);
//         e.target.parentElement.style.display = 'none';   //parentElement adalah yang dinamakan DOM Traversal
//     });
// }


close.forEach(function(el) {   //pada setiap element close kita akan menjalankan sebuah function
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    });
})








