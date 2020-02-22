package Practise_WEBSERVICE.FetchContactsAPI

uses gw.xml.ws.annotation.WsiExportable

@WsiExportable
final class ContactsRequest {
    public var contact:String;
}