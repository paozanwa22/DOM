// DOM Manipulation Note
    // document.createElement()     //  Memebuat Tag HTML Baru
    // document.createTextNode()    //  Mengisikan Tag HTML yang baru di buat
    // node.appendChild()           //  Simpan ke akhir di dalam parent
    // node.insertBefore()          //  Simpan sebelum (parameter pertama = yang akan di simpan, parameter ke dua = posisi di simpan sebelum apa);
    // parentNode.removeChild()
    // parentNode.replaceChild()
    // ...





// Case (study kasus)
// Bagaimana cara menambahkan paragraf pada body ?
    // buat element baru
    const pBaru = document.createElement('p');
    const teksPBaru = document.createTextNode('Paragraf Baru');

    // simpan tulisan ke dalam paragraf
    pBaru.appendChild(teksPBaru);

    // simpan pBaru di akhir Section A
    const sectionA = document.getElementById('a');
    sectionA.appendChild(pBaru);


// mengatur tempat menyimpan pBaru di Section B
    const liBaru = document.createElement('li'); // membuat tag HTML 
    const teksLiBaru = document.createTextNode('item baru');    // membuat tulisan yang akan di gunakan
    
    liBaru.appendChild(teksLiBaru);         //  Memasukkan teks ke tag HTML
    
    const ul = document.querySelector('section#b ul');        // cari tempat
    const li2 = ul.querySelector('li:nth-child(2)');            //  Menentukan tempat menyimpan Tag li

    ul.insertBefore(liBaru, li2);       //  Memasukkan liBaru Sebelum li2




// parentNode.removeChild()
const sectionIdA = document.getElementById('a');    //ambil parent tempat yang kita targer
const link = document.getElementsByTagName('a')[0];     //yang akan di hapus

sectionIdA.removeChild(link);       //  Hapus Link yang berada di sectionIdA 



// parentNode.replaceChild()        //  Mengganti p4 menjadi h2
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(textH2Baru);

sectionB.replaceChild(h2Baru, p4);


