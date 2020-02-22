package Practise_WEBSERVICE.FetchContactsAPI

uses java.util.ArrayList
uses java.util.ArrayList
uses java.util.ArrayList
uses gw.xml.ws.annotation.WsiExportable
uses javax.jws.WebMethod

@WsiExportable
final class ContactsResponse {
  public var contacts:ArrayList<String> = new ArrayList<String>();

  public function getResponseArrayList(): ArrayList<String> {
    return contacts;
  }
}


/*
Gosu Scratchpad:


uses consumewebservice.wsical.contactsprocessor.ContactsProcessor
uses consumewebservice.wsical.contactsprocessor.types.complex.ContactsRequest
uses consumewebservice.wsical.contactsprocessor.types.complex.ContactsResponse

print("hello world");
var ele= new ContactsProcessor();

var res=ele.sendContactType("Doctor");
print(res);

 */
