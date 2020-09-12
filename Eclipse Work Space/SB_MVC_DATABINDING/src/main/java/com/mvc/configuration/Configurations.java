package com.mvc.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.core.env.Environment;
import org.springframework.format.FormatterRegistry;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.mvc.formatter.PhoneFormatter;

@Configuration
public class Configurations implements WebMvcConfigurer {

	@Autowired
	Environment env;

	@Override
	public void addFormatters(FormatterRegistry registry) {

		registry.addFormatter(new PhoneFormatter());

	}

	/*
	 * This bean is to configure the message source that is from the file from which property key
	 * will be read.
	 * 
	 * So we need to configure bean of type message resouce and also create LocalValidatorFactoryBean object
	 * and set the validation message resource inside it.
	 * 
	 * please note that these method names are the default beans names which spring looks for so we have to 
	 * keep the same name only
	 * 
	 */
	
	@Bean
	public MessageSource messageSource() {

		ResourceBundleMessageSource resourceBundleMessageSource = new ResourceBundleMessageSource();
		resourceBundleMessageSource.setBasename("application");
		return resourceBundleMessageSource;

	}
	
	@Bean
	public LocalValidatorFactoryBean validator()
	{
		LocalValidatorFactoryBean localValidatorFactoryBean = new LocalValidatorFactoryBean();
		localValidatorFactoryBean.setValidationMessageSource(messageSource());
		
		return localValidatorFactoryBean;
		
	}
	

}
