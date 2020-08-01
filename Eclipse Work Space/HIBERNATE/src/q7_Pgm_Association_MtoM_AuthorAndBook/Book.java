package q7_Pgm_Association_MtoM_AuthorAndBook;

import java.util.Set;

public class Book {

	private int id;
	private String bookName;
	private Set<Author> author;

	public Set<Author> getAuthor() {
		return author;
	}

	public void setAuthor(Set<Author> author) {
		this.author = author;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

}
