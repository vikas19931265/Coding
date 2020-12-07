package acme.ta.batch

uses gw.plugin.processing.IProcessesPlugin
uses gw.processes.BatchProcess
uses acme.ta.batch.legalreport.FlagOverdueLegalReportsBatch
uses acme.ta.batch.doctorspeciality.FlagDoctorWithoutSpecialityBatch

class ProcessesPlugin implements IProcessesPlugin {
  construct() {
  }
  override function createBatchProcess(type : BatchProcessType, arguments : Object[]) : BatchProcess {
    switch(type) {
      case BatchProcessType.TC_FLAGOVERDUELEGALREPORTS:
          var myBatchProcess =  new FlagOverdueLegalReportsBatch()
          return myBatchProcess
      case BatchProcessType.TC_FLAGDOCTORWITHOUTSPECIALITY:
          var myBatchProcess =  new FlagDoctorWithoutSpecialityBatch()
          return myBatchProcess

      default:
        return null
    }
  }
}
















































































// CurrDev: File Reference is TA80_INTG140_BatchProcess_Lab.docx