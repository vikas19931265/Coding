/*
SOAP binding
================

The <binding> element provides specific details on how a portType operation will actually be transmitted over the wire.

The bindings can be made available via multiple transports including HTTP GET, HTTP POST, or SOAP.

The bindings provide concrete information on what protocol is being used to transfer portType operations.

The bindings provide information where the service is located.

For SOAP protocol, the binding is <soap:binding>, and the transport is SOAP messages on top of HTTP protocol.

You can specify multiple bindings for a single portType.

The binding element has two attributes : name and type attribute.

<binding name = "Hello_Binding" type = "tns:Hello_PortType">



*/