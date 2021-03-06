/*
User interface/forms design
===============================================================================

Main purpose of the user interface in web applications is ,

1. It is an entry point to the users in order to interact with the web applications.

2. It will provide very good environment to take data from the users in order to submit it
   it to the server side applications.

3. It will provide very good environment to perform client side data validations with java
   script functions.

4.  Data validation is checking the validity of the data before using the data in the applications
    logic. This process is called as data validation.

5.  There are two types of validations one is client side data validation and the other one is server
    side validation.

6. Client side validation is checking data at the client browser before sending data to server.

7. Server side validation is after submitting data to server and before using it in business logic
   performing validations are called as server side data validations.

8. To perform client side data validations we need java scrip functions like javascript.
   We will provide this in html forms only. Data will be first checked in the browser and 
  if its valid then only it will be send to the server.

9.  Server side validations will be done by the normal java code.

10. User interface will provide very good environment to specify different types of requests like GET, POST, HEAD, OPTIONS,……

11. It will improve look and fell of the application.

12. To prepare this layer we have to use presentation logic which will be prepared by using the technologies like html, jsp, velocity, freeemarker.


There are two types of user interfaces.

1. Informational user interface.
2. Form-based user interface.

Informational based user interfaces
================================================================================

It is a user interface , it will provide some information as a response like status of 
server side application execution like “login success”, login failure or displaying database tables etc.
These are non form based user interfaces.

Form based user interfaces
=================================================================================

It is a user interface, it will include user forms in order to collect data from the users. 
This form based user interface is mainly for collecting data from the user and submitting it to the server.


How many ways we are able to generate forms

In web applications, we are able to generate forms in the following ways.

1. static form generation
2. dynamic form generation

Static form generation

We will prepare a html file , will keep that file under the application folder of the web application 
and will access that html file from client , where server will send that html file as response as it is.

Form is generated from particular html file present at the server.

This user form is generated without performing any action at the server side. So 
this types of forms are called as static forms.

Example 

		http:// localhost:1010/logicapp/loginform.html

Dynamic Form Generation

We will prepare a servlet with form generation logic at the server machine , we willl access the servlet from the client where server will execute the servlet and it will generate a user form as the response to the client. So this type of forms are called as Dynamic forms. These kinds of forms are generated by server by executing a servlet. These cannot be accessed directly from the client.

  Example

			http://localhost:1010/reg_app/ get_update_Form

get_update form is url pattern for a particular servlet which will be executed and generate a form.


When form is generated at the client side , when we submit a request with data from user form to the 
server , at the server machine the user specified data will be stored in the Request object.

Whatever data we specified in our request form will be stored in the Request object.


For examle

We have a user form like loginform.html with username and password fields and login button.  At the server side we have a servlet called as LoginServlet.

We specify the username as abc and password as abc123.

When we click on login request goes to the servlet, two objects are created one is the request object and
the other one is response object.

Inside the request object three types of data will be stored.

1. Header data
2. parameters data
3. Attributes data

Header data is data about the client browser.

Parameters data is the data provided by the user that is username or password.

Attributes data is data present in form of key value pairs , provided by servlet at the 
execution data.

Whenever we execute servlet data will come from login servlet.

This data will be stored in the form of the key-value pairs


<input type=”text” name =”uname”/>

text is the key and uname is the value , this data will be sent to the request object.

For password

<input type=”text” name =”upwd”/>

upwd= abc123



If we want to get the particular request parameter based on the key we have to use the following
mwthod.

	Public String getParameter(String key);

Example

	String uname= request.getParameter(“uname”) // where uname is the key

If multiple values are associated with the single key and if we want to get that associated values in the 
form of an array we have to use the following method.


	Public String[] array getParameterValues(String key);
Example


	String[] uquals= request.getParameterValues(“uquls”);

In request object all parameters are present in the form of key value pairs.


If you want to get only keys but not the values then we can use the method.


Public Enumeration getparameterNames()


Header related data

to get value of particular header

	public String getHeader(String name)

	public Enumeration getHeaderNames();

If more then one value associated wtth headers

	public String[] getHeaders(String name)


Attributes data

Attributes data will be generated by execution of servlet and stored in request object



public void setAttribute(String key, Object value)

Want to get value of particular from request object

	public Object getAttribute(String key)

Want to remove an attribute key value pair from request object

	public void removeAttribute(String key)

I want to get all names of attributes from request objects.

	Public Enumeration getAttributeNames()


Programs for header


Showing headers information through the servlet.


if(userName.equalsIgnoreCase("vikas"))
        {
            
            if(userPassword.equals("gautam"))
            {
                
                out.println("Welcome" + userName);
                
            }
            
        
            else
            {
                
                out.println("Incorrect password");
            }
        
        
        }
        
        else
        {
            out.println("Access Denied...User not registered");
            
            
        }
        
        
        
    }
    
    
    

Firstly we are going to pre



*/