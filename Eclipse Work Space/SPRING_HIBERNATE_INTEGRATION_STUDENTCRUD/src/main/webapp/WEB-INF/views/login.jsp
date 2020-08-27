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
	text-align: center;
}

input {
	margin-left: 1em;
	margin-bottom: 0.5em;
}

.errors {
	color: red;
}

.formpos
{

	position: fixed;
	width: 300px;
	color: red;
	text-align: left;
	margin-left: 20px
	
}
</style>
</head>
<body>

	<form:form  action="/app/home" modelAttribute="studentLogin">
		<div id="container">
			<h1>Student Login</h1>

			<div>
				Username
				<form:input  path="username"/>
				<form:errors path="username" cssClass="formpos"></form:errors>
			</div>
			<div>
				Password
				<form:password  path="password" />
			</div>
		
			<input type="submit" value="submit">
		
		</div>
	</form:form>



</body>
</html>