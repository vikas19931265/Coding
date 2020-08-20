package com.logger;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

public class Logging {

	private static Logger logger= LogManager.getLogger(Logging.class);
	
	public static void main(String[] args) {
		
		//ALL >TRACE > DEBUGG > INFO > WARN > ERROR > FATAL>OFF 
		
		logger.trace("this is a trace log");
		logger.debug("this is a a debug log");
		logger.info("this is a logger message");
		logger.warn("this is warning message");
		logger.error("this is error message");
		logger.fatal("this is a fatal message");
		
		System.out.println("logger");
	}

}
