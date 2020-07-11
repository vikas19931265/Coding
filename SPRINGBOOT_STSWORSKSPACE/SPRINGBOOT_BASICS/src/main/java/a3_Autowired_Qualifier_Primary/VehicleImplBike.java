package a3_Autowired_Qualifier_Primary;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
@Qualifier("Bike")
class Bike implements Vehicle
{
	@Override
	public void behaviour() {
		System.out.println("I am riding bike");
	}
}