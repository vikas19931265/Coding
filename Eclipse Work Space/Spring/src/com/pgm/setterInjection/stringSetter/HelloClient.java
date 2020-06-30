package com.pgm.setterInjection.stringSetter;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

//client application
class HelloClient {
	public static void main(String[] args) {

		// METHOD 1

		/*
		 * FileSystemResource resource = new FileSystemResource("Hello.xml");
		 * System.out.println("control reached here"); BeanFactory factory = new
		 * XmlBeanFactory(resource);
		 */

		// METHOD 2

		ApplicationContext context = new ClassPathXmlApplicationContext("com/pgm/setterInjection/stringSetter/Hello.xml");
		HelloBean bean = (HelloBean) context.getBean("HelloBean");
		/*
		 * 			another way( mostly used)
		 *  HelloBean bean1=(HelloBean)context.getBean("HelloBean",HelloBean.class); */
		System.out.println(bean.getMessage());

	}
}