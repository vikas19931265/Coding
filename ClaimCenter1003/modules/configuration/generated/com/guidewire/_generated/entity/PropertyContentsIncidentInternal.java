package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PropertyContentsIncident.eti;PropertyContentsIncident.eix;PropertyContentsIncident.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PropertyContentsIncidentInternal extends com.guidewire._generated.entity.MobilePropertyIncidentInternal, gw.cc.exposure.entity.ClaimantSupplier, gw.cc.exposure.entity.CoverageSupplier, gw.cc.exposure.entity.PropertyContentsIncident {
  /**
   * Adds the given element to the PropertyContentsScheduledItems array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPropertyContentsScheduledItems(entity.PropertyContentsScheduledItem element);
  
  
  /**
   * Gets the value of the PropertyContentsScheduledItems field.
   * Affected scheduled items, selected from the high value property items listed on the policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PropertyContentsScheduledItem[] getPropertyContentsScheduledItems();
  
  
  /**
   * Gets the value of the PropertyLocation field.
   * The property location for the incident.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getPropertyLocation();
  
  
  public gw.pl.persistence.core.Key getPropertyLocationID();
  
  
  /**
   * Removes the given element from the PropertyContentsScheduledItems array. This is achieved by marking the element for removal.
   */
  public void removeFromPropertyContentsScheduledItems(entity.PropertyContentsScheduledItem element);
  
  
  /**
   * Removes the given element from the PropertyContentsScheduledItems array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPropertyContentsScheduledItems(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the PropertyContentsScheduledItems field.
   */
  public void setPropertyContentsScheduledItems(entity.PropertyContentsScheduledItem[] value);
  
  
  /**
   * Sets the value of the PropertyLocation field.
   */
  public void setPropertyLocation(entity.PolicyLocation value);
  
  
  public void setPropertyLocationID(gw.pl.persistence.core.Key value);
  
  
  
}