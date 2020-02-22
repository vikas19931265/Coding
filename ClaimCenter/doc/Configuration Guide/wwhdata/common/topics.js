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

else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter\u00ae") && Guidewire_FMSourceFileMatch(SRCFILE,"cover-config.html") ) { return "cover-config.html";}
else if (Guidewire_TopicMatch(TOPIC,"About ClaimCenter Documentation") && Guidewire_FMSourceFileMatch(SRCFILE,"about.html") ) { return "about.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter Configuration Basics") && Guidewire_FMSourceFileMatch(SRCFILE,"p-basics.html") ) { return "p-basics.html";}
else if (Guidewire_TopicMatch(TOPIC,"Overview of ClaimCenter Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"overview.04.1.html") ) { return "overview.04.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"What You Can Configure") && Guidewire_FMSourceFileMatch(SRCFILE,"overview.04.2.html") ) { return "overview.04.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"How You Configure ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"overview.04.3.html") ) { return "overview.04.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Types of Application Environments") && Guidewire_FMSourceFileMatch(SRCFILE,"overview.04.4.html") ) { return "overview.04.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Deploying Configuration Files") && Guidewire_FMSourceFileMatch(SRCFILE,"overview.04.5.html") ) { return "overview.04.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Regenerating the Data Dictionary and Security Dictionary") && Guidewire_FMSourceFileMatch(SRCFILE,"overview.04.6.html") ) { return "overview.04.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Configuration Changes") && Guidewire_FMSourceFileMatch(SRCFILE,"overview.04.7.html") ) { return "overview.04.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Application Configuration Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.01.html") ) { return "params.05.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Configuration Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.02.html") ) { return "params.05.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Approval Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.03.html") ) { return "params.05.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Archive Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.04.html") ) { return "params.05.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Assignment Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.05.html") ) { return "params.05.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Batch Process Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.06.html") ) { return "params.05.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Business Calendar Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.07.html") ) { return "params.05.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Cache Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.08.html") ) { return "params.05.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Catastrophe Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.09.html") ) { return "params.05.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Health Indicator and Metric Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.10.html") ) { return "params.05.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Clustering Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.11.html") ) { return "params.05.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Database Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.12.html") ) { return "params.05.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Deduction Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.13.html") ) { return "params.05.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Document Creation and Document Management Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.14.html") ) { return "params.05.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Domain Graph Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.15.html") ) { return "params.05.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Environment Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.16.html") ) { return "params.05.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"Financial Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.17.html") ) { return "params.05.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"Geocoding Feature Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.18.html") ) { return "params.05.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"Globalization Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.19.html") ) { return "params.05.19.html";}
else if (Guidewire_TopicMatch(TOPIC,"Integration Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.20.html") ) { return "params.05.20.html";}
else if (Guidewire_TopicMatch(TOPIC,"Miscellaneous Bulk Invoice Activity Pattern Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.21.html") ) { return "params.05.21.html";}
else if (Guidewire_TopicMatch(TOPIC,"Miscellaneous Financial Activity Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.22.html") ) { return "params.05.22.html";}
else if (Guidewire_TopicMatch(TOPIC,"Miscellaneous Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.23.html") ) { return "params.05.23.html";}
else if (Guidewire_TopicMatch(TOPIC,"PDF Print Settings Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.24.html") ) { return "params.05.24.html";}
else if (Guidewire_TopicMatch(TOPIC,"Scheduler and Workflow Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.25.html") ) { return "params.05.25.html";}
else if (Guidewire_TopicMatch(TOPIC,"Search Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.26.html") ) { return "params.05.26.html";}
else if (Guidewire_TopicMatch(TOPIC,"Security Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.27.html") ) { return "params.05.27.html";}
else if (Guidewire_TopicMatch(TOPIC,"Segmentation Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.28.html") ) { return "params.05.28.html";}
else if (Guidewire_TopicMatch(TOPIC,"Service Request Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.29.html") ) { return "params.05.29.html";}
else if (Guidewire_TopicMatch(TOPIC,"Spell Check Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.30.html") ) { return "params.05.30.html";}
else if (Guidewire_TopicMatch(TOPIC,"Statistics, Team, and Dashboard Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.31.html") ) { return "params.05.31.html";}
else if (Guidewire_TopicMatch(TOPIC,"User Interface Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.32.html") ) { return "params.05.32.html";}
else if (Guidewire_TopicMatch(TOPIC,"Work Queue Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"params.05.33.html") ) { return "params.05.33.html";}
else if (Guidewire_TopicMatch(TOPIC,"The Guidewire Development Environment") && Guidewire_FMSourceFileMatch(SRCFILE,"p-datamodel.html") ) { return "p-datamodel.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Guidewire Studio") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_configure.07.1.html") ) { return "studio_configure.07.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"What Is Guidewire Studio") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_configure.07.2.html") ) { return "studio_configure.07.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Starting Guidewire Studio") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_configure.07.3.html") ) { return "studio_configure.07.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Restarting Studio") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_configure.07.4.html") ) { return "studio_configure.07.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"The Studio Development Environment") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_configure.07.5.html") ) { return "studio_configure.07.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with the QuickStart Development Server") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_configure.07.6.html") ) { return "studio_configure.07.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter Configuration Files") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_configure.07.7.html") ) { return "studio_configure.07.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter Studio and Gosu") && Guidewire_FMSourceFileMatch(SRCFILE,"building_blocks.08.01.html") ) { return "building_blocks.08.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Studio and the DCE VM") && Guidewire_FMSourceFileMatch(SRCFILE,"building_blocks.08.02.html") ) { return "building_blocks.08.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Gosu Building Blocks") && Guidewire_FMSourceFileMatch(SRCFILE,"building_blocks.08.03.html") ) { return "building_blocks.08.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Gosu Case Sensitivity") && Guidewire_FMSourceFileMatch(SRCFILE,"building_blocks.08.04.html") ) { return "building_blocks.08.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Gosu in ClaimCenter Studio") && Guidewire_FMSourceFileMatch(SRCFILE,"building_blocks.08.05.html") ) { return "building_blocks.08.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Gosu Packages") && Guidewire_FMSourceFileMatch(SRCFILE,"building_blocks.08.06.html") ) { return "building_blocks.08.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Gosu Classes") && Guidewire_FMSourceFileMatch(SRCFILE,"building_blocks.08.07.html") ) { return "building_blocks.08.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter Base Configuration Classes") && Guidewire_FMSourceFileMatch(SRCFILE,"building_blocks.08.08.html") ) { return "building_blocks.08.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Class Visibility in Studio") && Guidewire_FMSourceFileMatch(SRCFILE,"building_blocks.08.09.html") ) { return "building_blocks.08.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Preloading Gosu Classes") && Guidewire_FMSourceFileMatch(SRCFILE,"building_blocks.08.10.html") ) { return "building_blocks.08.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Gosu Enhancements") && Guidewire_FMSourceFileMatch(SRCFILE,"building_blocks.08.11.html") ) { return "building_blocks.08.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"The Guidewire XML Model") && Guidewire_FMSourceFileMatch(SRCFILE,"building_blocks.08.12.html") ) { return "building_blocks.08.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Script Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"building_blocks.08.13.html") ) { return "building_blocks.08.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Script Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"building_blocks.08.14.html") ) { return "building_blocks.08.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Referencing a Script Parameter in Gosu") && Guidewire_FMSourceFileMatch(SRCFILE,"building_blocks.08.15.html") ) { return "building_blocks.08.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire Studio Editors") && Guidewire_FMSourceFileMatch(SRCFILE,"p-editors.html") ) { return "p-editors.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the Studio Editors") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_editors.10.1.html") ) { return "studio_editors.10.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Editing in Guidewire Studio") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_editors.10.2.html") ) { return "studio_editors.10.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working in the Gosu Editor") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_editors.10.3.html") ) { return "studio_editors.10.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the Plugins Registry Editor") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_plugins.11.1.html") ) { return "studio_plugins.11.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"What Are Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_plugins.11.2.html") ) { return "studio_plugins.11.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_plugins.11.3.html") ) { return "studio_plugins.11.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Customizing Plugin Functionality") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_plugins.11.4.html") ) { return "studio_plugins.11.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Plugin Versions") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_plugins.11.5.html") ) { return "studio_plugins.11.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Web Services") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_web_services.12.1.html") ) { return "studio_web_services.12.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Web Services and Guidewire Studio") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_web_services.12.2.html") ) { return "studio_web_services.12.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the RPC-Encoded Web Services Editor") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_web_services.12.3.html") ) { return "studio_web_services.12.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the WS-I Web Service Editor") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_web_services.12.4.html") ) { return "studio_web_services.12.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Defining a Web Service Collection") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_web_services.12.5.html") ) { return "studio_web_services.12.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Implementing QuickJump Commands") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_quickjump.13.1.html") ) { return "studio_quickjump.13.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"What Is QuickJump") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_quickjump.13.2.html") ) { return "studio_quickjump.13.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding a QuickJump Navigation Command") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_quickjump.13.3.html") ) { return "studio_quickjump.13.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Implementing QuickJumpCommandRef Commands") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_quickjump.13.4.html") ) { return "studio_quickjump.13.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Implementing StaticNavigationCommandRef Commands") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_quickjump.13.5.html") ) { return "studio_quickjump.13.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Implementing ContextualNavigationCommandRef Commands") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_quickjump.13.6.html") ) { return "studio_quickjump.13.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Checking Permissions on QuickJump Navigation Commands") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_quickjump.13.7.html") ) { return "studio_quickjump.13.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the Entity Names Editor") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_entity_names.14.1.html") ) { return "studio_entity_names.14.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Entity Names Editor") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_entity_names.14.2.html") ) { return "studio_entity_names.14.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Variable Table") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_entity_names.14.3.html") ) { return "studio_entity_names.14.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Gosu Text Editor") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_entity_names.14.4.html") ) { return "studio_entity_names.14.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Including Data from Subentities") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_entity_names.14.5.html") ) { return "studio_entity_names.14.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Entity Name Types") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_entity_names.14.6.html") ) { return "studio_entity_names.14.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the Messaging Editor") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_messaging.15.1.html") ) { return "studio_messaging.15.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Messaging Editor") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_messaging.15.2.html") ) { return "studio_messaging.15.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the Display Keys Editor") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_displaykey_editor.16.1.html") ) { return "studio_displaykey_editor.16.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Display Keys Editor") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_displaykey_editor.16.2.html") ) { return "studio_displaykey_editor.16.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating Display Keys in a Gosu Editor") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_displaykey_editor.16.3.html") ) { return "studio_displaykey_editor.16.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Retrieving the Value of a Display Key") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_displaykey_editor.16.4.html") ) { return "studio_displaykey_editor.16.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Data Model Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"p-datamodel_2.html") ) { return "p-datamodel_2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with the Data Dictionary") && Guidewire_FMSourceFileMatch(SRCFILE,"data_dictionary.18.1.html") ) { return "data_dictionary.18.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"What is the Data Dictionary") && Guidewire_FMSourceFileMatch(SRCFILE,"data_dictionary.18.2.html") ) { return "data_dictionary.18.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"What Can You View in the Data Dictionary") && Guidewire_FMSourceFileMatch(SRCFILE,"data_dictionary.18.3.html") ) { return "data_dictionary.18.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the Data Dictionary") && Guidewire_FMSourceFileMatch(SRCFILE,"data_dictionary.18.4.html") ) { return "data_dictionary.18.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"The ClaimCenter Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.01.html") ) { return "entities.19.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"What is the Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.02.html") ) { return "entities.19.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Overview of Data Entities") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.03.html") ) { return "entities.19.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Base ClaimCenter Data Objects") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.04.html") ) { return "entities.19.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Component Data Objects") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.05.html") ) { return "entities.19.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Delegate Data Objects") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.06.html") ) { return "entities.19.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Delete Entity Data Objects") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.07.html") ) { return "entities.19.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Entity Data Objects") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.08.html") ) { return "entities.19.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Extension Data Objects") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.09.html") ) { return "entities.19.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"NonPersistent Entity Data Objects") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.10.html") ) { return "entities.19.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Subtype Data Objects") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.11.html") ) { return "entities.19.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"viewEntity Data Objects") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.12.html") ) { return "entities.19.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"viewEntityExtension Data Objects") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.13.html") ) { return "entities.19.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Data Object Subelements") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.14.html") ) { return "entities.19.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"(array)") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.15.html") ) { return "entities.19.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"(column)") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.16.html") ) { return "entities.19.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"(componentref)") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.17.html") ) { return "entities.19.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"(edgeForeignKey)") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.18.html") ) { return "entities.19.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"(events)") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.19.html") ) { return "entities.19.19.html";}
else if (Guidewire_TopicMatch(TOPIC,"(foreignkey)") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.20.html") ) { return "entities.19.20.html";}
else if (Guidewire_TopicMatch(TOPIC,"(fulldescription)") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.21.html") ) { return "entities.19.21.html";}
else if (Guidewire_TopicMatch(TOPIC,"(implementsEntity)") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.22.html") ) { return "entities.19.22.html";}
else if (Guidewire_TopicMatch(TOPIC,"(implementsInterface)") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.23.html") ) { return "entities.19.23.html";}
else if (Guidewire_TopicMatch(TOPIC,"(index)") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.24.html") ) { return "entities.19.24.html";}
else if (Guidewire_TopicMatch(TOPIC,"(onetoone)") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.25.html") ) { return "entities.19.25.html";}
else if (Guidewire_TopicMatch(TOPIC,"(remove-index)") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.26.html") ) { return "entities.19.26.html";}
else if (Guidewire_TopicMatch(TOPIC,"(typekey)") && Guidewire_FMSourceFileMatch(SRCFILE,"entities.19.27.html") ) { return "entities.19.27.html";}
else if (Guidewire_TopicMatch(TOPIC,"Modifying the Base Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"extenddm.20.01.html") ) { return "extenddm.20.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Planning Changes to the Base Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"extenddm.20.02.html") ) { return "extenddm.20.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Defining a New Data Entity") && Guidewire_FMSourceFileMatch(SRCFILE,"extenddm.20.03.html") ) { return "extenddm.20.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Extending a Base Configuration Entity") && Guidewire_FMSourceFileMatch(SRCFILE,"extenddm.20.04.html") ) { return "extenddm.20.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Attribute Overrides") && Guidewire_FMSourceFileMatch(SRCFILE,"extenddm.20.05.html") ) { return "extenddm.20.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Extending the Base Data Model: Examples") && Guidewire_FMSourceFileMatch(SRCFILE,"extenddm.20.06.html") ) { return "extenddm.20.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating a New Delegate Object") && Guidewire_FMSourceFileMatch(SRCFILE,"extenddm.20.07.html") ) { return "extenddm.20.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Extending a Delegate Object") && Guidewire_FMSourceFileMatch(SRCFILE,"extenddm.20.08.html") ) { return "extenddm.20.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Defining a Subtype") && Guidewire_FMSourceFileMatch(SRCFILE,"extenddm.20.09.html") ) { return "extenddm.20.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Defining a Reference Entity") && Guidewire_FMSourceFileMatch(SRCFILE,"extenddm.20.10.html") ) { return "extenddm.20.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Defining an Entity Array") && Guidewire_FMSourceFileMatch(SRCFILE,"extenddm.20.11.html") ) { return "extenddm.20.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Implementing a Many-to-Many Relationship Between Entity Types") && Guidewire_FMSourceFileMatch(SRCFILE,"extenddm.20.12.html") ) { return "extenddm.20.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Extending an Existing View Entity") && Guidewire_FMSourceFileMatch(SRCFILE,"extenddm.20.13.html") ) { return "extenddm.20.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Removing Objects from the Base Configuration Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"extenddm.20.14.html") ) { return "extenddm.20.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Deploying Data Model Changes to the Application Server") && Guidewire_FMSourceFileMatch(SRCFILE,"extenddm.20.15.html") ) { return "extenddm.20.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Associative Arrays") && Guidewire_FMSourceFileMatch(SRCFILE,"associative_arrays.21.1.html") ) { return "associative_arrays.21.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Overview of Associative Arrays") && Guidewire_FMSourceFileMatch(SRCFILE,"associative_arrays.21.2.html") ) { return "associative_arrays.21.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Subtype Mapping Associative Arrays") && Guidewire_FMSourceFileMatch(SRCFILE,"associative_arrays.21.3.html") ) { return "associative_arrays.21.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Typelist Mapping Associative Arrays") && Guidewire_FMSourceFileMatch(SRCFILE,"associative_arrays.21.4.html") ) { return "associative_arrays.21.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"The Domain Graph") && Guidewire_FMSourceFileMatch(SRCFILE,"domain_graph.22.1.html") ) { return "domain_graph.22.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Domain Graph Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"domain_graph.22.2.html") ) { return "domain_graph.22.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Object Ownership and the Domain Graph") && Guidewire_FMSourceFileMatch(SRCFILE,"domain_graph.22.3.html") ) { return "domain_graph.22.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Accessing the Domain Graph") && Guidewire_FMSourceFileMatch(SRCFILE,"domain_graph.22.4.html") ) { return "domain_graph.22.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding Objects to the Domain Graph") && Guidewire_FMSourceFileMatch(SRCFILE,"domain_graph.22.5.html") ) { return "domain_graph.22.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Graph Validation Tests") && Guidewire_FMSourceFileMatch(SRCFILE,"domain_graph.22.6.html") ) { return "domain_graph.22.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Changes to the Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"domain_graph.22.7.html") ) { return "domain_graph.22.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Shared Entity Data") && Guidewire_FMSourceFileMatch(SRCFILE,"domain_graph.22.8.html") ) { return "domain_graph.22.8.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Cycles") && Guidewire_FMSourceFileMatch(SRCFILE,"domain_graph.22.9.html") ) { return "domain_graph.22.9.html";}
else if (Guidewire_TopicMatch(TOPIC,"Field Validation") && Guidewire_FMSourceFileMatch(SRCFILE,"fieldvalidators.23.1.html") ) { return "fieldvalidators.23.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Field Validators") && Guidewire_FMSourceFileMatch(SRCFILE,"fieldvalidators.23.2.html") ) { return "fieldvalidators.23.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Field Validator Definitions") && Guidewire_FMSourceFileMatch(SRCFILE,"fieldvalidators.23.3.html") ) { return "fieldvalidators.23.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"(FieldValidators)") && Guidewire_FMSourceFileMatch(SRCFILE,"fieldvalidators.23.4.html") ) { return "fieldvalidators.23.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Modifying Field Validators") && Guidewire_FMSourceFileMatch(SRCFILE,"fieldvalidators.23.5.html") ) { return "fieldvalidators.23.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Data Types") && Guidewire_FMSourceFileMatch(SRCFILE,"datatypes.24.1.html") ) { return "datatypes.24.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Overview of Data TypesAllowMultipleLineItems") && Guidewire_FMSourceFileMatch(SRCFILE,"datatypes.24.2.html") ) { return "datatypes.24.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"The Data Types Configuration File") && Guidewire_FMSourceFileMatch(SRCFILE,"datatypes.24.3.html") ) { return "datatypes.24.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Customizing Base Configuration Data Types") && Guidewire_FMSourceFileMatch(SRCFILE,"datatypes.24.4.html") ) { return "datatypes.24.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with the Medium Text Data Type (Oracle)") && Guidewire_FMSourceFileMatch(SRCFILE,"datatypes.24.5.html") ) { return "datatypes.24.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"The Data Type API") && Guidewire_FMSourceFileMatch(SRCFILE,"datatypes.24.6.html") ) { return "datatypes.24.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Defining a New Data Type: Required Steps") && Guidewire_FMSourceFileMatch(SRCFILE,"datatypes.24.7.html") ) { return "datatypes.24.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Defining a New Tax Identification Number Data Type") && Guidewire_FMSourceFileMatch(SRCFILE,"datatypes.24.8.html") ) { return "datatypes.24.8.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Typelists") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_typelist.25.01.html") ) { return "studio_typelist.25.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"What is a Typelist") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_typelist.25.02.html") ) { return "studio_typelist.25.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Terms Related to Typelists") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_typelist.25.03.html") ) { return "studio_typelist.25.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Typelists and Typecodes") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_typelist.25.04.html") ) { return "studio_typelist.25.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Typelist Definition Files") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_typelist.25.05.html") ) { return "studio_typelist.25.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Different Kinds of Typelists") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_typelist.25.06.html") ) { return "studio_typelist.25.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Typelists in Studio") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_typelist.25.07.html") ) { return "studio_typelist.25.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Typekey Fields") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_typelist.25.08.html") ) { return "studio_typelist.25.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Removing or Retiring a Typekey") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_typelist.25.09.html") ) { return "studio_typelist.25.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Typelist Filters") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_typelist.25.10.html") ) { return "studio_typelist.25.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Static Filters") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_typelist.25.11.html") ) { return "studio_typelist.25.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Dynamic Filters") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_typelist.25.12.html") ) { return "studio_typelist.25.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Typecode References in Gosu") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_typelist.25.13.html") ) { return "studio_typelist.25.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Mapping Typecodes to External System Codes") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_typelist.25.14.html") ) { return "studio_typelist.25.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"User Interface Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"p-ui.html") ) { return "p-ui.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the PCF Editor") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_pcf.27.01.html") ) { return "studio_pcf.27.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Page Configuration (PCF) Editor") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_pcf.27.02.html") ) { return "studio_pcf.27.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Page Canvas Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_pcf.27.03.html") ) { return "studio_pcf.27.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating a New PCF File") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_pcf.27.04.html") ) { return "studio_pcf.27.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Shared or Included Files") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_pcf.27.05.html") ) { return "studio_pcf.27.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Page Config Menu") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_pcf.27.06.html") ) { return "studio_pcf.27.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Toolbox Tab") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_pcf.27.07.html") ) { return "studio_pcf.27.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Structure Tab") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_pcf.27.08.html") ) { return "studio_pcf.27.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Properties Tab") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_pcf.27.09.html") ) { return "studio_pcf.27.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"PCF Elements") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_pcf.27.10.html") ) { return "studio_pcf.27.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Elements") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_pcf.27.11.html") ) { return "studio_pcf.27.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Introduction to Page Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"pageconfig.28.1.html") ) { return "pageconfig.28.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Page Configuration Files") && Guidewire_FMSourceFileMatch(SRCFILE,"pageconfig.28.2.html") ) { return "pageconfig.28.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Page Configuration Elements") && Guidewire_FMSourceFileMatch(SRCFILE,"pageconfig.28.3.html") ) { return "pageconfig.28.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Getting Started Configuring Pages") && Guidewire_FMSourceFileMatch(SRCFILE,"pageconfig.28.4.html") ) { return "pageconfig.28.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Modifying Style and Theme Elements") && Guidewire_FMSourceFileMatch(SRCFILE,"pageconfig.28.5.html") ) { return "pageconfig.28.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Data Panels") && Guidewire_FMSourceFileMatch(SRCFILE,"panels.29.1.html") ) { return "panels.29.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Panel Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"panels.29.2.html") ) { return "panels.29.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Detail View Panel") && Guidewire_FMSourceFileMatch(SRCFILE,"panels.29.3.html") ) { return "panels.29.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"List View Panel") && Guidewire_FMSourceFileMatch(SRCFILE,"panels.29.4.html") ) { return "panels.29.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Location Groups") && Guidewire_FMSourceFileMatch(SRCFILE,"locationgroups.30.1.html") ) { return "locationgroups.30.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Location Group Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"locationgroups.30.2.html") ) { return "locationgroups.30.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Define a Location Group") && Guidewire_FMSourceFileMatch(SRCFILE,"locationgroups.30.3.html") ) { return "locationgroups.30.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Location Groups as Navigation") && Guidewire_FMSourceFileMatch(SRCFILE,"locationgroups.30.4.html") ) { return "locationgroups.30.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Navigation") && Guidewire_FMSourceFileMatch(SRCFILE,"nav.31.1.html") ) { return "nav.31.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Navigation Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"nav.31.2.html") ) { return "nav.31.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Tab Bars") && Guidewire_FMSourceFileMatch(SRCFILE,"nav.31.3.html") ) { return "nav.31.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Tabs") && Guidewire_FMSourceFileMatch(SRCFILE,"nav.31.4.html") ) { return "nav.31.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Spell Check") && Guidewire_FMSourceFileMatch(SRCFILE,"spellcheck.32.1.html") ) { return "spellcheck.32.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the Spell Checking Feature") && Guidewire_FMSourceFileMatch(SRCFILE,"spellcheck.32.2.html") ) { return "spellcheck.32.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"How to Configure Spell Check") && Guidewire_FMSourceFileMatch(SRCFILE,"spellcheck.32.3.html") ) { return "spellcheck.32.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Search Functionality") && Guidewire_FMSourceFileMatch(SRCFILE,"search.33.01.html") ) { return "search.33.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Database Search Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"search.33.02.html") ) { return "search.33.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter Database Search Functionality") && Guidewire_FMSourceFileMatch(SRCFILE,"search.33.03.html") ) { return "search.33.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring ClaimCenter Database Search") && Guidewire_FMSourceFileMatch(SRCFILE,"search.33.04.html") ) { return "search.33.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Deploying Customized Database Search Files") && Guidewire_FMSourceFileMatch(SRCFILE,"search.33.05.html") ) { return "search.33.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Steps in Customizing a Database Search") && Guidewire_FMSourceFileMatch(SRCFILE,"search.33.06.html") ) { return "search.33.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Free-text Search Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"search.33.07.html") ) { return "search.33.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Free-text Search System Architecture") && Guidewire_FMSourceFileMatch(SRCFILE,"search.33.08.html") ) { return "search.33.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Enabling Free-text Search in ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"search.33.09.html") ) { return "search.33.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring the Guidewire Solr Extension for Integration with ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"search.33.10.html") ) { return "search.33.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Free-text Search for Indexing and Searching") && Guidewire_FMSourceFileMatch(SRCFILE,"search.33.11.html") ) { return "search.33.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring the Free-text Batch Load Command") && Guidewire_FMSourceFileMatch(SRCFILE,"search.33.12.html") ) { return "search.33.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring the Search by Contact Screen for Free-text Search") && Guidewire_FMSourceFileMatch(SRCFILE,"search.33.13.html") ) { return "search.33.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Modifying Free-text Search for Additional Fields") && Guidewire_FMSourceFileMatch(SRCFILE,"search.33.14.html") ) { return "search.33.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Special Page Functions") && Guidewire_FMSourceFileMatch(SRCFILE,"pagefunc.34.1.html") ) { return "pagefunc.34.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding Print Capabilities") && Guidewire_FMSourceFileMatch(SRCFILE,"pagefunc.34.2.html") ) { return "pagefunc.34.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Linking to a Specific Page: Using an EntryPoint PCF") && Guidewire_FMSourceFileMatch(SRCFILE,"pagefunc.34.3.html") ) { return "pagefunc.34.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Linking to a Specific Page: Using an ExitPoint PCF") && Guidewire_FMSourceFileMatch(SRCFILE,"pagefunc.34.4.html") ) { return "pagefunc.34.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workflow and Activity Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"p-workflow.html") ) { return "p-workflow.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the Workflow Editor") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_workflow.36.1.html") ) { return "studio_workflow.36.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workflow in Guidewire ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_workflow.36.2.html") ) { return "studio_workflow.36.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workflow in Guidewire Studio") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_workflow.36.3.html") ) { return "studio_workflow.36.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding Workflow Steps") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_workflow.36.4.html") ) { return "studio_workflow.36.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the Workflow Right-Click Menu") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_workflow.36.5.html") ) { return "studio_workflow.36.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using Search with Workflow") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_workflow.36.6.html") ) { return "studio_workflow.36.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire Workflow") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.01.html") ) { return "workflow.37.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding Workflow") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.02.html") ) { return "workflow.37.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workflow Instances") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.03.html") ) { return "workflow.37.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Work Items") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.04.html") ) { return "workflow.37.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workflow Process Format") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.05.html") ) { return "workflow.37.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workflow Gosu") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.06.html") ) { return "workflow.37.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workflow Versioning") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.07.html") ) { return "workflow.37.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workflow Localization") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.08.html") ) { return "workflow.37.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workflow Structural Elements") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.09.html") ) { return "workflow.37.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"(Context)") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.10.html") ) { return "workflow.37.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"(Start)") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.11.html") ) { return "workflow.37.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"(Finish)") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.12.html") ) { return "workflow.37.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Common Step Elements") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.13.html") ) { return "workflow.37.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Enter and Exit Scripts") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.14.html") ) { return "workflow.37.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Asserts") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.15.html") ) { return "workflow.37.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Events") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.16.html") ) { return "workflow.37.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"Notifications") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.17.html") ) { return "workflow.37.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"Branch IDs") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.18.html") ) { return "workflow.37.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"Basic Workflow Steps") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.19.html") ) { return "workflow.37.19.html";}
else if (Guidewire_TopicMatch(TOPIC,"AutoStep") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.20.html") ) { return "workflow.37.20.html";}
else if (Guidewire_TopicMatch(TOPIC,"MessageStep") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.21.html") ) { return "workflow.37.21.html";}
else if (Guidewire_TopicMatch(TOPIC,"ActivityStep") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.22.html") ) { return "workflow.37.22.html";}
else if (Guidewire_TopicMatch(TOPIC,"ManualStep") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.23.html") ) { return "workflow.37.23.html";}
else if (Guidewire_TopicMatch(TOPIC,"Outcome") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.24.html") ) { return "workflow.37.24.html";}
else if (Guidewire_TopicMatch(TOPIC,"Step Branches") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.25.html") ) { return "workflow.37.25.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Branch IDs") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.26.html") ) { return "workflow.37.26.html";}
else if (Guidewire_TopicMatch(TOPIC,"GO") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.27.html") ) { return "workflow.37.27.html";}
else if (Guidewire_TopicMatch(TOPIC,"TRIGGER") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.28.html") ) { return "workflow.37.28.html";}
else if (Guidewire_TopicMatch(TOPIC,"TIMEOUT") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.29.html") ) { return "workflow.37.29.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating New Workflows") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.30.html") ) { return "workflow.37.30.html";}
else if (Guidewire_TopicMatch(TOPIC,"Extending a Workflow: A Simple Example") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.31.html") ) { return "workflow.37.31.html";}
else if (Guidewire_TopicMatch(TOPIC,"Instantiating a Workflow") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.32.html") ) { return "workflow.37.32.html";}
else if (Guidewire_TopicMatch(TOPIC,"The Workflow Engine") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.33.html") ) { return "workflow.37.33.html";}
else if (Guidewire_TopicMatch(TOPIC,"Synchronicity, Transactions, and Errors") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.34.html") ) { return "workflow.37.34.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workflow Subflows") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.35.html") ) { return "workflow.37.35.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workflow Administration") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.36.html") ) { return "workflow.37.36.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workflow Debugging and Logging") && Guidewire_FMSourceFileMatch(SRCFILE,"workflow.37.37.html") ) { return "workflow.37.37.html";}
else if (Guidewire_TopicMatch(TOPIC,"Defining Activity Patterns") && Guidewire_FMSourceFileMatch(SRCFILE,"activity-patterns.38.1.html") ) { return "activity-patterns.38.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"What is an Activity Pattern") && Guidewire_FMSourceFileMatch(SRCFILE,"activity-patterns.38.2.html") ) { return "activity-patterns.38.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Pattern Types and Categories") && Guidewire_FMSourceFileMatch(SRCFILE,"activity-patterns.38.3.html") ) { return "activity-patterns.38.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using Activity Patterns in Gosu") && Guidewire_FMSourceFileMatch(SRCFILE,"activity-patterns.38.4.html") ) { return "activity-patterns.38.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Calculating Activity Due Dates") && Guidewire_FMSourceFileMatch(SRCFILE,"activity-patterns.38.5.html") ) { return "activity-patterns.38.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Defining the Business Calendar") && Guidewire_FMSourceFileMatch(SRCFILE,"activity-patterns.38.6.html") ) { return "activity-patterns.38.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Activity Patterns") && Guidewire_FMSourceFileMatch(SRCFILE,"activity-patterns.38.7.html") ) { return "activity-patterns.38.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using Activity Patterns with Documents and Emails") && Guidewire_FMSourceFileMatch(SRCFILE,"activity-patterns.38.8.html") ) { return "activity-patterns.38.8.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localizing Activity Patterns") && Guidewire_FMSourceFileMatch(SRCFILE,"activity-patterns.38.9.html") ) { return "activity-patterns.38.9.html";}
else if (Guidewire_TopicMatch(TOPIC,"Testing Gosu Code") && Guidewire_FMSourceFileMatch(SRCFILE,"p-testing.html") ) { return "p-testing.html";}
else if (Guidewire_TopicMatch(TOPIC,"Debugging and Testing Your Gosu Code") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_debugging.40.01.html") ) { return "studio_debugging.40.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"The Studio Debugger") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_debugging.40.02.html") ) { return "studio_debugging.40.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Initializing the Application Server for Debugging") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_debugging.40.03.html") ) { return "studio_debugging.40.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Starting the Studio Debugger") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_debugging.40.04.html") ) { return "studio_debugging.40.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting Breakpoints") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_debugging.40.05.html") ) { return "studio_debugging.40.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Stepping Through Code") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_debugging.40.06.html") ) { return "studio_debugging.40.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Viewing Current Values") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_debugging.40.07.html") ) { return "studio_debugging.40.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Resuming Execution") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_debugging.40.08.html") ) { return "studio_debugging.40.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the Gosu Scratchpad") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_debugging.40.09.html") ) { return "studio_debugging.40.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Suggestions for Testing Rules") && Guidewire_FMSourceFileMatch(SRCFILE,"studio_debugging.40.10.html") ) { return "studio_debugging.40.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"p-ClaimCenter.html") ) { return "p-ClaimCenter.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Policy Behavior") && Guidewire_FMSourceFileMatch(SRCFILE,"policy-behavior.42.1.html") ) { return "policy-behavior.42.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding Aggregate Limits") && Guidewire_FMSourceFileMatch(SRCFILE,"policy-behavior.42.2.html") ) { return "policy-behavior.42.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Defining Aggregate Limits") && Guidewire_FMSourceFileMatch(SRCFILE,"policy-behavior.42.3.html") ) { return "policy-behavior.42.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Specifying Policy Menu Links") && Guidewire_FMSourceFileMatch(SRCFILE,"policy-behavior.42.4.html") ) { return "policy-behavior.42.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Defining Internal ClaimCenter Policy Fields") && Guidewire_FMSourceFileMatch(SRCFILE,"policy-behavior.42.5.html") ) { return "policy-behavior.42.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Snapshot Views") && Guidewire_FMSourceFileMatch(SRCFILE,"snapshot.43.1.html") ) { return "snapshot.43.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"How ClaimCenter Renders Claim Snapshots") && Guidewire_FMSourceFileMatch(SRCFILE,"snapshot.43.2.html") ) { return "snapshot.43.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Encrypting Claim Snapshot Fields") && Guidewire_FMSourceFileMatch(SRCFILE,"snapshot.43.3.html") ) { return "snapshot.43.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Snapshot Templates") && Guidewire_FMSourceFileMatch(SRCFILE,"snapshot.43.4.html") ) { return "snapshot.43.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Services") && Guidewire_FMSourceFileMatch(SRCFILE,"configuring_services.44.1.html") ) { return "configuring_services.44.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Importing Services") && Guidewire_FMSourceFileMatch(SRCFILE,"configuring_services.44.2.html") ) { return "configuring_services.44.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localizing Services") && Guidewire_FMSourceFileMatch(SRCFILE,"configuring_services.44.3.html") ) { return "configuring_services.44.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Service Request Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"configuring_services.44.4.html") ) { return "configuring_services.44.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Lifecycle of a Service Request") && Guidewire_FMSourceFileMatch(SRCFILE,"configuring_services.44.5.html") ) { return "configuring_services.44.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Service Metrics") && Guidewire_FMSourceFileMatch(SRCFILE,"configuring_services.44.6.html") ) { return "configuring_services.44.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Multicurrency Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"multicurrency_reserving.45.1.html") ) { return "multicurrency_reserving.45.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Multicurrency in Financial Calculations") && Guidewire_FMSourceFileMatch(SRCFILE,"multicurrency_reserving.45.2.html") ) { return "multicurrency_reserving.45.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Multicurrency Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"multicurrency_reserving.45.3.html") ) { return "multicurrency_reserving.45.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Foreign Exchange Adjustments") && Guidewire_FMSourceFileMatch(SRCFILE,"multicurrency_reserving.45.4.html") ) { return "multicurrency_reserving.45.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Foreign Exchange Transactions and Calculated Values") && Guidewire_FMSourceFileMatch(SRCFILE,"multicurrency_reserving.45.5.html") ) { return "multicurrency_reserving.45.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Foreign Exchange Adjustments on Claims and Payments") && Guidewire_FMSourceFileMatch(SRCFILE,"multicurrency_reserving.45.6.html") ) { return "multicurrency_reserving.45.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Deductibles") && Guidewire_FMSourceFileMatch(SRCFILE,"config_deductibles.46.1.html") ) { return "config_deductibles.46.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Deductible Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"config_deductibles.46.2.html") ) { return "config_deductibles.46.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Typecodes for Deductibles") && Guidewire_FMSourceFileMatch(SRCFILE,"config_deductibles.46.3.html") ) { return "config_deductibles.46.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Permissions for Deductibles") && Guidewire_FMSourceFileMatch(SRCFILE,"config_deductibles.46.4.html") ) { return "config_deductibles.46.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Deductibles and Checks") && Guidewire_FMSourceFileMatch(SRCFILE,"config_deductibles.46.5.html") ) { return "config_deductibles.46.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Deductibles and Rules") && Guidewire_FMSourceFileMatch(SRCFILE,"config_deductibles.46.6.html") ) { return "config_deductibles.46.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Weighted Workload Assignment") && Guidewire_FMSourceFileMatch(SRCFILE,"configuring_weighted_workload.47.1.html") ) { return "configuring_weighted_workload.47.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Enabling Weighted Workload") && Guidewire_FMSourceFileMatch(SRCFILE,"configuring_weighted_workload.47.2.html") ) { return "configuring_weighted_workload.47.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workload Weight Recalculation") && Guidewire_FMSourceFileMatch(SRCFILE,"configuring_weighted_workload.47.3.html") ) { return "configuring_weighted_workload.47.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Weighted Workload Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"configuring_weighted_workload.47.4.html") ) { return "configuring_weighted_workload.47.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Weighted Workload Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"configuring_weighted_workload.47.5.html") ) { return "configuring_weighted_workload.47.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Custom Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"configuring_weighted_workload.47.6.html") ) { return "configuring_weighted_workload.47.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Catastrophe Bulk Associations") && Guidewire_FMSourceFileMatch(SRCFILE,"config_catastrophe.48.1.html") ) { return "config_catastrophe.48.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Catastrophe Bulk Association Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"config_catastrophe.48.2.html") ) { return "config_catastrophe.48.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Catastrophes Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"config_catastrophe.48.3.html") ) { return "config_catastrophe.48.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Catastrophe Configuration Parameter") && Guidewire_FMSourceFileMatch(SRCFILE,"config_catastrophe.48.4.html") ) { return "config_catastrophe.48.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring the Catastrophe Dashboard") && Guidewire_FMSourceFileMatch(SRCFILE,"config_catastrophe_dashboard.49.1.html") ) { return "config_catastrophe_dashboard.49.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Technical Design") && Guidewire_FMSourceFileMatch(SRCFILE,"config_catastrophe_dashboard.49.2.html") ) { return "config_catastrophe_dashboard.49.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring the Heat Map") && Guidewire_FMSourceFileMatch(SRCFILE,"config_catastrophe_dashboard.49.3.html") ) { return "config_catastrophe_dashboard.49.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Duplicate Claim and Check Searches") && Guidewire_FMSourceFileMatch(SRCFILE,"config_dupe_claim_search.50.1.html") ) { return "config_dupe_claim_search.50.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding the Gosu Templates") && Guidewire_FMSourceFileMatch(SRCFILE,"config_dupe_claim_search.50.2.html") ) { return "config_dupe_claim_search.50.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Duplicate Claim Search") && Guidewire_FMSourceFileMatch(SRCFILE,"config_dupe_claim_search.50.3.html") ) { return "config_dupe_claim_search.50.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Duplicate Check Search") && Guidewire_FMSourceFileMatch(SRCFILE,"config_dupe_claim_search.50.4.html") ) { return "config_dupe_claim_search.50.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Claim Health Metrics") && Guidewire_FMSourceFileMatch(SRCFILE,"config_metrics.51.1.html") ) { return "config_metrics.51.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding a New Tier") && Guidewire_FMSourceFileMatch(SRCFILE,"config_metrics.51.2.html") ) { return "config_metrics.51.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding a High-Risk Indicator") && Guidewire_FMSourceFileMatch(SRCFILE,"config_metrics.51.3.html") ) { return "config_metrics.51.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding a New Claim Metric") && Guidewire_FMSourceFileMatch(SRCFILE,"config_metrics.51.4.html") ) { return "config_metrics.51.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Recently Viewed Claims") && Guidewire_FMSourceFileMatch(SRCFILE,"config_recently_viewed_claims.52.1.html") ) { return "config_recently_viewed_claims.52.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding a Loss Date to the Recently Viewed Claim List") && Guidewire_FMSourceFileMatch(SRCFILE,"config_recently_viewed_claims.52.2.html") ) { return "config_recently_viewed_claims.52.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Incidents") && Guidewire_FMSourceFileMatch(SRCFILE,"config_incidents.53.1.html") ) { return "config_incidents.53.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Incidents Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"config_incidents.53.2.html") ) { return "config_incidents.53.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Claim Archiving") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.54.01.html") ) { return "archiving.54.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Archiving and the Domain Graph") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.54.02.html") ) { return "archiving.54.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Archiving in Guidewire ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.54.03.html") ) { return "archiving.54.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Archiving and Encryption") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.54.04.html") ) { return "archiving.54.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Selecting Claims for Archive Eligibility") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.54.05.html") ) { return "archiving.54.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Retrieving Archived Objects from the Command Line") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.54.06.html") ) { return "archiving.54.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Monitoring Archiving Activity") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.54.07.html") ) { return "archiving.54.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Archiving") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.54.08.html") ) { return "archiving.54.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Archiving-related Configuration Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.54.09.html") ) { return "archiving.54.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Archive Rules") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.54.10.html") ) { return "archiving.54.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Archive Events") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.54.11.html") ) { return "archiving.54.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Archive Work Queue") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.54.12.html") ) { return "archiving.54.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Archiving Plugins") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.54.13.html") ) { return "archiving.54.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Special Instructions") && Guidewire_FMSourceFileMatch(SRCFILE,"config_special_handling.55.1.html") ) { return "config_special_handling.55.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating Service Tiers") && Guidewire_FMSourceFileMatch(SRCFILE,"config_special_handling.55.2.html") ) { return "config_special_handling.55.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Email Notifications") && Guidewire_FMSourceFileMatch(SRCFILE,"config_special_handling.55.3.html") ) { return "config_special_handling.55.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Claim Headline Comments") && Guidewire_FMSourceFileMatch(SRCFILE,"config_special_handling.55.4.html") ) { return "config_special_handling.55.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Activity Patterns for Special Handling") && Guidewire_FMSourceFileMatch(SRCFILE,"config_special_handling.55.5.html") ) { return "config_special_handling.55.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Roles and Relationships") && Guidewire_FMSourceFileMatch(SRCFILE,"roles.56.1.html") ) { return "roles.56.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding Contact Roles") && Guidewire_FMSourceFileMatch(SRCFILE,"roles.56.2.html") ) { return "roles.56.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"How Configuring Roles Impacts Entity Data and Types") && Guidewire_FMSourceFileMatch(SRCFILE,"roles.56.3.html") ) { return "roles.56.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding a New Contact Role: an Example") && Guidewire_FMSourceFileMatch(SRCFILE,"roles.56.4.html") ) { return "roles.56.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Relationships Between Contacts") && Guidewire_FMSourceFileMatch(SRCFILE,"roles.56.5.html") ) { return "roles.56.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding a Bidirectional Contact Relationship: an Example") && Guidewire_FMSourceFileMatch(SRCFILE,"roles.56.6.html") ) { return "roles.56.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter Financials") && Guidewire_FMSourceFileMatch(SRCFILE,"p-ClaimCenter_financials.html") ) { return "p-ClaimCenter_financials.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring ClaimCenter Financials") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.58.1.html") ) { return "financials.58.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Overview of the Financials Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.58.2.html") ) { return "financials.58.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Financial-related Typelists") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.58.3.html") ) { return "financials.58.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Financial Transaction Statuses") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.58.4.html") ) { return "financials.58.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Financial Configuration Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.58.5.html") ) { return "financials.58.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Batch Processes Related to Checks and Payments") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.58.6.html") ) { return "financials.58.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter Financial Calculations") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_calculations.59.01.html") ) { return "financials_calculations.59.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Financial Calculation APIs") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_calculations.59.02.html") ) { return "financials_calculations.59.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding ClaimCenter Financial Calculations") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_calculations.59.03.html") ) { return "financials_calculations.59.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the Predefined Financial Calculations") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_calculations.59.04.html") ) { return "financials_calculations.59.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Predefined Financial Calculations") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_calculations.59.05.html") ) { return "financials_calculations.59.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Predefined Reinsurance Calculations") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_calculations.59.06.html") ) { return "financials_calculations.59.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Retrieving Transaction IDs") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_calculations.59.07.html") ) { return "financials_calculations.59.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Forming Composite Custom Expressions") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_calculations.59.08.html") ) { return "financials_calculations.59.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Financial Calculations with a Negative Value") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_calculations.59.09.html") ) { return "financials_calculations.59.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Eroding and Non-eroding Payments") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_calculations.59.10.html") ) { return "financials_calculations.59.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using Floating Financial Calculations") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_calculations.59.11.html") ) { return "financials_calculations.59.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating ClaimCenter Financial Transactions") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_creating_transactions.60.1.html") ) { return "financials_creating_transactions.60.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting Reserves") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_creating_transactions.60.2.html") ) { return "financials_creating_transactions.60.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating Reserve Transactions Directly") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_creating_transactions.60.3.html") ) { return "financials_creating_transactions.60.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating Checks and Payments by Using CheckCreator") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_creating_transactions.60.4.html") ) { return "financials_creating_transactions.60.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating Recovery Transactions") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_creating_transactions.60.5.html") ) { return "financials_creating_transactions.60.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating Recovery Reserve Transactions") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_creating_transactions.60.6.html") ) { return "financials_creating_transactions.60.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring ClaimCenter Financial Screens") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_configure.61.1.html") ) { return "financials_configure.61.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring the Financial Summary Screen") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_configure.61.2.html") ) { return "financials_configure.61.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Reserve Behavior") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_configure.61.3.html") ) { return "financials_configure.61.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Checks and Payments") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_configure.61.4.html") ) { return "financials_configure.61.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring the Check Wizard Recurrence Settings") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_configure.61.5.html") ) { return "financials_configure.61.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring the Check Wizard\u2019s Default Payment Type") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_configure.61.6.html") ) { return "financials_configure.61.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Financial Holds") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_configure.61.7.html") ) { return "financials_configure.61.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Bulk Invoice Payments") && Guidewire_FMSourceFileMatch(SRCFILE,"financials_configure.61.8.html") ) { return "financials_configure.61.8.html";}
else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter Lines of Business") && Guidewire_FMSourceFileMatch(SRCFILE,"p-lob.html") ) { return "p-lob.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Lines of Business") && Guidewire_FMSourceFileMatch(SRCFILE,"lobs.63.1.html") ) { return "lobs.63.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"LOB Typelists") && Guidewire_FMSourceFileMatch(SRCFILE,"lobs.63.2.html") ) { return "lobs.63.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Relationships Among LOB Typelists") && Guidewire_FMSourceFileMatch(SRCFILE,"lobs.63.3.html") ) { return "lobs.63.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Relationships Between LOB Typelists and Other Typelists") && Guidewire_FMSourceFileMatch(SRCFILE,"lobs.63.4.html") ) { return "lobs.63.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Editing LOB Typelists and Typecodes") && Guidewire_FMSourceFileMatch(SRCFILE,"lobs.63.5.html") ) { return "lobs.63.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Coverages and Policies") && Guidewire_FMSourceFileMatch(SRCFILE,"lobs.63.6.html") ) { return "lobs.63.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding a New LossType Typecode") && Guidewire_FMSourceFileMatch(SRCFILE,"lobs.63.7.html") ) { return "lobs.63.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding a New ExposureType Typecode") && Guidewire_FMSourceFileMatch(SRCFILE,"lobs.63.8.html") ) { return "lobs.63.8.html";}
else { return("../wwhelp/topic_cannot_be_found.html"); } }

function  WWHBookData_MatchTopic(P)
{
var C=null;P=decodeURIComponent(decodeURIComponent(escape(P)));//workaround epub bug with UTF8 processing!
if(P=="Field_Validator_Extensions")C="fieldvalidators.23.1.html";
if (C) { return C } else { return GUIDEWIRE_TOPIC_TO_FILE(P,Guidewire_ExtractSrcFromURL());}
}
