package com.mvc.formatter;
import java.text.ParseException;
import java.util.Locale;

import org.springframework.format.Formatter;

import com.mvc.dto.CoursesDTO;
import com.mvc.entity.Courses;


public class CourseFormatter implements Formatter<CoursesDTO> {

	@Override
	public String print(CoursesDTO object, Locale locale) {
			System.out.println("control in print");
		
		return null;
	}

	
	
	@Override
	public CoursesDTO parse(String text, Locale locale) throws ParseException {
		
		System.out.println("control in parse" + text);
		return null;
	}


}
