class Person
{
    constructor(name, age)
    {
        this.name=name;
        this.age=age;
    }

    getpersonTest()
    {
       return "Person"; 
    }
}

class Students extends Person
{
    constructor(name,age,rollNo)
    {
        super(name,age);
        this.rollNo=rollNo;
    }
    getpersonTest()
    {
        return "I am student";
    }
    display()
    {
        console.log(this.getpersonTest());
        return super.getpersonTest(); // person...able to class super class getPersonTest
        
    }

}

var s1=  new Students("vikas",18,1234);
console.log(s1.name); //vikas
console.log(s1.rollNo);//1234
console.log(s1.age); //18
console.log(s1.display()); // I am s student...Person