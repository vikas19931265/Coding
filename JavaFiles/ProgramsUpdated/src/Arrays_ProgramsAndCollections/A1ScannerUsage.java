
package Arrays_ProgramsAndCollections;

import java.util.Scanner;


 class ScannerUsage
{
    Scanner cn = new Scanner( System.in); // Created Scanner Object and this object will be used to take several int values as input from the use.
     
    public static void main(String[] args)
     {
         
         
         System.out.println("Enter the first number");
         
         int number= new ScannerUsage().cn.nextInt(); // on reference we called nextInt...this will prompt the jvm to read the value entered by user from keyboard
     
         System.out.println("Enter the second number"); // reading the second number
         
         int number2=new ScannerUsage().cn.nextInt();// This will again prompt the jvm to read the value entered by the user from keyboard
         
         String number3=new ScannerUsage().Check(); // Here we are calling the Check method whcih is non static from static area , hence created the object to access it. 
                                                // Calling this will transfer the control to the check method.
         
         System.out.println("The first number is "+ number +" and the second number is "+ number2+" and name"+ number3);
         
                                                                 
     }
 
 
     public String Check()
     {
         System.out.println("Enter the name");
         
         String number3= cn.nextLine(); // Now again the jvm will be prompt to read the value from the system that is the value entered by the keyboard.
         
         
         return number3;
     
     }

 
 
 }

/*

[note]

    We dont need to create many scanner objects. We can create just one scanner object and that can be used to read
    different types of values from the user that is the values which will be entered by the user from the keyboard.

*/