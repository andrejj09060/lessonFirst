

//let firstArray = [1, 4, 34, 645, 656]


//let summ = 0
//let multiplication = 1

//for (let i = 0; i < firstArray.length; i++) {
 //   summ +=firstArray[i];
 //   multiplication *= firstArray[i]


//for (let element of firstArray) {
 //   summ += element;
 //   multiplication *= element;
//}



//console.log(summ);
//console.log(multiplication);



//localStorage.setItem('name','Vova123');
//let name2 = localStorage.getItem('name2');

//sessionStorage.setItem('name','Vova');
//sessionStorage.setItem('name','Vova2');
//let name = sessionStorage.getItem('name');


//function setCookie(name, value)






//cookies




//if (localStorage.getItem('exist')) {                                

//} else {                                                или вот так
//    alert('Hallo');
//    localStorage.setItem('exist', '1');
//}

const numberEntryKey = 'number-entry-Key';

let numberEntry = localStorage.getItem(numberEntryKey);

if (!numberEntryKey) {
    localStorage.setItem(numberEntryKey, '1')
}
numberEntry = + localStorage.getItem(numberEntryKey);


if (numberEntry === 0 || numberEntry === 2) {
alert('hello');
}
numberEntry++;
localStorage.setItem(numberEntryKey, numberEntry);


//localStorage.setItem('exist', ' ');