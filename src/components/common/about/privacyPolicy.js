import React, { Component } from 'react'
import Nav from '../nav/nav'
import { Layout } from 'antd';
import { Responsive } from 'semantic-ui-react';
import FootContainer from '../footer/index'

const { Header, Sider, Content } = Layout;

class PrivacyPolicy extends Component {
    state = {
        color: '0,0,0,0',
        textcolor: '55, 124, 204',
        burger:'136,136,136'
      }
    // listenScrollEvent = e => {
    //     if (window.scrollY > 150) {
    //       this.setState({color: '255,255,255,0.5', textcolor:'55, 124, 204',burger:"136,136,136"})
    //     } else {
    //       this.setState({color: '0,0,0,0',textcolor: '255,255,255',burger:"255,255,255"})
    //     }
    //   }
    
    //   componentDidMount() {
    //     window.addEventListener('scroll', this.listenScrollEvent)
    //   }
    render() { 
        return ( 
            <Layout >
                 <Header
                        className="header"
                        style={{
                            backgroundColor:`rgba(255,255,255,1)`,
                            position:"fixed",
                            with:"100%",
                            zIndex:1000,
                            top:0,
                            height:"15vh",
                            borderBottom:"1px solid #dcdcdc",
                            right:0, 
                            left:0}}>
                        <Nav color={this.state.textcolor} burger={this.state.burger}/>
                </Header>
                <div align="center">
                    <div className="privacy-policy-container" align="left" style={{borderTop:"1px solid #dcdcdc", minHeight:"120vh", paddingTop:"20vh" }}>
                       <h1>Privacy Policy</h1>
                       <p>Last Updated: August, 2018</p>
                       <p>JobStream App Corporation
                            (<strong>“JobStream,” “we,”</strong> and <strong>“us”</strong>) 
                            respects the privacy of its users 
                            (<strong>“you”</strong>) and has developed this 
                            Privacy Policy to demonstrate its 
                            commitment to protecting your privacy. 
                            This Privacy Policy describes the information 
                            we collect, how that information may be used, 
                            with whom it may be shared, and your choices 
                            about such uses and disclosures. We encourage you to 
                            read this Privacy Policy carefully when using our 
                            application or Services or transacting business with us. 
                            By using our website or application (our <strong>“Service”</strong>), you are accepting the practices described in this Privacy Policy.</p>
                        <p>
                            This Privacy Policy applies to all individuals whose personal information JobStream collects, 
                            uses or discloses in the course of doing business, including individuals who use our Service, 
                            review any webpages, text, images, sounds, software, and other data or information contained in our 
                            Service (the <strong>“Content”</strong>), create an account, contribute content or otherwise access the Service as a registered user. 
                        </p>
                        <p>
                            This Privacy Policy applies to all individuals who are contract workers, contractors, and consultants to JobStream. It is our policy 
                            to only disclose your personal information as required or authorized by Applicable Law or as otherwise set out in this Privacy Policy.
                        </p>
                        <p>
                            We reserve the right to change this Privacy Policy from time to time as industry practice, Applicable Law, and our procedures in this area may 
                            change from time to time.  We will post the current version of this Privacy Policy on our website and you may request a hard copy. 
                            Access to the Platform is governed by the JobStream’s Terms of Use, to which this Privacy Policy is appended.
                        </p>
                        <p>
                            In this Privacy Policy, (a) headings are for reference purposes only and do not limit the scope or extent of such section; (b) words importing the 
                            singular number only also include the plural, and vice versa; (c) <strong>“including”</strong> or <strong>“includes”</strong> means including or includes (as applicable) without
                            limitation or restriction; (d) <strong>“Applicable Law”</strong> includes any applicable federal, provincial or local law as may be appropriate in the context,
                            including consumer protection legislation, privacy legislation, statutory law and regulations, the Civil Code of Québec, common law, the law of 
                            equity and any other applicable laws.
                        </p>
                        <p>
                            If you have any questions about our privacy practices, please refer to the end of this Privacy Policy for information on how to contact us.
                        </p>
                        <p>
                            <strong>1.	Information we collect about you </strong>
                        </p>
                        <ol style={{marginBottom: "0cm", listStyleType:"lower-alpha"}}>
                        <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>In General. We may collect information that can identify you such as your name and email address ("<strong>personal information</strong>") and other information that does not identify you. We may collect this information through a website or a mobile application. By using the Service, you are authorizing us to gather, parse and retain data related to the provision of the Service.</span></li>
                                <ol style={{marginBottom: "0cm", listStyleType:"lower-roman"}}>
                                <br/>
                                <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    <strong>Information you provide</strong>. In order to register as a user with JobStream, you will be asked to create an account and user profile. 
                                    If you do so, you authorize us to access your account information, including your email address, gender, birthday, education history,
                                    CV or resume, current city, photos, personal description, job or volunteer descriptions, and industries of interest. You will also be asked
                                    to allow JobStream to collect your location information from your device when you download or use the Service. In addition, we may collect and
                                    store any personal information you provide while using our Service or in some other manner. This may include identifying information, such as your name,
                                    address, email address and telephone number, and, if you transact business with us, financial information. You may also provide us photos, a personal
                                    description and information about your preferences for recommendations, such as search distance, educational background, and industry. If you chat with other 
                                    JobStream users, you provide us the Content  of your chats, and if you contact us with a customer service or other inquiry, you provide us with the Content of
                                    that communication. 
                                </span></li>
                            </ol>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>Use of technologies to collect information. We use various technologies to collect information from your device and about your activities on our Service.</span></li>
                                <ol style={{marginBottom: "0cm", listStyleType:"lower-roman"}}>
                                <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <span style={{color:"windowtext"}}>
                                            <strong><p>Information collected automatically</p></strong>
                                            . We automatically collect information from your browser or device when you visit our Service. 
                                                This information could include your IP address, device ID and type, your browser type and language, the operating system used by your device,
                                                access times, your mobile device’s geographic location while our application is actively running, and the referring website address.
                                                <br/>
                                                Whenever you open and use or interact with the JobStream application or its website found at www.JobStreamapp.com, we collect,
                                                process, and use the location information from your mobile device or browser (e.g. latitude and longitude) to tailor the Service experience to
                                                your current location, such as by recommending opportunities or candidates that are nearby.  This information is NOT shared with others.  We use 
                                                various technologies to determine location, including IP address, Wi-Fi access points, cell towers, GPS, and other sensors that may, for example,
                                                provide JobStream with information on nearby devices. Location data is only collected while our application is actively running.
                                                <br/>
                                                By sharing your geolocational information with us, you agree to be bound by Google's Terms of Use
                                                (<a target="_blank" href="http://www.google.com/intl/en_ALL/help/terms_maps.html" >
                                                    <Responsive {...Responsive.onlyComputer}>http://www.google.com/intl/en_ALL/help/terms_maps.html</Responsive>
                                                    <Responsive {...Responsive.onlyTablet}>http://www.google.com/intl/en_ALL/help/terms_maps.html</Responsive>
                                                    <Responsive {...Responsive.onlyMobile}>http://www.google.com/intl/<br/>en_ALL/help/terms_maps.html</Responsive>
                                                </a>). We are using the Maps API(s) in our mobile 
                                                applications, and incorporated by reference to this Privacy Policy is the Google privacy policy 
                                                (currently <a  target="_blank" href="http://www.google.com/privacy.html">http://www.google.com/privacy.html</a>)<br/>, as amended by Google from time to time.
                                            
                                        </span>
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <span style={{color:"windowtext"}}>
                                            <strong>Cookies and Use of Cookie Data</strong>. When you visit our Service, we may assign your device one or more cookies to facilitate access to our 
                                            Service and to personalize your experience. Through the use of a cookie, we also may automatically collect information about your activity on our Service, 
                                            such as the pages you visit, the time and date of your visits and the links you click. 
                                            If we advertise, we (or third parties) may use certain data collected on our Service to show you JobStream advertisements on other sites or applications. 

                                        </span>
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <span style={{color:"windowtext"}}>
                                            <strong>Other Technologies</strong>.  We may use standard Internet technology, such as web beacons and other similar technologies, to track your 
                                            use of our Service and to deliver or communicate with cookies. We also may include web beacons in advertisements or email messages to determine 
                                            whether messages have been opened and acted upon. The information we obtain in this manner enables us to customize the Services we offer users, to
                                             deliver targeted advertisements and to measure the overall effectiveness of our online advertising, Content, programming or other activities. 
                                        </span>
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <span style={{color:"windowtext"}}>
                                            <strong>Information collected by third-parties for advertising purposes</strong>. 
                                            We may allow Service providers, advertising companies and ad networks, and other third parties to display advertisements on our Service. 
                                            These companies may use tracking technologies, such as cookies or web beacons, to collect information about users who view or interact with their
                                             advertisements. We do not provide any non-anonymized personal information to third parties. Some of these third-party advertising companies may
                                              be advertising networks that are members of the Network Advertising Initiative, which offers a single location to opt out of ad targeting from 
                                              member companies (www.networkadvertising.org). Opting out will not decrease the number of advertisements you see.     
                                        </span>
                                    </li>
                                </ol>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    Consent. Ordinarily, we ask for consent to collect, use or disclose personal information, except in specific circumstances where collection, use or disclosure without consent is
                                    authorized or required by Applicable Law. We may assume your consent in cases where you volunteer information for an obvious purpose.
                                </span>
                            </li>
                                <ol style={{marginBottom: "0cm", listStyleType:"lower-roman"}}>
                                <br/>
                                <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                You may withdraw consent to the use and disclosure of personal information at any time, unless the personal information is necessary for us to fulfil our reasonable business
                                 or legal obligations. We will respect your decision, but we may not be able to provide you with certain Services if we do not have the necessary personal information and your consent 
                                 to access the personal information.
                                </span></li>
                            </ol>
                       
                        </ol>
                        <br/>
                        <p>
                            <strong>2.	How we use the information we collect </strong>
                        </p>
                        <ol style={{marginBottom: "0cm", listStyleType:"lower-alpha"}}>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                             In General. We may use information that we collect about you to:
                                </span>
                            </li>
                                <ol style={{marginBottom: "0cm", listStyleType:"lower-roman"}}>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <span style={{color:"windowtext"}}>
                                       create and display your profile and any content you upload or post to the JobStream website to other users of the website;
                                        </span>
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <span style={{color:"windowtext"}}>
                                       deliver and improve our products and Service, and manage our business;
                                        </span>
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <span style={{color:"windowtext"}}>
                                     manage your account and provide you with customer support;
                                        </span>
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <span style={{color:"windowtext"}}>
                                        perform research and analysis about your use of, or interest in, our or others’ products, services, or Content;
                                        </span>
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <span style={{color:"windowtext"}}>
                                       track and analyze your preferences to better understand your service needs and eligibility;
                                        </span>
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <span style={{color:"windowtext"}}>
                                        communicate with you by email, postal mail, telephone and/or mobile devices about products or services that may be of interest to you either from us or other third parties;
                                        </span>
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <span style={{color:"windowtext"}}>
                                        develop, display, and track Content and advertising tailored to your interests on our Service and other sites, including providing our advertisements to you when you visit other sites;
                                        </span>
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <span style={{color:"windowtext"}}>
                                       website or mobile application analytics;
                                        </span>
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <span style={{color:"windowtext"}}>
                                       enforce or exercise any rights in this Agreement; and
                                        </span>
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <span style={{color:"windowtext"}}>
                                       perform functions or services as otherwise described to you at the time of collection.
                                        </span>
                                    </li>
                                </ol>
                                <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                Job applicants. If your personal information is submitted through our website when applying for a position with our Company, the information will be 
                                used solely in connection with considering and acting upon your application. We may retain your personal information, but only for the purpose of considering
                                your application for current or future available positions. This information, which may include your name and contact information, prior education and 
                                experience, and other information you provide to us, may be shared with third-party service providers retained by us to collect, maintain and analyze candidate 
                                submissions for job postings.
                                </span>
                            </li>
                                <ol style={{marginBottom: "0cm", listStyleType:"lower-roman"}}>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <span style={{color:"windowtext"}}>
                                        In all circumstances, we may perform these functions directly or use a third party vendor to perform these functions on our behalf who will be 
                                        obligated to use your personal information only to perform services for us. 
                                        </span>
                                    </li>
                                </ol>
                        </ol>
                            <br/>
                        <p>
                            <strong>3.	With whom we share your information </strong>
                        </p>
                        <ol style={{marginBottom: "0cm", listStyleType:"lower-alpha"}}>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                               Information Shared with Other Users. When you register as a user of JobStream, your JobStream profile will be viewable by some other users of the Service. 
                               Other users will be able to view information you have provided to us, such as any CVs or resumes you upload, job descriptions or volunteer opportunities you
                                post, photos you upload, your first name, your age, and your personal description. 
                                </span>
                            </li>
                               <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                Personal information. We do not share your personal information with others except as indicated in this Privacy Policy or when we inform you and give you an 
                                opportunity to opt out of having your personal information shared. We may share personal information with:
                                    </span>
                            </li>
                                <ol style={{marginBottom: "0cm", listStyleType:"lower-roman"}}>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <span style={{color:"windowtext"}}>
                                        <strong>Service providers</strong>: 
                                            We may share information, including but not limited to personal 
                                            and financial information, with third parties that perform 
                                            certain services on our behalf. These services may include, 
                                            but are not limited to, fulfilling orders, providing customer service and marketing assistance, performing 
                                            business and sales analysis, ad tracking and analytics, member screenings, supporting our Service functionality, 
                                            and supporting surveys and other features offered through our Service. These service providers may have access to personal 
                                            information needed to perform their functions but are not permitted to share or use such information for any other purposes.
                                        </span>
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <span style={{color:"windowtext"}}>
                                        <strong>Other Situations</strong>. 
                                            We may disclose your information, including personal information:
                                        </span>
                                    </li>
                                    <ol style={{marginBottom: "0cm", listStyleType:undefined}}>
                                        <br/>
                                        <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                            <span style={{color:"windowtext"}}>
                                                In response to a subpoena or similar investigative demand, a court order, or a request for cooperation from a law enforcement or other 
                                                government agency; to establish or exercise our legal rights; to defend against legal claims; or as otherwise required by law. In such cases,
                                                 we may raise or waive any legal objection or right available to us.
                                            </span>
                                        </li>
                                        <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                            <span style={{color:"windowtext"}}>
                                                When we believe disclosure is appropriate in connection with efforts to investigate, prevent, or take other action regarding illegal activity,
                                                suspected fraud or other wrongdoing; to protect and defend the rights, property or safety of our Company, our users, our employees, or others;
                                                to comply with Applicable Law or cooperate with law enforcement; or to enforce our Terms of Use or other agreements or policies.
                                            </span>
                                        </li>
                                        <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                            <span style={{color:"windowtext"}}>
                                                In connection with a substantial corporate transaction, such as the sale of our business, a divestiture, merger, consolidation, or asset sale, or in
                                                 the unlikely event of bankruptcy.
                                            </span>
                                        </li>
                                    </ol>
                                </ol>
                                <br/>
                                <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                    <span style={{color:"windowtext"}}>
                                        Aggregated and/or non-personal information. We may use and share non-personal information we collect under any of the above circumstances. We may also 
                                        share it with third parties to develop and deliver targeted advertising on our Service and on websites or applications of third parties, and to analyze
                                        and report on advertising you see. We may combine non-personal information we collect with additional non-personal information collected from other
                                        sources. We also may share aggregated, non-personal information, or personal information in hashed, non-human readable form, with third parties, 
                                        including advisors, advertisers and investors, for the purpose of conducting general business analysis or other business purposes. For example, we may
                                        engage a data provider who may collect web log data from you (including IP address and information about your browser or operating system), or 
                                        place or recognize a unique cookie on your browser to enable you to receive customized ads or Content. The cookies may reflect de-identified 
                                        demographic or other data linked to data you voluntarily have submitted to us (such as your email address), that we may share with a data provider 
                                        solely in hashed, non-human readable form. 
                                    </span>
                                </li>
                        </ol>
                        <br/>
                        <p>
                            <strong>4.	How you can access your information  </strong>
                        </p>
                        <ol style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px", listStyleType:"none"}}>
                        If you have a JobStream account, you have the ability to review and update your personal information within the Service by opening your account and going to your “Profile” page for your account. More information about how to contact us is provided below. You also may close your account at any time by following the link and instructions to deactivate and close your account in your profile on the Service. If you close your account, we will retain certain information associated with your account for analytical purposes and recordkeeping integrity, as well as to prevent fraud, enforce our Terms of Use and this Agreement, take actions we deem necessary to protect the integrity of our Service or our users, or take other actions otherwise permitted by law. In addition, if certain information has already been provided to third parties as described in this Privacy Policy, retention of that information will be subject to those third parties' policies.
                        JobStream has designated a Privacy Officer to be accountable for the operation of this Privacy Policy. Applicable Law allows any individual the right to access and/or request the correction of errors or omissions in his or her personal information that is in our custody or under our control. Our Privacy Officer will assist the individual with the access request. This includes: identification of personal information under our custody or control; and information about how personal information under our control may be or has been used by us. Individuals may question or report any privacy concerns, breaches, violations or compliance issues to JobStream’s Privacy Officer at the address indicated below.
                        We will respond to requests within the time allowed by Applicable Law and will make every effort to respond as accurately and completely as possible. Any corrections made to personal information will be promptly sent to any organization it was disclosed to. 
                        In certain exceptional circumstances, we may not be able to provide access to certain personal information we hold about an individual. For security purposes, not all personal information is accessible and amendable by the Privacy Officer. If access or corrections cannot be provided, we will notify the individual making the request within 30 days, in writing, of the reasons for the refusal.

                        </ol>
                        <p>
                            <strong>5.	Your choices about collection and use of your information   </strong>
                        </p>
                        <ol style={{marginBottom: "0cm", listStyleType:"lower-alpha"}}>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    You can choose not to provide us with certain information, but that may result in you being unable to use certain features of our Service because such 
                                    information may be required in order for you to register as a user; purchase products or services; ask a question; or initiate other transactions.
                                </span>
                            </li>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    Our Service may also deliver notifications to your phone or mobile device. You can disable these notifications by deleting the relevant Service or by changing the
                                     settings on your mobile device.
                                </span>
                            </li>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    You can also control information collected by cookies. You can delete or decline cookies by changing your browser settings. Click “help” in the toolbar of most 
                                    browsers for instructions.
                                </span>
                            </li>
                        </ol>
                        <br/>
                        <p>
                            <strong>6.	How we protect your personal information </strong>
                        </p>
                        <ol style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px", listStyleType:"none"}}>
                            We take security measures to help safeguard your personal information from unauthorized access and disclosure. For example, electronic records are stored in secure, 
                            limited-access servers; we employ technological tools like firewalls and passwords; and we ensure our employees are trained on the importance of maintaining the 
                            security and confidentiality of personal information. We currently use SSL encryption with a 2048 bit RSA key digital certificate. Reasonably secure methods are 
                            used whenever we destroy personal information. However, no system can be completely secure. Therefore, although we take steps to secure your information, we do not 
                            promise, and you should not expect, that your personal information, chats, or other communications will always remain secure. Users should also take care with how
                             they handle and disclose their personal information and should avoid sending personal information through insecure email. 
                        </ol>
                        <br/>
                        <p>
                            <strong>7.	Information you provide about yourself while using our Service  </strong>
                        </p>
                        <ol style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px", listStyleType:"none"}}>
                            We provide areas on our Service where you can post information about yourself and others and communicate with others. Such postings are governed by our Terms of Use. 
                            Also, whenever you voluntarily disclose personal information on publicly-viewable pages, that information will be publicly available and can be collected and used by others.
                            For example, if you post your email address, you may receive unsolicited messages. We cannot control who reads your posting or what other users may do with the information 
                            you voluntarily post, so we encourage you to exercise discretion and caution with respect to your personal information.
                        </ol>
                        <br/>
                        <p>
                            <strong>8.	Social Networking</strong>
                        </p>
                        <ol style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px", listStyleType:"none"}}>
                            When you use certain aspects of the Service or you post information to other social networking sites (e.g. posting a link to the Service on Facebook or Twitter), the
                             personal information that you post or share in connection with these third-party sites is visible to other persons and can be read, collected, used and disclosed by 
                             other persons. Any information provided to such third-party social networking sites and other sites is outside of the JobStream’s control and is not governed by this
                              policy. 
                        </ol>
                        <br/>
                        <p>
                            <strong>9.	Children's privacy </strong>
                        </p>
                        <ol style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px", listStyleType:"none"}}>
                            We do not knowingly collect, maintain, or use personal information from children under the age of 13, except as permitted by law. If we discover we have received any
                             information from a child under 13 in violation of this policy, we will delete that information immediately. If you believe JobStream has any information from or 
                             about anyone under 13, please contact us at the address listed below. Although this situation is very unlikely please contact us ASAP if this situation has occurred.
                             
                            <br/>
                            If you are under 13, please do not submit any personally identifiable information to the JobStream website.

                        </ol>
                        <br/>
                        <p>
                            <strong>10.	Links </strong>
                        </p>
                        <ol style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px", listStyleType:"none"}}>
                            The Service may contain links to other sites and advertisements. This Privacy Policy only applies to information collected by our Service. We are not responsible for the
                            privacy practices and policies of these third parties.
                        </ol>
                        <br/>
                        <p>
                            <strong>11.	Visiting our Service from outside Canada  </strong>
                        </p>
                        <ol style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px", listStyleType:"none"}}>
                            If you are visiting our Service from outside Canada, please be aware that your information may be transferred to, stored, and processed in Canada and globally where our servers 
                            are located and our central database is operated. By using our Service, you understand and agree that your information may be transferred to our facilities and those third parties with 
                            whom we share it, as described in this Privacy Policy.
                        </ol>
                        <br/>
                        <p>
                            <strong>12.	No Rights of Third Parties  </strong>
                        </p>
                        <ol style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px", listStyleType:"none"}}>
                            This Privacy Policy does not create rights enforceable by third parties or require disclosure of any personal information relating to users of the website.
                        </ol>
                        <br/>
                        <p>
                            <strong>13.	Changes to this Privacy Policy </strong>
                        </p>
                        <ol style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px", listStyleType:"none"}}>
                            We will occasionally update this Privacy Policy. When we post changes to this Privacy Policy, we will revise the "last updated" date at the top of this Privacy Policy. We recommend 
                            that you check our Service from time to time to inform yourself of any changes in this Privacy Policy or any of our other policies.
                        </ol>
                        <br/>
                        <p>
                            <strong>14.	How to contact us  </strong>
                        </p>
                        <ol style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px", listStyleType:"none"}}>
                             If you have any questions about this Privacy Policy, please contact our Privacy Officer by email or postalmail as follows:
                             <br/>
                            Attn: Privacy Officer
                            JobStream App Corporation
                            2101-1088 6TH AVE SW 
                            Calgary, AB T2P5N3
                            <br/>
                            Email: connect@jobstreamapp.com
                        </ol>
                        <br/><br/><br/>
                        
                    </div>
                </div>
                <FootContainer/>
            </Layout>
         );
    }
}
 
export default PrivacyPolicy;