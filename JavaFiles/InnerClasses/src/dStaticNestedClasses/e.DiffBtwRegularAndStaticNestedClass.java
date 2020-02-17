package dStaticNestedClasses;

/*

Differences between normal inner or regular inner class and static nested class.



Normal/Regular                                                                  static/Nested class 
inner class


1. Without existing outer class object, there is no                   Without existing outer class object there may be a 
   chance of existing inner class object that is inner                chance of existing static nested class object that is  
   class object is strongly associated with outer class               static nested class object is not strong associated with
   object                                                             outer class object.


2.In normal or regular inner classes we can�t declare static         In static nested classes we can declare static members.
  members

3. In normal or regular inner class we can�t declare main            In static nested classes we can declare main method and hence we can 
  method and hence we can�t invoke inner class directly from         invoke nested class directly from the command prompt. 
   the command prompt.


4. From normal or regular inner classes we can access both         From static nested classes, we can access only static members of outer class directly. 
   static and non-static members of outer class directly.



*/
public class NewClass27 {
    
}

