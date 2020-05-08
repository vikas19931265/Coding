/* 
    Set Date Methods
    =====================
*/

// Day as Number 1 - 31 
// Hours as Number 0 - 23
// Month as Number 0 - 11 Ex- 0 = Jan
// Week Day as Number 0 - 6 Ex- 0 = Sun
var tarikh = new Date();
console.log(tarikh);

tarikh.setHours(22);
console.log(tarikh);

tarikh.setMinutes(56);
console.log(tarikh);

tarikh.setSeconds(40);
console.log(tarikh);

tarikh.setDate(26);
console.log(tarikh);

tarikh.setMonth(11);
console.log(tarikh);

tarikh.setFullYear(2022);
console.log(tarikh);

tarikh.setFullYear(2022, 3, 15);
console.log(tarikh);