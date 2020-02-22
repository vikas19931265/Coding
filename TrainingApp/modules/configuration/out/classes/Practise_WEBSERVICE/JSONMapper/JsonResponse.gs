package Practise_WEBSERVICE.JSONMapper

uses java.util.ArrayList
uses gw.xml.ws.annotation.WsiExportable
uses java.util.HashMap

@WsiExportable
final class JsonResponse {
  private var contacts: java.util.HashMap <String,String> = new HashMap <String, String>();
  public function setContacts(res:java.util.HashMap<String,String>)
  {
    this.contacts=res;
  }
}

/*
uses Practise_WEBSERVICE.Test.TestBundle
uses Practise_WEBSERVICE.JSONMapper.JSONReader
uses Practise_WEBSERVICE.JSONMapper.JsonContactsProcessor

new JsonContactsProcessor().addContact("C:\\Users\\Vikas.Gautam\\Desktop\\contact.json")

 */
