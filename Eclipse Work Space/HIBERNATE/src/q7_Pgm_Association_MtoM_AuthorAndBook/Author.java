package q7_Pgm_Association_MtoM_AuthorAndBook;

import java.util.Set;

public class Author {

	private int id;
	private String authorName;
	private Set<Book> books;

	public int getId() {
		return id;
	}

	public Set<Book> getBooks() {
		return books;
	}

	public void setBooks(Set<Book> books) {
		this.books = books;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

}
