package a7_ConfigurationAndBean;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

public class Address {

	@Value("uttar pradesh")
	private String state;

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

}
