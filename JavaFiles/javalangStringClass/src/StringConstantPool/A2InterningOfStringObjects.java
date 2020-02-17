/*

Interning of String objects
==============================================================================


We can use intern() method to get corresponding SCP object references by using heap 
object reference.

By using heap object reference if we want to get correspoding SCP object reference
then we should go for intern() method.


Exmaple is given below

*/
package StringConstantPool;

class Demo2
{
    public static void main(String[] args)
    {
        
        String s1 = new String("durga");
                /*
        
                1. Create one object in heap and one in scp
        
                heap                                            scp
        
   s1-----> durga(Object)                                       durga(Object)     
        
        
        */
    
    
    String s2=s1.intern();
    
            /*
    
            1. Using this inten() method we can get SCP object of the object on which the method is called
              on s1 this method is called hence we will get SCP object of s1 and reference assigned to s2.
            
            
               heap                                            scp
        
   s1-----> durga(Object)                                       durga(Object)     
                                                                  |  
                                                        s2-------- 
            */
                                                        
              
    
      System.out.println(s1==s2) ; //false

        String s3="durga";
    
        /*
    
        This should create new object in  SCP. But an object with durga name already exists.
    
        
               heap                                            scp
        
   s1-----> durga(Object)                                       durga(Object)     
                                                                  |  
                                                        s2-------- 
                                                                  |  
                                                        s3--------
    
        
        */
    
    
          System.out.println(s2==s3);// true
    
    
    
    }
}