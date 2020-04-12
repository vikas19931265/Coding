/* 
2 subclasses are extending from one sub class.

*/


var Mobile=function (model)
{   
    this.model=model;
}

Mobile.prototype.getModel= function()
{
    return this.model; // all properties are case sensitive here
}

var Samsung=function (model,price)
{
    Mobile.call(this,model);
    this.price=price;
    // this.getPrice= function() { return this.price;}
}

function Iphone(model,price)
{
    Mobile.call(this,model);
    this.price=price;
    // this.getPrice= function() { return this.price;}
}

function extend(child,parent)
{
    child.prototype=Object.create(parent.prototype);
}
extend(Iphone,Mobile);
extend(Samsung,Mobile);

Samsung.prototype.getPrice= function() { return this.price;};
Iphone.prototype.getPrice= function()  {return this.price ; }

/* 
    Please note that i have set samsung prototype for get price after the prototype
    inheritance from the Mobile. If i would have done it before then the inheritance would
    have caused the prototype for getting price overridden and we will get undefined values.

    Hence we are doing this after. First the inherited prototype is called as a result getModel
    becomes accessible and then in prototype we are setting function internal to samsung that is
    getPrice() which will return the price of the model.

    If we set Samsung.prototype.getPrice() before the extend. Then firstly samsung prototype will
    point to object prototype with samsung prototype having getPrice().

    But later it starts to point to Mobile prototype. And i mobile prototype we dont have getPrice()
    function hence we will start getting undefined result.
*/

var galaxy= new Samsung("galaxy",2000);
var iphone10= new Iphone("iphone10",20000);

console.log("model : "+ galaxy.getModel() + "price : " + galaxy.getPrice());
console.log("model : "+ iphone10.getModel() + "price : " + iphone10.getPrice());

/* 
PS C:\Users\Vikas.Gautam\Desktop\GitV2\Javascript\Prototype> node a8_OneSuperClassAnd2Subclass.js
model : galaxyprice : 2000
model : iphone10price : 20000
*/

