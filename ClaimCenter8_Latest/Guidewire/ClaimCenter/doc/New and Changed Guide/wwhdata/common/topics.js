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

else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter\u00ae") && Guidewire_FMSourceFileMatch(SRCFILE,"cover-whatsnew.html") ) { return "cover-whatsnew.html";}
else if (Guidewire_TopicMatch(TOPIC,"About ClaimCenter Documentation") && Guidewire_FMSourceFileMatch(SRCFILE,"about.html") ) { return "about.html";}
else if (Guidewire_TopicMatch(TOPIC,"What\u2019s New and Changed in 8.0 Maintenance Releases") && Guidewire_FMSourceFileMatch(SRCFILE,"p-emerald-maint.html") ) { return "p-emerald-maint.html";}
else if (Guidewire_TopicMatch(TOPIC,"New and Changed in ClaimCenter 8.0.1") && Guidewire_FMSourceFileMatch(SRCFILE,"801.04.01.html") ) { return "801.04.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"New in ClaimCenter 8.0.1") && Guidewire_FMSourceFileMatch(SRCFILE,"801.04.02.html") ) { return "801.04.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Search for Claims by Claim Contact") && Guidewire_FMSourceFileMatch(SRCFILE,"801.04.03.html") ) { return "801.04.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"New Support for OSGi Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"801.04.04.html") ) { return "801.04.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Gosu Using Clause Now Supports Finally Clause") && Guidewire_FMSourceFileMatch(SRCFILE,"801.04.05.html") ) { return "801.04.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changed in ClaimCenter 8.0.1") && Guidewire_FMSourceFileMatch(SRCFILE,"801.04.06.html") ) { return "801.04.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Services") && Guidewire_FMSourceFileMatch(SRCFILE,"801.04.07.html") ) { return "801.04.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Archiving") && Guidewire_FMSourceFileMatch(SRCFILE,"801.04.08.html") ) { return "801.04.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Aggregate Limit Enhancements") && Guidewire_FMSourceFileMatch(SRCFILE,"801.04.09.html") ) { return "801.04.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Conversion of Web Services from RPCE to WS-I") && Guidewire_FMSourceFileMatch(SRCFILE,"801.04.10.html") ) { return "801.04.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Web Service Transaction IDs") && Guidewire_FMSourceFileMatch(SRCFILE,"801.04.11.html") ) { return "801.04.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Change to Inbound Integration Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"801.04.12.html") ) { return "801.04.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Gosu Suppress Warnings Annotation") && Guidewire_FMSourceFileMatch(SRCFILE,"801.04.13.html") ) { return "801.04.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Gosu Compound Assignment Operators for Logical AND and Logical OR") && Guidewire_FMSourceFileMatch(SRCFILE,"801.04.14.html") ) { return "801.04.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"What\u2019s New and Changed in 8.0.0") && Guidewire_FMSourceFileMatch(SRCFILE,"p-emerald.html") ) { return "p-emerald.html";}
else if (Guidewire_TopicMatch(TOPIC,"New and Changed in ClaimCenter 8.0") && Guidewire_FMSourceFileMatch(SRCFILE,"e-app.06.01.html") ) { return "e-app.06.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"New in ClaimCenter 8.0") && Guidewire_FMSourceFileMatch(SRCFILE,"e-app.06.02.html") ) { return "e-app.06.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Services") && Guidewire_FMSourceFileMatch(SRCFILE,"e-app.06.03.html") ) { return "e-app.06.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changed in ClaimCenter 8.0") && Guidewire_FMSourceFileMatch(SRCFILE,"e-app.06.04.html") ) { return "e-app.06.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Special Handling \u2013 Customer Service Tiers") && Guidewire_FMSourceFileMatch(SRCFILE,"e-app.06.05.html") ) { return "e-app.06.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Weighted Workload") && Guidewire_FMSourceFileMatch(SRCFILE,"e-app.06.06.html") ) { return "e-app.06.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Multicurrency Reserving") && Guidewire_FMSourceFileMatch(SRCFILE,"e-app.06.07.html") ) { return "e-app.06.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Aggregate Limits") && Guidewire_FMSourceFileMatch(SRCFILE,"e-app.06.08.html") ) { return "e-app.06.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changed ClaimException Batch Process") && Guidewire_FMSourceFileMatch(SRCFILE,"e-app.06.09.html") ) { return "e-app.06.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to the Address Book Tab") && Guidewire_FMSourceFileMatch(SRCFILE,"e-app.06.10.html") ) { return "e-app.06.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Contact Changes No Longer Require Permissions") && Guidewire_FMSourceFileMatch(SRCFILE,"e-app.06.11.html") ) { return "e-app.06.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Integration with ContactManager") && Guidewire_FMSourceFileMatch(SRCFILE,"e-app.06.12.html") ) { return "e-app.06.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"New and Changed in Configuration in 8.0") && Guidewire_FMSourceFileMatch(SRCFILE,"e-configuration.07.1.html") ) { return "e-configuration.07.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Important Changes to the Configuration Module") && Guidewire_FMSourceFileMatch(SRCFILE,"e-configuration.07.2.html") ) { return "e-configuration.07.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to the Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"e-configuration.07.3.html") ) { return "e-configuration.07.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to the Generate Dictionary Command") && Guidewire_FMSourceFileMatch(SRCFILE,"e-configuration.07.4.html") ) { return "e-configuration.07.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Guidewire Studio") && Guidewire_FMSourceFileMatch(SRCFILE,"e-configuration.07.5.html") ) { return "e-configuration.07.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Configuration Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"e-configuration.07.6.html") ) { return "e-configuration.07.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"e-configuration.07.7.html") ) { return "e-configuration.07.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes Related to PCF Files") && Guidewire_FMSourceFileMatch(SRCFILE,"e-configuration.07.8.html") ) { return "e-configuration.07.8.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes Related to Integrating with ContactManager") && Guidewire_FMSourceFileMatch(SRCFILE,"e-configuration.07.9.html") ) { return "e-configuration.07.9.html";}
else if (Guidewire_TopicMatch(TOPIC,"New and Changed in Gosu in 8.0") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.01.html") ) { return "e-gosu.08.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"New in Gosu in ClaimCenter 8.0") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.02.html") ) { return "e-gosu.08.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"New Assert Statement") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.03.html") ) { return "e-gosu.08.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"In For Loop Declarations, Local Variable is Now Optional") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.04.html") ) { return "e-gosu.08.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Final Local Variable and Class Variable Initialization Separate from Declaration") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.05.html") ) { return "e-gosu.08.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"The new Operator is Now Optionally a Statement") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.06.html") ) { return "e-gosu.08.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Support Annotations on Function Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.07.html") ) { return "e-gosu.08.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Named Arguments in Annotations") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.08.html") ) { return "e-gosu.08.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"New Support for Code Coverage Tools for Gosu Code") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.09.html") ) { return "e-gosu.08.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"The Entity Touch API is Changed and No Longer Deprecated") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.10.html") ) { return "e-gosu.08.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changed in Gosu in ClaimCenter 8.0") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.11.html") ) { return "e-gosu.08.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Bundle Changes from Gosu and Java") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.12.html") ) { return "e-gosu.08.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Gosu Map Enhancement Method Changes") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.13.html") ) { return "e-gosu.08.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Entity Literal Syntax is Deprecated") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.14.html") ) { return "e-gosu.08.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Entity Methods loadByKey and loadByPublicID Deprecated, New Method loadBean") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.15.html") ) { return "e-gosu.08.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"For Various Types, Packages Changed to Reflect Public and Internal Status") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.16.html") ) { return "e-gosu.08.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"Gosu Concurrency API Changes") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.17.html") ) { return "e-gosu.08.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"The () Inequality Operator Is Now Invalid") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.18.html") ) { return "e-gosu.08.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"The Gosu Command Line Tool Built-in Editor Removed") && Guidewire_FMSourceFileMatch(SRCFILE,"e-gosu.08.19.html") ) { return "e-gosu.08.19.html";}
else if (Guidewire_TopicMatch(TOPIC,"New and Changed in Integration in 8.0") && Guidewire_FMSourceFileMatch(SRCFILE,"e-integration.09.01.html") ) { return "e-integration.09.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"New in Integration in ClaimCenter 8.0") && Guidewire_FMSourceFileMatch(SRCFILE,"e-integration.09.02.html") ) { return "e-integration.09.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"New Phone Number Normalizer Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"e-integration.09.03.html") ) { return "e-integration.09.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"New MTOM Support for Results of Published WS-I Web Service") && Guidewire_FMSourceFileMatch(SRCFILE,"e-integration.09.04.html") ) { return "e-integration.09.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Multi-threaded Inbound Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"e-integration.09.05.html") ) { return "e-integration.09.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"New Plugin Interface IAggregateLimitTransactionPlugin") && Guidewire_FMSourceFileMatch(SRCFILE,"e-integration.09.06.html") ) { return "e-integration.09.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"New Plugin Interface PolicyLocationSearchPlugin") && Guidewire_FMSourceFileMatch(SRCFILE,"e-integration.09.07.html") ) { return "e-integration.09.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"New Messaging Destination Option for Messages Without Primary Object") && Guidewire_FMSourceFileMatch(SRCFILE,"e-integration.09.08.html") ) { return "e-integration.09.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Regenerating WSDL and XSD in Web Service Collections (regen-from-wsc)") && Guidewire_FMSourceFileMatch(SRCFILE,"e-integration.09.09.html") ) { return "e-integration.09.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changed in Integration in ClaimCenter 8.0") && Guidewire_FMSourceFileMatch(SRCFILE,"e-integration.09.10.html") ) { return "e-integration.09.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"RPCE Web Services Deprecated in 8.0") && Guidewire_FMSourceFileMatch(SRCFILE,"e-integration.09.11.html") ) { return "e-integration.09.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Existing Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"e-integration.09.12.html") ) { return "e-integration.09.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Important Changes for Java Code") && Guidewire_FMSourceFileMatch(SRCFILE,"e-integration.09.13.html") ) { return "e-integration.09.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Plugin Registry Changes in Studio") && Guidewire_FMSourceFileMatch(SRCFILE,"e-integration.09.14.html") ) { return "e-integration.09.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Importing the PolicyCenter Product Model into ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"e-integration.09.15.html") ) { return "e-integration.09.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Document Management Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"e-integration.09.16.html") ) { return "e-integration.09.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter Contact Plugins Changed") && Guidewire_FMSourceFileMatch(SRCFILE,"e-integration.09.17.html") ) { return "e-integration.09.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"New and Changed in System Administration in 8.0") && Guidewire_FMSourceFileMatch(SRCFILE,"e-administration.10.1.html") ) { return "e-administration.10.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"New in System Administration in 8.0") && Guidewire_FMSourceFileMatch(SRCFILE,"e-administration.10.2.html") ) { return "e-administration.10.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"DB2 Support") && Guidewire_FMSourceFileMatch(SRCFILE,"e-administration.10.3.html") ) { return "e-administration.10.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Phone Number Normalizer Work Queue") && Guidewire_FMSourceFileMatch(SRCFILE,"e-administration.10.4.html") ) { return "e-administration.10.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"User Workload Update Work Queue") && Guidewire_FMSourceFileMatch(SRCFILE,"e-administration.10.5.html") ) { return "e-administration.10.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changed in System Administration in 7.0") && Guidewire_FMSourceFileMatch(SRCFILE,"e-administration.10.6.html") ) { return "e-administration.10.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Database Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"e-administration.10.7.html") ) { return "e-administration.10.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Work Queue Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"e-administration.10.8.html") ) { return "e-administration.10.8.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Database Statistics Updating") && Guidewire_FMSourceFileMatch(SRCFILE,"e-administration.10.9.html") ) { return "e-administration.10.9.html";}
else if (Guidewire_TopicMatch(TOPIC,"New and Changed in Globalization in\u00a08.0") && Guidewire_FMSourceFileMatch(SRCFILE,"e-globalization.11.1.html") ) { return "e-globalization.11.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"New to Globalization in ClaimCenter 8.0") && Guidewire_FMSourceFileMatch(SRCFILE,"e-globalization.11.2.html") ) { return "e-globalization.11.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Globalization in ClaimCenter 8.0") && Guidewire_FMSourceFileMatch(SRCFILE,"e-globalization.11.3.html") ) { return "e-globalization.11.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"What\u2019s New and Changed in 7.0.0") && Guidewire_FMSourceFileMatch(SRCFILE,"part-b.html") ) { return "part-b.html";}
else if (Guidewire_TopicMatch(TOPIC,"New and Changed in ClaimCenter 7.0") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.01.html") ) { return "d-app.13.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Accounts and Accounts Special Handling") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.02.html") ) { return "d-app.13.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Bulk Invoices") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.03.html") ) { return "d-app.13.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Catastrophe Search and Heat Map") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.04.html") ) { return "d-app.13.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Financial Holds") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.05.html") ) { return "d-app.13.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"New Check Wizard") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.06.html") ) { return "d-app.13.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Policy Refresh") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.07.html") ) { return "d-app.13.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Policy Comparison in the Policy Refresh Wizard") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.08.html") ) { return "d-app.13.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"New Policy Refresh Configuration Options") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.09.html") ) { return "d-app.13.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Improved Object Handling") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.10.html") ) { return "d-app.13.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reinsurance") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.11.html") ) { return "d-app.13.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"New Reinsurance Manager User Role") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.12.html") ) { return "d-app.13.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"New Reinsurance Financial Summary Page") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.13.html") ) { return "d-app.13.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"New Reinsurance Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.14.html") ) { return "d-app.13.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Reinsurance Editable Fields on Claim Status Page") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.15.html") ) { return "d-app.13.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changed Access to Reinsurance Thresholds Page") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.16.html") ) { return "d-app.13.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changed Reinsurance Permissions") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.17.html") ) { return "d-app.13.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"Split Payment During Recode") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.18.html") ) { return "d-app.13.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"Vendor Data Management") && Guidewire_FMSourceFileMatch(SRCFILE,"d-app.13.19.html") ) { return "d-app.13.19.html";}
else if (Guidewire_TopicMatch(TOPIC,"New and Changed in Configuration in 7.0") && Guidewire_FMSourceFileMatch(SRCFILE,"d-configuration.14.01.html") ) { return "d-configuration.14.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to the Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"d-configuration.14.02.html") ) { return "d-configuration.14.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Guidewire Studio") && Guidewire_FMSourceFileMatch(SRCFILE,"d-configuration.14.03.html") ) { return "d-configuration.14.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Configuration Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"d-configuration.14.04.html") ) { return "d-configuration.14.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Configuring the ClaimCenter Check Wizard") && Guidewire_FMSourceFileMatch(SRCFILE,"d-configuration.14.05.html") ) { return "d-configuration.14.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"d-configuration.14.06.html") ) { return "d-configuration.14.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes Related to PCF Files") && Guidewire_FMSourceFileMatch(SRCFILE,"d-configuration.14.07.html") ) { return "d-configuration.14.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Line of Business Typecodes") && Guidewire_FMSourceFileMatch(SRCFILE,"d-configuration.14.08.html") ) { return "d-configuration.14.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Improvements in Localization") && Guidewire_FMSourceFileMatch(SRCFILE,"d-configuration.14.09.html") ) { return "d-configuration.14.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes Related to ContactCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"d-configuration.14.10.html") ) { return "d-configuration.14.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"New and Changed in Gosu in 7.0") && Guidewire_FMSourceFileMatch(SRCFILE,"d-gosu.15.01.html") ) { return "d-gosu.15.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"New in Gosu in 7.0") && Guidewire_FMSourceFileMatch(SRCFILE,"d-gosu.15.02.html") ) { return "d-gosu.15.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Gosu Support for Intervals") && Guidewire_FMSourceFileMatch(SRCFILE,"d-gosu.15.03.html") ) { return "d-gosu.15.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Gosu Support for Numeric Literals") && Guidewire_FMSourceFileMatch(SRCFILE,"d-gosu.15.04.html") ) { return "d-gosu.15.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"New Null-safe Operators") && Guidewire_FMSourceFileMatch(SRCFILE,"d-gosu.15.05.html") ) { return "d-gosu.15.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"New Named Function Arguments and Argument Defaults") && Guidewire_FMSourceFileMatch(SRCFILE,"d-gosu.15.06.html") ) { return "d-gosu.15.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changed in Gosu in 7.0") && Guidewire_FMSourceFileMatch(SRCFILE,"d-gosu.15.07.html") ) { return "d-gosu.15.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Gosu Compiles to Java Virtual Machine Bytecode") && Guidewire_FMSourceFileMatch(SRCFILE,"d-gosu.15.08.html") ) { return "d-gosu.15.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Gosu Syntax Changes (Compile Time Issues)") && Guidewire_FMSourceFileMatch(SRCFILE,"d-gosu.15.09.html") ) { return "d-gosu.15.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Gosu Behavior Changes (Run Time Issues)") && Guidewire_FMSourceFileMatch(SRCFILE,"d-gosu.15.10.html") ) { return "d-gosu.15.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"New XML APIs and Improved XSD Support Using \u2018XmlElement\u2019") && Guidewire_FMSourceFileMatch(SRCFILE,"d-gosu.15.11.html") ) { return "d-gosu.15.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire XML Modeler (GX Modeler) Upgraded to Use New XML API") && Guidewire_FMSourceFileMatch(SRCFILE,"d-gosu.15.12.html") ) { return "d-gosu.15.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Interceptors Removed") && Guidewire_FMSourceFileMatch(SRCFILE,"d-gosu.15.13.html") ) { return "d-gosu.15.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"New and Changed in System Administration in 7.0") && Guidewire_FMSourceFileMatch(SRCFILE,"d-administration.16.1.html") ) { return "d-administration.16.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"New in System Administration in 7.0") && Guidewire_FMSourceFileMatch(SRCFILE,"d-administration.16.2.html") ) { return "d-administration.16.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"DCE VM Strongly Recommended for Development Environments") && Guidewire_FMSourceFileMatch(SRCFILE,"d-administration.16.3.html") ) { return "d-administration.16.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changed in System Administration in 7.0") && Guidewire_FMSourceFileMatch(SRCFILE,"d-administration.16.4.html") ) { return "d-administration.16.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Updated System Requirements") && Guidewire_FMSourceFileMatch(SRCFILE,"d-administration.16.5.html") ) { return "d-administration.16.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Database Configuration Changes") && Guidewire_FMSourceFileMatch(SRCFILE,"d-administration.16.6.html") ) { return "d-administration.16.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"New and Changed in Integration in 7.0") && Guidewire_FMSourceFileMatch(SRCFILE,"d-integration.17.01.html") ) { return "d-integration.17.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"New in Integration in 7.0") && Guidewire_FMSourceFileMatch(SRCFILE,"d-integration.17.02.html") ) { return "d-integration.17.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"New ClaimCenter PolicyCenter Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"d-integration.17.03.html") ) { return "d-integration.17.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes in Integration in 7.0") && Guidewire_FMSourceFileMatch(SRCFILE,"d-integration.17.04.html") ) { return "d-integration.17.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"WS-I Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"d-integration.17.05.html") ) { return "d-integration.17.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting Locale in WS-I Requests for Guidewire Servers Only") && Guidewire_FMSourceFileMatch(SRCFILE,"d-integration.17.06.html") ) { return "d-integration.17.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Locally-Accessed RPCE Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"d-integration.17.07.html") ) { return "d-integration.17.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire InsuranceSuite Plugin Implementations are Versioned") && Guidewire_FMSourceFileMatch(SRCFILE,"d-integration.17.08.html") ) { return "d-integration.17.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"SOAP Implementation Classes and WSDL Packages Include Version") && Guidewire_FMSourceFileMatch(SRCFILE,"d-integration.17.09.html") ) { return "d-integration.17.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Geocoding Only Some Addresses") && Guidewire_FMSourceFileMatch(SRCFILE,"d-integration.17.10.html") ) { return "d-integration.17.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Geocoding Service") && Guidewire_FMSourceFileMatch(SRCFILE,"d-integration.17.11.html") ) { return "d-integration.17.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Escalation and Exception Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"d-integration.17.12.html") ) { return "d-integration.17.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to FNOL Matcher Classes") && Guidewire_FMSourceFileMatch(SRCFILE,"d-integration.17.13.html") ) { return "d-integration.17.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Messaging System Safe Ordering") && Guidewire_FMSourceFileMatch(SRCFILE,"d-integration.17.14.html") ) { return "d-integration.17.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"New and Changed in Rules in 7.0") && Guidewire_FMSourceFileMatch(SRCFILE,"d-rules.18.1.html") ) { return "d-rules.18.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes in Rules in ClaimCenter 7.0") && Guidewire_FMSourceFileMatch(SRCFILE,"d-rules.18.2.html") ) { return "d-rules.18.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Release Notes Archive") && Guidewire_FMSourceFileMatch(SRCFILE,"part-relnotes.html") ) { return "part-relnotes.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter 6.0.0 Release\u00a0Notes") && Guidewire_FMSourceFileMatch(SRCFILE,"relnotes-cc600.html") ) { return "relnotes-cc600.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter 6.0.1 Release\u00a0Notes") && Guidewire_FMSourceFileMatch(SRCFILE,"relnotes-cc601.html") ) { return "relnotes-cc601.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter 6.0.2 Release\u00a0Notes") && Guidewire_FMSourceFileMatch(SRCFILE,"relnotes-cc602.html") ) { return "relnotes-cc602.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter 6.0.3 Release\u00a0Notes") && Guidewire_FMSourceFileMatch(SRCFILE,"relnotes-cc603.html") ) { return "relnotes-cc603.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter 6.0.4 Release\u00a0Notes") && Guidewire_FMSourceFileMatch(SRCFILE,"ReleaseNotes_CC-604.html") ) { return "ReleaseNotes_CC-604.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter 6.0.5 Release\u00a0Notes") && Guidewire_FMSourceFileMatch(SRCFILE,"ReleaseNotes_CC-605.html") ) { return "ReleaseNotes_CC-605.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter 6.0.6 Release\u00a0Notes") && Guidewire_FMSourceFileMatch(SRCFILE,"ReleaseNotes_CC-606.html") ) { return "ReleaseNotes_CC-606.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter 6.0.7 Release\u00a0Notes") && Guidewire_FMSourceFileMatch(SRCFILE,"ReleaseNotes-CC607.html") ) { return "ReleaseNotes-CC607.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter 7.0.0 Release\u00a0Notes") && Guidewire_FMSourceFileMatch(SRCFILE,"ReleaseNotes_CC-700.html") ) { return "ReleaseNotes_CC-700.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter 7.0.1 Release\u00a0Notes") && Guidewire_FMSourceFileMatch(SRCFILE,"ReleaseNotes_CC-701.html") ) { return "ReleaseNotes_CC-701.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter 7.0.2 Release\u00a0Notes") && Guidewire_FMSourceFileMatch(SRCFILE,"ReleaseNotes-CC702.html") ) { return "ReleaseNotes-CC702.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter 7.0.3 Release\u00a0Notes") && Guidewire_FMSourceFileMatch(SRCFILE,"ReleaseNotes-CC703.html") ) { return "ReleaseNotes-CC703.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter 7.0.4 Release\u00a0Notes") && Guidewire_FMSourceFileMatch(SRCFILE,"ReleaseNotes-CC704.html") ) { return "ReleaseNotes-CC704.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter 7.0.5 Release\u00a0Notes") && Guidewire_FMSourceFileMatch(SRCFILE,"ReleaseNotes-CC705.html") ) { return "ReleaseNotes-CC705.html";}
else { return("../wwhelp/topic_cannot_be_found.html"); } }

function  WWHBookData_MatchTopic(P)
{
var C=null;P=decodeURIComponent(decodeURIComponent(escape(P)));//workaround epub bug with UTF8 processing!
if (C) { return C } else { return GUIDEWIRE_TOPIC_TO_FILE(P,Guidewire_ExtractSrcFromURL());}
}
