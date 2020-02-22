package com.guidewire.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface EffDatedEntity extends com.guidewire.ab.external.entity.EffDatedBase, gw.pl.external.entity.Entity
{


  /**
   * Return the bean from which this bean was based (cloned), or null if this
bean is new to this branch. This value will never change for the life of
the bean as its set when the bean is first created, either as a bean new to
this branch (in which case it's null) or when this bean is cloned from a
bean in an existing branch when its branch is created.
<p/>
When compiling DiffItems a bean is always compared to it's based-on bean to
discover what fields on it have changed. If there is no based-on bean then
we know that this bean was new to this branch.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BasedOnUntyped")
  public com.guidewire.external.entity.EffDatedEntity getBasedOnUntyped();


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Return the branch associated with this bean. This can never be null, and
will never change. A bean will always be associated with the same branch.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BranchUntyped")
  public com.guidewire.ab.external.entity.EffDatedBranch getBranchUntyped();


  /**
   * Type of change made to this row
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ChangeType")
  public com.guidewire.ab.external.typelist.EffDatedChangeType getChangeType();


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
   * Effective date of this row.  A value of NULL in the database indicates that this row's effective date is equal to the Period Start.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EffectiveDate")
  public java.util.Date getEffectiveDate();

  /**
   * Effective date of this row.  A value of NULL in the database indicates that this row's effective date is equal to the Period Start.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EffectiveDate")
  public void setEffectiveDate(java.util.Date value);


  /**
   * Expiration date of this row.  A value of NULL in the database indicates that this row's expiration date is equal to the Period End.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExpirationDate")
  public java.util.Date getExpirationDate();

  /**
   * Expiration date of this row.  A value of NULL in the database indicates that this row's expiration date is equal to the Period End.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExpirationDate")
  public void setExpirationDate(java.util.Date value);


  /**
   * Get the logical ID for this bean, not the row ID. All row
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FixedId")
  public gw.pl.external.entity.Key getFixedId();


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


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
   * Return the unsliced version of this bean. If the bean is already unsliced
then returns itself.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UnslicedUntyped")
  public com.guidewire.external.entity.EffDatedEntity getUnslicedUntyped();


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
   * Given a date, check whether it falls within this bean's effective window.
   *
   * @return True if date is within this bean's effective window.
   * @param effDate Date to check
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isEffective")
  public boolean isEffective(java.util.Date effDate);

  /**
   * Returns true if the given field has been modified relative to the based-on
bean and false if this bean has no based-on or if the field has the same
value as for the based-on bean.  This method only works with non-array
fields.
   *
   * @return true if the field has a different value for the based-on bean,
        false otherwise
   * @param field the name of the property to check for changes, which must
             correspond to a database column (i.e. it can't be an array or
             a synthetic property)
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isFieldChangedFromBasedOn")
  public boolean isFieldChangedFromBasedOn(java.lang.String field);

  /**
   * Change when the effective date of this bean. You cannot change the
effective date when in slice mode. In window mode there are no
restrictions.
<p/>
The effective date must be non-null. It must also come on or before the
expiration date and within the period range of its branch.
   *
   * @param effDate New effective date
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setEffectiveDate")
  public void setEffectiveDate_Method(java.util.Date effDate);

  /**
   * Change the effective and expiration dates together. This can only be called
in window mode. Both dates must be non-null. The effective date must be
before or equal to the expiration date. Both dates must be within the
period range of its branch.
   *
   * @param effDate New effective date
   * @param expDate New expiration date
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setEffectiveWindow")
  public void setEffectiveWindow(java.util.Date effDate, java.util.Date expDate);

  /**
   * Change when the expiration date of this bean. You cannot change the
expiration date when in slice mode UNLESS the bean is new to its branch and
you're not setting the expiration date to the effective date (zero width).
In window mode there are no restrictions.
<p/>
The expiration date must be non-null. It must also come on or after the
effective date and within the period range of its branch.
   *
   * @param expDate New expiration date
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setExpirationDate")
  public void setExpirationDate_Method(java.util.Date expDate);

  /**
   * Split this bean at the given date. A bean can only be split in window mode.
Splitting creates a new bean (and row) with the same FixedId as this bean
which is effective from the original effective date of this bean to the
split date. We then move the effective date of this bean up to the split
date. The result is two beans: one effective from the original effective
date to the split date, the other effective from the split date to the
original expiration date. "This" bean is the later in that range, and the
bean returned from calling this method is the former in that range.
<p/>
If this bean's effective date equals the split date then no split will
occur. The split date must be within the effective range of this bean or an
exception is thrown.
   *
   * @return A new bean effective from the original effective date to the split
        date or this bean if no split occurred (see above).
   * @param splitDate Date on which to split this bean.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "splitUntyped")
  public com.guidewire.external.entity.EffDatedEntity splitUntyped(java.util.Date splitDate);


  /**
   * Utility class for initializing an instance of EffDatedEntity
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity EffDatedEntity.
     */
    public static EffDatedEntity newInstance()
    {
      return (EffDatedEntity) gw.pl.external.entity.EntityFactory.getInstance().newEntity(EffDatedEntity.class);
    }
  }

}
