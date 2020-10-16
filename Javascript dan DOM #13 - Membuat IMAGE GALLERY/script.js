const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {

    // cek apakah yang diclick adalah thumb
    if( e.target.className == 'thumb' ) {
        jumbo.src = e.target.src; //mengganti isi jumbo
        jumbo.classList.add('fade');    //menambahkan class fade
        
        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(thumb) {
            // if( thumb.classList.contains('active') ) {
            //     thumb.classList.remove('active');
            // }

            thumb.className = 'thumb';
        });

        e.target.classList.add('active');
    }
});