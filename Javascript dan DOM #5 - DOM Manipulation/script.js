// DOM Manipulation
    //  Manipulasi Element
    //  Manipulasi Node (menyisipkan atau menghilangkan element)


// Manipulasi Element
    //  element.innerHTML    // Merubah value tag
    //  element.style.<propertyCSS>    // untuk merubah style CSS yang sudah kita sileksi
    //  element.setAttribute()         // memanipulasi Attribut(attribut adalah sepeti: src, name, id, class, href, dll)
    //  element.getAttribute()         // untuk mengetahui isi dari sebuat attribut
    //  element.removeAttribute()      // Menghilangkan Attribut


    //  element.innerHTML    // Merubah value tag
        // const h1 = document.getElementById('judul');
        // h1.innerHTML = 'Ini di rubah melalui JS';

    //  element.style.<propertyCSS>    // untuk merubah style CSS yang sudah kita sileksi
        // const h1 = document.getElementById('judul');
        // h1.style.backgroundColor = 'yellow';
    
    //  element.setAttribute()                      // memanipulasi Attribut(attribut adalah sepeti: src, name, id, class, href, dll)
        // const judul = document.getElementsByTagName('h1')[0];    //menyeleksi tag h1 dengan index 0
        // judul.setAttribute('nama', 'Sandhika');                  //menambahkan attribut nama="Sandhika" yang sebelumnya tidak ada
                                                                    //<h1 id="judul" nama="Sandhika">Hello World</h1>

                                                                    
    //  element.getAttribute()          // untuk mengetahui isi dari sebuat attribut
        // const a = document.querySelector("#container #a a");         //  Menyeleksi tag a
        // a.getAttribute('href');      //  Melihat isi attribut href   //  Maka akan menampilkan   "http://instagram.com/sandhikagalih"
    
    
    //  element.removeAttribute()       // Menghilangkan Attribut
        // const a = document.querySelector("#container #a a");
        // a.removeAttribute('href');      //  Sekarang href yang berada di tag a tidak ada(dan link tidak akan aktif);
    
    
    //  element.classList    // Memanipulasi Kelas
        //  p2.classList    //  Untuk melihat class apa saja yang ada pada p2
        //  element.classLis.add()          //  Menambah Kelas Baru
        //  element.classLis.remove()       //  Menghilangkan kalas yang ada
        //  element.classLis.toggle()       //  Jika sebuah elemen tidak memiliki klas tertentu, (maka akan menambahkan) dan sebaliknya
        //  element.classLis.item()         //  Untuk mengetahui Kelas tertentu,(yang berada dalam sebuah element) misalnya element itu mempunyai 3 klas dan kita ingin melihat klas 3 nya
        //  element.classLis.contains()     //  Untuk mengeCek apakah ada Klas tertentu 
        //  element.classLis.replace()      //  Mengganti Klas yang ada dengan Klas yang baru


        
        //  element.classLis.add()
            // const p2 = document.querySelector(".p1");    sama dengan        // const p2 = document.getElementsByClassName("p1");
            // p2.classList.add('label');

        //  element.classLis.remove()       //  Menghilangkan kalas yang ada
            // const p2 = document.querySelector(".p1");
            // p2.classList.remove('label');

        //  element.classLis.toggle()
                //  document.body.classList.toggle('biru-muda');   //  menghilangkan class biru-muda jika ada dan sebaliknya (biru-muda adalah class yang sudah di buat di style yang kita jadikan percobaan pada latihan ini)
        //  element.classLis.item()
                //  p2.classList.item(2);   //  menampilkan class dengan index ke 2
        //  element.classLis.contains()
                //  p2.classList.contains('dua');   //  menanyakan apakah ada class dengan nama dua ?
        //  element.classLis.replace()
            //  p2.classList.replace('dua', 'empat' );   //  merubah class dengan nama 'dua'      menjadi     'empat'



    //  ......



//  LATIHAN
