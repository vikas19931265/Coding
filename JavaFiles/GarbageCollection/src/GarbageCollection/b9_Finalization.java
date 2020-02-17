/*

Finalization
============================

Just before destroying an object, garbage collector calls finalize() method to 
perform clean up activities.

Once the finalize method completes automatically garbage collector is going to 
destroy that object.

finalize() method is present in the object class with the following declaration.
            protected void finalize() throws Throwable

We can override finalize() method in our class to define our own clean up activities.


*/



