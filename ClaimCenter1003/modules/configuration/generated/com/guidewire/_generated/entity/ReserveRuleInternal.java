package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ReserveRule.eti;ReserveRule.eix;ReserveRule.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ReserveRuleInternal extends com.guidewire._generated.entity.CCRuleInternal, com.guidewire.bizrules.domain.RuleDomainMethods, gw.bizrules.domain.RuleVersionDependent {
  /**
   * Adds the given element to the ClaimSegments array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToClaimSegments(entity.AppCritClaimSegment element);
  
  
  /**
   * Adds the given element to the ExposureTypes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExposureTypes(entity.AppCritExposureType element);
  
  
  /**
   * Gets the value of the ClaimSegments field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AppCritClaimSegment[] getClaimSegments();
  
  
  /**
   * Gets the value of the ExposureTypes field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AppCritExposureType[] getExposureTypes();
  
  
  /**
   * Removes the given element from the ClaimSegments array. This is achieved by marking the element for removal.
   */
  public void removeFromClaimSegments(entity.AppCritClaimSegment element);
  
  
  /**
   * Removes the given element from the ClaimSegments array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromClaimSegments(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ExposureTypes array. This is achieved by marking the element for removal.
   */
  public void removeFromExposureTypes(entity.AppCritExposureType element);
  
  
  /**
   * Removes the given element from the ExposureTypes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExposureTypes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ClaimSegments field.
   */
  public void setClaimSegments(entity.AppCritClaimSegment[] value);
  
  
  /**
   * Sets the value of the ExposureTypes field.
   */
  public void setExposureTypes(entity.AppCritExposureType[] value);
  
  
  
}