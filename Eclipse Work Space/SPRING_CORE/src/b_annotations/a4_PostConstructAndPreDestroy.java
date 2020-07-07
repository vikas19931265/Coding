/*
Working with  @PostConstruct And @PreDestroy
-----------------------------------------------------
you can use either implements InitializingBean and DisposableBean interface or specify the init-method and 
destroy-method in bean configuration file for the initialization and destruction callback function. 

But instead of using above approaches we can use annotations also.
 
i.e @PostConstruct and @PreDestroy 

Note
The @PostConstruct and @PreDestroy annotation are not belongs to Spring, it’s located in the J2ee javax.annotation-3.1.jar.

Ex:
import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

public class HelloBean {
private String message;
//setters and getters
	
@PostConstruct
public void myInit() {
System.out.println("myInit");
}
         
@PreDestroy
public void myDestroy() {
System.out.println("myDestroy");
  }
}
xml
---
similar to old application.

output
------
default constructor
setter called
myInit called
helloworld.... // ready to use
myDestory called

*/