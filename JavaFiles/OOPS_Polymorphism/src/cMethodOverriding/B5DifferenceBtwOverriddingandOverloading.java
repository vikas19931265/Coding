package cMethodOverriding;

/*

Property                       Overloading                         Overriding

1. Method Names               Method name should be same           Method name should be same.

2. Argument Types             Must be different(at least order)    Must be same including order

3. Method Signature           Must be different                    Must be same.

4. Return types               Return type has no restriction       Must be same until 1.4 but from 1.5 covariant return types allowed     

5  private/static/final       can be overloaded                    cannot be overridden 

6. Access modifier            no Restriction on overloading        Scope of access modifier should not be reduced but we can increase.

7  throws clause              no restrictions                      If child class method throws unchecked Exception then compulsory parent class
                                                                   method should throw the same checked Exception or its parent. But no restriction  
                                                                   for unchecked Exception 



8  method Resolution          Taken care by compiler based on ref  Always taken care by JVM based on run time object. 
                              type  

9. Also known as              Compile time polymorphism, static    run time polymorphism, dynamic polymorphism, late binding. 
                              polymorphism, early binding  






[note]

  1.  In overloading we have to check only method names( must be same) and argument types( must be different)
      We are not required to check remaining like return types, access modifiers etc.

  2. But in overriding everything we have to check multiple things like method names, argument types , return types, access modifiers
     throws clause etc.

*/


//--------------------------------------------------------------------------*********-------------------------------------------------------------