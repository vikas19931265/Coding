package gw.plugin.contact

uses gw.plugin.contact.ValidateABContactSearchCriteriaPlugin
uses java.util.Map
uses gw.api.contact.TooLooseContactSearchCriteriaException


/**
 * Base implementation of the ABContact search criteria plugin interface.
 * Users may override isInLocale() to provide Locale-specific search criteria.
 */
@Export
class ValidateABContactSearchCriteriaPluginImpl implements ValidateABContactSearchCriteriaPlugin {

  final var _subtypeSpecificLogic : Map<typekey.ABContact, ABContactSubtypeLogic> = {
      typekey.ABContact.TC_ABCONTACT     -> new SearchLogic(\ sc -> abContactCanSearch(sc)),
      typekey.ABContact.TC_ABCOMPANY     -> new SearchLogic(\ sc -> abCompanyCanSearch(sc)),
      typekey.ABContact.TC_ABPERSON      -> new SearchLogic(\ sc -> abPersonCanSearch(sc)),
      typekey.ABContact.TC_ABUSERCONTACT -> new SearchLogic(\ sc -> abUserCanSearch(sc)),
      typekey.ABContact.TC_ABPLACE       -> new SearchLogic(\ sc -> abPlaceCanSearch(sc))
  }


  /**
   * Interface method for ValidateABContactSearchCriteriaPlugin that delegates
   * to a subtype specific subclass of ABContactSubtypeLogic.
   */
  override function validateCanSearch(searchCriteria : ABContactSearchCriteria) : ValidateABContactSearchCriteriaPluginResult {
    var v = canSearch(searchCriteria)
    var em : String
    if (!v) {
      var exception = new TooLooseContactSearchCriteriaException(
        searchCriteria.ContactSubtypeType, searchCriteria.Address.Country)
      em = exception.Message
    }
    
    return new ValidateABContactSearchCriteriaPluginResult() { 
      override property get Valid() : boolean { return v }
      override property get ErrorMessage() : String { return em }
    }
  }

  /**
   * Interface method implementation from ValidateABContactSearchCriteriaPlugin.
   * The implementation basically delegates to a subtype specific subclass of
   * ABContactSubtypeLogic.
   */
  private function canSearch(searchCriteria : ABContactSearchCriteria) : boolean {
    var logic = ABContactSubtypeLogic.getLogic(searchCriteria.ContactSubtype, _subtypeSpecificLogic)
    if (logic == null) {
      return true
    }
    if (meetSpecialistServicesCriteria(searchCriteria)) {
      return true
    }
    return logic.execute(searchCriteria)
  }


  /**
   * Delegate inner class for ABCompany subtypes
   */
  private class SearchLogic extends ABContactSubtypeLogic {
    private var _call : block(searchCriteria : ABContactSearchCriteria) : boolean

    construct(call : block(searchCriteria : ABContactSearchCriteria) : boolean) {
      _call = call
    }

    override function execute(bean : Bean) : boolean {
      var searchCriteria = (bean as ABContactSearchCriteria)
      return _call(searchCriteria)
    }
  }



  //
  //  Subtype specific "can search" methods
  //

  protected function abCompanyCanSearch(searchCriteria : ABContactSearchCriteria) : boolean {
    if (searchCriteria.Keyword == null
        and searchCriteria.KeywordKanji == null
        and searchCriteria.TaxID == null
        and isInLocale(searchCriteria)
        and searchCriteria.Address.PostalCode == null
        and not searchCriteria.isValidProximitySearch()) {
      return false
    }
    return true
  }


  protected function abPersonCanSearch(searchCriteria : ABContactSearchCriteria) : boolean {
    if (searchCriteria.FirstName != null or searchCriteria.FirstNameKanji != null) {
      if (searchCriteria.Keyword == null and searchCriteria.KeywordKanji == null) {
        return false
      }
    }
    if (searchCriteria.Keyword == null
        and searchCriteria.KeywordKanji == null
        and searchCriteria.FirstName == null
        and searchCriteria.FirstNameKanji == null
        and searchCriteria.TaxID == null
        and isInLocale(searchCriteria)
        and searchCriteria.Address.PostalCode == null
        and not searchCriteria.isValidProximitySearch()) {
      return false
    }
    return true
  }


  protected function abUserCanSearch(searchCriteria : ABContactSearchCriteria) : boolean {
    if (searchCriteria.Keyword == null
        and searchCriteria.KeywordKanji == null
        and searchCriteria.FirstName == null
        and searchCriteria.FirstNameKanji == null
        and searchCriteria.EmployeeNumber == null
        and isInLocale(searchCriteria)
        and searchCriteria.Address.PostalCode == null
        and not searchCriteria.isValidProximitySearch()) {
      return false
    }
    return true
  }


  protected function abPlaceCanSearch(searchCriteria : ABContactSearchCriteria) : boolean {
    if (searchCriteria.Keyword == null
        and searchCriteria.KeywordKanji == null
        and isInLocale(searchCriteria)
        and searchCriteria.Address.PostalCode == null
        and not searchCriteria.isValidProximitySearch()) {
      return false
    }
    return true
  }


  protected function abContactCanSearch(searchCriteria : ABContactSearchCriteria) : boolean {
    if (searchCriteria.Keyword == null
        and searchCriteria.KeywordKanji == null
        and searchCriteria.FirstName == null
        and searchCriteria.FirstNameKanji == null
        and searchCriteria.TaxID == null
        and searchCriteria.EmployeeNumber == null
        and isInLocale(searchCriteria)
        and searchCriteria.Address.PostalCode == null
        and not searchCriteria.isValidProximitySearch()) {
      return false
    }
    return true
  }


  /**
   * Function that locale-specific subclasses may override to determine if the
   * locale information should pass validation. This base implementation expects
   * a combination of City and State, but some locales may not have any concept
   * of state, or may have different requirements altogether.
   */
  protected function isInLocale(searchCriteria : ABContactSearchCriteria) : boolean {
    return searchCriteria.Address.City == null or searchCriteria.Address.State == null
  }

  /*
   * Search should be valid as long as SearchCriteria contains SpecialistServices and (State or PostalCode)
   */
  protected function meetSpecialistServicesCriteria(searchCriteria : ABContactSearchCriteria) : boolean {
    if (searchCriteria.SpecialistServices != null and searchCriteria.SpecialistServices.Count > 0) {
      if ((searchCriteria.Address.State != null) or (searchCriteria.Address.PostalCode != null))
        return true
    }
    return false
  }
}
