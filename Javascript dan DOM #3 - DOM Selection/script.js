//  DOM Selection
//  document.getElementById()
//  document.getElementsByTagName()
//  getElementsByClassName()

//  querySelector()     ->  element
//  querySelectorAll()  ->  NoteList

// document.getElementById()    ->      mengembalikan element
const judul = document.getElementById('judul');     //mengambil / memilih element yang id='judul'
judul.style.color = 'red';  //merubah warna 
judul.style.backgroundColor = '#ccc';   //merubah background
judul.innerHTML = 'Sandhika Galih';     //merubah isi 

// document.getElementsByTagName()      ->      mengembalikan HTMLCollections
const p = document.getElementsByTagName('p');
for( let i = 0; i < p.length; i++ ) {           //coba nanti gunakan for( let of )
    p[i].style.backgroundColor = 'lightblue';
}


const h1 = document.getElementsByTagName('h1')[0]; //karna dia HTMLCollection jadi, kira harus menulis index-nya supaya bisa memanipulasi h1
h1.style.fontSize = '50px';

//getElementsByClassName()      ->      mengembalikan HTMLCollections
const p1 = document.getElementsByClassName('p1')[0]; 
p1.innerHTML = 'Ini diubah dari javascript';