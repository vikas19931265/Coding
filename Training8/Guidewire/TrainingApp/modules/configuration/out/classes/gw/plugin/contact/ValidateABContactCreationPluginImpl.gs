package gw.plugin.contact

uses java.util.Map
uses gw.api.contact.TooLooseContactCreateCriteriaException


/**
 * Base implementation of the ABContact creation criteria plugin interface.
 * Users may override the helper methods to provide Locale-specific search
 * criteria in subclasses.
 */
@Export
class ValidateABContactCreationPluginImpl implements ValidateABContactCreationPlugin {

  final private var _subTypeSpecificLogics : Map<typekey.ABContact, ABContactSubtypeLogic> = {
      typekey.ABContact.TC_ABCOMPANY       -> new CreateLogic<ABCompany>(\ c -> abCompanyIsInvalid(c)),
      typekey.ABContact.TC_ABCOMPANYVENDOR -> new CreateLogic<ABCompanyVendor>(\ c -> abCompanyIsInvalid(c)),
      typekey.ABContact.TC_ABPERSON        -> new CreateLogic<ABPerson>(\ c -> abPersonIsInvalid(c)),
      typekey.ABContact.TC_ABPERSONVENDOR  -> new CreateLogic<ABPersonVendor>(\ c -> abPersonVendorIsInvalid(c)),
      typekey.ABContact.TC_ABUSERCONTACT   -> new CreateLogic<ABUserContact>(\ c -> abUserContactIsInvalid(c)),
      typekey.ABContact.TC_ABPLACE         -> new CreateLogic<ABPlace>(\ c -> abPlaceIsInvalid(c))
  }

  /**
   * Interface method for ValidateABContactCreationPlugin that delegates
   * to a subtype specific subclass of ABContactSubtypeLogic.
   */
  override function validateCanCreate(contact : ABContact) : ValidateABContactCreationPluginResult {
    var v = canCreate(contact)
    var em : String = null
    if (!v) {
      var exception = new TooLooseContactCreateCriteriaException(
        contact.Subtype, contact.PrimaryAddress.Country)
      em = exception.Message
    }
    
    return new ValidateABContactCreationPluginResult() { 
      override property get Valid() : boolean { return v }
      override property get ErrorMessage() : String { return em }
    }
  }
  
  /**
   * Interface method for ValidateABContactCreationPlugin that delegates
   * to a subtype specific subclass of ABContactSubtypeLogic.
   */
  private function canCreate(contact : ABContact) : boolean  {
    var logic = getABContactSubtypeLogic(contact)
    if (logic == null) {
      return true
    }
    return logic.execute(contact)
  }
  
  /**
   * Return the ABContactSubtypeLogic to use for the given contact.  Customers can override
   * this if they add more contact subtypes or want to use a different ABContactSubtypeLogic
   * for an existing subtype.
   */
  protected function getABContactSubtypeLogic(contact : ABContact) : ABContactSubtypeLogic {
    return ABContactSubtypeLogic.getLogic(contact.Subtype, _subTypeSpecificLogics)
  }


  private class CreateLogic<T extends ABContact> extends ABContactSubtypeLogic {
    private var _isInvalidMethod : block(contact : T) : boolean

    construct(isInvalidMethod : block(contact : T) : boolean) {
      _isInvalidMethod = isInvalidMethod
    }

    override function execute(bean : Bean) : boolean {
      var contact = (bean as T)
      return not _isInvalidMethod(contact)
    }
  }




  //
  //  Subtype specific "is invalid" methods
  //


  /////////////////////////   ABContact    ////////////////////////////////////

  /**
   * Returns true if the ABContact is NOT valid for creation.  Customers can override this
   * if they want to modify the logic.
   */
  protected function abContactIsInvalid(contact : ABContact) : boolean {
    return contact.Tags == null or contact.Tags.IsEmpty
  }



  /////////////////////////   ABCompany    //////////////////////////////

  /**
   * Returns true if the ABCompany is NOT valid for creation.  Customers can override this
   * if they want to modify the logic.
   */
  protected function abCompanyIsInvalid(contact : ABCompany) : boolean {
    if (abContactIsInvalid(contact))
      return true

    return contact.Name == null
          or (isLackingCompleteAddress(contact.PrimaryAddress)
              and isLackingAnyPhoneNumber(contact)
              and contact.TaxID == null)
  }


  /////////////////////////   ABCompanyVendor    //////////////////////////////

  /**
   * Returns true if the ABCompanyVendor is NOT valid for creation.  Customers can override this
   * if they want to modify the logic.
   */
  protected function abCompanyVendorIsInvalid(contact : ABCompanyVendor) : boolean {
    if (abContactIsInvalid(contact))
      return true

    return contact.Name     == null
          or contact.TaxID == null
  }


  /////////////////////////   ABPerson    //////////////////////////////

  /**
   * Returns true if the ABPerson is NOT valid for creation.  Customers can override this
   * if they want to modify the logic.
   */
  protected function abPersonIsInvalid(contact : ABPerson) : boolean {
    if (abContactIsInvalid(contact))
      return true

    return contact.FirstName   == null
          or contact.LastName == null
          or (isLackingCompleteAddress(contact.PrimaryAddress)
              and isLackingAnyPhoneNumber(contact)
              and contact.DateOfBirth == null
              and contact.TaxID       == null
              and isLackingCompleteDriversLicense(contact))
  }


  /////////////////////////   ABPersonVendor    //////////////////////////////

  /**
   * Returns true if the ABPersonVendor is NOT valid for creation.  Customers can override this
   * if they want to modify the logic.
   */
  protected function abPersonVendorIsInvalid(contact : ABPersonVendor) : boolean {
    if (abContactIsInvalid(contact))
      return true

    return contact.FirstName   == null
          or contact.LastName == null
          or contact.TaxID    == null
  }


  /////////////////////////   ABUser    //////////////////////////////

  /**
   * Returns true if the ABUserContact is NOT valid for creation.  Customers can override this
   * if they want to modify the logic.
   */
  protected function abUserContactIsInvalid(contact : ABUserContact) : boolean {
    if (abContactIsInvalid(contact))
      return true

    return contact.FirstName         == null
          or contact.LastName       == null
          or contact.EmployeeNumber == null
  }


  /////////////////////////   ABPlace    //////////////////////////////

  /**
   * Returns true if the ABPlace is NOT valid for creation.  Customers can override this
   * if they want to modify the logic.
   */
  protected function abPlaceIsInvalid(contact : ABPlace) : boolean {
    if (abContactIsInvalid(contact))
      return true

    return contact.Name == null
          or isLackingCompleteAddress(contact.PrimaryAddress)
  }


  // ====== helper methods
  
  /**
   * Returns true if the given Address object is deemed incomplete.
   * If the contact's country has a concept of a state or province,
   * then state/province is required. If the contact's country has
   * no concept of state or province, then state/province is not required.
   */
  protected function isLackingCompleteAddress(address : Address) : boolean {
    if (address.Country == null) {
      return true
    }

    if (address.Country == Country.TC_AU or
        address.Country == Country.TC_US or
        address.Country == Country.TC_CA) {
      return address.AddressLine1 == null
          or address.City         == null
          or address.State        == null
          or address.PostalCode   == null
    }
    else {
      return address.AddressLine1 == null
          or address.City         == null
          or address.PostalCode   == null
    }
  }

 
  /**
   * Returns true if the given ABContact object does not contain any phone numbers.
   */
  protected function isLackingAnyPhoneNumber(contact : ABContact) : boolean {
    return  contact.WorkPhone == null
        and contact.HomePhone == null
        and contact.FaxPhone  == null
  }

  /**
   * Returns true if the given ABPerson object does not contain any phone numbers.
   */  
  protected function isLackingAnyPhoneNumber(person : ABPerson) : boolean {
    return  person.WorkPhone == null
        and person.HomePhone == null
        and person.FaxPhone  == null
        and person.CellPhone == null
  }
  
  /**
   * Returns true if the given ABPerson's drivers license is incomplete. 
   */
  protected function isLackingCompleteDriversLicense(person : ABPerson) : boolean {
    if (person.Country == Country.TC_AU or
        person.Country == Country.TC_US or
        person.Country == Country.TC_CA) {
      return (person.LicenseNumber == null
           or person.LicenseState == null)
    }
    else {
      return person.LicenseNumber == null
    }
  }
}
