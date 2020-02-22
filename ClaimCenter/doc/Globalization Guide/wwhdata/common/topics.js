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

else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter\u00ae") && Guidewire_FMSourceFileMatch(SRCFILE,"cover-global.html") ) { return "cover-global.html";}
else if (Guidewire_TopicMatch(TOPIC,"About ClaimCenter Documentation") && Guidewire_FMSourceFileMatch(SRCFILE,"about.html") ) { return "about.html";}
else if (Guidewire_TopicMatch(TOPIC,"Introduction") && Guidewire_FMSourceFileMatch(SRCFILE,"p-intro.html") ) { return "p-intro.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding Globalization") && Guidewire_FMSourceFileMatch(SRCFILE,"understanding.04.1.html") ) { return "understanding.04.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Dimensions of Globalization") && Guidewire_FMSourceFileMatch(SRCFILE,"understanding.04.2.html") ) { return "understanding.04.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"User Selection of Language and Regional Formats") && Guidewire_FMSourceFileMatch(SRCFILE,"understanding.04.3.html") ) { return "understanding.04.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuration Files Used for Globalization") && Guidewire_FMSourceFileMatch(SRCFILE,"understanding.04.4.html") ) { return "understanding.04.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Globalization Configuration Parameters in config.xml") && Guidewire_FMSourceFileMatch(SRCFILE,"understanding.04.5.html") ) { return "understanding.04.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Language Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"p-language.html") ) { return "p-language.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Languages") && Guidewire_FMSourceFileMatch(SRCFILE,"language_packs.06.01.html") ) { return "language_packs.06.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding Display Languages") && Guidewire_FMSourceFileMatch(SRCFILE,"language_packs.06.02.html") ) { return "language_packs.06.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding Language Modules and Their Files") && Guidewire_FMSourceFileMatch(SRCFILE,"language_packs.06.03.html") ) { return "language_packs.06.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding Language Hierarchies") && Guidewire_FMSourceFileMatch(SRCFILE,"language_packs.06.04.html") ) { return "language_packs.06.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding the Language Module Installer") && Guidewire_FMSourceFileMatch(SRCFILE,"language_packs.06.05.html") ) { return "language_packs.06.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Installing Display Languages") && Guidewire_FMSourceFileMatch(SRCFILE,"language_packs.06.06.html") ) { return "language_packs.06.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading Display Languages") && Guidewire_FMSourceFileMatch(SRCFILE,"language_packs.06.07.html") ) { return "language_packs.06.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading a Language Module by Using the Language Module Installer") && Guidewire_FMSourceFileMatch(SRCFILE,"language_packs.06.08.html") ) { return "language_packs.06.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrade Properties File for the Language Module Installer") && Guidewire_FMSourceFileMatch(SRCFILE,"language_packs.06.09.html") ) { return "language_packs.06.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting the Default Display Language for the First and Only Time") && Guidewire_FMSourceFileMatch(SRCFILE,"language_packs.06.10.html") ) { return "language_packs.06.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Selecting a Personal Language Preference") && Guidewire_FMSourceFileMatch(SRCFILE,"language_packs.06.11.html") ) { return "language_packs.06.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Activity Logging by the Language Module Installer") && Guidewire_FMSourceFileMatch(SRCFILE,"language_packs.06.12.html") ) { return "language_packs.06.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Activity Messages from the Language Module Installer") && Guidewire_FMSourceFileMatch(SRCFILE,"language_packs.06.13.html") ) { return "language_packs.06.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Log Files that the Language Module Installer Creates") && Guidewire_FMSourceFileMatch(SRCFILE,"language_packs.06.14.html") ) { return "language_packs.06.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localized Printing") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_printing.07.1.html") ) { return "localization_printing.07.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Printing Specialized Character Sets and Fonts") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_printing.07.2.html") ) { return "localization_printing.07.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localized Printing in a Windows Environment") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_printing.07.3.html") ) { return "localization_printing.07.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localized Printing in a Linux Environment") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_printing.07.4.html") ) { return "localization_printing.07.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localizing ClaimCenter String Resources") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_strings.08.1.html") ) { return "localization_strings.08.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding String Resources") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_strings.08.2.html") ) { return "localization_strings.08.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Exporting and Importing String Resources") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_strings.08.3.html") ) { return "localization_strings.08.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localizing Display Keys") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_strings.08.4.html") ) { return "localization_strings.08.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localizing Typecodes") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_strings.08.5.html") ) { return "localization_strings.08.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Accessing Localized Typekeys from Gosu") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_strings.08.6.html") ) { return "localization_strings.08.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localizing Script Parameter Descriptions") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_strings.08.7.html") ) { return "localization_strings.08.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localizing Gosu Error Messages") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_strings.08.8.html") ) { return "localization_strings.08.8.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localizing ClaimCenter with Studio") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_studio.09.1.html") ) { return "localization_studio.09.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localizing Rule Set Names and Descriptions") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_studio.09.2.html") ) { return "localization_studio.09.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting a Language for a Block of Gosu Code") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_studio.09.3.html") ) { return "localization_studio.09.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localizing Administration Tool Argument Descriptions") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_studio.09.4.html") ) { return "localization_studio.09.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localizing Administration Data") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_db_column.10.1.html") ) { return "localization_db_column.10.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding Administration Data") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_db_column.10.2.html") ) { return "localization_db_column.10.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localized Columns in Entities") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_db_column.10.3.html") ) { return "localization_db_column.10.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Translation Tables in the Database") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_db_column.10.4.html") ) { return "localization_db_column.10.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localizing Guidewire Workflow") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_workflow.11.1.html") ) { return "localization_workflow.11.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localizing ClaimCenter Workflow") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_workflow.11.2.html") ) { return "localization_workflow.11.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localizing Workflow Step Names") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_workflow.11.3.html") ) { return "localization_workflow.11.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating a Locale-Specific Workflow SubFlow") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_workflow.11.4.html") ) { return "localization_workflow.11.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localizing Gosu Code in a Workflow Step") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_workflow.11.5.html") ) { return "localization_workflow.11.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Regional Formats Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"p-locale.html") ) { return "p-locale.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Regional Formats") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_add.13.1.html") ) { return "localization_add.13.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding Regional Formats in ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_add.13.2.html") ) { return "localization_add.13.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"The International Components for Unicode (ICU) Library") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_add.13.3.html") ) { return "localization_add.13.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting the Default Application Locale for Regional Formats") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_add.13.4.html") ) { return "localization_add.13.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Regional Formats In Gosu") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_add.13.5.html") ) { return "localization_add.13.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring the Catastrophe Heat Map Locale") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_add.13.6.html") ) { return "localization_add.13.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with the Japanese Imperial Calendar") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_JIC.14.1.html") ) { return "localization_JIC.14.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"The Japanese Imperial Calendar Date Widget") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_JIC.14.2.html") ) { return "localization_JIC.14.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Japanese Dates") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_JIC.14.3.html") ) { return "localization_JIC.14.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting the Japanese Imperial Calendar as the Default for a Region") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_JIC.14.4.html") ) { return "localization_JIC.14.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting a Field to Always Display the Japanese Imperial Calendar") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_JIC.14.5.html") ) { return "localization_JIC.14.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting a Field to Conditionally Display the Japanese Imperial Calendar") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_JIC.14.6.html") ) { return "localization_JIC.14.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Japanese Imperial Dates in Gosu") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_JIC.14.7.html") ) { return "localization_JIC.14.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Sample JIC Presentation Handler") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_JIC.14.8.html") ) { return "localization_JIC.14.8.html";}
else if (Guidewire_TopicMatch(TOPIC,"National Formats and Data Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"p-national.html") ) { return "p-national.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Currencies") && Guidewire_FMSourceFileMatch(SRCFILE,"currency.16.01.html") ) { return "currency.16.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter Base Configuration Currencies") && Guidewire_FMSourceFileMatch(SRCFILE,"currency.16.02.html") ) { return "currency.16.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Currency Typecodes") && Guidewire_FMSourceFileMatch(SRCFILE,"currency.16.03.html") ) { return "currency.16.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Monetary Amounts in the Data Model and in Gosu") && Guidewire_FMSourceFileMatch(SRCFILE,"currency.16.04.html") ) { return "currency.16.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Monetary Data Types") && Guidewire_FMSourceFileMatch(SRCFILE,"currency.16.05.html") ) { return "currency.16.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Currency Amount Data Types") && Guidewire_FMSourceFileMatch(SRCFILE,"currency.16.06.html") ) { return "currency.16.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Currency-related Configuration Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"currency.16.07.html") ) { return "currency.16.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting the Default Application Currency") && Guidewire_FMSourceFileMatch(SRCFILE,"currency.16.08.html") ) { return "currency.16.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Choosing a Rounding Mode") && Guidewire_FMSourceFileMatch(SRCFILE,"currency.16.09.html") ) { return "currency.16.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting the Currency Display Mode") && Guidewire_FMSourceFileMatch(SRCFILE,"currency.16.10.html") ) { return "currency.16.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Geographic Data") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_jurisdictions.17.1.html") ) { return "localization_jurisdictions.17.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Country Typecodes") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_jurisdictions.17.2.html") ) { return "localization_jurisdictions.17.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Country Address Formats") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_jurisdictions.17.3.html") ) { return "localization_jurisdictions.17.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting the Default Application Country") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_jurisdictions.17.4.html") ) { return "localization_jurisdictions.17.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Jurisdiction Information") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_jurisdictions.17.5.html") ) { return "localization_jurisdictions.17.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Zone Information") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_jurisdictions.17.6.html") ) { return "localization_jurisdictions.17.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Address Information") && Guidewire_FMSourceFileMatch(SRCFILE,"address_config.18.01.html") ) { return "address_config.18.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding Global Addresses") && Guidewire_FMSourceFileMatch(SRCFILE,"address_config.18.02.html") ) { return "address_config.18.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Address Modes in Page Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"address_config.18.03.html") ) { return "address_config.18.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Address Mode for English-speaking Countries") && Guidewire_FMSourceFileMatch(SRCFILE,"address_config.18.04.html") ) { return "address_config.18.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Address Mode for Japan") && Guidewire_FMSourceFileMatch(SRCFILE,"address_config.18.05.html") ) { return "address_config.18.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Address Mode for France and Germany") && Guidewire_FMSourceFileMatch(SRCFILE,"address_config.18.06.html") ) { return "address_config.18.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Automatic Address Completion and Fill-in") && Guidewire_FMSourceFileMatch(SRCFILE,"address_config.18.07.html") ) { return "address_config.18.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Automatic Address Completion") && Guidewire_FMSourceFileMatch(SRCFILE,"address_config.18.08.html") ) { return "address_config.18.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Automatic Address Fill-in") && Guidewire_FMSourceFileMatch(SRCFILE,"address_config.18.09.html") ) { return "address_config.18.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"The Address Automatic Completion and Fill-in Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"address_config.18.10.html") ) { return "address_config.18.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Phone Information") && Guidewire_FMSourceFileMatch(SRCFILE,"phone_config.19.1.html") ) { return "phone_config.19.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Phone Configuration Files") && Guidewire_FMSourceFileMatch(SRCFILE,"phone_config.19.2.html") ) { return "phone_config.19.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting Phone Configuration Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"phone_config.19.3.html") ) { return "phone_config.19.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Phone Number PCF Widget") && Guidewire_FMSourceFileMatch(SRCFILE,"phone_config.19.4.html") ) { return "phone_config.19.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring National Field Validation") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_fieldvalidation.20.1.html") ) { return "localization_fieldvalidation.20.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding National Field Validation") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_fieldvalidation.20.2.html") ) { return "localization_fieldvalidation.20.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Localizing Field Validators for National Field Validation") && Guidewire_FMSourceFileMatch(SRCFILE,"localization_fieldvalidation.20.3.html") ) { return "localization_fieldvalidation.20.3.html";}
else { return("../wwhelp/topic_cannot_be_found.html"); } }

function  WWHBookData_MatchTopic(P)
{
var C=null;P=decodeURIComponent(decodeURIComponent(escape(P)));//workaround epub bug with UTF8 processing!
if (C) { return C } else { return GUIDEWIRE_TOPIC_TO_FILE(P,Guidewire_ExtractSrcFromURL());}
}
