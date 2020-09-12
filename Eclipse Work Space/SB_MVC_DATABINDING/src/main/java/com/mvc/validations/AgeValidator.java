package com.mvc.validations;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class AgeValidator  implements ConstraintValidator<Age, Integer>{

	private int lower;
	private int upper;
	
	@Override
	public void initialize(Age age) {
				lower=age.lower();
				upper= age.upper();
	}
	
	@Override
	public boolean isValid(Integer age, ConstraintValidatorContext context) {
		
		if(age>=lower && age <=upper)
		{
			return true;
		}
		else return false;
	
	
	}



}
