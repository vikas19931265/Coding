/*

Java primitive type stack or heap
====================================================


class  Test
{
    int y=10; // defined as part of the class

    public void function1(){
        int x = 5; // defined locally
    }

    public static void main(String[] args) 
    {
        Test obj = new Test();
    }
}



When a method is called, certain data is placed on the stack. When the method finishes, data is removed from the stack.
At other points in a program's execution, data is added to the stack, or removed from it.

Therefore, if you have a variable which is intended to outlive the execution of the method that
created it, it needs to be on the heap. This applies both to any objects that you create, and any primitives that are stored within those objects.

However, if a variable is intended to go out of scope shortly after its creation - say, at the end of the method in which it's created,
or even earlier, then it's appropriate for that variable to be created on the stack. 

Local variables and method arguments fit this criterion; if they are primitives, the actual value will be on the stack,
and if they are objects, a reference to the object (but not the object itself) will be on the stack.

In your specific example, x is unusable as soon as function1 finishes running. So it's reasonable for it to be created on the stack. 
At the end of function1, data is effectively removed from the stack, including x. On the other hand, the 
variable y is expected to still exist for as long as the containing object exists; if it were created on the stack,
it would cease to exist once the object constructor which created it finishes running. Therefore y must be created on the heap.


*/