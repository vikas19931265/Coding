/*
Port type
============

The <portType> element combines multiple message elements to form a complete one-way or round-trip operation.

For example, a <portType> can combine one request and one response message into a single request/response operation. 
This is most commonly used in SOAP services. A portType can define multiple operations.

Let us take a piece of code from the WSDL Example chapter −

<portType name = "Hello_PortType">
   <operation name = "sayHello">
      <input message = "tns:SayHelloRequest"/>
      <output message = "tns:SayHelloResponse"/>
   </operation>
</portType>


*/