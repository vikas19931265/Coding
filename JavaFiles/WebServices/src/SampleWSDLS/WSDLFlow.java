/*

Port Type element
====================

<wsdl:portType name="CalculatorPortType">
        <wsdl:operation name="add">
            <wsdl:input message="ns:addRequest" wsaw:Action="urn:add" />
            <wsdl:output message="ns:addResponse" wsaw:Action="urn:addResponse" />
        </wsdl:operation>
    </wsdl:portType>


 Port type element basically is equivalent to method in java. So here above there is one method defined that is add method.
    
Now the added method can take number of arugments as input and return an argument as output. In wsdl a all such input parameters
are bundled into a single message that is input message and output message message. This the reason we can see only input message
and output message in line 7 and 8.

now each message is going to hold some parameter values. To check that we have to go to the messages tag.

Message
==============

 <wsdl:message name="addRequest">
        <wsdl:part name="parameters" element="ns:add" />
    </wsdl:message>
    <wsdl:message name="addResponse">
        <wsdl:part name="parameters" element="ns:addResponse" />
    </wsdl:message>

Now in the message tag for each of the message we are definining some parameters names so one is add and the other is addResponse.
In order to check that what are the type of input values held by the message we have to go to the type section.


Type
====================

wsdl:types>
        <xs:schema attributeFormDefault="qualified" elementFormDefault="qualified" targetNamespace="http://c.b.a">
            <xs:element name="add">
                <xs:complexType>
                    <xs:sequence>
                        <xs:element minOccurs="0" name="n1" type="xs:int" />
                        <xs:element minOccurs="0" name="n2" type="xs:int" />
                    </xs:sequence>
                </xs:complexType>
            </xs:element>
            <xs:element name="addResponse">
                <xs:complexType>
                    <xs:sequence>
                        <xs:element minOccurs="0" name="return" type="xs:int" />
                    </xs:sequence>
                </xs:complexType>
            </xs:element>
        </xs:schema>
    </wsdl:types>


In the wsdl type for each of the element that is message coming from message tag we are are defining the data types  used. 
So here in the above case there are two arguments accepted both are int type.

And the output returned is also of the int type.


Binding
==========

Binding is basically how a web service accepts these values. We can have binding of  HTTP which means that  web service
accepts soap requests over HTTP . There are different ways in which Web Services


Service
===========

The service itself is just a list of ports so this service . Here in example calculator  service defines a port 
which is the calculator  port which is available at this address. 

So the soap address is this one where the service is made available and the service has a port which follows this binding and the

What GlassFish or any other server  does is 

Whenever it  sees a class with the add web service annotation it's going to create a web service and a port. Each port will define 
bindings which tell you know how the web service is gonna get called 

So all the methods which have been annotated it's gonna create operations for them . So a port consists of operations 
 
** So we have service with port. Port defines bindings and the binding points to a port type which has 
operations .Each operation has input and output message. Each message refers to types and the types 
are defined in its own section


*/