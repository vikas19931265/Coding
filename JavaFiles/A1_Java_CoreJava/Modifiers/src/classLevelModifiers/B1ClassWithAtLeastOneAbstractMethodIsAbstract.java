// Abstract class vs Abstract Methods.

/*

1. If a class contains at least one abstract method then compulsory we should declare the class as abstract otherwise 
   we will get the compile time error.

Reason:
        If a class contains at least one abstract method then implementation is not complete and hence it is not recommended to create Object.
        To restrict Object instantiation compulsory we should declare the class as abstract class.

Example

    Lets take for example we have a class Vehicle and this class has getNumberOfWheels method inside it.
    If this is not giving implementation but we are allowed to create the object of this class then bringing the
    Vehicle to market is of no use.
        

*/

//-----------------------------------------------------------------------------------------*******************--------------------------------------