package com.guidewire.ab.external.entity;

/**
 * 
        A delegate containing common fields used by all assignable entities. These fields track:
        <ul>
        <li>The assignment status ("Assigned", "Unassigned" and so on)
        <li>The current assignee - a queue or user and their corresponding group
        <li>The previous assignee - a queue or user and their corresponding group
        <li>The user who last assigned the entity
        <li>The time when the entity was last assigned
        </ul>
        If an entity is assigned to a queue then the assigned group will be the queue's group. If an
        entity is assigned to a user then the assigned group will be one of the user's groups. Do not assign an
        entity to both a user and a queue. If an entity is assigned to a group it will usually also be assigned
        to a user or queue, though while assignment rules are running it may temporarily be assigned to just
        a group.
      
      
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Assignable extends gw.pl.external.entity.Entity
{


  /**
   * User who assigned this entity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignedByUser")
  public com.guidewire.ab.external.entity.User getAssignedByUser();

  /**
   * User who assigned this entity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AssignedByUser")
  public void setAssignedByUser(com.guidewire.ab.external.entity.User value);


  /**
   * Group to which this entity is assigned; null if none assigned
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignedGroup")
  public com.guidewire.ab.external.entity.Group getAssignedGroup();

  /**
   * Group to which this entity is assigned; null if none assigned
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AssignedGroup")
  public void setAssignedGroup(com.guidewire.ab.external.entity.Group value);


  /**
   * Either the Queue to which this entity is assigned (if AssignmentStatus is 'assigned'), the Queue to which the system suggests assignment (if AssignmentStatus is 'manual'), or null if none assigned. Only one of AssignedUserID or AssignedQueueID should be non null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignedQueue")
  public com.guidewire.ab.external.entity.AssignableQueue getAssignedQueue();

  /**
   * Either the Queue to which this entity is assigned (if AssignmentStatus is 'assigned'), the Queue to which the system suggests assignment (if AssignmentStatus is 'manual'), or null if none assigned. Only one of AssignedUserID or AssignedQueueID should be non null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AssignedQueue")
  public void setAssignedQueue(com.guidewire.ab.external.entity.AssignableQueue value);


  /**
   * Either the User to which this entity is assigned (if AssignmentStatus is 'assigned'), the User to which the system suggests assignment (if AssignmentStatus is 'manual'), or null if none assigned. Only one of AssignedUserID or AssignedQueueID should be non null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignedUser")
  public com.guidewire.ab.external.entity.User getAssignedUser();

  /**
   * Either the User to which this entity is assigned (if AssignmentStatus is 'assigned'), the User to which the system suggests assignment (if AssignmentStatus is 'manual'), or null if none assigned. Only one of AssignedUserID or AssignedQueueID should be non null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AssignedUser")
  public void setAssignedUser(com.guidewire.ab.external.entity.User value);


  /**
   * Time when entity last assigned
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignmentDate")
  public java.util.Date getAssignmentDate();


  /**
   * Typelist describing assignment status.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignmentStatus")
  public com.guidewire.ab.external.typelist.AssignmentStatus getAssignmentStatus();


  /**
   * Date and time when this entity was closed. (Not applicable to all assignable entities)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CloseDate")
  public java.util.Date getCloseDate();

  /**
   * Date and time when this entity was closed. (Not applicable to all assignable entities)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CloseDate")
  public void setCloseDate(java.util.Date value);


  /**
   * This method exists to support the notion of "secondary" assignment in the Assignment Rules. "Secondary" assignments
generally represented by UserRoleAssignment entities, are assignments of "roles" to users, separated from the single
"primary" owner of the entity.
<p/>
It is generally desirable for Assignment rule writers to be able to re-use a single set of, say, Claim Assignment rules
for both primary and secondary assignments. This method allows rules to be written in the form of
<code>Claim.CurrentAssignment.assignXXX()</code> rather than <code>Claim.assignXXX()</code>. If the primary
assignment is being performed, then getCurrentAssignment() will return the entity itself (in this case, the Claim).
If a secondary assignment is being performed, then getCurrentAssignment() will return the UserRoleAssignment which
is current being operated upon.
<p/>
Obviously, if an entity does not support secondary assignment (i.e. does not implement the UserRoleOwner interface),
then rules do not need to use this method. Secondary assignments done outside of the Assignment Rules can simplay
call the assignXXX methods directly on the UserRoleAssignment entity themselves, and therefore also do not require
this method.
<p/>
Since this method is dependent on the Assignment Engine state, calling it outside of the Assignment Rules is illegal.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CurrentAssignment")
  public com.guidewire.ab.external.entity.Assignable getCurrentAssignment();


  /**
   * Group to which this entity was previously assigned.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PreviousGroup")
  public com.guidewire.ab.external.entity.Group getPreviousGroup();


  /**
   * Queue to which this entity was previously assigned.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PreviousQueue")
  public com.guidewire.ab.external.entity.AssignableQueue getPreviousQueue();


  /**
   * User to which this entity was previously assigned.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PreviousUser")
  public com.guidewire.ab.external.entity.User getPreviousUser();

  /**
   * Directly assigns the entity to the specified group and user by setting the assignedGroup and assignedUser fields.
If user or group is null returns false and nothing is done.
   *
   * @return true if the assignment is successful
   * @param group The group to which the entity should be assigned
   * @param user The user to which the entity should be assigned
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assign")
  public boolean assign(com.guidewire.ab.external.entity.Group group, com.guidewire.ab.external.entity.User user);

  /**
   * <p>
Invokes the Assignment Engine to assign the item to the specified group and user.  If userID is null,
the item will be assigned using the group's assignment rules.  If
userID is specified, assignment will be made directly to the group and
user.  If the engine cannot assign the item to the requested group/user,
it will throw an exception indicating the reason.
</p>
If a user is specified, caller is responsible for ensuring that the
user is a member of group.
</p>
Note that since this method invokes the Assignment Engine, it may not be called from within an Assignment rule.
   *
   * @param groupID The group to which the item should be assigned - must be
               specified.  If not known, use autoAssign(item) instead.
   * @param userID The user to which the item should be assigned; if null an
               appropriate user will be selected by group assignment rules.
   * @deprecated Use autoAssign(GroupBase, UserBase) instead. Note that that method returns a boolean instead of throwing exceptions
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assign")
  public void assign(gw.pl.external.entity.Key groupID, gw.pl.external.entity.Key userID) throws java.lang.RuntimeException;

  /**
   * Assign the entity, which must be an Activity to the specified queue. (Currently, only Activities may be assigned
to Queues.) The current group is not a parameter - it is derived from the current
Assignment Engine state. As a result, this method may only be invoked from within an Assignment Rule.
<p/>
If there is no current group, nothing is done and a warning is logged. The queue must belong to the current group
or nothing is done.  Returns false if the assignable bean is not an activity.
<p/>
If invoked from outside an Assignment Rule, will take no action and return false.
   *
   * @return true if the assignment is successful, false otherwise
   * @param queue Queue to assign the activity to
   * @deprecated use assignActivityToQueue(AssignableQueue, GroupBase) instead, since that method is more widely valid and
            is easier to understand because the group is explicit rather than implicit.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignActivityToQueue")
  public boolean assignActivityToQueue(com.guidewire.ab.external.entity.AssignableQueue queue);

  /**
   * Assign this entity, which must be an Activity,  to the specified queue. The queue should belong to the specified group.
Returns false if the assignable bean is not an activity.
   *
   * @return true if the assignment is successful
   * @param queue Queue to assign the activity to
   * @param group cannot be null
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignActivityToQueue")
  public boolean assignActivityToQueue(com.guidewire.ab.external.entity.AssignableQueue queue, com.guidewire.ab.external.entity.Group group);

  /**
   * Assigns an assignable item to the user who best fits the set of user attributes defined in the attributeBasedAssignmentCriteria
parameter. Alternative signature which depends on the "current" group status in the Assignment Engine;
see the preferred method for details.
<p/>
If invoked from outside an Assignment Rule, will take no action and return false.
   *
   * @return true if the assignment is successful, false otherwise
   * @param attributeBasedAssignmentCriteria The criteria used to perform the search
   * @deprecated depends on the Assignment Engine state; use <code>assignByUserAttributes(AttributeBasedAssignmentCriteria, boolean, GroupBase)</code> instead
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignByUserAttributes")
  public boolean assignByUserAttributes(com.guidewire.ab.external.entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria);

  /**
   * Assigns an assignable item to the user who best fits the set of user attributes defined in the attributeBasedAssignmentCriteria
parameter. Alternative signature which depends on the "current" group status in the Assignment Engine;
see the preferred method for details.
<p/>
If invoked from outside an Assignment Rule, will take no action and return false.
   *
   * @return true if the assignment is successful, false otherwise
   * @param attributeBasedAssignmentCriteria The criteria used to perform the search
   * @param includeSubGroups if true, searches  all the users in any subgroups of the current group, as well as those in
                        the current group. If false, only searches users in the current group
   * @deprecated depends on the Assignment Engine state; use <code>assignByUserAttributes(AttributeBasedAssignmentCriteria, boolean, GroupBase)</code> instead
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignByUserAttributes")
  public boolean assignByUserAttributes(com.guidewire.ab.external.entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups);

  /**
   * Assigns an assignable item to a user who satisfies the constraints defined in the attributeBasedAssignmentCriteria
parameter. This is done by:
<p/>
1) Find the set of users who are members of the supplied group, and optionally its subgroups, and who satisfy
the supplied attribute-based search criteria. (If the group parameter is null, then no group restriction applies)
2) Select from the resulting set of users via the round-robin rotation mechanism. A separate round-robin state will
be maintained for each unique assignment criteria entity and group.
   *
   * @return true if the assignment is successful, false otherwise
   * @param attributeBasedAssignmentCriteria the criteria to be satisfied by the selected user
   * @param includeSubGroups if true, searches  all the users in any subgroups of the group parameter as well as those in
                        that group. If false, only searches users in the group
   * @param group the group.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignByUserAttributes")
  public boolean assignByUserAttributes(com.guidewire.ab.external.entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups, com.guidewire.ab.external.entity.Group group);

  /**
   * Assigns the entity to the group requested.  If group is null, nothing is done.
   *
   * @return true if the assignment is successful, false otherwise
   * @param group the group to which the entity should be assigned
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignGroup")
  public boolean assignGroup(com.guidewire.ab.external.entity.Group group);

  /**
   * Uses the group type group selector to choose the next subgroup under the "current" group (retrieved from the
current state of the Assignment Engine) to receive the assignable. If there is no current group, the root group
from the Assignment Engine is used.
<p/>
This method will search breadth-first through the group tree, starting with the current group, and will
return the first group found with the approriate type.
<p/>
If invoked from outside an Assignment Rule, will take no action and return false.
   *
   * @return true if the assignment is successful, false otherwise
   * @param requiredGroupType A GroupType typecode; the assignment will be restricted to a group of this type. If null, then
                         no group will be found.
   * @deprecated This method of assignment is deemed useless, because it always returns the first group found with the
            required type. Use <code>assignGroupByRoundRobin()</code> instead, so that the assignment will be rotated among
            the matching groups.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignGroupByGroupType")
  public boolean assignGroupByGroupType(com.guidewire.ab.external.typelist.GroupType requiredGroupType);

  /**
   * Assigns this entity to a group based on region assignments. This is done in the following manner:
<p/>
Alternative signature; see <code>assignGroupByLocation(GroupType, AddressBase, boolean, GroupBase)</code> for more details.
<p/>
If invoked from outside an Assignment Rule, will take no action and return false.
   *
   * @return true if the assignment is successful, false otherwise
   * @param groupType Only groups whose GroupType property matches this value will be considered
   * @param address An address to use for location-based assignment
   * @param directChildrenOnly if this parameter is false the selector will round-robin not only through the current group
                          but also through all its subgroups.
   * @deprecated Use <code>assignGroupByLocation(GroupType, AddressBase, boolean, GroupBase)</code> insteaed, to make the recursion explicit.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignGroupByLocation")
  public boolean assignGroupByLocation(com.guidewire.ab.external.typelist.GroupType groupType, com.guidewire.ab.external.entity.Address address, boolean directChildrenOnly);

  /**
   * Assigns this entity to a group based on region assignments. This is done in the following manner:
<p/>
1) Based on the Region configuration, get the smallest zone containing the supplied address (in the US, this
would typically be the zip code)
2) Search for the groups within the parameter group whose region assignment configuration includes that zip code.
3) If no group is found, repeat steps 1 and 2 with the next largest zone (in the US, county)
4) If no group is found, repeat steps 1 and 2 with the next largest zone (in the US, state)
5) If more than one group is found, then round-robin among the resulting groups based on the zone which was used to
find the match.
<p/>
For example if we find no groups that match by zip but a few that match by county then
assignment will round robin through the ones that match by county and will ignore any others that match by state.
Matching is case-insensitive.
<p/>
Search is restricted to the sub-groups of the specified group and optionally all of its children. If there is no
specified group, then the root group is used. Note that starting from the root group is potentially costly in
performance time. If invoked from outside an Assignment Rule, this method will take no action and return false.
   *
   * @return true if the assignment is successful, false otherwise
   * @param groupType Only groups whose GroupType property matches this value will be considered
   * @param address An address to use for location-based assignment
   * @param directChildrenOnly if this parameter is false the selector will round-robin not only through the parameter
                          group but also through all its subgroups.
   * @param parentGroup The group whose subgroups will be considered for assignment
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignGroupByLocation")
  public boolean assignGroupByLocation(com.guidewire.ab.external.typelist.GroupType groupType, com.guidewire.ab.external.entity.Address address, boolean directChildrenOnly, com.guidewire.ab.external.entity.Group parentGroup);

  /**
   * Uses the round robin group selector to choose the next subgroup under the current group with the
appropriate type to be assigned to this entity.
<p/>
Alternative signature; see <code>assignGroupByRoundRobin(GroupType, boolean, GroupBase)</code> for more details.
<p/>
If invoked from outside an Assignment Rule, will take no action and return false.
   *
   * @return true if the assignment is successful, false otherwise
   * @param requiredGroupType A typecode for a group; the assignment will be restricted to a group of this type. If null,
                         then no group will be found
   * @deprecated Use <code>assignGroupByRoundRogin(GroupType, boolean, GroupBase)</code> insteaed, to make the recursion explicit.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignGroupByRoundRobin")
  public boolean assignGroupByRoundRobin(com.guidewire.ab.external.typelist.GroupType requiredGroupType);

  /**
   * Uses the round robin group selector to choose the next subgroup under the current group with the
appropriate type to be assigned to this entity.
<p/>
Alternative signature; see <code>assignGroupByRoundRobin(GroupType, boolean, GroupBase)</code> for more details.
<p/>
If invoked from outside an Assignment Rule, will take no action and return false.
   *
   * @return true if the assignment is successful, false otherwise
   * @param requiredGroupType A typecode for a group; the assignment will be restricted to a group of this type. If null,
                         then no group will be found
   * @param includeSubGroups If true, all the user
   * @deprecated Use <code>assignGroupByRoundRobin(GroupType, boolean, GroupBase)</code> insteaed, to make the recursion explicit.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignGroupByRoundRobin")
  public boolean assignGroupByRoundRobin(com.guidewire.ab.external.typelist.GroupType requiredGroupType, boolean includeSubGroups);

  /**
   * Uses the round robin algorithm to choose the next group to receive the assignable.
<p/>
The round-robin algorithm is basically a simple "eenie-meenie-miney-moe" rotation. No current assignment load is
taken into account, but each Group's load factor is used to determine relative assignment frequency; essentially, a
group with a lower load factor than the others' is periodically skipped.
<p/>
The round-robin rotation for each group type (and boolean value) is independent of the others, so only identical
calls will impact the user who is "next" in the rotation.
<p/>
If no group is specified, the root group will be used instead. Note that starting from the root group is
potentially costly in performance time.
<p/>
When group type is specified, the load factor is <b>NOT</b> used.
   *
   * @return true if the assignment is successful, false otherwise
   * @param groupType Only groups whose GroupType property matches this value will be considered
   * @param includeSubGroups if this parameter is true the selector will round-robin not only through the parameter
                        group's immediate children but also through all its subgroups.
   * @param parentGroup The group whose subgroups will be considered for assignment
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignGroupByRoundRobin")
  public boolean assignGroupByRoundRobin(com.guidewire.ab.external.typelist.GroupType groupType, boolean includeSubGroups, com.guidewire.ab.external.entity.Group parentGroup);

  /**
   * Uses the supplied dynamic assignment strategy implementation to find a group assignment for the current entity. See
{@link external.gw.api.assignment.DynamicGroupAssignmentStrategy} for more details on what that implementation should look like and how it
is used by the implementation of this method.
   *
   * @return true if the assignment is successful, false otherwise
   * @param dynamicGroupAssignmentStrategy the {@link external.gw.api.assignment.DynamicGroupAssignmentStrategy} to be used to do the assignment
   * @param parentGroup The group to be used during the assignment (usually the parent group to which the entity is or should be assigned)
   * @param includeSubGroups Whether the subgroups of the supplied group should also be considered
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignGroupDynamically")
  public boolean assignGroupDynamically(external.gw.api.assignment.DynamicGroupAssignmentStrategy dynamicGroupAssignmentStrategy, com.guidewire.ab.external.entity.Group parentGroup, boolean includeSubGroups);

  /**
   * Assigns the item to the creator of the supplied entity, and to one of the user's groups. If no group
is found for the user, uses the group based on the rule engine state (if available).
   *
   * @return true if the assignment is successful, false otherwise
   * @param sourceEntity The entity to query for the id of the creator.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignToCreator")
  public boolean assignToCreator(com.guidewire.ab.external.entity.Editable sourceEntity);

  /**
   * Assigns this entity to the user who created the supplied entity, and to the first group in the user's list of member groups. In the
unlikely case that the user does not belong to any groups, then the entity will be assigned to the supplied
default group.
<p/>
If the supplied entity has not been persisted yet, and therefore has no recorded creator, then the current user will be
used instead.
   *
   * @return true if the assignment is successful, false otherwise
   * @param sourceEntity The entity to query for the id of its creator.
   * @param defaultGroup The default group to use if the assigned user is not a member of any group.
   * @deprecated This signature is a little confusing, because the defaultGroup parameter should almost never be
            necessary, since in the current system a user almost never belongs to no groups. Use assignToCreator(EditableBean)
            instead
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignToCreator")
  public boolean assignToCreator(com.guidewire.ab.external.entity.Editable sourceEntity, com.guidewire.ab.external.entity.Group defaultGroup);

  /**
   * Another name for {@link #assignToQueue()}, making it more explicit that the activity will be assigned to the FNOL
queue. See that method for more details.
   *
   * @return true if the assignment is successful, false otherwise
   * @deprecated use {@link #assignActivityToQueue(AssignableQueue)} to assign an
            activity to a particular queue. Note that {@link com.guidewire.ab.external.entity.Group#getQueue(String)} can be used to find a
            named queue.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignToFNOLQueue")
  public boolean assignToFNOLQueue();

  /**
   * Assigns this entity to the user and group to which the entity's "issue" is assigned. Which entity is used
to find the user and group is application-dependent. For example, in CC this will assign the entity to
the owner of the related exposure (if any) or claim. This method is currently only meaningful for CC.
   *
   * @return true if the assignment is successful, false otherwise
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignToIssueOwner")
  public boolean assignToIssueOwner();

  /**
   * Assign an activity to the FNOL queue of items assigned to the "current" group (retrieved from the current state of
the Assignment Engine). If the entity to be assigned is not an activity nothing is done,
false is returned and a warning is logged.
<p/>
If invoked from outside an Assignment Rule, will take no action and return false.
   *
   * @return true if the assignment is successful, false otherwise
   * @deprecated use {@link #assignActivityToQueue(AssignableQueue)} to assign an
            activity to a particular queue. Note that {@link com.guidewire.ab.external.entity.Group#getQueue(String)} can be used to find a
            named queue.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignToQueue")
  public boolean assignToQueue();

  /**
   * Assigns the entity to the user requested within the "current" group (retrieved from the current state of
the Assignment Engine).  If the user is null or is not a member of the current group, nothing is done and false is returned.
<p/>
If invoked from outside an Assignment Rule, will take no action and return false.
   *
   * @return true if the assignment is successful
   * @param user the user to be assigned
   * @deprecated depends on the Assignment Engine state; use <code>assign(GroupBase, UserBase)</code> instead
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignUser")
  public boolean assignUser(com.guidewire.ab.external.entity.User user);

  /**
   * Directly assigns the entity to the specified user and one of the groups the user belongs to.
<p/>
If the user does not have sufficient permission to accept the assignment, false is returned
   *
   * @return true if the assignment is successful, false otherwise
   * @param user The user to which the entity should be assigned
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignUserAndDefaultGroup")
  public boolean assignUserAndDefaultGroup(com.guidewire.ab.external.entity.User user);

  /**
   * Uses the location-based assigner to assign an Assignable based on a given address.
<p/>
Alternative signature; see <code>assignUserByLocation(AddressBase, boolean, GroupBase)</code> for more details.
<p/>
If invoked from outside an Assignment Rule, will take no action and return false.
   *
   * @return true if the assignment is successful, false otherwise
   * @param address An address to use for location-based assignment
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocation(AddressBase, boolean, GroupBase)</code> instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignUserByLocation")
  public boolean assignUserByLocation(com.guidewire.ab.external.entity.Address address);

  /**
   * Uses the location-based assigner to assign an Assignable based on a given address.
<p/>
Alternative signature; see <code>assignUserByLocation(AddressBase, boolean, GroupBase)</code> for more details.
<p/>
If invoked from outside an Assignment Rule, will take no action and return false.
   *
   * @return true if the assignment is successful, false otherwise
   * @param address An address to use for location-based assignment
   * @param includeSubGroups if true, then include users in any sub groups of the current group as well as users in the
                        current group.
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocation(AddressBase, boolean, GroupBase)</code> instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignUserByLocation")
  public boolean assignUserByLocation(com.guidewire.ab.external.entity.Address address, boolean includeSubGroups);

  /**
   * Assigns this entity to a user based on region assignments. This is done in the following manner:
<p/>
1) Based on the Region configuration, get the smallest zone containing the supplied address (in the US, this
would typically be the zip code)
2) Search for the users whose region assignment configuration includes that zip code.
3) If no user is found, repeat steps 1 and 2 with the next largest zone (in the US, county)
4) If no user is found, repeat steps 1 and 2 with the next largest zone (in the US, state)
5) If more than one user is found, then round-robin among the resulting users based on the zone which was used to
find the match.
<p/>
For example if we find no users that match by zip but a few that match by county then
assignment will round robin through the ones that match by county and will ignore any others that match by state.
Matching is case-insensitive.
<p/>
Search is restricted to the users of the group (and optionally its subgroups). It is an error if there is no
group.
   *
   * @return true if the assignment is successful, false otherwise
   * @param address An address to use for location-based assignment
   * @param includeSubGroups if true, then include users in any sub groups of the parameter group as well as users in
                        that group.
   * @param group the group whose users will be considered for the assignment
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignUserByLocation")
  public boolean assignUserByLocation(com.guidewire.ab.external.entity.Address address, boolean includeSubGroups, com.guidewire.ab.external.entity.Group group);

  /**
   * A combination of {@link #assignUserByLocation} and {@link #assignByUserAttributes} .
<p/>
Alternative signature; see <code>assignUserByLocationAndAttributes(AddressBase, AttributeBasedAssignmentCriteria, boolean, GroupBase)</code> for more details.
<p/>
If invoked from outside an Assignment Rule, will take no action and return false.
   *
   * @return true if the assignment is successful, false otherwise
   * @param address An address to use for location-based assignment
   * @param attributeBasedAssignmentCriteria the user attributes to match against
   * @param includeSubGroups if true, then include users in any sub groups of the current group as well as users in the
                        current group.
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocationAndAttributes(AddressBase, AttributeBasedAssignmentCriteria, boolean, GroupBase)</code> instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignUserByLocationAndAttributes")
  public boolean assignUserByLocationAndAttributes(com.guidewire.ab.external.entity.Address address, com.guidewire.ab.external.entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups);

  /**
   * Assigns this entity to the user matching the attribute criteria whose region assignments contain the supplied location. This method
first finds the users in the supplied group (and, possibly, subgroups) who match the attribute criteria, and then
once that set is determined it applies the same algorithm used by {@link #assignUserByLocation}
to find a user whose region assignments contain the supplied location.
<p/>
If no users match the supplied criteria, then assignment will fail and false will be returned.
   *
   * @return true if the assignment is successful, false otherwise
   * @param address An address to use for location-based assignment
   * @param attributeBasedAssignmentCriteria the user attributes to match against
   * @param includeSubGroups if true, then include users in any sub groups of the parameter  group as well as users in
                        that group.
   * @param group the group whose members should be considered for the assignment
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignUserByLocationAndAttributes")
  public boolean assignUserByLocationAndAttributes(com.guidewire.ab.external.entity.Address address, com.guidewire.ab.external.entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups, com.guidewire.ab.external.entity.Group group);

  /**
   * Assigns a user within the "current" group (retrieved from the current state of
the Assignment Engine), rotating through the set of users in the group each time the method is called.
<p/>
Alternative signature; see <code>assignUserByRoundRobin(boolean, GroupBase)</code> for more details.
<p/>
If invoked from outside an Assignment Rule, will take no action and return false.
   *
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByRoundRobin(boolean, GroupBase)</code> instead
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignUserByRoundRobin")
  public boolean assignUserByRoundRobin();

  /**
   * Assigns a user within the "current" group (retrieved from the current state of
the Assignment Engine), rotating through the set of users in the group each time the method is called.
<p/>
Alternative signature; see <code>assignUserByRoundRobin(boolean, GroupBase)</code> for more details.
<p/>
If invoked from outside an Assignment Rule, will take no action and return false.
   *
   * @return true if the assignment is successful, false otherwise
   * @param includeSubGroups if this parameter is true the selector will round-robin not only through the current group
                        but also through all its subgroups.
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByRoundRobin(boolean, GroupBase)</code> instead
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignUserByRoundRobin")
  public boolean assignUserByRoundRobin(boolean includeSubGroups);

  /**
   * Uses the round robin algorithm to choose the next user from the specified group or to receive the assignable.
<p/>
The round-robin algorithm is basically a simple "eenie-meenie-miney-moe" rotation. No current assignment load is
taken into account, but each User's load factor is used to determine relative assignment frequency; essentially, a
user with a lower load factor than the others' is periodically skipped.
<p/>
The round-robin rotation for each group (and boolean value) is independent of the others, so only identical
calls will impact the user who is "next" in the rotation.
   *
   * @return true if the assignment is successful, false otherwise
   * @param includeSubGroups if this parameter is true the selector will round-robin not only through the parameter group
                        but also through all its subgroups.
   * @param group may not be null
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignUserByRoundRobin")
  public boolean assignUserByRoundRobin(boolean includeSubGroups, com.guidewire.ab.external.entity.Group group);

  /**
   * Uses the supplied dynamic assignment strategy implementation to find an assignment for the current entity. See
{@link external.gw.api.assignment.DynamicUserAssignmentStrategy} for more details on what that implementation should look like and how it
is used by the implementation of this method.
   *
   * @return true if the assignment is successful, false otherwise
   * @param dynamicUserAssignmentStrategy the {@link external.gw.api.assignment.DynamicUserAssignmentStrategy} to be used to do the assignment
   * @param group The group to be used during the assignment (usually the group to which the entity is or should be assigned)
   * @param includeSubGroups Whether the subgroups of the supplied group should also be considered
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignUserDynamically")
  public boolean assignUserDynamically(external.gw.api.assignment.DynamicUserAssignmentStrategy dynamicUserAssignmentStrategy, com.guidewire.ab.external.entity.Group group, boolean includeSubGroups);

  /**
   * Invokes the Assignment Engine, which will process the configured Assignment Rules to come up with an assignment
for the current entity.
<p/>
May not be invoked from within an Assignment Rule, since the Assignment Engine may not be invoked recursively. If invoked
from within an Assigment Rule, an error will be logged and false will be returned.
   *
   * @return true if an assignment has been found, false otherwise
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "autoAssign")
  public boolean autoAssign();

  /**
   * <p>
Invokes the Assignment Enging to assign the item to the specified group and user.
If userID is null, the item will be assigned using the group's assignment rules.
If userID is specified, assignment will be made directly to the group and
user.  If the engine cannot assign the item to the requested group/user,
it will throw an exception indicating the reason.
</p>
If a user is specified, caller is responsible for ensuring that the
user is a member of group.
</p>
Note that since this method invokes the Assignment Engine, it may not be called from within an Assignment rule.
   *
   * @return true if the assignment is successufl, false otherwise
   * @param group The group to which the item should be assigned - must be
             specified.  If not known, use autoAssign(item) instead.
   * @param user The user to which the item should be assigned; if null an
             appropriate user will be selected by group assignment rules.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "autoAssign")
  public boolean autoAssign(com.guidewire.ab.external.entity.Group group, com.guidewire.ab.external.entity.User user);

  /**
   * Creates a AttributeBasedAssignmentCriteria instance, which is used to collect a set of user attributes on which to search for users.
The matchAll flag indicates whether each attribute must be satisfied (logical AND) or whether any attribute could
be satisfied (logical OR).
   *
   * @return AttributeBasedAssignmentCriteria instance
   * @deprecated Use the constructor directly.  This method is no longer necessary, since a new AttributeBasedAssignmentCriteria entity can simply
            be created directly in Gosu and placed in the correct bundle.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createUserAttributes")
  public com.guidewire.ab.external.entity.AttributeBasedAssignmentCriteria createUserAttributes();


  /**
   * Utility class for accessing static features for Assignable
   * <ul>
   * <li>Access static properties for this type.</li>

   * </ul>
   */
  public static class UTIL
  {
    /**
     * Create a new proxy instance of the external type Assignable.
     */
    public static Assignable newInstance()
    {
      return null;
    }

    // Static Properties for Assignable

    /**
     * 
     * 
     */
    public static java.lang.String getASSIGNMENTADDED_EVENT()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.ab.external.entity.Assignable.class, "ASSIGNMENTADDED_EVENT");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getASSIGNMENTCHANGED_EVENT()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.ab.external.entity.Assignable.class, "ASSIGNMENTCHANGED_EVENT");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getASSIGNMENTREMOVED_EVENT()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.ab.external.entity.Assignable.class, "ASSIGNMENTREMOVED_EVENT");
    }

    // Static Methods for Assignable
    
  }


  /**
   * Utility class for initializing an instance of Assignable
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Assignable.
     */
    public static Assignable newInstance()
    {
      return (Assignable) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Assignable.class);
    }
  }

}
