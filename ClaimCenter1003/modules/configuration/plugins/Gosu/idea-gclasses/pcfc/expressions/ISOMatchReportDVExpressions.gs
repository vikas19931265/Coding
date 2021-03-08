package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/iso/ISOMatchReportDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ISOMatchReportDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/iso/ISOMatchReportDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ISOMatchReportDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=InsuringCompany_Input) at ISOMatchReportDV.pcf: line 17, column 49
    function valueRoot_1 () : java.lang.Object {
      return ISOMatchReport
    }
    
    // 'value' attribute on TextInput (id=InsuringCompany_Input) at ISOMatchReportDV.pcf: line 17, column 49
    function value_0 () : java.lang.String {
      return ISOMatchReport.InsuringCompany
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at ISOMatchReportDV.pcf: line 38, column 44
    function value_12 () : java.util.Date {
      return ISOMatchReport.DateOfLoss
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ISOMatchReportDV.pcf: line 42, column 46
    function value_15 () : java.lang.String {
      return ISOMatchReport.PolicyNumber
    }
    
    // 'value' attribute on TextInput (id=PolicyType_Input) at ISOMatchReportDV.pcf: line 46, column 44
    function value_18 () : java.lang.String {
      return ISOMatchReport.PolicyType
    }
    
    // 'value' attribute on TextInput (id=MatchReasons_Input) at ISOMatchReportDV.pcf: line 52, column 56
    function value_21 () : java.lang.String {
      return ISOMatchReport.MatchReasonsForDisplay
    }
    
    // 'value' attribute on DateInput (id=ReceivedDate_Input) at ISOMatchReportDV.pcf: line 58, column 46
    function value_24 () : java.util.Date {
      return ISOMatchReport.ReceivedDate
    }
    
    // 'value' attribute on TextAreaInput (id=InsurerAddress_Input) at ISOMatchReportDV.pcf: line 22, column 58
    function value_3 () : java.lang.String {
      return ISOMatchReport.InsurerAddressForDisplay
    }
    
    // 'value' attribute on TextInput (id=InsurerPhone_Input) at ISOMatchReportDV.pcf: line 26, column 46
    function value_6 () : java.lang.String {
      return ISOMatchReport.InsurerPhone
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at ISOMatchReportDV.pcf: line 32, column 45
    function value_9 () : java.lang.String {
      return ISOMatchReport.ClaimNumber
    }
    
    property get ISOMatchReport () : ISOMatchReport {
      return getRequireValue("ISOMatchReport", 0) as ISOMatchReport
    }
    
    property set ISOMatchReport ($arg :  ISOMatchReport) {
      setRequireValue("ISOMatchReport", 0, $arg)
    }
    
    
  }
  
  
}