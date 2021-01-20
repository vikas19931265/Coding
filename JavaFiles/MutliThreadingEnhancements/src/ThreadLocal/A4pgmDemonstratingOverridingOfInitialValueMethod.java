//Overridding of initialValue method( public object InitialValue)

package ThreadLocal;


class ThreadLocalDemo1A
{
    
    public static void main(String[] args)
    {
        ThreadLocal t1 = new ThreadLocal()
        {
            
            //Overriding intitialValue method of ThreadLocal by using inner class concept.
            /*
            
            Here we have created an anonymous inner class which is overriding the initial value method of ThereadLocal class.
            This method is called whenever we are trying to get the value of variable from the ThreadLocal.
            */
            
            @Override
            protected Object initialValue()
            {
                return "abc";
            }
        };
    
      System.out.println(t1.get()); //abc
      
      t1.set("durga");
      
      System.out.println(t1.get());// durga
      
      t1.remove();
      
      System.out.println(t1.get());//abc
    
    
    }




}
/*
run:
abc
durga
abc
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-------------------------------------------------------------*************************************------------------------------------------