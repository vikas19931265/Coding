/*

In the below program if we replace InheritableThreadLocal with ThreadLocal and remove childValue() method
then the output will be:

        Parent Therad Value: pp

        Child Thread Value :null


In the below program if are using InheritableThreadLocal but not overriding childValue method
then default value of parent thread value will be reflected in child thread value.

           Parent Thread Value: pp

            Child Thread Value :pp


Note

InheritableThreadLocal extends ThreadLocal, hence all methods of ThreadLocal are available to InheritableThreadLocal
by default.

*/


package ThreadLocal;

class ParentThread extends Thread
{

    public static InheritableThreadLocal t1 = new InheritableThreadLocal()
    {
        @Override
        public Object childValue(Object p) // Overridden this method to change the value going to child.
        {                                  //If we dont override this method then the default value of parent
            return "CC";                   // which is pp will go to the child thread as well.
        }
    };


    @Override
    public void run()
    {
        t1.set("pp"); // please note that when calling t1.get(),childValue() method is not called internally.

        System.out.println("Parent Thread Value"+t1.get());

        ChildThread ct = new ChildThread();

        ct.start();
    }

}

class ChildThread extends Thread
{

    public void run()
    {
        System.out.println("Child Thread value"+ParentThread.t1.get());

        /*

        1. We are in the child thread that which is called by the main thread .

        2. In the child thread we are trying to again get the value of parent thread variable in the ThreadLocal box

        3. But when we try to get the value "ParentThread.t1.get())" the value is not available as the parent thread
           value will not be available to the child thread using the ThreadLocal.

        4. To fix this we can use another class that is InheritableThreadLocal.

        5. If we use this class then the parent thread local value set can be seen in the child class thread also.

        6. Now if we want to change the value which should be made available to the child thread then we can override
           childValue method.

                public Object ChildValue(Objet o)
                {

                    return cc;
                }



        */

    }
}


class ThreadLocalDemo3
{

    public static void main(String[] args)
    {

        ParentThread pt = new ParentThread();

        pt.start();;
    }
}

/*
run:
Parent Thread Value  pp
Child Thread value  CC
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//--------------------------------------------------------------------**************************-------------------------------