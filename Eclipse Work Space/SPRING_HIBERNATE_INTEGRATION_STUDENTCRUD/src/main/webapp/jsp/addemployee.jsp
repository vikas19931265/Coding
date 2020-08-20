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
			height:80%;
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
	</style>
</head>

<body>
	<div id="container">
		<div id="child">
			<form:form method="post" action="/app/addemployee" modelAttribute="studentInfo">
				<h3>Add Student</h3>
					 
					<table border="0" cellpadding="7" cellspacing="1">
						<tr>
							<td>Name:</td>
							<td>
								<form:input path="name"></form:input>
							</td>
						</tr>
						<tr>
							<td>Gender</td>
							<td><label for="male">Male</label>
								<form:radiobutton path="gender" value="male"></form:radiobutton> <label
									for="female">Female</label>
								<form:radiobutton path="gender" value="female" />
							</td>
						</tr>
						<tr>
							<td>Phone Number:</td>
							<td>
								<form:input path="phonenumber" />
							</td>
						</tr>
						<tr>
							<td>Email</td>
							<td>
								<form:input path="email" />
							</td>
						</tr>
						<tr>
							<td>Address</td>
							<td>
								<form:textarea path="address" cols="20" rows="5" />
							</td>
						<tr>
							<td>Courses</td>

							<td id="course">
								<form:checkbox path="course" value="CoreJava" />CoreJava<br>
								<form:checkbox path="course" value="Advanced Java" />Advanced Java<br>
								<form:checkbox path="course" value="Spring" />Spring<br>
								<form:checkbox path="course" value="Hibernate" />Hibernate<br>
								<form:checkbox path="course" value="WebServices" />WebServices<br>
								<form:checkbox path="course" value="HTML/CSS/JS" />HTML/CSS/JS<br>
							</td>

						</tr>
						<tr>
							<td></td>
							<td rowspan="2"><input type="submit" value="Submit">
						</tr>

						<tr>
							<td>
								<pre> </pre>
							</td>
						</tr>

					</table>
			</form:form>
		</div>
	</div>
</body>

</html>