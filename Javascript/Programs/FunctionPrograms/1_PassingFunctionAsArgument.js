// Passing function as the argument

display(10, function() {
        console.log("test");
});

function display(value , myfun)
{
    console.log(myfun); 
    /* 
        here myfun is pointing to function() { console.log("test")};
        therefore here myfun is acting as the variable holding the function expression.

        In order to call the function it has to call through the constructor.
            
    */
    myfun();  // test.

}



