package com.guidewire.ab.external.entity;

/**
 * A node in the specialist services tree.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface SpecialistService extends com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * Indicates whether the service should be used for new service requests.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Active")
  public java.lang.Boolean isActive();

  /**
   * Indicates whether the service should be used for new service requests.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Active")
  public void setActive(java.lang.Boolean value);


  /**
   * The ancestor SpecialistService objects starting with the root level service and ending with
this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Ancestry")
  public java.util.List getAncestry();


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Gets the SpecialistServices with this SpecialistService as their parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Children")
  public java.util.Collection getChildren();


  /**
   * Unique string identifying this service. NOTE: when inserting a SpecialistService this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Code")
  public java.lang.String getCode();

  /**
   * Unique string identifying this service. NOTE: when inserting a SpecialistService this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Code")
  public void setCode(java.lang.String value);


  /**
   * Timestamp when the object was created
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateTime")
  public java.util.Date getCreateTime();


  /**
   * User who created the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateUser")
  public com.guidewire.ab.external.entity.User getCreateUser();


  /**
   * Description of the service.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description of the service.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description_en_US")
  public java.lang.String getDescription_en_US();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description_en_US")
  public void setDescription_en_US(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description_ja_JP")
  public java.lang.String getDescription_ja_JP();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description_ja_JP")
  public void setDescription_ja_JP(java.lang.String value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * True if this SpecialistServiceBase object is a leaf in the tree, i.e. it has no children.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Leaf")
  public boolean isLeaf();


  /**
   * Name of the service. NOTE: when inserting a SpecialistService this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * Name of the service. NOTE: when inserting a SpecialistService this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name_en_US")
  public java.lang.String getName_en_US();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name_en_US")
  public void setName_en_US(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name_ja_JP")
  public java.lang.String getName_ja_JP();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name_ja_JP")
  public void setName_ja_JP(java.lang.String value);


  /**
   * Reference to the parent SpecialistService.  Null for top level nodes, which have no parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Parent")
  public com.guidewire.ab.external.entity.SpecialistService getParent();

  /**
   * Reference to the parent SpecialistService.  Null for top level nodes, which have no parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Parent")
  public void setParent(com.guidewire.ab.external.entity.SpecialistService value);


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
   * Timestamp when the object was last updated
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateTime")
  public java.util.Date getUpdateTime();


  /**
   * User who last updated the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateUser")
  public com.guidewire.ab.external.entity.User getUpdateUser();


  /**
   * Utility class for accessing static features for SpecialistService
   * <ul>
   * <li>Access static properties for this type.</li>
* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    /**
     * Create a new proxy instance of the external type SpecialistService.
     */
    public static SpecialistService newInstance()
    {
      return null;
    }

    // Static Properties for SpecialistService

    /**
     * Gets a comparator to sort the provided list of SpecialistServices by first-level service,
then by second-level service, and so on. This defines a "standard" ordering for SpecialistServices.
Note that this is different from the natural ordering of SpecialistServices, which is based
on the bean ids.
     * 
     */
    public static java.util.Comparator getStandardComparator()
    {
      return (java.util.Comparator) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.ab.external.entity.SpecialistService.class, "StandardComparator");
    }

    // Static Methods for SpecialistService
    
    /**
     * Gets the SpecialistService with the specified code in a read-only bundle, or null if it cannot be found.
     *
     * @param code 
     * @deprecated 
     */
    public static com.guidewire.ab.external.entity.SpecialistService getForCode(java.lang.String code)
    {
      return (com.guidewire.ab.external.entity.SpecialistService) gw.pl.external.Invoker.getInstance().invokeStaticMethod(com.guidewire.ab.external.entity.SpecialistService.class, "getForCode", new Class[]{ java.lang.String.class} , new Object[]{ code});
    }

  }


  /**
   * Utility class for initializing an instance of SpecialistService
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity SpecialistService.
     */
    public static SpecialistService newInstance()
    {
      return (SpecialistService) gw.pl.external.entity.EntityFactory.getInstance().newEntity(SpecialistService.class);
    }
  }

}
