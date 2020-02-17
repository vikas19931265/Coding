/*

If the corresponding SCP object is not available then intern() method itself will create
the correspoding scp object.

*/


package StringConstantPool;

class Demo7 {
    

public static void main(String[] args)
{
    
    String s1 = new String("durga");
    
    /*
        Object created in the heap and SCP
    
        Heap                                                    SCP
    
    s1----> durga(object)                                     durga(object)
    
    
    */


    String s2=s1.concat("software");
    
    /*
      "software" object created in SCP and run time operation object "durga software"
       created in the heap
    
    
        Heap                                                    SCP
    
    s1----> durga(object)                                     durga(object)
    
    s2------>durgasoftware(object)                             software(object)
    
    
    */

    
    String s3=s2.intern();
    
    /*
    
    This method used to get SCP object representation of s2 , but for s2(durgasoftware)
    there is no object representation in the scp hence intern method will create an 
    object in scp and return the reference to be held by s3.
    
    
        Heap                                                    SCP
    
    s1----> durga(object)                                     durga(object)
    
    s2------>durgasoftware(object)                             software(object)
    
    
                                                        s3------>durgasoftware(object)
    
    
    */

    System.out.println(s2==s3); //false--( please check this as its not matching)
    
    System.out.println(s2.hashCode()+"..."+s3.hashCode());


     String s4="durgasoftware";
     
     /*
     This will try to create an object in scp with name "durgasoftware" but such object already exist
     hence the reference will be reused.
     
    
     
        Heap                                                    SCP
    
    s1----> durga(object)                                     durga(object)
    
    s2------>durgasoftware(object)                             software(object)
    
    
                                                        s3------>durgasoftware(object)
                                                                     |                   
                                                        s4------------
     
     */


     System.out.println(s3==s4);//true


}


}
