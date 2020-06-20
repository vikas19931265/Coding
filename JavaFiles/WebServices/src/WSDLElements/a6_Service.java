/*
Service element
=================

The <service> element defines the ports supported by the web service.

For each of the supported protocols, there is one port element. The service element is a collection of ports.

Web service clients can learn the following from the service element −

where to access the service,
through which port to access the web service, and
how the communication messages are defined.
The service element includes a documentation element to provide human-readable documentation.

Here is a piece of code from the Example chapter −

<service name = "Hello_Service">
   <documentation>WSDL File for HelloService</documentation>
   <port binding = "tns:Hello_Binding" name = "Hello_Port">
      <soap:address
         location = "http://www.examples.com/SayHello/">
   </port>
</service>


*/