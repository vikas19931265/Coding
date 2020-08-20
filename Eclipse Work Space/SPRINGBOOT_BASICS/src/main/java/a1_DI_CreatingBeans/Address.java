package a1_DI_CreatingBeans;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component("AddressBean") //we are giving id of the bean AddressBean as we did in xml.
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
