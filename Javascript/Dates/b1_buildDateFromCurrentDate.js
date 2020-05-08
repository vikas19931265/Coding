let currentDate= new Date();
let date= currentDate.getDate();
let month= currentDate.getMonth() +1 ; // add 1 since the months starts form 0
let year= currentDate.getFullYear();

console.log(`${year}-${month}-${date}`); //2020-3-2020