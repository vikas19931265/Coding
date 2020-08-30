package com.mvc.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.mvc.formatter.CourseFormatter;

@Configuration
public class Configurations implements WebMvcConfigurer {

	@Override
	public void addFormatters(FormatterRegistry registry) {
		
		registry.addFormatter(new CourseFormatter());
	
	}

}
