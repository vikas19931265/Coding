package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CoveragePart.eti;CoveragePart.eix;CoveragePart.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CoveragePartInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, gw.cc.policy.entity.CoveragePart {
  /**
   * Gets the value of the CoveragePartType field.
   * CoveragePartType
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CoveragePartType getCoveragePartType();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the RiskUnit field.
   * RiskUnit associated with the coverage.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RiskUnit getRiskUnit();
  
  
  public gw.pl.persistence.core.Key getRiskUnitID();
  
  
  /**
   * Sets the value of the CoveragePartType field.
   */
  public void setCoveragePartType(typekey.CoveragePartType value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the RiskUnit field.
   */
  public void setRiskUnit(entity.RiskUnit value);
  
  
  public void setRiskUnitID(gw.pl.persistence.core.Key value);
  
  
  
}