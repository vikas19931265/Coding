//----------------------JAVA PROGRAM SHOWING HOW A PATTARN OF ALPHABETS IS FORMED------



package BasicPrograms;

import java.util.Scanner;


public class A3PatternOfAlphabets {
    
    public static void main( String[] args)
    {
    
    System.out.println("Enter the number of lines");
    
    Scanner cn= new Scanner(System.in); //Take the input from the user for number of lines.

    int line=cn.nextInt();
    
    for(int i =1; i<=line;i++) // from 1 to ...line count entered by the user
        {
        
            int asci=97; // asci int value set to 97, this will be later converted to char , to store a.
            
            for(int j=1;j<=i;j++) // to print alphabets in horizontal order
            {
                
                char ch= (char) asci;// ascii value is type casted to char type, and printed as char
                
                System.out.print("  "+ch); // ascii value is converted to char type and printed on the screen
                
                asci++; // acii value is incremented....NOTE( this is still an int value)
            }
        
        
            System.out.println(); // to give space between each of the ine.
        
        
        }
    
    
    
    }       

}

/*
run:
Enter the number of lines
8
  a
  a  b
  a  b  c
  a  b  c  d
  a  b  c  d  e
  a  b  c  d  e  f
  a  b  c  d  e  f  g
  a  b  c  d  e  f  g  h
BUILD SUCCESSFUL (total time: 2 seconds)

*/