/* extends vs implements. 
=================================

1. A class can extend (inheritance) only one class a time.

2. An interface can extend multiple interface at a time.

3. A class can implement multiple interfaces a time.
 
4. A class can extend another class( only one) at the same time implement multiple interfaces.


Which of the following is valid??

i) A class can extend any number of classes at a time.( invalid)

ii) A class can implement only one interface a time( invalid)

iii) interface can extend only one interface at a time(invalid)

iv) An interface can implement any number of interfaces simultaneously( invalid).

v) A class can extend another class or can implement an interface but not both simultaneously( invalid).

vi) None of the above

        None of the above points are true.


          
i )Consider the following expression   [X extends Y]

For which of the following possibilities of X and Y the above expression is valid

1) Both X and Y should be Classes. (invalid as X and Y can be interfaces)

2) Both X and Y should be interfaces ( invalid as X and Y can be classes)

3) Both X and Y can be either classes or interfaces (valid from 1 and 2)

4) No restrictions. (invalid)



ii) X extends Y, Z

    Here X , Y and Z should be interfaces.


iii) X implements Y,Z

    Here X has to be class and 
    Y and Z to be interfaces.


iv) X extends Y implements Z

    X,Y-->classes
    z---> interface

v) X implements Y extends Z

    Compile Error : Because we have to take extends first followed by implements.
    
    
*/ 

interface A
{
    
}

interface B
{
    
}

//-Case 1----------------------------------------------------------------------------------

interface C extends A,B
{
    /*
    1. An interface can extend multiple interfaces a time.
    2. Multiple inheritance is possible in case of the interfaces but not in classes.
    
    */
}

//-Case 2----------------------------------------------------------------------------------

class D implements A,B,C
{
    /*
    
    A class can implement multiple interfaces a time.
    
    */
}

//-Case 3----------------------------------------------------------------------------------


class E extends D implements A,B,C
{
    /*
    
    A class can extend only one class at a time but at the same time can implement any number of 
    the interfaces.
    
    */
}


//---------------------------------------------------------------------------------*******************--------------------------------------