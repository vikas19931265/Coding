/*

Java String getBytes()
================================================================================


The java string getBytes() method returns the byte array of the String. In other words
it will return the sequence of the bytes.


Signature

There are 3 variant of getBytes() method. The signature or syntax of string getBytes() method is given below:

    public byte[] getBytes()  
    public byte[] getBytes(Charset charset)  
    public byte[] getBytes(String charsetName)throws UnsupportedEncodingException  

Returns

sequence of bytes.


*/
package StringClassConstructorsAndMethods;


 class getBytes {
    
     public static void main(String[] args)
     {
         
         String input="VikasGautam";
         
         byte[] b    = input.getBytes();
         
         for(byte b1: b)
         {
             System.out.println(b1);
             
         }
         
     }
 
 
 
 }

/*
run:
86
105
107
97
115
71
97
117
116
97
109
BUILD SUCCESSFUL (total time: 0 seconds)

*/