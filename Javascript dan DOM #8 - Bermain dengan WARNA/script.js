


// kasus pertama mengganti warna background color -----------------------------------------------------
const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}

// kasusu ke dua membuat warna rendom ------------------------------------------------------------------
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1 );
    const g = Math.round(Math.random() * 255 + 1 );
    const b = Math.round(Math.random() * 255 + 1 );
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

//------------------------------------------------------------------------------------------------------
const sMerah = document.querySelector('input[name=sMerah]');    //menangkap tanpa id dan class
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
sMerah.addEventListener('input', function(){   //event input berfungsi saat di geser
    //console.log(sMerah.value);    //titik value berfungsi untuk mengambil nilai apapun pada input (combo box, radio button, check box, teks fild, apapun)   


    const r = sMerah.value;     
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';


});

sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});



//
document.body.addEventListener('mousemove', function(event){
    // mencari posisi mouse (sumbu X, Y)
        // event.clientX     
            //kita bisa tau posisi mouse ketika di gerakkan
            //Harus nempel pada sebuah Objeck dan objeck harus di kirim sebagai parameter function
    
    // ukuran browser
        // console.log(window.innerWidth);     
            //untuk mengetahui lebar dari document
        const xPos = Math.round((event.clientX / window.innerWidth) * 255);
        
        const yPos = Math.round((event.clientY / window.innerHeight) * 255);

        document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';


})


















