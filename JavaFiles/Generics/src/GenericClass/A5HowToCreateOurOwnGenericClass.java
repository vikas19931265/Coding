package GenericClass;

/*

Generic Classes creation on our own.
=======================================================================================

Until java 1.4 version , a non generic version of ArrayList class is declared as follows.


class ArrayList
{

        add(Object o)  
        
        Object get(int index);

}



The argument to the add method is Object and hence we can add any type of Object to the ArrayList. Due to 
this we are missing type safety.

The return type of the get() method is Object hence , at the time of retrieval we have to perform typecasting

But in 1.5 version, generic version of ArrayList clas is declared as follows.



class ArrayList<T>   here "T" is the type parameter. This class is like a template, based on our runtime required
{                   "T" will be replaced with the type of object. In C++ this "T" is Template

        add(T k )
        {

            T get(int index);
        }
}


Based upon our runtime requirement "T" will be replaced with our provided type.
For example , to hold only String type of Objects a generic version of ArrayList 
Object can be created as follows


        ArrayList<String> l = new ArrayList<String>();


For this requirement compiler considered version of ArrayList class is as follows

Class ArrayList<String>
{

    add(String s)

    String get(int index)

}


The argument to the add method is String type, hence we can add only String type of 
Objects. By mistake if we are trying to add any other type then we will get compile 
time error.

        l.add("Durga");
        
        l.add(new Integer(10); // invalid

CE: cannnot find symbol method add( java.lang.Integer) location class ArrayList<String>


Hence through generics , we are getting TypeSafety.



The return type of the get() method is String and hence at the time of retrieval , we are not required to 
perform typecasting


        String name1= l.get(0);
                      |
                  TypeCasting is not required.
                

In Generics we are associating , a Type parameter to the class. Such type of parameterized classes
are nothing but Generic classes or Template classes.


 Based upon our requirement, we can define our own generic classes also.

    
        class Account<T>
            {
            
            }

       Account<Gold> a1= new Account<Gold>();

        Account<Platinum> a1= new Account<Platinum>();



*/








//------------------------------------------------------------------**************************------------------------------------------------