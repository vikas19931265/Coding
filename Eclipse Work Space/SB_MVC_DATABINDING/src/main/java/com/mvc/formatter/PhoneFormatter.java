package com.mvc.formatter;
import java.text.ParseException;
import java.util.Locale;

import org.springframework.format.Formatter;

import com.mvc.dto.Phone;

/*
 * This class is needed to format the phone data coming in the form of the string
 * to the phone object. This is because in the database we want to store the phone data
 * in the form of the object and not in the form of the string.
 * 
 * 
 * 
 */

public class PhoneFormatter implements Formatter<Phone>
{

	@Override
	public String print(Phone phone, Locale locale) {
		return phone.getCode() +  phone.getNumber();
		
		/*
		 * This is needed so that when that we can print the value of the data binded object on the 
		 * screen.
		 * 
		 * Here in databinding first we get the phone number from the user in the form of the string
		 * and then convert it to the phone object. Now we have to return the same phone object but
		 * on screen everything is in the form of the string and hence we have to convert this object
		 * to the string.
		 * 
		 * 
		 */
					
	}

	@Override
	public Phone parse(String text, Locale locale) throws ParseException {
		
		String phoneNumber= text;
		String code	=phoneNumber.substring(0,2);
		String number= phoneNumber.substring(2,(phoneNumber.length()));
		Phone phone= new Phone();
		phone.setCode(code);
		phone.setNumber(number);
		return phone;
		
	}
	
}