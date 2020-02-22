
package extensions.ab.internal.domain.contact.gen;

import java.util.Date;
import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference;
import com.guidewire.commons.metadata.types.LinkPropertyInfoCache;
import com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache;
import extensions.ab.contact.entity.VendorEvaluation;
import extensions.ab.contact.entity.Verifiable_Ext;
import extensions.ab.contact.typekey.VendorEvaluationStatus;
import gw.ab.addressbook.entity.ABContact;
import gw.pl.persistence.core.entity.Retireable;

public interface VendorEvaluationStubI
    extends Verifiable_Ext, Retireable
{

    EntityIntrinsicTypeReference<VendorEvaluation> TYPE = new EntityIntrinsicTypeReference<VendorEvaluation>("entity.VendorEvaluation");
    ColumnPropertyInfoCache LOADCOMMANDID_PROP = new ColumnPropertyInfoCache(TYPE, "LoadCommandID");
    ColumnPropertyInfoCache EVALUATOR_PROP = new ColumnPropertyInfoCache(TYPE, "Evaluator");
    ColumnPropertyInfoCache EVALUATIONDATE_PROP = new ColumnPropertyInfoCache(TYPE, "EvaluationDate");
    ColumnPropertyInfoCache SCORE_TIMELINESS_PROP = new ColumnPropertyInfoCache(TYPE, "Score_Timeliness");
    ColumnPropertyInfoCache SCORE_COMMUNICATION_PROP = new ColumnPropertyInfoCache(TYPE, "Score_Communication");
    ColumnPropertyInfoCache SCORE_QUALITYOFWORK_PROP = new ColumnPropertyInfoCache(TYPE, "Score_QualityOfWork");
    ColumnPropertyInfoCache SCORE_PRICING_PROP = new ColumnPropertyInfoCache(TYPE, "Score_Pricing");
    ColumnPropertyInfoCache TOTAL_SCORE_PROP = new ColumnPropertyInfoCache(TYPE, "Total_Score");
    ColumnPropertyInfoCache EVALUATORCOMMENT_PROP = new ColumnPropertyInfoCache(TYPE, "EvaluatorComment");
    TypekeyPropertyInfoCache STATUS_PROP = new TypekeyPropertyInfoCache(TYPE, "Status");
    LinkPropertyInfoCache ABCONTACT_PROP = new LinkPropertyInfoCache(TYPE, "ABContact");
    ColumnPropertyInfoCache RETIREDVALUE_PROP = new ColumnPropertyInfoCache(TYPE, "RetiredValue");
    ColumnPropertyInfoCache CREATETIME_PROP = new ColumnPropertyInfoCache(TYPE, "CreateTime");
    ColumnPropertyInfoCache UPDATETIME_PROP = new ColumnPropertyInfoCache(TYPE, "UpdateTime");
    LinkPropertyInfoCache CREATEUSER_PROP = new LinkPropertyInfoCache(TYPE, "CreateUser");
    LinkPropertyInfoCache UPDATEUSER_PROP = new LinkPropertyInfoCache(TYPE, "UpdateUser");
    ColumnPropertyInfoCache BEANVERSION_PROP = new ColumnPropertyInfoCache(TYPE, "BeanVersion");
    ColumnPropertyInfoCache ID_PROP = new ColumnPropertyInfoCache(TYPE, "ID");
    ColumnPropertyInfoCache PUBLICID_PROP = new ColumnPropertyInfoCache(TYPE, "PublicID");
    ColumnPropertyInfoCache REQUIRESVERIFICATION_PROP = new ColumnPropertyInfoCache(TYPE, "RequiresVerification");
    ColumnPropertyInfoCache VERIFICATIONDATE_PROP = new ColumnPropertyInfoCache(TYPE, "VerificationDate");
    ColumnPropertyInfoCache VERIFICATIONDUEDATE_PROP = new ColumnPropertyInfoCache(TYPE, "VerificationDueDate");
    TypekeyPropertyInfoCache PRIORITY_PROP = new TypekeyPropertyInfoCache(TYPE, "Priority");

    /**
     * Gets the value of the LoadCommandID field.
     * 
     * 
     */
    Long getLoadCommandID();

    /**
     * Gets the value of the Evaluator field.
     * Evaluator
     * 
     */
    String getEvaluator();

    /**
     * Sets the value of the Evaluator field.
     * 
     */
    void setEvaluator(String value);

    /**
     * Gets the value of the EvaluationDate field.
     * Date evaluation occurred
     * 
     */
    Date getEvaluationDate();

    /**
     * Sets the value of the EvaluationDate field.
     * 
     */
    void setEvaluationDate(Date value);

    /**
     * Gets the value of the Score_Timeliness field.
     * Score for timeliness
     * 
     */
    Integer getScore_Timeliness();

    /**
     * Sets the value of the Score_Timeliness field.
     * 
     */
    void setScore_Timeliness(Integer value);

    /**
     * Gets the value of the Score_Communication field.
     * Score for communication
     * 
     */
    Integer getScore_Communication();

    /**
     * Sets the value of the Score_Communication field.
     * 
     */
    void setScore_Communication(Integer value);

    /**
     * Gets the value of the Score_QualityOfWork field.
     * Score for quality of work
     * 
     */
    Integer getScore_QualityOfWork();

    /**
     * Sets the value of the Score_QualityOfWork field.
     * 
     */
    void setScore_QualityOfWork(Integer value);

    /**
     * Gets the value of the Score_Pricing field.
     * Score for pricing
     * 
     */
    Integer getScore_Pricing();

    /**
     * Sets the value of the Score_Pricing field.
     * 
     */
    void setScore_Pricing(Integer value);

    /**
     * Gets the value of the Total_Score field.
     * Total_Score
     * 
     */
    Integer getTotal_Score();

    /**
     * Sets the value of the Total_Score field.
     * 
     */
    void setTotal_Score(Integer value);

    /**
     * Gets the value of the EvaluatorComment field.
     * Communicator
     * 
     */
    String getEvaluatorComment();

    /**
     * Sets the value of the EvaluatorComment field.
     * 
     */
    void setEvaluatorComment(String value);

    /**
     * Gets the value of the Status field.
     * Status of vendor evaluation
     * 
     */
    VendorEvaluationStatus getStatus();

    /**
     * Sets the value of the Status field.
     * 
     */
    void setStatus(VendorEvaluationStatus value);

    /**
     * Gets the value of the ABContact field.
     * Contact under evaluation
     * 
     */
    ABContact getABContact();

    /**
     * Sets the value of the ABContact field.
     * 
     */
    void setABContact(ABContact value);

}
