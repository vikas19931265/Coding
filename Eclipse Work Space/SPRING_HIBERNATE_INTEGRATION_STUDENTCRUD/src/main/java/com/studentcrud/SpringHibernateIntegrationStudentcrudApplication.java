package com.studentcrud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;

/**
 * @author Vikas.Gautam
 *
 */
@SpringBootApplication(exclude = HibernateJpaAutoConfiguration.class)

/*
 * Combination of 3 annotations
 * 
 * 	@EnableAutoConfiguration
	@Configuration
	@ComponentScan 
 * 
 * Here component scan default baspackage is the current package so here it is (com.studentcrud)
 * 
 */

public class SpringHibernateIntegrationStudentcrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringHibernateIntegrationStudentcrudApplication.class, args);
	}

}
