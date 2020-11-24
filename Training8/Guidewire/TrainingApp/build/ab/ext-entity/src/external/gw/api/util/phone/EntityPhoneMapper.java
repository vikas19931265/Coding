package external.gw.api.util.phone;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface EntityPhoneMapper
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ColumnList")
  public java.util.List getColumnList();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EntityType")
  public gw.pl.external.Type getEntityType();

  /**
   * null
   *
   * @param param PhoneColumnProperties
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addPhoneColumnProperty")
  public void addPhoneColumnProperty(external.gw.api.util.phone.PhoneColumnProperties param);

  /**
   * null
   *
   * @param param PhoneColumnProperties
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "withPhoneColumnProperty")
  public external.gw.api.util.phone.EntityPhoneMapper withPhoneColumnProperty(external.gw.api.util.phone.PhoneColumnProperties param);

  /**
   * null
   *
   * @param param String
   * @param param1 String
   * @param param2 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "withPhoneColumns")
  public external.gw.api.util.phone.EntityPhoneMapper withPhoneColumns(java.lang.String param, java.lang.String param1, java.lang.String param2);


  /**
   * Utility class for initializing an instance of external.gw.api.util.phone.EntityPhoneMapper
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param IEntityType

     */
    public static EntityPhoneMapper newInstance(gw.pl.external.Type param)
    {
      return (EntityPhoneMapper) gw.pl.external.Invoker.getInstance().construct(external.gw.api.util.phone.EntityPhoneMapper.class, new Class[]{ gw.pl.external.Type.class} , new Object[]{ param});
    }

  }
}
