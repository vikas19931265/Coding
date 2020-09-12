package com.mvc.validations;

import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Documented
@Retention(RUNTIME)
@Target({ElementType.METHOD,ElementType.FIELD})
@Constraint(validatedBy = AgeValidator.class)


public @interface Age {

	String message() default  "{mvc.age.limit}";
	
	int lower() default 18;
	
	int upper() default 60;

	Class<?>[] groups() default { };

	Class<? extends Payload>[] payload() default { };

	

}
