package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface EffDatedBase extends com.guidewire.ab.external.entity.Editable, com.guidewire.ab.external.entity.Extractable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


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
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Check if this bean or branch has been promoted. A promoted bean is also
locked and cannot be changed.
<p/>
An EffDated is never promoted independent of its related
EffDatedBranch, meaning if the branch is promoted every bean in the graph
will be promoted, and if the branch is not promoted no bean in the graph
can be promoted.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Promoted")
  public boolean isPromoted();


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
   * Whether this bean is sliced. If a bean is sliced then you can navigate from
this bean to another bean or beans via a link or array, if it's unsliced
(in "window" mode) you cannot navigate from this bean.
<p/>
In most cases a bean will be sliced, window mode is used in special cases.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Slice")
  public boolean isSlice();


  /**
   * Date which this bean is "sliced" or viewed. If you traverse from this bean
to another bean or beans via a link or array, only beans that are effective
at this slice date will be returned. The beans that are returned will be
sliced at this date as well. If NULL then the bean is in "window" mode.
<p/>
In most cases a bean will be sliced, window mode is used in special cases.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SliceDate")
  public java.util.Date getSliceDate();


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
   * Slice this bean at a particular date. This bean can be unsliced or sliced
when this method is called. The slice date must be within the effective
range of this bean or an exception will be thrown. If you want to get at
the version of this "logical" bean at a date outside of this particular
bean's effective range then use this.getVersionList().getVersionAsOf(sliceDate).getSliceUntyped(sliceDate).
   *
   * @return Sliced version of the bean.
   * @param sliceDate Date at which to slice this bean.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getSliceUntyped")
  public com.guidewire.ab.external.entity.EffDatedBase getSliceUntyped(java.util.Date sliceDate);


  /**
   * Utility class for initializing an instance of EffDatedBase
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity EffDatedBase.
     */
    public static EffDatedBase newInstance()
    {
      return (EffDatedBase) gw.pl.external.entity.EntityFactory.getInstance().newEntity(EffDatedBase.class);
    }
  }

}
