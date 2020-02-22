/*

This is a web service program to find out all the doctors present in the contact manager
 */
package Practise_WEBSERVICE.FetchContactsAPI

uses gw.api.database.Query
uses gw.xml.ws.annotation.WsiWebService
uses gw.xml.ws.annotation.WsiPermissions
uses java.util.ArrayList

@WsiWebService
@WsiPermissions({})
public class ContactsProcessor {
  public function sendContactType(contact: String): ArrayList <String>
  {
    var request = new ContactsRequest();
    request.contact = contact;
    var resp = getContacts(request)
    return(resp.getResponseArrayList());
  }

  public function getContacts(req: ContactsRequest): ContactsResponse
  {
    var resp = new ContactsResponse();
    var contactsArrayList = resp.getResponseArrayList();
    var query = Query.make(entity.ABContact).select();
    query.each(\contact ->
    {
      if (contact != null)
      {
        var des = contact.Subtype.toString();
        if (contact.Subtype.Description.contains("Doctor"))
        {
          contactsArrayList.add(contact.DisplayName);
        }
      }
    });
    return resp;
  }
}