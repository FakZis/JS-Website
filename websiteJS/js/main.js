// Javascript



// Variablen werden mit keyword deklariert: let, var, const
let alter = 30;
alter = '30';

// Objekt, : als Wertzuweisung
// siehe: JSON
// Stichwort: serialisierung / de-serialisierung

const person = {
    vorname:'George',
    nachname:'Harrison',
    hobbies:['guitars','music','my band'],
    adresse:{
        strasse:'12 Arnold Grove ',
        stadt:'Liverpool',
        land:'Großbritannien',
    }
}

console.log(person.hobbies[2]);

// console.log(window);
// DOM - Document Object Model

// Veraltet:
/*
	- getElementById
	- getElementsByClassName
*/

// lieber: querySelector

// Ein einzelnes Element selektieren
let elemente = document.querySelector('li');

elemente = document.querySelectorAll('li');

// console.log(elemente);

// EVENTS
// können Elementen hinzugefügt werden über einen eventListener

let button = document.querySelector('.button');
let form = document.querySelector('#form');

button.addEventListener('click',(e) => {
    e.preventDefault(); // default absenden des formulares wird unterbunden, nur noch JS aktiv.
    //console.log('click');

    // verbotenes inline-css anwenden:
    // form.style.background = 'green';

    // hinzufügen einer Klassenliste
    // form.classList.add('background');
    button.classList.add('danger');
});









