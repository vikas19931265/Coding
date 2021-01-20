// Method Overriding Covariant return Type is allowed.

/*

1. In method overriding method names and argument types must be matched.
2. That is method signature must be same.
3. In overriding return type must be same, but this rule is applicable until 1.4 version only
   from 1.5 version onwards we can take covariant return types.
4. According to this child class methods return type need to be same as parent method return type.
   but its child types also allowed. 



Parent class method Return Type      Object                             Number                     double

Child class method Return Type     Object/String/StringBuffer       Number/Integer/Float...         int


5. ****Covariant concept is only applicable to objects and not primitives.


[by Durga]

Covariant return type concept applicable only for Object types but not for primitive types.


*/

package cMethodOverriding;

class P
{
   
         public Object m1() // m1 method of type Object.
    {
        return null;
    }
      
}


class C extends P
{
    @Override
    public String m1() // m1 of type String, since its overriding a method whose return type is Object, 
                       //hence its child subtypes also allowed which in our case is string.
    {
        return null;
    }



}


//---------------------------------------------------------------------------******----------------------------------------------------------------