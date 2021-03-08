package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/claims/FreeTextClaimSearchInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FreeTextClaimSearchInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/search/claims/FreeTextClaimSearchInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FreeTextClaimSearchInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=Role_Input) at FreeTextClaimSearchInputSet.pcf: line 22, column 53
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.FreeTextNameSearchType = (__VALUE_TO_SET as typekey.FreTxtClmSrchNameSrchTyp)
    }
    
    // 'value' attribute on TextInput (id=Phone_Input) at FreeTextClaimSearchInputSet.pcf: line 34, column 55
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.NameCriteria.Phone = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Address_Input) at FreeTextClaimSearchInputSet.pcf: line 40, column 65
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.AddressCriteria.AddressLine1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=City_Input) at FreeTextClaimSearchInputSet.pcf: line 46, column 57
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.AddressCriteria.City = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=FullName_Input) at FreeTextClaimSearchInputSet.pcf: line 27, column 54
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.NameCriteria.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on TextInput (id=Phone_Input) at FreeTextClaimSearchInputSet.pcf: line 34, column 55
    function label_10 () : java.lang.Object {
      return DisplayKey.get("JSP.ClaimSearch.Search.Phone")
    }
    
    // 'label' attribute on TextInput (id=FullName_Input) at FreeTextClaimSearchInputSet.pcf: line 27, column 54
    function label_4 () : java.lang.Object {
      return DisplayKey.get("LV.Claim.ClaimSearchResults.Claims.FullName")
    }
    
    // 'requestValidationExpression' attribute on TextInput (id=Phone_Input) at FreeTextClaimSearchInputSet.pcf: line 34, column 55
    function requestValidationExpression_11 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.util.PhoneUtil.isViableNumberWithExtension(VALUE) ? null : DisplayKey.get("JSP.ClaimSearch.Search.Phone.Invalid", VALUE)
    }
    
    // 'value' attribute on TextInput (id=Address_Input) at FreeTextClaimSearchInputSet.pcf: line 40, column 65
    function valueRoot_19 () : java.lang.Object {
      return ClaimSearchCriteria.AddressCriteria
    }
    
    // 'value' attribute on TypeKeyInput (id=Role_Input) at FreeTextClaimSearchInputSet.pcf: line 22, column 53
    function valueRoot_2 () : java.lang.Object {
      return ClaimSearchCriteria
    }
    
    // 'value' attribute on TextInput (id=FullName_Input) at FreeTextClaimSearchInputSet.pcf: line 27, column 54
    function valueRoot_7 () : java.lang.Object {
      return ClaimSearchCriteria.NameCriteria
    }
    
    // 'value' attribute on TypeKeyInput (id=Role_Input) at FreeTextClaimSearchInputSet.pcf: line 22, column 53
    function value_0 () : typekey.FreTxtClmSrchNameSrchTyp {
      return ClaimSearchCriteria.FreeTextNameSearchType
    }
    
    // 'value' attribute on TextInput (id=Phone_Input) at FreeTextClaimSearchInputSet.pcf: line 34, column 55
    function value_12 () : java.lang.String {
      return ClaimSearchCriteria.NameCriteria.Phone
    }
    
    // 'value' attribute on TextInput (id=Address_Input) at FreeTextClaimSearchInputSet.pcf: line 40, column 65
    function value_17 () : java.lang.String {
      return ClaimSearchCriteria.AddressCriteria.AddressLine1
    }
    
    // 'value' attribute on TextInput (id=City_Input) at FreeTextClaimSearchInputSet.pcf: line 46, column 57
    function value_21 () : java.lang.String {
      return ClaimSearchCriteria.AddressCriteria.City
    }
    
    // 'value' attribute on TextInput (id=FullName_Input) at FreeTextClaimSearchInputSet.pcf: line 27, column 54
    function value_5 () : java.lang.String {
      return ClaimSearchCriteria.NameCriteria.Name
    }
    
    property get ClaimSearchCriteria () : ClaimSearchCriteria {
      return getRequireValue("ClaimSearchCriteria", 0) as ClaimSearchCriteria
    }
    
    property set ClaimSearchCriteria ($arg :  ClaimSearchCriteria) {
      setRequireValue("ClaimSearchCriteria", 0, $arg)
    }
    
    property get searchType () : String {
      return getVariableValue("searchType", 0) as String
    }
    
    property set searchType ($arg :  String) {
      setVariableValue("searchType", 0, $arg)
    }
    
    
  }
  
  
}