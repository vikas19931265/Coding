package com.guidewire.ab.external.entity;

/**
 * 
        A component used as part of a larger search criteria entity. Encapsulates the information
        entered by the user to restrict the search to entities with a money field within a given range.
        Specifies the money field to be restricted and a range of allowable values.
        <p>
        Supports configurable search. (See the Configuration Guide for details of customizing search screens.).
      
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface FinancialCriterion extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * The high end (inclusive) of the allowable range of money values. NOTE: when inserting a FinancialCriterion this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AmountEnd")
  public java.math.BigDecimal getAmountEnd();

  /**
   * The high end (inclusive) of the allowable range of money values. NOTE: when inserting a FinancialCriterion this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AmountEnd")
  public void setAmountEnd(java.math.BigDecimal value);


  /**
   * The low end (inclusive) of the allowable range of money values. NOTE: when inserting a FinancialCriterion this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AmountStart")
  public java.math.BigDecimal getAmountStart();

  /**
   * The low end (inclusive) of the allowable range of money values. NOTE: when inserting a FinancialCriterion this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AmountStart")
  public void setAmountStart(java.math.BigDecimal value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The chosen configurable search option, specifies the money field to be restricted.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ChosenOption")
  public java.lang.String getChosenOption();

  /**
   * The chosen configurable search option, specifies the money field to be restricted.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ChosenOption")
  public void setChosenOption(java.lang.String value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * The list of options specifying which field to search. This list is populated by the
configurable search mechanism. Each option is described by a display key name, as
given in the search-config.xml file.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Options")
  public java.lang.String[] getOptions();

  /**
   * The list of options specifying which field to search. This list is populated by the
configurable search mechanism. Each option is described by a display key name, as
given in the search-config.xml file.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Options")
  public void setOptions(java.lang.String[] value);


  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PublicID")
  public java.lang.String getPublicID();

  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PublicID")
  public void setPublicID(java.lang.String value);


  /**
   * True if any of the fields in this criteria object are set. False if no fields are set, so the
criteria should not affect the search.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Set")
  public boolean isSet();


  /**
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subtype")
  public com.guidewire.ab.external.typelist.FinancialCriterion getSubtype();


  /**
   * Utility class for initializing an instance of FinancialCriterion
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity FinancialCriterion.
     */
    public static FinancialCriterion newInstance()
    {
      return (FinancialCriterion) gw.pl.external.entity.EntityFactory.getInstance().newEntity(FinancialCriterion.class);
    }
  }

}
