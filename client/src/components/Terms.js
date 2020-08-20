import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Terms extends Component{
    state = {
        redirect : false
    };

    componentDidMount() {

        let user = JSON.parse(localStorage.getItem('user'))
        if(user){
            this.setState({ redirect : true });
        }
    }


    render(){
        // console.log('this.state', this.state);
        return(
                <div>
                 
                  <h1 className="devInfo">Terms and Conditions</h1>
                  <br/>
                    <p className="terms">
                    Bookgreenslot company , on behalf of itself and its affiliates/group companies under the brand "bookgreenslot.com" , is the author and publisher of the internet resource www.bookgreenslot.com (“Website”). Bookgreenslot owns and operates the services provided through the Website.
                    <br/>
1.NATURE AND APPLICABILITY OF TERMS<br/>
Please carefully go through these terms and conditions (“Terms & Cond”) and the privacy policy available at https://www.bookgreenslot.com/others/privacy (“Privacy Policy”) before you decide to access the Website or avail the services made available on the Website by Bookgreenslot. These Terms and the Privacy Policy together constitute a legal agreement (“Agreement”) between you and Bookgreenslot in connection with your visit to the Website and your use of the Services (as defined below).

The Agreement applies to you whether you are -
<br/>
A medical practitioner or health care provider (whether an individual professional or an organization) or similar institution wishing to be listed, or already listed, on the Website, including designated, authorized associates of such practitioners or institutions (“Practitioner(s)”, “you” or “User”); or
A patient, his/her representatives or affiliates, searching for Practitioners through the Website (“End-User”, “you” or “User”); or
Otherwise a user of the Website (“you” or “User”).
This Agreement applies to those services made available by Bookgreenslot on the Website, which are offered free of charge or for which the users are charged, to the Users (“Services”), including the following:
<br/>
For Practitioners: Listing of Practitioners and their profiles and contact details, to be made available to the other Users and visitors to the Website;
For other Users: Facility to (i) create and maintain ‘Health Accounts’, (ii) search for Practitioners by name, specialty, and geographical area, or any other criteria that may be developed and made available by Bookgreenslot, and (iii) to make appointments with Practitioners.
The Services may change from time to time, at the sole discretion of Bookgreenslot, and the Agreement will apply to your visit to and your use of the Website to avail the Service, as well as to all information provided by you on the Website at any given point in time.
<br/>
This Agreement defines the terms and conditions under which you are allowed to use the Website and describes the manner in which we shall treat your account while you are registered as a member with us. If you have any questions about any part of the Agreement, feel free to contact us at support@bookgreenslot.com.

By downloading or accessing the Website to use the Services, you irrevocably accept all the conditions stipulated in this Agreement, the Subscription Terms of Service and Privacy Policy, as available on the Website, and agree to abide by them. This Agreement supersedes all previous oral and written terms and conditions (if any) communicated to you relating to your use of the Website to avail the Services. By availing any Service, you signify your acceptance of the terms of this Agreement.

We reserve the right to modify or terminate any portion of the Agreement for any reason and at any time, and such modifications shall be informed to you in writing You should read the Agreement at regular intervals. Your use of the Website following any such modification constitutes your agreement to follow and be bound by the Agreement so modified.

You acknowledge that you will be bound by this Agreement for availing any of the Services offered by us. If you do not agree with any part of the Agreement, please do not use the Website or avail any Services.

Your access to use of the Website and the Services will be solely at the discretion of Bookgreenslot.
<br/>
The Agreement is published in compliance of, and is governed by the provisions of Indian law, including but not limited to:

the Indian Contract Act, 1872,
the (Indian) Information Technology Act, 2000, and
the rules, regulations, guidelines and clarifications framed there under, including the (Indian) Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011 (the “SPI Rules”), and the (Indian) Information Technology (Intermediaries Guidelines) Rules, 2011 (the “IG Rules”).
2.CONDITIONS OF USE
You must be 18 years of age or older to register, use the Services, or visit or use the Website in any manner. By registering, visiting and using the Website or accepting this Agreement, you represent and warrant to Bookgreenslot that you are 18 years of age or older, and that you have the right, authority and capacity to use the Website and the Services available through the Website, and agree to and abide by this Agreement.
<br/>
3.TERMS OF USE APPLICABLE TO ALL USERS OTHER THAN PRACTITIONERS
The terms in this Clause 3 are applicable only to Users other than Practitioners.
<br/>
3.1END-USER ACCOUNT AND DATA PRIVACY
3.1.1 The terms “personal information” and “sensitive personal data or information” are defined under the SPI Rules, and are reproduced in the Privacy Policy.
3.1.2 Bookgreenslot may by its Services, collect information relating to the devices through which you access the Website, and anonymous data of your usage. The collected information will be used only for improving the quality of Bookgreenslot’s services and to build new services.
3.1.3 The Website allows Bookgreenslot to have access to registered Users’ personal email or phone number, for communication purpose so as to provide you a better way of booking appointments and for obtaining feedback in relation to the Practitioners and their practice.
3.1.4 The Privacy Policy sets out, inter-alia:
The type of information collected from Users, including sensitive personal data or information;
The purpose, means and   modes of usage of such information;
How and to whom Bookgreenslot will disclose such information; and,
Other information mandated by the SPI Rules.
3.1.5 The User is expected to read and understand the Privacy Policy, so as to ensure that he or she has the knowledge of, inter-alia:
the fact that certain information is being collected;
the purpose for which the information is being collected;
the intended recipients of the information;
the nature of collection and retention of the information; and
the name and address of the agency that is collecting the information and the agency that will retain the information; and
the various rights available to such Users in respect of such information.
3.1.6 Bookgreenslot shall not be responsible in any manner for the authenticity of the personal information or sensitive personal data or information supplied by the User to Bookgreenslot or to any other person acting on behalf of Bookgreenslot.
3.1.7 The User is responsible for maintaining the confidentiality of the User’s account access information and password, if the User is registered on the Website. The User shall be responsible for all usage of the User’s account and password, whether or not authorized by the User. The User shall immediately notify Bookgreenslot of any actual or suspected unauthorized use of the User’s account or password. Although Bookgreenslot will not be liable for your losses caused by any unauthorized use of your account, you may be liable for the losses of Bookgreenslot or such other parties as the case may be, due to any unauthorized use of your account.
3.1.8 If a User provides any information that is untrue, inaccurate, not current or incomplete (or becomes untrue, inaccurate, not current or incomplete), or Bookgreenslot has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, Bookgreenslot has the right to discontinue the Services to the User at its sole discretion.
3.1.9Bookgreenslot may use such information collected from the Users from time to time for the purposes of debugging customer support related issues
3.3LISTING CONTENT AND DISSEMINATING INFORMATION
3.3.1Bookgreenslot collects, directly or indirectly, and displays on the Website, relevant information regarding the profile and practice of the Practitioners listed on the Website, such as their specialization, qualification, fees, location, visiting hours, and similar details. Bookgreenslot takes reasonable efforts to ensure that such information is updated at frequent intervals. Although Bookgreenslot screens and vets the information and photos submitted by the Practitioners, it cannot be held liable for any inaccuracies or incompleteness represented from it, despite such reasonable efforts.
3.3.2The Services provided by Bookgreenslot or any of its licensors or service providers are provided on an "as is" and “as available’ basis, and without any warranties or conditions (express or implied, including the implied warranties of merchantability, accuracy, fitness for a particular purpose, title and non-infringement, arising by statute or otherwise in law or from a course of dealing or usage or trade). Bookgreenslot does not provide or make any representation, warranty or guarantee, express or implied about the Website or the Services. Bookgreenslot does not guarantee the accuracy or completeness of any content or information provided by Users on the Website. To the fullest extent permitted by law, Bookgreenslot disclaims all liability arising out of the User’s use or reliance upon the Website, the Services, representations and warranties made by other Users, the content or information provided by the Users on the Website, or any opinion or suggestion given or expressed by Bookgreenslot or any User in relation to any User or services provided by such User.
3.3.3The Website may be linked to the website of third parties, affiliates and business partners. Bookgreenslot has no control over, and not liable or responsible for content, accuracy, validity, reliability, quality of such websites or made available by/through our Website. Inclusion of any link on the Website does not imply that Bookgreenslot endorses the linked site. User may use the links and these services at User’s own risk.
3.3.4Bookgreenslot assumes no responsibility, and shall not be liable for, any damages to, or viruses that may infect User’s equipment on account of User’s access to, use of, or browsing the Website or the downloading of any material, data, text, images, video content, or audio content from the Website. If a User is dissatisfied with the Website, User’s sole remedy is to discontinue using the Website.
3.3.5If Bookgreenslot determines that you have provided fraudulent, inaccurate, or incomplete information, including through feedback, Bookgreenslot reserves the right to immediately suspend your access to the Website or any of your accounts with Bookgreenslot and makes such declaration on the website alongside your name/your clinic’s name as determined by Bookgreenslot for the protection of its business and in the interests of Users. You shall be liable to indemnify Bookgreenslot for any losses incurred as a result of your misrepresentations or fraudulent feedback that has adversely affected Bookgreenslot or its Users.
<br/>
3.4BOOK APPOINTMENT AND VIDEO CONSULTATION FACILITY
Bookgreenslot enables Users to connect with Practitioners through two methods: a) Book facility that allows Users book an appointment through the Website; b) Value added video consultation  services which connect Users directly to the Practitioner’s listed on the Website.
<br/>
3.4.1Bookgreenslot will ensure Users are provided confirmed appointment on the Book facility. However, Bookgreenslot has no liability if such an appointment is later cancelled by the Practitioner, or the same Practitioner is not available for appointment.
3.4.2If a User has utilized the VIDEO CONSULTATION services, Bookgreenslot reserves the right to share the information provided by the User with the Practitioner and store such information and/or conversation of the User with the Practitioner, in accordance with our Privacy Policy.
3.4.3The results of any search Users perform on the Website for Practitioners should not be construed as an endorsement by Bookgreenslot of any such particular Practitioner. If the User decides to engage with a Practitioner to seek medical services, the User shall be doing so at his/her own risk.
3.4.4 Without prejudice to the generality of the above, Bookgreenslot is not involved in providing any healthcare or medical advice or diagnosis and hence is not responsible for any interactions between User and the Practitioner. User understands and agrees that Bookgreenslot will not be liable for:
User interactions and associated issues User has with the Practitioner;
the ability or intent of the Practitioner(s) or the lack of it, in fulfilling their obligations towards Users;
any wrong medication or quality of treatment being given by the Practitioner(s), or any medical negligence on part of the Practitioner(s);
inappropriate treatment, or similar difficulties or any type of inconvenience suffered by the User due to a failure on the part of the Practitioner to provide agreed Services;
any misconduct or inappropriate behaviour by the Practitioner or the Practitioner’s staff;
cancellation or no show by the Practitioner or rescheduling of booked appointment or any variation in the fees charged.
3.4.5Users are allowed to provide feedback about their experiences with the Practitioner, however, the User shall ensure that, the same is provided in accordance with applicable law. User however understands that, Bookgreenslot shall not be obliged to act in such manner as may be required to give effect to the content of Users feedback, such as suggestions for delisting of a particular Practitioner from the Website.
3.4.6In case of a ‘Patient-No-Show (P.N.S)’ (defined below), where the User does not show-up at the concerned Practitioner’s clinic:
User’s account will be temporarily disabled from booking further online appointments on Bookgreenslot.com for next four (4) months, in case of, three(3) Valid PNS, as per the Patient-No-Show Policy. However, the User can continue to call the clinic via Bookgreenslot.com to get an appointment.
Patient- No-Show (P.N.S) for the purposes of these Terms and Conditions, is defined as, any instance where a User, who booked an appointment on the Website using the Book Appointment facility , has not turned up for the appointment without cancelling, rescheduling, or informing the Practitioner in advance about the same. When Practitioner informs Bookgreenslot of the incident or marks a particular appointment as P.N.S. using the Bookgreenslot doctor page or Bookgreenslot website within five (5) days of the scheduled appointment, an email and SMS (“PNS Communication”) will be sent to the User to confirm on the incident with reasons. Where the User is not able to establish that the User had a legitimate reason as per Clause 3.4.6(c), for not showing up, Bookgreenslot shall be entitled to take actions as under Clause 3.4.6 (a). However Users understand that, actions such as ones mentioned under Clause 3.4.6(a) are included as a deterrent to stop Users from misusing the Website, and the loss of business hours incurred by the Practitioner.
Following instances, solely at the discretion of Bookgreenslot, would be construed as valid cases of PNS (“Valid PNS”), in which case the User shall be penalized as per Clause 3.4.6 (a):
User does not reply within seven (7) days, with reasons to PNS Communication, from the date of receipt of such PNS Communication;
In case User responds to the PNS Communication with below reasons:
Forgot the appointment
Chose to visit another Practitioner/consulted online;
Busy with other work; or such other reasons (which Bookgreenslot at its discretion decides to be a valid reason to not show up).
Where the User has booked a paid appointment and is unable to visit the Practitioner, due to such genuine reasons of sickness etc. at the sole discretion of Bookgreenslot, pursuant to conducting of investigation, the User shall be provided with a refund of such payment made by User, at the time of booking. However, where cancellation charges have been levied, you would not be entitled to complete refund.
Bookgreenslot reserves the right to make the final decision in case of a conflict. The total aggregate liability of Bookgreenslot with respect to any claims made herein shall be INR 200.
3.4.7Cancellation and Refund Policy
In the event that, the Practitioner with whom User has booked a paid appointment via the Website, has not been able to meet the User, User will need to write to us at support@Bookgreenslot.com within five (5) days from the occurrence of such event; in which case, the entire consultation amount as mentioned on the Website will be refunded to the User within the next five (5) to six (6) business days in the original mode of payment done by the User while booking. In case where the User, does not show up for the appointment booked with a Practitioner, without cancelling the appointment beforehand, the amount will not be refunded, and treated as under Clause 3.4.6. However, where cancellation charges have been levied (as charged by the Practitioner/Practice), you would not be entitled to complete refund even if you have cancelled beforehand.
Users will not be entitled for any refunds in cases where, the Practitioner is unable to meet the User at the exact time of the scheduled appointment time and the User is required to wait, irrespective of the fact whether the User is required to wait or choose to not obtain the medical services from the said Practitioner.
3.5NO DOCTOR-PATIENT RELATIONSHIP; NOT FOR EMERGENCY USE
3.5.1Please note that some of the content, text, data, graphics, images, information, suggestions, guidance, and other material (collectively, “Information”) that may be available on the Website (including information provided in direct response to your questions or postings) may be provided by individuals in the medical profession. The provision of such Information does not create a licensed medical professional/patient relationship, between Bookgreenslot and you and does not constitute an opinion, medical advice, or diagnosis or treatment of any particular condition, but is only provided to assist you with locating appropriate medical care from a qualified practitioner.
3.5.2It is hereby expressly clarified that, the Information that you obtain or receive from Bookgreenslot, and its employees, contractors, partners, sponsors, advertisers, licensors or otherwise on the Website is for informational purposes only. We make no guarantees, representations or warranties, whether expressed or implied, with respect to professional qualifications, quality of work, expertise or other information provided on the Website. In no event shall we be liable to you or anyone else for any decision made or action taken by you in reliance on such information.
3.5.3The Services are not intended to be a substitute for getting in touch with emergency healthcare. If you are an End-User facing a medical emergency (either on your or a another person’s behalf), please contact an ambulance service or hospital directly.
3.6CONSULT
Click here to view Consult terms & conditions.
3.7BOOKGREENSLOT HEALTH FEED
These terms & conditions governing Bookgreenslot Health feed are applicable to Users (being both end-users/ Practitioner). However, it is clarified that the terms and conditions herein applicable only to Practitioners and applicable to Users are called out separately, as the context warrants.
<br/>
3.7.1Bookgreenslot Health feed is an online content platform available on the Website, wherein Practitioners who have created a Bookgreenslot profile can login and post health and wellness related content.
3.7.2Practitioners can use Bookgreenslot Health feed by logging in from their health account, creating original content comprising text, audio, video, images, data or any combination of the same (“Content”), and uploading said Content to Bookgreenslot’s servers. Bookgreenslot will make available to the User a gallery of images licensed by Bookgreenslot from a third party stock image provider (“Bookgreenslot Gallery”). The User can upload their own images or choose an image from the Bookgreenslot Gallery. Bookgreenslot does not provide any warranty as to the ownership of the intellectual property in the Bookgreenslot Gallery and the User acknowledges that the User will use the images from the Bookgreenslot Gallery at their own risk. Bookgreenslot shall post such Content to Bookgreenslot Health feed at its own option and subject to these Terms and Conditions. The Content uploaded via Bookgreenslot Health feed does not constitute medical advice and may not be construed as such by any person.
3.7.3Practitioners acknowledges that they are the original authors and creators of any Content uploaded by them via Bookgreenslot Health feed and that no Content uploaded by them would constitute infringement of the intellectual property rights of any other person. Bookgreenslot reserves the right to remove any Content which it may determine at its own discretion as violating the intellectual property rights of any other person, including but not limited to patent, trademark, copyright or other proprietary rights. Practitioner agrees to absolve Bookgreenslot from and indemnify Bookgreenslot against all claims that may arise as a result of any third party intellectual property right claim that may arise from the Practitioner’s uploading of any Content on the Bookgreenslot Health feed. The Practitioner may not use the images in the Bookgreenslot Gallery for any purpose other than those directly related to the creation and uploading of Content to Bookgreenslot Health feed. The Practitioner also agrees to absolve Bookgreenslot from and indemnify Bookgreenslot against all claims that may arise as a result of any third party intellectual property claim if the Practitioner downloads, copies or otherwise utilizes an image from the Bookgreenslot Gallery for his/her personal or commercial gain.
3.7.4Practitioner hereby assigns to Bookgreenslot, in perpetuity and worldwide, all intellectual property rights in any Content created by the User and uploaded by the User via Bookgreenslot Health feed.
3.7.5Bookgreenslot shall have the right to edit or remove the Content and any comments in such manner as it may deem Bookgreenslot Health feed at any time.
3.7.6Practitioner shall ensure that the Content or any further responses to the Content (including responses to Users) is not harmful, harassing, blasphemous, defamatory, obscene, pornographic, paedophilic or libelous in any manner. Further, Practitioner should ensure that the Content is not invasive of any other person’s privacy, or otherwise contains any elements that is hateful, racially or ethnically objectionable, disparaging, or otherwise unlawful in any manner whatever. Bookgreenslot reserves the right to remove any Content which it may determine at its own discretion is violative of these Terms and Conditions or any law or statute in force at the time. Also, the Practitioner agrees to absolve Bookgreenslot from and indemnify Bookgreenslot against all claims that may arise as a result of any legal claim arising from the nature of the Content posted by the Practitioner on Bookgreenslot Health Feed.
3.7.7Practitioner shall ensure that no portion of the Content is violative of any law for the time being in force.
3.7.8Practitioner shall ensure that the Content is not threatening the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order. Further the Practitioner shall ensure that the Content will not cause incitement to the commission of any cognisable offence or prevent investigation of any offence or is insulting to any other nation.
3.7.9User may also use Bookgreenslot Health feed in order to view original content created by Practitioners and to create and upload comments on such Content, where allowed (“User Comment”).
3.7.10User acknowledges that the User Comment reflects the views and opinions of the authors of such Content and do not necessarily reflect the views of Bookgreenslot.
3.7.11User agrees that the Content they access on Bookgreenslot Health feed does not in any way constitute medical advice and that the responsibility for any act or omission by the User arising from the User’s interpretation of the Content, is solely attributable to the User. The User agrees to absolve Bookgreenslot from and indemnify Bookgreenslot against all claims that may arise as a result of the User’s actions resulting from the User’s viewing of Content on Bookgreenslot Health feed.
3.7.12User acknowledges that all intellectual property rights in the User Comment on Bookgreenslot Health feed vests with Bookgreenslot. The User agrees not to infringe upon Bookgreenslot’s intellectual property by copying or plagiarizing content on Bookgreenslot Health feed. Bookgreenslot reserves its right to initiate all necessary legal remedies available to them in case of such an infringement by the User. Also, User Comment will be the sole intellectual property of Bookgreenslot. The User agrees not to post User Comment that would violate the intellectual property of any third party, including but not limited to patent, trademark, copyright or other proprietary rights. Bookgreenslot reserves the right to remove any User Comment which it may determine at its own discretion as violating the intellectual property rights of any third party. The User agrees to absolve Bookgreenslot from and indemnify Bookgreenslot against all claims that may arise as a result of any third party intellectual property right claim that may arise from the User Comment.
3.7.13User shall ensure that the User Comment is not harmful, harassing, blasphemous, defamatory, obscene, pornographic, paedophilic or libelous in any manner. Further, User should ensure that the User Comment is not invasive of any other person’s privacy, or otherwise contains any elements that is hateful, racially or ethnically objectionable, disparaging, or otherwise unlawful in any manner whatever. Bookgreenslot reserves the right to remove any Content which it may determine at its own discretion is violative of these Terms and Conditions or any law or statute in force at the time Also, the User agrees to absolve Bookgreenslot from and indemnify Bookgreenslot against all claims that may arise as a result of any legal claim arising from the nature of the User Comment.
3.7.14User shall ensure that the User Comment is not threatening the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order. Further the Practitioner shall ensure that the User Comment will not cause incitement to the commission of any cognisable offence or prevent investigation of any offence or is insulting to any other nation.
3.8CONTENT OWNERSHIP AND COPYRIGHT CONDITIONS OF ACCESS
3.8.1The contents listed on the Website are (i) User generated content, or (ii) belong to Bookgreenslot. The information that is collected by Bookgreenslot directly or indirectly from the End- Users and the Practitioners shall belong to Bookgreenslot. Copying of the copyrighted content published by Bookgreenslot on the Website for any commercial purpose or for the purpose of earning profit will be a violation of copyright and Bookgreenslot reserves its rights under applicable law accordingly.
3.8.2Bookgreenslot authorizes the User to view and access the content available on or from the Website solely for ordering, receiving, delivering and communicating only as per this Agreement. The contents of the Website, information, text, graphics, images, logos, button icons, software code, design, and the collection, arrangement and assembly of content on the Website (collectively, "Bookgreenslot Content"), are the property of Bookgreenslot and are protected under copyright, trademark and other laws. User shall not modify the Bookgreenslot Content or reproduce, display, publicly perform, distribute, or otherwise use the Bookgreenslot Content in any way for any public or commercial purpose or for personal gain.
3.8.3User shall not access the Services for purposes of monitoring their availability, performance or functionality, or for any other benchmarking or competitive purposes.
3.9REVIEWS AND FEEDBACK
By using this Website, you agree that any information shared by you with Bookgreenslot or with any Practitioner will be subject to our Privacy Policy.
<br/>
You are solely responsible for the content that you choose to submit for publication on the Website, including any feedback, ratings, or reviews (“Critical Content”) relating to Practitioners or other healthcare professionals. The role of Bookgreenslot in publishing Critical Content is restricted to that of an ‘intermediary’ under the Information Technology Act, 2000. Bookgreenslot disclaims all responsibility with respect to the content of Critical Content, and its role with respect to such content is restricted to its obligations as an ‘intermediary’ under the said Act. Bookgreenslot shall not be liable to pay any consideration to any User for re-publishing any content across any of its platforms.
<br/>
Your publication of reviews and feedback on the Website is governed by Clause 5 of these Terms. Without prejudice to the detailed terms stated in Clause 5, you hereby agree not to post or publish any content on the Website that (a) infringes any third-party intellectual property or publicity or privacy rights, or (b) violates any applicable law or regulation, including but not limited to the IG Rules and SPI Rules. Bookgreenslot, at its sole discretion, may choose not to publish your reviews and feedback, if so required by applicable law, and in accordance with Clause 5 of these Terms. You agree that Bookgreenslot may contact you through telephone, email, SMS, or any other electronic means of communication for the purpose of:
<br/>
Obtaining feedback in relation to Website or Bookgreenslot’s services; and/or
Obtaining feedback in relation to any Practitioners listed on the Website; and/or
Resolving any complaints, information, or queries by Practitioners regarding your Critical Content;
and you agree to provide your fullest co-operation further to such communication by Bookgreenslot. Bookgreenslot’s Feedback Collection and Fraud Detection Policy, is annexed as the Schedule hereto, and remains subject always to these Terms.
<br/>
3.10RECORDS
Bookgreenslot may provide End-Users with a free facility known as ‘Records’ on its mobile application ‘Bookgreenslot’. Information available in your Records is of two types:
<br/>
User-created: Information uploaded by you or information generated during your interaction with Bookgreenslot ecosystem, eg: appointment, medicine order placed by you.
Practice-created: Health Records generated by your interaction with a Practitioner who uses ‘Bookgreenslot doctors page’ or other Services of Bookgreenslot software.
The specific terms relating to such Health Account are as below, without prejudice to the rest of these Terms and the Privacy Policy:
<br/>
3.10.1Your Records is only created after you have signed up and explicitly accepted these Terms.
3.10.2Any Practice created Health Record is provided on an as-is basis at the sole intent, risk and responsibility of the Practitioner and Bookgreenslot does not validate the said information and makes no representation in connection therewith. You should contact the relevant Practitioner in case you wish to point out any discrepancies or add, delete, or modify the Health Record in any manner.
3.10.3The Health Records are provided on an as-is basis. While we strive to maintain the highest levels of service availability, Bookgreenslot is not liable for any interruption that may be caused to your access of the Services.
3.10.4The reminder provided by the Records is only a supplementary way of reminding you to perform your activities as prescribed by your Practitioner. In the event of any medicine reminders provided by Bookgreenslot, you should refer to your prescription before taking any medicines. Bookgreenslot is not liable if for any reason reminders are not delivered to you or are delivered late or delivered incorrectly, despite its best efforts. In case you do not wish to receive the reminders, you can switch it off through the Bookgreenslot app.
3.10.5It is your responsibility to keep your correct mobile number and email ID updated in the Records. The Health Records will be sent to the Records associated with this mobile number and/or email ID. Every time you change any contact information (mobile or email), we will send a confirmation. Bookgreenslot is not responsible for any loss or inconvenience caused due to your failure in updating the contact details with Bookgreenslot.
3.10.6Bookgreenslot uses industry–level security and encryption to your Health Records. However, Bookgreenslot does not guarantee to prevent unauthorized access if you lose your login credentials or they are otherwise compromised. In the event you are aware of any unauthorized use or access, you shall immediately inform Bookgreenslot of such unauthorized use or access. Please safeguard your login credentials and report any actual suspected breach of account to support@Bookgreenslot.com.
3.10.7If you access your dependents’ Health Records by registering your dependents with your own Records, you are deemed to be responsible for the Health Records of your dependents and all obligations that your dependents would have had, had they maintained their own separate individual Records. You agree that it shall be your sole responsibility to obtain prior consent of your dependent and shall have right to share, upload and publish any sensitive personal information of your dependent. Bookgreenslot assumes no responsibility for any claim, dispute or liability arising in this regard, and you shall indemnify Bookgreenslot and its officers against any such claim or liability arising out of unauthorized use of such information.
3.10.8In case you want to delete your Records, you can do so by contacting our service support team. However only your account and any associated Health Records will be deleted, and your Health Records stored by your Practitioners will continue to be stored in their respective accounts.
3.10.9You may lose your “User created” record, if the data is not synced with the server.
3.10.10If the Health Record is unassessed for a stipulated time, you may not be able to access your Health Records due to security reasons.
3.10.11Bookgreenslot is not liable if for any reason, Health Records are not delivered to you or are delivered late despite its best efforts.
3.10.12The Health Records are shared with the phone numbers that are provided by your Practitioner. Bookgreenslot is not responsible for adding the Heath Records with incorrect numbers if those incorrect numbers are provided by the Practitioner.
3.10.13Bookgreenslot is not responsible or liable for any content, fact, Health Records, medical deduction or the language used in your Health Records whatsoever. Your Practitioner is solely responsible and liable for your Health Records and any information provided to us including but not limited to the content in them.
3.10.14Bookgreenslot has the ability in its sole discretion to retract Health Records without any prior notice if they are found to be shared incorrectly or inadvertently.
3.10.15Bookgreenslot will follow the law of land in case of any constitutional court or jurisdiction mandates to share the Health Records for any reason.
3.10.16You agree and acknowledge that Bookgreenslot may need to access the Health Record for cases such as any technical or operational issue of the End User in access or ownership of the Records.
3.10.17You acknowledge that the Practitioners you are visiting may engage Bookgreenslot's software or third party software for the purposes of the functioning of the Practitioner’s business and Bookgreenslot's services including but not limited to the usage and for storage of Records (as defined in Section 3.10) in India and outside India, in accordance with the applicable laws.
3.10.18To the extent that your Records have been shared with Bookgreenslot or stored on any of the Bookgreenslot products used by Practitioner’s you are visiting, and may in the past have visited, You hereby agree to the storage of your Records by Bookgreenslot pertaining to such previously visited clinics and hospitals who have tie ups with Bookgreenslot for the purposes of their business and for Bookgreenslot's services including but not limited to the usage and for storage of Records (as defined in Section 3.10) in India and outside India, in accordance with the applicable laws and further agree, upon creation of your account with Bookgreenslot, to the mapping of such Records as may be available in Bookgreenslot’s database to your User account.
<br/>
3.11Bookgreenslot Q&A
3.11.1Terms for Practitioners:
Every Practitioner on the Q&A Platform must be qualified in the area of expertise that he represents as being his qualification.
The Q&A Platform is a platform for exchange of information which is of general nature in a question and answer format. The Q&A Platform is not for emergency situations.
Any Q&A interaction cannot be construed as a medical consultation with the Practitioner, in any manner whatsoever.
Bookgreenslot Users may post questions on medical issues (“Querist”), and these queries can be answered by multiple Practitioners on the Q&A Platform. It is expressly clarified that no doctor-patient relationship is established between the Querist and Practitioner, in any manner whatsoever, by indulging in this Q&A.
The Practitioner may provide probable views, recommendations, suggestions and solutions to the question posted by a Querist. However, it is expressly clarified that any such view, recommendation, suggestion and solution shall not be construed as medical advice. The person in question (being Querist or not) is advised to consult with a doctor in this regard.
Practitioner shall not share their personal, religious and/or moral views with the Querist while issuing their response.
The Practitioner cannot issue and/or prescribe any medicines on the Q&A platform. It is a platform for only exchange of information and not a consultation/ medical advice.
The Practitioner is absolutely and expressly prohibited to:
Provide a medical diagnosis;
Issue a prescription;
Post any response which comprises of any derogatory language, objectionable, pornographic and /or offensive content;
Advertise any brand of drugs, supplements, vaccines and medications, in any manner of whatsoever;
Advertise to/solicit patients in any manner including without limitation by way of using social media handles, including without limitation, facebook, twitter etc., telephone/ mobile numbers, youtube, and address;
Promote content and activities which are illegal in nature;
In the event of any breach of these QA T&C, Bookgreenslot will take appropriate action inter alia ranging from issuing warnings to removal of Practitioner from the Q&A Platform, in its sole and absolute discretion, on a case to case basis.
Any liability arising out of the response issued by a Practitioner will be borne solely by the Practitioner. Q&A Platform is only a platform interface provided by Bookgreenslot for sharing and exchanging information purposes.
The Q&A Platform shall be audited on a regular basis by Bookgreenslot for ascertaining compliance by the Practitioner to Paragraph 6, and the Practitioners consent to the same. It is clarified that the said audit is not conducted for the purpose of quality check or validation of responses issued by Practitioner.
All general Bookgreenslot Terms and Conditions shall govern the QA T&C to the extent applicable. Decision of Bookgreenslot is final and binding on the issues arising under the QA T&C and Bookgreenslot Terms and Conditions.
3.11.2Terms for User/Querist:
The personally identifiable information of the querist shall be anonymized by Bookgreenslot prior to posting the question on the Q&A Platform;
Q&A Platform is a public forum for exchange of information, hence, any question posted by a querist is visible publicly. It is advisable for a User to ensure that no confidential information is published by them on the Q&A Platform.
User shall not use the Q&A Platform for emergency situations.
The User is prohibited to post any query/issue on the Q&A Platform, which comprises of any derogatory language, objectionable, pornographic and /or offensive content;
Any response provided by the Practitioner shall not be construed as medical advice on the Q&A Platform. Q&A Platform is a platform for exchange of information which is of general nature in a question and answer format. This cannot be construed as a medical consultation with the Practitioner, in any manner whatsoever.
It is expressly clarified that no doctor-patient relationship is established between the user and Practitioner, in any manner whatsoever, by indulging in this Q&A. The Practitioner may provide probable views, recommendations, suggestions and solutions to the question posted. However, it is expressly clarified that any such view, recommendation, suggestion and solution shall not be construed as medical advice. The person in question (being Querist or not) is advised to consult with a doctor in this regard.
All general Bookgreenslot Terms and Conditions shall govern the QA T&C to the extent applicable. Decision of Bookgreenslot is final and binding on the issues arising under the QA T&C and Bookgreenslot Terms and Conditions.
3.13BOOKGREENSLOT DIAGNOSTICS
For detailed terms and conditions regarding diagnostics click here.
<br/>
4. TERMS OF USE PRACTITIONERS
The terms in this Clause 4 are applicable only to Practitioners.
<br/>
4.1 LISTING POLICY
4.1.1Bookgreenslot, directly and indirectly, collects information regarding the Practitioners’ profiles, contact details, and practice. Bookgreenslot reserves the right to take down any Practitioner’s profile as well as the right to display the profile of the Practitioners, with or without notice to the concerned Practitioner. This information is collected for the purpose of facilitating interaction with the End-Users and other Users. If any information displayed on the Website in connection with you and your profile is found to be incorrect, you are required to inform Bookgreenslot immediately to enable Bookgreenslot to make the necessary amendments.
4.1.2Bookgreenslot shall not be liable and responsible for the ranking of the Practitioners on external websites and search engines
4.1.3Bookgreenslot shall not be responsible or liable in any manner to the Users for any losses, damage, injuries or expenses incurred by the Users as a result of any disclosures or publications made by Bookgreenslot, where the User has expressly or implicitly consented to the making of disclosures or publications by Bookgreenslot. If the User had revoked such consent under the terms of the Privacy Policy, then Bookgreenslot shall not be responsible or liable in any manner to the User for any losses, damage, injuries or expenses incurred by the User as a result of any disclosures made by Bookgreenslot prior to its actual receipt of such revocation.
4.1.4Bookgreenslot reserves the right to moderate the suggestions made by the Practitioners through feedback and the right to remove any abusive or inappropriate or promotional content added on the Website. However, Bookgreenslot shall not be liable if any inactive, inaccurate, fraudulent, or non- existent profiles of Practitioners are added to the Website.
4.1.5Practitioners explicitly agree that Bookgreenslot reserves the right to publish the Content provided by Practitioners to a third party including content platforms.
4.1.6When you are listed on Bookgreenslot.com, End-Users may see a ‘video consultation’ option. When End-Users choose this option, they choose to call your number through a videocall  service provided by Bookgreenslot, and the records of such calls are recorded and stored in Bookgreenslot’s servers. Such call will have an IVR message stating the purpose of recording your calls and your consent to such recordings which are dealt with as per the Privacy Policy. Such records may be accessed by Bookgreenslot for quality control and support related purposes and are dealt with only in accordance with the terms of the Privacy Policy. Such call facility provided to End-Users and to you by Bookgreenslot should be used only for appointment and booking purposes, and not for consultation on health-related issues. Bookgreenslot accepts no liability if the call facility is not used in accordance with the foregoing. In case you choose to not provide your consent to recording your calls that may have personal information required for appointment and booking purposes, Bookgreenslot reserves the right to not provide the Services for which such personal information is sought.
4.1.7You as a Practitioner hereby represent and warrant that you will use the Services in accordance with applicable law. Any contravention of applicable law as a result of your use of these Services is your sole responsibility, and Bookgreenslot accepts no liability for the same.
4.2PROFILE OWNERSHIP AND EDITING RIGHTS
Bookgreenslot ensures easy access to the Practitioners by providing a tool to update your profile information. Bookgreenslot reserves the right of ownership of all the Practitioner’s profile and photographs and to moderate the changes or updates requested by Practitioners. However, Bookgreenslot takes the independent decision whether to publish or reject the requests submitted for the respective changes or updates. You hereby represent and warrant that you are fully entitled under law to upload all content uploaded by you as part of your profile or otherwise while using Bookgreenslot’s services, and that no such content breaches any third party rights, including intellectual property rights. Upon becoming aware of a breach of the foregoing representation, Bookgreenslot may modify or delete parts of your profile information at its sole discretion with or without notice to you.
<br/>
4.3REVIEWS AND FEEDBACK DISPLAY RIGHTS OF BOOKGREENSLOT
4.3.1All Critical Content is content created by the Users of www.Bookgreenslot.com (“Website”) and the clients of Bookgreenslot customers and Practitioners, including the End-Users. As a platform, Bookgreenslot does not take responsibility for Critical Content and its role with respect to Critical Content is restricted to that of an ‘intermediary’ under the Information Technology Act, 2000. The role of Bookgreenslot and other legal rights and obligations relating to the Critical Content are further detailed in Clauses 3.9 and 5 of these Terms. Bookgreenslot’s Feedback Collection and Fraud Detection Policy, is annexed as the Schedule hereto, and remains subject always to these Terms.
4.3.2Bookgreenslot reserves the right to collect feedback and Critical Content for all the Practitioners, Clinics and Healthcare Providers listed on the Website.
4.3.3Bookgreenslot shall have no obligation to pre-screen, review, flag, filter, modify, refuse or remove any or all Critical Content from any Service, except as required by applicable law.
4.3.4You understand that by using the Services you may be exposed to Critical Content or other content that you may find offensive or objectionable. Bookgreenslot shall not be liable for any effect on Practitioner’s business due to Critical Content of a negative nature. In these respects, you may use the Service at your own risk. Bookgreenslot however, as an ‘intermediary, takes steps as required to comply with applicable law as regards the publication of Critical Content. The legal rights and obligations with respect to Critical Content and any other information sought to be published by Users are further detailed in Clauses 3.9 and 5 of these Terms.
4.3.5Bookgreenslot will take down information under standards consistent with applicable law, and shall in no circumstances be liable or responsible for Critical Content, which has been created by the Users. The principles set out in relation to third party content in the terms of Service for the Website shall be applicable mutatis mutandis in relation to Critical Content posted on the Website.
4.3.6If Bookgreenslot determines that you have provided inaccurate information or enabled fraudulent feedback, Bookgreenslot reserves the right to immediately suspend any of your accounts with Bookgreenslot and makes such declaration on the website alongside your name/your clinics name as determined by Bookgreenslot for the protection of its business and in the interests of Users.
<br/>

4.4INDEPENDENT SERVICES
Your use of each Service confers upon you only the rights and obligations relating to such Service, and not to any other service that may be provided by Bookgreenslot.
<br/>
4.5BOOKGREENSLOT REACH RIGHTS
Bookgreenslot reserves the rights to display sponsored ads on the Website. These ads would be marked as “Sponsored ads”. Without prejudice to the status of other content, Bookgreenslot will not be liable for the accuracy of information or the claims made in the Sponsored ads. Bookgreenslot does not encourage the Users to visit the Sponsored ads page or to avail any services from them. Bookgreenslot will not be liable for the services of the providers of the Sponsored ads.

You represent and warrant that you will use these Services in accordance with applicable law. Any contravention of applicable law as a result of your use of these Services is your sole responsibility, and Bookgreenslot accepts no liability for the same.
<br/>
4.6 BOOK APPOINTMENT AND VIDEO CONSULTATION FACILITY
4.6.1As a valuable partner on our platform we want to ensure that the Practitioners experience on the Bookgreenslot booking platform is beneficial to both, Practitioners and their Users.
For all terms and conditions of Book facility on Bookgreenslot profile check Book Standards .
4.6.2Practitioner understands that, Bookgreenslot shall not be liable, under any event, for any comments or feedback given by any of the Users in relation to the Services provided by Practitioner. The option of publishing or modifying or moderating or masking (where required by law or norm etc.) the feedback provided by Users shall be solely at the discretion of Bookgreenslot.
4.7 PRACTITIONER UNDERTAKING
The Practitioner is and shall be duly registered, licensed and qualified to practice medicine/ provide health care, wellness services, as per applicable laws/regulations/guidelines set out by competent authorities and the Practitioner shall not be part of any arrangement which will prohibit him/her from practicing medicine within the territory of India. The Practitioner shall at all times ensure that all the applicable laws that govern the Practitioner shall be followed and utmost care shall be taken in terms of the consultation/ services being rendered.
<br/>
4.8 USAGE IN PROMOTIONAL & MARKETING MATERIALS
In recognition of the various offerings and services provided by Bookgreenslot to Practitioner, Practitioner shall (subject to its reasonable right to review and approve): (a) allow Bookgreenslot to include a brief description of the services provided to Practitioner in Bookgreenslot’s marketing, promotional and advertising materials; (b) allow Bookgreenslot to make reference to Practitioner in case studies, and related marketing materials; (c) serve as a reference to Bookgreenslot’s existing and potential clients; (d) provide video logs, testimonials, e-mailers, banners, interviews to the news media and provide quotes for press releases; (e) make presentations at conferences; and/or (f) use the Practitioner’s name and/or logo, brand images, tag lines etc., within product literature, e-mailers, press releases, social media and other advertising, marketing and promotional materials.
<br/>
5.RIGHTS AND OBLIGATIONS RELATING TO CONTENT
5.1As mandated by Regulation 3(2) of the IG Rules, Bookgreenslot hereby informs Users that they are not permitted to host, display, upload, modify, publish, transmit, update or share any information that:
belongs to another person and to which the User does not have any right to;
is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, pedophilic, libelous, invasive of another's privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever;
harm minors in any way;
infringes any patent, trademark, copyright or other proprietary rights;
violates any law for the time being in force;
deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;
impersonate another person;
contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource;
threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation.
5.2Users are also prohibited from:
violating or attempting to violate the integrity or security of the Website or any Bookgreenslot Content;
transmitting any information (including job posts, messages and hyperlinks) on or through the Website that is disruptive or competitive to the provision of Services by Bookgreenslot;
intentionally submitting on the Website any incomplete, false or inaccurate information;
making any unsolicited communications to other Users;
using any engine, software, tool, agent or other device or mechanism (such as spiders, robots, avatars or intelligent agents) to navigate or search the Website;
attempting to decipher, decompile, disassemble or reverse engineer any part of the Website;
copying or duplicating in any manner any of the Bookgreenslot Content or other information available from the Website;
framing or hot linking or deep linking any Bookgreenslot Content.
circumventing or disabling any digital rights management, usage rules, or other security features of the Software.
5.3Bookgreenslot, upon obtaining knowledge by itself or been brought to actual knowledge by an affected person in writing or through email signed with electronic signature about any such information as mentioned above, shall be entitled to disable such information that is in contravention of Clauses 5.1 and 5.2. Bookgreenslot shall also be entitled to preserve such information and associated records for at least 90 (ninety) days for production to governmental authorities for investigation purposes.
5.4In case of non-compliance with any applicable laws, rules or regulations, or the Agreement (including the Privacy Policy) by a User, Bookgreenslot has the right to immediately terminate the access or usage rights of the User to the Website and Services and to remove non-compliant information from the Website.
5.5Bookgreenslot may disclose or transfer User-generated information to its affiliates or governmental authorities in such manner as permitted or required by applicable law, and you hereby consent to such transfer. The SPI Rules only permit Bookgreenslot to transfer sensitive personal data or information including any information, to any other body corporate or a person in India, or located in any other country, that ensures the same level of data protection that is adhered to by Bookgreenslot as provided for under the SPI Rules, only if such transfer is necessary for the performance of the lawful contract between Bookgreenslot or any person on its behalf and the User or where the User has consented to data transfer.
Bookgreenslot respects the intellectual property rights of others and we do not hold any responsibility for any violations of any intellectual property rights
6.TERMINATION
6.1Bookgreenslot reserves the right to suspend or terminate a User’s access to the Website and the Services with or without notice and to exercise any other remedy available under law, in cases where,
Such User breaches any terms and conditions of the Agreement;
A third party reports violation of any of its right as a result of your use of the Services;
Bookgreenslot is unable to verify or authenticate any information provide to Bookgreenslot by a User;
Bookgreenslot has reasonable grounds for suspecting any illegal, fraudulent or abusive activity on part of such User; or
Bookgreenslot believes in its sole discretion that User’s actions may cause legal liability for such User, other Users or for Bookgreenslot or are contrary to the interests of the Website.
6.2Once temporarily suspended, indefinitely suspended or terminated, the User may not continue to use the Website under the same account, a different account or re-register under a new account. On termination of an account due to the reasons mentioned herein, such User shall no longer have access to data, messages, files and other material kept on the Website by such User. The User shall ensure that he/she/it has continuous backup of any medical services the User has rendered in order to comply with the User’s record keeping process and practices.
7.LIMITATION OF LIABILITY
In no event, including but not limited to negligence, shall Bookgreenslot, or any of its directors, officers, employees, agents or content or service providers (collectively, the “Protected Entities”) be liable for any direct, indirect, special, incidental, consequential, exemplary or punitive damages arising from, or directly or indirectly related to, the use of, or the inability to use, the Website or the content, materials and functions related thereto, the Services, User’s provision of information via the Website, lost business or lost End-Users, even if such Protected Entity has been advised of the possibility of such damages. In no event shall the Protected Entities be liable for:
provision of or failure to provide all or any service by Practitioners to End- Users contacted or managed through the Website;
any content posted, transmitted, exchanged or received by or on behalf of any User or other person on or through the Website;
any unauthorized access to or alteration of your transmissions or data; or
any other matter relating to the Website or the Service.
In no event shall the total aggregate liability of the Protected Entities to a User for all damages, losses, and causes of action (whether in contract or tort, including, but not limited to, negligence or otherwise) arising from this Agreement or a User’s use of the Website or the Services exceed, in the aggregate Rs. 1000/- (Rupees One Thousand Only).
<br/>
8.RETENTION AND REMOVAL
Bookgreenslot may retain such information collected from Users from its Website or Services for as long as necessary, depending on the type of information; purpose, means and modes of usage of such information; and according to the SPI Rules. Computer web server logs may be preserved as long as administratively necessary.
<br/>
9.APPLICABLE LAW AND DISPUTE SETTLEMENT
9.1You agree that this Agreement and any contractual obligation between Bookgreenslot and User will be governed by the laws of India.
9.2Any dispute, claim or controversy arising out of or relating to this Agreement, including the determination of the scope or applicability of this Agreement to arbitrate, or your use of the Website or the Services or information to which it gives access, shall be determined by arbitration in India, before a sole arbitrator appointed by Bookgreenslot. Arbitration shall be conducted in accordance with the Arbitration and Conciliation Act, 1996. The seat of such arbitration shall be Bangalore. All proceedings of such arbitration, including, without limitation, any awards, shall be in the English language. The award shall be final and binding on the parties to the dispute.
9.3Subject to the above Clause 9.2, the courts at Bengaluru shall have exclusive jurisdiction over any disputes arising out of or in relation to this Agreement, your use of the Website or the Services or the information to which it gives access.
10.CONTACT INFORMATION GRIEVANCE OFFICER
10.1If a User has any questions concerning Bookgreenslot, the Website, this Agreement, the Services, or anything related to any of the foregoing, Bookgreenslot customer support can be reached at the following email address: support@Bookgreenslot.com or via the contact information available from the following hyperlink: www.Bookgreenslot.com/contact.
10.2In accordance with the Information Technology Act, 2000, and the rules made there under, if you have any grievance with respect to the Website or the service, including any discrepancies and grievances with respect to processing of information, you can contact our Grievance Officer at:
Name: Mr Aayush Singh
Bookgreenslot.com
Baulipar,Gewalbigha
Gaya - 823001.
Phone: 9123240452
Email: support@bookgreenslot.com
In the event you suffer as a result of access or usage of our Website by any person in violation of Rule 3 of the IG Rules, please address your grievance to the above person.
<br/>
11.SEVERABILITY
If any provision of the Agreement is held by a court of competent jurisdiction or arbitral tribunal to be unenforceable under applicable law, then such provision shall be excluded from this Agreement and the remainder of the Agreement shall be interpreted as if such provision were so excluded and shall be enforceable in accordance with its terms; provided however that, in such event, the Agreement shall be interpreted so as to give effect, to the greatest extent consistent with and permitted by applicable law, to the meaning and intention of the excluded provision as determined by such court of competent jurisdiction or arbitral tribunal.
<br/>
12.WAIVER
No provision of this Agreement shall be deemed to be waived and no breach excused, unless such waiver or consent shall be in writing and signed by Bookgreenslot. Any consent by Bookgreenslot to, or a waiver by Bookgreenslot of any breach by you, whether expressed or implied, shall not constitute consent to, waiver of, or excuse for any other different or subsequent breach.
13.The final power to make any changes to the existing terms and conditions or the validity of any clause of this terms and conditions  lies secured with the owners of the company bookgreenslot.com and is liable to change without any prior notice

                    </p>
                
                </div>



            );
        }
    };
    
    export default Terms;