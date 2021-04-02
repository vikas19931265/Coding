/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Utility;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

/**
 *
 * @author Vikas.Gautam
 */
public class a2_CreateClassUsingName {
    
    public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException {
        
       // Get class name as string.
        String myClassName = Base.class.getName();
       System.out.println("name of the class is " + myClassName);
        // Create class of type Base.
        Class<?> myClass = Class.forName(myClassName);
        // Create constructor call with argument types.
        Constructor<?> ctr = myClass.getConstructor();
        // Finally create object of type Base and pass data to constructor.
        String arg1 = "My User Data";
        Object object = ctr.newInstance();
        // Type-cast and access the data from class Base.
        Base base = (Base)object;
        System.out.println(base.data);
      
    
    }

}
