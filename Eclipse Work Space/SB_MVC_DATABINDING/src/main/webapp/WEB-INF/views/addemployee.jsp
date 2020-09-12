<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>

<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<style>
#container {
	width: 100%;
	height: 80%;
	display: flex;
	justify-content: center;
}

#child {
	border: 1px solid black;
	padding: 50px;
	padding-top: 2px;
	padding-bottom: 2px
}

#course {
	display: block;
}

.formpos {
	position: relative;
	width: 300px;
	color: red;
	text-align: left;
	margin-left: 20px
}
</style>
</head>

<body>
	<div id="container">
		<div id="child">
			<form:form method="post" action="/app/addemployee"
				modelAttribute="studentInfo">

				<!-- 
			modelAttribute
			=======================
			
			studentInfo is the alias name for the model object containing the sutdent object which is coming
			from the controller.
			
			In the controller we have configured @ModelAttribute("studentInfo) Student student
			
			which has basically created a model object of and embedded stdudent object inside it. We are using
			this alias name to fetch all the details of student object. All these details we can fetch using
			the path attribute.
			
           so using the path here we can transfer the object from ui to controller or controller to ui.			
			
			 -->
				<h3>Add Student</h3>

				<table border="0" cellpadding="7" cellspacing="1">
					<tr>
						<td>Name:</td>
						<td><form:input path="name"></form:input></td>
					</tr>
					<tr>
						<td>Gender</td>
						<td><label for="male">Male</label> <form:radiobutton
								path="gender" value="male"></form:radiobutton> <label
							for="female">Female</label> <form:radiobutton path="gender"
								value="female" /></td>
					</tr>
					<tr>
						<td>Age:</td>
						<td><form:input path="age" /></td>
						<td><form:errors path="age" cssClass="formpos"></form:errors>
					</tr>

					<tr>
						<td>Phone Number:</td>
						<td><form:input path="phoneNumber" /></td>
					</tr>
					<tr>
						<td>Email</td>
						<td><form:input path="email" /></td>
					</tr>
					<%-- <tr>
							<td>Courses</td>

							<td id="course">
								<form:checkbox path="courses" value="CoreJava" />CoreJava<br>
								<form:checkbox path="courses" value="Advanced Java" />Advanced Java<br>
								<form:checkbox path="courses" value="Spring" />Spring<br>
								<form:checkbox path="courses" value="Hibernate" />Hibernate<br>
								<form:checkbox path="courses" value="WebServices" />WebServices<br>
								<form:checkbox path="courses" value="HTML/CSS/JS" />HTML/CSS/JS<br>
							</td>

						</tr> --%>
					<tr>
						<td>AddressLine1</td>
						<td><form:input path="address.addressLine1" /></td>
					<tr>
					<tr>
						<td>AddressLine2</td>
						<td><form:input path="address.addressLine2" /></td>
					<tr>
					<tr>
						<td>AddressLine3</td>
						<td><form:input path="address.addressLine3" /></td>
					<tr>
					<tr>
						<td>State</td>
						<td><form:input path="address.state" /></td>
					<tr>
					<tr>
						<td>City</td>
						<td><form:input path="address.city" /></td>
					<tr>
					<tr>
						<td>ZipCode</td>
						<td><form:input path="address.pincode" />
					<tr>
						<td></td>
						<td rowspan="2"><input type="submit" value="Submit">
					</tr>

					<tr>
						<td><pre> </pre></td>
					</tr>

				</table>
			</form:form>
		</div>
	</div>
</body>

</html>