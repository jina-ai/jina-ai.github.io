import{s as w,c_ as C,dy as T,m as u,p as d,ao as S,aC as P,dz as k,dA as D,bV as G,K as J,j as R,a0 as q,b9 as O,am as j,a2 as F,a3 as g,a4 as m,a5 as y,a8 as s,a6 as p,q as b,aa as E,ai as L,ah as _,bf as U}from"./index-CONFCk3U.js";import{Q as W}from"./QPage-CwXjc6vU.js";import{u as H}from"./useMetaTags-09JrdkeI.js";import"./package-D9JPNs5w.js";const Y=w({name:"QBreadcrumbsEl",props:{...C,label:String,icon:String,tag:{type:String,default:"span"}},emits:["click"],setup(e,{slots:o}){const{linkTag:l,linkAttrs:t,linkClass:h,navigateOnClick:c}=T(),a=u(()=>({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(e.disable!==!0?"q-link--focusable"+h.value:"q-breadcrumbs__el--disable"),...t.value,onClick:c})),i=u(()=>"q-breadcrumbs__el-icon"+(e.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const n=[];return e.icon!==void 0&&n.push(d(S,{class:i.value,name:e.icon})),e.label!==void 0&&n.push(e.label),d(l.value,{...a.value},P(o.default,n))}}}),B=["",!0],z=w({name:"QBreadcrumbs",props:{...k,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:e=>["none","xs","sm","md","lg","xl"].includes(e),default:"sm"}},setup(e,{slots:o}){const l=D(e),t=u(()=>`flex items-center ${l.value}${e.gutter==="none"?"":` q-gutter-${e.gutter}`}`),h=u(()=>e.separatorColor?` text-${e.separatorColor}`:""),c=u(()=>` text-${e.activeColor}`);return()=>{if(o.default===void 0)return;const a=G(J(o.default));if(a.length===0)return;let i=1;const n=[],v=a.filter(r=>r.type!==void 0&&r.type.name==="QBreadcrumbsEl").length,x=o.separator!==void 0?o.separator:()=>e.separator;return a.forEach(r=>{if(r.type!==void 0&&r.type.name==="QBreadcrumbsEl"){const f=i<v,A=r.props!==null&&B.includes(r.props.disable),I=(f===!0?"":" q-breadcrumbs--last")+(A!==!0&&f===!0?c.value:"");i++,n.push(d("div",{class:`flex items-center${I}`},[r])),f===!0&&n.push(d("div",{class:"q-breadcrumbs__separator"+h.value},x()))}else n.push(r)}),d("div",{class:"q-breadcrumbs"},[d("div",{class:t.value},n)])}}}),N={title:"Legal Information",subTitle:"Last Modified: Sep 26th, 2024",menus:[{label:"Security as Company Value",link:"#security-as-company-value"},{label:"Terms and Conditions",link:"#terms-and-conditions"},{label:"Privacy Policy",link:"#privacy-policy"},{label:"Imprint",link:"#imprint"}],content:[{tag:"h2",text:"Security as Company Value",id:"security"},{tag:"p",text:"Jina AI GmbH’s security & compliance principles guide how we deliver our products and services, enabling people to simply and securely access the digital world."},{tag:"h4",text:"Secure Personnel"},{tag:"p",text:"Jina AI GmbH takes the security of its data and that of its clients and customers seriously and ensures that only vetted personnel are given access to their resources."},{tag:"li",text:"All Jina AI GmbH contractors and employees undergo background checks prior to being engaged or employed by us in accordance with local laws and industry best practices."},{tag:"li",text:"Confidentiality or other types of Non-Disclosure Agreements (NDAs) are signed by all employees, contractors, and others who have a need to access sensitive or internal information."},{tag:"li",text:"We embed the culture of security into our business by conducting employee security training & testing using current and emerging techniques and attack vectors."},{tag:"h3",text:"Secure Development"},{tag:"li",text:"All development projects at Jina AI GmbH, including on-premises software products, support services, and our own Digital Identity Cloud offerings follow secure development lifecycle principles."},{tag:"li",text:"All development of new products, tools, and services, and major changes to existing ones, undergo a design review to ensure security requirements are incorporated into proposed development."},{tag:"li",text:"All team members that are regularly involved in any system development undergo annual secure development training in coding or scripting languages that they work with as well as any other relevant training."},{tag:"li",text:'Software development is conducted in line with <a href="https://owasp.org/www-project-top-ten/" target="_blank" style="color: white">OWASP Top 10</a> recommendations for web application security.'},{tag:"h3",text:"Secure Testing"},{tag:"p",text:"Jina AI GmbH deploys third party penetration testing and vulnerability scanning of all production and Internet facing systems on a regular basis."},{tag:"li",text:"All new systems and services are scanned prior to being deployed to production."},{tag:"li",text:"We perform penetration testing both by internal security engineers and external penetration testing companies on new systems and products or major changes to existing systems, services, and products to ensure a comprehensive and real-world view of our products & environment from multiple perspectives."},{tag:"li",text:"We perform static and dynamic software application security testing of all code, including open source libraries, as part of our software development process."},{tag:"h3",text:"Cloud Security"},{tag:"p",text:"Jina AI GmbH Cloud provides maximum security with complete customer isolation in a modern, multi-tenant cloud architecture."},{tag:"p",text:"Jina AI GmbH Cloud leverages the native physical and network security features of the cloud service, and relies on the providers to maintain the infrastructure, services, and physical access policies and procedures."},{tag:"li",text:"All customer cloud environments and data are isolated using Jina AI GmbH’s patented isolation approach. Each customer environment is stored within a dedicated trust zone to prevent any accidental or malicious co-mingling."},{tag:"li",text:"All data is also encrypted at rest and in transmission to prevent any unauthorized access and prevent data breaches. Our entire platform is also continuously monitored by dedicated, highly trained Jina AI GmbH experts."},{tag:"li",text:"We separate each customer's data and our own, utilizing unique encryption keys to ensure data is protected and isolated."},{tag:"li",text:"Client’s data protection complies with SOC 2 standards to encrypt data in transit and at rest, ensuring customer and company data and sensitive information is protected at all times."},{tag:"li",text:"We implement role-based access controls and the principles of least privileged access, and review revoke access as needed."},{tag:"h3",text:"Compliance"},{tag:"p",text:"Jina AI GmbH is committed to providing secure products and services to safely and easily manage billions of digital identities across the globe. Our external certifications provide independent assurance of Jina AI GmbH’s dedication to protecting our customers by regularly assessing and validating the protections and effective security practices Jina AI GmbH has in place."},{tag:"h3",text:"SOC 2 Type 1"},{tag:"p",text:"Jina AI GmbH successfully completed the AICPA Service Organization Control (SOC) 2 Type I audit. The audit confirms that Jina AI GmbH’s information security practices, policies, procedures, and operations meet the SOC 2 standards for security."},{tag:"p",text:'Jina AI GmbH was audited by <a href="https://www.prescientassurance.com/" target="_blank" style="color: white">Prescient Assurance</a>, a leader in security and compliance certifications for B2B, SAAS companies worldwide. Prescient Assurance is a registered public accounting in the US and Canada and provide risk management and assurance services which includes but not limited to SOC 2, PCI, ISO, NIST, GDPR, CCPA, HIPAA, CSA STAR etc. For more information about Prescient Assurance, you may reach out them at info@prescientassurance.com.'},{tag:"p",text:"An unqualified opinion on a SOC 2 Type I audit report demonstrates to the Jina AI GmbH’s current and future customers that they manage their data with the highest standard of security and compliance."},{tag:"p",text:"Customers and prospects can request access to the audit report here."},{tag:"q-btn",text:"Request audit report",href:"/contact-sales"},{tag:"div",text:'<div class="row justify-around q-my-xl" ><img class="security-img" src="/21972-312_SOC_NonCPA_Blk.svg"/><img class="security-img" src="/security2.png"/></div>'},{tag:"h2",text:"Terms and Conditions",id:"terms-and-conditions"},{tag:"h3",text:"1. Scope and Subject Matter"},{tag:"p",text:'1.1 These terms and conditions (hereinafter referred to as "TCs") govern the legal relationship between you (the “Customer” or “you”) and Jina AI GmbH, Prinzessinnenstraße 19-20, 10969 Berlin, Germany ("Jina AI", “we” or “us”) when you access and use our services, including any content, functionality, software, application programming interface, tool, data, documentation, websites and services offered on or through Jina AI (the “Services”). These TCs shall apply exclusively; deviating Customer terms shall not apply except if we have expressly confirmed their application in writing.'},{tag:"p",text:"1.2 These TCs (as updated from time to time) shall also govern all future transactions between you and us."},{tag:"p",text:'1.3 The Services to be provided by Jina AI are set out in product descriptions (the “Product Descriptions” as updated from time to time) in the online ordering pages (for Services ordered through our website, the “Online Services”) or a separate written order form which has been agreed between the Parties (together the "Order Form"). The Order Form has precedence over the terms of these TCs.'},{tag:"p",text:"1.4 The Order Form submitted by the Customer to Jina AI shall constitute a binding offer to enter into a contract with Jina AI on the provision of the Services identified in the Order Form. Jina AI can accept such offer (and thereby establish a binding contract) by providing the Customer with a corresponding order confirmation or by way of allowing the Customer the use of the Services online in case of Online Services."},{tag:"h3",text:"2. Registration and Access"},{tag:"p",text:"2.1 To use the Services Customers must register with Jina AI and create an account, providing all required data and information in an accurate and complete manner."},{tag:"p",text:"2.2 By registering, Customers agree to be fully responsible for all activities conducted through their account or using their access credentials."},{tag:"p",text:"2.3 Jina AI reserves the right, at its own discretion, to suspend or delete at any time and without notice, Customer accounts which it deems inappropriate, offensive or in violation of these TCs."},{tag:"h3",text:"3. Services of Jina AI"},{tag:"p",text:"3.1 Jina AI will provide the Services as specified in the Order Form and in accordance with the respective Product Description. Jina AI shall be entitled to determine the manner and means of performing and providing the Services at its own reasonable discretion, provided that the Services shall meet the material requirements as set out in the Product Description. Unless expressly agreed otherwise in the Order Form, the statutory terms for works contracts shall not apply to the Services and they shall not be subject to an acceptance procedure."},{tag:"p",text:"3.2 Unless expressly agreed otherwise in the Order Form, the Services are standard services which Jina AI makes available in a standard format to multiple Customers. Jina AI may from time to time improve, modify, extend and enhance the Services (while retaining their core functions as specified in the Product Description). In that case, Jina AI will update the Product Description accordingly and notify the Customer of such changes reasonably in advance of their implementation."},{tag:"p",text:"3.3 Dates and time periods set out in the Order Form or communicated otherwise by Jina AI are non-binding estimates unless it is expressly agreed between the parties in text form that they are binding."},{tag:"p",text:'3.4 Jina AI may temporarily suspend the Customer’s access to the Services if and in so far as Jina AI reasonably considers such suspension to be required to stop or reduce a material risk to the Services or the Jina AI platforms or systems used to provide the Services (the "Jina AI Systems") or any Customer systems or data. Jina AI will inform the Customer of such suspension without undue delay and will reinstate the Customer’s access to the Services as soon as the risk does no longer apply.'},{tag:"p",text:"3.5 The Services of Jina AI are designed only as a tool using artificial intelligence. No specific Output are owed by Jina AI to the user when using the Services. The Services do not claim to meet all Customer expectations for every situation. The Output made available to the user when using the Services therefore do not claim to be complete, accurate or true. Any of such Output must therefore be reviewed by the Customer for its use case and the Output does not replace the Customer's own considerations, evaluations and actions."},{tag:"h3",text:"4. Intellectual Property Rights"},{tag:"p",text:"4.1 All software, data bases, documents, information, algorithms, processes, prototypes, ideas, knowhow, patents, trademarks or other work results (“IP”) used by Jina AI to provide the Services or made available to the Customer by Jina AI are owned by Jina AI or its licensors (“Jina AI IP”). Jina AI does not grant any licenses in the Jina AI IP or any other rights to use the Jina AI IP to the Customer."},{tag:"p",text:"4.2 Where Jina AI as part of its Services makes Jina AI IP available to the Customer, Jina AI grants the Customer (subject to the payment of the Service Charges, cf. Section 6 of these TCs) a non-exclusive, non-sublicensable, non-transferable, revocable and limited right to use such Jina AI IP strictly for the purpose of using the Services agreed in an Order Form and for the term set out in Section 11. Any other rights of the Customer in the Jina AI IP are excluded. Nothing in these TCs shall limit or exclude Jina AI's right to use the Jina AI IP or any other materials developed, used or provided by Jina AI under these TCs for its own business purposes or for other customers."},{tag:"p",text:"4.3 Where as an outcome of the Customer’s use of the Services certain results (e.g. pictures, text, software, graphics, presentations, documents, data, works of art, or IP) are created through the Services (collectively, the “Output”), Jina AI (except as expressly stated otherwise herein) claims no rights to such Output and imposes no restrictions on the Customer regarding the use of the Output unless otherwise agreed in an agreement with the Customer. The Customer shall be responsible for such Output and its compliance with applicable law and applicable third party rights. In particular, Jina AI does not warrant that any Output is free of, or does not infringe, third party rights."},{tag:"p",text:"4.4 The Customer must ensure that any information, pictures, text, software, graphics, presentations, documents, work results, IP or other data the Customer provides in the course of using the Services (collectively “Input”), e.g. Input that the Customer uploads to Jina AI or processes through the Services, comply with all applicable laws and regulations, the terms of these TCs, and are not illegal, immoral or defamatory (e.g. do not include defamatory, pornographic, racist or violent content). The Customer confirms and commits that the Input and its use with the Services does not infringe any third party intellectual property or privacy rights and that the Customer is entitled to use the Input with the Services. If the Customer breaches its obligations under this Section 4.4, Jina AI may remove, delete or block the Input at its own discretion and, without prior notice, deny the Customer access to the Services."},{tag:"p",text:"4.5 Customers must not (i) reverse engineer, decompile, translate or otherwise attempt to discover the source code or underlying components of the Services or Jina AI’s IP (except to the extent permitted under applicable mandatory law); (ii) use the Services in a way that infringes, misappropriates or violates any third party rights; (iii) use any Output from the Services to develop applications or services that compete with the Services offered by Jina AI; or (iv) use automated methods to extract information, data or result from the JINA-AI website or the Services, including by means of scraping, harvesting, or web data extraction."},{tag:"p",text:"4.6 Unless agreed otherwise (e.g. in these TCs) Jina AI will only store Input or Output on its servers to the extent required to provide the Services."},{tag:"p",text:"4.7 In the provision of the Services (and without prejudice to Section 4.2 above), Jina AI may use open source software components which may be subject to specific open sources license terms. Where relevant for the Customer, Jina AI will disclose such open source license terms to the Customer."},{tag:"h3",text:"5. Customer Obligations"},{tag:"p",text:"5.1 The Customer shall use the Services solely for the purposes established in the respective Order Form and Product Description."},{tag:"p",text:"5.2 The Customer shall reasonably support Jina AI in the provision of the Services as further set out in the Product Description. In addition, the Customer shall provide Jina AI with access to Customer's information, data, systems, personnel and premises as reasonably required by Jina AI for the provision of the Services. The Customer shall make decisions and provide feedback relating to the Services within a reasonable time period after receipt of a corresponding request by Jina AI."},{tag:"p",text:"5.3 Where to use the Services the Customer needs to connect to Jina AI Systems or platforms the Customer is responsible for establishing and maintaining the data connection between the interface of the relevant Jina AI Systems to the internet and the Customer’s systems."},{tag:"p",text:"5.4 If the Customer fails to perform the Customer obligations, then the obligations of Jina AI which cannot be rendered without such Customer performance (or only by incurring disproportionate additional expenses) shall be suspended for the duration of such default and a reasonable start-up period. Additional expenses reasonably incurred by Jina AI shall be reimbursed by the Customer on a time and material basis applying the rates set out in the Order Form."},{tag:"h3",text:"6. Service Charges, Terms of Payment and Credits"},{tag:"p",text:'6.1 The Customer shall pay the fees for the Services as set out in the Order Form ("Service Charges"). Unless stated otherwise in the Order Form are exclusive of applicable VAT which the customer shall pay in addition to the Service Charges.'},{tag:"p",text:"6.2 Jina AI will invoice recurring lump sum Service Charges in advance prior to the beginning of the time period to which they relate (”Service Period”). If applicable, Service Charges for time & material services will be invoiced monthly in arrears."},{tag:"p",text:"6.3 If applicable, expenses and disbursements shall be invoiced additionally in accordance with the principles set out in the Order Form. Where Service Charges are invoiced on a time & material basis, Jina AI will charge units of 15 minutes; travel time shall be chargeable as working time."},{tag:"p",text:"6.4 Unless otherwise agreed in the Order Form, invoices are due for payment within 14 days of receipt of the invoice by the Customer."},{tag:"p",text:"6.5 For certain Services the Customer receives from Jina AI a specific number of credits as set out in the Order Form (“Credits”). The Customer may use these Credits for obtaining Services during the respective Service Period. The Customer may roll over remaining Credits to the next Service Period, unless expressly agreed otherwise in the Order Form. If the Credits are used up, the Customer can purchase additional Credits; details are set out in the Order Form. The credits purchased by the client are not refundable nor exchangeable. The Credit System and the measurement of individual Credits may differ depending on the type of Service."},{tag:"h3",text:"7. Defects"},{tag:"p",text:"7.1 Services provided by Jina AI will essentially comply with the description in the Order Form and the Product Description. However, the Services are subject to continuous modification and improvement. The parties therefore agree that the Services may contain errors and malfunctions and that they may not comply in all aspects with general market standards, public statements, announcements or advertisements by Jina AI. Jina AI provides the Services to Customer “as is” and except as expressly set out otherwise herein, the statutory liability for defects shall be excluded. The Customer acknowledges that the Services may not be fit for the purpose intended by the Customer, and that the Customer, being aware of this, uses the Services in its own responsibility and at its own risk."},{tag:"p",text:"7.2 If the Customer detects any defects in the Services, it shall notify Jina AI (in writing or text form) thereof without undue delay and shall provide a comprehensive description of the defects and the time and circumstances of their occurrence. Jina AI will use reasonable commercial efforts to (in its sole discretion) either remedy/correct the defect (if reasonable) or provide the affected Service (or part of the Service) again without defects and at no extra charge to the Customer. If an attempted remedy has failed for the third time, the Customer is entitled to reduce the Service Charge for the affected Service appropriately. Further claims for defects shall be excluded."},{tag:"p",text:"7.3 The Customer's rights due to defects are excluded, if the Customer has modified the Services or has not used the Services in accordance with the requirements set out in the Product Description or otherwise agreed between the parties, except if the Customer proves that the defect was not caused by such modification or non-compliance."},{tag:"p",text:"7.4 Jina AI may charge the Customer at the agreed rates for efforts and expenses incurred by Jina AI for the investigation or elimination of defects which were caused by the Customer or its delegates."},{tag:"p",text:"7.5 The limitation period for claims based on defects shall be 12 months from the occurrence of the defect, or (if the Service is subject to an acceptance) from Acceptance."},{tag:"h3",text:"8. Limitation of Liability"},{tag:"p",text:"8.1 Jina AI's liability for damages resulting from injury to life, limb or health as well as for intent, gross negligence and - insofar as applicable - in accordance with the German Product Liability Act (Produkthaftungsgesetz) shall be unlimited in accordance with the statutory provisions."},{tag:"p",text:`8.2 In cases of simple/normal negligence, Jina AI shall only be liable if essential contractual obligations ("cardinal obligations") have been breached and in these cases Jina AI's liability shall be limited to the damages which were reasonably foreseeable.`},{tag:"p",text:"8.3 Jina AI's liability pursuant to Section 8.2 shall be limited to a total maximum amount equal to 50% of the Service Charges the Customer has paid to Jina AI for the Services during the 12 months period immediately preceding the damaging event. Except in the cases set out in Section 8.1, Jina AI's liability for indirect and consequential damages (including loss of profit) shall be excluded entirely."},{tag:"p",text:"8.4 The limitations of liability set forth in this Section 8 shall apply to all claims for damages or compensation under or in relation to the Services irrespective of the legal grounds of such claims."},{tag:"p",text:"8.5 Any other liability of Jina AI shall be excluded."},{tag:"h3",text:"9. Confidentiality"},{tag:"p",text:"9.1 Each party agrees that all information received from the other party under these TCs which is (i) marked as confidential or (ii) from an objective perspective must be considered to be confidential, shall be maintained in confidence and shall not be disclosed to others. The receiving party agrees that without the prior written consent of the other party it will not use such information for any purpose other than the fulfillment of this contract."},{tag:"p",text:"9.2 Each party shall use no lesser standard of care to protect the confidentiality of information received from the other party than it uses to protect its own confidential information, and shall limit disclosure of such information to those of its group companies, personnel and consultants who have an actual need to know for purposes related to this contract and who have a written obligation to protect the confidentiality of such information."},{tag:"p",text:"9.3 Upon termination of the contract, each party will return to the other party such party's confidential information and data and will delete all copies of such information/data under its and its subcontractors' control (subject to applicable retention requirements)."},{tag:"p",text:"9.4 Jina AI shall, subject to applicable mandatory data protection requirements, be entitled to retain data uploaded to the Jina AI Systems or otherwise provided by the Customer or collected by Jina AI in the course of providing the Services and to use such data in anonymized/pseudonymized format for its business purposes including to improve its artificial intelligence applications."},{tag:"h3",text:"10. Data Protection"},{tag:"p",text:'10.1 Jina AI will comply with all applicable data protection requirements. Please see for further details the Jina AI Data Protection Policy under <a href="/legal/#privacy-policy" style="color: white">Privacy Policy</a>.'},{tag:"p",text:"10.2 Where Jina AI in providing the Services acts as a data processor pursuant to Art. 28 GDPR, Jina AI and Customer will enter into a data processing agreement in accordance with the requirements of Art. 28 GDPR."},{tag:"h3",text:"11. Term and Termination"},{tag:"p",text:"11.1 The contract between Jina AI and the Customer enters into force upon Jina AI's acceptance of the Order Form submitted by the Customer. Unless agreed otherwise in the Order Form, the contract continues to apply for an indefinite period of time. It can be terminated by each party in writing with a notice period of four (4) weeks to the end of a calendar quarter. Any ordinary termination is excluded during any minimum contract term the parties may have agreed in the Order Form."},{tag:"p",text:"11.2 Each party's statutory right to terminate this contract for good cause with immediate effect shall remain unaffected. A breach of contract shall only entitle a party to terminate the contract for good cause if the other party has breached a material obligation and – provided that the breach is curable – has failed to cure the breach within a reasonable grace period of at least twenty working days from receipt of a corresponding written warning notice served by the terminating party."},{tag:"h3",text:"12. Final Provisions"},{tag:"p",text:"12.1 Collateral agreements and amendments to these TCs must be made in writing. This also applies to a waiver of this written form requirement. Where these TCs establish a written form requirement, text form shall be sufficient unless expressly provided otherwise (e.g. by reference to Section 126 German Civil Code)."},{tag:"p",text:"12.2 Jina AI reserves the right to transfer, assign or dispose of by novation any or all rights or obligations under these T&Cs, taking the Customers’ legitimate interests into account. The Customer may not assign to any third party any of its rights under the contract in whole or in part without the prior written consent of Jina AI."},{tag:"p",text:"12.3 Jina AI shall be entitled to involve subcontractors in the provision of the Services."},{tag:"p",text:"12.4 Unless agreed otherwise in the Order Form, the place of performance for Services shall be the business seat of Jina AI."},{tag:"p",text:"12.5 Offsetting and retention rights of the Customer shall be excluded. This shall not apply if its corresponding counterclaims have been confirmed by a final court order or acknowledged by Jina AI in writing."},{tag:"p",text:"12.6 Jina AI shall be entitled to update and change these TCs from time to time. In this case, Jina AI will inform the Customer of such changes with a notice period of at least six (6) weeks before such changes become effective. If the Customer does not object in writing to the changes within four (4) weeks from receipt of the notice, the changes shall be deemed approved. If the Customer objects to the changes, the changes will not become effective between Jina AI and the Customer but Jina AI shall, within four (4) weeks from receipt of the objection, be entitled to terminate this contract with a notice period of six (6) weeks to the end of a month."},{tag:"p",text:"12.7 German law shall apply, excluding its conflict of laws rules and the UNCISG. The courts competent for Berlin shall have exclusive jurisdiction over all matters relating to these TCs."},{tag:"p",text:"12.8 If any provision of these TCs should be invalid in whole or in part or if these TCs contain any omission, the effectiveness of the remaining provisions shall not be affected. The invalid or omitted provision shall be replaced with retroactive effect by an effective and enforceable provision which most closely legally and financially approximates to what the parties intended or would have intended if they had taken such invalidity into account when agreeing these TCs."},{tag:"h2",text:"Privacy Policy",id:"privacy-policy"},{tag:"h3",text:"Who we are"},{tag:"p",text:"The data controller responsible in accordance with the purposes of the General Data Protection Regulation (GDPR) of the European Union and other data protection regulations is:"},{tag:"p",text:"Jina AI GmbH"},{tag:"p",text:"Prinzessinnenstraße 19-20, 10969 Berlin, Germany"},{tag:"p",text:"030 224 88295"},{tag:"p",text:"support@jina.ai"},{tag:"p",text:"https://jina.ai/ "},{tag:"h3",text:"How to contact the data protection officer"},{tag:"p",text:"The designated data protection officer is:"},{tag:"p",text:"DataCo GmbH"},{tag:"p",text:"Dachauer Str. 65"},{tag:"p",text:"80335 Munich"},{tag:"p",text:"Germany"},{tag:"p",text:"+49 89 7400 45840"},{tag:"p",text:'<a href="https://www.dataguard.de" style="color: white">www.dataguard.de</a>'},{tag:"h3",text:"General information on data processing"},{tag:"p",text:"On this page, we provide you with information regarding the processing of your personal data on our website."},{tag:"p",text:"How we collect and use your personal data will depend on how you interact with us or the services you use. We only collect, use or share your personal data where we have a legitimate purpose and a legal basis for doing so."},{tag:"h3",text:"What do we mean by 'legal basis'?"},{tag:"p",text:"<b>Consent</b> (Art. 6(1)(a) GDPR) - You have given us your consent to process your personal data for the specific purpose we have explained to you. You have the right to withdraw your consent at any time. For further information on how to withdraw consent, please see the ‘Exercising your rights’ subsections in the subsequent sections of this Privacy Policy."},{tag:"p",text:"<b>Contract</b> (Art 6(1)(b) GDPR) - We need to use your data to fulfill a contract you have with us. Alternatively, it’s necessary to use your data because we have asked you to, or you have taken yourself, specific steps before entering that contract."},{tag:"p",text:"<b>Legal Obligation</b> (Art 6(1)(c) GDPR) - We need to use your data to comply with the law."},{tag:"p",text:"<b>Vital Interests</b> (Art 6(1)(d) GDPR) - Processing your data is necessary to protect your vital interests or of another person. For example, to prevent you from serious physical harm."},{tag:"p",text:"<b>Public Task</b> (Art 6(1)(e) GDPR) - Using your data is necessary for the performance of a task carried out in the public interest, or because it is covered by a task set out in law, for example, for a statutory function."},{tag:"p",text:"<b>Legitimate Interests</b> (Art 6(1)(f) GDPR) - Processing your data is necessary to support a legitimate interest we or another party has, only where this is not outweighed by your own interests."},{tag:"p",text:"Please note where your data is processed under the performance of a contract or for a legal obligation, if you do not provide the data requested, we may be unable to provide you with our app."},{tag:"h3",text:"Data sharing and international transfers"},{tag:"p",text:"As explained throughout this Privacy Policy, we use various service providers to help us deliver our services and keep your data secure. When we use these service providers, it is necessary for us to share your personal data with them."},{tag:"p",text:"We have agreements in place with all our service providers that we share your data with that oblige them to protect your data."},{tag:"p",text:"Where your personal data is shared outside the EU, we ensure that your personal data is given an equivalent level of protection, either because the jurisdiction to which your data is transferred has an ‘adequate’ data protection standard according to the European Commission, or by using another safeguard such as an enhanced contractual agreement, i.e. Standard Contractual Clauses adopted by the European Commission (SCCs)."},{tag:"p",text:"For example, where we use US service providers, we either rely on SCCs or the EU-US Data Protection Framework, depending on the specific provider. You can request a copy of SCCs we have concluded with our service providers by sending an email to the email address provided in this Privacy Policy."},{tag:"h3",text:"Your rights"},{tag:"p",text:"When your personal data is processed, you are a data subject within the meaning of the GDPR and have the following rights:"},{tag:"h4",text:"1. Right of access (Art. 15 GDPR)"},{tag:"p",text:"You may request the data controller to confirm whether your personal data is processed by them."},{tag:"p",text:"If such processing occurs, you can request the following information from the data controller:"},{tag:"li",text:"Purposes of processing"},{tag:"li",text:"Categories of personal data being processed."},{tag:"li",text:"Recipients or categories of recipients to whom the personal data have been or will be disclosed."},{tag:"li",text:"Planned storage period or the criteria for determining this period"},{tag:"li",text:"The existence of the rights of rectification, erasure or restriction or opposition."},{tag:"li",text:"The existence of the right to lodge a complaint with a supervisory authority."},{tag:"li",text:"If applicable, origin of the data (if collected from a third party)."},{tag:"li",text:"If applicable, existence of automated decision-making including profiling with meaningful information about the logic involved, the scope and the effects to be expected."},{tag:"li",text:"If applicable, transfer of personal data to a third country or international organization."},{tag:"h4",text:"2. Right to rectification (Art. 16 GDPR)"},{tag:"p",text:"You have a right to rectification and/or modification of the data, if your processed personal data is incorrect or incomplete. The data controller must correct the data without delay."},{tag:"h4",text:"3. Right to the restriction of processing (Art. 18 GDPR)"},{tag:"p",text:"You may request the restriction of the processing of your personal data under the following conditions:"},{tag:"li",text:"If you challenge the accuracy of your personal data for a period that enables the data controller to verify the accuracy of your personal data."},{tag:"li",text:"The processing is unlawful, and you oppose the erasure of the personal data and instead request the restriction of their use instead."},{tag:"li",text:"The data controller or its representative no longer need the personal data for the purpose of processing, but you need it to assert, exercise or defend legal claims; or"},{tag:"li",text:"If you have objected to the processing pursuant and it is not yet certain whether the legitimate interests of the data controller override your interests."},{tag:"h4",text:'4. Right to erasure ("Right to be forgotten") (Art. 17 GDPR)'},{tag:"p",text:"If you request from the data controller to delete your personal data without undue delay, they are required to do so immediately if one of the following applies:"},{tag:"li",text:"Personal data concerning you is no longer necessary for the purposes for which they were collected or processed."},{tag:"li",text:"You withdraw your consent on which the processing is based pursuant to and where there is no other legal basis for processing the data."},{tag:"li",text:"You object to the processing of the data and there are no longer overriding legitimate grounds for processing, or you object pursuant to Art. 21 (2) GDPR."},{tag:"li",text:"Your personal data has been processed unlawfully."},{tag:"li",text:"The personal data must be deleted to comply with a legal obligation in Union law or Member State law to which the data controller is subject."},{tag:"li",text:"Your personal data was collected in relation to information society services offered pursuant to Art. 8 (1) GDPR."},{tag:"p",text:"The right to deletion does not exist if the processing is necessary"},{tag:"li",text:"to exercise the right to freedom of speech and information;"},{tag:"li",text:"to fulfill a legal obligation required by the law of the Union or Member States to which the data controller is subject, or to perform a task of public interest or in the exercise of public authority delegated to the representative."},{tag:"li",text:"for reasons of public interest in the field of public health."},{tag:"li",text:"for archival purposes of public interest, scientific or historical research purposes or for statistical purposes."},{tag:"li",text:"to enforce, exercise or defend legal claims."},{tag:"h4",text:"5. Right to data portability"},{tag:"p",text:"You have the right to receive your personal data given to the data controller in a structured and machine-readable format. In addition, you have the right to transfer this data to another person without hindrance by the data controller who was initially given the data."},{tag:"h4",text:"6. Right to object"},{tag:"p",text:"For reasons that arise from your particular situation, you have, at any time, the right to object to the processing of your personal data pursuant to Art. 6 (1) (e) or 6 (1) (f) GDPR; this also applies to profiling based on these provisions."},{tag:"p",text:"If the personal data relating to you are processed for direct marketing purposes, you have the right to object at any time to the processing of your personal data in regard to such advertising; this also applies to profiling associated with direct marketing."},{tag:"h4",text:"7. Right to complain to a supervisory authority"},{tag:"p",text:"Without prejudice to any other administrative or judicial remedy, you have the right to lodge a complaint with a supervisory authority if you consider that the processing of personal data concerning you infringes the GDPR. The supervisory authority to which the complaint has been lodged shall inform the complainant of the status and outcome of the complaint, including the possibility of a judicial remedy under Art. 78 GDPR. A list of the locally competent supervisory authorities in Germany can be found on the website of the Federal Commissioner for Data Protection at the following link:"},{tag:"p",text:'<a href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html" style="color: white">https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html</a>'},{tag:"h3",text:"Data processing when you load our website"},{tag:"h4",text:"1. Description and scope of data processing"},{tag:"p",text:"Each time our website is accessed, our system automatically collects data and relevant information from the computer system of the calling device."},{tag:"p",text:"The following data is collected:"},{tag:"li",text:"Information about the browser type and the version used"},{tag:"li",text:"The user's operating system"},{tag:"li",text:"Date and time of access"},{tag:"p",text:"This data is stored in the log files of our system."},{tag:"h4",text:"2. Purpose of data processing"},{tag:"p",text:"The temporary storage of the IP address by the system is necessary for the delivery of the website to the computer of the user. For this purpose, the user’s IP address must be kept for the duration of the session."},{tag:"p",text:"The storage in log files is done to ensure the functionality of the website. The data is also used to optimize the website and to ensure the security of our IT systems. An analysis of the data for marketing purposes does not take place."},{tag:"h4",text:"3. Legal basis for data processing"},{tag:"p",text:"The legal basis for the temporary storage of data and logfiles is Art. 6 (1) (f) GDPR."},{tag:"h4",text:"4. Duration of storage"},{tag:"p",text:"The data will be deleted as soon as it is no longer necessary for the purpose of its collection. The session is complete when the collection of data for the provision of the website is accomplished."},{tag:"p",text:"If the data is stored in log files, this is the case after seven days at the latest. Storage beyond this is possible. In this case, the IP addresses of the users are deleted or alienated so that an assignment of the calling client is not possible."},{tag:"h4",text:"5. Exercising your rights"},{tag:"p",text:"The collection of data for the provision of the website and the storage of the data in log files is absolutely necessary for the operation of the website. The user can object to this. Whether the objection is successful is to be determined within the framework of a balancing of interests."},{tag:"h3",text:"Use of cookies"},{tag:"h4",text:"1. Description and scope of data processing"},{tag:"p",text:"When you visit our website, we use technical tools for various functions, in particular cookies, which can be stored on your device. When you visit our website for the first time and at any time later, you have the choice of whether you generally permit the setting of cookies or which individual additional functions you would like to select. You can make changes in your browser settings or via our consent manager. Cookies are text files or information in a database that are stored on your hard drive and assigned to the browser you are using so that certain information can be passed to the entity that sets the cookie. We use technically necessary cookies, which are required for the technical structure of the website. Without these cookies, our website cannot be displayed (completely correctly) or the support functions are not possible."},{tag:"p",text:"The following data is stored and transmitted in the technical necessary cookies:"},{tag:"li",text:"Language settings"},{tag:"li",text:"Log-in information"},{tag:"li",text:"Entered search terms"},{tag:"li",text:"Frequency of page views"},{tag:"li",text:"Use of website functionalities"},{tag:"p",text:"We use cookies on our website that are not technically necessary. Technically unnecessary cookies are text files that are not only used for the functionality of the website, but also collect other data."},{tag:"p",text:"As a result, the following data will be processed:"},{tag:"li",text:"IP-address"},{tag:"li",text:"Internet user location"},{tag:"li",text:"Date and time of the website request"},{tag:"li",text:"Customization of advertisements to the user"},{tag:"li",text:"Tracking of the surfing behavior"},{tag:"li",text:"Linking the website visit with other social media platforms"},{tag:"h4",text:"2. Purpose of data processing"},{tag:"p",text:"The purpose of using technically necessary cookies is to ensure the functionality of our website. Some functions of our website cannot be offered without the use of cookies. For these, it is necessary that the browser is recognized even after a page change."},{tag:"p",text:"We need technical necessary cookies for the following purposes:"},{tag:"li",text:"Storage of language settings"},{tag:"li",text:"Storage of search queries"},{tag:"li",text:"Functionality of the website"},{tag:"p",text:"The use of technically not necessary cookies is carried out for the purpose of improving the quality of our website, its content, and thus our reach and profitability. By setting these cookies, we learn how the website is used and can thus constantly optimize our offer. These cookies serve us particularly for the following purposes:"},{tag:"li",text:"Improving the quality of our website and its content. Through the analysis cookies, we learn how the website is used and thus can constantly optimize our offer."},{tag:"h4",text:"3. Legal basis for data processing"},{tag:"p",text:"The regulations of the Telecommunications-Telemedia Data Protection Act (TTDSG) are relevant for the storage of information in the end user's terminal equipment and/or access to information already stored in the end user's terminal equipment. If the setting and reading of cookies is technically necessary, this is done to ensure the functionality of our website. In this case, the storage of and access to cookies on your terminal equipment is carried out on the basis of § 25(2)(2) TTDSG. This storage of and access to the information in your terminal equipment serves to facilitate your use of our website and to be able to offer you our services as you have requested. Some functions of our website also do not work without the use of these cookies and could therefore not be offered. The cookies are generally deleted after the session ends (e.g. logging out or closing the browser) or after the expiry of a specified duration. Information on different storage periods for cookies can be found in the following sections of this data protection declaration."},{tag:"p",text:"As far as cookies are set that are not technically necessary, this is done on the basis of your expressed consent, which you can provide via the cookie banner. The basis for storing and accessing information in this case is § 25(1) TTDSG in conjunction with. Art. 6(1)(1)(a), Art. 7 GDPR. You can withdraw your consent at any time with effect for the future or subsequently grant it again by configuring your settings for cookies accordingly. Alternatively, you can prevent the storage of cookies by making the appropriate settings in your browser software. Please note that the browser settings you make only affect the browser you are using. If personal data is processed following the storage of and access to the information on your terminal equipment, the provisions of the GDPR are relevant. Information on this can be found in the following sections of this privacy policy."},{tag:"h4",text:"4. Exercising your rights"},{tag:"p",text:"You can revoke consent to the use of cookies and manage your consent preferences at any time when you click on “Privacy Settings”."},{tag:"h3",text:"Newsletter"},{tag:"h4",text:"1. Description and scope of data processing"},{tag:"p",text:"You can subscribe to a newsletter on our website free of charge. When subscribing for the newsletter, the data from the input mask is transmitted to us."},{tag:"p",text:"We collect the following data from you in order to provide this service:"},{tag:"li",text:"Email address"},{tag:"p",text:"No data will be passed on to third parties in connection with data processing for the dispatch of newsletters. The data will be used exclusively for sending the newsletter."},{tag:"h4",text:"2. Purpose of data processing"},{tag:"p",text:"The user's email address is collected to deliver the newsletter to the recipient."},{tag:"p",text:"Additional personal data as part of the registration process is collected to prevent misuse of the services or email address."},{tag:"h4",text:"3. Legal basis for data processing"},{tag:"p",text:"The legal basis for the processing of data provided by the user after registration for the newsletter is Art. 6 (1) (a) GDPR if the user has given his consent."},{tag:"h4",text:"4. Duration of storage"},{tag:"p",text:"The data will be deleted as soon as it is no longer necessary to achieve the purpose for which it was collected. The user's email address will therefore be stored as long as the newsletter subscription is active."},{tag:"p",text:"The other personal data collected during the registration process is generally deleted after a period of seven days."},{tag:"h4",text:"5. Exercising your rights"},{tag:"p",text:"The subscription for the newsletter can be cancelled by the data subject at any time. For this purpose, every newsletter contains an opt-out link."},{tag:"p",text:"Through this, it is also possible to withdraw the consent to the storage of personal data collected during the registration process."},{tag:"h3",text:"Contact via Email"},{tag:"h4",text:"1. Description and scope of data processing"},{tag:"p",text:"You can contact us via the email address provided on our website. In this case, the personal data of the user transmitted with the email will be stored."},{tag:"p",text:"The data will be used exclusively for the processing of the conversation."},{tag:"h4",text:"2. Purpose of data processing"},{tag:"p",text:"If you contact us via email, this also constitutes the necessary legitimate interest in the processing of the data."},{tag:"h4",text:"3. Legal basis for data processing"},{tag:"p",text:"The legal basis for the processing of data transmitted in the course of sending an e-mail is Art. 6 (1) (f) GDPR. Our legitimate interest is to optimally answer your request that you send by e-mail."},{tag:"p",text:"If the purpose of the email contact is to conclude a contract, the additional legal basis for the processing is Art. 6 (1) (b) GDPR."},{tag:"h4",text:"4. Duration of storage"},{tag:"p",text:"The data will be deleted as soon as it is no longer necessary to achieve the purpose for which it was collected. For personal data sent by email, this is the case when the respective conversation with the user has ended. The conversation ends when it can be concluded from the circumstances that the matter in question has been conclusively resolved."},{tag:"p",text:"The additional personal data collected during the sending process will be deleted after a period of seven days at the latest."},{tag:"h4",text:"5. Exercising your rights"},{tag:"p",text:"You have the possibility to withdraw consent to the processing of their personal data at any time. If you contact us via email, you can object to the storage of his personal data at any time, by the following means:"},{tag:"p",text:"contact us by email, support@jina.ai"},{tag:"p",text:"In this case, all personal data stored while establishing contact will be deleted."},{tag:"h3",text:"Contact form"},{tag:"h4",text:"1. Description and scope of data processing"},{tag:"p",text:"A contact form is available on our website, which can be used for electronic contact. If you make use of this option, the data entered in the contact form will be transmitted to us and stored."},{tag:"p",text:"When sending the message, the following data will also be stored:"},{tag:"li",text:"Email address"},{tag:"li",text:"Last name"},{tag:"li",text:"First name"},{tag:"li",text:"Job Title, Company Size, Company Name, and Country"},{tag:"li",text:"Date and time"},{tag:"h4",text:"2. Purpose of data processing"},{tag:"p",text:"The processing of the personal data from the form as well as if you contact us by mail serves us exclusively for the purpose of establishing contact."},{tag:"p",text:"The other personal data processed during the sending process serve to prevent misuse of the contact form and to ensure the security of our information technology systems."},{tag:"h4",text:"3. Legal basis for data processing"},{tag:"p",text:"The legal basis for the processing of data transmitted while sending an email is Art. 6 (1) (f) GDPR. Our legitimate interest is to provide you with the best possible response to the request you send to us via the contact form. If the purpose of the email contact is to conclude a contract, the additional legal basis for the processing is Art. 6 (1) (b) GDPR."},{tag:"h4",text:"4. Duration of storage"},{tag:"p",text:"The data will be deleted as soon as they are no longer necessary to achieve the purpose for which they were collected. For the personal data from the contact form and those sent by email, this is the case when the respective conversation with the user has ended. The conversation ends when it can be inferred from the circumstances that the facts in question have been conclusively clarified."},{tag:"p",text:"The additional personal data collected during the sending process will be deleted after a period of seven days at the latest."},{tag:"h4",text:"5. Exercising your rights"},{tag:"p",text:"If you contact us via the contact form or via email, you can object to the storage of your personal data at any time, by the following means:"},{tag:"p",text:"contact us by email, support@jina.ai"},{tag:"p",text:"In this case, all personal data stored while establishing contact will be deleted."},{tag:"h3",text:"Application via Email and Form"},{tag:"p",text:"1. Description and scope of data processing"},{tag:"p",text:"There is a form on our website which can be used for electronic job applications. If an applicant makes use of this possibility, the data entered in the input mask will be transmitted to us and stored. The data is:"},{tag:"li",text:"Title"},{tag:"li",text:"Last name"},{tag:"li",text:"First name"},{tag:"li",text:"Email address"},{tag:"li",text:"Salary expectations"},{tag:"li",text:"Information on education and training"},{tag:"li",text:"Language proficiencies"},{tag:"li",text:"Curriculum Vitae"},{tag:"li",text:"Certificates"},{tag:"li",text:"Data that you send us during the application process"},{tag:"p",text:"Alternatively, you can send us your application by email. In this case, we collect your email address and the information you provide in the email."},{tag:"p",text:"After sending your application, you will receive confirmation of receipt of your application documents from us by email."},{tag:"p",text:"In addition, we offer an applicant/talent pool."},{tag:"p",text:"Your data will not be passed on to third parties. The data will be used exclusively for processing your application."},{tag:"h4",text:"2. Purpose of data processing"},{tag:"p",text:"The processing of personal data from the application form serves us solely to process your application. If you contact us by email, this also constitutes the necessary legitimate interest in the processing of the data."},{tag:"p",text:"The other personal data processed during the sending process serve to prevent misuse of the application form and to ensure the security of our information technology systems."},{tag:"h4",text:"3. Legal basis for data processing"},{tag:"p",text:"The legal basis for the processing of the data is the initiation of the contractual relationship at the request of the data subject, Art. 6 (1) (b) Alt. 1 GDPR and § 26 (1) BDSG (Federal Act of Data Protection)."},{tag:"p",text:"The legal basis for the processing of data within the context of the applicant pool is the applicant's express consent, Art. 6 (1) (a) GDPR."},{tag:"h4",text:"4. Duration of storage"},{tag:"p",text:"After completion of the application procedure, the data will be stored for up to 6 months. Your data will be deleted after 6 months at the latest. In the case that you have given your consent for us to store your data for a further 12 months, the total storage period will be 18 months. In the event of a legal obligation, the data will be stored within the framework of the applicable provisions."},{tag:"p",text:"The additional personal data collected during the sending process will be deleted after a period of seven days at the latest."},{tag:"h3",text:"Corporate web profiles on social networks"},{tag:"p",text:"YouTube:"},{tag:"p",text:"YouTube LLC, 901 Cherry Ave., San Bruno, CA 94066, United States"},{tag:"p",text:"On our company profile we provide information and offer Youtube users the possibility of communication. If you carry out an action on our Youtube company profile (e.g. comments, contributions, likes etc.), you may make personal data (e.g. clear name or photo of your user profile) public. However, as we generally or to a large extent have no influence on the processing of your personal data by Youtube, we cannot make any binding statements regarding the purpose and scope of the processing of your data."},{tag:"p",text:"Our corporate profile in social networks is used for communication and information exchange with (potential) customers. We use the company's profile for:"},{tag:"li",text:"Products"},{tag:"li",text:"Community"},{tag:"p",text:"Publications on the company profile can contain the following content:"},{tag:"li",text:"Information about products"},{tag:"li",text:"Information about services"},{tag:"li",text:"Contact with customers"},{tag:"p",text:"Every user is free to publish personal data."},{tag:"p",text:"As far as we process your personal data in order to evaluate your online behavior, to offer you sweepstakes or to conduct lead campaigns, this is done on the basis of your express declaration of consent, Art. 6 (1) (a), Art. 7 GDPR. The legal basis for processing personal data for the purpose of communicating with customers and interested parties is Art. 6 (1) (f) GDPR. Thereby, our legitimate interest is to answer your request optimally or to be able to provide the requested information. If the aim of contacting you is to conclude a contract, the additional legal basis for the processing is Art. 6 (1) (b) GDPR."},{tag:"p",text:"The data generated on the company profile are not stored in our own systems."},{tag:"p",text:"You can object at any time to the processing of your personal data that we collect within the framework of your use of our Youtube corporate web profile and assert your rights as a data subject mentioned under IV. of this privacy policy. Please send us an informal email to support@jina.ai. For further information on the processing of your personal data by Youtube and the corresponding objection options, please click here:"},{tag:"p",text:'YouTube: <a href="https://policies.google.com/privacy?gl=DE&hl=en" style="color: white">https://policies.google.com/privacy?gl=DE&hl=en</a>'},{tag:"p",text:"Twitter:"},{tag:"p",text:"Twitter International Company, One Cumberland Place, Fenian Street, Dublin 2, Ireland"},{tag:"p",text:"On our company profile we provide information and offer Twitter users the possibility of communication. If you carry out an action on our Twitter company profile (e.g. comments, contributions, likes etc.), you may make personal data (e.g. clear name or photo of your user profile) public. However, as we generally or to a large extent have no influence on the processing of your personal data by Twitter, we cannot make any binding statements regarding the purpose and scope of the processing of your data."},{tag:"p",text:"Our corporate profile in social networks is used for communication and information exchange with (potential) customers. We use the company's profile for:"},{tag:"li",text:"Products"},{tag:"li",text:"Community"},{tag:"p",text:"Publications on the company profile can contain the following content:"},{tag:"li",text:"Information about products"},{tag:"li",text:"Information about services"},{tag:"li",text:"Contact with customers"},{tag:"p",text:"Every user is free to publish personal data."},{tag:"p",text:"As far as we process your personal data in order to evaluate your online behavior, to offer you sweepstakes or to conduct lead campaigns, this is done on the basis of your express declaration of consent, Art. 6 (1) (a), Art. 7 GDPR. The legal basis for processing personal data for the purpose of communicating with customers and interested parties is Art. 6 (1) (f) GDPR. Thereby, our legitimate interest is to answer your request optimally or to be able to provide the requested information. If the aim of contacting you is to conclude a contract, the additional legal basis for the processing is Art. 6 (1) (b) GDPR."},{tag:"p",text:"The data generated on the company profile are not stored in our own systems."},{tag:"p",text:"You can object at any time to the processing of your personal data that we collect within the framework of your use of our Twitter corporate web profile and assert your rights as a data subject mentioned under IV. of this privacy policy. Please send us an informal email to support@jina.ai. For further information on the processing of your personal data by Twitter and the corresponding objection options, please click here:"},{tag:"p",text:'Twitter: <a href="https://twitter.com/de/privacy" style="color: white">https://twitter.com/de/privacy</a>'},{tag:"h3",text:"Use of corporate profiles in professionally oriented networks"},{tag:"h4",text:"1. Scope of data processing"},{tag:"p",text:"We use corporate profiles on professionally oriented networks. We maintain a corporate presence on the following professionally oriented networks:"},{tag:"li",text:"LinkedIn"},{tag:"p",text:"On our site we provide information and offer users the possibility of communication."},{tag:"p",text:"The corporate profile is used for job applications, information, public relations, and active sourcing."},{tag:"p",text:"We do not have any information on the processing of your personal data by the companies jointly responsible for the corporate profile. Further information can be found in the privacy policy of:"},{tag:"p",text:"LinkedIn:"},{tag:"p",text:'LinkedIn:<a href="https://www.linkedin.com/legal/privacy-policy" style="color: white">https://www.linkedin.com/legal/privacy-policy</a>'},{tag:"p",text:"If you carry out an action on our company profile (e.g. comments, contributions, likes etc.), you may make personal data (e.g. clear name or photo of your user profile) public."},{tag:"h4",text:"2. Legal basis for data processing"},{tag:"p",text:"The legal basis for the processing of personal data for the purpose of communication with customers and interested parties is Art. 6 (1) (f) GDPR. Our legitimate interest is to answer your request optimally or to be able to provide the requested information. If the aim of contacting you is to conclude a contract, the additional legal basis for the processing is Art. 6 (1) (b) GDPR."},{tag:"h4",text:"3. Purpose of the data processing"},{tag:"p",text:"Our corporate web profile serves to inform users about our services. Every user is free to publish personal data."},{tag:"h4",text:"4. Duration of storage"},{tag:"p",text:"The data generated on the company profile are not stored in our own systems."},{tag:"h4",text:"5. Exercising your rights"},{tag:"p",text:"You can object at any time to the processing of your personal data which we collect within the scope of your use of our corporate web profile and assert your rights as a data subject mentioned under IV. of this privacy policy. Please send us an informal email to the email address stated in this privacy policy."},{tag:"p",text:"You can find further information on objection and removal options here:"},{tag:"p",text:"LinkedIn:"},{tag:"p",text:'<a href="https://www.linkedin.com/legal/privacy-policy" style="color: white">https://www.linkedin.com/legal/privacy-policy</a>'},{tag:"h3",text:"Hosting"},{tag:"p",text:"The website is hosted on servers of a service provider commissioned by us."},{tag:"p",text:"Our service provider is:"},{tag:"p",text:"GitHub 88 Colin P Kelly Jr Street San Francisco, California 94107"},{tag:"p",text:"For further information on the processing of personal data by Github please see:"},{tag:"p",text:'<a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" style="color: white">https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement</a>'},{tag:"p",text:"The servers automatically collect and store information in so-called server log files, which your browser automatically transmits when you visit the website. The stored information is:"},{tag:"li",text:"Information about the browser type and the version used"},{tag:"li",text:"The user's operating system"},{tag:"li",text:"Date and time of access"},{tag:"li",text:"The Internet service provider of the user"},{tag:"li",text:"Websites from which the user's system accessed our website"},{tag:"li",text:"Websites the user's system accessed through our website"},{tag:"li",text:"IP address of the user's device"},{tag:"p",text:"This data will not be merged with other data sources. The data is collected on the basis of Art. 6 (1) (f) GDPR. The website operator has a legitimate interest in the technically error-free presentation and optimization of his website -and server log files are therefore recorded."},{tag:"p",text:"The server of the website is geographically located in the USA."},{tag:"p",text:"The Service Provider complies with the EU-U.S. Data Privacy Framework (EU-U.S. DPF) as set forth by the U.S. Department of Commerce and has certified that it adheres to the EU-U.S. Data Privacy Framework Principles (EU-U.S. DPF Principles) when processing personal data received from the European Union in reliance on the EU-U.S. DPF. More information can be found in at:"},{tag:"p",text:'<a href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?id=a2z3d0000001wwUAAQ&status=Active" style="color: white">https://www.dataprivacyframework.gov/s/participant-search/participant-detail?id=a2z3d0000001wwUAAQ&status=Active</a>'},{tag:"h3",text:"Geotargeting"},{tag:"p",text:'We use the IP address and other information provided by the user (e.g. the postal code used for registration or ordering) to approach regional target groups (so-called "geotargeting").'},{tag:"p",text:"The regional target group approach is used, for example, to automatically display regional offers or advertisements that often are more relevant to users. The legal basis for the use of the IP address and any other information provided by the user (e.g. postal code) is Art. 6 (1) (f) GDPR, based on our legitimate interest in ensuring a more precise target group approach and thus providing offers and advertising with greater relevance for our users."},{tag:"p",text:"Part of the IP address and the additional information provided by the user (e.g. postal code) are merely processed and not stored separately."},{tag:"p",text:"You can prevent geotargeting by, for example, using a VPN or proxy server that prevents accurate localization. In addition, depending on the browser you are using, you can also deactivate a location localization in the corresponding browser settings (as far as this is supported by the respective browser)."},{tag:"p",text:"We use geotargeting on our website for the following purposes:"},{tag:"li",text:"Products"},{tag:"h3",text:"Registration"},{tag:"h4",text:"1. Description and scope of data processing"},{tag:"p",text:"We offer users the opportunity to register by providing personal data. The data is entered into a form and transmitted to us and stored. The following data is collected as part of the registration process:"},{tag:"li",text:"Email address"},{tag:"p",text:"As part of the registration process, your consent to the processing of this data is obtained."},{tag:"h4",text:"2. Purpose of data processing"},{tag:"p",text:"A registration of the user is necessary for the fulfilment of a contract with the user or for the execution of pre-contractual measures."},{tag:"h4",text:"3. Legal basis for data processing"},{tag:"p",text:"The legal basis for the processing of the data is Art. 6 (1) (a) GDPR where you have provided consent."},{tag:"p",text:"The legal basis for the processing of registration data necessary to conclude or fulfil a contract with you is Art. 6 (1) (b) GDPR."},{tag:"h4",text:"4. Duration of storage"},{tag:"p",text:"The data will be deleted as soon as it is no longer necessary to achieve the purpose for which it was collected."},{tag:"p",text:"This is the case for the data collected during the registration process for the execution of a contract or for the implementation of pre-contractual measures if the data is no longer required for the execution of the contract. Even after the conclusion of the contract, it may be necessary to store personal data of the contractual partner in order to comply with contractual or legal obligations."},{tag:"h4",text:"5. Exercising your rights"},{tag:"p",text:"As a user you have the possibility to cancel the registration at any time. You can request a change to the data stored about you at any time, by the following means:"},{tag:"p",text:"The user should reach out to our support team at support@jina.ai to delete their account or change their data."},{tag:"p",text:"If the data is necessary for the fulfilment of a contract or for the implementation of pre-contractual measures, a premature deletion of the data is only possible insofar as contractual or legal obligations do not stand in the way of a deletion."},{tag:"h3",text:"Content Delivery Networks"},{tag:"h4",text:"1. Description and scope of data processing"},{tag:"p",text:"On our website we use functions of the content delivery network CloudFlare of CloudFlare Germany GmbH, Rosental 7, 80331 Munich, Germany (Hereinafter referred to as CloudFlare). A Content Delivery Network (CDN) is a network of regionally distributed servers connected via the Internet to deliver content, especially large media files such as videos. CloudFlare offers web optimization and security services that we use to improve the load times of our website and to protect it from misuse. When you visit our website you will be connected to the servers of CloudFlare, e.g. to retrieve content. This allows personal data to be stored and evaluated in server log files, the user's activity (e.g. which pages have been visited) and device and browser information (e.g. IP address and operating system). Further information on the collection and storage of data by CloudFlare can be found here:"},{tag:"p",text:'<a href="https://www.cloudflare.com/en-gb/privacypolicy/" style="color: white">https://www.cloudflare.com/en-gb/privacypolicy/</a>'},{tag:"h4",text:"2. Purpose of data processing"},{tag:"p",text:"The use of CloudFlare's features serves to deliver and accelerate online applications and content."},{tag:"h4",text:"3. Legal basis for data processing"},{tag:"p",text:"The data is collected on the basis of Art. 6 (1) (f) GDPR. The website operator has a legitimate interest in the technically error-free presentation and optimization of his website -and the server log files are therefore recorded."},{tag:"h4",text:"4. Duration of storage"},{tag:"p",text:"Your personal information will be retained for as long as necessary to fulfil the purposes described in this Privacy Policy or as required by law."},{tag:"h4",text:"5. Exercising your rights"},{tag:"p",text:"Information about objection and removal options regarding CloudFlare can be found at:"},{tag:"p",text:'<a href="https://www.cloudflare.com/en-gb/privacypolicy/" style="color: white">https://www.cloudflare.com/en-gb/privacypolicy/</a>'},{tag:"h3",text:"Integrated third-party services"},{tag:"p",text:"We use various service providers to deliver the service we offer through the app."},{tag:"p",text:"Generally, where such services are essential to providing the basic service offered by the website, we have a legitimate interest in sharing your data with the relevant service providers in order to provide the relevant website service."},{tag:"p",text:"Where such services are required for additional services, enhanced functionalities, or additional purposes, your personal data will only be transferred to service providers if you provide consent."},{tag:"table",id:"Integrated third-party services",columns:[{name:"Service name",label:"Service name",align:"left",field:"service_name"},{name:"Company",label:"Company",align:"left",field:"company"},{name:"Location",label:"Location",align:"left",field:"location"},{name:"Purpose",label:"Purpose",align:"left",field:"purpose"},{name:"Reference",label:"Reference",align:"left",field:"reference"},{name:"Link",label:"Link",align:"left",field:"link"}],rows:[{service_name:"Google Tag Manager",company:"Google Ireland Ltd.",location:"Irland (USA)",purpose:"Tag configuration and integration of Google services",reference:"Art. 6 para. 1 p. 1 lit. a GDPR",link:"https://policies.google.com/privacy?gl=DE&hl=de https://business.safety.google/gdpr/"},{service_name:"Google Webfonts",company:"Google Ireland Ltd.",location:"Irland (USA)",purpose:"Fonts",reference:"Art. 6 para. 1 p. 1 lit. a GDPR",link:"https://policies.google.com/privacy?gl=DE&hl=de https://business.safety.google/gdpr/"},{service_name:"Google ReCaptcha",company:"Google Ireland Ltd.",location:"Irland (USA)",purpose:"Bot Protection",reference:"Art. 6 para. 1 p. 1 lit. a GDPR",link:"https://policies.google.com/privacy?gl=DE&hl=de https://business.safety.google/gdpr/"},{service_name:"Google Ads Remarketing",company:"Google Ireland Ltd.",location:"Irland (USA)",purpose:"Marketing / Tracking",reference:"Art. 6 para. 1 p. 1 lit. a GDPR",link:"https://policies.google.com/privacy?gl=DE&hl=de https://business.safety.google/gdpr/"},{service_name:"Google AdWords",company:"Google Ireland Ltd.",location:"Irland (USA)",purpose:"Marketing",reference:"Art. 6 para. 1 p. 1 lit. a GDPR",link:"https://policies.google.com/privacy?gl=DE&hl=de https://business.safety.google/gdpr/"},{service_name:"Google Analytics",company:"Google Ireland Ltd.",location:"Irland (USA)",purpose:"Analytic",reference:"Art. 6 para. 1 p. 1 lit. a GDPR",link:"https://policies.google.com/privacy?gl=DE&hl=de https://business.safety.google/gdpr/"},{service_name:"Hotjar",company:"Hotjar Ltd",location:"Malta*",purpose:"Tracking",reference:"Art. 6 para. 1 p. 1 lit. a GDPR",link:"https://www.hotjar.com/legal/policies/privacy/de/"},{service_name:"HubSpot",company:"HubSpot Inc.",location:"USA",purpose:"Customer surveys",reference:"Art. 6 para. 1 p. 1 lit. a GDPR",link:"https://legal.hubspot.com/de/privacy-policy"},{service_name:"LinkedIn",company:"LinkedIn Ireland Unlimited Company",location:"Irland (USA)",purpose:"Branding, Recruitment, Marketing and Community Building",reference:"Art. 6 para. 1 p. 1 lit. a GDPR",link:"https://www.linkedin.com/legal/privacy-policy?_l=de_DE https://de.linkedin.com/legal/l/dpa"},{service_name:"MailChimp",company:"The Rocket Science Group",location:"USA",purpose:"Email marketing, newsletter deployment, customer communication",reference:"Art. 6 para. 1 p. 1 lit. a GDPR",link:"https://mailchimp.com/en-gb/legal/cookies/#Why_do_we_use_cookies_and_other_tracking_technologies%3F https://mailchimp.com/en-gb/gdpr/"},{service_name:"Twitter",company:"Twitter International Company",location:"Irland (USA)",purpose:"Branding, Communication,Marketing and Community Building",reference:"Art. 6 para. 1 p. 1 lit. a GDPR",link:"https://twitter.com/de/privacy https://help.twitter.com/de/rules-and-policies/global-operations-and-data-transfer"},{service_name:"YouTube",company:"YouTube LLC",location:"USA",purpose:"Video embedding",reference:"Art. 6 para. 1 p. 1 lit. a GDPR",link:"https://policies.google.com/privacy?gl=DE&hl=de https://business.safety.google/gdpr/"},{service_name:"Usercentrics",company:"Usercentrics GmbH",location:"Deutschland*",purpose:"Consent management, compliance with legal requirements",reference:"Art. 6 para. 1 p. 1 lit. f GDPR",link:"https://usercentrics.com/de/datenschutzerklaerung/"},{service_name:"Discord",company:"Discord Inc.",location:"USA",purpose:"Community building, customer support, marketing",reference:"Art. 6 para. 1 p. 1 lit. a GDPR",link:"https://discord.com/privacy"},{service_name:"Github",company:"GitHub",location:"USA",purpose:"Community building, Facilitate downloads and use",reference:"Art. 6 para. 1 p. 1 lit. f GDPR",link:"https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"},{service_name:"Meetup",company:"Meetup LLC",location:"Ireland",purpose:"Branding and community building",reference:"Art. 6 para. 1 p. 1 lit. f GDPR",link:"https://help.meetup.com/hc/en-us/articles/360044422391-Privacy-Policy/?urlkey=help&topic=help&__topic_subdomain=1"},{service_name:"WeChat Official Account",company:"WeChat International Pte. Ltd.	/ Tencent International Services Europe BV",location:"Singapore / Netherlands",purpose:"Branding, Recruitment, Marketing and Community Building",reference:"Art. 6 para. 1 p. 1 lit. f GDPR",link:"https://www.wechat.com/en/privacy_policy.html"}]},{tag:"h3",text:"Integration of Third-Party Services via External Service Providers"},{tag:"h4",text:"1. Description and scope of data processing"},{tag:"p",text:"We integrate certain plugins on our website via external service providers in the form of content delivery networks. When you access our website, a connection is established to the servers of the providers used by us to retrieve content and store it in the cache of the user's browser. This allows personal data to be stored and evaluated in server log files, in particular device and browser information (e.g. IP address and operating system). We use the following services:"},{tag:"li",text:"Google Hosted Libraries"},{tag:"h4",text:"2. Purpose of data processing"},{tag:"p",text:"The use of the functions of these services serves the delivery and acceleration of online applications and content."},{tag:"h4",text:"3. Legal basis for data processing"},{tag:"p",text:"This data is collected on the basis of Art. 6 (1) (f) GDPR. The website operator has a justified interest in the technically correct presentation and optimization of the website."},{tag:"h4",text:"4. Duration of storage"},{tag:"p",text:"Your personal information will be retained for as long as necessary to fulfil the purposes described in this Privacy Policy or as required by law."},{tag:"h4",text:"5. Exercising your rights"},{tag:"p",text:"You can find information on objection and removal options regarding Google at: "},{tag:"p",text:'<a href="https://policies.google.com/privacy?hl=en" style="color: white">https://policies.google.com/privacy?hl=en</a>'},{tag:"p",text:'This privacy policy has been created with the assistance of <a href="https://www.dataguard.com/" style="color: white;">DataGuard</a>.'},{tag:"h2",text:"Imprint",id:"Imprint"},{tag:"h4",text:"Commercial Address"},{tag:"p",text:"Jina AI GmbH"},{tag:"p",text:"Prinzessinnenstraße 19-20, 10969 Berlin, Germany"},{tag:"p",text:"Register: Amtsgericht Berlin Register Number: HRB 218021"},{tag:"p",text:"VAT Identification Number: DE331656714"},{tag:"p",text:"D-U-N-S® Number: 343200675"},{tag:"p",text:"Managing Director: Jiao Liu"},{tag:"p",text:"Authorizing Signatory: Jiao Liu"}]},M=N.menus,V=`# Legal Information

Last Modified: Sep 26th, 2024

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

Customers and prospects can request access to the audit report here.

<q-btn square padding="lg" outline label="Request audit report" to="/contact-sales" />

<div class="row justify-around q-my-xl">
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

### 4\\. Intellectual Property Rights

4.1 All software, data bases, documents, information, algorithms, processes, prototypes, ideas, knowhow, patents, trademarks or other work results (“IP”) used by Jina AI to provide the Services or made available to the Customer by Jina AI are owned by Jina AI or its licensors (“Jina AI IP”). Jina AI does not grant any licenses in the Jina AI IP or any other rights to use the Jina AI IP to the Customer.

4.2 Where Jina AI as part of its Services makes Jina AI IP available to the Customer, Jina AI grants the Customer (subject to the payment of the Service Charges, cf. Section 6 of these TCs) a non-exclusive, non-sublicensable, non-transferable, revocable and limited right to use such Jina AI IP strictly for the purpose of using the Services agreed in an Order Form and for the term set out in Section 11. Any other rights of the Customer in the Jina AI IP are excluded. Nothing in these TCs shall limit or exclude Jina AI's right to use the Jina AI IP or any other materials developed, used or provided by Jina AI under these TCs for its own business purposes or for other customers.

4.3 Where as an outcome of the Customer’s use of the Services certain results (e.g. pictures, text, software, graphics, presentations, documents, data, works of art, or IP) are created through the Services (collectively, the “Output”), Jina AI (except as expressly stated otherwise herein) claims no rights to such Output and imposes no restrictions on the Customer regarding the use of the Output unless otherwise agreed in an agreement with the Customer. The Customer shall be responsible for such Output and its compliance with applicable law and applicable third party rights. In particular, Jina AI does not warrant that any Output is free of, or does not infringe, third party rights.

4.4 The Customer must ensure that any information, pictures, text, software, graphics, presentations, documents, work results, IP or other data the Customer provides in the course of using the Services (collectively “Input”), e.g. Input that the Customer uploads to Jina AI or processes through the Services, comply with all applicable laws and regulations, the terms of these TCs, and are not illegal, immoral or defamatory (e.g. do not include defamatory, pornographic, racist or violent content). The Customer confirms and commits that the Input and its use with the Services does not infringe any third party intellectual property or privacy rights and that the Customer is entitled to use the Input with the Services. If the Customer breaches its obligations under this Section 4.4, Jina AI may remove, delete or block the Input at its own discretion and, without prior notice, deny the Customer access to the Services.

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

### 9\\. Confidentiality

9.1 Each party agrees that all information received from the other party under these TCs which is (i) marked as confidential or (ii) from an objective perspective must be considered to be confidential, shall be maintained in confidence and shall not be disclosed to others. The receiving party agrees that without the prior written consent of the other party it will not use such information for any purpose other than the fulfillment of this contract.

9.2 Each party shall use no lesser standard of care to protect the confidentiality of information received from the other party than it uses to protect its own confidential information, and shall limit disclosure of such information to those of its group companies, personnel and consultants who have an actual need to know for purposes related to this contract and who have a written obligation to protect the confidentiality of such information.

9.3 Upon termination of the contract, each party will return to the other party such party's confidential information and data and will delete all copies of such information/data under its and its subcontractors' control (subject to applicable retention requirements).

9.4 Jina AI shall, subject to applicable mandatory data protection requirements, be entitled to retain data uploaded to the Jina AI Systems or otherwise provided by the Customer or collected by Jina AI in the course of providing the Services and to use such data in anonymized/pseudonymized format for its business purposes including to improve its artificial intelligence applications.

### 10\\. Data Protection

10.1 Jina AI will comply with all applicable data protection requirements. Please see for further details the Jina AI Data Protection Policy under [Privacy Policy](/legal/#privacy-policy).

10.2 Where Jina AI in providing the Services acts as a data processor pursuant to Art. 28 GDPR, Jina AI and Customer will enter into a data processing agreement in accordance with the requirements of Art. 28 GDPR.

### 11\\. Term and Termination

11.1 The contract between Jina AI and the Customer enters into force upon Jina AI's acceptance of the Order Form submitted by the Customer. Unless agreed otherwise in the Order Form, the contract continues to apply for an indefinite period of time. It can be terminated by each party in writing with a notice period of four (4) weeks to the end of a calendar quarter. Any ordinary termination is excluded during any minimum contract term the parties may have agreed in the Order Form.

11.2 Each party's statutory right to terminate this contract for good cause with immediate effect shall remain unaffected. A breach of contract shall only entitle a party to terminate the contract for good cause if the other party has breached a material obligation and – provided that the breach is curable – has failed to cure the breach within a reasonable grace period of at least twenty working days from receipt of a corresponding written warning notice served by the terminating party.

### 12\\. Final Provisions

12.1 Collateral agreements and amendments to these TCs must be made in writing. This also applies to a waiver of this written form requirement. Where these TCs establish a written form requirement, text form shall be sufficient unless expressly provided otherwise (e.g. by reference to Section 126 German Civil Code).

12.2 Jina AI reserves the right to transfer, assign or dispose of by novation any or all rights or obligations under these T&Cs, taking the Customers’ legitimate interests into account. The Customer may not assign to any third party any of its rights under the contract in whole or in part without the prior written consent of Jina AI.

12.3 Jina AI shall be entitled to involve subcontractors in the provision of the Services.

12.4 Unless agreed otherwise in the Order Form, the place of performance for Services shall be the business seat of Jina AI.

12.5 Offsetting and retention rights of the Customer shall be excluded. This shall not apply if its corresponding counterclaims have been confirmed by a final court order or acknowledged by Jina AI in writing.

12.6 Jina AI shall be entitled to update and change these TCs from time to time. In this case, Jina AI will inform the Customer of such changes with a notice period of at least six (6) weeks before such changes become effective. If the Customer does not object in writing to the changes within four (4) weeks from receipt of the notice, the changes shall be deemed approved. If the Customer objects to the changes, the changes will not become effective between Jina AI and the Customer but Jina AI shall, within four (4) weeks from receipt of the objection, be entitled to terminate this contract with a notice period of six (6) weeks to the end of a month.

12.7 German law shall apply, excluding its conflict of laws rules and the UNCISG. The courts competent for Berlin shall have exclusive jurisdiction over all matters relating to these TCs.

12.8 If any provision of these TCs should be invalid in whole or in part or if these TCs contain any omission, the effectiveness of the remaining provisions shall not be affected. The invalid or omitted provision shall be replaced with retroactive effect by an effective and enforceable provision which most closely legally and financially approximates to what the parties intended or would have intended if they had taken such invalidity into account when agreeing these TCs.

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

Dachauer Str. 65

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
`,Q=R({__name:"LegalPage",setup(e,{expose:o}){o();const l=j(),{t}=q(),h=()=>{var a;(a=window.print)==null||a.call(window)};H({page:"legal_page",url:"legal",banner:"banner.png"});const c={route:l,t,print:h,get LEGAL_SECTIONS(){return M},get locateByHash(){return O},get legalMd(){return V}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),$={class:"row justify-center q-py-xl q-my-xl"},K={class:"col-12"},X={class:"row q-my-xl justify-center print-hide"},Z={class:"col-11 col-sm-10 col-md-8 col-lg-7 col-xl-6 q-gutter-y-xl"},ee={class:"row print-hide q-gutter-xs"},te={class:"row justify-center"},oe={class:"col-10 col-md-8 col-lg-7 col-xl-6"},ae={class:"content q-my-xl q-py-xl"};function ie(e,o,l,t,h,c){const a=U("q-markdown");return g(),m(W,null,{default:y(()=>[s("div",$,[s("div",K,[s("div",X,[s("div",Z,[s("div",ee,[p(b,{outline:"",icon:"print",label:t.t("print"),onClick:o[0]||(o[0]=i=>t.print()),square:"","no-wrap":""},null,8,["label"]),p(b,{outline:"",label:t.t("download"),target:"_blank",href:"/Jina_AI_GmbH_Letter_of_Attestation_SOC_2_Type_1.pdf",square:"","no-wrap":"",icon:"download"},null,8,["label"])]),p(z,null,{default:y(()=>[(g(!0),E(_,null,L(t.LEGAL_SECTIONS,i=>(g(),m(Y,{key:i.label,label:i.label,onClick:n=>t.locateByHash(i.link),class:"cursor-pointer"},null,8,["label","onClick"]))),128))]),_:1})])]),s("div",te,[s("div",oe,[s("div",ae,[p(a,{src:t.legalMd,"no-heading-anchor-links":"","no-linkify":"",html:!0},null,8,["src"])])])])])])]),_:1})}const le=F(Q,[["render",ie],["__scopeId","data-v-0bdaab76"],["__file","LegalPage.vue"]]);export{le as default};
