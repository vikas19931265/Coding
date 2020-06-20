package com.vikas.xmlparser.dto;

import java.io.IOException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import com.vikas.xmlparsers.dto.Address;
import com.vikas.xmlparsers.dto.DriversLicense;

public class DOMParser {

	public static void main(String[] args) throws ParserConfigurationException, SAXException, IOException  {

	   DocumentBuilderFactory factory=  DocumentBuilderFactory.newInstance();
	   DocumentBuilder documentBuilder=factory.newDocumentBuilder();
	   Document document= documentBuilder.parse(ClassLoader.getSystemResourceAsStream("xml/DriversLicense.xml"));
	   
	   NodeList list=document.getElementsByTagName("Number");
	   Node numberItem=list.item(0);
	   DriversLicense license= new DriversLicense();
	   license.setNumber(Long.parseLong(numberItem.getTextContent()));
	  
	   NodeList firstName=document.getElementsByTagName("FirstName");
	   Node firstNameItem=firstName.item(0);
	   license.setFirstName(firstNameItem.getTextContent());
	   
	   NodeList lastName=document.getElementsByTagName("LastName");
	   Node lastNameItem=lastName.item(0);
	   license.setLastName(lastNameItem.getTextContent());
	   
	   // getting the attribute names
	   
	   Element documentElement = document.getDocumentElement();
	   String status = documentElement.getAttribute("status");
	   license.setStatus(status);
	   // or if we  have more then on status then use below
	   NamedNodeMap attributes = documentElement.getAttributes();
	   Node namedItem = attributes.getNamedItem("status");
	   
	   System.out.println("mulitple status access "+ namedItem.getTextContent());
	   
	   // accessing the address
	   	
	   	NodeList addressItems = document.getElementsByTagName("Address");
	    Node address = addressItems.item(0);
	    NodeList addressChilds = address.getChildNodes();
	    Address addr = new Address();
	    for(int i =0; i< addressChilds.getLength(); i++)
	    {
	    	 Node item = addressChilds.item(i);
	    	 if(item instanceof Element)
	    	 {
	    		 switch(item.getNodeName())
	    		 {
	    		 case "street" : addr.setStreet(item.getTextContent());
	    		 break;
	    		 case "state" : addr.setState(item.getTextContent());
	    		 break;
	    		 case "city" : addr.setCity(item.getTextContent());
	    		 break;
	    		 case "country" : addr.setCountry(item.getTextContent());
	    		 break;
	    		 case "zipcode" : addr.setZipcode(item.getTextContent());
	    		 break;
	    		 }
	    	 }
	    }
	   license.setAddress(addr);
	   System.out.println(license.getNumber());
	   System.out.println(license.getFirstName());
	   System.out.println(license.getLastName());
	   System.out.println(license.getStatus());
	   
	   System.out.println(license.getAddress().getCity());
	   System.out.println(license.getAddress().getState());
	   System.out.println(license.getAddress().getCountry());
	   System.out.println(license.getAddress().getZipcode());
	   System.out.println(license.getAddress().getStreet());
	   
	}

}
