package s3_Annotation_Inheritance_TablePerHierarchy;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue(value="SeniorStudent")
public class SeniorStudent extends Student{

private String stream;

public String getStream() {
	return stream;
}

public void setStream(String stream) {
	this.stream = stream;
}


}
