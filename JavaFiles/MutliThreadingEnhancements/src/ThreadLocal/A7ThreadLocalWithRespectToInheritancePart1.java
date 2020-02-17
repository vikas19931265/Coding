/*

ThreadLocal with respect to inheritance.
------------------------------------------------

1. Parent threads thread local variable by default is not available to the child thread.

2. If we want to make parent threads , threadlocal variable value available to the child 
   thread then we should go for InheritableThreadLocal class.

3. By default child threads value is exactly same as parent threads value. But we can provide customized
   value for the child thread by overriding childValue() method.


InhertiableThreadLocal constructor.

InheritableThreadLocal t1 = new InheritableThreadLocal();


InheritalbeThreadLocal is the child class of ThreadLocal and hence all methods present in ThreadLocal by default
are available to InheritableThreadLocal. In addition to these methods it contains only one method that is

method:
        childValue(Object parentValue)


*/

//----------------------------------------------------------------------***************---------------------------------