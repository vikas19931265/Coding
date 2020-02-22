package external.gw.api.webservice.addressbook.contactapi;

/**
 * Used to restrict contact search results to those contacts which match one of the subtypes in the list.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABContactSubtypeFilter
{
  /**
   * Return an array containing all the subtypes to match during search
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subtypes")
  public com.guidewire.ab.external.typelist.ABContact[] getSubtypes();


  /**
   * Add the given subtype to the list of subtypes
   *
   * @param subtype the subtype to add
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addSubtype")
  public void addSubtype(com.guidewire.ab.external.typelist.ABContact subtype);



  /**
   * Remove the given subtype from the list of subtypes
   *
   * @param subtype the subtype to remove
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeSubtype")
  public void removeSubtype(com.guidewire.ab.external.typelist.ABContact subtype);

}
