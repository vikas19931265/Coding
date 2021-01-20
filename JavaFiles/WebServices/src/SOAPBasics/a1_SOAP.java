package SOAPBasics;
/*
SOAP
===========

SOAP:

1) SOAP stands for Simple Object Access Protocol. It is a specification from W3C the World Wide Web Consortium.
The current version of SOAP is 1.2. A specification usually is a set of rules in case of soap.

2) These rules come in form of a XML document . W3C defines all these elements that we can use to send out 
Web services requests and receive the responses back.

3) The soap envelope is the root element in the soap namespace.SOAP header one of its child element is 
used to send Meta information.The body is where the entire payload or the webservices request will go in.
And even the response payload that comes back from the webservice provider comes back in this body.

4) For example, let's say we are developing a railway ticket reservation system and we are allowing our customers to
 make a credit card payment to purchase their tickets.Now our application needs to integrate it the bank to
  process this payment banks payment gateway, a bank Exposes out, let's assume that the bank Exposes 
  out a web service which will accept credit card information from our application and written back a response of success or not.

5) This is how the soap request will look like the soap body will have all the credit card information which 
our application will send to the bank a payment gateway and we'll get a response back which will have the
 success or failure.In case that credit card expires or some other fault or exception occurs

6) We can use the Soap fault element which is an optional element.which is the child element of the soap body 
and we can send the error information back to the user or the application that is consuming the webservice. 
The soap fault has multiple child elements.

7) The soap code which tells the error was on the client side or on the server side.There are multiple soap codes
 you can look up.The reason tells exactly what the problem was, in this case showing that the card has expired.

8) When we throw exception, As a webservice  provider,when we throw exception either it's in Java or dotnet 
those are exceptions by default will be converted into soap fault and sent back to the client by webservices 
stacks like Apache CXF, web logic, websphere. The last important element is the soap header.

9) The soap header is not used to send the payload information or the request and response but it is usually used
 to send meta formation and it is used by all the Web services standards or most of the webservices standards.

10) For example, here you see the security header which allows us to pass the username and password in a standard
 fashion.This is a part of the username token profile standard which is webservice standard, without this 
 standard or without this header We don't know where to put this username and password. 
 
 Lets say we are integrating it with a 

11) Dotnet application if we didnt have this standard the dotnet application doesn't know whether it should put the 
username or token in the header or what names it should use etc.Now with these Meta information, we can simply focus on 
developing our business logic and out of box will get the implementation for all these standards.


SOAP structure
=================

<soap:Envelope>
	<soap:Header/>
	   <soap:Body>
	   		Credit card..
	   </soap:Body>
</soap:Envelope>


SOAP BODY
============

<soap:BODY>
	<soap:Fault>
	<soap:code>soap:Server</soap:code>
	<soap:Reason>
		<soap:text>
			Credit card expired
		</soap:text>
	</soap:Reason>	
	</soap:Fault>
</soap:BODY>

SOAP HEADER
==============

<soap:HEADER>
<wsse:Security>
 <wsse:UsernameToken>
 	<wsse:Username>.
 	<wsse:Password>.
 </wsse:UsernameToken>
 </wsse:Security>
 </soap:HEADER>	
*/