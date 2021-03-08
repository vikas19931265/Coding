package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ExposureRule.eti;ExposureRule.eix;ExposureRule.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ExposureRuleInternal extends com.guidewire._generated.entity.CCRuleInternal, com.guidewire.bizrules.domain.RuleDomainMethods, gw.bizrules.domain.RuleVersionDependent {
  /**
   * Adds the given element to the CoverageTypes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverageTypes(entity.AppCritCoverageType element);
  
  
  /**
   * Adds the given element to the IncidentTypes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIncidentTypes(entity.AppCritIncidentType element);
  
  
  /**
   * Adds the given element to the LossCauses array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLossCauses(entity.AppCritLossCause element);
  
  
  /**
   * Adds the given element to the LossPartyTypes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLossPartyTypes(entity.AppCritLossPartyType element);
  
  
  /**
   * Gets the value of the CoverageTypes field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AppCritCoverageType[] getCoverageTypes();
  
  
  /**
   * Gets the value of the IncidentTypes field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AppCritIncidentType[] getIncidentTypes();
  
  
  /**
   * Gets the value of the LossCauses field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AppCritLossCause[] getLossCauses();
  
  
  /**
   * Gets the value of the LossPartyTypes field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AppCritLossPartyType[] getLossPartyTypes();
  
  
  /**
   * Removes the given element from the CoverageTypes array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverageTypes(entity.AppCritCoverageType element);
  
  
  /**
   * Removes the given element from the CoverageTypes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverageTypes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the IncidentTypes array. This is achieved by marking the element for removal.
   */
  public void removeFromIncidentTypes(entity.AppCritIncidentType element);
  
  
  /**
   * Removes the given element from the IncidentTypes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIncidentTypes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the LossCauses array. This is achieved by marking the element for removal.
   */
  public void removeFromLossCauses(entity.AppCritLossCause element);
  
  
  /**
   * Removes the given element from the LossCauses array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLossCauses(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the LossPartyTypes array. This is achieved by marking the element for removal.
   */
  public void removeFromLossPartyTypes(entity.AppCritLossPartyType element);
  
  
  /**
   * Removes the given element from the LossPartyTypes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLossPartyTypes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CoverageTypes field.
   */
  public void setCoverageTypes(entity.AppCritCoverageType[] value);
  
  
  /**
   * Sets the value of the IncidentTypes field.
   */
  public void setIncidentTypes(entity.AppCritIncidentType[] value);
  
  
  /**
   * Sets the value of the LossCauses field.
   */
  public void setLossCauses(entity.AppCritLossCause[] value);
  
  
  /**
   * Sets the value of the LossPartyTypes field.
   */
  public void setLossPartyTypes(entity.AppCritLossPartyType[] value);
  
  
  
}