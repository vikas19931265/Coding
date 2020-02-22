package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface EffDatedBranch extends com.guidewire.ab.external.entity.EffDatedBase, com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * Returns a sorted list of distinct effective and expiration dates that
exist on EffDated beans in the branch.
<p/>
Looking at every effective and expiration date of every bean in the branch to build
this list is expensive. Call this once then cache the result if you know
that the beans won't change while you use this information.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllEffectiveDates")
  public java.util.List getAllEffectiveDates();


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Is this branch canceled?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Canceled")
  public boolean isCanceled();


  /**
   * Date this period was canceled, or null if still active
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CancellationDate")
  public java.util.Date getCancellationDate();


  /**
   * Gets the ID of the container to which this branch belongs.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContainerId")
  public gw.pl.external.entity.Key getContainerId();


  /**
   * Gets the container to which this branch belongs.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContainerUntyped")
  public com.guidewire.ab.external.entity.EffDatedContainer getContainerUntyped();


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
   * Dates edits are effective
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EditEffectiveDate")
  public java.util.Date getEditEffectiveDate();

  /**
   * Dates edits are effective
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EditEffectiveDate")
  public void setEditEffectiveDate(java.util.Date value);


  /**
   * True if when bound this branch had future bound periods
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FuturePeriods")
  public java.lang.Boolean isFuturePeriods();


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * True if this row has been locked (cannot be edited)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Locked")
  public java.lang.Boolean isLocked();


  /**
   * Date corresponding to the model number
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ModelDate")
  public java.util.Date getModelDate();


  /**
   * Modelnumber.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ModelNumber")
  public java.lang.Integer getModelNumber();


  /**
   * True if this branch is the most recent model (has the highest model number)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MostRecentModel")
  public java.lang.Boolean isMostRecentModel();


  /**
   * Returns true is this branch represents a new period that is not a new
submission.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NewPeriod")
  public boolean isNewPeriod();


  /**
   * Returns true if this branch represents a new submission.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NewSubmission")
  public boolean isNewSubmission();


  /**
   * Upper bound of all expiration dates of this root
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PeriodEnd")
  public java.util.Date getPeriodEnd();

  /**
   * Upper bound of all expiration dates of this root
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PeriodEnd")
  public void setPeriodEnd(java.util.Date value);


  /**
   * Every branch belongs to a period, identified by its PeriodId. When a new
submission or renewal is created the new branch is assigned a new PeriodId.
When a new branch is created in the same period as another branch (e.g. a
policy change) it shares the "based on" or "original" branch's PeriodId. A
period often has several branches associated with it, both promoted and in
draft, but will have only one "most recent" or "in-force" branch associated
with it. This in-force branch is the most recently promoted branch
associated with a period. The other promoted branches represent earlier
versions of the in-force branch in model-time. Often when we refer to the
"period" we're actually referring to the most recently bound branch in a
period, ignoring the other, "older" branches that are also associated with
the period.
<p/>
To find all the branches associated with a period find all branches with
the same PeriodId.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PeriodId")
  public gw.pl.external.entity.Key getPeriodId();


  /**
   * Lower bound of all effective dates of this root
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PeriodStart")
  public java.util.Date getPeriodStart();

  /**
   * Lower bound of all effective dates of this root
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PeriodStart")
  public void setPeriodStart(java.util.Date value);


  /**
   * True if when bound this branch has been preempted
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Preempted")
  public java.lang.Boolean isPreempted();


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
   * When a branch is promoted and there exists a future bound period (or
periods, but multiple would be rare) then this method returns true until it
is cleared.
<p/>
This value can then be checked later to see if you want to apply the
changes on this branch to that future period. Once it's cleared you will no
longer have that option.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ResolveWithFuturePeriods")
  public boolean isResolveWithFuturePeriods();


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
   * Clear notification that a future bound period existed when this branch was
promoted.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clearResolveWithFuturePeriods")
  public void clearResolveWithFuturePeriods();

  /**
   * Returns the periods that overlap this period using the given period start
and end dates.
   *
   * @return List of bound periods that overlap
   * @param periodStart Date to use for period start (ignored the current
                         period start of this branch)
   * @param periodEndOrCancel Date to use for period end (ignored the current
                         period end of this branch)
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getOverlappingBoundPeriods")
  public java.util.List getOverlappingBoundPeriods(java.util.Date periodStart, java.util.Date periodEndOrCancel);

  /**
   * Check if there would be a gap after his period using the given period start
and end dates and the existing bound periods.
   *
   * @return True if a gap exists between this period and the period after it
   * @param periodStart Date to use for period start (ignored the current period
                   start of this branch)
   * @param periodEnd Date to use for period end (ignored the current period
                   end of this branch)
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasGapAfter")
  public boolean hasGapAfter(java.util.Date periodStart, java.util.Date periodEnd);

  /**
   * Check if there would be a gap before his period using the given period
start and end dates and the existing bound periods.
   *
   * @return True if a gap exists between this period and the period before it
   * @param periodStart Date to use for period start (ignored the current period
                   start of this branch)
   * @param periodEnd Date to use for period end (ignored the current period
                   end of this branch)
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasGapBefore")
  public boolean hasGapBefore(java.util.Date periodStart, java.util.Date periodEnd);

  /**
   * Checks if there would be an overlap between the existing bound periods and
this period using the given period start and end dates.
   *
   * @return True if an overlap would exist
   * @param periodStart Date to use for period start (ignored the current period
                   start of this branch)
   * @param periodEnd Date to use for period end (ignored the current period
                   end of this branch)
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isOverlappingBoundPeriods")
  public boolean isOverlappingBoundPeriods(java.util.Date periodStart, java.util.Date periodEnd);

  /**
   * Set the date at which edits to this branch are effective. By default a
branch will always be "sliced" at this date. Changes made at this date to
this branch or to any beans in this branch's graph are considered "slice"
changes, changes made at any other effective date are "non-slice" changes.
<p/>
In the case changes were already made to the branch at effective dates
after this effective date, only changes made at this edit effective will be
considered OOS changes and can be potentially propagated forward to the
future effective dates.
<p/>
It's assumed that the edit effective date doesn't change once it's set
(it's typically set when the branch is created). If it is changed then
changes made at the old edit effective date will become non-slice changes.
   *
   * @param effDate Date at which edits to this branch are effective.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setEditEffectiveDate")
  public void setEditEffectiveDate_Method(java.util.Date effDate);

  /**
   * Set the end date of this branch's period. Equivalent to calling
setPeriodWindow(getPeriodStart(), endDate).
   *
   * @param endDate New end date of this branch's period.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setPeriodEnd")
  public void setPeriodEnd_Method(java.util.Date endDate);

  /**
   * Set the start date of this branch's period. Equivalent to calling
setPeriodWindow(startDate, getPeriodEnd()).
   *
   * @param startDate New start date of this branch's period.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setPeriodStart")
  public void setPeriodStart_Method(java.util.Date startDate);

  /**
   * Set this branch's period dates. There are several restrictions to setting
the period dates:
   *
   * @param newStart New start date of this branch's period.
   * @param newEnd New end date of this branch's period.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setPeriodWindow")
  public void setPeriodWindow(java.util.Date newStart, java.util.Date newEnd);


  /**
   * Utility class for initializing an instance of EffDatedBranch
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity EffDatedBranch.
     */
    public static EffDatedBranch newInstance()
    {
      return (EffDatedBranch) gw.pl.external.entity.EntityFactory.getInstance().newEntity(EffDatedBranch.class);
    }
  }

}
