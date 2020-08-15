package com.integration.configuration;

import java.util.Properties;

import javax.sql.DataSource;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

@Configuration
@PropertySource(value = {"classpath:application.properties"})
@EnableTransactionManagement
public class Configure {

	@Autowired
	private Environment enviornment;
	
	
	@Bean(name="sessionFactory")
	@Autowired
	public LocalSessionFactoryBean getSessionFactory()
	{
		LocalSessionFactoryBean sessionFactory= new LocalSessionFactoryBean();
		sessionFactory.setDataSource(getDataSource());
		sessionFactory.setHibernateProperties(getProperties());
		sessionFactory.setPackagesToScan(new String[] {"com.integration.model"} );
		System.out.println(sessionFactory.hashCode());
		return sessionFactory;
	}


	@Bean(name="dataSource")
	public DataSource getDataSource()
	{
		DriverManagerDataSource datasource = new DriverManagerDataSource();
		datasource.setDriverClassName(enviornment.getRequiredProperty("jdbc.driverClassName"));
		datasource.setUrl(enviornment.getRequiredProperty("jdbc.url"));
		datasource.setUsername(enviornment.getRequiredProperty("jdbc.username"));
		datasource.setPassword(enviornment.getRequiredProperty("jdbc.password"));
		return datasource;
	}
	
	public Properties getProperties()
	{
		Properties property = new Properties();
		property.put("hibernate.dialect",enviornment.getRequiredProperty("hibernate.dialect"));
		property.put("hibernate.show_sql",enviornment.getRequiredProperty("hibernate.show_sql"));
		property.put("hibernate.format_sql",enviornment.getRequiredProperty("hibernate.format_sql"));
		property.put("hibernate.hbm2ddl.auto",enviornment.getRequiredProperty("hibernate.hbm2ddl.auto"));
		
		return property;
	}
	@Bean
	public HibernateTransactionManager transactionManager(SessionFactory s) {
		System.out.println("session factory transaction manager is called ");
		System.out.println(s.hashCode());
		HibernateTransactionManager txManager = new HibernateTransactionManager();
		txManager.setSessionFactory(s);
		return txManager;
	}
	
	
	


}
