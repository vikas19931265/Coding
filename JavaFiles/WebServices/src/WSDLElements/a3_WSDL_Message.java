/*
WSDL Message
=============

The <message> element describes the data being exchanged between the web service providers and the consumers.

Each Web Service has two messages: input and output.

The input describes the parameters for the web service and the output describes the return data from the web service.

Each message contains zero or more <part> parameters, one for each parameter of the web service function.

Each <part> parameter associates with a concrete type defined in the <types> container element.


<message name = "SayHelloRequest">
   <part name = "firstName" type = "xsd:string"/>
</message>

<message name = "SayHelloResponse">
   <part name = "greeting" type = "xsd:string"/>
</message>

Here, two message elements are defined. The first represents a request message SayHelloRequest, and 
the second represents a response message SayHelloResponse.

*/
