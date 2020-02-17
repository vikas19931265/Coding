/*

        integral              |  floating 
                              |
1b           2b         4b    |   8b         4b        8b            
byte--- ----short------int----> long----->float----->double
                       /      |  
                      /       |  
                     /        |  
  2b                /         |  
 char--------------


left to right conversions are always possible that is we can assign a lower data 
type value to the higher data type value without any problem.


big doubt
----------------

long is 8bytes and float is 4 bytes. How can we assign a long value to float.

8 byte long value , we can assign to 4 byte float variable because both are following different
memory representations internally and hence float memory representation of 4bytes is enough to hold
long of 8 bytes



char value can also be not assigned to short due to sign factor. Both are 2 bytes but we cannot
assigned to one another as one is signed and other one unsigned. For char ranges is fully positive
with max value 65535 but short is signed hence its range is half of 65535. In the same way short
negative value cannot be taken by the char data type.

*/
package Literals;



class Exa
{
    
    public static void main(String[] args)
    {
        
        float f =10l ;  // valid, we can assign a long value to float with no issues
        
        System.out.println(f); //10.0
    }
}

