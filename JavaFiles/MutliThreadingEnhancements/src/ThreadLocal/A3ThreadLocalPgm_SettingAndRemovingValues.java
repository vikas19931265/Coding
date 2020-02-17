
// ThreadLocal Program Setting and removing values from ThreadLocal

package ThreadLocal;


class ThreadLocalDemo1
{
    
    public static void main(String[] args)
    {
        
        ThreadLocal t1 = new ThreadLocal();// ThreadLocal is like a box in which values will be stored of different threads
                                           //Since here we are in main thread hence value of main thread is stored inside it. 

        
        System.out.println(t1.get());// initially value will be null
        
        t1.set("Durga");//Inside threadlocal we are setting value = durga for main thread
        
        System.out.println(t1.get()); //Durga.
        
        t1.remove();
        
        System.out.println(t1.get());// null..After removing durga value again changes to its default value.
    }
}

/*
run:
null
Durga
null
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-------------------------------------------------------------*******************************--------------------------------------------------