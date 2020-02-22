package Practise_WEBSERVICE.JSONMapper

uses gw.xml.ws.annotation.WsiExportable

@WsiExportable
final class JSONRequest {
  public var firstName: String;
  public var lastName: String
  public var mobileNumber: String
  public var age: String
  public var emailAddress: String
  public var gender: String
  public var maritalStatus: String
  public var licenseNumber: String
  public var state: String
  public var country: String
  public var city: String
  public var postalCode: String
  public var addressLine1: String
  public var dob: String
}