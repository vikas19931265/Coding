/*
 *   Title: TopicUtils-JavaScript.js
 *   
 *  JavaScript related to the TopicUtils code. This file gets COPIED into the output webworks files to support
 *  the link to this page code.
 */

 
// extracts the src=myfilename from the URL
function Guidewire_ExtractSrcFromURL() {
	var VarDocumentURL = window.WWHFrame.location;
	var TheParametersArray = VarDocumentURL.hash.split("&");
	var thisParam;
	var FMSourceFile = "UNKNOWN_FRAMEMAKER_SOURCE_FILE";

	k = TheParametersArray.length;
	for (i= 0 ; i < k; i++) {
	   thisParam = unescape(TheParametersArray[i]);
	   if (thisParam.search(/^src=/) != -1) {
		  FMSourceFile = thisParam.substring(4); // strip off the "src=" at the beginning
		}
	 }
	return FMSourceFile;
}

// takes a file name of format "myfilename.4.3" and gets the beginning part and returns "myfilename" only
function Guidewire_FMSourceFileExtract(FullFileName)
{
  var VarSplitURL= FullFileName.split(".");
  return VarSplitURL[0];
}

// is the src=myfile arg from the URL (which means it was from myfile.fm) match the desired file
// generally speaking we do not care since we just want it unique per book
// so we just say yes, but we say false if it's a special file that allows duplicates in one book
function Guidewire_FMSourceFileMatch(FROM_URL,LOCAL_FILENAME) {
	var varFileURL = FROM_URL.toLowerCase();
	var varFileActual = LOCAL_FILENAME.toLowerCase();

	// SPECIAL CASE FOR UPGRADE GUIDE PROCEDURES -- BASICALLY 
	if (varFileURL.search(/^procedure-/) != -1) {
	  if  (varFileActual.search(/^procedure-/) != -1)  { 
		  return (varFileURL == Guidewire_FMSourceFileExtract(varFileActual)); 
		} else { 
		 return false; 
	   }
	 }
	else {
	   // basically, the default is to say they match... 
	   // if it's one of these specially-handled files, just let it work  
	   return true; 
	}
}


// this function takes a topic Name and converts it to a simpler string, such as underscores instead of space chars
// This is also important because FrameMaker + ePubs's  native handling of topic alias names mirror this behavior
//
// IMPORTANT: IF YOU CHANGE THIS CODE IN CONTROLS.JS (IN TEMPLATE OVERRIDES), ALSO CHANGE THE MIRROR FUNCTION IN TOPICUTILS-JAVASCRIPT.JS
// IMPORTANT: IF YOU CHANGE THIS CODE IN TOPICUTILS.FSL, ALSO CHANGE THE MIRROR FUNCTION IN CONTROLS.JS (IN TEMPLATE OVERRIDES)
// THE CONTROLS.JS FUNCTION ENCODES THE URL, AND THIS FUNCTION ENCODES it and compares against the input string with the full name for each topic (potentially with funny characters)
function Guidewire_SafeTopicName(theTitle) {
theTitle = theTitle.replace(/ /g, "_");  // converts space char
theTitle = theTitle.replace(/\u00a0/g, "_");  // converts nbsp char
// censor (remove) characters that mess up epublisher in URLs: forward slash, backslash, question mark, &amp;
theTitle= theTitle.replace(/[\\\/\?]/g, "");
theTitle = theTitle.replace(/&/g, "");
theTitle = theTitle.replace(/\u201c/g, ""); // double quote smart L
theTitle = theTitle.replace(/\u201d/g, "");// double quote smart R
theTitle = theTitle.replace(/\u2018/g, "");// single quote smart L
theTitle = theTitle.replace(/\u2019/g, "");// single quote smart R
theTitle = theTitle.replace(/\u2022/g, "");// trademark
theTitle = theTitle.replace(/'/g, "");// apparently a dumb single quote gets stripped by webworks
theTitle = theTitle.replace(/"/g, "");// to be safe let us strip double quotes too
theTitle = theTitle.replace(/\</g, "(");  // open bracket
theTitle = theTitle.replace(/\>/g, ")");   // close bracket
theTitle = theTitle.replace(/:/g, "_");    // colon
theTitle = theTitle.replace(/&/g, "");
return (theTitle);  }




function Guidewire_TopicMatch(FROMEPUB,WHATTOMATCH) {
var varLower1 = FROMEPUB.toLowerCase();
var varLower2 = WHATTOMATCH.toLowerCase();
var varLower2Safe = Guidewire_SafeTopicName(varLower2)

// match positively if they naturally match, or they match the safe version (convert spaces to underscores...)
var varMatches = (varLower1 == varLower2 || varLower1 == Guidewire_SafeTopicName(varLower2))

// console.log(Guidewire_TopicMatch, varLower1, varLower2, varLower2Safe, varMatches)
return varMatches
}
function GUIDEWIRE_TOPIC_TO_FILE(TOPIC, SRCFILE) { 
if (Guidewire_TopicMatch(TOPIC,"cover")) return "index.html"

else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter\u00ae") && Guidewire_FMSourceFileMatch(SRCFILE,"cover-integration.html") ) { return "cover-integration.html";}
else if (Guidewire_TopicMatch(TOPIC,"About ClaimCenter Documentation") && Guidewire_FMSourceFileMatch(SRCFILE,"about.html") ) { return "about.html";}
else if (Guidewire_TopicMatch(TOPIC,"Overview of Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"p-overview.html") ) { return "p-overview.html";}
else if (Guidewire_TopicMatch(TOPIC,"Integration Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"overview.04.1.html") ) { return "overview.04.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Overview of Integration Methods") && Guidewire_FMSourceFileMatch(SRCFILE,"overview.04.2.html") ) { return "overview.04.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Important Information about ClaimCenter Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"overview.04.3.html") ) { return "overview.04.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Preparing for Integration Development") && Guidewire_FMSourceFileMatch(SRCFILE,"overview.04.4.html") ) { return "overview.04.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Integration Documentation Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"overview.04.5.html") ) { return "overview.04.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Regenerating Integration Libraries") && Guidewire_FMSourceFileMatch(SRCFILE,"overview.04.6.html") ) { return "overview.04.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"What are Required Files for Integration Programmers") && Guidewire_FMSourceFileMatch(SRCFILE,"overview.04.7.html") ) { return "overview.04.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Public IDs and Integration Code") && Guidewire_FMSourceFileMatch(SRCFILE,"overview.04.8.html") ) { return "overview.04.8.html";}
else if (Guidewire_TopicMatch(TOPIC,"Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"p-webservices.html") ) { return "p-webservices.html";}
else if (Guidewire_TopicMatch(TOPIC,"Web Services Introduction") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices.06.1.html") ) { return "webservices.06.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"What are Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices.06.2.html") ) { return "webservices.06.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"What Happens During a Web Service Call") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices.06.3.html") ) { return "webservices.06.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reference of All Built-in Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices.06.4.html") ) { return "webservices.06.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Publishing Web Services (WS-I)") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.01.html") ) { return "webservices-wsi-publish.07.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"WS-I Web Service Publishing Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.02.html") ) { return "webservices-wsi-publish.07.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"WS-I Web Service Publishing Quick Reference") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.03.html") ) { return "webservices-wsi-publish.07.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Publishing WS-I Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.04.html") ) { return "webservices-wsi-publish.07.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Testing WS-I Web Services with wsi.local") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.05.html") ) { return "webservices-wsi-publish.07.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Generating WS-I WSDL") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.06.html") ) { return "webservices-wsi-publish.07.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding Advanced Security Layers to a WS-I Web Service") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.07.html") ) { return "webservices-wsi-publish.07.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Checking for Duplicate External Transaction IDs") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.08.html") ) { return "webservices-wsi-publish.07.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Request or Response XML Structural Transformations") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.09.html") ) { return "webservices-wsi-publish.07.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reference Additional Schemas in Your Published WSDL") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.10.html") ) { return "webservices-wsi-publish.07.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Validate Requests Using Additional Schemas as Parse Options") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.11.html") ) { return "webservices-wsi-publish.07.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Invocation Handlers for Implementing Preexisting WSDL") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.12.html") ) { return "webservices-wsi-publish.07.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Locale Support") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.13.html") ) { return "webservices-wsi-publish.07.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting Response Serialization Options, Including Encodings") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.14.html") ) { return "webservices-wsi-publish.07.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Exposing Typelists and Enumerations As String Values") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.15.html") ) { return "webservices-wsi-publish.07.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Transforming a Generated Schema") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.16.html") ) { return "webservices-wsi-publish.07.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"Login WS-I Authentication Confirmation") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.17.html") ) { return "webservices-wsi-publish.07.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"Stateful WS-I Session Affinity Using Cookies") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.18.html") ) { return "webservices-wsi-publish.07.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"Calling a ClaimCenter WS-I Web Service from Java") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.19.html") ) { return "webservices-wsi-publish.07.19.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding HTTP Basic Authentication in Java") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.20.html") ) { return "webservices-wsi-publish.07.20.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding SOAP Header Authentication in Java") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-wsi-publish.07.21.html") ) { return "webservices-wsi-publish.07.21.html";}
else if (Guidewire_TopicMatch(TOPIC,"Calling WS-I Web Services from Gosu") && Guidewire_FMSourceFileMatch(SRCFILE,"webservice-wsi-consuming.08.1.html") ) { return "webservice-wsi-consuming.08.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding WS-I Configuration Options") && Guidewire_FMSourceFileMatch(SRCFILE,"webservice-wsi-consuming.08.2.html") ) { return "webservice-wsi-consuming.08.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"One-Way Methods") && Guidewire_FMSourceFileMatch(SRCFILE,"webservice-wsi-consuming.08.3.html") ) { return "webservice-wsi-consuming.08.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Asynchronous Methods") && Guidewire_FMSourceFileMatch(SRCFILE,"webservice-wsi-consuming.08.4.html") ) { return "webservice-wsi-consuming.08.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"MTOM Attachments with Gosu as Web Service Client") && Guidewire_FMSourceFileMatch(SRCFILE,"webservice-wsi-consuming.08.5.html") ) { return "webservice-wsi-consuming.08.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Publishing Web Services (RPCE)") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-rpce-publish.09.01.html") ) { return "webservices-rpce-publish.09.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"RPCE Web Service Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-rpce-publish.09.02.html") ) { return "webservices-rpce-publish.09.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Publishing a RPCE Web Service") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-rpce-publish.09.03.html") ) { return "webservices-rpce-publish.09.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Writing Web Services that Use Entities") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-rpce-publish.09.04.html") ) { return "webservices-rpce-publish.09.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Testing Your RPCE Web Service With soap.local Namespace") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-rpce-publish.09.05.html") ) { return "webservices-rpce-publish.09.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Calling Your Published RPCE Web Service from Java") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-rpce-publish.09.06.html") ) { return "webservices-rpce-publish.09.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Calling Your RPCE Web Service from Microsoft .NET WSE 3.0") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-rpce-publish.09.07.html") ) { return "webservices-rpce-publish.09.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Calling Your RPCE Web Service from Microsoft .NET WSE 2.0") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-rpce-publish.09.08.html") ) { return "webservices-rpce-publish.09.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Calling Published RPCE Web Services From Other Languages") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-rpce-publish.09.09.html") ) { return "webservices-rpce-publish.09.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Typecodes and Web Services in RPCE Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-rpce-publish.09.10.html") ) { return "webservices-rpce-publish.09.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Public IDs and RPCE Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-rpce-publish.09.11.html") ) { return "webservices-rpce-publish.09.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Endpoint URLs and Generated WSDL in RPCE Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-rpce-publish.09.12.html") ) { return "webservices-rpce-publish.09.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Web Services Using ClaimCenter Clusters") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-rpce-publish.09.13.html") ) { return "webservices-rpce-publish.09.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"SOAP Faults (Exceptions) in RPCE Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-rpce-publish.09.14.html") ) { return "webservices-rpce-publish.09.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Writing Command Line Tools that Call RPCE Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-rpce-publish.09.15.html") ) { return "webservices-rpce-publish.09.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Calling RPCE Web Services from Gosu") && Guidewire_FMSourceFileMatch(SRCFILE,"webservice-rpce-consuming.10.1.html") ) { return "webservice-rpce-consuming.10.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Calling External RPCE Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"webservice-rpce-consuming.10.2.html") ) { return "webservice-rpce-consuming.10.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Dynamic SOAP Authentication Handlers") && Guidewire_FMSourceFileMatch(SRCFILE,"webservice-rpce-consuming.10.3.html") ) { return "webservice-rpce-consuming.10.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Calling RPCE Web Service from Gosu: ICD-9 Example") && Guidewire_FMSourceFileMatch(SRCFILE,"webservice-rpce-consuming.10.4.html") ) { return "webservice-rpce-consuming.10.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"General Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-general.11.1.html") ) { return "webservices-general.11.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Mapping Typecodes to External System Codes") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-general.11.2.html") ) { return "webservices-general.11.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Importing Administrative Data") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-general.11.3.html") ) { return "webservices-general.11.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Maintenance Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-general.11.4.html") ) { return "webservices-general.11.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"System Tools Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-general.11.5.html") ) { return "webservices-general.11.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workflow Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-general.11.6.html") ) { return "webservices-general.11.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Profiling Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-general.11.7.html") ) { return "webservices-general.11.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim-related Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.01.html") ) { return "webservices-claim.12.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Web Service APIs and Data Transfer Objects") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.02.html") ) { return "webservices-claim.12.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding First Notice of Loss from External Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.03.html") ) { return "webservices-claim.12.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Getting a Claim from External Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.04.html") ) { return "webservices-claim.12.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Importing a Claim from XML from External Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.05.html") ) { return "webservices-claim.12.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Migrating a Claim from External Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.06.html") ) { return "webservices-claim.12.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Getting Information from ClaimsExposures from External Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.07.html") ) { return "webservices-claim.12.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Bulk Validate from External Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.08.html") ) { return "webservices-claim.12.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Previewing Assignments from External Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.09.html") ) { return "webservices-claim.12.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Closing and Reopening a Claim from External Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.10.html") ) { return "webservices-claim.12.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Add User Permissions on a Claim from External Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.11.html") ) { return "webservices-claim.12.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Archiving and Restoring Claims from External Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.12.html") ) { return "webservices-claim.12.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Activities from External Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.13.html") ) { return "webservices-claim.12.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding a Contact from External Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.14.html") ) { return "webservices-claim.12.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding a Document from External Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.15.html") ) { return "webservices-claim.12.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding an Exposure from External Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.16.html") ) { return "webservices-claim.12.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"Getting an Exposure from External Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.17.html") ) { return "webservices-claim.12.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"Closing and Reopening an Exposure from External Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.18.html") ) { return "webservices-claim.12.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding to Claim History from External Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.19.html") ) { return "webservices-claim.12.19.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating a Note from External Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"webservices-claim.12.20.html") ) { return "webservices-claim.12.20.html";}
else if (Guidewire_TopicMatch(TOPIC,"Servlets") && Guidewire_FMSourceFileMatch(SRCFILE,"servlets.html") ) { return "servlets.html";}
else if (Guidewire_TopicMatch(TOPIC,"Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"p-plugins.html") ) { return "p-plugins.html";}
else if (Guidewire_TopicMatch(TOPIC,"Plugin Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins.15.01.html") ) { return "plugins.15.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Overview of ClaimCenter Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins.15.02.html") ) { return "plugins.15.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Error Handling in Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins.15.03.html") ) { return "plugins.15.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Temporarily Disabling a Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins.15.04.html") ) { return "plugins.15.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Example Gosu Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins.15.05.html") ) { return "plugins.15.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Special Notes For Java Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins.15.06.html") ) { return "plugins.15.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Getting Plugin Parameters from the Plugins Registry Editor") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins.15.07.html") ) { return "plugins.15.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Writing Plugin Templates For Plugins That Take Template Data") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins.15.08.html") ) { return "plugins.15.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Plugin Registry APIs") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins.15.09.html") ) { return "plugins.15.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Plugin Thread Safety") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins.15.10.html") ) { return "plugins.15.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reading System Properties in Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins.15.11.html") ) { return "plugins.15.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Do Not Call Local Web Services From Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins.15.12.html") ) { return "plugins.15.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating Unique Numbers in a Sequence") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins.15.13.html") ) { return "plugins.15.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Restarting and Testing Tips for Plugin Developers") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins.15.14.html") ) { return "plugins.15.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Summary of All ClaimCenter Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins.15.15.html") ) { return "plugins.15.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Authentication Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"authentication.16.1.html") ) { return "authentication.16.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Overview of User Authentication Interfaces") && Guidewire_FMSourceFileMatch(SRCFILE,"authentication.16.2.html") ) { return "authentication.16.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"User Authentication Source Creator Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"authentication.16.3.html") ) { return "authentication.16.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"User Authentication Service Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"authentication.16.4.html") ) { return "authentication.16.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Deploying User Authentication Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"authentication.16.5.html") ) { return "authentication.16.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Database Authentication Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"authentication.16.6.html") ) { return "authentication.16.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"ABAuthenticationPlugin for ContactManager Authentication") && Guidewire_FMSourceFileMatch(SRCFILE,"authentication.16.7.html") ) { return "authentication.16.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Document Management") && Guidewire_FMSourceFileMatch(SRCFILE,"documentsforms.17.01.html") ) { return "documentsforms.17.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Document Management Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"documentsforms.17.02.html") ) { return "documentsforms.17.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Choices for Storing Document Content and Metadata") && Guidewire_FMSourceFileMatch(SRCFILE,"documentsforms.17.03.html") ) { return "documentsforms.17.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Document Storage Plugin Architecture") && Guidewire_FMSourceFileMatch(SRCFILE,"documentsforms.17.04.html") ) { return "documentsforms.17.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Implementing a Document Content Source for External DMS") && Guidewire_FMSourceFileMatch(SRCFILE,"documentsforms.17.05.html") ) { return "documentsforms.17.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Storing Document Metadata In an External DMS") && Guidewire_FMSourceFileMatch(SRCFILE,"documentsforms.17.06.html") ) { return "documentsforms.17.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"The Built-in Document Storage Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"documentsforms.17.07.html") ) { return "documentsforms.17.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Asynchronous Document Storage") && Guidewire_FMSourceFileMatch(SRCFILE,"documentsforms.17.08.html") ) { return "documentsforms.17.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"APIs to Attach Documents to Business Objects") && Guidewire_FMSourceFileMatch(SRCFILE,"documentsforms.17.09.html") ) { return "documentsforms.17.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Retrieval and Rendering of PDF or Other Input Stream Data") && Guidewire_FMSourceFileMatch(SRCFILE,"documentsforms.17.10.html") ) { return "documentsforms.17.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Document Production") && Guidewire_FMSourceFileMatch(SRCFILE,"documentproduction.18.1.html") ) { return "documentproduction.18.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Document Production Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"documentproduction.18.2.html") ) { return "documentproduction.18.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Document Template Descriptors") && Guidewire_FMSourceFileMatch(SRCFILE,"documentproduction.18.3.html") ) { return "documentproduction.18.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Generating Documents from Gosu") && Guidewire_FMSourceFileMatch(SRCFILE,"documentproduction.18.4.html") ) { return "documentproduction.18.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Template Web Service APIs") && Guidewire_FMSourceFileMatch(SRCFILE,"documentproduction.18.5.html") ) { return "documentproduction.18.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Geographic Data Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"geocoding.19.1.html") ) { return "geocoding.19.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Geocoding Plugin Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"geocoding.19.2.html") ) { return "geocoding.19.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Steps to Deploy a Geocoding Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"geocoding.19.3.html") ) { return "geocoding.19.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Writing a Geocoding Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"geocoding.19.4.html") ) { return "geocoding.19.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Geocoding an Address") && Guidewire_FMSourceFileMatch(SRCFILE,"geocoding.19.5.html") ) { return "geocoding.19.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Getting Driving Directions") && Guidewire_FMSourceFileMatch(SRCFILE,"geocoding.19.6.html") ) { return "geocoding.19.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Getting a Map for an Address") && Guidewire_FMSourceFileMatch(SRCFILE,"geocoding.19.7.html") ) { return "geocoding.19.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Getting an Address from Coordinates (Reverse Geocoding)") && Guidewire_FMSourceFileMatch(SRCFILE,"geocoding.19.8.html") ) { return "geocoding.19.8.html";}
else if (Guidewire_TopicMatch(TOPIC,"Geocoding Status Codes") && Guidewire_FMSourceFileMatch(SRCFILE,"geocoding.19.9.html") ) { return "geocoding.19.9.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reinsurance Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"reinsurance.20.1.html") ) { return "reinsurance.20.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reinsurance Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"reinsurance.20.2.html") ) { return "reinsurance.20.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reinsurance Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"reinsurance.20.3.html") ) { return "reinsurance.20.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Encryption Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"encryption.21.1.html") ) { return "encryption.21.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Encryption Integration Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"encryption.21.2.html") ) { return "encryption.21.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changing Your Encryption Algorithm Later") && Guidewire_FMSourceFileMatch(SRCFILE,"encryption.21.3.html") ) { return "encryption.21.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Encryption Changes with Snapshots") && Guidewire_FMSourceFileMatch(SRCFILE,"encryption.21.4.html") ) { return "encryption.21.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Encryption Features for Staging Tables") && Guidewire_FMSourceFileMatch(SRCFILE,"encryption.21.5.html") ) { return "encryption.21.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Management Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"management.22.1.html") ) { return "management.22.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Management Integration Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"management.22.2.html") ) { return "management.22.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"The Abstract Management Plugin Interface") && Guidewire_FMSourceFileMatch(SRCFILE,"management.22.3.html") ) { return "management.22.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Integrating With the Included JMX Management Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"management.22.4.html") ) { return "management.22.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Other Plugin Interfaces") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins-other.23.01.html") ) { return "plugins-other.23.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Number Generator Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins-other.23.02.html") ) { return "plugins-other.23.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Approval Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins-other.23.03.html") ) { return "plugins-other.23.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Automatic Address Completion and Fill-in Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins-other.23.04.html") ) { return "plugins-other.23.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Phone Number Normalizer Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins-other.23.05.html") ) { return "plugins-other.23.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Testing Clock Plugin (Only For Non-Production Servers)") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins-other.23.06.html") ) { return "plugins-other.23.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Work Item Priority Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins-other.23.07.html") ) { return "plugins-other.23.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Official IDs Mapped to Tax IDs Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins-other.23.08.html") ) { return "plugins-other.23.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Preupdate Handler Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins-other.23.09.html") ) { return "plugins-other.23.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Defining Base URLs for Fully-Qualified Domain Names") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins-other.23.10.html") ) { return "plugins-other.23.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Exception and Escalation Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins-other.23.11.html") ) { return "plugins-other.23.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Startable Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins-startable.24.1.html") ) { return "plugins-startable.24.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"What are Startable Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"plugins-startable.24.2.html") ) { return "plugins-startable.24.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Multi-threaded Inbound Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"inbound-integration.25.1.html") ) { return "inbound-integration.25.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Multi-threaded Inbound Integration Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"inbound-integration.25.2.html") ) { return "inbound-integration.25.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Inbound Integration Configuration XML File") && Guidewire_FMSourceFileMatch(SRCFILE,"inbound-integration.25.3.html") ) { return "inbound-integration.25.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Inbound File Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"inbound-integration.25.4.html") ) { return "inbound-integration.25.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Inbound JMS Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"inbound-integration.25.5.html") ) { return "inbound-integration.25.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Custom Inbound Integrations") && Guidewire_FMSourceFileMatch(SRCFILE,"inbound-integration.25.6.html") ) { return "inbound-integration.25.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding the Polling Interval and Throttle Interval") && Guidewire_FMSourceFileMatch(SRCFILE,"inbound-integration.25.7.html") ) { return "inbound-integration.25.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Messaging") && Guidewire_FMSourceFileMatch(SRCFILE,"p-messaging.html") ) { return "p-messaging.html";}
else if (Guidewire_TopicMatch(TOPIC,"Messaging and Events") && Guidewire_FMSourceFileMatch(SRCFILE,"eventsmessaging.27.01.html") ) { return "eventsmessaging.27.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Messaging Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"eventsmessaging.27.02.html") ) { return "eventsmessaging.27.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Message Destination Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"eventsmessaging.27.03.html") ) { return "eventsmessaging.27.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Filtering Events") && Guidewire_FMSourceFileMatch(SRCFILE,"eventsmessaging.27.04.html") ) { return "eventsmessaging.27.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"List of Messaging Events in ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"eventsmessaging.27.05.html") ) { return "eventsmessaging.27.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Generating New Messages in Event Fired Rules") && Guidewire_FMSourceFileMatch(SRCFILE,"eventsmessaging.27.06.html") ) { return "eventsmessaging.27.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Message Ordering and Multi-Threaded Sending") && Guidewire_FMSourceFileMatch(SRCFILE,"eventsmessaging.27.07.html") ) { return "eventsmessaging.27.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Late Binding Data in Your Payload") && Guidewire_FMSourceFileMatch(SRCFILE,"eventsmessaging.27.08.html") ) { return "eventsmessaging.27.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reporting Acknowledgements and Errors") && Guidewire_FMSourceFileMatch(SRCFILE,"eventsmessaging.27.09.html") ) { return "eventsmessaging.27.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Tracking a Specific Entity With a Message") && Guidewire_FMSourceFileMatch(SRCFILE,"eventsmessaging.27.10.html") ) { return "eventsmessaging.27.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Implementing Messaging Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"eventsmessaging.27.11.html") ) { return "eventsmessaging.27.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Resynchronizing Messages for a Primary Object") && Guidewire_FMSourceFileMatch(SRCFILE,"eventsmessaging.27.12.html") ) { return "eventsmessaging.27.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Message Payload Mapping Utility for Java Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"eventsmessaging.27.13.html") ) { return "eventsmessaging.27.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Monitoring Messages and Handling Errors") && Guidewire_FMSourceFileMatch(SRCFILE,"eventsmessaging.27.14.html") ) { return "eventsmessaging.27.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Messaging Tools Web Service") && Guidewire_FMSourceFileMatch(SRCFILE,"eventsmessaging.27.15.html") ) { return "eventsmessaging.27.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Batch Mode Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"eventsmessaging.27.16.html") ) { return "eventsmessaging.27.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"Included Messaging Transports") && Guidewire_FMSourceFileMatch(SRCFILE,"eventsmessaging.27.17.html") ) { return "eventsmessaging.27.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"Financials") && Guidewire_FMSourceFileMatch(SRCFILE,"p-financials.html") ) { return "p-financials.html";}
else if (Guidewire_TopicMatch(TOPIC,"Financials Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.29.01.html") ) { return "financials.29.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Financial Transaction Status and Status Transitions") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.29.02.html") ) { return "financials.29.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Financials Web Services (ClaimFinancialsAPI)") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.29.03.html") ) { return "financials.29.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Check Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.29.04.html") ) { return "financials.29.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Check Scheduled Send Date Only Modifiable in Special Situations") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.29.05.html") ) { return "financials.29.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Payment Transaction Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.29.06.html") ) { return "financials.29.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Recovery Reserve Transaction Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.29.07.html") ) { return "financials.29.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Recovery Transaction Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.29.08.html") ) { return "financials.29.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reserve Transaction Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.29.09.html") ) { return "financials.29.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Bulk Invoice Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.29.10.html") ) { return "financials.29.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Deduction Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.29.11.html") ) { return "financials.29.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Initial Reserve Initialization for Exposures") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.29.12.html") ) { return "financials.29.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Exchange Rate Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.29.13.html") ) { return "financials.29.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Importing Claims Data") && Guidewire_FMSourceFileMatch(SRCFILE,"p-importingclaims.html") ) { return "p-importingclaims.html";}
else if (Guidewire_TopicMatch(TOPIC,"Importing from Database Staging Tables") && Guidewire_FMSourceFileMatch(SRCFILE,"databaseimport.31.1.html") ) { return "databaseimport.31.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Introduction to Database Staging Table Import") && Guidewire_FMSourceFileMatch(SRCFILE,"databaseimport.31.2.html") ) { return "databaseimport.31.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Overview of a Typical Database Import") && Guidewire_FMSourceFileMatch(SRCFILE,"databaseimport.31.3.html") ) { return "databaseimport.31.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Database Import Performance and Statistics") && Guidewire_FMSourceFileMatch(SRCFILE,"databaseimport.31.4.html") ) { return "databaseimport.31.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Table Import Tools") && Guidewire_FMSourceFileMatch(SRCFILE,"databaseimport.31.5.html") ) { return "databaseimport.31.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Populating the Staging Tables") && Guidewire_FMSourceFileMatch(SRCFILE,"databaseimport.31.6.html") ) { return "databaseimport.31.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Data Integrity Checks") && Guidewire_FMSourceFileMatch(SRCFILE,"databaseimport.31.7.html") ) { return "databaseimport.31.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Table Import Tips and Troubleshooting") && Guidewire_FMSourceFileMatch(SRCFILE,"databaseimport.31.8.html") ) { return "databaseimport.31.8.html";}
else if (Guidewire_TopicMatch(TOPIC,"Staging Table Import of Encrypted Properties") && Guidewire_FMSourceFileMatch(SRCFILE,"databaseimport.31.9.html") ) { return "databaseimport.31.9.html";}
else if (Guidewire_TopicMatch(TOPIC,"FNOL Mapper") && Guidewire_FMSourceFileMatch(SRCFILE,"FNOLmapper.32.1.html") ) { return "FNOLmapper.32.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"FNOL Mapper Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"FNOLmapper.32.2.html") ) { return "FNOLmapper.32.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"FNOL Mapper Detailed Flow") && Guidewire_FMSourceFileMatch(SRCFILE,"FNOLmapper.32.3.html") ) { return "FNOLmapper.32.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Structure of FNOL Mapper Classes") && Guidewire_FMSourceFileMatch(SRCFILE,"FNOLmapper.32.4.html") ) { return "FNOLmapper.32.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Example FNOL Mapper Customizations") && Guidewire_FMSourceFileMatch(SRCFILE,"FNOLmapper.32.5.html") ) { return "FNOLmapper.32.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO and Metropolitan") && Guidewire_FMSourceFileMatch(SRCFILE,"p-importingclaims_2.html") ) { return "p-importingclaims_2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Insurance Services Office (ISO) Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.01.html") ) { return "isointegration.34.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Integration Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.02.html") ) { return "isointegration.34.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Implementation Checklist") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.03.html") ) { return "isointegration.34.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Network Architecture") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.04.html") ) { return "isointegration.34.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Activity and Decision Timeline") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.05.html") ) { return "isointegration.34.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Authentication and Security") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.06.html") ) { return "isointegration.34.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Proxy Server Setup") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.07.html") ) { return "isointegration.34.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Validation Level") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.08.html") ) { return "isointegration.34.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Messaging Destination") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.09.html") ) { return "isointegration.34.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Receive Servlet and the ISO Reply Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.10.html") ) { return "isointegration.34.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Properties on Entities") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.11.html") ) { return "isointegration.34.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO User Interface") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.12.html") ) { return "isointegration.34.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Properties File") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.13.html") ) { return "isointegration.34.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Type Code and Coverage Mapping") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.14.html") ) { return "isointegration.34.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Payload XML Customization") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.15.html") ) { return "isointegration.34.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Match Reports") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.16.html") ) { return "isointegration.34.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Exposure Type Changes") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.17.html") ) { return "isointegration.34.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Date Search Range and Resubmitting Exposures") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.18.html") ) { return "isointegration.34.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Integration Troubleshooting") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.19.html") ) { return "isointegration.34.19.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Formats and Feeds") && Guidewire_FMSourceFileMatch(SRCFILE,"isointegration.34.20.html") ) { return "isointegration.34.20.html";}
else if (Guidewire_TopicMatch(TOPIC,"Metropolitan Reporting\u00a0Bureau Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"metropolitan.35.1.html") ) { return "metropolitan.35.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Overview of ClaimCenter-Metropolitan Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"metropolitan.35.2.html") ) { return "metropolitan.35.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Metropolitan Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"metropolitan.35.3.html") ) { return "metropolitan.35.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Metropolitan Report Templates and Report Types") && Guidewire_FMSourceFileMatch(SRCFILE,"metropolitan.35.4.html") ) { return "metropolitan.35.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Metropolitan Entities, Typelists, Properties, and Statuses") && Guidewire_FMSourceFileMatch(SRCFILE,"metropolitan.35.5.html") ) { return "metropolitan.35.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Metropolitan Error Handling") && Guidewire_FMSourceFileMatch(SRCFILE,"metropolitan.35.6.html") ) { return "metropolitan.35.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Policy and Contact Integrations") && Guidewire_FMSourceFileMatch(SRCFILE,"p-policycontacts.html") ) { return "p-policycontacts.html";}
else if (Guidewire_TopicMatch(TOPIC,"Contact Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"contact-integration.37.1.html") ) { return "contact-integration.37.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Integrating with a Contact Management System") && Guidewire_FMSourceFileMatch(SRCFILE,"contact-integration.37.2.html") ) { return "contact-integration.37.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Contact Links") && Guidewire_FMSourceFileMatch(SRCFILE,"contact-integration.37.3.html") ) { return "contact-integration.37.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Contact Web Service APIs") && Guidewire_FMSourceFileMatch(SRCFILE,"contact-integration.37.4.html") ) { return "contact-integration.37.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim and Policy Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.01.html") ) { return "cc-pc-integration.38.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Policy System Notifications") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.02.html") ) { return "cc-pc-integration.38.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Policy Search Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.03.html") ) { return "cc-pc-integration.38.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Search Web Service For Policy System Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.04.html") ) { return "cc-pc-integration.38.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"PolicyCenter Product Model Import into ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.05.html") ) { return "cc-pc-integration.38.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Catastrophe Policy Location Download") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.06.html") ) { return "cc-pc-integration.38.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Policy Location Search Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.07.html") ) { return "cc-pc-integration.38.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Policy Refresh Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.08.html") ) { return "cc-pc-integration.38.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Policy Refresh Plugins and Configuration Classes") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.09.html") ) { return "cc-pc-integration.38.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Policy Refresh Steps and Associated Implementation") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.10.html") ) { return "cc-pc-integration.38.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Determining the Extent of the Policy Graph") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.11.html") ) { return "cc-pc-integration.38.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Policy Refresh Entity Matcher Details") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.12.html") ) { return "cc-pc-integration.38.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Policy Refresh Relinking Details") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.13.html") ) { return "cc-pc-integration.38.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Policy Refresh Policy Comparison Display") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.14.html") ) { return "cc-pc-integration.38.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Difference Display Objects") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.15.html") ) { return "cc-pc-integration.38.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Policy Refresh Configuration Examples") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.16.html") ) { return "cc-pc-integration.38.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding a New Claim-specific Entity to Policy Refresh") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.17.html") ) { return "cc-pc-integration.38.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding a New Policy-specific Entity to Policy Refresh") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.18.html") ) { return "cc-pc-integration.38.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"Modifying Your Policy System for Changes to Entities in the Policy Graph") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.19.html") ) { return "cc-pc-integration.38.19.html";}
else if (Guidewire_TopicMatch(TOPIC,"Additional Tasks to Configure Policy Refresh for New Policy-Specific Entities") && Guidewire_FMSourceFileMatch(SRCFILE,"cc-pc-integration.38.20.html") ) { return "cc-pc-integration.38.20.html";}
else if (Guidewire_TopicMatch(TOPIC,"Other Integration Topics") && Guidewire_FMSourceFileMatch(SRCFILE,"p-claims.html") ) { return "p-claims.html";}
else if (Guidewire_TopicMatch(TOPIC,"Archiving Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving-integration.40.1.html") ) { return "archiving-integration.40.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Overview of Archiving Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving-integration.40.2.html") ) { return "archiving-integration.40.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Archiving Storage Integration Detailed Flow") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving-integration.40.3.html") ) { return "archiving-integration.40.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Archive Retrieval Integration Detailed Flow") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving-integration.40.4.html") ) { return "archiving-integration.40.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Archive Source Plugin Utility Methods") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving-integration.40.5.html") ) { return "archiving-integration.40.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading the Data Model of Retrieved Data") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving-integration.40.6.html") ) { return "archiving-integration.40.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Custom Batch Processes") && Guidewire_FMSourceFileMatch(SRCFILE,"batchprocess.41.1.html") ) { return "batchprocess.41.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Custom Batch Processes and MaintenanceToolsAPI") && Guidewire_FMSourceFileMatch(SRCFILE,"batchprocess.41.2.html") ) { return "batchprocess.41.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Free-text Search Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"search-freetext-engine.42.1.html") ) { return "search-freetext-engine.42.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Free-text Load and Index Plugin and Message Transport") && Guidewire_FMSourceFileMatch(SRCFILE,"search-freetext-engine.42.2.html") ) { return "search-freetext-engine.42.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Free-text Search Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"search-freetext-engine.42.3.html") ) { return "search-freetext-engine.42.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Data Extraction Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"dataextraction.43.1.html") ) { return "dataextraction.43.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Why Gosu Templates are Useful for Data Extraction") && Guidewire_FMSourceFileMatch(SRCFILE,"dataextraction.43.2.html") ) { return "dataextraction.43.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Data Extraction Using Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"dataextraction.43.3.html") ) { return "dataextraction.43.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Logging") && Guidewire_FMSourceFileMatch(SRCFILE,"logging.44.1.html") ) { return "logging.44.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Logging Overview For Integration Developers") && Guidewire_FMSourceFileMatch(SRCFILE,"logging.44.2.html") ) { return "logging.44.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Logging Properties File") && Guidewire_FMSourceFileMatch(SRCFILE,"logging.44.3.html") ) { return "logging.44.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Logging APIs for Java Integration Developers") && Guidewire_FMSourceFileMatch(SRCFILE,"logging.44.4.html") ) { return "logging.44.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Proxy Servers") && Guidewire_FMSourceFileMatch(SRCFILE,"proxyservers.45.1.html") ) { return "proxyservers.45.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Proxy Server Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"proxyservers.45.2.html") ) { return "proxyservers.45.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring a Proxy Server with Apache HTTP Server") && Guidewire_FMSourceFileMatch(SRCFILE,"proxyservers.45.3.html") ) { return "proxyservers.45.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Certificates, Private Keys, and Passphrase Scripts") && Guidewire_FMSourceFileMatch(SRCFILE,"proxyservers.45.4.html") ) { return "proxyservers.45.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Proxy Server Integration Types for ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"proxyservers.45.5.html") ) { return "proxyservers.45.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Proxy Building Blocks") && Guidewire_FMSourceFileMatch(SRCFILE,"proxyservers.45.6.html") ) { return "proxyservers.45.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Java and OSGi Support") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.01.html") ) { return "java-api.46.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Overview of Java and OSGi Support") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.02.html") ) { return "java-api.46.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Accessing Entity and Typecode Data in Java") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.03.html") ) { return "java-api.46.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Regenerating Java API Libraries") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.04.html") ) { return "java-api.46.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Entity Packages and Customer Extensions from Java") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.05.html") ) { return "java-api.46.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Typecode Classes from Java") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.06.html") ) { return "java-api.46.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Comparing Entity Instances and Typecodes") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.07.html") ) { return "java-api.46.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Entity Bundles and Transactions from Java") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.08.html") ) { return "java-api.46.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating New Entity Instances from Java") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.09.html") ) { return "java-api.46.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Getting and Setting Entity Properties from Java") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.10.html") ) { return "java-api.46.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Calling Entity Object Methods from Java") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.11.html") ) { return "java-api.46.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Querying for Entity Data in Java") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.12.html") ) { return "java-api.46.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Accessing Gosu Classes from Java Using Reflection") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.13.html") ) { return "java-api.46.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Gosu Enhancement Properties and Methods in Java") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.14.html") ) { return "java-api.46.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Class Loading and Delegation for non-OSGi Java") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.15.html") ) { return "java-api.46.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Deploying Non-OSGi Java Classes and JARs") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.16.html") ) { return "java-api.46.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"OSGi Plugin Deployment with IntelliJ IDEA with OSGi Editor") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.17.html") ) { return "java-api.46.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"Advanced OSGi Dependency and Settings Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.18.html") ) { return "java-api.46.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"Updating Your OSGi Plugin Project after Product Location Changes") && Guidewire_FMSourceFileMatch(SRCFILE,"java-api.46.19.html") ) { return "java-api.46.19.html";}
else { return("../wwhelp/topic_cannot_be_found.html"); } }

function  WWHBookData_MatchTopic(P)
{
var C=null;P=decodeURIComponent(decodeURIComponent(escape(P)));//workaround epub bug with UTF8 processing!
if(P=="Built-in_Web_Services")C="webservices.06.4.html";
if(P=="MTOM_Attachments")C="webservice-wsi-consuming.08.5.html";
if(P=="SOAP")C="webservices-rpce-publish.09.01.html";
if(P=="Web_Service_and_SOAP_Entity_Overview")C="webservices-rpce-publish.09.02.html";
if(P=="Calling_Your_Web_Service_from_Java")C="webservices-rpce-publish.09.06.html";
if(P=="SOAP_Differences_with_Java_1.4_and_Non-.NET_Languages")C="webservices-rpce-publish.09.09.html";
if(P=="GenericCenter_Clusters_and_Web_Services")C="webservices-rpce-publish.09.13.html";
if(P=="Conversational_and_Non-Conversational_SOAP_Modes")C="webservices-rpce-publish.09.13.html#3541689";
if(P=="Implementing_Java_Plugins")C="plugins.15.06.html";
if(P=="The_Plugin_Registry")C="plugins.15.09.html";
if(P=="Plugin_Thread_Safety_and_Static_Variables")C="plugins.15.10.html";
if(P=="Plugin_Thread_Safety")C="plugins.15.10.html";
if(P=="Do_Not_Call_Local_SOAP_APIs_From_Plugins")C="plugins.15.12.html";
if(P=="The_Behavior_of_Built-in_Document_Storage_Plugins")C="documentsforms.17.07.html";
if(P=="GScript-Initiated_Automatic_Document_Generation")C="documentproduction.18.4.html";
if(P=="Geographic_Data_Integration")C="geocoding.19.1.html";
if(P=="Geocoding,_Mapping,_and_Driving_Direction_Integration")C="geocoding.19.1.html";
if(P=="Property_Encryption_Integration")C="encryption.21.2.html";
if(P=="Property_Level_Encryption_Integration")C="encryption.21.2.html";
if(P=="Custom_Inbound_Integration_with_InboundIntegrationPlugin")C="inbound-integration.25.6.html";
if(P=="What_Events_Might_Be_Generated")C="eventsmessaging.27.05.html";
if(P=="Generating_Your_Message_Payload")C="eventsmessaging.27.06.html";
if(P=="Using_Rules_to_Generating_Messages")C="eventsmessaging.27.06.html";
if(P=="Message_Ordering")C="eventsmessaging.27.07.html";
if(P=="Overview_of_Messages")C="eventsmessaging.27.07.html";
if(P=="Late_Binding_Fields")C="eventsmessaging.27.08.html";
if(P=="Early_Binding_and_Late_Binding")C="eventsmessaging.27.08.html";
if(P=="Resyncing_Messages")C="eventsmessaging.27.12.html";
if(P=="Claim_Financials_using_Web_Services")C="financials.29.03.html";
if(P=="FNOL_Mapper_Tool")C="FNOLmapper.32.1.html";
if(P=="FNOL_Mapper")C="FNOLmapper.32.1.html";
if(P=="ISO_ClaimSearch_Integration_Overview")C="isointegration.34.02.html";
if(P=="ISO-related_Fields_on_Entities")C="isointegration.34.11.html";
if(P=="ISO-related_Entity_Fields")C="isointegration.34.11.html";
if(P=="ISO-related_User_Interface")C="isointegration.34.12.html";
if(P=="Configuring_the_ISO_Properties_File")C="isointegration.34.13.html";
if(P=="Configuring_the_Type_Code_Mapping_File")C="isointegration.34.14.html";
if(P=="Customizing_the_ISO_Payload_XML")C="isointegration.34.15.html";
if(P=="Configuring_Payload_Generation_in_ISO_Rules_and_Libraries")C="isointegration.34.15.html";
if(P=="How_ClaimCenter_Stores_ISO_Match_Reports")C="isointegration.34.16.html";
if(P=="Storing_Match_Report_on_Exposures_and_as_Documents")C="isointegration.34.16.html";
if(P=="ISO_and_Exposure_Subtype_Changes")C="isointegration.34.17.html";
if(P=="ISO_Integration_Tasks_for_Exposure_Subtype_Changes")C="isointegration.34.17.html";
if(P=="ISO_Search_Date_Range_and_Re-sending_to_ISO")C="isointegration.34.18.html";
if(P=="ISO_Search_Date_Range_and_Customizations")C="isointegration.34.18.html";
if(P=="Troubleshooting_ISO_Integration")C="isointegration.34.19.html";
if(P=="ISO_Format_Types_and_Feed_Types")C="isointegration.34.20.html";
if(P=="Address_Book_Integration")C="contact-integration.37.1.html";
if(P=="The_Archive_Source_Plugin")C="archiving-integration.40.2.html#2083107";
if(P=="Web_Service_API_Data_Extraction")C="dataextraction.43.3.html";
if(P=="Deploying_Java_Code_in_BillingCenter")C="java-api.46.01.html";
if(P=="Deploying_Java_Code_in_PolicyCenter")C="java-api.46.01.html";
if(P=="Deploying_Java_Code_in_ClaimCenter")C="java-api.46.01.html";
if(P=="Accessing_Gosu_Classes_from_Java_Using_Reflection")C="java-api.46.13.html";
if(P=="Gosu_Enhancements_in_the_Entity_Libraries")C="java-api.46.14.html";
if(P=="Gosu-to-Java_Class_Deployment")C="java-api.46.16.html";
if (C) { return C } else { return GUIDEWIRE_TOPIC_TO_FILE(P,Guidewire_ExtractSrcFromURL());}
}
