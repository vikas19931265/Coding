package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotGeneral300DV.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotGeneral300DV_glExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotGeneral300DV.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotGeneral300DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral300DV.gl.pcf: line 250, column 46
    function sortValue_82 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral300DV.gl.pcf: line 255, column 46
    function sortValue_83 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral300DV.gl.pcf: line 260, column 46
    function sortValue_84 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "LossType")
    }
    
    // 'value' attribute on TextInput (id=Strategy_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 44, column 38
    function value_10 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "Strategy")
    }
    
    // 'value' attribute on TextInput (id=PermissionRequired_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 49, column 38
    function value_12 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "PermissionRequired")
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 57, column 38
    function value_14 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "Description")
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 65, column 38
    function value_16 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "LossCause")
    }
    
    // 'value' attribute on TextInput (id=LossDate_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 69, column 110
    function value_18 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "LossDate") )
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 26, column 38
    function value_2 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "LOBCode")
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 76, column 114
    function value_20 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "LossLocation") )
    }
    
    // 'value' attribute on TextInput (id=County_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 81, column 38
    function value_22 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "LossLocation")["County"]
    }
    
    // 'value' attribute on TextInput (id=Country_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 86, column 38
    function value_24 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "LossLocation")["Country"]
    }
    
    // 'value' attribute on TextInput (id=LossLocationCode_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 91, column 38
    function value_26 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "LossLocationCode")
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 96, column 38
    function value_28 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "JurisdictionState")
    }
    
    // 'value' attribute on TextInput (id=Fault_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 100, column 107
    function value_30 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "Fault") )
    }
    
    // 'value' attribute on TextInput (id=ReportedDate_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 108, column 114
    function value_32 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "ReportedDate") )
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNoticeSuit_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 115, column 38
    function value_34 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "FirstNoticeSuit")
    }
    
    // 'value' attribute on TextInput (id=HowReported_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 120, column 38
    function value_36 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "HowReported")
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 124, column 108
    function value_38 () : java.lang.String {
      return util.Snapshot.renderValue(util.Snapshot.getContactByRole(Snapshot, "reporter"))
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 30, column 135
    function value_4 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "AssignedUser")["Contact"] )
    }
    
    // 'value' attribute on TextInput (id=DriverRelation_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 129, column 38
    function value_40 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "DriverRelation")
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 133, column 111
    function value_42 () : java.lang.String {
      return util.Snapshot.renderValue(util.Snapshot.getContactByRole(Snapshot, "maincontact"))
    }
    
    // 'value' attribute on TextInput (id=MainContactType_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 138, column 38
    function value_44 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "MainContactType")
    }
    
    // 'value' attribute on TextInput (id=DateRptdToAgent_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 142, column 117
    function value_46 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "DateRptdToAgent") )
    }
    
    // 'value' attribute on TextInput (id=ManifestationDate_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 146, column 119
    function value_48 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "ManifestationDate") )
    }
    
    // 'value' attribute on TextInput (id=CreateTime_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 157, column 112
    function value_52 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "CreateTime") )
    }
    
    // 'value' attribute on TextInput (id=CloseDate_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 161, column 111
    function value_54 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "CloseDate") )
    }
    
    // 'value' attribute on TextInput (id=ClosedOutcome_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 166, column 38
    function value_56 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "ClosedOutcome")
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentReport_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 171, column 38
    function value_58 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "IncidentReport")
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 34, column 95
    function value_6 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.renderValue(Snapshot.Catastrophe) )
    }
    
    // 'value' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 178, column 38
    function value_60 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "CoverageInQuestion")
    }
    
    // 'value' attribute on TextInput (id=DeductibleStatus_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 183, column 38
    function value_62 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "DeductibleStatus")
    }
    
    // 'value' attribute on TextInput (id=LitigationStatus_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 188, column 38
    function value_64 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "LitigationStatus")
    }
    
    // 'value' attribute on TextInput (id=SubrogationStatus_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 193, column 38
    function value_66 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "SubrogationStatus")
    }
    
    // 'value' attribute on TextInput (id=SalvageStatus_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 198, column 38
    function value_68 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "SalvageStatus")
    }
    
    // 'value' attribute on TextInput (id=OtherRecovStatus_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 203, column 38
    function value_70 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "OtherRecovStatus")
    }
    
    // 'value' attribute on TextInput (id=SIUStatus_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 208, column 38
    function value_72 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "SIUStatus")
    }
    
    // 'value' attribute on TextInput (id=ReinsuranceStatus_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 213, column 38
    function value_74 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "ReinsuranceStatus")
    }
    
    // 'value' attribute on TextInput (id=Flagged_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 221, column 38
    function value_76 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "Flagged")
    }
    
    // 'value' attribute on TextInput (id=FlaggedDate_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 225, column 113
    function value_78 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "FlaggedDate") )
    }
    
    // 'value' attribute on TextInput (id=Segment_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 39, column 38
    function value_8 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "Segment")
    }
    
    // 'value' attribute on TextInput (id=FlaggedReason_Input) at ClaimSnapshotGeneral300DV.gl.pcf: line 230, column 38
    function value_80 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "FlaggedReason")
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral300DV.gl.pcf: line 244, column 44
    function value_94 () : java.lang.Object[] {
      return util.Snapshot.getPropertyValue(Snapshot, "Officials") as Object[]
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get Snapshot () : dynamic.Dynamic {
      return getRequireValue("Snapshot", 0) as dynamic.Dynamic
    }
    
    property set Snapshot ($arg :  dynamic.Dynamic) {
      setRequireValue("Snapshot", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotGeneral300DV.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotGeneral300DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral300DV.gl.pcf: line 250, column 46
    function valueRoot_86 () : java.lang.Object {
      return Official
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral300DV.gl.pcf: line 250, column 46
    function value_85 () : dynamic.Dynamic {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral300DV.gl.pcf: line 255, column 46
    function value_88 () : dynamic.Dynamic {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral300DV.gl.pcf: line 260, column 46
    function value_91 () : dynamic.Dynamic {
      return Official.ReportNumber
    }
    
    property get Official () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}