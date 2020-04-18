//if browser supports XMLHttpRequest
            
if (window.XMLHttpRequest) { // Create an instance of XMLHttpRequest object. 
    xmlhttp  =  new XMLHttpRequest();
} else { // code for IE6, IE5 
   xmlhttp  =  new ActiveXObject("Microsoft.XMLHTTP");
}

// sets and sends the request for calling "node.xml"
xmlhttp.open("GET","C:\\Users\\Vikas.Gautam\\Desktop\\GitV2\\AngularApp\Policy.xml",false);
xmlhttp.send();

// sets and returns the content as XML DOM
xmlDoc = xmlhttp.responseXML;

//parsing the DOM object
document.getElementById("FirstName").innerHTML = 
   xmlDoc.getElementsByTagName("FirstName")[0].childNodes[0].nodeValue;
document.getElementById("LastName").innerHTML = 
   xmlDoc.getElementsByTagName("LastName")[0].childNodes[0].nodeValue;
document.getElementById("ContactNo").innerHTML = 
   xmlDoc.getElementsByTagName("ContactNo")[0].childNodes[0].nodeValue;
document.getElementById("Email").innerHTML = 
   xmlDoc.getElementsByTagName("Email")[0].childNodes[0].nodeValue;