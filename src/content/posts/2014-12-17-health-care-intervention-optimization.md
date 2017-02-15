---
slug: 2014-12-17-health-care-intervention-optimization
title: "Health Care Intervention Optimization"
template: post.hbs
date: 2015-02-14
categories: ["Intervention Optimization", "Population Health Management"]
author: Sebastian Kropp
---

The health care system in the US is changing rapidly. The Affordable Care Act introduced regulations requiring health insurers and providers to change at an unprecedented pace.

## Enterprise Architecture Model
Enterprise Architecture (EA) can help to accelerate meaningful change in health organizations. In this example I am highlighting parts of an EA model focused on intervention optimization and planning. This high level business model shows only parts of the core processes of a health plan/insurer and does not highlight underlying and cross cutting functionalities like Security and Data Analytics. I used this model to developed the *Intervention Optimization Engine*, which can be tried out <a href="/public/intervention-optimization-engine/" target="_blank">here</a>.

**Intervention Optimization** is down-stream of processes which are identifying gaps. Gap identification requires ever more sophisticated data analytic and predictive analytic capabilities. 

<figure class="floatCenter">
	<img src="/images/healthcare/gap-intervention-process.png" alt="Gap Intervention Process">
	<figcaption>Gap Intervention Process</figcaption>
</figure>

<!--fold-->

**Data Integration**: Involves processes around health care data transformation, inbound and outbound data, internal interfaces, and data quality. Examples are EHR integration, HHS/CMS reporting, intake of administrative and claims data, HIPAA 5010 ([ASC X12](http://x12.org/), 837 Claims), [HL7](https://en.wikipedia.org/wiki/Health_Level_7), and others.

**Quality Measure Gap Identification**: Quality measures are developed by institutions like [NCQA](http://www.ncqa.org/), [URAC](https://www.urac.org/), [PQA](http://www.pqaalliance.org/), and others. Optimizing interventions for these gaps is increasingly important, not only to promote the quality of care but also because they have a direct influence on reimbursements and risk adjustments ([Five-Star Quality Rating](http://www.cms.gov/Medicare/Provider-Enrollment-and-Certification/CertificationandComplianc/FSQRS.html) and [HEDIS]( https://en.wikipedia.org/wiki/Healthcare_Effectiveness_Data_and_Information_Set) ). 

**Risk Adjustment Gap Identification**: Risk Adjustment uses predictive analytics to identify gaps between what is reported to HHS/CMS for adjustment purposes. These approach is the same among commercial HIE or Medicare/Medicate plans (RAPS).

**Intervention Optimization**: Every intervention has a cost and a potential value for closing the gap. Optimizing on this is also constrained by several rules. Goal is to calculate the optimal execution plan for a given budget over the whole population.

**Intervention Execution**: After finding out which gaps are going to be intervened upon, the intervention itself happens. Result from that intervention feeds back into the analytical cycle.

## Data Model
What are gaps and how do they relate to interventions? Let us start laying the foundation with modeling subject areas and the data model to support the common vocabulary/taxonomy:

<figure class="floatCenter">
	<img src="/images/healthcare/gap-intervention-data-model.png" alt="Intervention Gap Data Model">
	<figcaption>Intervention Gap Data Model</figcaption>
</figure>

Member: This is an individual person that is or has been enrolled with a health plan. CMS calls them beneficiaries and provider refer to them as patients. Choose the right level for your setting.

Gap: Gap is an identified undesirable state. It could be a gap in care or an information gap. Examples are that a member has not received a Mammogram

## Intervention Optimization Engine
Admittedly this model is more targeting health plans, but with minor changes it could equally fit ACO models or data analytic vendors. Please try out the **Intervention Optimization** Engine that I developed. Features are:

<a href="/public/intervention-optimization-engine/" target="_blank">Intervention Optimization Engine</a>
