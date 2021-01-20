package com.vikas.springdepinj;



import org.springframework.beans.factory.BeanFactory;  
import org.springframework.beans.factory.xml.XmlBeanFactory;  
import org.springframework.core.io.ClassPathResource;  
import org.springframework.core.io.Resource;  
  
public class Test
{  
	public static void main(String[] args) {  
    
	Resource resource=new ClassPathResource("com/vikas/springdepinj/applicationContext.xml");  
    
            /*
        
            Here firstly we created the object of the ClassPathResouce by loading the xml file.
            Now resouce which is interface points to object which contains out xml file.
            This xml file has to provided to parameter while creating object for the XmlBeanFactory.
        
            From the factory method we can get the bean that is class by providing bean id as the
            parameter.
        
        
            */
        
        
	BeanFactory factory=new XmlBeanFactory(resource);  
      
        Student student=(Student)factory.getBean("studentbean");  
    
	System.out.println(" "+student.getName()); 
	
	
	
	}  

}  


/*
run:
log4j:WARN No appenders could be found for logger (org.springframework.beans.factory.xml.XmlBeanDefinitionReader).
log4j:WARN Please initialize the log4j system properly.
 Vikas Gautam
BUILD SUCCESSFUL (total time: 0 seconds)


*/