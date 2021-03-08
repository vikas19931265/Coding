package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.vendormanagement.servicerequeststate.ServiceRequestStateHandler
@javax.annotation.Generated("config/web/pcf/claim/servicerequests/ClaimServiceRequests.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimServiceRequestsExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/servicerequests/ClaimServiceRequests.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardViewPanelExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=SubmitInstruction) at ClaimServiceRequests.pcf: line 75, column 115
    function action_10 () : void {
      operationCallbackHelper.performServiceRequestOperation(CurrentLocation, selectedServiceRequest, TC_SUBMITINSTRUCTION, stateHandler)
    }
    
    // 'action' attribute on Link (id=AddQuote) at ClaimServiceRequests.pcf: line 354, column 165
    function action_100 () : void {
      AddReviseQuotePopup.push(selectedServiceRequest)
    }
    
    // 'action' attribute on Link (id=ReviseQuote) at ClaimServiceRequests.pcf: line 361, column 165
    function action_103 () : void {
      AddReviseQuotePopup.push(selectedServiceRequest, selectedServiceRequest.LatestQuote)
    }
    
    // 'action' attribute on ToolbarButton (id=Cancel) at ClaimServiceRequests.pcf: line 82, column 118
    function action_12 () : void {
      OperationReasonPromptPopup.push(selectedServiceRequest, TC_CANCELSERVICEREQUEST)
    }
    
    // 'action' attribute on ToolbarButton (id=AssignService) at ClaimServiceRequests.pcf: line 86, column 88
    function action_14 () : void {
      AssignServiceRequestPopup.push(new gw.api.vendormanagement.ServiceRequestAssignmentPopup({selectedServiceRequest}))
    }
    
    // 'action' attribute on PickerMenuItem (id=LinkAndSend) at ClaimServiceRequests.pcf: line 517, column 53
    function action_148 () : void {
      PickExistingDocumentPopup.push(selectedServiceRequest.Claim)
    }
    
    // 'action' attribute on MenuItem (id=AttachAndSendDocument) at ClaimServiceRequests.pcf: line 522, column 104
    function action_152 () : void {
      AttachDocumentsPopup.push(selectedServiceRequest, true)
    }
    
    // 'action' attribute on PickerMenuItem (id=Link) at ClaimServiceRequests.pcf: line 534, column 53
    function action_156 () : void {
      PickExistingDocumentPopup.push(selectedServiceRequest.Claim)
    }
    
    // 'action' attribute on MenuItem (id=AttachDocument) at ClaimServiceRequests.pcf: line 539, column 97
    function action_160 () : void {
      AttachDocumentsPopup.push(selectedServiceRequest, false)
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshAsyncContent) at ClaimServiceRequests.pcf: line 547, column 151
    function action_164 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=AddNote) at ClaimServiceRequests.pcf: line 560, column 99
    function action_168 () : void {
      NewNotePopup.push(selectedServiceRequest.Claim, selectedServiceRequest)
    }
    
    // 'action' attribute on ToolbarButton (id=CreateNewService) at ClaimServiceRequests.pcf: line 93, column 75
    function action_18 () : void {
      confirmCanPromoteQuote(selectedServiceRequest); PromoteQuoteOnly.go(selectedServiceRequest)
    }
    
    // 'action' attribute on MenuItem (id=SpecialistResumedWork) at ClaimServiceRequests.pcf: line 106, column 121
    function action_20 () : void {
      operationCallbackHelper.performServiceRequestOperation(CurrentLocation, selectedServiceRequest, TC_SPECIALISTRESUMEDWORK, stateHandler)
    }
    
    // 'action' attribute on MenuItem (id=SpecialistWaiting) at ClaimServiceRequests.pcf: line 113, column 117
    function action_22 () : void {
      OperationReasonPromptPopup.push(selectedServiceRequest, TC_SPECIALISTWAITING)
    }
    
    // 'action' attribute on ToolbarButton (id=SendMessage) at ClaimServiceRequests.pcf: line 695, column 95
    function action_224 () : void {
      ServiceRequestMessagePopup.push(selectedServiceRequest)
    }
    
    // 'action' attribute on MenuItem (id=SpecialistAcceptedWork) at ClaimServiceRequests.pcf: line 120, column 122
    function action_25 () : void {
      AcceptedWorkPopup.push(selectedServiceRequest)
    }
    
    // 'action' attribute on MenuItem (id=SpecialistCompletedWork) at ClaimServiceRequests.pcf: line 127, column 123
    function action_28 () : void {
      operationCallbackHelper.performServiceRequestOperation(CurrentLocation, selectedServiceRequest, TC_SPECIALISTCOMPLETEDWORK, stateHandler)
    }
    
    // 'action' attribute on MenuItem (id=SpecialistDeclined) at ClaimServiceRequests.pcf: line 134, column 118
    function action_30 () : void {
      OperationReasonPromptPopup.push(selectedServiceRequest, TC_SPECIALISTDECLINED)
    }
    
    // 'action' attribute on MenuItem (id=SpecialistCanceled) at ClaimServiceRequests.pcf: line 141, column 118
    function action_33 () : void {
      OperationReasonPromptPopup.push(selectedServiceRequest, TC_SPECIALISTCANCELED)
    }
    
    // 'action' attribute on MenuItem (id=AddDelay) at ClaimServiceRequests.pcf: line 148, column 181
    function action_36 () : void {
      AddDelayPopup.push(selectedServiceRequest)
    }
    
    // 'action' attribute on MenuItem (id=UpdateReferenceNumber) at ClaimServiceRequests.pcf: line 154, column 49
    function action_38 () : void {
      EditReferenceNumberPopup.push(selectedServiceRequest)
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshAsyncContent) at ClaimServiceRequests.pcf: line 162, column 163
    function action_42 () : void {
      
    }
    
    // 'action' attribute on Link (id=ApproveQuote) at ClaimServiceRequests.pcf: line 339, column 122
    function action_94 () : void {
      ApproveQuotePopup.push(selectedServiceRequest)
    }
    
    // 'action' attribute on Link (id=RequestRequote) at ClaimServiceRequests.pcf: line 347, column 124
    function action_97 () : void {
      RequestRequotePopup.push(selectedServiceRequest)
    }
    
    // 'action' attribute on Link (id=AddQuote) at ClaimServiceRequests.pcf: line 354, column 165
    function action_dest_101 () : pcf.api.Destination {
      return pcf.AddReviseQuotePopup.createDestination(selectedServiceRequest)
    }
    
    // 'action' attribute on Link (id=ReviseQuote) at ClaimServiceRequests.pcf: line 361, column 165
    function action_dest_104 () : pcf.api.Destination {
      return pcf.AddReviseQuotePopup.createDestination(selectedServiceRequest, selectedServiceRequest.LatestQuote)
    }
    
    // 'action' attribute on ToolbarButton (id=Cancel) at ClaimServiceRequests.pcf: line 82, column 118
    function action_dest_13 () : pcf.api.Destination {
      return pcf.OperationReasonPromptPopup.createDestination(selectedServiceRequest, TC_CANCELSERVICEREQUEST)
    }
    
    // 'action' attribute on PickerMenuItem (id=LinkAndSend) at ClaimServiceRequests.pcf: line 517, column 53
    function action_dest_149 () : pcf.api.Destination {
      return pcf.PickExistingDocumentPopup.createDestination(selectedServiceRequest.Claim)
    }
    
    // 'action' attribute on ToolbarButton (id=AssignService) at ClaimServiceRequests.pcf: line 86, column 88
    function action_dest_15 () : pcf.api.Destination {
      return pcf.AssignServiceRequestPopup.createDestination(new gw.api.vendormanagement.ServiceRequestAssignmentPopup({selectedServiceRequest}))
    }
    
    // 'action' attribute on MenuItem (id=AttachAndSendDocument) at ClaimServiceRequests.pcf: line 522, column 104
    function action_dest_153 () : pcf.api.Destination {
      return pcf.AttachDocumentsPopup.createDestination(selectedServiceRequest, true)
    }
    
    // 'action' attribute on PickerMenuItem (id=Link) at ClaimServiceRequests.pcf: line 534, column 53
    function action_dest_157 () : pcf.api.Destination {
      return pcf.PickExistingDocumentPopup.createDestination(selectedServiceRequest.Claim)
    }
    
    // 'action' attribute on MenuItem (id=AttachDocument) at ClaimServiceRequests.pcf: line 539, column 97
    function action_dest_161 () : pcf.api.Destination {
      return pcf.AttachDocumentsPopup.createDestination(selectedServiceRequest, false)
    }
    
    // 'action' attribute on ToolbarButton (id=AddNote) at ClaimServiceRequests.pcf: line 560, column 99
    function action_dest_169 () : pcf.api.Destination {
      return pcf.NewNotePopup.createDestination(selectedServiceRequest.Claim, selectedServiceRequest)
    }
    
    // 'action' attribute on ToolbarButton (id=SendMessage) at ClaimServiceRequests.pcf: line 695, column 95
    function action_dest_225 () : pcf.api.Destination {
      return pcf.ServiceRequestMessagePopup.createDestination(selectedServiceRequest)
    }
    
    // 'action' attribute on MenuItem (id=SpecialistWaiting) at ClaimServiceRequests.pcf: line 113, column 117
    function action_dest_23 () : pcf.api.Destination {
      return pcf.OperationReasonPromptPopup.createDestination(selectedServiceRequest, TC_SPECIALISTWAITING)
    }
    
    // 'action' attribute on MenuItem (id=SpecialistAcceptedWork) at ClaimServiceRequests.pcf: line 120, column 122
    function action_dest_26 () : pcf.api.Destination {
      return pcf.AcceptedWorkPopup.createDestination(selectedServiceRequest)
    }
    
    // 'action' attribute on MenuItem (id=SpecialistDeclined) at ClaimServiceRequests.pcf: line 134, column 118
    function action_dest_31 () : pcf.api.Destination {
      return pcf.OperationReasonPromptPopup.createDestination(selectedServiceRequest, TC_SPECIALISTDECLINED)
    }
    
    // 'action' attribute on MenuItem (id=SpecialistCanceled) at ClaimServiceRequests.pcf: line 141, column 118
    function action_dest_34 () : pcf.api.Destination {
      return pcf.OperationReasonPromptPopup.createDestination(selectedServiceRequest, TC_SPECIALISTCANCELED)
    }
    
    // 'action' attribute on MenuItem (id=AddDelay) at ClaimServiceRequests.pcf: line 148, column 181
    function action_dest_37 () : pcf.api.Destination {
      return pcf.AddDelayPopup.createDestination(selectedServiceRequest)
    }
    
    // 'action' attribute on MenuItem (id=UpdateReferenceNumber) at ClaimServiceRequests.pcf: line 154, column 49
    function action_dest_39 () : pcf.api.Destination {
      return pcf.EditReferenceNumberPopup.createDestination(selectedServiceRequest)
    }
    
    // 'action' attribute on Link (id=ApproveQuote) at ClaimServiceRequests.pcf: line 339, column 122
    function action_dest_95 () : pcf.api.Destination {
      return pcf.ApproveQuotePopup.createDestination(selectedServiceRequest)
    }
    
    // 'action' attribute on Link (id=RequestRequote) at ClaimServiceRequests.pcf: line 347, column 124
    function action_dest_98 () : pcf.api.Destination {
      return pcf.RequestRequotePopup.createDestination(selectedServiceRequest)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AssignButton) at ClaimServiceRequests.pcf: line 466, column 33
    function allCheckedRowsAction_135 (CheckedValues :  entity.Activity[], CheckedValuesErrors :  java.util.Map) : void {
      pushAssignmentPopup(CheckedValues)
    }
    
    // 'available' attribute on PickerMenuItem (id=LinkAndSend) at ClaimServiceRequests.pcf: line 517, column 53
    function available_146 () : java.lang.Boolean {
      return documentsActionsHelper.DocumentMetadataActionsAvailable
    }
    
    // 'available' attribute on MenuItem (id=AttachAndSendDocument) at ClaimServiceRequests.pcf: line 522, column 104
    function available_151 () : java.lang.Boolean {
      return documentsActionsHelper.DocumentMetadataActionsAvailable and documentsActionsHelper.DocumentContentActionsAvailable
    }
    
    // 'available' attribute on ToolbarButton (id=RefreshAsyncContent) at ClaimServiceRequests.pcf: line 162, column 163
    function available_40 () : java.lang.Boolean {
      return documentsActionsHelper.DocumentContentServerAvailable
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=SkipButton) at ClaimServiceRequests.pcf: line 473, column 33
    function checkedRowAction_136 (element :  entity.Activity, CheckedValue :  entity.Activity) : void {
      CheckedValue.skip()
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=CompleteButton) at ClaimServiceRequests.pcf: line 480, column 33
    function checkedRowAction_137 (element :  entity.Activity, CheckedValue :  entity.Activity) : void {
      CheckedValue.complete()
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=ApproveButton) at ClaimServiceRequests.pcf: line 488, column 33
    function checkedRowAction_138 (element :  entity.Activity, CheckedValue :  entity.Activity) : void {
      CheckedValue.approve()
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=RejectButton) at ClaimServiceRequests.pcf: line 495, column 33
    function checkedRowAction_139 (element :  entity.Activity, CheckedValue :  entity.Activity) : void {
      CheckedValue.reject()
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=EditButton) at ClaimServiceRequests.pcf: line 566, column 100
    function checkedRowAction_170 (element :  entity.Note, CheckedValue :  entity.Note) : void {
      EditNotePopup.push(CheckedValue, true, false)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=DeleteButton) at ClaimServiceRequests.pcf: line 573, column 73
    function checkedRowAction_172 (element :  entity.Note, CheckedValue :  entity.Note) : void {
      gw.api.note.NotesUtilBase.deleteNote(CheckedValue)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=PrintButton) at ClaimServiceRequests.pcf: line 580, column 72
    function checkedRowAction_173 (element :  entity.Note, CheckedValue :  entity.Note) : void {
      gw.api.print.PrintNoteAction.printNote(CheckedValue)
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 369, column 49
    function def_onEnter_106 (def :  pcf.StatementDV_invoice) : void {
      def.onEnter(selectedServiceRequest.LatestQuote, null, false)
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 369, column 49
    function def_onEnter_108 (def :  pcf.StatementDV_quote) : void {
      def.onEnter(selectedServiceRequest.LatestQuote, null, false)
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 369, column 49
    function def_onEnter_110 (def :  pcf.StatementDV_quoterevision) : void {
      def.onEnter(selectedServiceRequest.LatestQuote, null, false)
    }
    
    // 'def' attribute on ListViewInput at ClaimServiceRequests.pcf: line 377, column 80
    function def_onEnter_113 (def :  pcf.StatementDocumentsLV) : void {
      def.onEnter(selectedServiceRequest.LatestQuote, false)
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 449, column 69
    function def_onEnter_133 (def :  pcf.ServiceRequestHistoryLV) : void {
      def.onEnter(selectedServiceRequest)
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 457, column 168
    function def_onEnter_141 (def :  pcf.ServiceRequestActivityLV) : void {
      def.onEnter(gw.api.database.Query.make(entity.Activity).compare("ServiceRequest", Equals, selectedServiceRequest).select())
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 503, column 46
    function def_onEnter_144 (def :  pcf.DocumentAlertPanelSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 505, column 71
    function def_onEnter_166 (def :  pcf.ServiceRequestDocumentsLV) : void {
      def.onEnter(selectedServiceRequest)
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 555, column 83
    function def_onEnter_174 (def :  pcf.WideNotesLV) : void {
      def.onEnter(selectedServiceRequest.NotesWithPermCheck, false)
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 688, column 84
    function def_onEnter_227 (def :  pcf.ServiceRequestMessagePanelSet) : void {
      def.onEnter(selectedServiceRequest.Messages)
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 170, column 39
    function def_onEnter_44 (def :  pcf.ServiceRequestDV) : void {
      def.onEnter(selectedServiceRequest, stateHandler)
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 369, column 49
    function def_refreshVariables_107 (def :  pcf.StatementDV_invoice) : void {
      def.refreshVariables(selectedServiceRequest.LatestQuote, null, false)
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 369, column 49
    function def_refreshVariables_109 (def :  pcf.StatementDV_quote) : void {
      def.refreshVariables(selectedServiceRequest.LatestQuote, null, false)
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 369, column 49
    function def_refreshVariables_111 (def :  pcf.StatementDV_quoterevision) : void {
      def.refreshVariables(selectedServiceRequest.LatestQuote, null, false)
    }
    
    // 'def' attribute on ListViewInput at ClaimServiceRequests.pcf: line 377, column 80
    function def_refreshVariables_114 (def :  pcf.StatementDocumentsLV) : void {
      def.refreshVariables(selectedServiceRequest.LatestQuote, false)
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 449, column 69
    function def_refreshVariables_134 (def :  pcf.ServiceRequestHistoryLV) : void {
      def.refreshVariables(selectedServiceRequest)
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 457, column 168
    function def_refreshVariables_142 (def :  pcf.ServiceRequestActivityLV) : void {
      def.refreshVariables(gw.api.database.Query.make(entity.Activity).compare("ServiceRequest", Equals, selectedServiceRequest).select())
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 503, column 46
    function def_refreshVariables_145 (def :  pcf.DocumentAlertPanelSet) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 505, column 71
    function def_refreshVariables_167 (def :  pcf.ServiceRequestDocumentsLV) : void {
      def.refreshVariables(selectedServiceRequest)
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 555, column 83
    function def_refreshVariables_175 (def :  pcf.WideNotesLV) : void {
      def.refreshVariables(selectedServiceRequest.NotesWithPermCheck, false)
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 688, column 84
    function def_refreshVariables_228 (def :  pcf.ServiceRequestMessagePanelSet) : void {
      def.refreshVariables(selectedServiceRequest.Messages)
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 170, column 39
    function def_refreshVariables_45 (def :  pcf.ServiceRequestDV) : void {
      def.refreshVariables(selectedServiceRequest, stateHandler)
    }
    
    // 'iconColor' attribute on Link (id=WaitingForQuoteApprovalAlert) at ClaimServiceRequests.pcf: line 316, column 64
    function iconColor_91 () : gw.api.web.color.GWColor {
      return gw.vendormanagement.ServiceRequestStatus.ATTENTION.IconColor
    }
    
    // 'icon' attribute on Link (id=WaitingForQuoteApprovalAlert) at ClaimServiceRequests.pcf: line 316, column 64
    function icon_90 () : java.lang.String {
      return gw.vendormanagement.ServiceRequestStatus.ATTENTION.Icon
    }
    
    // 'initialValue' attribute on Variable at ClaimServiceRequests.pcf: line 59, column 88
    function initialValue_8 () : gw.vendormanagement.servicerequeststate.ServiceRequestStateHandler {
      return selectedServiceRequest?.createStateHandler()
    }
    
    // 'label' attribute on ToolbarButton (id=AssignService) at ClaimServiceRequests.pcf: line 86, column 88
    function label_16 () : java.lang.Object {
      return DisplayKey.get("Web.ServiceRequest.Assign.Title")
    }
    
    // 'label' attribute on TextInput (id=ActiveQuoteLabel_Input) at ClaimServiceRequests.pcf: line 308, column 43
    function label_88 () : java.lang.Object {
      return selectedServiceRequest.QuoteLabel
    }
    
    // 'onPick' attribute on PickerMenuItem (id=LinkAndSend) at ClaimServiceRequests.pcf: line 517, column 53
    function onPick_150 (PickedValue :  Document) : void {
      selectedServiceRequest.linkDocumentForUI(PickedValue, true)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=Link) at ClaimServiceRequests.pcf: line 534, column 53
    function onPick_158 (PickedValue :  Document) : void {
      selectedServiceRequest.linkDocumentForUI(PickedValue, false)
    }
    
    // 'selectOnEnter' attribute on Card (id=Invoices) at ClaimServiceRequests.pcf: line 588, column 76
    function selectOnEnter_223 () : java.lang.Boolean {
      return initialInvoice != null
    }
    
    // 'title' attribute on Card (id=Activities) at ClaimServiceRequests.pcf: line 455, column 82
    function title_143 () : java.lang.String {
      return DisplayKey.get("Web.ServiceRequest.ActivitiesTab")
    }
    
    // 'value' attribute on RowIterator at ClaimServiceRequests.pcf: line 402, column 44
    function value_132 () : entity.ServiceRequestMetric[] {
      return selectedServiceRequest.ServiceRequestMetrics.sortBy(\ m -> m.Subtype.Priority)
    }
    
    // 'visible' attribute on Link (id=ReviseQuote) at ClaimServiceRequests.pcf: line 361, column 165
    function visible_102 () : java.lang.Boolean {
      return selectedServiceRequest.operationAvailable(TC_ADDQUOTE, false, stateHandler) and selectedServiceRequest.LatestQuote != null
    }
    
    // 'visible' attribute on PanelRef (id=QuoteStatusToolbar) at ClaimServiceRequests.pcf: line 325, column 143
    function visible_105 () : java.lang.Boolean {
      return selectedServiceRequest.anyOperationAvailable({TC_ADDQUOTE, TC_APPROVEQUOTE, TC_REQUESTREQUOTE}, stateHandler)
    }
    
    // 'visible' attribute on ToolbarButton (id=Cancel) at ClaimServiceRequests.pcf: line 82, column 118
    function visible_11 () : java.lang.Boolean {
      return selectedServiceRequest.operationAvailable(TC_CANCELSERVICEREQUEST, false, stateHandler)
    }
    
    // 'visible' attribute on ListViewInput at ClaimServiceRequests.pcf: line 377, column 80
    function visible_112 () : java.lang.Boolean {
      return selectedServiceRequest.LatestQuote != null
    }
    
    // 'visible' attribute on PanelSet (id=QuotePanelSet) at ClaimServiceRequests.pcf: line 296, column 82
    function visible_115 () : java.lang.Boolean {
      return selectedServiceRequest?.quoteAllowed(stateHandler)
    }
    
    // 'visible' attribute on PanelDivider at ClaimServiceRequests.pcf: line 385, column 139
    function visible_116 () : java.lang.Boolean {
      return selectedServiceRequest?.invoiceAllowed(stateHandler) or selectedServiceRequest?.quoteAllowed(stateHandler)
    }
    
    // 'visible' attribute on PickerMenuItem (id=LinkAndSend) at ClaimServiceRequests.pcf: line 517, column 53
    function visible_147 () : java.lang.Boolean {
      return perm.System.viewdocs
    }
    
    // 'visible' attribute on ToolbarButton (id=RefreshAsyncContent) at ClaimServiceRequests.pcf: line 547, column 151
    function visible_163 () : java.lang.Boolean {
      return documentsActionsHelper.isShowAsynchronousRefreshAction(selectedServiceRequest.ViewableDocumentLinksAndDocuments*.Second)
    }
    
    // 'visible' attribute on ToolbarButton (id=CreateNewService) at ClaimServiceRequests.pcf: line 93, column 75
    function visible_17 () : java.lang.Boolean {
      return selectedServiceRequest.IsPromotableQuoteOnly
    }
    
    // 'visible' attribute on MenuItem (id=SpecialistResumedWork) at ClaimServiceRequests.pcf: line 106, column 121
    function visible_19 () : java.lang.Boolean {
      return selectedServiceRequest.operationAvailable(TC_SPECIALISTRESUMEDWORK, false, stateHandler)
    }
    
    // 'visible' attribute on MenuItem (id=SpecialistWaiting) at ClaimServiceRequests.pcf: line 113, column 117
    function visible_21 () : java.lang.Boolean {
      return selectedServiceRequest.operationAvailable(TC_SPECIALISTWAITING, false, stateHandler)
    }
    
    // 'visible' attribute on Card (id=Messages) at ClaimServiceRequests.pcf: line 686, column 174
    function visible_229 () : java.lang.Boolean {
      return selectedServiceRequest.Progress != ServiceRequestProgress.TC_DRAFT and selectedServiceRequest.SpecialistCommMethod == SpecialistCommMethod.TC_GWPORTAL
    }
    
    // 'visible' attribute on MenuItem (id=SpecialistAcceptedWork) at ClaimServiceRequests.pcf: line 120, column 122
    function visible_24 () : java.lang.Boolean {
      return selectedServiceRequest.operationAvailable(TC_SPECIALISTACCEPTEDWORK, false, stateHandler)
    }
    
    // 'visible' attribute on MenuItem (id=SpecialistCompletedWork) at ClaimServiceRequests.pcf: line 127, column 123
    function visible_27 () : java.lang.Boolean {
      return selectedServiceRequest.operationAvailable(TC_SPECIALISTCOMPLETEDWORK, false, stateHandler)
    }
    
    // 'visible' attribute on MenuItem (id=SpecialistDeclined) at ClaimServiceRequests.pcf: line 134, column 118
    function visible_29 () : java.lang.Boolean {
      return selectedServiceRequest.operationAvailable(TC_SPECIALISTDECLINED, false, stateHandler)
    }
    
    // 'visible' attribute on MenuItem (id=SpecialistCanceled) at ClaimServiceRequests.pcf: line 141, column 118
    function visible_32 () : java.lang.Boolean {
      return selectedServiceRequest.operationAvailable(TC_SPECIALISTCANCELED, false, stateHandler)
    }
    
    // 'visible' attribute on MenuItem (id=AddDelay) at ClaimServiceRequests.pcf: line 148, column 181
    function visible_35 () : java.lang.Boolean {
      return selectedServiceRequest.expectedQuoteCompletionDateApplies(stateHandler) or selectedServiceRequest.expectedServiceCompletionDateApplies(stateHandler)
    }
    
    // 'visible' attribute on ToolbarButton (id=RefreshAsyncContent) at ClaimServiceRequests.pcf: line 162, column 163
    function visible_41 () : java.lang.Boolean {
      return documentsActionsHelper.isShowAsynchronousRefreshAction(selectedServiceRequest.LatestQuote.ViewableDocumentLinksAndDocuments*.Second)
    }
    
    // 'visible' attribute on Toolbar (id=StateToolbar) at ClaimServiceRequests.pcf: line 68, column 70
    function visible_43 () : java.lang.Boolean {
      return not selectedServiceRequest.AlreadyPromoted
    }
    
    // 'visible' attribute on PanelDivider at ClaimServiceRequests.pcf: line 299, column 87
    function visible_87 () : java.lang.Boolean {
      return selectedServiceRequest?.invoiceAllowed(stateHandler)
    }
    
    // 'visible' attribute on ToolbarButton (id=SubmitInstruction) at ClaimServiceRequests.pcf: line 75, column 115
    function visible_9 () : java.lang.Boolean {
      return selectedServiceRequest.operationAvailable(TC_SUBMITINSTRUCTION, false, stateHandler)
    }
    
    // 'visible' attribute on ContentInput at ClaimServiceRequests.pcf: line 311, column 186
    function visible_92 () : java.lang.Boolean {
      return selectedServiceRequest.QuoteStatus == ServiceRequestQuoteStatus.TC_WAITINGFORAPPROVAL and selectedServiceRequest.actionRequiredVisible(stateHandler)
    }
    
    // 'visible' attribute on Link (id=ApproveQuote) at ClaimServiceRequests.pcf: line 339, column 122
    function visible_93 () : java.lang.Boolean {
      return selectedServiceRequest.operationAvailable(TC_APPROVEQUOTE, false, stateHandler)
    }
    
    // 'visible' attribute on Link (id=RequestRequote) at ClaimServiceRequests.pcf: line 347, column 124
    function visible_96 () : java.lang.Boolean {
      return selectedServiceRequest.operationAvailable(TC_REQUESTREQUOTE, false, stateHandler)
    }
    
    // 'visible' attribute on Link (id=AddQuote) at ClaimServiceRequests.pcf: line 354, column 165
    function visible_99 () : java.lang.Boolean {
      return selectedServiceRequest.operationAvailable(TC_ADDQUOTE, false, stateHandler) and selectedServiceRequest.LatestQuote == null
    }
    
    property get stateHandler () : gw.vendormanagement.servicerequeststate.ServiceRequestStateHandler {
      return getVariableValue("stateHandler", 2) as gw.vendormanagement.servicerequeststate.ServiceRequestStateHandler
    }
    
    property set stateHandler ($arg :  gw.vendormanagement.servicerequeststate.ServiceRequestStateHandler) {
      setVariableValue("stateHandler", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/servicerequests/ClaimServiceRequests.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimServiceRequestsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (claim :  Claim) : int {
      return 0
    }
    
    static function __constructorIndex (claim :  Claim, initialServiceRequest :  ServiceRequest) : int {
      return 1
    }
    
    static function __constructorIndex (claim :  Claim, initialServiceRequest :  ServiceRequest, initialInvoice :  ServiceRequestInvoice) : int {
      return 2
    }
    
    // 'action' attribute on ToolbarButton (id=NewServiceRequest) at ClaimServiceRequests.pcf: line 43, column 25
    function action_4 () : void {
      NewServiceRequest.go(claim)
    }
    
    // 'action' attribute on ToolbarButton (id=NewServiceRequest) at ClaimServiceRequests.pcf: line 43, column 25
    function action_dest_5 () : pcf.api.Destination {
      return pcf.NewServiceRequest.createDestination(claim)
    }
    
    // 'beforeCommit' attribute on Page (id=ClaimServiceRequests) at ClaimServiceRequests.pcf: line 11, column 85
    function beforeCommit_231 (pickedValue :  java.lang.Object) : void {
      operationCallbackHelper.BeforeCommitAction()
    }
    
    // 'canVisit' attribute on Page (id=ClaimServiceRequests) at ClaimServiceRequests.pcf: line 11, column 85
    static function canVisit_232 (claim :  Claim, initialInvoice :  ServiceRequestInvoice, initialServiceRequest :  ServiceRequest) : java.lang.Boolean {
      return perm.Claim.view(claim)
    }
    
    // 'initialValue' attribute on Variable at ClaimServiceRequests.pcf: line 24, column 30
    function initialValue_0 () : ServiceRequest {
      return null
    }
    
    // 'initialValue' attribute on Variable at ClaimServiceRequests.pcf: line 28, column 37
    function initialValue_1 () : ServiceRequestInvoice {
      return null
    }
    
    // 'initialValue' attribute on Variable at ClaimServiceRequests.pcf: line 32, column 73
    function initialValue_2 () : gw.vendormanagement.ServiceRequestOperationCallbackHelper {
      return new gw.vendormanagement.ServiceRequestOperationCallbackHelper()
    }
    
    // 'initialValue' attribute on Variable at ClaimServiceRequests.pcf: line 36, column 52
    function initialValue_3 () : gw.document.DocumentsActionsUIHelper {
      return new gw.document.DocumentsActionsUIHelper()
    }
    
    // 'parent' attribute on Page (id=ClaimServiceRequests) at ClaimServiceRequests.pcf: line 11, column 85
    static function parent_233 (claim :  Claim, initialInvoice :  ServiceRequestInvoice, initialServiceRequest :  ServiceRequest) : pcf.api.Destination {
      return pcf.Claim.createDestination(claim)
    }
    
    override property get CurrentLocation () : pcf.ClaimServiceRequests {
      return super.CurrentLocation as pcf.ClaimServiceRequests
    }
    
    property get claim () : Claim {
      return getVariableValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setVariableValue("claim", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    property get initialInvoice () : ServiceRequestInvoice {
      return getVariableValue("initialInvoice", 0) as ServiceRequestInvoice
    }
    
    property set initialInvoice ($arg :  ServiceRequestInvoice) {
      setVariableValue("initialInvoice", 0, $arg)
    }
    
    property get initialServiceRequest () : ServiceRequest {
      return getVariableValue("initialServiceRequest", 0) as ServiceRequest
    }
    
    property set initialServiceRequest ($arg :  ServiceRequest) {
      setVariableValue("initialServiceRequest", 0, $arg)
    }
    
    property get operationCallbackHelper () : gw.vendormanagement.ServiceRequestOperationCallbackHelper {
      return getVariableValue("operationCallbackHelper", 0) as gw.vendormanagement.ServiceRequestOperationCallbackHelper
    }
    
    property set operationCallbackHelper ($arg :  gw.vendormanagement.ServiceRequestOperationCallbackHelper) {
      setVariableValue("operationCallbackHelper", 0, $arg)
    }
    
    
    
    function pushAssignmentPopup(Activities : Activity[]){
      var popup = new gw.api.activity.ActivityAssignmentPopup(Activities);
      AssignActivitiesPopup.push(popup)
    }
    
    // does some checking for various states before attempting to enter the promote quote popup
    function confirmCanPromoteQuote(serviceRequest : ServiceRequest) {
      for (docLink in serviceRequest.DocumentLinks){
        if (docLink.LinkedDocument == null) {
          throw new gw.api.util.DisplayableException(DisplayKey.get("Web.ServiceRequest.CannotPromoteQuote"))
        }
      }
    }
    
    function doKindAndMetricSubtypeMatch(selectedServiceRequest : ServiceRequest, subType : typekey.ServiceRequestMetric) : boolean {
      if (selectedServiceRequest.Kind == TC_QUOTEONLY and (subType == typekey.ServiceRequestMetric.TC_SERVICETIMELINESSSERVICEREQUESTMETRIC or subType == typekey.ServiceRequestMetric.TC_INVOICEVARIANCEVSQUOTESERVICEREQUESTMETRIC)) {
        return false
      }
      if (selectedServiceRequest.Kind == TC_SERVICEONLY and (subType == typekey.ServiceRequestMetric.TC_QUOTETIMELINESSSERVICEREQUESTMETRIC or subType == typekey.ServiceRequestMetric.TC_INVOICEVARIANCEVSQUOTESERVICEREQUESTMETRIC)) {
        return false
      }
      return true
    }
    
    function isInvoiceWarningMessageVisible(selectedServiceRequest: ServiceRequest, sh : ServiceRequestStateHandler): boolean {
      return selectedServiceRequest.Invoices.HasElements and 
              selectedServiceRequest.quoteAllowed(sh) and 
              selectedServiceRequest.IsActive
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/servicerequests/ClaimServiceRequests.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanelExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=AddInvoice) at ClaimServiceRequests.pcf: line 246, column 116
    function action_61 () : void {
      NewInvoice.go(selectedServiceRequest)
    }
    
    // 'action' attribute on Link (id=ViewInvoices) at ClaimServiceRequests.pcf: line 255, column 76
    function action_64 () : void {
      ClaimServiceRequestForward.go(claim, selectedServiceRequest, selectedServiceRequest.Invoices.orderByDescending(\i -> i.StatementCreationTime).firstWhere( \ i -> i.ActionRequiredVisible == true))
    }
    
    // 'action' attribute on Link (id=AddInvoice) at ClaimServiceRequests.pcf: line 246, column 116
    function action_dest_62 () : pcf.api.Destination {
      return pcf.NewInvoice.createDestination(selectedServiceRequest)
    }
    
    // 'action' attribute on Link (id=ViewInvoices) at ClaimServiceRequests.pcf: line 255, column 76
    function action_dest_65 () : pcf.api.Destination {
      return pcf.ClaimServiceRequestForward.createDestination(claim, selectedServiceRequest, selectedServiceRequest.Invoices.orderByDescending(\i -> i.StatementCreationTime).firstWhere( \ i -> i.ActionRequiredVisible == true))
    }
    
    // 'iconColor' attribute on Link (id=WaitingForInvoiceAlert) at ClaimServiceRequests.pcf: line 196, column 56
    function iconColor_48 () : gw.api.web.color.GWColor {
      return gw.vendormanagement.ServiceRequestStatus.ATTENTION.IconColor
    }
    
    // 'icon' attribute on Link (id=WaitingForInvoiceAlert) at ClaimServiceRequests.pcf: line 196, column 56
    function icon_47 () : java.lang.String {
      return gw.vendormanagement.ServiceRequestStatus.ATTENTION.Icon
    }
    
    // 'initialValue' attribute on Variable at ClaimServiceRequests.pcf: line 180, column 38
    function initialValue_46 () : String {
      return selectedServiceRequest.WaitingForInvoiceAlertText
    }
    
    // 'label' attribute on Link (id=WaitingForInvoiceAlertText) at ClaimServiceRequests.pcf: line 199, column 86
    function label_49 () : java.lang.Object {
      return selectedServiceRequest.WaitingForInvoiceAlertText
    }
    
    // 'label' attribute on CurrencyInput (id=ActiveChecksAmount_Input) at ClaimServiceRequests.pcf: line 276, column 80
    function label_74 () : java.lang.Object {
      return selectedServiceRequest.ActiveChecksAmountIncludesNonExclusiveChecks ? DisplayKey.get("Web.ServiceRequest.Invoices.ActiveChecksAmountStar") : DisplayKey.get("Web.ServiceRequest.Invoices.ActiveChecksAmount")
    }
    
    // 'value' attribute on CurrencyInput (id=OutstandingInvoicesAmount_Input) at ClaimServiceRequests.pcf: line 270, column 80
    function valueRoot_70 () : java.lang.Object {
      return selectedServiceRequest
    }
    
    // 'value' attribute on CurrencyInput (id=OutstandingInvoicesAmount_Input) at ClaimServiceRequests.pcf: line 270, column 80
    function value_69 () : gw.api.financials.CurrencyAmount {
      return selectedServiceRequest.OutstandingInvoicesAmount
    }
    
    // 'value' attribute on CurrencyInput (id=ActiveChecksAmount_Input) at ClaimServiceRequests.pcf: line 276, column 80
    function value_75 () : gw.api.financials.CurrencyAmount {
      return selectedServiceRequest.ActiveChecksAmount
    }
    
    // 'value' attribute on CurrencyInput (id=TotalInvoiced_Input) at ClaimServiceRequests.pcf: line 282, column 80
    function value_81 () : gw.api.financials.CurrencyAmount {
      return selectedServiceRequest.OutstandingInvoicesAmount.add(selectedServiceRequest.ActiveChecksAmount)
    }
    
    // 'visible' attribute on ContentInput at ClaimServiceRequests.pcf: line 191, column 73
    function visible_50 () : java.lang.Boolean {
      return waitingForInvoiceAlertText.HasContent
    }
    
    // 'visible' attribute on ContentInput at ClaimServiceRequests.pcf: line 203, column 151
    function visible_53 () : java.lang.Boolean {
      return isInvoiceWarningMessageVisible(selectedServiceRequest, stateHandler) and selectedServiceRequest.LatestQuote == null
    }
    
    // 'visible' attribute on ContentInput at ClaimServiceRequests.pcf: line 215, column 241
    function visible_56 () : java.lang.Boolean {
      return isInvoiceWarningMessageVisible(selectedServiceRequest, stateHandler) and selectedServiceRequest.LatestQuote != null and selectedServiceRequest.QuoteStatus == ServiceRequestQuoteStatus.TC_WAITINGFORAPPROVAL
    }
    
    // 'visible' attribute on ContentInput at ClaimServiceRequests.pcf: line 227, column 238
    function visible_59 () : java.lang.Boolean {
      return isInvoiceWarningMessageVisible(selectedServiceRequest, stateHandler) and selectedServiceRequest.LatestQuote != null and selectedServiceRequest.QuoteStatus == ServiceRequestQuoteStatus.TC_WAITINGFORQUOTE
    }
    
    // 'visible' attribute on Link (id=AddInvoice) at ClaimServiceRequests.pcf: line 246, column 116
    function visible_60 () : java.lang.Boolean {
      return selectedServiceRequest.operationAvailable(TC_ADDINVOICE, false, stateHandler)
    }
    
    // 'visible' attribute on TextInput (id=NoInvoicesMessage_Input) at ClaimServiceRequests.pcf: line 264, column 76
    function visible_66 () : java.lang.Boolean {
      return selectedServiceRequest.Invoices.IsEmpty
    }
    
    // 'visible' attribute on CurrencyInput (id=OutstandingInvoicesAmount_Input) at ClaimServiceRequests.pcf: line 270, column 80
    function visible_68 () : java.lang.Boolean {
      return not selectedServiceRequest.Invoices.IsEmpty
    }
    
    // 'visible' attribute on TextInput (id=ActiveChecksAmountIncludesNonExclusiveChecksMessage_Input) at ClaimServiceRequests.pcf: line 290, column 104
    function visible_84 () : java.lang.Boolean {
      return selectedServiceRequest.ActiveChecksAmountIncludesNonExclusiveChecks
    }
    
    // 'visible' attribute on DetailViewPanel at ClaimServiceRequests.pcf: line 175, column 83
    function visible_86 () : java.lang.Boolean {
      return selectedServiceRequest.invoiceAllowed(stateHandler)
    }
    
    property get waitingForInvoiceAlertText () : String {
      return getVariableValue("waitingForInvoiceAlertText", 3) as String
    }
    
    property set waitingForInvoiceAlertText ($arg :  String) {
      setVariableValue("waitingForInvoiceAlertText", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/servicerequests/ClaimServiceRequests.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 4)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=ActionRequired_Cell) at ClaimServiceRequests.pcf: line 624, column 46
    function iconColor_193 () : gw.api.web.color.GWColor {
      return invoice.ActionRequiredIcon.IconColor
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=ActionRequired_Cell) at ClaimServiceRequests.pcf: line 624, column 46
    function iconLabel_191 () : java.lang.String {
      return invoice.ActionRequiredIcon.Label
    }
    
    // 'icon' attribute on BooleanRadioCell (id=ActionRequired_Cell) at ClaimServiceRequests.pcf: line 624, column 46
    function icon_192 () : java.lang.String {
      return invoice.ActionRequiredIcon.Icon
    }
    
    // 'value' attribute on TextCell (id=ReferenceNumber_Cell) at ClaimServiceRequests.pcf: line 614, column 58
    function valueRoot_189 () : java.lang.Object {
      return invoice
    }
    
    // 'value' attribute on TextCell (id=CheckNumber_Cell) at ClaimServiceRequests.pcf: line 647, column 60
    function valueRoot_206 () : java.lang.Object {
      return invoice.Check
    }
    
    // 'value' attribute on TextCell (id=ReferenceNumber_Cell) at ClaimServiceRequests.pcf: line 614, column 58
    function value_188 () : java.lang.String {
      return invoice.ReferenceNumber
    }
    
    // 'value' attribute on DateCell (id=SubmittedDate_Cell) at ClaimServiceRequests.pcf: line 630, column 64
    function value_194 () : java.util.Date {
      return invoice.StatementCreationTime
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at ClaimServiceRequests.pcf: line 634, column 49
    function value_197 () : gw.api.financials.CurrencyAmount {
      return invoice.Amount
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ClaimServiceRequests.pcf: line 639, column 74
    function value_200 () : typekey.ServiceRequestInvoiceStatus {
      return invoice.Status
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimServiceRequests.pcf: line 643, column 64
    function value_203 () : java.lang.String {
      return invoice.Description.elide(28)
    }
    
    // 'value' attribute on TextCell (id=CheckNumber_Cell) at ClaimServiceRequests.pcf: line 647, column 60
    function value_205 () : java.lang.String {
      return invoice.Check.CheckNumber
    }
    
    // 'value' attribute on CurrencyCell (id=CheckAmount_Cell) at ClaimServiceRequests.pcf: line 651, column 60
    function value_208 () : gw.api.financials.CurrencyAmount {
      return invoice.Check.GrossAmount
    }
    
    // 'value' attribute on TypeKeyCell (id=CheckStatus_Cell) at ClaimServiceRequests.pcf: line 656, column 64
    function value_211 () : typekey.TransactionStatus {
      return invoice.Check.Status
    }
    
    property get invoice () : entity.ServiceRequestInvoice {
      return getIteratedValue(4) as entity.ServiceRequestInvoice
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/servicerequests/ClaimServiceRequests.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'fontColor' attribute on TextCell (id=MetricValue_Cell) at ClaimServiceRequests.pcf: line 427, column 62
    function fontColor_122 () : java.lang.Object {
      return metric.DisplayColor
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=MetricStatus_Cell) at ClaimServiceRequests.pcf: line 414, column 54
    function iconColor_118 () : gw.api.web.color.GWColor {
      return metric.Status.IconColor
    }
    
    // 'icon' attribute on BooleanRadioCell (id=MetricStatus_Cell) at ClaimServiceRequests.pcf: line 414, column 54
    function icon_117 () : java.lang.String {
      return metric.Status.Icon
    }
    
    // 'value' attribute on TypeKeyCell (id=MetricName_Cell) at ClaimServiceRequests.pcf: line 420, column 75
    function valueRoot_120 () : java.lang.Object {
      return metric
    }
    
    // 'value' attribute on TypeKeyCell (id=MetricName_Cell) at ClaimServiceRequests.pcf: line 420, column 75
    function value_119 () : typekey.ServiceRequestMetric {
      return metric.Subtype
    }
    
    // 'value' attribute on TextCell (id=MetricValue_Cell) at ClaimServiceRequests.pcf: line 427, column 62
    function value_123 () : java.lang.String {
      return metric.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=MetricTargetValue_Cell) at ClaimServiceRequests.pcf: line 434, column 51
    function value_128 () : java.lang.String {
      return metric.DisplayTargetValue
    }
    
    // 'fontColor' attribute on TextCell (id=MetricValue_Cell) at ClaimServiceRequests.pcf: line 427, column 62
    function verifyFontColorIsAllowedType_125 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=MetricValue_Cell) at ClaimServiceRequests.pcf: line 427, column 62
    function verifyFontColorIsAllowedType_125 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=MetricValue_Cell) at ClaimServiceRequests.pcf: line 427, column 62
    function verifyFontColor_126 () : void {
      var __fontColorArg = metric.DisplayColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_125(__fontColorArg)
    }
    
    // 'visible' attribute on Row at ClaimServiceRequests.pcf: line 404, column 109
    function visible_131 () : java.lang.Boolean {
      return doKindAndMetricSubtypeMatch(selectedServiceRequest, metric.Subtype)
    }
    
    property get metric () : entity.ServiceRequestMetric {
      return getIteratedValue(3) as entity.ServiceRequestMetric
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/servicerequests/ClaimServiceRequests.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanel2ExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AddInvoice) at ClaimServiceRequests.pcf: line 600, column 110
    function action_177 () : void {
      NewInvoice.go(selectedServiceRequest)
    }
    
    // 'action' attribute on ToolbarButton (id=AddInvoice) at ClaimServiceRequests.pcf: line 600, column 110
    function action_dest_178 () : pcf.api.Destination {
      return pcf.NewInvoice.createDestination(selectedServiceRequest)
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 668, column 37
    function def_onEnter_216 (def :  pcf.InvoicePanelSet) : void {
      def.onEnter(selectedInvoice, stateHandler, operationCallbackHelper)
    }
    
    // 'def' attribute on PanelRef at ClaimServiceRequests.pcf: line 668, column 37
    function def_refreshVariables_217 (def :  pcf.InvoicePanelSet) : void {
      def.refreshVariables(selectedInvoice, stateHandler, operationCallbackHelper)
    }
    
    // 'selectionOnEnter' attribute on ListDetailPanel at ClaimServiceRequests.pcf: line 592, column 53
    function selectionOnEnter_221 () : java.lang.Object {
      return initialInvoice
    }
    
    // 'value' attribute on TextCell (id=ReferenceNumber_Cell) at ClaimServiceRequests.pcf: line 614, column 58
    function sortValue_179 (invoice :  entity.ServiceRequestInvoice) : java.lang.Object {
      return invoice.ReferenceNumber
    }
    
    // 'value' attribute on BooleanRadioCell (id=ActionRequired_Cell) at ClaimServiceRequests.pcf: line 624, column 46
    function sortValue_180 (invoice :  entity.ServiceRequestInvoice) : java.lang.Object {
      return true
    }
    
    // 'value' attribute on DateCell (id=SubmittedDate_Cell) at ClaimServiceRequests.pcf: line 630, column 64
    function sortValue_181 (invoice :  entity.ServiceRequestInvoice) : java.lang.Object {
      return invoice.StatementCreationTime
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at ClaimServiceRequests.pcf: line 634, column 49
    function sortValue_182 (invoice :  entity.ServiceRequestInvoice) : java.lang.Object {
      return invoice.Amount
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ClaimServiceRequests.pcf: line 639, column 74
    function sortValue_183 (invoice :  entity.ServiceRequestInvoice) : java.lang.Object {
      return invoice.Status
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimServiceRequests.pcf: line 643, column 64
    function sortValue_184 (invoice :  entity.ServiceRequestInvoice) : java.lang.Object {
      return invoice.Description.elide(28)
    }
    
    // 'value' attribute on TextCell (id=CheckNumber_Cell) at ClaimServiceRequests.pcf: line 647, column 60
    function sortValue_185 (invoice :  entity.ServiceRequestInvoice) : java.lang.Object {
      return invoice.Check.CheckNumber
    }
    
    // 'value' attribute on CurrencyCell (id=CheckAmount_Cell) at ClaimServiceRequests.pcf: line 651, column 60
    function sortValue_186 (invoice :  entity.ServiceRequestInvoice) : java.lang.Object {
      return invoice.Check.GrossAmount
    }
    
    // 'value' attribute on TypeKeyCell (id=CheckStatus_Cell) at ClaimServiceRequests.pcf: line 656, column 64
    function sortValue_187 (invoice :  entity.ServiceRequestInvoice) : java.lang.Object {
      return invoice.Check.Status
    }
    
    // 'value' attribute on RowIterator at ClaimServiceRequests.pcf: line 609, column 64
    function value_214 () : entity.ServiceRequestInvoice[] {
      return selectedServiceRequest.Invoices
    }
    
    // 'visible' attribute on ToolbarButton (id=AddInvoice) at ClaimServiceRequests.pcf: line 600, column 110
    function visible_176 () : java.lang.Boolean {
      return selectedServiceRequest.operationAvailable(TC_ADDINVOICE, false, stateHandler)
    }
    
    // 'visible' attribute on ListViewPanel (id=ServiceRequestInvoicesLV) at ClaimServiceRequests.pcf: line 604, column 82
    function visible_215 () : java.lang.Boolean {
      return selectedServiceRequest?.invoiceAllowed(stateHandler)
    }
    
    // 'visible' attribute on Card (id=InvoiceDetails) at ClaimServiceRequests.pcf: line 665, column 130
    function visible_218 () : java.lang.Boolean {
      return selectedServiceRequest?.invoiceAllowed(stateHandler) and not selectedServiceRequest.Invoices.IsEmpty
    }
    
    // 'visible' attribute on TextInput (id=InvoiceTabNoInvoicesMessage_Input) at ClaimServiceRequests.pcf: line 678, column 72
    function visible_219 () : java.lang.Boolean {
      return selectedServiceRequest.Invoices.IsEmpty
    }
    
    property get selectedInvoice () : ServiceRequestInvoice {
      return getCurrentSelection(3) as ServiceRequestInvoice
    }
    
    property set selectedInvoice ($arg :  ServiceRequestInvoice) {
      setCurrentSelection(3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/servicerequests/ClaimServiceRequests.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends ClaimServiceRequestsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=ServiceRequestList) at ClaimServiceRequests.pcf: line 51, column 35
    function def_onEnter_6 (def :  pcf.ServiceRequestLV) : void {
      def.onEnter(claim, false, operationCallbackHelper)
    }
    
    // 'def' attribute on PanelRef (id=ServiceRequestList) at ClaimServiceRequests.pcf: line 51, column 35
    function def_refreshVariables_7 (def :  pcf.ServiceRequestLV) : void {
      def.refreshVariables(claim, false, operationCallbackHelper)
    }
    
    // 'selectionOnEnter' attribute on ListDetailPanel at ClaimServiceRequests.pcf: line 48, column 40
    function selectionOnEnter_230 () : java.lang.Object {
      return initialServiceRequest
    }
    
    property get selectedServiceRequest () : ServiceRequest {
      return getCurrentSelection(1) as ServiceRequest
    }
    
    property set selectedServiceRequest ($arg :  ServiceRequest) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}