import{Q as V}from"./QItemLabel-B8zpboOh.js";import{s as z,cB as Q,d2 as $,m as x,p as S,aq as K,b6 as X,d3 as Z,d4 as ee,bN as te,K as oe,j as ne,a0 as ae,k as m,W as ie,V as re,b0 as L,ao as se,a2 as ce,a3 as D,a4 as q,a5 as A,a8 as g,a6 as u,aF as U,ca as le,aa as W,ai as H,ah as B,T as de,q as G,aj as Y,b8 as he,ad as ue,ae as pe,af as fe,ag as me,aA as ge}from"./index-0xuQLnK1.js";import{Q as ye}from"./QList-D7xKfUOs.js";import{Q as be}from"./QPage-Qwy0HFkw.js";import{u as ve}from"./useMetaTags-D57AB7ol.js";import"./package-D9JPNs5w.js";const we=z({name:"QBreadcrumbsEl",props:{...Q,label:String,icon:String,tag:{type:String,default:"span"}},emits:["click"],setup(t,{slots:d}){const{linkTag:I,linkAttrs:o,linkClass:p,navigateOnClick:f}=$(),h=x(()=>({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(t.disable!==!0?"q-link--focusable"+p.value:"q-breadcrumbs__el--disable"),...o.value,onClick:f})),c=x(()=>"q-breadcrumbs__el-icon"+(t.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const s=[];return t.icon!==void 0&&s.push(S(K,{class:c.value,name:t.icon})),t.label!==void 0&&s.push(t.label),S(I.value,{...h.value},X(d.default,s))}}}),Ae=["",!0],Ie=z({name:"QBreadcrumbs",props:{...Z,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:t=>["none","xs","sm","md","lg","xl"].includes(t),default:"sm"}},setup(t,{slots:d}){const I=ee(t),o=x(()=>`flex items-center ${I.value}${t.gutter==="none"?"":` q-gutter-${t.gutter}`}`),p=x(()=>t.separatorColor?` text-${t.separatorColor}`:""),f=x(()=>` text-${t.activeColor}`);return()=>{if(d.default===void 0)return;const h=te(oe(d.default));if(h.length===0)return;let c=1;const s=[],P=h.filter(r=>r.type!==void 0&&r.type.name==="QBreadcrumbsEl").length,y=d.separator!==void 0?d.separator:()=>t.separator;return h.forEach(r=>{if(r.type!==void 0&&r.type.name==="QBreadcrumbsEl"){const C=c<P,J=r.props!==null&&Ae.includes(r.props.disable),a=(C===!0?"":" q-breadcrumbs--last")+(J!==!0&&C===!0?f.value:"");c++,s.push(S("div",{class:`flex items-center${a}`},[r])),C===!0&&s.push(S("div",{class:"q-breadcrumbs__separator"+p.value},y()))}else s.push(r)}),S("div",{class:"q-breadcrumbs"},[S("div",{class:o.value},s)])}}}),Ce=`# Legal Information

Last Modified: Jun. 5, 2025

## Security as Company Value

Jina AI GmbH's security & compliance principles guide how we deliver our products and services, enabling people to simply and securely access the digital world.

#### Secure Personnel

Jina AI GmbH takes the security of its data and that of its clients and customers seriously and ensures that only vetted personnel are given access to their resources.

All Jina AI GmbH contractors and employees undergo background checks prior to being engaged or employed by us in accordance with local laws and industry best practices.

Confidentiality or other types of Non-Disclosure Agreements (NDAs) are signed by all employees, contractors, and others who have a need to access sensitive or internal information.

We embed the culture of security into our business by conducting employee security training & testing using current and emerging techniques and attack vectors.

### Secure Development

All development projects at Jina AI GmbH, including on-premises software products, support services, and our own Digital Identity Cloud offerings follow secure development lifecycle principles.

All development of new products, tools, and services, and major changes to existing ones, undergo a design review to ensure security requirements are incorporated into proposed development.

All team members that are regularly involved in any system development undergo annual secure development training in coding or scripting languages that they work with as well as any other relevant training.

Software development is conducted in line with [OWASP Top 10](https://owasp.org/www-project-top-ten/) recommendations for web application security.

### Secure Testing

Jina AI GmbH deploys third party penetration testing and vulnerability scanning of all production and Internet facing systems on a regular basis.

All new systems and services are scanned prior to being deployed to production.

We perform penetration testing both by internal security engineers and external penetration testing companies on new systems and products or major changes to existing systems, services, and products to ensure a comprehensive and real-world view of our products & environment from multiple perspectives.

We perform static and dynamic software application security testing of all code, including open source libraries, as part of our software development process.

### Cloud Security

Jina AI GmbH Cloud provides maximum security with complete customer isolation in a modern, multi-tenant cloud architecture.

Jina AI GmbH Cloud leverages the native physical and network security features of the cloud service, and relies on the providers to maintain the infrastructure, services, and physical access policies and procedures.

All customer cloud environments and data are isolated using Jina AI GmbH’s patented isolation approach. Each customer environment is stored within a dedicated trust zone to prevent any accidental or malicious co-mingling.

All data is also encrypted at rest and in transmission to prevent any unauthorized access and prevent data breaches. Our entire platform is also continuously monitored by dedicated, highly trained Jina AI GmbH experts.

We separate each customer's data and our own, utilizing unique encryption keys to ensure data is protected and isolated.

Client’s data protection complies with SOC 2 standards to encrypt data in transit and at rest, ensuring customer and company data and sensitive information is protected at all times.

We implement role-based access controls and the principles of least privileged access, and review revoke access as needed.

### Compliance

Jina AI GmbH is committed to providing secure products and services to safely and easily manage billions of digital identities across the globe. Our external certifications provide independent assurance of Jina AI GmbH's dedication to protecting our customers by regularly assessing and validating the protections and effective security practices Jina AI GmbH has in place.

### SOC 2 Type 1

Jina AI GmbH successfully completed the AICPA Service Organization Control (SOC) 2 Type I audit. The audit confirms that Jina AI GmbH's information security practices, policies, procedures, and operations meet the SOC 2 standards for security.

Jina AI GmbH was audited by [Prescient Assurance](https://www.prescientassurance.com/), a leader in security and compliance certifications for B2B, SAAS companies worldwide. Prescient Assurance is a registered public accounting in the US and Canada and provide risk management and assurance services which includes but not limited to SOC 2, PCI, ISO, NIST, GDPR, CCPA, HIPAA, CSA STAR etc. For more information about Prescient Assurance, you may reach out them at info@prescientassurance.com.

An unqualified opinion on a SOC 2 Type I audit report demonstrates to the Jina AI GmbH's current and future customers that they manage their data with the highest standard of security and compliance.

Customers and prospects can request access to the audit report via [/contact-sales](/contact-sales).

### SOC 2 Type 2
Jina AI GmbH successfully completed the AICPA Service Organization Control (SOC) 2 Type II audit. The audit confirms that Jina AI GmbH’s information security practices, policies, procedures, and operations meet the SOC 2 standards for security.

Jina AI GmbH was audited by Prescient Assurance , a leader in security and compliance certifications for B2B, SAAS companies worldwide. Prescient Assurance is a registered public accounting in the US and Canada and provide risk management and assurance services which includes but not limited to SOC 2, PCI, ISO, NIST, GDPR, CCPA, HIPAA, CSA STAR etc. For more information about Prescient Assurance, you may reach out them at info@prescientassurance.com

An unqualified opinion on a SOC 2 Type II audit report demonstrates to the Jina AI GmbH’s current and future customers that they manage their data with the highest standard of security and compliance.

Customers and prospects can request access to the audit report via [/contact-sales](/contact-sales).

<div class="row justify-around q-my-xl">
<img class="security-img" src="/soc2-type1.png"/>
<img class="security-img" src="/soc2-type2.png"/>
  <img class="security-img" src="/21972-312_SOC_NonCPA_Blk.svg"/>
  <img class="security-img" src="/security2.png"/>
</div>

## Terms and Conditions

### 1\\. Scope and Subject Matter

1.1 These terms and conditions (hereinafter referred to as "TCs") govern the legal relationship between you (the “Customer” or “you”) and Jina AI GmbH, Prinzessinnenstraße 19-20, 10969 Berlin, Germany ("Jina AI", “we” or “us”) when you access and use our services, including any content, functionality, software, application programming interface, tool, data, documentation, websites and services offered on or through Jina AI (the “Services”). These TCs shall apply exclusively; deviating Customer terms shall not apply except if we have expressly confirmed their application in writing.

1.2 These TCs (as updated from time to time) shall also govern all future transactions between you and us.

1.3 The Services to be provided by Jina AI are set out in product descriptions (the “Product Descriptions” as updated from time to time) in the online ordering pages (for Services ordered through our website, the “Online Services”) or a separate written order form which has been agreed between the Parties (together the "Order Form"). The Order Form has precedence over the terms of these TCs.

1.4 The Order Form submitted by the Customer to Jina AI shall constitute a binding offer to enter into a contract with Jina AI on the provision of the Services identified in the Order Form. Jina AI can accept such offer (and thereby establish a binding contract) by providing the Customer with a corresponding order confirmation or by way of allowing the Customer the use of the Services online in case of Online Services.

### 2\\. Registration and Access

2.1 To use the Services Customers must register with Jina AI and create an account, providing all required data and information in an accurate and complete manner.

2.2 By registering, Customers agree to be fully responsible for all activities conducted through their account or using their access credentials.

2.3 Jina AI reserves the right, at its own discretion, to suspend or delete at any time and without notice, Customer accounts which it deems inappropriate, offensive or in violation of these TCs.

### 3\\. Services of Jina AI

3.1 Jina AI will provide the Services as specified in the Order Form and in accordance with the respective Product Description. Jina AI shall be entitled to determine the manner and means of performing and providing the Services at its own reasonable discretion, provided that the Services shall meet the material requirements as set out in the Product Description. Unless expressly agreed otherwise in the Order Form, the statutory terms for works contracts shall not apply to the Services and they shall not be subject to an acceptance procedure.

3.2 Unless expressly agreed otherwise in the Order Form, the Services are standard services which Jina AI makes available in a standard format to multiple Customers. Jina AI may from time to time improve, modify, extend and enhance the Services (while retaining their core functions as specified in the Product Description). In that case, Jina AI will update the Product Description accordingly and notify the Customer of such changes reasonably in advance of their implementation.

3.3 Dates and time periods set out in the Order Form or communicated otherwise by Jina AI are non-binding estimates unless it is expressly agreed between the parties in text form that they are binding.

3.4 Jina AI may temporarily suspend the Customer’s access to the Services if and in so far as Jina AI reasonably considers such suspension to be required to stop or reduce a material risk to the Services or the Jina AI platforms or systems used to provide the Services (the "Jina AI Systems") or any Customer systems or data. Jina AI will inform the Customer of such suspension without undue delay and will reinstate the Customer’s access to the Services as soon as the risk does no longer apply.

3.5 The Services of Jina AI are designed only as a tool using artificial intelligence. No specific Output are owed by Jina AI to the user when using the Services. The Services do not claim to meet all Customer expectations for every situation. The Output made available to the user when using the Services therefore do not claim to be complete, accurate or true. Any of such Output must therefore be reviewed by the Customer for its use case and the Output does not replace the Customer's own considerations, evaluations and actions.

3.6 To the extent Jina AI provides Customer the right to use Jina AI’s application programming interfaces (“APIs”), access shall be granted via respective API keys managed by Customer. Customer shall be solely responsible for safeguarding its API keys, including preventing unauthorized access and revoking keys that are no longer needed or are suspected to be compromised. Customer shall be liable for all activities performed using its API keys, including the activities of any end user. Jina AI shall not be liable for any loss, damage, or unauthorized use resulting from Customer’s failure to adequately protect its API keys.

### 4\\. Intellectual Property Rights

4.1 All software, data bases, websites, search results, documents, information, algorithms, processes, prototypes, ideas, knowhow, patents, trademarks or other work results (“IP”) used by Jina AI to provide the Services or made available to the Customer by Jina AI are owned by Jina AI or its licensors (“Jina AI IP”). Jina AI does not grant any licenses in the Jina AI IP or any other rights to use the Jina AI IP to the Customer.

4.2 Where Jina AI as part of its Services makes Jina AI IP available to the Customer, Jina AI grants the Customer (subject to the payment of the Service Charges, cf. Section 6 of these TCs) a non-exclusive, non-sublicensable, non-transferable, revocable and limited right to use such Jina AI IP strictly for the purpose of using the Services agreed in an Order Form and for the term set out in Section 11. Any other rights of the Customer in the Jina AI IP are excluded. Nothing in these TCs shall limit or exclude Jina AI's right to use the Jina AI IP or any other materials developed, used or provided by Jina AI under these TCs for its own business purposes or for other customers.

4.3 Where as an outcome of the Customer’s use of the Services certain results (e.g. pictures, text, software, graphics, presentations, documents, data, works of art, or IP) are created through the Services (collectively, the “Output”), Jina AI (except as expressly stated otherwise herein) claims no rights to such Output and imposes no restrictions on the Customer regarding the use of the Output unless otherwise agreed in an agreement with the Customer. To the extent that the Output consists of extracted or restructured content from existing third-party materials (e.g. websites, PDF files, search results, collectively the “Material”), the Customer acknowledges that any third party intellectual property rights in the underlying Material remain unaffected. Jina AI does not create original content through the Services and does not claim authorship or ownership of the Output. The Customer shall be solely responsible for such Output and its compliance with applicable law and applicable third party rights. In particular, Jina AI does not warrant that any Output is free of, or does not infringe, third party rights.

4.4 The Customer must ensure that any information, pictures, text, software, graphics, presentations, documents, work results, IP or other data the Customer provides in the course of using the Services (collectively “Input”), e.g. Input that the Customer uploads to Jina AI or processes through the Services, comply with all applicable laws and regulations, the terms of these TCs, and are not illegal, immoral or defamatory (e.g. do not include defamatory, pornographic, racist or violent content). The Customer confirms and commits that the Input and its use with the Services does not infringe any third party intellectual property or privacy rights and that the Customer is entitled to use the Input with the Services. In particular, the Customer shall be solely responsible for ensuring that any Material accessed or submitted for processing via the Services are lawfully accessible and do not violate applicable copyright or database rights. Jina AI does not verify the legality of such sources. If the Customer breaches its obligations under this Section 4.4., Jina AI may remove, delete or block the Input at its own discretion and, without prior notice, deny the Customer access to the Services.

4.5 Customers must not (i) reverse engineer, decompile, translate or otherwise attempt to discover the source code or underlying components of the Services or Jina AI’s IP (except to the extent permitted under applicable mandatory law); (ii) use the Services in a way that infringes, misappropriates or violates any third party rights; (iii) use any Output from the Services to develop applications or services that compete with the Services offered by Jina AI; or (iv) use automated methods to extract information, data or result from the JINA-AI website or the Services, including by means of scraping, harvesting, or web data extraction.

4.6 Unless agreed otherwise (e.g. in these TCs) Jina AI will only store Input or Output on its servers to the extent required to provide the Services.

4.7 In the provision of the Services (and without prejudice to Section 4.2 above), Jina AI may use open source software components which may be subject to specific open sources license terms. Where relevant for the Customer, Jina AI will disclose such open source license terms to the Customer.

### 5\\. Customer Obligations

5.1 The Customer shall use the Services solely for the purposes established in the respective Order Form and Product Description.

5.2 The Customer shall reasonably support Jina AI in the provision of the Services as further set out in the Product Description. In addition, the Customer shall provide Jina AI with access to Customer's information, data, systems, personnel and premises as reasonably required by Jina AI for the provision of the Services. The Customer shall make decisions and provide feedback relating to the Services within a reasonable time period after receipt of a corresponding request by Jina AI.

5.3 Where to use the Services the Customer needs to connect to Jina AI Systems or platforms the Customer is responsible for establishing and maintaining the data connection between the interface of the relevant Jina AI Systems to the internet and the Customer’s systems.

5.4 If the Customer fails to perform the Customer obligations, then the obligations of Jina AI which cannot be rendered without such Customer performance (or only by incurring disproportionate additional expenses) shall be suspended for the duration of such default and a reasonable start-up period. Additional expenses reasonably incurred by Jina AI shall be reimbursed by the Customer on a time and material basis applying the rates set out in the Order Form.

### 6\\. Service Charges, Terms of Payment and Credits

6.1 The Customer shall pay the fees for the Services as set out in the Order Form ("Service Charges"). Unless stated otherwise in the Order Form are exclusive of applicable VAT which the customer shall pay in addition to the Service Charges.

6.2 Jina AI will invoice recurring lump sum Service Charges in advance prior to the beginning of the time period to which they relate (”Service Period”). If applicable, Service Charges for time & material services will be invoiced monthly in arrears.

6.3 If applicable, expenses and disbursements shall be invoiced additionally in accordance with the principles set out in the Order Form. Where Service Charges are invoiced on a time & material basis, Jina AI will charge units of 15 minutes; travel time shall be chargeable as working time.

6.4 Unless otherwise agreed in the Order Form, invoices are due for payment within 14 days of receipt of the invoice by the Customer.

6.5 For certain Services the Customer receives from Jina AI a specific number of credits as set out in the Order Form (“Credits”). The Customer may use these Credits for obtaining Services during the respective Service Period. The Customer may roll over remaining Credits to the next Service Period, unless expressly agreed otherwise in the Order Form. If the Credits are used up, the Customer can purchase additional Credits; details are set out in the Order Form. The credits purchased by the client are not refundable nor exchangeable. The Credit System and the measurement of individual Credits may differ depending on the type of Service.

### 7\\. Defects

7.1 Services provided by Jina AI will essentially comply with the description in the Order Form and the Product Description. However, the Services are subject to continuous modification and improvement. The parties therefore agree that the Services may contain errors and malfunctions and that they may not comply in all aspects with general market standards, public statements, announcements or advertisements by Jina AI. Jina AI provides the Services to Customer “as is” and except as expressly set out otherwise herein, the statutory liability for defects shall be excluded. The Customer acknowledges that the Services may not be fit for the purpose intended by the Customer, and that the Customer, being aware of this, uses the Services in its own responsibility and at its own risk.

7.2 If the Customer detects any defects in the Services, it shall notify Jina AI (in writing or text form) thereof without undue delay and shall provide a comprehensive description of the defects and the time and circumstances of their occurrence. Jina AI will use reasonable commercial efforts to (in its sole discretion) either remedy/correct the defect (if reasonable) or provide the affected Service (or part of the Service) again without defects and at no extra charge to the Customer. If an attempted remedy has failed for the third time, the Customer is entitled to reduce the Service Charge for the affected Service appropriately. Further claims for defects shall be excluded.

7.3 The Customer's rights due to defects are excluded, if the Customer has modified the Services or has not used the Services in accordance with the requirements set out in the Product Description or otherwise agreed between the parties, except if the Customer proves that the defect was not caused by such modification or non-compliance.

7.4 Jina AI may charge the Customer at the agreed rates for efforts and expenses incurred by Jina AI for the investigation or elimination of defects which were caused by the Customer or its delegates.

7.5 The limitation period for claims based on defects shall be 12 months from the occurrence of the defect, or (if the Service is subject to an acceptance) from Acceptance.

### 8\\. Limitation of Liability

8.1 Jina AI's liability for damages resulting from injury to life, limb or health as well as for intent, gross negligence and - insofar as applicable - in accordance with the German Product Liability Act (Produkthaftungsgesetz) shall be unlimited in accordance with the statutory provisions.

8.2 In cases of simple/normal negligence, Jina AI shall only be liable if essential contractual obligations ("cardinal obligations") have been breached and in these cases Jina AI's liability shall be limited to the damages which were reasonably foreseeable.

8.3 Jina AI's liability pursuant to Section 8.2 shall be limited to a total maximum amount equal to 50% of the Service Charges the Customer has paid to Jina AI for the Services during the 12 months period immediately preceding the damaging event. Except in the cases set out in Section 8.1, Jina AI's liability for indirect and consequential damages (including loss of profit) shall be excluded entirely.

8.4 The limitations of liability set forth in this Section 8 shall apply to all claims for damages or compensation under or in relation to the Services irrespective of the legal grounds of such claims.

8.5 Any other liability of Jina AI shall be excluded.

### 9\\. Indemnification
Customer shall indemnify, defend, and hold Jina AI harmless against any liabilities, damages, and costs (including reasonable attorneys’ fees) payable to a third party arising out of a third party claim related to Customer’s use of the Services in violation of these TCs, any Order Form or Input.

### 10\\. Confidentiality

10.1 Each party agrees that all information received from the other party under these TCs which is (i) marked as confidential or (ii) from an objective perspective must be considered to be confidential, shall be maintained in confidence and shall not be disclosed to others. The receiving party agrees that without the prior written consent of the other party it will not use such information for any purpose other than the fulfillment of this contract.

10.2 Each party shall use no lesser standard of care to protect the confidentiality of information received from the other party than it uses to protect its own confidential information, and shall limit disclosure of such information to those of its group companies, personnel and consultants who have an actual need to know for purposes related to this contract and who have a written obligation to protect the confidentiality of such information.

10.3 Upon termination of the contract, each party will return to the other party such party's confidential information and data and will delete all copies of such information/data under its and its subcontractors' control (subject to applicable retention requirements).

10.4 Jina AI shall, subject to applicable mandatory data protection requirements, be entitled to retain data uploaded to the Jina AI Systems or otherwise provided by the Customer or collected by Jina AI in the course of providing the Services and to use such data in anonymized/pseudonymized format for its business purposes including to improve its artificial intelligence applications.

### 11\\. Data Protection

11.1 Jina AI will comply with all applicable data protection requirements. Please see for further details the Jina AI Data Protection Policy under [Privacy Policy](/legal/#privacy-policy).

11.2 Where Jina AI in providing the Services acts as a data processor pursuant to Art. 28 GDPR, Jina AI and Customer will enter into a data processing agreement in accordance with the requirements of Art. 28 GDPR.

### 12\\. Term and Termination

12.1 The contract between Jina AI and the Customer enters into force upon Jina AI's acceptance of the Order Form submitted by the Customer. Unless agreed otherwise in the Order Form, the contract continues to apply for an indefinite period of time. It can be terminated by each party in writing with a notice period of four (4) weeks to the end of a calendar quarter. Any ordinary termination is excluded during any minimum contract term the parties may have agreed in the Order Form.

12.2 Each party's statutory right to terminate this contract for good cause with immediate effect shall remain unaffected. A breach of contract shall only entitle a party to terminate the contract for good cause if the other party has breached a material obligation and – provided that the breach is curable – has failed to cure the breach within a reasonable grace period of at least twenty working days from receipt of a corresponding written warning notice served by the terminating party.

### 13\\. Final Provisions

13.1 Collateral agreements and amendments to these TCs must be made in writing. This also applies to a waiver of this written form requirement. Where these TCs establish a written form requirement, text form shall be sufficient unless expressly provided otherwise (e.g. by reference to Section 126 German Civil Code).

13.2 Jina AI reserves the right to transfer, assign or dispose of by novation any or all rights or obligations under these T&Cs, taking the Customers’ legitimate interests into account. The Customer may not assign to any third party any of its rights under the contract in whole or in part without the prior written consent of Jina AI.

13.3 Jina AI shall be entitled to involve subcontractors in the provision of the Services.

13.4 Unless agreed otherwise in the Order Form, the place of performance for Services shall be the business seat of Jina AI.

13.5 Offsetting and retention rights of the Customer shall be excluded. This shall not apply if its corresponding counterclaims have been confirmed by a final court order or acknowledged by Jina AI in writing.

13.6 Jina AI shall be entitled to update and change these TCs from time to time. In this case, Jina AI will inform the Customer of such changes with a notice period of at least six (6) weeks before such changes become effective. If the Customer does not object in writing to the changes within four (4) weeks from receipt of the notice, the changes shall be deemed approved. If the Customer objects to the changes, the changes will not become effective between Jina AI and the Customer but Jina AI shall, within four (4) weeks from receipt of the objection, be entitled to terminate this contract with a notice period of six (6) weeks to the end of a month.

13.7 German law shall apply, excluding its conflict of laws rules and the UNCISG. The courts competent for Berlin shall have exclusive jurisdiction over all matters relating to these TCs.

13.8 If any provision of these TCs should be invalid in whole or in part or if these TCs contain any omission, the effectiveness of the remaining provisions shall not be affected. The invalid or omitted provision shall be replaced with retroactive effect by an effective and enforceable provision which most closely legally and financially approximates to what the parties intended or would have intended if they had taken such invalidity into account when agreeing these TCs.

## Privacy Policy

### Who we are

The data controller responsible in accordance with the purposes of the General Data Protection Regulation (GDPR) of the European Union and other data protection regulations is:

Jina AI GmbH

Prinzessinnenstraße 19-20, 10969 Berlin, Germany

030 224 88295

support@jina.ai

https://jina.ai/

### How to contact the data protection officer

The designated data protection officer is:

DataCo GmbH

Sandstr. 33,

80335 Munich

Germany

+49 89 7400 45840

[www.dataguard.de](https://www.dataguard.de)

### General information on data processing

On this page, we provide you with information regarding the processing of your personal data on our website.

How we collect and use your personal data will depend on how you interact with us or the services you use. We only collect, use or share your personal data where we have a legitimate purpose and a legal basis for doing so.

### What do we mean by 'legal basis'?

**Consent** (Art. 6(1)(a) GDPR) - You have given us your consent to process your personal data for the specific purpose we have explained to you. You have the right to withdraw your consent at any time. For further information on how to withdraw consent, please see the ‘Exercising your rights’ subsections in the subsequent sections of this Privacy Policy.

**Contract** (Art 6(1)(b) GDPR) - We need to use your data to fulfill a contract you have with us. Alternatively, it’s necessary to use your data because we have asked you to, or you have taken yourself, specific steps before entering that contract.

**Legal Obligation** (Art 6(1)(c) GDPR) - We need to use your data to comply with the law.

**Vital Interests** (Art 6(1)(d) GDPR) - Processing your data is necessary to protect your vital interests or of another person. For example, to prevent you from serious physical harm.

**Public Task** (Art 6(1)(e) GDPR) - Using your data is necessary for the performance of a task carried out in the public interest, or because it is covered by a task set out in law, for example, for a statutory function.

**Legitimate Interests** (Art 6(1)(f) GDPR) - Processing your data is necessary to support a legitimate interest we or another party has, only where this is not outweighed by your own interests.

Please note where your data is processed under the performance of a contract or for a legal obligation, if you do not provide the data requested, we may be unable to provide you with our app.

### Data sharing and international transfers

As explained throughout this Privacy Policy, we use various service providers to help us deliver our services and keep your data secure. When we use these service providers, it is necessary for us to share your personal data with them.

We have agreements in place with all our service providers that we share your data with that oblige them to protect your data.

Where your personal data is shared outside the EU, we ensure that your personal data is given an equivalent level of protection, either because the jurisdiction to which your data is transferred has an ‘adequate’ data protection standard according to the European Commission, or by using another safeguard such as an enhanced contractual agreement, i.e. Standard Contractual Clauses adopted by the European Commission (SCCs).

For example, where we use US service providers, we either rely on SCCs or the EU-US Data Protection Framework, depending on the specific provider. You can request a copy of SCCs we have concluded with our service providers by sending an email to the email address provided in this Privacy Policy.

### Your rights

When your personal data is processed, you are a data subject within the meaning of the GDPR and have the following rights:

#### 1\\. Right of access (Art. 15 GDPR)

You may request the data controller to confirm whether your personal data is processed by them.

If such processing occurs, you can request the following information from the data controller:

- Purposes of processing
- Categories of personal data being processed.
- Recipients or categories of recipients to whom the personal data have been or will be disclosed.
- Planned storage period or the criteria for determining this period
- The existence of the rights of rectification, erasure or restriction or opposition.
- The existence of the right to lodge a complaint with a supervisory authority.
- If applicable, origin of the data (if collected from a third party).
- If applicable, existence of automated decision-making including profiling with meaningful information about the logic involved, the scope and the effects to be expected.
- If applicable, transfer of personal data to a third country or international organization.

#### 2\\. Right to rectification (Art. 16 GDPR)

You have a right to rectification and/or modification of the data, if your processed personal data is incorrect or incomplete. The data controller must correct the data without delay.

#### 3\\. Right to the restriction of processing (Art. 18 GDPR)

You may request the restriction of the processing of your personal data under the following conditions:

- If you challenge the accuracy of your personal data for a period that enables the data controller to verify the accuracy of your personal data.
- The processing is unlawful, and you oppose the erasure of the personal data and instead request the restriction of their use instead.
- The data controller or its representative no longer need the personal data for the purpose of processing, but you need it to assert, exercise or defend legal claims; or
- If you have objected to the processing pursuant and it is not yet certain whether the legitimate interests of the data controller override your interests.

#### 4\\. Right to erasure ("Right to be forgotten") (Art. 17 GDPR)

If you request from the data controller to delete your personal data without undue delay, they are required to do so immediately if one of the following applies:

- Personal data concerning you is no longer necessary for the purposes for which they were collected or processed.
- You withdraw your consent on which the processing is based pursuant to and where there is no other legal basis for processing the data.
- You object to the processing of the data and there are no longer overriding legitimate grounds for processing, or you object pursuant to Art. 21 (2) GDPR.
- Your personal data has been processed unlawfully.
- The personal data must be deleted to comply with a legal obligation in Union law or Member State law to which the data controller is subject.
- Your personal data was collected in relation to information society services offered pursuant to Art. 8 (1) GDPR.

The right to deletion does not exist if the processing is necessary

- to exercise the right to freedom of speech and information;
- to fulfill a legal obligation required by the law of the Union or Member States to which the data controller is subject, or to perform a task of public interest or in the exercise of public authority delegated to the representative.
- for reasons of public interest in the field of public health.
- for archival purposes of public interest, scientific or historical research purposes or for statistical purposes.
- to enforce, exercise or defend legal claims.

#### 5\\. Right to data portability

You have the right to receive your personal data given to the data controller in a structured and machine-readable format. In addition, you have the right to transfer this data to another person without hindrance by the data controller who was initially given the data.

#### 6\\. Right to object

For reasons that arise from your particular situation, you have, at any time, the right to object to the processing of your personal data pursuant to Art. 6 (1) (e) or 6 (1) (f) GDPR; this also applies to profiling based on these provisions.

If the personal data relating to you are processed for direct marketing purposes, you have the right to object at any time to the processing of your personal data in regard to such advertising; this also applies to profiling associated with direct marketing.

#### 7\\. Right to complain to a supervisory authority

Without prejudice to any other administrative or judicial remedy, you have the right to lodge a complaint with a supervisory authority if you consider that the processing of personal data concerning you infringes the GDPR. The supervisory authority to which the complaint has been lodged shall inform the complainant of the status and outcome of the complaint, including the possibility of a judicial remedy under Art. 78 GDPR. A list of the locally competent supervisory authorities in Germany can be found on the website of the Federal Commissioner for Data Protection at the following link:

[https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html](https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html)

### Data processing when you load our website

#### 1\\. Description and scope of data processing

Each time our website is accessed, our system automatically collects data and relevant information from the computer system of the calling device.

The following data is collected:

- Information about the browser type and the version used
- The user's operating system
- Date and time of access

This data is stored in the log files of our system.

#### 2\\. Purpose of data processing

The temporary storage of the IP address by the system is necessary for the delivery of the website to the computer of the user. For this purpose, the user’s IP address must be kept for the duration of the session.

The storage in log files is done to ensure the functionality of the website. The data is also used to optimize the website and to ensure the security of our IT systems. An analysis of the data for marketing purposes does not take place.

#### 3\\. Legal basis for data processing

The legal basis for the temporary storage of data and logfiles is Art. 6 (1) (f) GDPR.

#### 4\\. Duration of storage

The data will be deleted as soon as it is no longer necessary for the purpose of its collection. The session is complete when the collection of data for the provision of the website is accomplished.

If the data is stored in log files, this is the case after seven days at the latest. Storage beyond this is possible. In this case, the IP addresses of the users are deleted or alienated so that an assignment of the calling client is not possible.

#### 5\\. Exercising your rights

The collection of data for the provision of the website and the storage of the data in log files is absolutely necessary for the operation of the website. The user can object to this. Whether the objection is successful is to be determined within the framework of a balancing of interests.

### Use of cookies

#### 1\\. Description and scope of data processing

When you visit our website, we use technical tools for various functions, in particular cookies, which can be stored on your device. When you visit our website for the first time and at any time later, you have the choice of whether you generally permit the setting of cookies or which individual additional functions you would like to select. You can make changes in your browser settings or via our consent manager. Cookies are text files or information in a database that are stored on your hard drive and assigned to the browser you are using so that certain information can be passed to the entity that sets the cookie. We use technically necessary cookies, which are required for the technical structure of the website. Without these cookies, our website cannot be displayed (completely correctly) or the support functions are not possible.

The following data is stored and transmitted in the technical necessary cookies:

- Language settings
- Log-in information
- Entered search terms
- Frequency of page views
- Use of website functionalities

We use cookies on our website that are not technically necessary. Technically unnecessary cookies are text files that are not only used for the functionality of the website, but also collect other data.

As a result, the following data will be processed:

- IP-address
- Internet user location
- Date and time of the website request
- Customization of advertisements to the user
- Tracking of the surfing behavior
- Linking the website visit with other social media platforms

#### 2\\. Purpose of data processing

The purpose of using technically necessary cookies is to ensure the functionality of our website. Some functions of our website cannot be offered without the use of cookies. For these, it is necessary that the browser is recognized even after a page change.

We need technical necessary cookies for the following purposes:

- Storage of language settings
- Storage of search queries
- Functionality of the website

The use of technically not necessary cookies is carried out for the purpose of improving the quality of our website, its content, and thus our reach and profitability. By setting these cookies, we learn how the website is used and can thus constantly optimize our offer. These cookies serve us particularly for the following purposes:

- Improving the quality of our website and its content. Through the analysis cookies, we learn how the website is used and thus can constantly optimize our offer.

#### 3\\. Legal basis for data processing

The regulations of the Telecommunications-Telemedia Data Protection Act (TTDSG) are relevant for the storage of information in the end user's terminal equipment and/or access to information already stored in the end user's terminal equipment. If the setting and reading of cookies is technically necessary, this is done to ensure the functionality of our website. In this case, the storage of and access to cookies on your terminal equipment is carried out on the basis of § 25(2)(2) TTDSG. This storage of and access to the information in your terminal equipment serves to facilitate your use of our website and to be able to offer you our services as you have requested. Some functions of our website also do not work without the use of these cookies and could therefore not be offered. The cookies are generally deleted after the session ends (e.g. logging out or closing the browser) or after the expiry of a specified duration. Information on different storage periods for cookies can be found in the following sections of this data protection declaration.

As far as cookies are set that are not technically necessary, this is done on the basis of your expressed consent, which you can provide via the cookie banner. The basis for storing and accessing information in this case is § 25(1) TTDSG in conjunction with. Art. 6(1)(1)(a), Art. 7 GDPR. You can withdraw your consent at any time with effect for the future or subsequently grant it again by configuring your settings for cookies accordingly. Alternatively, you can prevent the storage of cookies by making the appropriate settings in your browser software. Please note that the browser settings you make only affect the browser you are using. If personal data is processed following the storage of and access to the information on your terminal equipment, the provisions of the GDPR are relevant. Information on this can be found in the following sections of this privacy policy.

#### 4\\. Exercising your rights

You can revoke consent to the use of cookies and manage your consent preferences at any time when you click on “Privacy Settings”.

### Newsletter

#### 1\\. Description and scope of data processing

You can subscribe to a newsletter on our website free of charge. When subscribing for the newsletter, the data from the input mask is transmitted to us.

We collect the following data from you in order to provide this service:

- Email address

No data will be passed on to third parties in connection with data processing for the dispatch of newsletters. The data will be used exclusively for sending the newsletter.

#### 2\\. Purpose of data processing

The user's email address is collected to deliver the newsletter to the recipient.

Additional personal data as part of the registration process is collected to prevent misuse of the services or email address.

#### 3\\. Legal basis for data processing

The legal basis for the processing of data provided by the user after registration for the newsletter is Art. 6 (1) (a) GDPR if the user has given his consent.

#### 4\\. Duration of storage

The data will be deleted as soon as it is no longer necessary to achieve the purpose for which it was collected. The user's email address will therefore be stored as long as the newsletter subscription is active.

The other personal data collected during the registration process is generally deleted after a period of seven days.

#### 5\\. Exercising your rights

The subscription for the newsletter can be cancelled by the data subject at any time. For this purpose, every newsletter contains an opt-out link.

Through this, it is also possible to withdraw the consent to the storage of personal data collected during the registration process.

### Contact via Email

#### 1\\. Description and scope of data processing

You can contact us via the email address provided on our website. In this case, the personal data of the user transmitted with the email will be stored.

The data will be used exclusively for the processing of the conversation.

#### 2\\. Purpose of data processing

If you contact us via email, this also constitutes the necessary legitimate interest in the processing of the data.

#### 3\\. Legal basis for data processing

The legal basis for the processing of data transmitted in the course of sending an e-mail is Art. 6 (1) (f) GDPR. Our legitimate interest is to optimally answer your request that you send by e-mail.

If the purpose of the email contact is to conclude a contract, the additional legal basis for the processing is Art. 6 (1) (b) GDPR.

#### 4\\. Duration of storage

The data will be deleted as soon as it is no longer necessary to achieve the purpose for which it was collected. For personal data sent by email, this is the case when the respective conversation with the user has ended. The conversation ends when it can be concluded from the circumstances that the matter in question has been conclusively resolved.

The additional personal data collected during the sending process will be deleted after a period of seven days at the latest.

#### 5\\. Exercising your rights

You have the possibility to withdraw consent to the processing of their personal data at any time. If you contact us via email, you can object to the storage of his personal data at any time, by the following means:

contact us by email, support@jina.ai

In this case, all personal data stored while establishing contact will be deleted.

### Contact form

#### 1\\. Description and scope of data processing

A contact form is available on our website, which can be used for electronic contact. If you make use of this option, the data entered in the contact form will be transmitted to us and stored.

When sending the message, the following data will also be stored:

- Email address
- Last name
- First name
- Job Title, Company Size, Company Name, and Country
- Date and time

#### 2\\. Purpose of data processing

The processing of the personal data from the form as well as if you contact us by mail serves us exclusively for the purpose of establishing contact.

The other personal data processed during the sending process serve to prevent misuse of the contact form and to ensure the security of our information technology systems.

#### 3\\. Legal basis for data processing

The legal basis for the processing of data transmitted while sending an email is Art. 6 (1) (f) GDPR. Our legitimate interest is to provide you with the best possible response to the request you send to us via the contact form. If the purpose of the email contact is to conclude a contract, the additional legal basis for the processing is Art. 6 (1) (b) GDPR.

#### 4\\. Duration of storage

The data will be deleted as soon as they are no longer necessary to achieve the purpose for which they were collected. For the personal data from the contact form and those sent by email, this is the case when the respective conversation with the user has ended. The conversation ends when it can be inferred from the circumstances that the facts in question have been conclusively clarified.

The additional personal data collected during the sending process will be deleted after a period of seven days at the latest.

#### 5\\. Exercising your rights

If you contact us via the contact form or via email, you can object to the storage of your personal data at any time, by the following means:

contact us by email, support@jina.ai

In this case, all personal data stored while establishing contact will be deleted.

### Application via Email and Form

1\\. Description and scope of data processing

There is a form on our website which can be used for electronic job applications. If an applicant makes use of this possibility, the data entered in the input mask will be transmitted to us and stored. The data is:

- Title
- Last name
- First name
- Email address
- Salary expectations
- Information on education and training
- Language proficiencies
- Curriculum Vitae
- Certificates
- Data that you send us during the application process

Alternatively, you can send us your application by email. In this case, we collect your email address and the information you provide in the email.

After sending your application, you will receive confirmation of receipt of your application documents from us by email.

In addition, we offer an applicant/talent pool.

Your data will not be passed on to third parties. The data will be used exclusively for processing your application.

#### 2\\. Purpose of data processing

The processing of personal data from the application form serves us solely to process your application. If you contact us by email, this also constitutes the necessary legitimate interest in the processing of the data.

The other personal data processed during the sending process serve to prevent misuse of the application form and to ensure the security of our information technology systems.

#### 3\\. Legal basis for data processing

The legal basis for the processing of the data is the initiation of the contractual relationship at the request of the data subject, Art. 6 (1) (b) Alt. 1 GDPR and § 26 (1) BDSG (Federal Act of Data Protection).

The legal basis for the processing of data within the context of the applicant pool is the applicant's express consent, Art. 6 (1) (a) GDPR.

#### 4\\. Duration of storage

After completion of the application procedure, the data will be stored for up to 6 months. Your data will be deleted after 6 months at the latest. In the case that you have given your consent for us to store your data for a further 12 months, the total storage period will be 18 months. In the event of a legal obligation, the data will be stored within the framework of the applicable provisions.

The additional personal data collected during the sending process will be deleted after a period of seven days at the latest.

### Corporate web profiles on social networks

YouTube:

YouTube LLC, 901 Cherry Ave., San Bruno, CA 94066, United States

On our company profile we provide information and offer Youtube users the possibility of communication. If you carry out an action on our Youtube company profile (e.g. comments, contributions, likes etc.), you may make personal data (e.g. clear name or photo of your user profile) public. However, as we generally or to a large extent have no influence on the processing of your personal data by Youtube, we cannot make any binding statements regarding the purpose and scope of the processing of your data.

Our corporate profile in social networks is used for communication and information exchange with (potential) customers. We use the company's profile for:

- Products
- Community

Publications on the company profile can contain the following content:

- Information about products
- Information about services
- Contact with customers

Every user is free to publish personal data.

As far as we process your personal data in order to evaluate your online behavior, to offer you sweepstakes or to conduct lead campaigns, this is done on the basis of your express declaration of consent, Art. 6 (1) (a), Art. 7 GDPR. The legal basis for processing personal data for the purpose of communicating with customers and interested parties is Art. 6 (1) (f) GDPR. Thereby, our legitimate interest is to answer your request optimally or to be able to provide the requested information. If the aim of contacting you is to conclude a contract, the additional legal basis for the processing is Art. 6 (1) (b) GDPR.

The data generated on the company profile are not stored in our own systems.

You can object at any time to the processing of your personal data that we collect within the framework of your use of our Youtube corporate web profile and assert your rights as a data subject mentioned under IV. of this privacy policy. Please send us an informal email to support@jina.ai. For further information on the processing of your personal data by Youtube and the corresponding objection options, please click here:

YouTube: [https://policies.google.com/privacy?gl=DE&hl=en](https://policies.google.com/privacy?gl=DE&hl=en)

Twitter:

Twitter International Company, One Cumberland Place, Fenian Street, Dublin 2, Ireland

On our company profile we provide information and offer Twitter users the possibility of communication. If you carry out an action on our Twitter company profile (e.g. comments, contributions, likes etc.), you may make personal data (e.g. clear name or photo of your user profile) public. However, as we generally or to a large extent have no influence on the processing of your personal data by Twitter, we cannot make any binding statements regarding the purpose and scope of the processing of your data.

Our corporate profile in social networks is used for communication and information exchange with (potential) customers. We use the company's profile for:

- Products
- Community

Publications on the company profile can contain the following content:

- Information about products
- Information about services
- Contact with customers

Every user is free to publish personal data.

As far as we process your personal data in order to evaluate your online behavior, to offer you sweepstakes or to conduct lead campaigns, this is done on the basis of your express declaration of consent, Art. 6 (1) (a), Art. 7 GDPR. The legal basis for processing personal data for the purpose of communicating with customers and interested parties is Art. 6 (1) (f) GDPR. Thereby, our legitimate interest is to answer your request optimally or to be able to provide the requested information. If the aim of contacting you is to conclude a contract, the additional legal basis for the processing is Art. 6 (1) (b) GDPR.

The data generated on the company profile are not stored in our own systems.

You can object at any time to the processing of your personal data that we collect within the framework of your use of our Twitter corporate web profile and assert your rights as a data subject mentioned under IV. of this privacy policy. Please send us an informal email to support@jina.ai. For further information on the processing of your personal data by Twitter and the corresponding objection options, please click here:

Twitter: [https://twitter.com/de/privacy](https://twitter.com/de/privacy)

### Use of corporate profiles in professionally oriented networks

#### 1\\. Scope of data processing

We use corporate profiles on professionally oriented networks. We maintain a corporate presence on the following professionally oriented networks:

- LinkedIn

On our site we provide information and offer users the possibility of communication.

The corporate profile is used for job applications, information, public relations, and active sourcing.

We do not have any information on the processing of your personal data by the companies jointly responsible for the corporate profile. Further information can be found in the privacy policy of:

LinkedIn:

LinkedIn:[https://www.linkedin.com/legal/privacy-policy](https://www.linkedin.com/legal/privacy-policy)

If you carry out an action on our company profile (e.g. comments, contributions, likes etc.), you may make personal data (e.g. clear name or photo of your user profile) public.

#### 2\\. Legal basis for data processing

The legal basis for the processing of personal data for the purpose of communication with customers and interested parties is Art. 6 (1) (f) GDPR. Our legitimate interest is to answer your request optimally or to be able to provide the requested information. If the aim of contacting you is to conclude a contract, the additional legal basis for the processing is Art. 6 (1) (b) GDPR.

#### 3\\. Purpose of the data processing

Our corporate web profile serves to inform users about our services. Every user is free to publish personal data.

#### 4\\. Duration of storage

The data generated on the company profile are not stored in our own systems.

#### 5\\. Exercising your rights

You can object at any time to the processing of your personal data which we collect within the scope of your use of our corporate web profile and assert your rights as a data subject mentioned under IV. of this privacy policy. Please send us an informal email to the email address stated in this privacy policy.

You can find further information on objection and removal options here:

LinkedIn:

[https://www.linkedin.com/legal/privacy-policy](https://www.linkedin.com/legal/privacy-policy)

### Hosting

The website is hosted on servers of a service provider commissioned by us.

Our service provider is:

GitHub 88 Colin P Kelly Jr Street San Francisco, California 94107

For further information on the processing of personal data by Github please see:

[https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement)

The servers automatically collect and store information in so-called server log files, which your browser automatically transmits when you visit the website. The stored information is:

- Information about the browser type and the version used
- The user's operating system
- Date and time of access
- The Internet service provider of the user
- Websites from which the user's system accessed our website
- Websites the user's system accessed through our website
- IP address of the user's device

This data will not be merged with other data sources. The data is collected on the basis of Art. 6 (1) (f) GDPR. The website operator has a legitimate interest in the technically error-free presentation and optimization of his website -and server log files are therefore recorded.

The server of the website is geographically located in the USA.

The Service Provider complies with the EU-U.S. Data Privacy Framework (EU-U.S. DPF) as set forth by the U.S. Department of Commerce and has certified that it adheres to the EU-U.S. Data Privacy Framework Principles (EU-U.S. DPF Principles) when processing personal data received from the European Union in reliance on the EU-U.S. DPF. More information can be found in at:

[https://www.dataprivacyframework.gov/s/participant-search/participant-detail?id=a2z3d0000001wwUAAQ&status=Active](https://www.dataprivacyframework.gov/s/participant-search/participant-detail?id=a2z3d0000001wwUAAQ&status=Active)

### Geotargeting

We use the IP address and other information provided by the user (e.g. the postal code used for registration or ordering) to approach regional target groups (so-called "geotargeting").

The regional target group approach is used, for example, to automatically display regional offers or advertisements that often are more relevant to users. The legal basis for the use of the IP address and any other information provided by the user (e.g. postal code) is Art. 6 (1) (f) GDPR, based on our legitimate interest in ensuring a more precise target group approach and thus providing offers and advertising with greater relevance for our users.

Part of the IP address and the additional information provided by the user (e.g. postal code) are merely processed and not stored separately.

You can prevent geotargeting by, for example, using a VPN or proxy server that prevents accurate localization. In addition, depending on the browser you are using, you can also deactivate a location localization in the corresponding browser settings (as far as this is supported by the respective browser).

We use geotargeting on our website for the following purposes:

- Products

### Registration

#### 1\\. Description and scope of data processing

We offer users the opportunity to register by providing personal data. The data is entered into a form and transmitted to us and stored. The following data is collected as part of the registration process:

- Email address

As part of the registration process, your consent to the processing of this data is obtained.

#### 2\\. Purpose of data processing

A registration of the user is necessary for the fulfilment of a contract with the user or for the execution of pre-contractual measures.

#### 3\\. Legal basis for data processing

The legal basis for the processing of the data is Art. 6 (1) (a) GDPR where you have provided consent.

The legal basis for the processing of registration data necessary to conclude or fulfil a contract with you is Art. 6 (1) (b) GDPR.

#### 4\\. Duration of storage

The data will be deleted as soon as it is no longer necessary to achieve the purpose for which it was collected.

This is the case for the data collected during the registration process for the execution of a contract or for the implementation of pre-contractual measures if the data is no longer required for the execution of the contract. Even after the conclusion of the contract, it may be necessary to store personal data of the contractual partner in order to comply with contractual or legal obligations.

#### 5\\. Exercising your rights

As a user you have the possibility to cancel the registration at any time. You can request a change to the data stored about you at any time, by the following means:

The user should reach out to our support team at support@jina.ai to delete their account or change their data.

If the data is necessary for the fulfilment of a contract or for the implementation of pre-contractual measures, a premature deletion of the data is only possible insofar as contractual or legal obligations do not stand in the way of a deletion.

### Content Delivery Networks

#### 1\\. Description and scope of data processing

On our website we use functions of the content delivery network CloudFlare of CloudFlare Germany GmbH, Rosental 7, 80331 Munich, Germany (Hereinafter referred to as CloudFlare). A Content Delivery Network (CDN) is a network of regionally distributed servers connected via the Internet to deliver content, especially large media files such as videos. CloudFlare offers web optimization and security services that we use to improve the load times of our website and to protect it from misuse. When you visit our website you will be connected to the servers of CloudFlare, e.g. to retrieve content. This allows personal data to be stored and evaluated in server log files, the user's activity (e.g. which pages have been visited) and device and browser information (e.g. IP address and operating system). Further information on the collection and storage of data by CloudFlare can be found here:

[https://www.cloudflare.com/en-gb/privacypolicy/](https://www.cloudflare.com/en-gb/privacypolicy/)

#### 2\\. Purpose of data processing

The use of CloudFlare's features serves to deliver and accelerate online applications and content.

#### 3\\. Legal basis for data processing

The data is collected on the basis of Art. 6 (1) (f) GDPR. The website operator has a legitimate interest in the technically error-free presentation and optimization of his website -and the server log files are therefore recorded.

#### 4\\. Duration of storage

Your personal information will be retained for as long as necessary to fulfil the purposes described in this Privacy Policy or as required by law.

#### 5\\. Exercising your rights

Information about objection and removal options regarding CloudFlare can be found at:

[https://www.cloudflare.com/en-gb/privacypolicy/](https://www.cloudflare.com/en-gb/privacypolicy/)

### Integrated third-party services

We use various service providers to deliver the service we offer through the app.

Generally, where such services are essential to providing the basic service offered by the website, we have a legitimate interest in sharing your data with the relevant service providers in order to provide the relevant website service.

Where such services are required for additional services, enhanced functionalities, or additional purposes, your personal data will only be transferred to service providers if you provide consent.

| Service Provider | Company | Location | Purpose | Legal Basis | Privacy Policy |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Google Tag Manager | Google Ireland Ltd. | Irland (USA) | Tag configuration and integration of Google services | Art. 6 para. 1 p. 1 lit. a GDPR | https://policies.google.com/privacy?gl=DE\\&hl=de https://business.safety.google/gdpr/ |
| Google Webfonts | Google Ireland Ltd. | Irland (USA) | Fonts | Art. 6 para. 1 p. 1 lit. a GDPR | https://policies.google.com/privacy?gl=DE\\&hl=de https://business.safety.google/gdpr/ |
| Google ReCaptcha | Google Ireland Ltd. | Irland (USA) | Bot Protection | Art. 6 para. 1 p. 1 lit. a GDPR | https://policies.google.com/privacy?gl=DE\\&hl=de https://business.safety.google/gdpr/ |
| Google Ads Remarketing | Google Ireland Ltd. | Irland (USA) | Marketing / Tracking | Art. 6 para. 1 p. 1 lit. a GDPR | https://policies.google.com/privacy?gl=DE\\&hl=de https://business.safety.google/gdpr/ |
| Google AdWords | Google Ireland Ltd. | Irland (USA) | Marketing | Art. 6 para. 1 p. 1 lit. a GDPR | https://policies.google.com/privacy?gl=DE\\&hl=de https://business.safety.google/gdpr/ |
| Google Analytics | Google Ireland Ltd. | Irland (USA) | Analytic | Art. 6 para. 1 p. 1 lit. a GDPR | https://policies.google.com/privacy?gl=DE\\&hl=de https://business.safety.google/gdpr/ |
| Hotjar | Hotjar Ltd | Malta\\* | Tracking | Art. 6 para. 1 p. 1 lit. a GDPR | https://www.hotjar.com/legal/policies/privacy/de/ |
| HubSpot | HubSpot Inc. | USA | Customer surveys | Art. 6 para. 1 p. 1 lit. a GDPR | https://legal.hubspot.com/de/privacy-policy |
| LinkedIn | LinkedIn Ireland Unlimited Company | Irland (USA) | Branding, Recruitment, Marketing and Community Building | Art. 6 para. 1 p. 1 lit. a GDPR | https://www.linkedin.com/legal/privacy-policy?\\_l=de\\_DE https://de.linkedin.com/legal/l/dpa |
| MailChimp | The Rocket Science Group | USA | Email marketing, newsletter deployment, customer communication | Art. 6 para. 1 p. 1 lit. a GDPR | https://mailchimp.com/en-gb/legal/cookies/\\#Why\\_do\\_we\\_use\\_cookies\\_and\\_other\\_tracking\\_technologies%3F https://mailchimp.com/en-gb/gdpr/ |
| Twitter | Twitter International Company | Irland (USA) | Branding, Communication,Marketing and Community Building | Art. 6 para. 1 p. 1 lit. a GDPR | https://twitter.com/de/privacy https://help.twitter.com/de/rules-and-policies/global-operations-and-data-transfer |
| YouTube | YouTube LLC | USA | Video embedding | Art. 6 para. 1 p. 1 lit. a GDPR | https://policies.google.com/privacy?gl=DE\\&hl=de https://business.safety.google/gdpr/ |
| Usercentrics | Usercentrics GmbH | Deutschland\\* | Consent management, compliance with legal requirements | Art. 6 para. 1 p. 1 lit. f GDPR | https://usercentrics.com/de/datenschutzerklaerung/ |
| Discord | Discord Inc. | USA | Community building, customer support, marketing | Art. 6 para. 1 p. 1 lit. a GDPR | https://discord.com/privacy |
| Github | GitHub | USA | Community building, Facilitate downloads and use | Art. 6 para. 1 p. 1 lit. f GDPR | https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement |
| Meetup | Meetup LLC | Ireland | Branding and community building | Art. 6 para. 1 p. 1 lit. f GDPR | https://help.meetup.com/hc/en-us/articles/360044422391-Privacy-Policy/?urlkey=help\\&topic=help&\\_\\_topic\\_subdomain=1 |
| WeChat Official Account | WeChat International Pte. Ltd. / Tencent International Services Europe BV | Singapore / Netherlands | Branding, Recruitment, Marketing and Community Building | Art. 6 para. 1 p. 1 lit. f GDPR | https://www.wechat.com/en/privacy\\_policy.html |

### Integration of Third-Party Services via External Service Providers

#### 1\\. Description and scope of data processing

We integrate certain plugins on our website via external service providers in the form of content delivery networks. When you access our website, a connection is established to the servers of the providers used by us to retrieve content and store it in the cache of the user's browser. This allows personal data to be stored and evaluated in server log files, in particular device and browser information (e.g. IP address and operating system). We use the following services:

- Google Hosted Libraries

#### 2\\. Purpose of data processing

The use of the functions of these services serves the delivery and acceleration of online applications and content.

#### 3\\. Legal basis for data processing

This data is collected on the basis of Art. 6 (1) (f) GDPR. The website operator has a justified interest in the technically correct presentation and optimization of the website.

#### 4\\. Duration of storage

Your personal information will be retained for as long as necessary to fulfil the purposes described in this Privacy Policy or as required by law.

#### 5\\. Exercising your rights

You can find information on objection and removal options regarding Google at:

[https://policies.google.com/privacy?hl=en](https://policies.google.com/privacy?hl=en)

This privacy policy has been created with the assistance of [DataGuard](https://www.dataguard.com/).

## Imprint

#### Commercial Address

Jina AI GmbH

Prinzessinnenstraße 19-20, 10969 Berlin, Germany

Register: Amtsgericht Berlin Register Number: HRB 218021

VAT Identification Number: DE331656714

D-U-N-S® Number: 343200675

Managing Director: Jiao Liu

Authorizing Signatory: Jiao Liu
`,Te=ne({__name:"LegalPage",setup(t,{expose:d}){d();const I=se(),{t:o}=ae(),p=m([]),f=m([]),h=m(!1),c=m(-1),s=m(!1),P=m(!1),y=m(null),r=m(null),C=async()=>{try{p.value=[],h.value=!0,await re();const i=document.querySelector(".content"),e=i==null?void 0:i.querySelectorAll("h2");let l=0;e==null||e.forEach(n=>{if(n instanceof HTMLElement){const T=n.id||n.innerText.toLowerCase().replace(/[^a-z0-9]+/g,"-");if(n.id=T,!n.querySelector(`#anchor-${T}`)){const j=n.innerText,v=document.createElement("a");v.href=`#${T}`,v.title=j,v.id=`anchor-${T}`;const w=document.createElement("i");w.className="material-symbols-sharp header-hash",w.innerHTML="tag",w.style.marginRight="8px",w.style.cursor="pointer",w.style.fontSize="0.8em",w.style.opacity="0",w.style.transition="opacity 0.2s",v.appendChild(w),v.addEventListener("click",M=>{M.preventDefault();const N=`${window.location.origin}${window.location.pathname}#${T}`;navigator.clipboard.writeText(N)}),n.insertBefore(v,n.firstChild),n.style.position="relative",n.addEventListener("mouseenter",()=>{v.style.opacity="1"}),n.addEventListener("mouseleave",()=>{v.style.opacity="0"}),p.value.push({id:l,tag:n.tagName,offset:n.offsetTop,text:j,ref_id:CSS.escape(T)}),l=l+1}}}),f.value=p.value.filter(n=>n.tag==="H2"),O(),window.location.hash&&L(window.location.hash)}catch(i){console.error("Error setting up anchors:",i)}finally{h.value=!1}};ie(()=>{C(),r.value=document.querySelector(".q-page-container + .q-card.print-hide.q-py-xl")});const J=()=>{var i;(i=window.print)==null||i.call(window)};let a=null;const b=new Set,k=m({}),R=()=>{E(),a=new IntersectionObserver(i=>{i.forEach(e=>{const l=e.target;if(l===y.value){s.value=e.isIntersecting;return}if(l===r.value){P.value=e.intersectionRatio>.1;return}if(e.isIntersecting){const n=l.id;k.value[n]=e.intersectionRatio}else k.value[l.id]=0}),_()},{threshold:Array.from({length:11},(i,e)=>e*.1),rootMargin:"0px"})},_=()=>{const i=Object.entries(k.value).reduce((e,[l,n])=>n>e.ratio?{id:l,ratio:n}:e,{id:"",ratio:0});if(i.ratio>0){const e=f.value.findIndex(l=>l.ref_id===i.id);e!==-1&&(c.value=e)}},O=()=>{a||R(),y.value&&!b.has(y.value)&&(a==null||a.observe(y.value),b.add(y.value)),r.value&&!b.has(r.value)&&(a==null||a.observe(r.value),b.add(r.value)),f.value.forEach(i=>{const e=document.getElementById(i.ref_id);e&&!b.has(e)&&(a==null||a.observe(e),b.add(e))})},E=()=>{a==null||a.disconnect(),b.clear(),k.value={}};ve({page:"legal_page",url:"legal",banner:"banner.png"});const F={_route:I,t:o,anchors:p,tocAnchors:f,loadingAnchors:h,currentAnchor:c,isArticleVisible:s,isFooterVisible:P,articleRef:y,footerRef:r,setupAnchors:C,print:J,get observer(){return a},set observer(i){a=i},observedElements:b,ratioCollection:k,createObserver:R,updateActiveHeading:_,startObserving:O,resetObserver:E,get locateByHash(){return L},get legalMd(){return Ce}};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}}),Se={class:"fixed-left q-pl-md print-hide",style:{width:"300px",top:"100px","z-index":"1"}},Pe={class:"col-12 col-md-10 col-lg-12"},ke={class:"row q-my-xl justify-center print-hide"},De={class:"col-11 col-sm-10 col-md-8 col-lg-7 col-xl-6 q-gutter-y-xl"},xe={class:"row print-hide q-gutter-xs"},Ge={class:"row justify-center"},Je={class:"col-10 col-md-8 col-lg-7 col-xl-6"},qe={class:"content q-my-xl q-py-xl",ref:"articleRef"};function Re(t,d,I,o,p,f){const h=he("q-markdown");return D(),q(be,null,{default:A(()=>[g("div",{class:Y(["row full-width relative-position q-py-xl q-my-xl",t.$q.screen.gt.md?"justify-center":"justify-end"])},[u(de,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:A(()=>[U(g("div",Se,[u(ye,{padding:!1,class:"q-mx-sm"},{default:A(()=>[(D(!0),W(B,null,H(o.tocAnchors,(c,s)=>U((D(),q(ue,{key:s,active:s===o.currentAnchor,dense:"",clickable:"",class:Y(["relative-position q-pa-md",s===o.currentAnchor?"text-primary":"text-dim"]),onClick:P=>o.locateByHash("#"+c.ref_id)},{default:A(()=>[u(pe,{class:"q-ml-md"},{default:A(()=>[u(V,null,{default:A(()=>[fe(me(c.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","class","onClick"])),[[ge]])),128))]),_:1})],512),[[le,!t.$q.screen.lt.md&&o.tocAnchors.length&&o.isArticleVisible&&!o.isFooterVisible]])]),_:1}),g("div",Pe,[g("div",ke,[g("div",De,[g("div",xe,[u(G,{outline:"",icon:"print",label:o.t("print"),onClick:d[0]||(d[0]=c=>o.print()),square:"","no-wrap":""},null,8,["label"]),u(G,{outline:"",label:o.t("legal_page.download_type1"),target:"_blank",href:"/Jina_AI_GmbH_Letter_of_Attestation_SOC_2_Type_1.pdf",square:"","no-wrap":"",icon:"download"},null,8,["label"]),u(G,{outline:"",label:o.t("legal_page.download_type2"),target:"_blank",href:"/Jina AI GmbH_Letter of Attestation SOC 2 Type 2.pdf",square:"","no-wrap":"",icon:"download"},null,8,["label"]),u(G,{outline:"",label:o.t("legal_page.request_audit"),target:"_blank",to:"/contact-sales",square:"","no-wrap":"",icon:"policy"},null,8,["label"])]),u(Ie,null,{default:A(()=>[(D(!0),W(B,null,H(t.LEGAL_SECTIONS,c=>(D(),q(we,{key:c.label,label:c.label,onClick:s=>o.locateByHash(c.link),class:"cursor-pointer"},null,8,["label","onClick"]))),128))]),_:1})])]),g("div",Ge,[g("div",Je,[g("div",qe,[u(h,{src:o.legalMd,"no-heading-anchor-links":"","no-linkify":"",html:!0},null,8,["src"])],512)])])])],2)]),_:1})}const Ue=ce(Te,[["render",Re],["__scopeId","data-v-c8ca3aad"],["__file","LegalPage.vue"]]);export{Ue as default};
