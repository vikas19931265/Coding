/* 
For in loop is able to iterate through the functions also. If we dont want to have function in iteration
then we can go for the if condition.

*/

function Mobile(model_no){
    this.model = model_no;
    this.color = 'white';
    this.ram = '4GB';
    this.price = function(){
        console.log(this.model + " Price Rs.3000 ");
    };
}

var samsung = new Mobile('Galaxy');
var nokia = new Mobile('3310');


// Method wont display
for(let key in nokia){
    if(typeof nokia[key] !== 'function'){  // if property type is function then dont print.
        console.log(nokia[key]);
    }	
}
