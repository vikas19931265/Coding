<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h2>Student Details</h2>
	<form:form 
		modelAttribute="studentDetails">
		<table border="0" cellpadding="7" cellspacing="1">
			<tr>
				<td>Name</td>

				<td>${studentDetails.name}</td>
			</tr>
			<tr>
				<td>Gender</td>

				<td>${studentDetails.gender}</td>
			</tr>

			<tr>
				<td>Phone number</td>
				<td>${studentDetails.phonenumber}</td>
			</tr>

			<tr>
				<td>Email Address</td>

				<td>${studentDetails.email}</td>
			</tr>
			<tr>
				<td>Address</td>

				<td>${studentDetails.address}</td>
			</tr>

			<tr>
				<td>Course</td>

				<td><c:forEach var="value" items="${studentDetails.courses}">
					${value.courseName},
				</c:forEach></td>
			</tr>

			<tr>
				<td></td>
				<td>Student is searched successfully</td>
			</tr>
		</table>


	</form:form>


</body>
</html>