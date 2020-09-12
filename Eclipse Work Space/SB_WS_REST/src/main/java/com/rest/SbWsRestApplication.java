package com.rest;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.annotations.Synchronize;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.rest.entity.Address;
import com.rest.entity.Student;

@SpringBootApplication(exclude = HibernateJpaAutoConfiguration.class)
@EnableTransactionManagement
public class SbWsRestApplication {

	public static void main(String[] args) {

		ApplicationContext context = SpringApplication.run(SbWsRestApplication.class, args);

		boolean testProgram = false;
		
		if (testProgram == true) {
			SessionManager manager = context.getBean(SessionManager.class);
			Session session = manager.operate();
			System.out.println("is the session open" + session.isOpen());
		}
	}

}
