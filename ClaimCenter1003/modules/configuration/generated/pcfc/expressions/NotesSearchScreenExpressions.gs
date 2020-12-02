package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/notes/NotesSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NotesSearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/notes/NotesSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=EditLink) at NotesSearchScreen.pcf: line 126, column 73
    function action_72 () : void {
      EditNote.drilldown(Note, Note.Claim)
    }
    
    // 'action' attribute on Link (id=DeleteLink) at NotesSearchScreen.pcf: line 136, column 75
    function action_75 () : void {
      gw.api.note.NotesUtilBase.deleteNote(Note)
    }
    
    // 'action' attribute on Link (id=PrintLink) at NotesSearchScreen.pcf: line 146, column 74
    function action_76 () : void {
      gw.api.print.PrintNoteAction.printNote(Note)
    }
    
    // 'action' attribute on Link (id=EditLink) at NotesSearchScreen.pcf: line 126, column 73
    function action_dest_73 () : pcf.api.Destination {
      return pcf.EditNote.createDestination(Note, Note.Claim)
    }
    
    // 'available' attribute on Link (id=EditLink) at NotesSearchScreen.pcf: line 126, column 73
    function available_71 () : java.lang.Boolean {
      return perm.Note.edit( Note )
    }
    
    // 'available' attribute on Link (id=DeleteLink) at NotesSearchScreen.pcf: line 136, column 75
    function available_74 () : java.lang.Boolean {
      return perm.Note.delete( Note )
    }
    
    // 'label' attribute on TextInput (id=AuthoringDate_Input) at NotesSearchScreen.pcf: line 181, column 41
    function label_87 () : java.lang.Object {
      return gw.api.util.StringUtil.formatDate(Note.AuthoringDate, "medium") + " " + gw.api.util.StringUtil.formatTime(Note.AuthoringDate, "short")
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at NotesSearchScreen.pcf: line 153, column 52
    function valueRoot_78 () : java.lang.Object {
      return Note.Author
    }
    
    // 'value' attribute on TextInput (id=Topic_Input) at NotesSearchScreen.pcf: line 160, column 54
    function valueRoot_81 () : java.lang.Object {
      return Note
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at NotesSearchScreen.pcf: line 153, column 52
    function value_77 () : java.lang.String {
      return Note.Author.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Topic_Input) at NotesSearchScreen.pcf: line 160, column 54
    function value_80 () : typekey.NoteTopicType {
      return Note.Topic
    }
    
    // 'value' attribute on TextInput (id=RelatedTo_Input) at NotesSearchScreen.pcf: line 166, column 52
    function value_83 () : java.lang.String {
      return Note.getNoteRelatedTo()
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at NotesSearchScreen.pcf: line 186, column 51
    function value_90 () : java.lang.String {
      return Note.Subject
    }
    
    // 'value' attribute on NoteBodyInput (id=Body_Input) at NotesSearchScreen.pcf: line 190, column 38
    function value_94 () : java.lang.String {
      return Note.Body
    }
    
    // 'visible' attribute on TextInput (id=Confidential_Input) at NotesSearchScreen.pcf: line 171, column 48
    function visible_85 () : java.lang.Boolean {
      return Note.Confidential
    }
    
    // 'visible' attribute on TextInput (id=Subject_Input) at NotesSearchScreen.pcf: line 186, column 51
    function visible_89 () : java.lang.Boolean {
      return Note.Subject != null
    }
    
    property get Note () : entity.Note {
      return getIteratedValue(2) as entity.Note
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/notes/NotesSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NotesSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=NotesSearchScreen_NewNote) at NotesSearchScreen.pcf: line 19, column 88
    function action_1 () : void {
      NewNoteWorksheet.goInWorkspace(Claim)
    }
    
    // 'action' attribute on ToolbarButton (id=NotesSearchScreen_NewNote) at NotesSearchScreen.pcf: line 19, column 88
    function action_dest_2 () : pcf.api.Destination {
      return pcf.NewNoteWorksheet.createDestination(Claim)
    }
    
    // 'visible' attribute on ToolbarButton (id=NotesSearchScreen_NewNote) at NotesSearchScreen.pcf: line 19, column 88
    function visible_0 () : java.lang.Boolean {
      return Claim != null and Activity == null and perm.Claim.createnote(Claim)
    }
    
    property get Activity () : Activity {
      return getRequireValue("Activity", 0) as Activity
    }
    
    property set Activity ($arg :  Activity) {
      setRequireValue("Activity", 0, $arg)
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    function createSearchCriteria() : NoteSearchCriteria {
            var searchCriteria = new NoteSearchCriteria();
            searchCriteria.Claim = Claim;
            //Default criteria values
            searchCriteria.SortBy = SortByRange.TC_DATE
            searchCriteria.RelatedTo = Claim
            return searchCriteria;
          }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/notes/NotesSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends NotesSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateSearch2_Input) at NotesSearchScreen.pcf: line 70, column 61
    function available_27 () : java.lang.Boolean {
      return NoteSearchCriteria.DateCriterionChoice.DateSearchType == DateSearchType.TC_FROMLIST
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateSearch2_Input) at NotesSearchScreen.pcf: line 70, column 61
    function available_36 () : java.lang.Boolean {
      return NoteSearchCriteria.DateCriterionChoice.DateSearchType == DateSearchType.TC_ENTEREDRANGE
    }
    
    // 'def' attribute on InputSetRef at NotesSearchScreen.pcf: line 98, column 45
    function def_onEnter_69 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at NotesSearchScreen.pcf: line 98, column 45
    function def_refreshVariables_70 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on RangeInput (id=RelatedToSearch_Input) at NotesSearchScreen.pcf: line 56, column 54
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      NoteSearchCriteria.RelatedTo = (__VALUE_TO_SET as gw.pl.persistence.core.Bean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Topic_Input) at NotesSearchScreen.pcf: line 63, column 48
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      NoteSearchCriteria.Topic = (__VALUE_TO_SET as typekey.NoteTopicType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch2_Input) at NotesSearchScreen.pcf: line 70, column 61
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      NoteSearchCriteria.DateCriterionChoice.DateRangeChoice = (__VALUE_TO_SET as typekey.DateRangeChoiceType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch2_Input) at NotesSearchScreen.pcf: line 70, column 61
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      NoteSearchCriteria.DateCriterionChoice.DateSearchType = (__VALUE_TO_SET as typekey.DateSearchType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch2_Input) at NotesSearchScreen.pcf: line 70, column 61
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      NoteSearchCriteria.DateCriterionChoice.StartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=TextSearch_Input) at NotesSearchScreen.pcf: line 37, column 46
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      NoteSearchCriteria.Text = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch2_Input) at NotesSearchScreen.pcf: line 70, column 61
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      NoteSearchCriteria.DateCriterionChoice.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch2_Input) at NotesSearchScreen.pcf: line 70, column 61
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      NoteSearchCriteria.DateCriterionChoice = (__VALUE_TO_SET as entity.DateCriterionChoice)
    }
    
    // 'value' attribute on TypeKeyInput (id=Language_Input) at NotesSearchScreen.pcf: line 78, column 71
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      NoteSearchCriteria.Language = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on TypeKeyInput (id=SortByOption_Input) at NotesSearchScreen.pcf: line 87, column 46
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      NoteSearchCriteria.SortBy = (__VALUE_TO_SET as typekey.SortByRange)
    }
    
    // 'value' attribute on BooleanRadioInput (id=SortAscending_Input) at NotesSearchScreen.pcf: line 94, column 55
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      NoteSearchCriteria.SortAscending = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Author_Input) at NotesSearchScreen.pcf: line 45, column 38
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      NoteSearchCriteria.Author = (__VALUE_TO_SET as entity.User)
    }
    
    // 'maxSearchResults' attribute on SearchPanel at NotesSearchScreen.pcf: line 29, column 72
    function maxSearchResults_98 () : java.lang.Object {
      return gw.api.search.MaxSearchResults.forNotes()
    }
    
    // 'optionGroupLabel' attribute on RangeInput (id=RelatedToSearch_Input) at NotesSearchScreen.pcf: line 56, column 54
    function optionGroupLabel_17 (VALUE :  gw.pl.persistence.core.Bean) : java.lang.String {
      return gw.pcf.RelatedToUtil.getOptionGroupLabel(VALUE as KeyableBean)
    }
    
    // 'optionLabel' attribute on RangeInput (id=RelatedToSearch_Input) at NotesSearchScreen.pcf: line 56, column 54
    function optionLabel_18 (VALUE :  gw.pl.persistence.core.Bean) : java.lang.String {
      return gw.pcf.RelatedToUtil.getOptionLabel(VALUE as KeyableBean)
    }
    
    // 'searchCriteria' attribute on SearchPanel at NotesSearchScreen.pcf: line 29, column 72
    function searchCriteria_100 () : entity.NoteSearchCriteria {
      return createSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at NotesSearchScreen.pcf: line 29, column 72
    function search_99 () : java.lang.Object {
      NoteSearchCriteria.Activity = Activity; return NoteSearchCriteria.performSearch(Claim) as gw.api.database.IQueryBeanResult<Note>
    }
    
    // 'valueRange' attribute on RangeInput (id=Author_Input) at NotesSearchScreen.pcf: line 45, column 38
    function valueRange_10 () : java.lang.Object {
      return Claim.ViewableNoteAuthors
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedToSearch_Input) at NotesSearchScreen.pcf: line 56, column 54
    function valueRange_19 () : java.lang.Object {
      return Claim.RelatedToCandidates
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch2_Input) at NotesSearchScreen.pcf: line 70, column 61
    function valueRoot_30 () : java.lang.Object {
      return NoteSearchCriteria.DateCriterionChoice
    }
    
    // 'value' attribute on TextInput (id=TextSearch_Input) at NotesSearchScreen.pcf: line 37, column 46
    function valueRoot_5 () : java.lang.Object {
      return NoteSearchCriteria
    }
    
    // 'value' attribute on RangeInput (id=RelatedToSearch_Input) at NotesSearchScreen.pcf: line 56, column 54
    function value_14 () : gw.pl.persistence.core.Bean {
      return NoteSearchCriteria.RelatedTo
    }
    
    // 'value' attribute on TypeKeyInput (id=Topic_Input) at NotesSearchScreen.pcf: line 63, column 48
    function value_23 () : typekey.NoteTopicType {
      return NoteSearchCriteria.Topic
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch2_Input) at NotesSearchScreen.pcf: line 70, column 61
    function value_28 () : typekey.DateRangeChoiceType {
      return NoteSearchCriteria.DateCriterionChoice.DateRangeChoice
    }
    
    // 'value' attribute on TextInput (id=TextSearch_Input) at NotesSearchScreen.pcf: line 37, column 46
    function value_3 () : java.lang.String {
      return NoteSearchCriteria.Text
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch2_Input) at NotesSearchScreen.pcf: line 70, column 61
    function value_32 () : java.lang.Object {
      return NoteSearchCriteria.DateCriterionChoice.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch2_Input) at NotesSearchScreen.pcf: line 70, column 61
    function value_33 () : typekey.DateSearchType {
      return NoteSearchCriteria.DateCriterionChoice.DateSearchType
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch2_Input) at NotesSearchScreen.pcf: line 70, column 61
    function value_37 () : java.util.Date {
      return NoteSearchCriteria.DateCriterionChoice.StartDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch2_Input) at NotesSearchScreen.pcf: line 70, column 61
    function value_43 () : java.util.Date {
      return NoteSearchCriteria.DateCriterionChoice.EndDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch2_Input) at NotesSearchScreen.pcf: line 70, column 61
    function value_51 () : entity.DateCriterionChoice {
      return NoteSearchCriteria.DateCriterionChoice
    }
    
    // 'value' attribute on TypeKeyInput (id=Language_Input) at NotesSearchScreen.pcf: line 78, column 71
    function value_56 () : typekey.LanguageType {
      return NoteSearchCriteria.Language
    }
    
    // 'value' attribute on TypeKeyInput (id=SortByOption_Input) at NotesSearchScreen.pcf: line 87, column 46
    function value_61 () : typekey.SortByRange {
      return NoteSearchCriteria.SortBy
    }
    
    // 'value' attribute on BooleanRadioInput (id=SortAscending_Input) at NotesSearchScreen.pcf: line 94, column 55
    function value_65 () : java.lang.Boolean {
      return NoteSearchCriteria.SortAscending
    }
    
    // 'value' attribute on RangeInput (id=Author_Input) at NotesSearchScreen.pcf: line 45, column 38
    function value_7 () : entity.User {
      return NoteSearchCriteria.Author
    }
    
    // 'value' attribute on RowIterator at NotesSearchScreen.pcf: line 112, column 77
    function value_97 () : gw.api.database.IQueryBeanResult<entity.Note> {
      return NotesList
    }
    
    // 'valueRange' attribute on RangeInput (id=Author_Input) at NotesSearchScreen.pcf: line 45, column 38
    function verifyValueRangeIsAllowedType_11 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Author_Input) at NotesSearchScreen.pcf: line 45, column 38
    function verifyValueRangeIsAllowedType_11 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Author_Input) at NotesSearchScreen.pcf: line 45, column 38
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedToSearch_Input) at NotesSearchScreen.pcf: line 56, column 54
    function verifyValueRangeIsAllowedType_20 ($$arg :  gw.pl.persistence.core.Bean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedToSearch_Input) at NotesSearchScreen.pcf: line 56, column 54
    function verifyValueRangeIsAllowedType_20 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Author_Input) at NotesSearchScreen.pcf: line 45, column 38
    function verifyValueRange_12 () : void {
      var __valueRangeArg = Claim.ViewableNoteAuthors
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedToSearch_Input) at NotesSearchScreen.pcf: line 56, column 54
    function verifyValueRange_21 () : void {
      var __valueRangeArg = Claim.RelatedToCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_20(__valueRangeArg)
    }
    
    // 'visible' attribute on TypeKeyInput (id=Language_Input) at NotesSearchScreen.pcf: line 78, column 71
    function visible_55 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    property get NoteSearchCriteria () : entity.NoteSearchCriteria {
      return getCriteriaValue(1) as entity.NoteSearchCriteria
    }
    
    property set NoteSearchCriteria ($arg :  entity.NoteSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get NotesList () : gw.api.database.IQueryBeanResult<Note> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<Note>
    }
    
    
  }
  
  
}