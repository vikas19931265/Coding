package q4_Pgm_Association_OneToMany_QuesAnswer;
import java.util.*;

public class Question {

private int id;
private String question;

private List<Answers> answers;

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getQuestion() {
	return question;
}

public void setQuestion(String question) {
	this.question = question;
}

public List<Answers> getAnswers() {
	return answers;
}

public void setAnswers(List<Answers> answers) {
	this.answers = answers;
}



}
