/*
 To develop the spring application take following steps
 ============================================================

To develop spring application we have to develop following resources.

1.Hello.java (Interface)
2.HelloBean.java (Class)
3.hello.xml (spring config file)
4.HelloClient.java (Spring Client Appl.)
 
 */

package com.pgm.setterInjection.stringSetter;

public class HelloBean implements Hello {

	String message;

	// Default constructor is needed by spring for setter injection
	public HelloBean() {
		System.out.println("Default constructor is called");
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String sayHello() {
		return message;
	}
}

