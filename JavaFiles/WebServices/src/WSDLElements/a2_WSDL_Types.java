/*
WSDL Types
=============

A web service needs to define its inputs and outputs and how they are mapped into and out of the services. 
WSDL <types> element takes care of defining the data types that are used by the web service. 

Types are XML documents, or document parts.

Here is a piece of code taken from W3C specification. This code depicts how a types element can be used within a WSDL.

<types>
   <schema targetNamespace = "http://example.com/stockquote.xsd"
      xmlns = "http://www.w3.org/2000/10/XMLSchema">
		
      <element name = "TradePriceRequest">
         <complexType>
            <all>
               <element name = "tickerSymbol" type = "string"/>
            </all>
         </complexType>
      </element>
		
      <element name = "TradePrice">
         <complexType>
            <all>
               <element name = "price" type = "float"/>
            </all>
         </complexType>
      </element>
		
   </schema>
</types>

Data types address the problem of identifing the data types and the formats you intend to use with your web services.
Type information is shared between the sender and the receiver. 

The recipients of messages therefore need access to the information you used to encode your data and must understand how
to decode the data

*/