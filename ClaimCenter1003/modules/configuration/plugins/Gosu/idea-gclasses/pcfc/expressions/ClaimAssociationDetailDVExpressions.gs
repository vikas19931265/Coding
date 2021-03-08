package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/associations/ClaimAssociationDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimAssociationDetailDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/associations/ClaimAssociationDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimAssociationDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at ClaimAssociationDetailDV.pcf: line 37, column 85
    function def_onEnter_12 (def :  pcf.EditableClaimsInAssociationLV) : void {
      def.onEnter(ClaimAssociation)
    }
    
    // 'def' attribute on ListViewInput at ClaimAssociationDetailDV.pcf: line 37, column 85
    function def_refreshVariables_13 (def :  pcf.EditableClaimsInAssociationLV) : void {
      def.refreshVariables(ClaimAssociation)
    }
    
    // 'value' attribute on TextInput (id=Title_Input) at ClaimAssociationDetailDV.pcf: line 21, column 41
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimAssociation.Title = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at ClaimAssociationDetailDV.pcf: line 27, column 45
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimAssociation.ClaimAssocType = (__VALUE_TO_SET as typekey.ClaimAssocType)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimAssociationDetailDV.pcf: line 33, column 47
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimAssociation.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Title_Input) at ClaimAssociationDetailDV.pcf: line 21, column 41
    function valueRoot_2 () : java.lang.Object {
      return ClaimAssociation
    }
    
    // 'value' attribute on TextInput (id=Title_Input) at ClaimAssociationDetailDV.pcf: line 21, column 41
    function value_0 () : java.lang.String {
      return ClaimAssociation.Title
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at ClaimAssociationDetailDV.pcf: line 27, column 45
    function value_4 () : typekey.ClaimAssocType {
      return ClaimAssociation.ClaimAssocType
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimAssociationDetailDV.pcf: line 33, column 47
    function value_8 () : java.lang.String {
      return ClaimAssociation.Description
    }
    
    property get ClaimAssociation () : ClaimAssociation {
      return getRequireValue("ClaimAssociation", 0) as ClaimAssociation
    }
    
    property set ClaimAssociation ($arg :  ClaimAssociation) {
      setRequireValue("ClaimAssociation", 0, $arg)
    }
    
    
  }
  
  
}