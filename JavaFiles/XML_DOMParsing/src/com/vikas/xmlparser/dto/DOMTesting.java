package com.vikas.xmlparser.dto;

import java.io.File;
import java.io.IOException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.xml.sax.SAXException;

import java.io.StringWriter;
import java.util.ArrayList;
import java.util.List;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

class DOMTesting {

    public static void main(String[] args) throws ParserConfigurationException, SAXException, IOException, TransformerConfigurationException, TransformerException {

        DocumentBuilderFactory domFact = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = domFact.newDocumentBuilder();
        
        File file = new File("C:\\test\\test.xml");
        Document doc = builder.parse(file);
        System.out.println(doc);
        
        
         Node caseHeader = doc.getElementsByTagName("CaseHeader").item(0);
         System.out.println(doc.getElementsByTagName("CaseHeader").item(0));
        // =========== to add source node in the payload=============

        if (doc.getElementsByTagName("source").getLength() < 1) {
            Element element = doc.createElement("source");
            element.appendChild(doc.createTextNode("CPL"));
            caseHeader.appendChild(element);
        }

        // ============to add ChallengeClaimId to the payload=====================
        if (doc.getElementsByTagName("ChallengeClaimID").getLength() < 1) {
            Element ChallengeClaimId = doc.createElement("ChallengeClaimID");
            ChallengeClaimId.appendChild(doc.createTextNode(" "));
            caseHeader.insertBefore(ChallengeClaimId, doc.getElementsByTagName("CaseId").item(0));
        }

        // ================ to remove picas indicator ==========================
        if (doc.getElementsByTagName("PicasIndicator").getLength() >= 1) {
            Element picasInd = (Element) doc.getElementsByTagName("PicasIndicator").item(0);
            picasInd.getParentNode().removeChild(picasInd);
            
        }

        //  ================= to remove picas decline reason ==========================
        if (doc.getElementsByTagName("PicasDeclineReason").getLength() >= 1) {
            Element picasDec = (Element) doc.getElementsByTagName("PicasDeclineReason").item(0);
            picasDec.getParentNode().removeChild(picasDec);
        }

        // ========if claimants representative is there then replace it with claimant representative====== 
        if (doc.getElementsByTagName("ClaimantRepresentative").getLength() >= 1) {
            Node ClaimantRepresentative = doc.getElementsByTagName("ClaimantRepresentative").item(0);
            doc.renameNode(ClaimantRepresentative, null, "ClaimantsRepresentative");
        }
        
        // to replace claimantdetail with claimants detail
        
        // ========if claimants representative is there then replace it with claimant representative====== 
        if (doc.getElementsByTagName("ClaimantsDetails").getLength() >= 1) {
            Node ClaimantRepresentative = doc.getElementsByTagName("ClaimantsDetails").item(0);
            doc.renameNode(ClaimantRepresentative, null, "ClaimantDetails");
        }
        
        // Reasonforempty ni number case issue
        
        if (doc.getElementsByTagName("ReasonForEmptyNINumber").getLength() >= 1) {
            Node ReasonforEmptyNINumber = doc.getElementsByTagName("ReasonForEmptyNINumber").item(0);
            doc.renameNode(ReasonforEmptyNINumber, null, "ReasonforEmptyNINumber");
        }


        // Defendant Name address , add more details : ( here we are checking the type)
        if (doc.getElementsByTagName("DefendantNameAddress").getLength() >= 1) {
            List elements= new ArrayList<String>();
            NodeList flowList = doc.getElementsByTagName("DefendantNameAddress");
            for (int i = 0; i < flowList.getLength(); i++) {
                NodeList childList = flowList.item(i).getChildNodes();
                for (int j = 0; j < childList.getLength(); j++) {
                    Node childNode = childList.item(j);
                    elements.add(childNode.getNodeName());
                }
                System.out.println(elements);
            
            }
            if(!elements.contains("TelephoneNumber"))
            {
                Element telephoneNumber= doc.createElement("TelephoneNumber");
                telephoneNumber.setAttribute("xsi:nil", "true");
                doc.getElementsByTagName("DefendantNameAddress").item(0).appendChild(telephoneNumber);
            }
            if(!elements.contains("Reference"))
            {
                Element reference= doc.createElement("Reference");
                reference.setAttribute("xsi:nil", "true");
                doc.getElementsByTagName("DefendantNameAddress").item(0).appendChild(reference);
            }
            if(!elements.contains("Email"))
            {
                Element email= doc.createElement("Email");
                email.setAttribute("xsi:nil", "true");
                doc.getElementsByTagName("DefendantNameAddress").item(0).appendChild(email);
            }
        
        }
        
        // claimant name address
        
        if (doc.getElementsByTagName("ClaimantNameAddress").getLength() >= 1) {
            List elements= new ArrayList<String>();
            NodeList flowList = doc.getElementsByTagName("ClaimantNameAddress");
            for (int i = 0; i < flowList.getLength(); i++) {
                NodeList childList = flowList.item(i).getChildNodes();
                for (int j = 0; j < childList.getLength(); j++) {
                    Node childNode = childList.item(j);
                    elements.add(childNode.getNodeName());
                }
                System.out.println(elements);
            
            }
            if(!elements.contains("TelephoneNumber"))
            {
                Element telephoneNumber= doc.createElement("TelephoneNumber");
                telephoneNumber.setAttribute("xsi:nil", "true");
                doc.getElementsByTagName("DefendantNameAddress").item(0).appendChild(telephoneNumber);
            }
            if(!elements.contains("Reference"))
            {
                Element reference= doc.createElement("Reference");
                reference.setAttribute("xsi:nil", "true");
                doc.getElementsByTagName("DefendantNameAddress").item(0).appendChild(reference);
            }
            if(!elements.contains("Email"))
            {
                Element email= doc.createElement("Email");
                email.setAttribute("xsi:nil", "true");
                doc.getElementsByTagName("DefendantNameAddress").item(0).appendChild(email);
            }
        
        }
        
        // AskCuePIReference
        
         if (doc.getElementsByTagName("AskCuePiReference").getLength() < 1) {
              Element AskCuePiReference= doc.createElement("AskCuePiReference");
              AskCuePiReference.setAttribute("xsi:nil", "true");
              Node ClaimantDetails = doc.getElementsByTagName("ClaimantDetails").item(0);
              ClaimantDetails.appendChild(AskCuePiReference);
         }
         
         // Injury Classification
         
         if (doc.getElementsByTagName("InjuryClassification").getLength() < 1) {
            Element injuryClassification = doc.createElement("InjuryClassification");
            injuryClassification.setAttribute("xsi:nil", "true");
            Node injury = doc.getElementsByTagName("Injury").item(0);
            injury.appendChild(injuryClassification);
        }
         
         // Exception details
         
         if (doc.getElementsByTagName("ExceptionalDetails").getLength() < 1) {
            Element ExceptionalDetails = doc.createElement("ExceptionalDetails");
            ExceptionalDetails.setAttribute("xsi:nil", "true");
            Node injury = doc.getElementsByTagName("Injury").item(0);
            injury.appendChild(ExceptionalDetails);
        }
         
         // Structural change for medical attention
         
          if (doc.getElementsByTagName("MedicalAttention").getLength() >= 1) {
            Element hospitalsAttended = null;
            boolean status= false;
            NodeList flowList = doc.getElementsByTagName("MedicalAttention");
            for (int i = 0; i < flowList.getLength(); i++) {
                NodeList childList = flowList.item(i).getChildNodes();
                for (int j = 0; j < childList.getLength(); j++) {
                    Node childNode = childList.item(j);
                    if(childNode.getNodeName().equals("HospitalsAttended"))
                    {
                         hospitalsAttended= (Element)childNode;
                         hospitalsAttended.getParentNode().removeChild(hospitalsAttended);
                         doc.getElementsByTagName("InjuryAndMedicalDetails").item(0).appendChild(hospitalsAttended);
                         status=true;
                         break;
                    }
                    
                }
            if(status)
            {
                break;
            }
            }
          }
          // The driver case issue
          
          if (doc.getElementsByTagName("AtAccidentClaimantWas").getLength() >= 1) {
            String AtAccidentClaimantWas = doc.getElementsByTagName("AtAccidentClaimantWas").item(0).getTextContent();
            if(AtAccidentClaimantWas.equals("The Driver"))
            {
               doc.getElementsByTagName("AtAccidentClaimantWas").item(0).setTextContent("The driver");
            }
        }
          
        // remove if driver id defendant is present  
        
        if (doc.getElementsByTagName("DriverIsDefendant").getLength() >= 1) {
            Element DriverIsDefendant = (Element) doc.getElementsByTagName("DriverIsDefendant").item(0);
            DriverIsDefendant.getParentNode().removeChild(DriverIsDefendant);
        }
        
        // Claimant Wearing Seatbelt fix
        
        if (doc.getElementsByTagName("ClaimantWearingSeatbelt").getLength() >= 1) {
            String AtAccidentClaimantWas = doc.getElementsByTagName("ClaimantWearingSeatbelt").item(0).getTextContent();
            if(AtAccidentClaimantWas.equals("Seatbelt not supplied"))
            {
               doc.getElementsByTagName("ClaimantWearingSeatbelt").item(0).setTextContent("Not supplied");
            }
            
        }
        
        // Claimant Driver Name address
        
        if (doc.getElementsByTagName("ClaimantsDriverNameAddress").getLength() >= 1) {
            List elements= new ArrayList<String>();
            NodeList flowList = doc.getElementsByTagName("ClaimantsDriverNameAddress");
            for (int i = 0; i < flowList.getLength(); i++) {
                NodeList childList = flowList.item(i).getChildNodes();
                for (int j = 0; j < childList.getLength(); j++) {
                    Node childNode = childList.item(j);
                    elements.add(childNode.getNodeName());
                }
                System.out.println(elements);
            
            }
            if(!elements.contains("TelephoneNumber"))
            {
                Element telephoneNumber= doc.createElement("TelephoneNumber");
                telephoneNumber.setAttribute("xsi:nil", "true");
                doc.getElementsByTagName("ClaimantsDriverNameAddress").item(0).appendChild(telephoneNumber);
            }
            if(!elements.contains("Reference"))
            {
                Element reference= doc.createElement("Reference");
                reference.setAttribute("xsi:nil", "true");
                doc.getElementsByTagName("ClaimantsDriverNameAddress").item(0).appendChild(reference);
            }
            if(!elements.contains("Email"))
            {
                Element email= doc.createElement("Email");
                email.setAttribute("xsi:nil", "true");
                doc.getElementsByTagName("ClaimantsDriverNameAddress").item(0).appendChild(email);
            }
        
        }
        
        // Claimant Owner Name address
        
        if (doc.getElementsByTagName("ClaimantsOwnerNameAddress").getLength() >= 1) {
            List elements= new ArrayList<String>();
            NodeList flowList = doc.getElementsByTagName("ClaimantsOwnerNameAddress");
            for (int i = 0; i < flowList.getLength(); i++) {
                NodeList childList = flowList.item(i).getChildNodes();
                for (int j = 0; j < childList.getLength(); j++) {
                    Node childNode = childList.item(j);
                    elements.add(childNode.getNodeName());
                }
                System.out.println(elements);
            
            }
            if(!elements.contains("TelephoneNumber"))
            {
                Element telephoneNumber= doc.createElement("TelephoneNumber");
                telephoneNumber.setAttribute("xsi:nil", "true");
                doc.getElementsByTagName("ClaimantsOwnerNameAddress").item(0).appendChild(telephoneNumber);
            }
            if(!elements.contains("Reference"))
            {
                Element reference= doc.createElement("Reference");
                reference.setAttribute("xsi:nil", "true");
                doc.getElementsByTagName("ClaimantsOwnerNameAddress").item(0).appendChild(reference);
            }
            if(!elements.contains("Email"))
            {
                Element email= doc.createElement("Email");
                email.setAttribute("xsi:nil", "true");
                doc.getElementsByTagName("ClaimantsOwnerNameAddress").item(0).appendChild(email);
            }
        
        }
        
        // Capacity type
        
        if (doc.getElementsByTagName("CapacityType").getLength() >= 1) {
            String AtAccidentClaimantWas = doc.getElementsByTagName("CapacityType").item(0).getTextContent();
            if (AtAccidentClaimantWas.equals("Article75 on behalf of MIB") 
                || AtAccidentClaimantWas.equals("Insurer in Contract")
                        || AtAccidentClaimantWas.equals("RTA Insurer")
                        || AtAccidentClaimantWas.equals("MIB") == false)
                
            {
               doc.getElementsByTagName("CapacityType").item(0).setTextContent("Other");
            }
        }
        
        // Defendant Insurer contact Name
        if (doc.getElementsByTagName("DefendantInsurerContactName").getLength() >= 1) {
            List elements= new ArrayList<String>();
            NodeList flowList = doc.getElementsByTagName("DefendantInsurerContactName");
            for (int i = 0; i < flowList.getLength(); i++) {
                NodeList childList = flowList.item(i).getChildNodes();
                for (int j = 0; j < childList.getLength(); j++) {
                    Node childNode = childList.item(j);
                    elements.add(childNode.getNodeName());
                }
                System.out.println(elements);
            
            }
            if(!elements.contains("TelephoneNumber"))
            {
                Element telephoneNumber= doc.createElement("TelephoneNumber");
                telephoneNumber.setAttribute("xsi:nil", "true");
                doc.getElementsByTagName("DefendantInsurerContactName").item(0).appendChild(telephoneNumber);
            }
            if(!elements.contains("Email"))
            {
                Element email= doc.createElement("Email");
                email.setAttribute("xsi:nil", "true");
                doc.getElementsByTagName("DefendantInsurerContactName").item(0).appendChild(email);
            }
        
        }
        
        // Insurer response : if not null then supply mandtory sinatory details
        
        Element ele=(Element)doc.getElementsByTagName("InsurerResponse").item(0);
        System.out.println("value is "+ ele.getAttribute("xsi:nil"));
        if(!ele.getAttribute("xsi:nil").equals("true"))
        {
            Element elem= doc.createElement("SignatoryDetails");
            elem.setAttribute("xsi:nil", "true");
            doc.getElementsByTagName("InsurerResponse").item(0).appendChild(elem);
        }
;        
        

        DOMSource domSource = new DOMSource(doc);
        StringWriter writer = new StringWriter();
        StreamResult result = new StreamResult(writer);
        TransformerFactory tf = TransformerFactory.newInstance();
        Transformer transformer = tf.newTransformer();
        transformer.setOutputProperty(OutputKeys.ENCODING, "UTF-8");
        transformer.setOutputProperty(OutputKeys.INDENT, "yes");
        transformer.transform(domSource, result);
        System.out.println("XML IN String format is: \n" + writer.toString());

    }
}
