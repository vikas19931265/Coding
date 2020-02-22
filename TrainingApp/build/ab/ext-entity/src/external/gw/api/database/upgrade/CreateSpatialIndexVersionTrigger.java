package external.gw.api.database.upgrade;

/**
 * Version trigger to create a new spatial index with non-Guidewire default options
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface CreateSpatialIndexVersionTrigger extends external.gw.api.database.upgrade.before.BeforeUpgradeVersionTrigger, external.gw.api.datamodel.upgrade.IDatamodelChange<external.gw.api.database.upgrade.before.BeforeUpgradeVersionTrigger>
{


  /**
   * {@inheritDoc}
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArchivedDocumentUpgradeVersionTrigger")
  public external.gw.api.archiving.upgrade.ArchivedDocumentUpgradeVersionTrigger getArchivedDocumentUpgradeVersionTrigger();


  /**
   * {@inheritDoc}
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DatabaseUpgradeVersionTrigger")
  public external.gw.api.database.upgrade.before.BeforeUpgradeVersionTrigger getDatabaseUpgradeVersionTrigger();

  /**
   * Creates a spatial index with the given DDL. Can be called from the execute() method. For information about the DDL
syntax and available options, please consult the documentation for your database:
Oracle: http://docs.oracle.com/html/A88805_01/sdo_intr.htm#877657
Microsoft SQL Server: http://msdn.microsoft.com/en-us/library/bb964712.aspx
DB2:
   *
   * @param tableName Name of the table with the spatial column
   * @param columnName Name of the column with the spatial datatype
   * @param ddl Full DDL to create the spatial index.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createSpatialIndex")
  public void createSpatialIndex(java.lang.String tableName, java.lang.String columnName, java.lang.String ddl);

  /**
   * {@inheritDoc}
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasVersionCheck")
  public boolean hasVersionCheck();
}
