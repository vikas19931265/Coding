/*
SCP case 1
===============================================================================

Any object which is created due to the run time operation is always stored in the heap memory only.

String str= "vikas+"gautam";

In this case vikas and gautam are like string constants. The concatenation operation will be 
performed at the compile time only and hence result into "vikas gautam" and then the respective
object will be stored in the String constant pool.

If String str= s6+"gautam";

In this case "gautam" is a string constant hence it will be stored in the string constant pool
but s6 is a variable hence the concatenation operation will be performed at the run time only
but not at the compile time and any object which is created due to the run time operation has 
to be stored in the heap memory.

*/
package StringConstantPool;

class SCP
{
    
    public static void main(String[] args)
    {
        
        String s1 = new String("You cannot change me");
                /*
                
                    1. This will create two objects one in heap memory and other in SCP for the future use
        
                    
                     heap                                                   scp
        
               s1-----> YCCM(Object)                                        YCCM(Object)                                                    
        
        
                    */
            
    
       String s2= new String("You cannot change me");
                    /*
                
                    1. This will create an  object in heap, no object will be created in SCP as it already exists
        
                    
                     heap                                                   scp
        
               s1-----> YCCM(Object)                                        YCCM(Object)                                                    
        
        
               s2----->YCCM(Object)                                             
       
                */
           
        System.out.println(s1==s2);// false
        
        
        String s3="You cannot change me";
        
                    /*
                
                    1. This will not  create an  object in heap, no object will be created in SCP as it already exists instead
                       same object existing in the heap memory will be used.
        
                    
                     heap                                                   scp
        
               s1-----> YCCM(Object)                                        YCCM(Object)                                                    
                                                                              |  
                                                                        s3----
               s2----->YCCM(Object)                                             
       
               
               
        
                */
    
    
        System.out.println(s1==s3);//false
        
        String s4= "You cannot change me";
        
                /*
                    This should create an object in SCP, but since the object already exists hence
                    s4 reference will be assigned to it.
                
                    
                      heap                                                   scp
        
               s1-----> YCCM(Object)                                        YCCM(Object)                                                    
                                                                               | 
                                                                               |
               s2----->YCCM(Object)                                     s4------        
                                                                               | 
                                                                       S3-----     
               
        
        
        
        
            */
    
    
       System.out.println(s3==s4);//true
       
       String s5="You cannot "+ "change me";
       
       /*
       
       Here "You cannot" and "change me" are constant at compile level. Hence this calculation will 
       be performed at the compile level and it will change to "You cannot change me".
       
       durga->
        This operation will be performed at the compile time only because both of the arguments
        are compile time constants.
       
        s5= "You cannot change me".
       
       Now this should be stored in SCP but an object already exists in SCP , hence s5 reference
       will be assigned to the object.
       
       
       
                      heap                                                   scp
        
               s1-----> YCCM(Object)                                        YCCM(Object)                                                    
                                                                               | 
                                                                               |
               s2----->YCCM(Object)                                     s4------        
                                                                               | 
                                                                               |
                                                                      s5--------  
                                                                               | 
                                                                               | 
                                                                     S3-------- 
       
       
       */
    
    
       System.out.println(s3==s5);//true
    
    
       String s6="You cannot ";
       
       /*
       
       This will create an object in SCP.
       
               heap                                                           scp
        
               s1-----> YCCM(Object)                                        YCCM(Object)                                                    
                                                                               | 
                                                                               |
               s2----->YCCM(Object)                                     s4------        
                                                                               | 
                                                                               |
                                                                     s5--------  
                                                                               | 
                                                                     s3--------
       
                                                                     s6--------You cannot(object)   
       
       
       
       */
    
    
    String s7=s6+"change me"; // Object created due to run time operation are stored in the heap memory.
    /*
    
    s6 is variable here and not constant whose value can change. Hence this calculation will
    be performed at the run time.
    
    by durga---> This operation will be performed at Runtime only because at least one argument 
                is normal variable.
    
    "change me" object will be created in SCP and "You cannot change me" object in heap as
    all object created due to runtime operation are done in heap memory
    
    
             heap                                                              scp
        
               s1-----> YCCM(Object)                                        YCCM(Object)                                                    
                                                                               | 
                                                                               |
               s2----->YCCM(Object)                                     s4------        
                                                                               | 
                                                                      s5--------  
                                                                               | 
                                                                     s3-------- 
       
                                                                     s6--------You cannot(object)   
       
                                                                     
     s7-----> YCCM                                                         change me(object)
    
    */
    
    
    System.out.println(s3==s7);//false
    
    final String s8="You cannot ";
    
    /*
    
    Now an object will be created at the SCP. But an object already exists with name "You cannot"
    hence it will be reused.
    
        
             heap                                                              scp
        
               s1-----> YCCM(Object)                                        YCCM(Object)                                                    
                                                                               | 
                                                                               |
               s2----->YCCM(Object)                                     s4------        
                                                                               | 
                                                                               |
                                                                     s5--------  
                                                                               | 
                                                                     s3-------
       
    
    
                                                                     s6--------You cannot(object)   
                                                                                |
                                                                     s8----------
            
    
            s7-----> YCCM                                               change me(object)
    
    
    
    
    */
    
    
    String s9= s8+ "change me";
    
    /*
    
    s8 is final variable , hence a constant. This operation will be performed at the compile 
    time but not at run time. The above equation will change to below at compile time
    
       
    by durga---> This operation will be performed at compile time only because of the arguments are
                 compile time constants.
    
    
    String s9="You cannot change me";
    
    
             heap                                                              scp
        
               s1-----> YCCM(Object)                                        YCCM(Object)                                                    
                                                                               | 
                                                                               |
               s2----->YCCM(Object)                                     s4------        
                                                                               | 
                                                                               |
                                                                      s5--------  
                                                                               | 
                                                                      s9------- 
                                                                               | 
                                                                      s3------
    
    
                               
                                                                     s6--------You cannot(object)   
                                                                                |
                                                                     s8----------
            
    
            s7-----> YCCM                                               change me(object)
    
    
    
    
    */
    
    
    System.out.println(s3==s9);//true
    
    System.out.println(s6==s8);//true
    }
}

/*
run:
false
false
true
true
false
true
true
BUILD SUCCESSFUL (total time: 0 seconds)

*/