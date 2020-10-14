

// EVENT BUBLING(gelembung)
    // kita mempunyai event di dalam event, dan kita menjalankan event yang berada di dalam event, maka event yang di luarnya akan berjalan duluan sebelum event yang ingin kita jalankan di jalankan.
    // stopPropagation()
        //adalah sebuah method yang berada di dalam objeck e '(function(e))' //tujuan, untuk menghentikan aksi yang dilakukan oleh sebuah element
        //menghentikan aksi difault dari suatu element (misalnya a aksi difault nya href yang menyebabkan perpindahan)

// const close = document.querySelectorAll('.close');

// close.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();  
//         e.stopPropagation();    //selain event yang saya jalankan, semua event akan di hentikan
//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         alert('ok');
//     });
// });


// JIKA kode kita di edit secara REAL Time(edit HTML langsung di browser),  maka ada problem itu kekurangan kode kira di atas

const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    if( e.target.className == 'close' ) {
        e.target.parentElement.style.display = 'none';
    }
});











