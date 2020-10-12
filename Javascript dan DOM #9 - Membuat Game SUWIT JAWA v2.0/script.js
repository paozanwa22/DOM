function getPilihanKomputer() {
    const comp = Math.random();
    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return'semut';
}

function getHasil(comp, player){
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

function putar() {
    const imgKomputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();    //untuk mendapatkan waktu saat di mainkan
    setInterval(function() {    //setInterval() adalah fungsi untuk melakukan sesuatu secara berulang-ulang selama interpal waktu tertentu
        if( new Date().getTime() - waktuMulai > 1000 ) {
            clearInterval;
            return;
        }
        imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if( i == gambar.length ) i = 0;
    }, 100);    //100 disini artinya 0,1 detik  //ini adalah waktu interval yang kita tentukan
}

const pilihans = document.querySelectorAll('li img');
pilihans.forEach(function(pilihan){
    pilihan.addEventListener('click', function(){
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = pilihan.className;
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);

        putar();

        setTimeout(function() {
            const imgKomputer = document.querySelector('.img-komputer');
            imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);   //1000 artinya 1 detik
    });
});


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });