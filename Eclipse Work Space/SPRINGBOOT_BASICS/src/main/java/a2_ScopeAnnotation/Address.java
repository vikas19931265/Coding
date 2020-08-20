package a2_ScopeAnnotation;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Address {
	private String address;
	private String state;

	public String getAddress() {
		return address;
	}

	@Value("kabilar street")
	public void setAddress(String address) {
		this.address = address;
	}

	public String getState() {
		return state;
	}

	@Value("Tamil nadu")
	public void setState(String state) {
		this.state = state;
	}
}
