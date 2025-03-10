/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
  const h1 = document.getElementsByTagName('h1');
  h1[0].innerText = 'EPICODE';
};
changeTitle();
/* ESERCIZIO 2
         Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
      */

const addClassToTitle = function () {
  const h1 = document.getElementsByTagName('h1');
  h1[0].classList.add('myHeading');
};
addClassToTitle();

/* ESERCIZIO 3
         Scrivi una funzione che cambi il testo dei p figli di un div
        */

const changePcontent = function () {
  const arrayOfP = document.querySelectorAll('div p');
  for (let i = 0; i < arrayOfP.length; i++) {
    arrayOfP[i].innerText = 'EPIFY';
  }
};
changePcontent();

/* ESERCIZIO 4
         Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
        */

const changeUrls = function () {
  const arrayOfP = document.querySelectorAll('div a');
  for (let i = 0; i < arrayOfP.length; i++) {
    arrayOfP[i].setAttribute('href', 'https://www.google.com');
  }
};
changeUrls();
/* ESERCIZIO 5
         Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
      */

const addToTheSecond = function () {
  const newList = document.getElementById('secondList');
  const newLi = document.createElement('li');
  newList.appendChild(newLi);
};
addToTheSecond();
console.log(document.getElementById('secondList'));

/* ESERCIZIO 6
         Scrivi una funzione che aggiunga un paragrafo al primo div
      */

const addParagraph = function () {
  const pDiv = document.getElementsByTagName('div');
  const newP = document.createElement('p');
  pDiv[0].appendChild(newP);
};

addParagraph();
console.log(document.getElementsByTagName('p'));

/* ESERCIZIO 7
         Scrivi una funzione che faccia scomparire la prima lista non ordinata
      */

const hideFirstUl = function () {
  const deletelist = document.getElementById('firstList');
  deletelist.remove;
};

hideFirstUl();
console.log(document.getElementsByTagName('ul'));
/* ESERCIZIO 8 
         Scrivi una funzione che renda verde il background di ogni lista non ordinata
        */

const paintItGreen = function () {
  const uList = document.getElementsByTagName('ul');
  for (let i = 0; i < uList.length; i++) {
    uList[i].style.backgroundColor = 'green';
  }
};
paintItGreen();

/* ESERCIZIO 9
         Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
        */

const makeItClickable = function () {
  const h1 = document.querySelector('h1');
  if (h1) {
    const testo = h1.textContent;
    if (testo.length > 0) {
      h1.textContent = testo.slice(0, -1);
    }
  }
};

/* ESERCIZIO 10
         Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
        */

const revealFooterLink = function () {
  const footer = document.querySelector('footer'); // Seleziona il tag <footer>
  if (footer) {
    footer.addEventListener('click', function () {
      const linkInterno = footer.querySelector(
        'a[href^="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents"]'
      );
      if (linkInterno) {
        alert(linkInterno.href);
      } else {
        alert('Nessun link interno trovato nel footer.');
      }
    });
  } else {
    console.error('Elemento <footer> non trovato.');
  }
};

// Chiama la funzione per attivare l'ascolto del click sul footer
revealFooterLink();

/* ESERCIZIO 11
         Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
         La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
      */

const generateTable = function () {};

/* ESERCIZIO 12
         Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
      */

const addRow = function () {};

/* ESERCIZIO 14
        Crea una funzione che nasconda le immagini della tabella quando eseguita
      */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
        Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
      */

const changeColorWithRandom = function () {};
