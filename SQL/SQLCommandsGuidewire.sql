/*
Find all claim contacts with role for given claim
==============================================================================================
*/

select b.*, ccrl.role ,(select name from cctl_contactrole where id=ccrl.role) as role from(
select a.* , con.firstname, con.lastname from(
select contactid , id  from cc_claimcontact where claimid=(select id from cc_claim where claimnumber='000-00-000703')
)a
inner join cc_contact  con on
a.contactid=con.id
)b
inner join  cc_claimcontactrole ccrl
on b.id=ccrl.claimcontactid;

/* 
=====================================================================================================
Based on claim number, find policy number, type of policy , exposure type and coverage type */


select a.* ,(select name from cctl_exposuretype where id=e.exposuretype) as ExposureType,
select name from cctl_coveragesubtype where id=e.coveragesubtype as CovSubType
 from(
select c.id,c.claimnumber, p.policynumber,(select name from cctl_policytype where id=p.policytype) as policytype
 from
 cc_claim c, cc_policy p , cc_coverage cov
 where c.claimnumber='000-00-000703'
 and p.id=c.policyid
and cov.id=p.id)a
left join cc_exposure e on a.id=e.claimid

--> when no coverage for policy still show the details

select a.* ,(select name from cctl_exposuretype where id=e.exposuretype) as ExposureType,
(select name from cctl_coveragesubtype where id=e.coveragesubtype) as CovSubType
 from(
select c.* from(
select c.id,c.claimnumber, p.policynumber,(select name from cctl_policytype where id=p.policytype) as policytype
 from
 cc_claim c, cc_policy p 
 where c.claimnumber in (select claimnumber from cc_claim)
 and p.id=c.policyid)c
left join cc_coverage cov
on cov.id=c.id
)a left join cc_exposure e on a.id=e.claimid



/* Show information like claim, claim date, exp, coverage, exp date
========================================================================================
*/

select c.*, (select name from PRDAA81N.cctl_coveragetype where id=cov.type) as covtype,
(select vin||'-'||model||'-'|| make from PRDAA81N.cc_vehicle where id=(( select vehicleid from PRDAA81N.cc_riskunit where id=cov.riskunitid))) as vehicle,
(select name from PRDAA81N.cctl_exposuretype where id=e.exposuretype) as exposuretype,e.createtime as expcreatetime
from(
select c.id as ClaimId,c.createtime,p.id as PolicyId, c.claimnumber, p.policynumber,(select name from PRDAA81N.cctl_policytype where id=policytype) as policytype
from PRDAA81N.cc_claim c, PRDAA81N.cc_policy p where  p.id= c.policyid 
)c
inner join PRDAA81N.cc_coverage cov
on cov.policyid=c.policyid 
left join PRDAA81N.cc_exposure e on e.coverageid=cov.id
where c.claimnumber='01-001-574789' and e.exposuretype is not null;

/* Modification 1  order by creation of the claim*/

select f.*,(f.expcreatetime-f.createtime) days,(f.expcreatetime-f.createtime)*24*60 min  from(
select c.*, (select name from cctl_coveragetype where id=cov.type) as covtype,
e.publicid, 
(select vin||'-'||model||'-'|| make from cc_vehicle where id=(( select vehicleid from cc_riskunit where id=cov.riskunitid))) as vehicle,
(select name from cctl_exposuretype where id=e.exposuretype) as exposuretype,e.createtime as expcreatetime
from(
select c.id as ClaimId  ,c.createtime,p.id as PolicyId, (select name from cctl_policystatus where id=p.status) as policystatus, c.claimnumber, p.policynumber,(select name from cctl_policytype where id=policytype) as policytype
from cc_claim c, cc_policy p where  p.id= c.policyid 
)c
inner join cc_coverage cov
on cov.policyid=c.policyid 
left join cc_exposure e on e.coverageid=cov.id
where c.claimnumber in (select claimnumber from cc_claim) and e.exposuretype is not null
)f order by f.expcreatetime;

/* modifcation 2, extract based on policy exp date and med pay */

 select f.*,(f.expcreatetime-f.createtime) days,(f.expcreatetime-f.createtime)*24*60 min  from(
select c.*, (select name from cctl_coveragetype where id=cov.type) as covtype,
e.publicid, 
(select vin||'-'||model||'-'|| make from cc_vehicle where id=(( select vehicleid from cc_riskunit where id=cov.riskunitid))) as vehicle,
(select name from cctl_exposuretype where id=e.exposuretype) as exposuretype,e.createtime as expcreatetime,
(select (select name from cctl_incident where id=subtype) as incidenttype  from cc_incident where id= e.incidentid) as incidenttype ,
(select (select name from cctl_losspartytype where id= i.injurylossparty_afi) as injuryParty   from cc_incident i where id= e.incidentid) as injuryPartyType 
from(
select c.id as ClaimId  ,c.createtime,p.id as PolicyId,p.expirationdate as policyexpdate,c.claimnumber, p.policynumber,(select name from cctl_policytype where id=policytype) as policytype
from cc_claim c, cc_policy p where  p.id= c.policyid 
)c
inner join cc_coverage cov
on cov.policyid=c.policyid 
left join cc_exposure e on e.coverageid=cov.id
where c.claimnumber in ('01-020-049578') 
and e.exposuretype is not null)f-- where f.covtype like 'Med%' 
order by f.policyexpdate desc;

--Padma Query

select clm.claimnumber, (Select name from PRDAA81N.cctl_lobcode where id = clm.lobcode)as ClaimLobCode, exp.autoassignmentrulenm_afi as AssmtRule, 
(Select name from PRDAA81N.cctl_exposuretype where id = exp.exposuretype)  as exposuretype,
 (select firstname from PRDAA81N.cc_contact where id=  exp.claimantdenormid ) as claimantFName,
 (select lastname from PRDAA81N.cc_contact where id=  exp.claimantdenormid ) as claimantLName, exp.createtime as Exposure_Createtime,
(select (select name from PRDAA81N.cctl_incident where id=subtype) as incidenttype  from PRDAA81N.cc_incident where id= exp.incidentid) as incidenttype ,
(select (select name from PRDAA81N.cctl_losspartytype where id= i.injurylossparty_afi) as injuryParty   from PRDAA81N.cc_incident i where id= exp.incidentid) as injuryPartyType ,
(Select firstname from PRDAA81N.cc_contact where id = exp.assigneduserid) as Exp_assignedUSer_FName,
(Select lastname from PRDAA81N.cc_contact where id = exp.assigneduserid) as Exp_assignedUSer_LName,
exp.claimorder, (select name from PRDAA81N.cctl_exposurestate where id = exp.state) as ExposreState ,
exp.assigneduserid, (select prdaa81n.cc_user.proxyuserind_afi from PRDAA81N.cc_user where id = exp.assigneduserid) as proxyUser
,exp.loadcommandid, exp.coveragesubtype, (select name from PRDAA81N.cctl_coveragesubtype where id = exp.coveragesubtype) as CovSubType
from PRDAA81N.cc_claim clm, PRDAA81N.cc_exposure exp
where exp.claimid = clm.id and clm.claimnumber ='01-001-886327'; 




 select * from PRDAA81N.cc_history where claimid = 2546560 order by eventtimestamp;



/* 
=====================================================================================================
Based on claim number, find policy number, type of policy , loss type and lob code */


select c.id,c.claimnumber, p.policynumber,(select name from PRDAA81N.cctl_policytype where id=p.policytype) as policytype,
(select name from PRDAA81N.cctl_losstype where id=c.losstype) as "LOSS TYPE",(select name from PRDAA81N.cctl_lobcode where id=c.lobcode) as "LOB CODE"
 from
 PRDAA81N.cc_claim c, PRDAA81N.cc_policy p
 where c.policyid=p.id and c.claimnumber='235-53-365870';
 
 /* 
=====================================================================================================
Based on claim number, find user and group assigned to the claim */
 
 
select assignedgroupid,assigneduserid, con.firstname, con.lastname, g.name as "GROUP" from cc_claim c 
inner join
cc_user u on u.id=c.assigneduserid
inner join cc_contact con
on con.id=u.contactid
inner join cc_group g
on g.id=c.assignedgroupid
where claimnumber='235-53-365870';

 /* 
=====================================================================================================
Find policy number based on column subquery -different way */


 select id , claimnumber , policyid  , (select policynumber from cc_policy p  
 where p.id=c.policyid) as POLICYNUMBER from cc_claim c where claimnumber='235-53-365870'; 
 
 /*
  Getting information from message history table */
  
  select * from PRDAA81N.cc_messagehistory where 
  claimid=(select id from PRDAA81N.cc_claim where claimnumber='01-001-887219');
  select (select claimnumber from cc_claim where id=m.claimid) as claimnumber, m.ObjectKey,m.creationtime,m.payload, m.description, m.destinationid ,
(select description from cctl_errorcategory where id=m.errorcategory) as errorcategory,m.errordescription,m.eventname,m.retrycount,m.sendorder,m.sendtime,m.status,
(select firstname from cc_contact where id=(select contactid from cc_user where id=m.userid)) as users
from cc_messagehistory m  where  claimid in (select id from cc_Claim where claimnumber='01-199-000071' ) and destinationid=24 order by creationtime desc;









 




