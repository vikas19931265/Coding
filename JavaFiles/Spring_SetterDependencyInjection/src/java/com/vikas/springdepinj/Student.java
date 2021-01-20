
package com.vikas.springdepinj;


public class Student {
    
String name;

    
        /*
            It is mandatary to have a no argument constructor in the program. This is because
            spring is going to create the object of this class and for that it needs the default
            constructor otherwise we will get the run time excepion saying

            Exception in thread "main" org.springframework.beans.factory.BeanCreationException:
            Error creating bean with name 'studentbean' defined in class path resource 
            [com/vikas/springdepinj/applicationContext.xml]: Instantiation of bean failed; 
            nested exception is org.springframework.beans.BeanInstantiationException: Could not 
            instantiate bean class [com.vikas.springdepinj.Student]: No default constructor found; 
            nested exception is java.lang.NoSuchMethodException: com.vikas.springdepinj.Student.<init>()
            
                Student(int i)
            {
        
            }

        */




    public String getName() {
        return name;
    }

   
     public void setName(String name) {
        this.name = name;
    } 

    /*
        If we dont provide setter method here then we will get run time exception
        Exception in thread "main" org.springframework.beans.factory.BeanCreationException: 
        Error creating bean with name 'studentbean' defined in class path resource 
        [com/vikas/springdepinj/applicationContext.xml]: Error setting property values; 
        nested exception is org.springframework.beans.NotWritablePropertyException: Invalid property 'name'
        of bean class [com.vikas.springdepinj.Student]: Bean property 'name' is not writable or has an 
        invalid setter method. Does the parameter type of the setter match the return type of the getter.
    */
    
    
    
    
    
}
