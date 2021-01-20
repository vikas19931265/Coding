package aFileHandling;


import java.io.File;


 class FileClassMethod_DisplayOnlyFileName {
    
public static void main( String[] args)
{
    int count=0;
    
    File f= new File("D:\\WHOLESALEWHC3_RBK_MODELC_1");
    /*
    
    1. With this line an object will be created in the memory.
    2. This object will contain the directory contents.
    3. The reference of this object is f.
    4. Using this we can list out all the files or directory names present inside the location.
    
    */
    
    String[] s=f.list();
    
    //Here s is the string reference which points to array of string objects. Those objects are nothing but references containing files/directory names.
   
    
    /*
        This method will return an array of all the names
    */

    for( String s1: s) // example of for each loop statement in java. This takes values from s1 to s;
    /*
        
    1. This line means , string reference s points to array of string object.
    2. Here s1 will take all the references or one can say objects s is pointing to.    
    */
    
    {
       File f1= new File(f,s1);
       if(f1.isDirectory())  // this can be replaced with isDirectory to check for directory instead of the file.
       {
        
        count++;   
        System.out.println(s1);
    
       }


  
}

  System.out.println(count);

}
}


