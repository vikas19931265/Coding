package external.gw.entity;

/**
 * Marker interface for arrays defined in the datamodel.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IArrayPropertyInfo extends external.gw.entity.IEntityPropertyInfo
{
  /**
   * true if the owner intrinsic type of this array owns the array
        elements.  Owning an array implies:
        <ul>
        <li>cascade delete</li>
        <li>data import and export semantics are different. Import will delete all
        items and then import data.  Export will export items inline of parent.</li>
        <li>isFieldChanged on array element are different.</li>
        <li>Child array elements will be cloned with parent if owner = true.</li>
        </ul>
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Owned")
  public boolean isOwned();
}
