<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<style>
        #container {
            margin: 20px 20px 20px 20px;
        }

        a {
            display: block;


        }

        a {
            padding: 10px;
        }
    </style>

</head>

<body>
    <div id="container">
        <a href="addemployee">ADD STUDENT </a> 
        
        <!--  
        	This will addEmployee resouce in the current url.
        	so if url hit was http://localhost:8004/app/
        	once control comes here new url will become  http://localhost:8004/app/addemployee
			If instead we had put /addemployee, new url will become   http://localhost:8004/addemployee and we 
			will get 404 error.      	
        	
        
        
        
        -->
        
        
        <a href="#">UPDATE STUDENT </a>
        <a href="#">DELETE STUDENT </a>
        <a href="#">SEARCH STUDENT </a>

    </div>
</body>

</html>