import React, { Component } from 'react'
import Nav from '../nav/nav'
import { Layout } from 'antd';
import FootContainer from '../footer/index'

const { Header } = Layout;

class Terms extends Component {
    state = {
        color: '0,0,0,0',
        textcolor: '55, 124, 204',
        burger:'136,136,136'
      }
   
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
                <div  align="center">
                    <div  className="safetips-container"  align="left" style={{borderTop:"1px solid #dcdcdc", minHeight:"120vh", paddingTop:"20vh" }}>
                        <h1>Terms And Use</h1>
                        <p>Last revised in August, 2018</p>
                        <p>Welcome to JobStream, operated by JobStream App Corporation (the <strong>“Company”</strong>, <strong>“JobStream”</strong>, <strong>“we,”</strong> or <strong>“us”</strong>).</p>
                        <p>By accessing the JobStream application or its website found at www.JobStream.com, whether through a mobile device, mobile application or computer 
                            (collectively, the <strong>“Service”</strong>) you agree to be bound by these Terms of Use (this <strong>“Agreement”</strong>), whether or not you create a JobStream account. If you wish to make use 
                            of the Service, please read this Agreement.  Using the Service constitutes acceptance of this Agreement which is legally binding between you and JobStream, whether
                            or not you have created a JobStream account. This Agreement, together with any documents and/or additional terms they expressly incorporate by reference, governs
                            your access to and use, including any content, functionality and services offered on or through the Service.
                        </p>
                        <p>
                            You should also read the JobStream Privacy Policy, which is incorporated by reference into this Agreement and available in the Service. If you do not accept and agree to be bound 
                            by all of the terms of this Agreement, including the JobStream Privacy Policy, do not use the Service. Please contact us with any questions regarding this Agreement.
                        </p>
                        <p>
                            BY USING THE SERVICE, YOU ACCEPT AND AGREE TO BE BOUND AND COMPLY WITH THESE TERMS AND OUR PRIVACY POLICY INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT AGREE TO 
                            THESE TERMS OR THE PRIVACY POLICY, YOU MUST NOT ACCESS OR USE THE SERVICE.
                        </p>
                        <ol style={{marginBottom: "0cm", listStyleType:undefined}}>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                        <strong>Information you provide.</strong>
                                </span>
                            </li>
                            <br/>
                            <ol style={{marginBottom: "0cm", listStyleType:"lower-alpha"}}>
                                <li  style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                    This Agreement is an electronic contract that establishes the legally binding terms you must accept to use the Service. This Agreement includes the Company’s
                                     (i) Privacy Policy, (ii) our Safety Tips and (iii) terms disclosed and agreed to by you if you purchase or accept additional features, products or services 
                                     we offer on the Service, such as terms governing features, billing, free trials, discounts and promotions.
                                </li>
                                <br/>
                                <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                    By accessing or using the Service, you accept this Agreement and agree to the terms, conditions and notices contained or referenced herein and consent to
                                    have this Agreement and all notices provided to you in electronic form. To withdraw this consent, you must cease using the Service and terminate your
                                    account. Please print a copy of this Agreement for your records. To receive a non-electronic copy of this Agreement, please contact us at 
                                    connect@jobstreamapp.com. This Agreement may be modified by the Company from time to time in our sole discretion, such modifications to be effective upon 
                                    posting by the Company in the Service. You accept and agree to be bound by the Agreement as amended or updated from time to time.
                                </li>
                            </ol>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                        <strong>Eligibility. </strong>Although our Service is a general audience Service, we restrict the use of our Service to individuals age 13 and above. 
                                        Furthermore, you must be at least 18 years of age to access and use the Service, or otherwise possess parental or guardian consent to agree to these 
                                        Terms of Use and to access and use the JobStream website and use the Service and are otherwise fully able and competent to enter into the terms, 
                                        conditions, obligations, affirmations, representations, and warranties set forth in this Agreement. Any use of the Service is void where prohibited. 
                                        By accessing and using the Service, you represent and warrant that you have the right, authority and capacity to enter into this Agreement and to abide
                                        by all of the terms and conditions of this Agreement. If you create an account, you represent and warrant that you have never been convicted of a felony
                                        and that you are not required to register as a sex offender with any government entity. Using the Service may be prohibited or restricted in certain 
                                        countries. If you use the Service from outside of Canada, you are responsible for complying with the laws and regulations of the territory from which
                                        you access or use the Service.
                                        <br/>
                                        <br/>
                                        YOU AFFIRM THAT YOU ARE EITHER 18 YEARS OF AGE, OR POSSESS PARENTAL OR GUARDIAN CONSENT TO AGREE TO THESE TERMS OF USE, AND TO ACCESS AND USE THE 
                                        WEBSITE AND USE THE SERVICES, AND ARE OTHERWISE FULLY ABLE AND COMPETENT TO ENTER INTO THE TERMS, CONDITIONS, OBLIGATIONS, AFFIRMATIONS, REPRESENTATIONS,
                                        AND WARRANTIES SET FORTH IN THIS AGREEMENT, AND TO ABIDE BY AND COMPLY WITH THIS AGREEMENT. YOU REPRESENT THAT YOU HAVE THE LEGAL CAPACITY TO ENTER A 
                                        CONTRACT IN THE JURISDICTION WHERE YOU RESIDE.  
                                        <br/>
                                        <br/>
                                        You are responsible for obtaining access to the Service and acknowledge that such access may involve third-party fees (such as internet service provider
                                        access, data fees or calling rates). You are required to ensure that all persons who access the Service through your internet connection are aware of 
                                        and comply with this Agreement. You are responsible for any security breaches or performance issues relating to accessing the Service.
                                </span>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                        <strong>Creating an Account. </strong>
                                        Some portions of our Service can be browsed anonymously. However, to engage in certain special features or functions of the JobStream website, you may 
                                        be asked to provide certain personal information, such as your email address or demographic information. We use this information to create your account,
                                        contact and correspond with you about your account, respond to your inquiries, and monitor functions of our Service that you choose to use. In the event
                                        that you subscribe to JobStream using a mobile application login, such as the App Store™, Google Play™, or any similar service, you are bound by 
                                        JobStream terms and conditions and the conditions imposed by the service used to access JobStream. For more information regarding the information we
                                        collect from you and how we use it, please consult our Privacy Policy.
                                </span>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                        <strong>Term and Termination. </strong>
                                        This Agreement will remain in full force and effect while you use the Service and/or have a JobStream account. You may disable your account at any time, 
                                        for any reason, by following the link and instructions to deactivate your account in your profile on the Service.  The Company may terminate or suspend
                                        your account at any time without notice if the Company believes that you have breached this Agreement, or for any other reason, with or without cause, 
                                        in its sole discretion. Upon such termination or suspension, you will not be entitled to any refund of unused fees for website or in app purchases. The 
                                        Company is not required to disclose, and may be prohibited by law from disclosing, the reason for the termination or suspension of your account. After 
                                        your account is terminated for any reason, all terms of this Agreement survive such termination, and continue in full force and effect, except for any 
                                        terms that by their nature expire or are fully satisfied.
                                </span>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                        <strong>Non-commercial Use by Users. </strong>
                                        The Service is for personal use only. Users may not use the Service or any Content contained in the Service including, but not limited to, Content of
                                        other users, designs, text, graphics, images, video, information, logos, software, audio files and computer code in connection with any commercial 
                                        endeavors, including but not limited to (i) advertising or soliciting any user to buy or sell any products or Services not offered by JobStream or 
                                        (ii) soliciting others to attend parties or other social functions, or networking, for commercial purposes. JobStream may investigate and take any available 
                                        legal action in response to illegal and/or unauthorized uses of the Service, including collecting usernames and/or email addresses of users by electronic or 
                                        other means for the purpose of sending unsolicited email and unauthorized framing of or linking to the Service.
                                </span>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                        <strong>Account Security. </strong>
                                        You are responsible for maintaining the confidentiality of the username and password you designate during the registration process, and you are solely 
                                        responsible for all activities that occur under your username and password. You must exercise caution when accessing your account from a public or shared
                                        computer so that others are not able to view or record your password or other personal information. You understand and agree that should you be provided
                                        an account, your account is personal to you and you agree not to provide any other person with access to this Service or portions of it using your user 
                                        name, password, or other security information. You agree to immediately notify the Company of any disclosure or unauthorized use of your username or 
                                        password or any other breach of security at connect@jobstreamapp.com and ensure that you log out from your account at the end of each session
                                </span>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                        <strong>Your Interactions with Other Users. </strong>
                                </span>
                                <br/>
                                <ol style={{marginBottom: "0cm", listStyleType:"lower-alpha"}}> 
                                <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        You are solely responsible for your interactions with other users and relationships that you establish and/or maintain though the Service. You understand
                                        that the Company does not conduct criminal background checks or screenings on its users. The Company also does not inquire into the backgrounds of all 
                                        of its users or attempt to verify the statements of its users. The Company makes no representations or warranties as to the conduct of users or their
                                        compatibility with any current or future users. The Company reserves the right to conduct any criminal background check or other screenings (such as
                                        sex offender register searches), at any time and using available public records.
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        The Company is not responsible for the conduct of any user. As noted in and without limiting Sections 17 and 20 below, in no event shall the Company, 
                                        its affiliates or its partners be liable (directly or indirectly) for any losses or damages whatsoever, whether direct, indirect, general, special, 
                                        compensatory, consequential, and/or incidental, arising out of or relating to the conduct of you or anyone else in connection with the use of the Service
                                        including, without limitation, death, bodily injury, emotional distress, and/or any other damages resulting from communications or meetings with other users
                                        or persons you meet through the Service. You agree to take all necessary precautions in all interactions with other users, particularly if you decide to 
                                        communicate off the Service or meet in person, or if you decide to send money to another user. In addition, you agree to review and follow the Company's 
                                        Safety Tips, located in the Service, prior to using the Service. You understand that the Company makes no guarantees, either express or implied, regarding
                                        your ultimate compatibility with individuals, companies, or businesses you meet through the Service. You should not provide your financial information 
                                        (for example, your credit card or bank account information), or wire or otherwise send money, to other users.
                                    </li>
                                </ol>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                        <strong>Intellectual Property Rights and Ownership. </strong>
                                </span>
                                <ol style={{marginBottom: "0cm", listStyleType:"lower-alpha"}}>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        You understand and agree that the Service and its entire contents, features, and functionality, including but not limited to all information, software, 
                                        code, text, displays, graphics, photographs, video, audio, design, presentation, selection, and arrangement, are owned by the Company, its licensors, or
                                         other providers of such material and are protected in all forms by intellectual property laws including without limitation, copyright, trademark, 
                                         patent, trade secret, and any other proprietary rights.
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        The Company name and all related names, logos, product and service names, designs, images and slogans are trademarks of the Company or its affiliates or
                                        licensors. You must not use such marks without the prior written permission of the Company. Other names, logos, product and service names, designs, 
                                        images and slogans mentioned or which appear on the Service are the trademarks of their respective owners. Use of any such property, except as expressly
                                        authorized, shall constitute a violation of the rights of the property owner and may be a violation of federal or other laws and could subject the
                                        violator to legal action.
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        You may only use the Service for your personal and non-commercial use. You shall not directly or indirectly reproduce, compile for an internal database,
                                        distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on the
                                        Service, in any form or medium whatsoever except:
                                        <ol style={{marginBottom:"0cm", listStyleType:"lower-roman"}}>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                your computer, browser and cellular telephone may temporarily store or cache copies of materials being accessed and viewed;  
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                a reasonable number of copies for personal use only may be printed keeping any proprietary notices thereon, which may only be used for 
                                                non-commercial and lawful personal use and not for further reproduction, publication, or distribution of any kind on any medium whatsoever; and  
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                in the event social media features  are provided with respect to certain content on the Service, you may take such actions as the Service permits for such features.  
                                            </li>
                                            
                                        </ol>
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        You are not permitted to modify copies of any materials from the Service nor delete or alter any copyright, trademark, or other proprietary rights 
                                        notices from copies of materials from the Service. You must not access or use for any commercial purposes any part of the Service or any services or
                                         materials available through the Service.
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        If you print off, copy or download any part of the Service in breach of this Agreement, your right to use the Service will cease immediately and you
                                        must, at our option, return or destroy any copies of the materials you have made. You have no right, title, or interest in or to the Service or to any 
                                        content on the Service, and all rights not expressly granted are reserved by the Company. Any use of the Service not expressly permitted by this 
                                        Agreement is a breach of this Agreement and may violate copyright, trademark, and other intellectual property laws.
                                    </li>
                                </ol>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                        <strong>Content Posted by You in the Service. </strong>
                                </span>
                                <ol style={{marginBottom:"0cm",listStyleType:"lower-alpha"}}>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        You are solely responsible for the Content and information that you post, upload, publish, link to, transmit, record, display or otherwise make available 
                                        (hereinafter, <strong>“post”</strong>) on the Service or transmit to other users, including text messages, chat, videos (including streaming videos), photographs, or profile
                                        text, whether publicly posted or privately transmitted (collectively, <strong>“Content”</strong>). You may not post as part of the Service, or transmit to the Company or any 
                                        other user (either on or off the Service), any offensive, inaccurate, incomplete, abusive, obscene, profane, threatening, intimidating, harassing, racially
                                        offensive, or illegal material, or any material that infringes or violates another person’s rights (including intellectual property rights, and rights of 
                                        privacy and publicity). You represent and warrant that (i) all information that you submit upon creation of your account is accurate and truthful and that 
                                        you will promptly update any information provided by you that subsequently becomes inaccurate, incomplete, misleading or false; (ii) you have the right to
                                        post the Content on the Service and grant the licenses set forth below; and (iii) any Content you post on the Service will comply with all applicable 
                                        federal, provincial, local and international laws and regulations. 
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        You understand and agree that the Company may, but is not obligated to, monitor or review any Content you post as part of a Service. The Company may 
                                        delete any Content, in whole or in part, that in the sole judgment of the Company violates this Agreement or may harm the reputation of the Service or 
                                        the Company.
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        By posting Content as part of the Service, you automatically assign to the Company, its affiliates, licensees and successors, an irrevocable, perpetual, 
                                        non- exclusive, transferable, sub-licensable, fully paid-up, worldwide right and license to (i) use, copy, store, perform, display, reproduce, record,
                                        play, adapt, modify and distribute the Content, (ii) prepare derivative works of the Content or incorporate the Content into other works, and 
                                        (iii) grant and authorize sublicenses of the foregoing in any media now known or hereafter created. You represent and warrant that any posting and use 
                                        of your Content by the Company will not infringe or violate the rights of any third party.
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        In addition to the types of Content described in Section 9(a) above, the following is a partial list of the kind of Content that is prohibited in the 
                                        Service. You may not post, upload, display or otherwise make available Content including but not limited to Content that:
                                        <ol style={{marginBottom:"0cm",listStyleType:"lower-roman"}}>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                promotes racism, bigotry, hatred or physical harm of any kind against any group or individual;
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                is unlawful, harmful, threatening, abusive, harassing, tortuous, defamatory, vulgar, obscene, pornographic, libelous, invasive of another's 
                                                privacy, hateful, or racially or ethnically objectionable, encourages criminal behavior, gives rise to civil liability, violates any law, or is
                                                otherwise objectionable;
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                asserts or implies that you have a right to make available under any law or under a contractual relationship;
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                advocates harassment or intimidation of another person;
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                requests money from, or is intended to otherwise defraud, other users of the Service;
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                involves the transmission of <strong>“junk mail”</strong>, <strong>“chain letters,”</strong> or unsolicited mass mailing or <strong>“spamming”</strong>
                                                (or <strong>“spimming”</strong>, <strong>“phishing”</strong>, <strong>“trolling”</strong> or similar activities);
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                promotes information that is false or misleading, or promotes illegal activities or conduct that is defamatory, libelous or otherwise objectionable;
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                promotes an illegal or unauthorized copy of another person’s copyrighted work, such as providing pirated computer programs or links to them, providing 
                                                information to circumvent manufacture- installed copy-protect devices, or providing pirated images, audio or video, or links to pirated images, audio or video files;
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                contains video, audio photographs, or images of another person without his or her permission (or in the case of a minor, the minor’s legal guardian);
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                contains restricted or password only access pages, or hidden pages or images (those not linked to or from another accessible page);
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                provides material that exploits people in a sexual, violent or other illegal manner, or solicits personal information from anyone under the age of 18;
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                provides instructional information about illegal activities such as making or buying illegal weapons or drugs, violating someone’s privacy, +
                                                or providing, disseminating or creating computer viruses;
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                contains viruses, time bombs, trojan horses, cancelbots, worms or other harmful, or disruptive codes, components or devices;
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                impersonates, or otherwise misrepresents affiliation, connection or association with, the Company, a Company employee, another user, or any
                                                person or entity (including, without limitation, by using email addresses, or screen names associated with any of the foregoing);
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                provides information or data you do not have a right to make available under law or under contractual or fiduciary relationships (such as inside 
                                                information, proprietary and confidential information);
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                disrupts the normal flow of dialogue, causes a screen to “scroll” faster than other users are able to type, or otherwise negatively affects 
                                                other users’ ability to engage in real time exchanges;
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                solicits passwords or personal identifying information for commercial or unlawful purposes from other users or disseminates another person’s 
                                                personal information without his or her permission; 
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                publicizes or promotes commercial activities and/or sales without our prior written consent such as contests, sweepstakes, barter, advertising, 
                                                and pyramid schemes;
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                restricts or inhibits anyone’s use or enjoyment of the Service, or which, as determined by us, may harm the Company or users of the Service or 
                                                expose them to liability; and
                                            </li>
                                            <br/>
                                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                                causes annoyance, inconvenience or needless anxiety or is likely to upset, embarrass or alarm any other person.
                                            </li>
                                        </ol>
                                        <br/>
                                        The Company reserves the right, in its sole discretion, to investigate and take any legal action against anyone who violates this provision, including
                                        removing the offending communication from the Service and terminating or suspending the account of such violators.
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        Your use of the Service, including all Content you post through the Service, must comply with all applicable laws and regulations. You agree that the 
                                        Company may access, preserve and disclose your account information and Content if required to do so by law or in a good faith belief that such access,
                                        preservation or disclosure is reasonably necessary, such as to: (i) comply with legal process; (ii) enforce this Agreement; (iii) respond to claims 
                                        that any Content violates the rights of third parties; (iv) respond to your requests for customer Service or allow you to use the Service in the future;
                                        or (v) protect the rights, property or personal safety of the Company or any other person.   
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        You agree that any Content you place on the Service may be viewed by other users and may be viewed by any person visiting or participating in the Service. 
                                    </li>
                                </ol>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                        <strong>Prohibited Activities. </strong>
                                        The Company reserves the right to investigate, suspend and/or terminate your account if you have misused the Service or behaved in a way the Company
                                        regards as inappropriate or unlawful, including actions or communications that occur off the Service but involve users you meet through the Service. 
                                        The Service will not be used for certain activities, including but not limited to do the following:
                                </span>
                                <ol style={{marginBottom:"0cm",listStyleType:"lower-alpha"}}>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        impersonate any person or entity;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        solicit money from any users;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        post any Content that is prohibited by Section 9;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        access content and data that is not intended for you
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <strong>“stalk”</strong> or otherwise harass any person;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        express or imply that any statements you make are endorsed by the Company or any other person or entity without specific prior written consent;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        use the Service in an illegal manner or to commit or assist in the commission of an illegal act, including but not limited to criminal acts, breach of 
                                        penal laws and breach of by-laws;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        in any manner violate any applicable federal, provincial, local, or international law or regulation including, without limitation, any laws regarding 
                                        the export of data or software, patent, trademark, trade secret, copyright, or other intellectual property, legal rights (including the rights of
                                        publicity and privacy of others) or contain any material that could give rise to any civil or criminal liability under applicable laws or regulations 
                                        or that otherwise may be in conflict with this Agreement;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        access the Service in a jurisdiction in which it is illegal or unauthorized;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        ask or use users to conceal the identity, source, or destination of any illegally gained money or products;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        use any robot, spider, site search/retrieval application, or other manual or automatic device or process to retrieve, index, <strong>“data mine”</strong>, 
                                        or in any way reproduce or circumvent the navigational structure or presentation of the Service or its Contents;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        attempt to breach or breaching the security and/or authentication measures which are not authorized;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        illicitly reproduce TCP/IP packet headers;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        attach the Service via a denial-of-service attack, distributed denial-of-service attack, flooding, mailbombing or crashing;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        collect usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email or unauthorized 
                                        framing of or linking to the Service;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        interfere with or disrupt the Service or the servers or networks connected to the Service;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        email or otherwise transmit any material that contains software viruses or any other computer code, files or programs designed to interrupt,
                                        destroy or limit the functionality of any computer software or hardware or telecommunications equipment;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        forge headers or otherwise manipulate identifiers in order to disguise the origin of any information transmitted to or through the Service 
                                        (either directly or indirectly through use of third party software);
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        <strong>“frame”</strong> or <strong>“mirror”</strong> any part of the Service, without the Company's prior written authorization;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        use meta tags or code or other devices containing any reference to the Company or the Service (or any trademark, trade name, service mark, logo 
                                        or slogan of the Company) to direct any person to any other website for any purpose;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        modify, adapt, sublicense, translate, sell, reverse engineer, decipher, decompile or otherwise disassemble any portion of the Service any 
                                        software used on or for the Service, or cause others to do so;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        post, use, transmit or distribute, directly or indirectly, (e.g. screen scrape) in any manner or media any Content or information obtained from the
                                        Service other than solely in connection with your use of the Service in accordance with this Agreement; and
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        otherwise attempt to interfere with the proper working of the Platform. 
                                    </li>
                                </ol>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    <strong>End User License. </strong>
                                    Except for Content posted by user, the Service and the information and materials contained therein are the property of Company and its licensors, and are 
                                    protected from unauthorized copying and dissemination by copyright law, trademark law, and other intellectual property laws in accordance with Section 8 of 
                                    this Agreement.  Subject to this Agreement, we grant to you a non-transferable, non-exclusive, license to use the Service on a device that you own or control 
                                    for your use.  The Service is licensed to you and not sold.  Any future release, update, or other addition to functionality of the Service will be subject to
                                    this Agreement.
                                </span>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    <strong>Geographic Restrictions. </strong>
                                    The owner of the Service is based in the Province of Alberta in Canada. <span style={{backgroundColor:"yellow"}}>[We provide this Service for use only by persons located in Canada.] </span> 
                                    The Service is not intended for use in any jurisdiction where its use is not permitted. If you access the Service from outside Canada you do so at 
                                    your own risk and you are responsible for compliance with local laws of your jurisdiction.
                                </span>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    <strong>Customer Service. </strong>
                                    The Company provides assistance and guidance through its customer care representatives. When communicating with our customer care representatives, you agree to 
                                    not be abusive, obscene, profane, offensive, sexist, threatening, harassing, racially offensive, and to not otherwise behave inappropriately. If we feel that your 
                                    behavior towards any of our customer care representatives or other employees is at any time threatening or offensive, we reserve the right to immediately terminate 
                                    your account.
                                </span>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    <strong>In App and Website Purchases. </strong>
                                    From time to time, JobStream may offer additional products and Services for purchase through the App Store™, Google Play™ or other application platforms 
                                    (<strong>“in app purchases”</strong>), as well as through its website. If you choose to make an in app purchase, you will be prompted to enter details 
                                    for your account with the mobile platform you are using (e.g., Apple, Android, etc.) (<strong>“your IAP Account”</strong>), and your IAP Account will be charged for the 
                                    in app purchase in accordance with the terms disclosed to you at the time of purchase as well as the general terms for in app purchases that apply to your 
                                    IAP Account. In app purchases may include a free trial period. At the end of the free trial period, you will be charged the price of the subscription and 
                                    will continue to be charged until you cancel your subscription. To avoid any charges, you must cancel before the end of the trial period. If you purchase an 
                                    auto-recurring periodic subscription through an in app purchase, your IAP Account will be billed continuously for the subscription until you cancel in 
                                    accordance with the platform terms. In all cases, please refer to the terms of your application platform which apply to your in app purchases.    
                                </span>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    <strong>Modifications to Service. </strong>
                                    Company reserves the right at any time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice, in 
                                    our sole discretion. You agree that the Company shall not be liable to you or to any third party for any modification, suspension or discontinuance of the 
                                    Service. To protect the integrity of the Service, the Company reserves the right at any time in its sole discretion to block users from certain IP addresses
                                    from accessing the Service.
                                </span>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    <strong>Copyright Policy; Notice and Procedure for Making Claims of Copyright Infringement. </strong>
                                    You may not post, distribute, or reproduce in any way any copyrighted material, trademarks, or other proprietary information without obtaining the prior 
                                    written consent of the owner of such proprietary rights. Without limiting the foregoing, if you believe that your work has been copied and posted on the 
                                    Service in a way that constitutes copyright infringement, please provide the Company with the following information:
                                </span>
                                <ol style={{marginBottom:"0cm", listStyleType:"lower-alpha"}}>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        a description of the copyrighted work that you claim has been infringed;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        a description of where the material that you claim is infringing is located on the Service (and such description must be reasonably 
                                        sufficient to enable the Company to find the alleged infringing material, such as a url);
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        your address, telephone number and email address;
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        a written statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law; and
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or 
                                        authorized to act on the copyright owner's behalf.
                                    </li>
                                </ol>
                                Notice of claims of copyright infringement should be provided at the following address:
                                <br/> <br/>
                                Copyright Agent
                                <br/>
                                c/o JobStream Legal
                                <br/>
                                2101-1088 6TH AVE SW Calgary AB, T2P5N3
                                <br/>
                                connect@jobstreamapp.com
                                <br/> <br/>
                                The Company will terminate the accounts of repeat infringers.
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                            <span style={{color:"windowtext"}}>
                                    <strong>Disclaimers. </strong>
                                </span>
                                <ol style={{marginBottom:"0cm", listStyleType:"lower-alpha"}}>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        ou acknowledge and agree that neither the Company nor its affiliates and third party partners are responsible for and shall not have any liability, 
                                        directly or indirectly, for any loss or damage, including personal injury or death, as a result of or alleged to be the result of (i) any incorrect or 
                                        inaccurate Content posted in the Service, whether caused by users or any of the equipment or programming associated with or utilized in the Service; 
                                        (ii) the timeliness, deletion or removal, incorrect delivery or failure to store any Content, communications or personalization settings; 
                                        (iii) the conduct, whether online or offline, of any user; (iv) any error, omission or defect in, interruption, deletion, alteration, delay in 
                                        operation or transmission, theft or destruction of, or unauthorized access to, any user or user communications; or (v) any problems, failure or 
                                        technical malfunction of any telephone network or lines, computer online systems, servers or providers, computer equipment, software, failure of 
                                        email or players on account of technical problems or traffic congestion on the Internet or at any website or combination thereof, including injury or 
                                        damage to users or to any other person’s computer or device related to or resulting from participating or downloading materials in connection with the 
                                        Internet and/or in connection with the Service. To the maximum extent allowed by applicable law, the Company provides the Service on an <strong>“as is” </strong> and 
                                        <strong>“as available” </strong> basis and grants no warranties of any kind, whether express, implied, statutory or otherwise with respect to the Service (including all
                                        Content contained therein), including (without limitation) any implied warranties of satisfactory quality, merchantability, fitness for a particular 
                                        purpose or non-infringement. The Company does not represent or warrant that the Service will be uninterrupted or error free, secure or that any defects
                                        or errors in the Service will be corrected.
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        Any material downloaded or otherwise obtained through the use of the Service is accessed at your own discretion and risk, and you will be solely 
                                        responsible for and hereby waive any and all claims and causes of action with respect to any damage to your device, computer system, internet access,
                                        download or display device, or loss or corruption of data that results or may result from the download of any such material. If you do not accept this
                                        limitation of liability, you are not authorized to download or obtain any material through the Service.
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        From time to time, the Company may make third party opinions, advice, statements, offers, or other third party information or Content available through 
                                        the Service. All third party Content is the responsibility of the respective authors thereof and should not necessarily be relied upon. Such third party
                                        authors are solely responsible for such Content. The Company does not: (i) guarantee the accuracy, completeness, or usefulness of any third party 
                                        Content provided through the Service, or (ii) adopt, endorse or accept responsibility for the accuracy or reliability of any opinion, advice, or 
                                        statement made by any party that appears in the Service. Under no circumstances will the Company or its affiliates be responsible or liable for any 
                                        loss or damage resulting from your reliance on information or other Content posted in the Service, or transmitted to or by any users.
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        In addition to the preceding paragraph and other provisions of this Agreement, any advice that may be posted in the Service is for informational purposes 
                                        only and is not intended to replace or substitute for any professional financial, medical, legal, or other advice. The Company makes no representations or 
                                        warranties and expressly disclaims any and all liability concerning any treatment, action by, or effect on any person following the information offered or
                                        provided within or through the Service. If you have specific concerns or a situation arises in which you require professional advice, you should consult with
                                        an appropriately trained and qualified specialist.
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        You acknowledge that by using the Service, you may be exposed to materials that are offensive, indecent or objectionable. Under no circumstances will the 
                                        Company be liable in any way for any materials, including, but not limited to, for any errors or omissions in any materials or any defects or errors in any 
                                        printing or manufacturing, or for any loss or damage of any kind incurred as a result of the viewing or use of any materials posted, emailed, transmitted or 
                                        otherwise made available via the Service.
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        You agree that we are not responsible or liable for any loss or damage of any sort incurred as the result of any interaction or relationship between 
                                        you and any third party or other users of the Service. If there is a dispute between users of this Service or between users and any third party, you 
                                        understand and agree that JobStream is under no obligation to become involved. In the event that you have a dispute with one or more other users, you 
                                        hereby release us, our officers, employees, agents, and successors in rights from claims, demands, and damages (actual and consequential) of every kind 
                                        or nature, known or unknown, suspected or unsuspected, disclosed or undisclosed, arising from or in any way related to such disputes and our Service.
                                    </li>
                                </ol>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    <strong>Links. </strong>
                                    The Service may contain, and the Service or third parties may provide, advertisements and promotions offered by third parties and links to other web sites
                                    or resources. You acknowledge and agree that the Company is not responsible for the availability of such external websites or resources, and does not 
                                    endorse and is not responsible or liable for any Content, information, statements, advertising, goods or services, or other materials on or available from 
                                    such websites or resources. Your correspondence or business dealings with, or participation in promotions of, third parties, including organizations, 
                                    individuals or businesses, found in or through the Service, including payment and delivery of related goods or services, and any other terms, conditions, 
                                    warranties or representations associated with such dealings, are solely between you and such third party. You should make whatever investigation you feel 
                                    necessary or appropriate before proceeding with any online or offline transaction with any of these third parties. You further acknowledge and agree that 
                                    the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the
                                    use of, or reliance upon, any such content, information, statements, advertising, goods or services or other materials available on or through any such 
                                    website or resource.
                                </span>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    <strong>Additional Terms and Conditions for Users. </strong>
                                    To the extent the other terms and conditions of this Agreement are less restrictive than, or otherwise conflict with, the terms and conditions of this
                                    Section, the more restrictive or conflicting terms and conditions in this Section apply, but solely with respect to the use of  
                                    <span style={{backgroundColor:"yellow"}}> [Google Maps]</span> services and content, or to the Service if downloaded from the Apple App Store or the 
                                    Google Play Store. The Service may use services and content from <span style={{backgroundColor:"yellow"}}>[Google Maps or Google Earth]</span>. 
                                    You acknowledge and agree that you are bound by the <span style={{backgroundColor:"yellow"}}>[Google Maps/Google Earth Additional Terms of Service 
                                    (including the Google Privacy Policy)].</span>
                                    <br/>
                                    <p style={{backgroundColor:"yellow"}}>
                                        <strong>[NTD: Maridel - please confirm whether your Service will use Google Maps and/or Google Earth for location services]</strong>
                                    </p>
                                    <p>
                                        The following additional terms and conditions apply to you if you are using the Service via the mobile application (the <strong>“Service App”</strong>). 
                                        You acknowledge and agree that: 
                                    </p>
                                    <p>
                                        This Agreement is entered into between you and Company. Neither Apple, Inc. (<strong>“Apple”</strong>) nor Google, Inc. (<strong>“Google”</strong>) 
                                        (collectively, the <strong>“download service providers”</strong>) are parties to this Agreement nor will they have obligations with respect to the 
                                        Service App. Company, not Apple or Google, is solely responsible for the Service App, including any maintenance and support, and the content thereof 
                                        as set forth hereunder. However, the download service providers, along with their respective subsidiaries, are third-party beneficiaries of this 
                                        Agreement. Upon your acceptance of this Agreement, the download service provider used to obtain the Service App will have the right (and will be 
                                        deemed to have accepted the right) to enforce this Agreement against you as a third-party beneficiary. If Company fails to conform to any applicable 
                                        warranty, you may notify the download service provider used to obtain the Service App and they will refund the purchase price (if any) of the Service
                                         App in accordance with their policies, and, to the maximum extent permitted by applicable law, the download service provider used to obtain the Service
                                          App will have no other warranty obligation whatsoever with respect to the application and, as between the download service provider used to obtain 
                                          the Service App and Company, any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to confirm to any 
                                          warranty is Company’s responsibility. You and us both acknowledge that Company, not the download service provider used to obtain the Service App, 
                                          is responsible for addressing any end-user or third-party claims related to the Service App, including, but not limited to: (a) product liability 
                                          claims, (b) any claim that the Service App fails to conform to any applicable legal or regulatory requirement, and (c) claims arising under consumer 
                                          protection or similar law. Further, you and us both acknowledge that, in the event of any third-party claim that the Service App or your possession 
                                          or use of the Service App infringes on that third party’s intellectual property rights, as between Company and the download service provider used 
                                          to obtain the Service App, the Service App will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual 
                                          property infringement claim. <span style={{backgroundColor:"yellow"}}>[You represent and warrant that you are not located in a country that is subject 
                                          to a U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country, and you are not listed on any 
                                          U.S. Government list of prohibited or restricted parties.]</span>
                                    </p>
                                </span>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    <strong>Limitation on Liability. </strong>
                                    To the fullest extent allowed by applicable law, in no event will the Company, its affiliates, business partners, licensors or service providers be liable 
                                    to you or any third person for any indirect, reliance, consequential, exemplary, incidental, special or punitive damages, including, without limitation, 
                                    loss of profits, loss of goodwill, damages for loss, corruption or breaches of data or programs, service interruptions and procurement of substitute 
                                    services, even if the Company has been advised of the possibility of such damages. Notwithstanding anything to the contrary contained herein, the Company's 
                                    liability to you for any cause whatsoever, and regardless of the form of the action, will at all times be limited to the amount paid, if any, by you to the 
                                    Company for the Service while you have an account. You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out 
                                    of or related to use of the Service or the terms of this Agreement must be filed within one year after such claim or cause of action arose or be forever barred.
                                </span>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    <strong>Dispute resolution. </strong>
                                    The exclusive means of resolving any dispute or claim arising out of or relating to this Agreement (including any alleged breach thereof) or the Service 
                                    shall be governed by Alberta law and litigated by the competent Alberta Court. You may not under any circumstances commence or maintain against the Company 
                                    any class action, class litigation, or other representative action or proceeding.
                                </span>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    <strong>Indemnity by You. </strong>
                                </span>
                                <ol style={{marginBottom:'0cm', listStyleType:"lower-alpha"}}>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        You agree to indemnify and hold the Company, its subsidiaries, and affiliates, and its and their officers, agents, partners and employees, harmless 
                                        from any loss, liability, claim, or demand, expenses including but not limited to court costs, filing fees, attorney  fees, made by any third party 
                                        due to or arising out of your breach of or failure to comply with this Agreement (including any breach of your representations and warranties contained 
                                        herein), any postings or Content you post in the Service, and the violation of any law or regulation by you that JobStream may incur or suffer as a 
                                        result of your use of this JobStream website, the Service, and/or arising out of your breach of this Agreement.
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        The Company reserves the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event 
                                        you will fully cooperate with the Company in connection therewith.
                                    </li>
                                </ol>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    <strong>Notice. </strong>
                                    The Company may provide you with notices, including those regarding changes to this Agreement, using any reasonable means now known or hereafter developed, 
                                    including by email, regular mail, SMS, MMS, text message or postings in the Service. Such notices may not be received if you violate this Agreement by accessing the 
                                    Service in an unauthorized manner. You agree that you are deemed to have received any and all notices that would have been delivered had you accessed the Service in an 
                                    authorized manner.
                                </span>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    <strong>Waiver. </strong>
                                    No waiver under this agreement is effective unless it is in writing and signed by an authorized representative of the party waiving its right. No failure 
                                    to exercise, or delay in exercising, any right, remedy, power or privilege arising from this Agreement operates, or may be construed, as a waiver thereof. 
                                    No single or partial exercise of any right, remedy, power or privilege hereunder precludes any other or further exercise thereof or the exercise of any
                                    other right, remedy, power or privilege.
                                </span>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    <strong>Severability. </strong>
                                    If any term or provision of this Agreement is invalid, illegal or unenforceable in any jurisdiction, such invalidity, illegality or unenforceability shall 
                                    not affect any other term or provision of this Agreement or invalidate or render unenforceable such term or provision in any other jurisdiction.
                                </span>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    <strong>Amendment. </strong>
                                    This Agreement is subject to change by the Company at any time.
                                </span>
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                <span style={{color:"windowtext"}}>
                                    <strong>Reporting and Contact. </strong>
                                    This Service is operated by JobStream App Corporation. 
                                </span>
                                <ol style={{marginBottom:"0cm", listStyleType:"lower-alpha"}}>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        Should you become aware of misuse of the Services including libelous or defamatory conduct, you must report it to the Company at the email address listed below; 
                                        and
                                    </li>
                                    <br/>
                                    <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                        all other feedback, comments, requests for technical support and other communications relating to the Services should be directed to 
                                       connect@jobstreamapp.com.
                                    </li>
                                </ol>
                            </li>
                            

                        </ol>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
                <FootContainer/>
            </Layout>
         );
    }
}
 
export default Terms;