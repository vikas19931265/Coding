package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotGeneralPR800PanelSet_HomeownersExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotGeneralPR800PanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'columns' attribute on Layout at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 323, column 25
    function columns_119 () : java.lang.Double {
      return 4
    }
    
    // 'value' attribute on TextCell (id=Contact_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 412, column 73
    function sortValue_138 (witness :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(witness.Contact)
    }
    
    // 'value' attribute on TextCell (id=WitnessStatement_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 417, column 50
    function sortValue_139 (witness :  dynamic.Dynamic) : java.lang.Object {
      return witness.WitnessStatementInd
    }
    
    // 'value' attribute on TextCell (id=WitnessPerspective_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 422, column 50
    function sortValue_140 (witness :  dynamic.Dynamic) : java.lang.Object {
      return witness.WitnessPerspective
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 444, column 50
    function sortValue_150 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 449, column 50
    function sortValue_151 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 454, column 50
    function sortValue_152 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 476, column 50
    function sortValue_163 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.MetroReportType
    }
    
    // 'value' attribute on TextCell (id=MetroReportStatus_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 481, column 50
    function sortValue_164 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.Status
    }
    
    // 'value' attribute on DateCell (id=MetroReportOrderDate_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 486, column 50
    function sortValue_165 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.CreateTime
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 22, column 40
    function valueRoot_1 () : java.lang.Object {
      return snapshot
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 68, column 40
    function valueRoot_20 () : java.lang.Object {
      return snapshot.LossLocation
    }
    
    // 'value' attribute on TextInput (id=CatastropheNumber_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 73, column 40
    function valueRoot_23 () : java.lang.Object {
      return snapshot.Catastrophe
    }
    
    // 'value' attribute on BooleanRadioInput (id=ArsonInvolved_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 92, column 42
    function valueRoot_29 () : java.lang.Object {
      return snapshot.PropertyFireDamage
    }
    
    // 'value' attribute on TextInput (id=WaterSource_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 146, column 42
    function valueRoot_54 () : java.lang.Object {
      return snapshot.PropertyWaterDamage
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 22, column 40
    function value_0 () : dynamic.Dynamic {
      return snapshot.Description
    }
    
    // 'value' attribute on TextInput (id=LocationOfTheft_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 40, column 70
    function value_10 () : dynamic.Dynamic {
      return snapshot.LocationOfTheft
    }
    
    // 'value' attribute on PanelIterator (id=InjuryIncidentIterator) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 329, column 42
    function value_128 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(snapshot.Incidents, "InjuryIncident")
    }
    
    // 'value' attribute on PanelIterator (id=PropertyIncidentIterator) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 361, column 42
    function value_137 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(snapshot.Incidents, "FixedPropertyIncident")
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentReport_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 45, column 40
    function value_14 () : dynamic.Dynamic {
      return snapshot.IncidentReport
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 407, column 45
    function value_149 () : dynamic.Dynamic {
      return util.Snapshot.getClaimContactRolesByRole(snapshot, "Witness")
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 438, column 45
    function value_162 () : dynamic.Dynamic {
      return snapshot.Officials
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 470, column 45
    function value_175 () : dynamic.Dynamic {
      return snapshot.MetroReports
    }
    
    // 'value' attribute on TextInput (id=Notification_Fault_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 498, column 41
    function value_176 () : dynamic.Dynamic {
      return snapshot.FaultRating
    }
    
    // 'value' attribute on TextInput (id=ClaimPermissionRequired_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 505, column 42
    function value_179 () : dynamic.Dynamic {
      return snapshot.PermissionRequired
    }
    
    // 'value' attribute on InputIterator (id=DamageTypeChooser) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 53, column 52
    function value_18 () : gw.api.claim.DamageManager[] {
      return gw.api.claim.HomeownersHelper.getDamages(claim).where( \ d -> snapshot[d.ClaimProperty.Name] != null)
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 68, column 40
    function value_19 () : dynamic.Dynamic {
      return snapshot.LossLocation.DisplayName
    }
    
    // 'value' attribute on TextInput (id=CatastropheNumber_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 73, column 40
    function value_22 () : dynamic.Dynamic {
      return snapshot.Catastrophe.DisplayName
    }
    
    // 'value' attribute on BooleanRadioInput (id=WeatherRelated_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 78, column 40
    function value_25 () : dynamic.Dynamic {
      return snapshot.WeatherRelated
    }
    
    // 'value' attribute on BooleanRadioInput (id=ArsonInvolved_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 92, column 42
    function value_28 () : dynamic.Dynamic {
      return snapshot.PropertyFireDamage.Arson
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 29, column 40
    function value_3 () : dynamic.Dynamic {
      return snapshot.LossDate
    }
    
    // 'value' attribute on TextAreaInput (id=FireSource_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 98, column 42
    function value_31 () : dynamic.Dynamic {
      return snapshot.PropertyFireDamage.FireSource
    }
    
    // 'value' attribute on TextAreaInput (id=HowWasFireDiscovered_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 104, column 42
    function value_34 () : dynamic.Dynamic {
      return snapshot.PropertyFireDamage.HowWasFireDiscovered
    }
    
    // 'value' attribute on BooleanRadioInput (id=FireDeptResponded_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 109, column 42
    function value_37 () : dynamic.Dynamic {
      return snapshot.PropertyFireDamage.FireDeptResponded
    }
    
    // 'value' attribute on BooleanRadioInput (id=IsAnyoneInjured_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 116, column 42
    function value_40 () : dynamic.Dynamic {
      return snapshot.PropertyFireDamage.IsAnyoneInjured
    }
    
    // 'value' attribute on BooleanRadioInput (id=SmokeDamageOnly_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 121, column 42
    function value_43 () : dynamic.Dynamic {
      return snapshot.PropertyFireDamage.SmokeDamageOnly
    }
    
    // 'value' attribute on BooleanRadioInput (id=IsHomeHabitable_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 126, column 42
    function value_46 () : dynamic.Dynamic {
      return snapshot.PropertyFireDamage.IsHomeHabitable
    }
    
    // 'value' attribute on BooleanRadioInput (id=IsHomeSecure_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 131, column 42
    function value_49 () : dynamic.Dynamic {
      return snapshot.PropertyFireDamage.IsHomeSecure
    }
    
    // 'value' attribute on TextInput (id=WaterSource_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 146, column 42
    function value_53 () : dynamic.Dynamic {
      return snapshot.PropertyWaterDamage.WaterSource
    }
    
    // 'value' attribute on BooleanRadioInput (id=HasWaterBeenTurnedOff_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 153, column 42
    function value_56 () : dynamic.Dynamic {
      return snapshot.PropertyWaterDamage.HasWaterBeenTurnedOff
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 34, column 40
    function value_6 () : dynamic.Dynamic {
      return snapshot.LossCause
    }
    
    // 'value' attribute on BooleanRadioInput (id=IsRoofCovered_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 159, column 98
    function value_60 () : dynamic.Dynamic {
      return snapshot.PropertyWaterDamage.IsRoofProtected
    }
    
    // 'visible' attribute on PanelRef (id=FireDamageQuestions) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 83, column 53
    function visible_52 () : java.lang.Boolean {
      return snapshot.PropertyFireDamage != null
    }
    
    // 'visible' attribute on BooleanRadioInput (id=IsRoofCovered_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 159, column 98
    function visible_59 () : java.lang.Boolean {
      return snapshot.PropertyWaterDamage.WaterSource.Code == WaterSource.TC_ROOF.Code
    }
    
    // 'visible' attribute on PanelRef (id=WaterDamageQuestions) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 137, column 54
    function visible_64 () : java.lang.Boolean {
      return snapshot.PropertyWaterDamage != null
    }
    
    // 'visible' attribute on TextInput (id=LocationOfTheft_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 40, column 70
    function visible_9 () : java.lang.Boolean {
      return snapshot.LossCause.Code == "burglary"
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get snapshot () : dynamic.Dynamic {
      return getRequireValue("snapshot", 0) as dynamic.Dynamic
    }
    
    property set snapshot ($arg :  dynamic.Dynamic) {
      setRequireValue("snapshot", 0, $arg)
    }
    
    function hasIncidentType( incident : Type ) : boolean {
      if (incident == OtherStructureIncident) {
        return hasIncidentNotOnExposure("OtherStructureIncident")
      } else if (incident == PropertyContentsIncident) {
        return hasIncidentNotOnExposure("PropertyContentsIncident")
      } else if (incident == InjuryIncident) {
        return hasIncidentNotOnExposure("InjuryIncident")
      } else if (incident == DwellingIncident) {
        return hasIncidentNotOnExposure("DwellingIncident")
      } else if (incident == FixedPropertyIncident) {
        return hasIncidentNotOnExposure("FixedPropertyIncident")
      } else if (incident == LivingExpensesIncident) {
        return hasIncidentNotOnExposure("LivingExpensesIncident")
      }
      return false
    }
    
    function hasIncidentNotOnExposure(incidentTypeName : String): boolean {
      return !((util.Snapshot.filterBeansOfType(snapshot.Incidents, incidentTypeName)).where(\ o -> onExposure(o) == false).IsEmpty) ? true : false
    }
    
    function onExposure(incident : dynamic.Dynamic) : boolean {
      var exposures : dynamic.Dynamic = snapshot.Exposures
      for(exposure in exposures) {
        if(exposure.Incident == incident) {
          return true
        }
      }
      return false
    }
    
    //Return the injured party's name or display key
    function getInjuredName(incident:dynamic.Dynamic) : String {
      if(incident.injured!=null and incident.injured.DisplayName.HasContent)
        return incident.injured.DisplayName as String
      else
        return DisplayKey.get("Web.ClaimSnapshotGeneralDV.Homeowners.Injured.Unknown")
    }
    
    function getIncidentCoverageLimit(coverageType : CoverageType) : String {
      var coverages = getPrimaryLocationCoverages()
      if (coverages != null) {
        var coverage = coverages.firstWhere(\ c -> c.Type.Code == coverageType.Code)
        return coverage.ExposureLimit as String 
      } else {
        return null
      }
    }
    
    function getPrimaryLocationCoverages() : dynamic.Dynamic {
      var result = new Object[0]
      var policy = snapshot.Policy
      var location = policy.PrimaryLocation
      if (location != null) {
        var riskUnits = policy.RiskUnits
        for (ru in riskUnits) {
          if (ru.PolicyLocation == location) {
            result = util.Snapshot.filterBeansOfType(ru.Coverages, "PropertyCoverage")
          }
        }
      }
      return result
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DwellingInputSetExpressionsImpl extends ClaimSnapshotGeneralPR800PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 174, column 39
    function initialValue_65 () : dynamic.Dynamic {
      return (util.Snapshot.filterBeansOfType(snapshot.Incidents, "DwellingIncident")).firstWhere(\ o -> onExposure(o) == false)
    }
    
    // 'value' attribute on TextCell (id=RoomType_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 217, column 52
    function sortValue_74 (roomDamage :  dynamic.Dynamic) : java.lang.Object {
      return roomDamage.RoomType
    }
    
    // 'value' attribute on TextAreaInput (id=DwellingDamageDescription_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 187, column 44
    function valueRoot_69 () : java.lang.Object {
      return dwellingIncident
    }
    
    // 'value' attribute on TextInput (id=DwellingLimit_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 181, column 137
    function value_66 () : java.lang.String {
      return getIncidentCoverageLimit(gw.config.LOBAbstraction.ForPolicy.ForHomeowners.getDwellingCoverageType(claim.Policy))
    }
    
    // 'value' attribute on TextAreaInput (id=DwellingDamageDescription_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 187, column 44
    function value_68 () : dynamic.Dynamic {
      return dwellingIncident.Description
    }
    
    // 'value' attribute on TextAreaInput (id=DwellingMaterialsDamaged_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 194, column 44
    function value_71 () : dynamic.Dynamic {
      return dwellingIncident.MaterialsDamaged
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 203, column 47
    function value_81 () : dynamic.Dynamic {
      return dwellingIncident.DwellingRoomDamages
    }
    
    // 'value' attribute on BooleanRadioInput (id=DwellingEstimateReceived_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 226, column 44
    function value_82 () : dynamic.Dynamic {
      return dwellingIncident.EstimatesReceivedBoolean
    }
    
    // 'value' attribute on BooleanRadioInput (id=DwellingAlreadyRepaired_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 231, column 44
    function value_85 () : dynamic.Dynamic {
      return dwellingIncident.AlreadyRepaired
    }
    
    // 'visible' attribute on InputSet (id=DwellingInputSet) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 170, column 64
    function visible_88 () : java.lang.Boolean {
      return hasIncidentType(entity.DwellingIncident)
    }
    
    property get dwellingIncident () : dynamic.Dynamic {
      return getVariableValue("dwellingIncident", 1) as dynamic.Dynamic
    }
    
    property set dwellingIncident ($arg :  dynamic.Dynamic) {
      setVariableValue("dwellingIncident", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends DwellingInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=NumberOfRooms_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 211, column 41
    function valueRoot_76 () : java.lang.Object {
      return roomDamage
    }
    
    // 'value' attribute on TextCell (id=NumberOfRooms_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 211, column 41
    function value_75 () : dynamic.Dynamic {
      return roomDamage.NumberOfRooms
    }
    
    // 'value' attribute on TextCell (id=RoomType_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 217, column 52
    function value_78 () : dynamic.Dynamic {
      return roomDamage.RoomType
    }
    
    property get roomDamage () : dynamic.Dynamic {
      return getIteratedValue(2) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotGeneralPR800PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=WitnessStatement_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 417, column 50
    function valueRoot_144 () : java.lang.Object {
      return witness
    }
    
    // 'value' attribute on TextCell (id=Contact_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 412, column 73
    function value_141 () : java.lang.String {
      return util.Snapshot.renderValue(witness.Contact)
    }
    
    // 'value' attribute on TextCell (id=WitnessStatement_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 417, column 50
    function value_143 () : dynamic.Dynamic {
      return witness.WitnessStatementInd
    }
    
    // 'value' attribute on TextCell (id=WitnessPerspective_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 422, column 50
    function value_146 () : dynamic.Dynamic {
      return witness.WitnessPerspective
    }
    
    property get witness () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ClaimSnapshotGeneralPR800PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 444, column 50
    function valueRoot_154 () : java.lang.Object {
      return Official
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 444, column 50
    function value_153 () : dynamic.Dynamic {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 449, column 50
    function value_156 () : dynamic.Dynamic {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 454, column 50
    function value_159 () : dynamic.Dynamic {
      return Official.ReportNumber
    }
    
    property get Official () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ClaimSnapshotGeneralPR800PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 476, column 50
    function valueRoot_167 () : java.lang.Object {
      return MetroReport
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 476, column 50
    function value_166 () : dynamic.Dynamic {
      return MetroReport.MetroReportType
    }
    
    // 'value' attribute on TextCell (id=MetroReportStatus_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 481, column 50
    function value_169 () : dynamic.Dynamic {
      return MetroReport.Status
    }
    
    // 'value' attribute on DateCell (id=MetroReportOrderDate_Cell) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 486, column 50
    function value_172 () : dynamic.Dynamic {
      return MetroReport.CreateTime
    }
    
    property get MetroReport () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotGeneralPR800PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'valueLabel' attribute on CheckBoxInput (id=DamageTypeChecked_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 58, column 34
    function valueLabel_17 () : java.lang.Object {
      return damage.Name
    }
    
    property get damage () : gw.api.claim.DamageManager {
      return getIteratedValue(1) as gw.api.claim.DamageManager
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LivingExpensesInputSetExpressionsImpl extends ClaimSnapshotGeneralPR800PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 298, column 39
    function initialValue_112 () : dynamic.Dynamic {
      return (util.Snapshot.filterBeansOfType(snapshot.Incidents, "LivingExpensesIncident")).firstWhere(\ o -> onExposure(o) == false)
    }
    
    // 'value' attribute on TextAreaInput (id=LivingExpensesDescription_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 311, column 44
    function valueRoot_116 () : java.lang.Object {
      return livingExpensesIncident
    }
    
    // 'value' attribute on TextInput (id=LossOfUseLimit_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 305, column 138
    function value_113 () : java.lang.String {
      return getIncidentCoverageLimit(gw.config.LOBAbstraction.ForPolicy.ForHomeowners.getLossOfUseCoverageType(claim.Policy))
    }
    
    // 'value' attribute on TextAreaInput (id=LivingExpensesDescription_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 311, column 44
    function value_115 () : dynamic.Dynamic {
      return livingExpensesIncident.Description
    }
    
    // 'visible' attribute on InputSet (id=LivingExpensesInputSet) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 294, column 70
    function visible_118 () : java.lang.Boolean {
      return hasIncidentType(entity.LivingExpensesIncident)
    }
    
    property get livingExpensesIncident () : dynamic.Dynamic {
      return getVariableValue("livingExpensesIncident", 1) as dynamic.Dynamic
    }
    
    property set livingExpensesIncident ($arg :  dynamic.Dynamic) {
      setVariableValue("livingExpensesIncident", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OtherStructureInputSetExpressionsImpl extends ClaimSnapshotGeneralPR800PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 239, column 39
    function initialValue_89 () : dynamic.Dynamic {
      return (util.Snapshot.filterBeansOfType(snapshot.Incidents, "OtherStructureIncident")).firstWhere(\ o -> onExposure(o) == false)
    }
    
    // 'value' attribute on TextAreaInput (id=OtherStructureDamageDescription_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 252, column 44
    function valueRoot_93 () : java.lang.Object {
      return otherStructureIncident
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherStructureFencesDamaged_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 267, column 44
    function value_101 () : dynamic.Dynamic {
      return otherStructureIncident.FencesDamaged
    }
    
    // 'value' attribute on TextInput (id=OtherStructureLimit_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 246, column 144
    function value_90 () : java.lang.String {
      return getIncidentCoverageLimit(gw.config.LOBAbstraction.ForPolicy.ForHomeowners.getOtherStructuresCoverageType(claim.Policy))
    }
    
    // 'value' attribute on TextAreaInput (id=OtherStructureDamageDescription_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 252, column 44
    function value_92 () : dynamic.Dynamic {
      return otherStructureIncident.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherStructureEstimateReceived_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 257, column 44
    function value_95 () : dynamic.Dynamic {
      return otherStructureIncident.EstimatesReceivedBoolean
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherStructureAlreadyRepaired_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 262, column 44
    function value_98 () : dynamic.Dynamic {
      return otherStructureIncident.AlreadyRepaired
    }
    
    // 'visible' attribute on InputSet (id=OtherStructureInputSet) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 235, column 70
    function visible_104 () : java.lang.Boolean {
      return hasIncidentType(entity.OtherStructureIncident)
    }
    
    property get otherStructureIncident () : dynamic.Dynamic {
      return getVariableValue("otherStructureIncident", 1) as dynamic.Dynamic
    }
    
    property set otherStructureIncident ($arg :  dynamic.Dynamic) {
      setVariableValue("otherStructureIncident", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends ClaimSnapshotGeneralPR800PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=PropertyName_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 380, column 46
    function action_130 () : void {
      ClaimSnapshotFixedPropertyIncidentPopup.push(claim, propertyIncident)
    }
    
    // 'action' attribute on TextInput (id=PropertyName_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 380, column 46
    function action_dest_131 () : pcf.api.Destination {
      return pcf.ClaimSnapshotFixedPropertyIncidentPopup.createDestination(claim, propertyIncident)
    }
    
    // 'icon' attribute on BooleanRadioInput (id=PropertyIcon_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 372, column 38
    function icon_129 () : java.lang.String {
      return gw.api.claim.IncidentIconSet.PROPERTY_LIABILITY.DefaultPanelIcon
    }
    
    // 'value' attribute on TextInput (id=PropertyIncidentDescription_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 385, column 46
    function valueRoot_135 () : java.lang.Object {
      return propertyIncident
    }
    
    // 'value' attribute on TextInput (id=PropertyName_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 380, column 46
    function value_132 () : dynamic.Dynamic {
      return propertyIncident.DisplayName == "" ? DisplayKey.get("Web.ClaimSnapshotGeneralDV.Homeowners.Property.Unknown") : propertyIncident.DisplayName
    }
    
    // 'value' attribute on TextInput (id=PropertyIncidentDescription_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 385, column 46
    function value_134 () : dynamic.Dynamic {
      return propertyIncident.Description
    }
    
    property get propertyIncident () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends ClaimSnapshotGeneralPR800PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=InjuredName_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 347, column 57
    function action_121 () : void {
      ClaimSnapshotInjuredInjuryIncident800Popup.push(claim, injuryIncident)
    }
    
    // 'action' attribute on TextInput (id=InjuredName_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 347, column 57
    function action_dest_122 () : pcf.api.Destination {
      return pcf.ClaimSnapshotInjuredInjuryIncident800Popup.createDestination(claim, injuryIncident)
    }
    
    // 'icon' attribute on BooleanRadioInput (id=PedestrianIcon_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 340, column 38
    function icon_120 () : java.lang.String {
      return gw.api.claim.IncidentIconSet.INJURY.DefaultPanelIcon
    }
    
    // 'value' attribute on TextInput (id=InjuryIncidentDescription_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 352, column 46
    function valueRoot_126 () : java.lang.Object {
      return injuryIncident
    }
    
    // 'value' attribute on TextInput (id=InjuredName_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 347, column 57
    function value_123 () : java.lang.String {
      return getInjuredName(injuryIncident)
    }
    
    // 'value' attribute on TextInput (id=InjuryIncidentDescription_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 352, column 46
    function value_125 () : dynamic.Dynamic {
      return injuryIncident.Description
    }
    
    property get injuryIncident () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PropertyContentsInputSetExpressionsImpl extends ClaimSnapshotGeneralPR800PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 277, column 39
    function initialValue_105 () : dynamic.Dynamic {
      return (util.Snapshot.filterBeansOfType(snapshot.Incidents, "PropertyContentsIncident")).firstWhere(\ o -> onExposure(o) == false)
    }
    
    // 'value' attribute on TextAreaInput (id=PropertyContentsDamageDescription_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 290, column 44
    function valueRoot_109 () : java.lang.Object {
      return propertyContentsIncident
    }
    
    // 'value' attribute on TextInput (id=PropertyContentsLimit_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 284, column 145
    function value_106 () : java.lang.String {
      return getIncidentCoverageLimit(gw.config.LOBAbstraction.ForPolicy.ForHomeowners.getPersonalPropertyCoverageType(claim.Policy))
    }
    
    // 'value' attribute on TextAreaInput (id=PropertyContentsDamageDescription_Input) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 290, column 44
    function value_108 () : dynamic.Dynamic {
      return propertyContentsIncident.Description
    }
    
    // 'visible' attribute on InputSet (id=PropertyContentsInputSet) at ClaimSnapshotGeneralPR800PanelSet.Homeowners.pcf: line 273, column 72
    function visible_111 () : java.lang.Boolean {
      return hasIncidentType(entity.PropertyContentsIncident)
    }
    
    property get propertyContentsIncident () : dynamic.Dynamic {
      return getVariableValue("propertyContentsIncident", 1) as dynamic.Dynamic
    }
    
    property set propertyContentsIncident ($arg :  dynamic.Dynamic) {
      setVariableValue("propertyContentsIncident", 1, $arg)
    }
    
    
  }
  
  
}