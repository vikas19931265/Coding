package com.pgm.c2multipleconfigfile;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;



public class Test {
	
	public static void main(String[] args) {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("com/pgm/c2multipleconfigfile/application-context.xml");
		/*
		 * Here we defined all the xml in one common xml by importing
		 */
		
		LoginService loginSerice = context.getBean("loginService", LoginService.class);
		
		loginSerice.getLoginInfo();
		
	}

}

/*
 * 
 * Begin: getLoginInfo in service  called..
getLoginDetailsFromDB
End: getLoginInfo in service  called..
*/
