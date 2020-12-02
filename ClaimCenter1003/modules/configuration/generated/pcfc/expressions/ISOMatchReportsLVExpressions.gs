package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/iso/ISOMatchReportsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ISOMatchReportsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/iso/ISOMatchReportsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ISOMatchReportsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ISOMatchReportsLV.pcf: line 22, column 51
    function sortValue_0 (isoMatchReport :  entity.ISOMatchReport) : java.lang.Object {
      return isoMatchReport.InsuringCompany
    }
    
    // 'value' attribute on TextCell (id=InsurerPhone_Cell) at ISOMatchReportsLV.pcf: line 27, column 48
    function sortValue_1 (isoMatchReport :  entity.ISOMatchReport) : java.lang.Object {
      return isoMatchReport.InsurerPhone
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at ISOMatchReportsLV.pcf: line 33, column 25
    function sortValue_2 (isoMatchReport :  entity.ISOMatchReport) : java.lang.Object {
      return isoMatchReport.ClaimNumber
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ISOMatchReportsLV.pcf: line 38, column 46
    function sortValue_3 (isoMatchReport :  entity.ISOMatchReport) : java.lang.Object {
      return isoMatchReport.DateOfLoss
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ISOMatchReportsLV.pcf: line 42, column 48
    function sortValue_4 (isoMatchReport :  entity.ISOMatchReport) : java.lang.Object {
      return isoMatchReport.PolicyNumber
    }
    
    // 'value' attribute on DateCell (id=ReceivedDate_Cell) at ISOMatchReportsLV.pcf: line 48, column 48
    function sortValue_5 (isoMatchReport :  entity.ISOMatchReport) : java.lang.Object {
      return isoMatchReport.ReceivedDate
    }
    
    // 'value' attribute on RowIterator at ISOMatchReportsLV.pcf: line 16, column 43
    function value_28 () : entity.ISOMatchReport[] {
      return isoReportable.ISOMatchReports
    }
    
    property get isoReportable () : ISOReportable {
      return getRequireValue("isoReportable", 0) as ISOReportable
    }
    
    property set isoReportable ($arg :  ISOReportable) {
      setRequireValue("isoReportable", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/exposures/iso/ISOMatchReportsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ISOMatchReportsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at ISOMatchReportsLV.pcf: line 33, column 25
    function action_14 () : void {
      ISOMatchReportDetailPopup.push(isoMatchReport)
    }
    
    // 'action' attribute on TextCell (id=Insurer_Cell) at ISOMatchReportsLV.pcf: line 22, column 51
    function action_6 () : void {
      ISOMatchReportDetailPopup.push(isoMatchReport)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at ISOMatchReportsLV.pcf: line 33, column 25
    function action_dest_15 () : pcf.api.Destination {
      return pcf.ISOMatchReportDetailPopup.createDestination(isoMatchReport)
    }
    
    // 'action' attribute on TextCell (id=Insurer_Cell) at ISOMatchReportsLV.pcf: line 22, column 51
    function action_dest_7 () : pcf.api.Destination {
      return pcf.ISOMatchReportDetailPopup.createDestination(isoMatchReport)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ISOMatchReportsLV.pcf: line 22, column 51
    function valueRoot_9 () : java.lang.Object {
      return isoMatchReport
    }
    
    // 'value' attribute on TextCell (id=InsurerPhone_Cell) at ISOMatchReportsLV.pcf: line 27, column 48
    function value_11 () : java.lang.String {
      return isoMatchReport.InsurerPhone
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at ISOMatchReportsLV.pcf: line 33, column 25
    function value_16 () : java.lang.String {
      return isoMatchReport.ClaimNumber
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ISOMatchReportsLV.pcf: line 38, column 46
    function value_19 () : java.util.Date {
      return isoMatchReport.DateOfLoss
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ISOMatchReportsLV.pcf: line 42, column 48
    function value_22 () : java.lang.String {
      return isoMatchReport.PolicyNumber
    }
    
    // 'value' attribute on DateCell (id=ReceivedDate_Cell) at ISOMatchReportsLV.pcf: line 48, column 48
    function value_25 () : java.util.Date {
      return isoMatchReport.ReceivedDate
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ISOMatchReportsLV.pcf: line 22, column 51
    function value_8 () : java.lang.String {
      return isoMatchReport.InsuringCompany
    }
    
    property get isoMatchReport () : entity.ISOMatchReport {
      return getIteratedValue(1) as entity.ISOMatchReport
    }
    
    
  }
  
  
}