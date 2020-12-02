package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RecoveryReserve.eti;RecoveryReserve.eix;RecoveryReserve.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RecoveryReserveInternal extends com.guidewire._generated.entity.TransactionInternal, com.guidewire._generated.entity.EventAwareInternal, gw.cc.financials.recovery.entity.RecoveryReserve {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RECOVERYRESERVEADDED_EVENT = "RecoveryReserveAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RECOVERYRESERVECHANGED_EVENT = "RecoveryReserveChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RECOVERYRESERVEREMOVED_EVENT = "RecoveryReserveRemoved";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RECOVERYRESERVESTATUSCHANGED_EVENT = "RecoveryReserveStatusChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RECOVERYRESERVESUBMITTED_EVENT = "RecoveryReserveSubmitted";
  
  /**
   * Gets the value of the RecoveryCategory field.
   * The RecoveryCategory to which this transaction is coded.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RecoveryCategory getRecoveryCategory();
  
  
  /**
   * Sets the value of the RecoveryCategory field.
   */
  public void setRecoveryCategory(typekey.RecoveryCategory value);
  
  
  
}