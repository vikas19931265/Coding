package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AppCritCoverageType.eti;AppCritCoverageType.eix;AppCritCoverageType.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AppCritCoverageTypeInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire._generated.entity.RuleVersionDependentInternal, gw.bizrules.domain.RuleVersionDependent {
  /**
   * Gets the value of the CoverageType field.
   * Coverage type in a rule availability criteria
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CoverageType getCoverageType();
  
  
  /**
   * Gets the value of the Rule field.
   * The associated rule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CCRule getRule();
  
  
  public gw.pl.persistence.core.Key getRuleID();
  
  
  /**
   * Sets the value of the CoverageType field.
   */
  public void setCoverageType(typekey.CoverageType value);
  
  
  /**
   * Sets the value of the Rule field.
   */
  public void setRule(entity.CCRule value);
  
  
  public void setRuleID(gw.pl.persistence.core.Key value);
  
  
  
}