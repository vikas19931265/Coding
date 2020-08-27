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
	<h2>Confirmation page</h2>
	<form:form method="get" action="/confirmation"
		modelAttribute="studentInfo">
		<table border="0" cellpadding="7" cellspacing="1">
			<tr>
				<td>Name</td>

				<td>${studentInfo.name}</td>
			</tr>
			<tr>
				<td>Gender</td>

				<td>${studentInfo.gender}</td>
			</tr>

			<tr>
				<td>Phone number</td>
				<td>${studentInfo.phonenumber}</td>
			</tr>

			<tr>
				<td>Email Address</td>

				<td>${studentInfo.email}</td>
			</tr>
			<tr>
				<td>Address</td>

				<td>${studentInfo.address}</td>
			</tr>

			<tr>
				<td>Course</td>

				<td><c:forEach var="value" items="${studentInfo.courses}">
					${value.courseName},
				</c:forEach></td>
			</tr>

			<tr>
				<td></td>
				<td>Student is added successfully</td>
			</tr>
		</table>


	</form:form>


</body>
</html>