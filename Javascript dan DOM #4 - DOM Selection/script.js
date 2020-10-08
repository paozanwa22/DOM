//  DOM Selection
//  document.getElementById()   ->  mengembalikan element
//  document.getElementByTagName()   ->   HTMLCollection
//  document.getElementByClassName()   ->   HTMLCollection

//  querySelector()     ->  element
//  querySelectorAll()  ->  NoteList
    //for of    //loop ini carakerjanya sama dengan foreach pada bahasa PHP

//....





//  document.querySelector()    ->  element

// const p4 = document.querySelector("#b p"); 
// p4.style.color = 'orange';
// p4.style.fontSize = '50px';

// const item2 = document.querySelector("section#b ul li:nth-child(2)");
// item2.style.backgroundColor = 'orange';





// querySelectorAll()   ->  NodeList

// const paragraf = document.querySelectorAll("p");

// for ( let i = 0; i < paragraf.length; i++ ) {
//     paragraf[i].style.color = 'pink';
// }

//  for of      sama dengan     foreach pada PHP
// for ( let p of paragraf ) {
//     p.style.color = 'pink';
// }





//  Mengubah Node Root
// Memperkecil ruang lingkup pencarian untuk menemukan p 

// const sectionB = document.getElementById("b");
// const p4 = sectionB.querySelector("p");
// p4.style.backgroundColor = 'orange';











