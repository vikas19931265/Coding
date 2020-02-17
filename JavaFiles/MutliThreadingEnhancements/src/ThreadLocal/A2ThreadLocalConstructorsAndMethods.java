/*
Constructors
---------------

ThreadLocal t1 = new ThreadLocal();

    Creates a thread local variables.


Methods
------------------

Object get()

    This will return the value of Threadlocal variable associated with current thread.

Object initialValue()

    Return initial value of Threadlocal variable associated with the current thread.
    The default implementation of this method returns null. To customize our own initial 
    value we have to override this method.


void set(Object newValue)

    To set a new value instead of initial value of null.

void remove()

    To remove value of threadlocal variable associated with the current thread. This method
    is the newly added method in 1.5 version. After removal of value from threadlocal if we are trying
    to access then it will re initialized once again by invoking its initial value method.


*/


//-----------------------------------------------------------------*************************-------------------------------------------