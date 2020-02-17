package cInnerClass;


import java.awt.*;

import java.awt.event.*;


/*
Where anonymous inner classes are best suitable??
-------------------------------------------------------------------


1.We can use anonymous inner classes frequently in GUI based applications to implement event handling.


    Lets take for example where we have a GUI frame in which there are plenty of buttons. Each button 
    has some task to be performed after being registered with even handler. So we have to implement
    ActionListener class and pass it as an object to addActionListener.

    Here each button will have its own task to perform , which will not need be needed for any other buttons
    hence we can write the content in anonymous inner class instead of creating top level classes.

            JFrame
        -------------------------
        |                       |
        |  b1       b2          |
        |                       |
        |                       |
        |                       |
        |                       |
        |                       |        
        |                       |
        |  b3        b4         |    
        |                       |
        |                       |
        |                       |
        |                       |
        |--------------------------


        where b stands for the buttons.




class MyGUIFrame extend JFrame
{

JButton b1, b2, b3, b4, b5;
    ....
    ....

    b1.addActionListener(new ActionListener
                            {
                                public void actionPerformed(ActionEvent e)
                                    {
                                        ---b1 specific code
                                    }
                            } ;          


       b2.addActionListener(new ActionListener
                            {
                                public void actionPerformed(ActionEvent e)
                                    {
                                        ---b2 specific code
                                    }
                            }  ;         

                    .     
                    .
                    .
                    .
*/
/*

Steps of Execution in below program: vikas assumption
====================================================

f.addWindowListener(new WindowAdapter()
                              
            {
                  public void windowClosing(WindowEvent e)
                  {
                      for(int i =1;i<=10;i++)
                      {
                          System.out.println("I am closing window"+i);
                      
                          
                                   
                      
                      }
                  
                         System.exit(0);
                  
                  }


1. Here we first created the frame object. 

2. From the frame object we want to call the addWindowListener() method.

3. addWindowListener() method accepts WindowAdapter object.

4. Since this frame object of window adapter type will not be used by us anywhere else, hence
   we created anonymous class and got the object. 
   
5. Now for object we have definition as part of content of windowClosing() method.

6. Now internally with the anonymous object returned we are calling the windowClosing method. Hence
   the window is going to get closed after printing 10 times that i am closing the window.
   
7. Hence in GUI we find the best usage for the anonymous inner class object, especially inner class used
   inside the argument.
   



*/

 public class JarDemo
{
    public static void main(String[] args)
    {
        
        Frame f = new Frame();
        
        f.addWindowListener(new WindowAdapter()
                              
            {
                  public void windowClosing(WindowEvent e)
                  {
                      for(int i =1;i<=10;i++)
                      {
                          System.out.println("I am closing window"+i);
                      
                          
                                   
                      
                      }
                  
                         System.exit(0);
                  
                  }
        
        
        }

        );        
 
    f.add(new Label("I m closing window"));
    
    f.setSize(500,500);
    
    f.setVisible(true);
    
    }
 }

/*
run:
I am closing window1
I am closing window2
I am closing window3
I am closing window4
I am closing window5
I am closing window6
I am closing window7
I am closing window8
I am closing window9
I am closing window10
BUILD SUCCESSFUL (total time: 1 second)

*/
