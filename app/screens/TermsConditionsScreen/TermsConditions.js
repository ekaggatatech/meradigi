import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import MainFooter from '../../common/footer/MainFooter';
import Footer from '../../common/footer/Footer';

const TermsConditions = () => {

    const [status, setStatus] = useState(false);

    const [statusOne, setStatusOne] = useState(false);

    const [statusTwo, setStatusTwo] = useState(false);

    const [statusThree, setStatusThree] = useState(false);

    const [statusFour, setStatusFour] = useState(false);

    const [statusFive, setStatusFive] = useState(false);

    const [statusSix, setStatusSix] = useState(false);

    const [statusSeven, setStatusSeven] = useState(false);

    const Plus = require("../../assets/Terms&Conditions/plus.png");
    const Dash = require("../../assets/Terms&Conditions/minus.png");

    const [imageAsset, setImageAsset] = useState(Plus);

    const [imageAssetOne, setImageAssetOne] = useState(Plus);

    const [imageAssetTwo, setImageAssetTwo] = useState(Plus);

    const [imageAssetThree, setImageAssetThree] = useState(Plus);

    const [imageAssetFour, setImageAssetFour] = useState(Plus);

    const [imageAssetFive, setImageAssetFive] = useState(Plus);

    const [imageAssetSix, setImageAssetSix] = useState(Plus);

    const [imageAssetSeven, setImageAssetSeven] = useState(Plus);

    const [styling, setStyling] = useState(false);

    const [stylingOne, setStylingOne] = useState(false);

    const [stylingTwo, setStylingTwo] = useState(false);

    const [stylingThree, setStylingThree] = useState(false);

    const [stylingFour, setStylingFour] = useState(false);

    const [stylingFive, setStylingFive] = useState(false);

    const [stylingSix, setStylingSix] = useState(false);

    const [stylingSeven, setStylingSeven] = useState(false);

    function ShowHideTextComponentView()
    {
        if(status == true)
        {
            setStatus(false);
            setStatusOne(false);
            setStatusTwo(false);
            setStatusThree(false);
            setStatusFour(false);
            setStatusFive(false);
            setStatusSix(false);
            setStatusSeven(false);

            setImageAsset(Plus);
            setImageAssetOne(Plus);
            setImageAssetTwo(Plus);
            setImageAssetThree(Plus);
            setImageAssetFour(Plus);
            setImageAssetFive(Plus);
            setImageAssetSix(Plus);
            setImageAssetSeven(Plus);

            setStyling(false);
            setStylingOne(false);
            setStylingTwo(false);
            setStylingThree(false);
            setStylingFour(false);
            setStylingFive(false);
            setStylingSix(false);
            setStylingSeven(false);
        }
        else
        {
            setStatus(true);
            setStatusOne(false);
            setStatusTwo(false);
            setStatusThree(false);
            setStatusFour(false);
            setStatusFive(false);
            setStatusSix(false);
            setStatusSeven(false);

            setImageAsset(Dash);
            setImageAssetOne(Plus);
            setImageAssetTwo(Plus);
            setImageAssetThree(Plus);
            setImageAssetFour(Plus);
            setImageAssetFive(Plus);
            setImageAssetSix(Plus);
            setImageAssetSeven(Plus);

            setStyling(true);
            setStylingOne(false);
            setStylingTwo(false);
            setStylingThree(false);
            setStylingFour(false);
            setStylingFive(false);
            setStylingSix(false);
            setStylingSeven(false);
        }
    }

    function ShowHideTextComponentViewOne()
    {
        if(statusOne == true)
        {
            setStatus(false);
            setStatusOne(false);
            setStatusTwo(false);
            setStatusThree(false);
            setStatusFour(false);
            setStatusFive(false);
            setStatusSix(false);
            setStatusSeven(false);

            setImageAsset(Plus);
            setImageAssetOne(Plus);
            setImageAssetTwo(Plus);
            setImageAssetThree(Plus);
            setImageAssetFour(Plus);
            setImageAssetFive(Plus);
            setImageAssetSix(Plus);
            setImageAssetSeven(Plus);

            setStylingOne(false);
            setStyling(false);
            setStylingTwo(false);
            setStylingThree(false);
            setStylingFour(false);
            setStylingFive(false);
            setStylingSix(false);
            setStylingSeven(false);
        }
        else
        {
            setStatusOne(true);
            setStatus(false);
            setStatusTwo(false);
            setStatusThree(false);
            setStatusFour(false);
            setStatusFive(false);
            setStatusSix(false);
            setStatusSeven(false);

            setImageAssetOne(Dash);
            setImageAsset(Plus);
            setImageAssetTwo(Plus);
            setImageAssetThree(Plus);
            setImageAssetFour(Plus);
            setImageAssetFive(Plus);
            setImageAssetSix(Plus);
            setImageAssetSeven(Plus);

            setStylingOne(true);
            setStyling(false);
            setStylingTwo(false);
            setStylingThree(false);
            setStylingFour(false);
            setStylingFive(false);
            setStylingSix(false);
            setStylingSeven(false);
        }
    }

    function ShowHideTextComponentViewTwo()
    {
        if(statusTwo == true)
        {
            setStatus(false);
            setStatusOne(false);
            setStatusTwo(false);
            setStatusThree(false);
            setStatusFour(false);
            setStatusFive(false);
            setStatusSix(false);
            setStatusSeven(false);

            setImageAsset(Plus);
            setImageAssetOne(Plus);
            setImageAssetTwo(Plus);
            setImageAssetThree(Plus);
            setImageAssetFour(Plus);
            setImageAssetFive(Plus);
            setImageAssetSix(Plus);
            setImageAssetSeven(Plus);

            setStylingTwo(false);
            setStyling(false);
            setStylingOne(false);
            setStylingThree(false);
            setStylingFour(false);
            setStylingFive(false);
            setStylingSix(false);
            setStylingSeven(false);
        }
        else
        {
            setStatusTwo(true);
            setStatus(false);
            setStatusOne(false);
            setStatusThree(false);
            setStatusFour(false);
            setStatusFive(false);
            setStatusSix(false);
            setStatusSeven(false);

            setImageAssetTwo(Dash);
            setImageAsset(Plus);
            setImageAssetOne(Plus);
            setImageAssetThree(Plus);
            setImageAssetFour(Plus);
            setImageAssetFive(Plus);
            setImageAssetSix(Plus);
            setImageAssetSeven(Plus);

            setStylingTwo(true);
            setStyling(false);
            setStylingOne(false);
            setStylingThree(false);
            setStylingFour(false);
            setStylingFive(false);
            setStylingSix(false);
            setStylingSeven(false);
        }
    }

    function ShowHideTextComponentViewThree()
    {
        if(statusThree == true)
        {
            setStatus(false);
            setStatusOne(false);
            setStatusTwo(false);
            setStatusThree(false);
            setStatusFour(false);
            setStatusFive(false);
            setStatusSix(false);
            setStatusSeven(false);

            setImageAsset(Plus);
            setImageAssetOne(Plus);
            setImageAssetTwo(Plus);
            setImageAssetThree(Plus);
            setImageAssetFour(Plus);
            setImageAssetFive(Plus);
            setImageAssetSix(Plus);
            setImageAssetSeven(Plus);
            
            setStylingThree(false);
            setStyling(false);
            setStylingOne(false);
            setStylingTwo(false);
            setStylingFour(false);
            setStylingFive(false);
            setStylingSix(false);
            setStylingSeven(false);
        }
        else
        {
            setStatusThree(true);
            setStatus(false);
            setStatusOne(false);
            setStatusTwo(false);
            setStatusFour(false);
            setStatusFive(false);
            setStatusSix(false);
            setStatusSeven(false);

            setImageAssetThree(Dash);
            setImageAsset(Plus);
            setImageAssetOne(Plus);
            setImageAssetTwo(Plus);
            setImageAssetFour(Plus);
            setImageAssetFive(Plus);
            setImageAssetSix(Plus);
            setImageAssetSeven(Plus);

            setStylingThree(true);
            setStyling(false);
            setStylingOne(false);
            setStylingTwo(false);
            setStylingFour(false);
            setStylingFive(false);
            setStylingSix(false);
            setStylingSeven(false);
        }
    }

    function ShowHideTextComponentViewFour()
    {
        if(statusFour == true)
        {
            setStatus(false);
            setStatusOne(false);
            setStatusTwo(false);
            setStatusThree(false);
            setStatusFour(false);
            setStatusFive(false);
            setStatusSix(false);
            setStatusSeven(false);

            setImageAsset(Plus);
            setImageAssetOne(Plus);
            setImageAssetTwo(Plus);
            setImageAssetThree(Plus);
            setImageAssetFour(Plus);
            setImageAssetFive(Plus);
            setImageAssetSix(Plus);
            setImageAssetSeven(Plus);

            setStylingFour(false);
            setStyling(false);
            setStylingOne(false);
            setStylingTwo(false);
            setStylingThree(false);
            setStylingFive(false);
            setStylingSix(false);
            setStylingSeven(false);
        }
        else
        {
            setStatusFour(true);
            setStatus(false);
            setStatusOne(false);
            setStatusTwo(false);
            setStatusThree(false);
            setStatusFive(false);
            setStatusSix(false);
            setStatusSeven(false);

            setImageAssetFour(Dash);
            setImageAsset(Plus);
            setImageAssetOne(Plus);
            setImageAssetTwo(Plus);
            setImageAssetThree(Plus);
            setImageAssetFive(Plus);
            setImageAssetSix(Plus);
            setImageAssetSeven(Plus);

            setStylingFour(true);
            setStyling(false);
            setStylingOne(false);
            setStylingTwo(false);
            setStylingThree(false);
            setStylingFive(false);
            setStylingSix(false);
            setStylingSeven(false);
        }
    }

    function ShowHideTextComponentViewFive()
    {
        if(statusFive == true)
        {
            setStatus(false);
            setStatusOne(false);
            setStatusTwo(false);
            setStatusThree(false);
            setStatusFour(false);
            setStatusFive(false);
            setStatusSix(false);
            setStatusSeven(false);

            setImageAsset(Plus);
            setImageAssetOne(Plus);
            setImageAssetTwo(Plus);
            setImageAssetThree(Plus);
            setImageAssetFour(Plus);
            setImageAssetFive(Plus);
            setImageAssetSix(Plus);
            setImageAssetSeven(Plus);

            setStylingFive(false);
            setStyling(false);
            setStylingOne(false);
            setStylingTwo(false);
            setStylingThree(false);
            setStylingFour(false);
            setStylingSix(false);
            setStylingSeven(false);
        }
        else
        {
            setStatusFive(true);
            setStatus(false);
            setStatusOne(false);
            setStatusTwo(false);
            setStatusThree(false);
            setStatusFour(false);
            setStatusSix(false);
            setStatusSeven(false);

            setImageAssetFive(Dash);
            setImageAsset(Plus);
            setImageAssetOne(Plus);
            setImageAssetTwo(Plus);
            setImageAssetThree(Plus);
            setImageAssetFour(Plus);
            setImageAssetSix(Plus);
            setImageAssetSeven(Plus);

            setStylingFive(true);
            setStyling(false);
            setStylingOne(false);
            setStylingTwo(false);
            setStylingThree(false);
            setStylingFour(false);
            setStylingSix(false);
            setStylingSeven(false);
        }
    }

    function ShowHideTextComponentViewSix()
    {
        if(statusSix == true)
        {
            setStatus(false);
            setStatusOne(false);
            setStatusTwo(false);
            setStatusThree(false);
            setStatusFour(false);
            setStatusFive(false);
            setStatusSix(false);
            setStatusSeven(false);

            setImageAsset(Plus);
            setImageAssetOne(Plus);
            setImageAssetTwo(Plus);
            setImageAssetThree(Plus);
            setImageAssetFour(Plus);
            setImageAssetFive(Plus);
            setImageAssetSix(Plus);
            setImageAssetSeven(Plus);

            setStylingSix(false);
            setStyling(false);
            setStylingOne(false);
            setStylingTwo(false);
            setStylingThree(false);
            setStylingFour(false);
            setStylingFive(false);
            setStylingSeven(false);
        }
        else
        {
            setStatusSix(true);
            setStatus(false);
            setStatusOne(false);
            setStatusTwo(false);
            setStatusThree(false);
            setStatusFour(false);
            setStatusFive(false);
            setStatusSeven(false);

            setImageAssetSix(Dash);
            setImageAsset(Plus);
            setImageAssetOne(Plus);
            setImageAssetTwo(Plus);
            setImageAssetThree(Plus);
            setImageAssetFour(Plus);
            setImageAssetFive(Plus);
            setImageAssetSeven(Plus);

            setStylingSix(true);
            setStyling(false);
            setStylingOne(false);
            setStylingTwo(false);
            setStylingThree(false);
            setStylingFour(false);
            setStylingFive(false);
            setStylingSeven(false);
        }
    }
    
    function ShowHideTextComponentViewSeven()
    {
        if(statusSeven == true)
        {
            setStatus(false);
            setStatusOne(false);
            setStatusTwo(false);
            setStatusThree(false);
            setStatusFour(false);
            setStatusFive(false);
            setStatusSix(false);
            setStatusSeven(false);

            setImageAsset(Plus);
            setImageAssetOne(Plus);
            setImageAssetTwo(Plus);
            setImageAssetThree(Plus);
            setImageAssetFour(Plus);
            setImageAssetFive(Plus);
            setImageAssetSix(Plus);
            setImageAssetSeven(Plus);

            setStylingSeven(false);
            setStyling(false);
            setStylingOne(false);
            setStylingTwo(false);
            setStylingThree(false);
            setStylingFour(false);
            setStylingFive(false);
            setStylingSix(false);
        }
        else
        {
            setStatusSeven(true);
            setStatus(false);
            setStatusOne(false);
            setStatusTwo(false);
            setStatusThree(false);
            setStatusFour(false);
            setStatusFive(false);
            setStatusSix(false);

            setImageAssetSeven(Dash);
            setImageAsset(Plus);
            setImageAssetOne(Plus);
            setImageAssetTwo(Plus);
            setImageAssetThree(Plus);
            setImageAssetFour(Plus);
            setImageAssetFive(Plus);
            setImageAssetSix(Plus);

            setStylingSeven(true);
            setStyling(false);
            setStylingOne(false);
            setStylingTwo(false);
            setStylingThree(false);
            setStylingFour(false);
            setStylingFive(false);
            setStylingSix(false);
        }
    }

    return (
        <>
            <ScrollView nestedScrollEnabled={true}>
            <SafeAreaView>
                <View style={styles.viewOne}>
                    <ImageBackground
                        source={require("../../assets/Terms&Conditions/TermsConditionsBgImg.jpg")}
                        alt="Terms & Condition's" 
                        title="Terms & Condition's" 
                        style={styles.privacyPolicyImg}>
                            <Text style={styles.privacyPolicyText}>
                                Terms & Condition's
                            </Text>
                    </ImageBackground>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={[styles.marginTopOne,styles.marginBottomOne]}>
                        <Text style={styles.newTitleFontThree}>Project Terms</Text>
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 All estimates and rates are dependent on how well we comprehend your needs and the allotted time frame. Any functional modifications, including small upgrades, could result in extra charges. Please meet with us in person to confirm and explain our understanding.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 You agree to and accept Meradigi Pvt Ltd’s terms and conditions by accepting a quote. Verbal, email, initiating payment, and signing a quote are all acceptable forms of acceptance.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Customers should confirm that we properly grasp their requirements and that we have accounted for all of them in the quotations, proposals, and estimates. Clients are required to give us explicit instructions as well as the flow or other specifics they may need. When such information is lacking, we proceed with our understanding of the needs and provide an appropriate price. If a mismatch occurs later, it can result in extra expenses to make the necessary adjustments. Therefore, it is imperative that you make sure that you have been quoted on the correct criteria and that you have made clear every part of your website development.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 For costing purposes, any complexity relating to certain tasks must be disclosed upfront and included in the proposal. We work in good faith and rely on our clients to be completely honest when receiving quotes. Meradigi shall not be responsible for any disparity brought on by imprecise requirements.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Each duty, including project management and digital strategist/business analyst, has a set number of man-hours allotted to it. Minor adjustments may be made throughout the allotted time. A case-by-case analysis of this will be done.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Meradigi will work hard to finish the project/changes by the deadline. If functionalities are redefined or changed, reasonable delays are accepted.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Any delays on the part of the client could cause the project to go behind schedule and beyond budget.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 There are no additional fees for defects (programming faults) found during or just after development.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Rework on a task that has already been finished will result in extra fees. Following design approval, any changes to the design will result in additional fees.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Additional fees will apply to any adjustments made during development or after the go-live clearance. All extra work that goes beyond the estimates is billed separately. Meradigi will never be held responsible for delays brought on by changes to the project brief.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 We must receive all website/application content and supporting assets from you within the first two weeks of the project’s launch. Any extra delays could cause the project to be delayed and cost more money if they take longer than expected.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Our websites and applications are typically tested on PCs using recent builds of the IE, Firefox, Chrome, and Safari browsers. Please notify us in advance if you need testing to be done on any other browsers.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Web sites that are responsive and multi-device compliant are evaluated on iPhones and iPads. Please let us know in advance if you need testing to be other devices, please let us know in advance if you need testing to be other devices, if you need testing to`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022  Any additional man-hours that might be needed because of any server- or network-related issues are not included in our rates and may be charged separately if your website or application is not hosted on a Meradigi server.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Please be aware that stalling the project for longer than two calendar months will result in additional costs per week at any point in the project. Additionally, it can raise the previously authorised projections. If you need the project placed on hold, do let us know in writing ahead of time. We will need the account to be current based on the work done in order to put the project on hold without incurring additional fees. If such a circumstance occurs, further information can be discussed.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Software codes created by Meradigi (excluding open source software) are protected by copyrights. Once all prior invoices have been paid in full, the codes can be given to the designated client or subsequent owners of that legal organisation for an additional fee, with the stipulation that they are only utilised or modified for re-use in further development. The codes may not be used for copying or reselling purposes under any circumstances.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Meradigi Worldwide’s Meradigi CMS is a proprietary CMS. Unless other arrangements are established before the project begins, Meradigi holds the copyrights to all codes created for any client. Any software that has been specifically created for a client by Meradigi is guaranteed to be used by them only. This licence is given in exchange for payment for hosting. There is no way to move Meradigi CMS to an external host, not even access to the source code.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 A commercial-grade web server or a comparable arrangement will be used to deploy the website or software application on the internet. Depending on the volume of traffic to your website, a basic office network environment may not be able to support the website.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Building a website or application may involve using third-party components like SSL certificates or third-party payment gateways, depending on the functionalities needed. Even while Meradigi Worldwide tries its best to determine the compatibility of each such component, we have no control over any unanticipated limits of third-party components. Our rates do not include the cost of purchasing any third-party components (such as SSL, a payment gateway, Google Adwords, plug-in licences, etc.).`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Any open source software, including Joomla, Open Source carts, and WordPress, is not under the control of Meradigi. The updating of all components and third-party software is the client’s duty. To prevent any inconveniences, we advise you to make regular backups.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Packages are available from Meradigi in coordination with outside suppliers. The services we offer or the terms and conditions here of may ultimately be affected by changes to the third party provider’s regulations and policies.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 The customer must be aware that occasionally there can be unforeseen events that would cause the development process to be delayed, especially when it comes to the integration of third party software. We’ll do everything we can to finish the project as specified in the proposal. The client agrees not to hold us accountable for any legitimate delays as long as they occur within a reasonable time frame and every attempt has been made to keep the project on track.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Unless otherwise stated, any project or proposal does not include costs associated with domain registration, renewal, etc. If required, a quote for which will be submitted separately and approved by the client.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Unless otherwise specified, hosting fees are not included in the prices. If necessary, Meradigi can arrange a suitable hosting solution; a quote will be provided separately and approved by the client. When clients choose to arrange their own hosting, they should contact us first to discuss the best hosting and database options since they must adhere to the specifications of the technology being used for development. Please be aware that in order to test and instal the application, we will need complete access with hosting support. Inaccuracies or delays brought on by the hosting company’s direct or indirect activities are not the responsibility of Meradigi`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Meradigi often uses its own servers or hosted domains to develop and test the websites and applications. The clients or any other third parties are not permitted access to Meradig’s test servers or test websites. Upon full payment of all fees and dues, the website/application may be moved to a designated third-party server.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Despite any other clauses in the contract, in exchange for the customer entering into this agreement with Meradigi, Meradigi will unconditionally grant the customer a licence to reproduce, publish, communicate, use, exploit, vary, or otherwise deal with 1) the graphics, 2) the texts, and 3) the images used in the published website and associated of form and functionality. This licence is given regardless of any other clause in the contract. The intellectual property used in the creation of the website, such as the digital tactics, coding, database structures, scripts, forms, or features, will not be covered by this.`}
                    </Text>
                    <Text style={styles.bulletListOne}>
                        {`\u2022 Email is typically used for all interactions and conversations. It is the client’s duty to keep us informed of any relevant email addresses.`}
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <TouchableOpacity onPress={ShowHideTextComponentView}>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Image 
                                source={imageAsset}
                                alt="Add" 
                                title="Add"
                                style={{ width: 25, height: 25 }}
                            >
                            </Image>
                            <Text style={styling ? styles.contentTextTwo : styles.contentTextOne}>
                                Digital Marketing/Strategy Terms
                            </Text>
                        </View>
                    </TouchableOpacity>
                    { 
                        status && 
                        <>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Package Terms : 
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Every digital marketing/strategy package has a minimum duration of 6 months. 
                                    {"\n"}After that, cancel whenever you want with a clear one-month email notice.
                                    {"\n"}They are billed on a monthly basis and are due on the first of the month.
                                    {"\n"}Packages are created with our clients’ needs for digital marketing and strategy in mind. 
                                    {"\n"}Each month, a certain number of man hours are allotted, and any unused man hours are not carried over to the following month. 
                                    {"\n"}Both marketing costs and software from third parties are not covered.
                                    {"\n"}Meradigi follows a fair usage philosophy, which means that although though we don’t formally accrue unused man-hours or transfer any unused time over to the following month, we do recognise that your needs could change from month to month and occasionally offer flexibility in good faith.
                                    {"\n"}Any additional hours worked can be charged individually. Urgent tasks will incur an additional fee.
                                    {"\n"}To contact support, send an email to support@meradigi.com.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Payment terms:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Each month’s payment is due on the first. 
                                    {"\n"}We firmly advise all of our clients to set up a direct debit for the same.
                                    {"\n"}Any late payments or credit card charges that are rejected will result in a $25 administrative fee being applied to the client’s account.
                                    {"\n"}All fees associated with the digital marketing/strategy package are non-refundable.
                                    {"\n"}Termination:
                                    {"\n"}Every digital marketing/strategy package has a minimum duration of 6 months. After that, cancel whenever you want with a clear one-month email notice.
                                    {"\n"}Meradigi retains the right to end the agreement at any time by giving the client written notice.
                                </Text>
                            </View>
                        </> 
                    }
                    <TouchableOpacity onPress={ShowHideTextComponentViewOne}>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Image 
                                source={imageAssetOne}
                                alt="Add" 
                                title="Add"
                                style={{ width: 25, height: 25 }}>
                            </Image>
                            <Text style={stylingOne ? styles.contentTextTwo : styles.contentTextOne}>
                                Annual Maintenance Terms
                            </Text>
                        </View>
                    </TouchableOpacity>
                    { 
                        statusOne && 
                        <>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.newAddContent}>
                                    Basic Annual Maintenance Package Terms:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Every maintenance package has a minimum duration of 12 months.
                                    {"\n"}Although maintenance packages are billed annually, they are paid for on the first of each month by direct debit.
                                    {"\n"}Packages may include basic website hosting, email hosting, and DNS hosting for a period of one year.
                                    {"\n"}Packages are solely meant to be used for website maintenance chores. 
                                    {"\n"}The hours cannot be used for tasks like a complete redesign or significant functionality additions.
                                    {"\n"}excludes any work related to digital strategy, business analysis, solution architecture, SEO, and marketing.
                                    {"\n"}Blocks of 15 minutes are used to track work hours. 
                                    {"\n"}Your website is fully backed up once a month during support time. 
                                    {"\n"}Following that, we update your CMS and plugin versions and make any necessary website adjustments as a result of the updates. 
                                    {"\n"}You can update the webpage throughout the remaining time. Please approve any additional work hours that are requested.
                                    {"\n"}Meradigi follows a fair usage philosophy, which means that although though we don’t formally accrue unused man-hours or transfer any unused time over to the following month, we do recognise that your needs could change from month to month and occasionally offer flexibility in good faith.
                                    {"\n"}Any additional hours used will be charged at a separate rate.
                                    {"\n"}To contact support, send an email to support@Meradigi.com.
                                    {"\n"}Urgent tasks will incur an additional fee.
                                    {"\n"}Each year on the day of its anniversary, the package is automatically renewed.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.newAddContent}>
                                    Payment terms:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Monthly maintenance package payments can only be paid with a credit card. 
                                    {"\n"}For monthly maintenance, no further payments will be accepted.
                                    {"\n"}The first day of each month, the monthly maintenance package payments will be charged to the client’s credit card on file.
                                    {"\n"}Any late payments or credit card charges that are rejected will result in an INR 300 administrative fee being applied to the client’s account.
                                    {"\n"}If there are more than three missing payments in a calendar year, the package may be terminated, and the client will be required to pay the entire balance of the package right away.
                                    {"\n"}All fees associated with the monthly maintenance package are non-refundable.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.newAddContent}>
                                    Termination:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    If the client needs to stop the automatic annual renewal, they must email us at least one month before the renewal date to let us know.
                                    {"\n"}Continuous term: If the Client decides to cancel an ongoing maintenance package for any reason, they will be responsible for paying the remaining balance.
                                    {"\n"}With written notification to the Client, Meradigi reserves the right to revoke annual maintenance at any moment.
                                </Text>
                            </View>
                        </> 
                    }
                    <TouchableOpacity onPress={ShowHideTextComponentViewTwo}>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Image 
                                source={imageAssetTwo}
                                alt="Add" 
                                title="Add"
                                style={{ width: 25, height: 25 }}>
                            </Image>
                            <Text style={stylingTwo ? styles.contentTextTwo : styles.contentTextOne}>
                                General Approach
                            </Text>
                        </View>
                    </TouchableOpacity>
                    { 
                        statusTwo && 
                        <>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.newAddContent}>
                                    The following steps are used for general website design & development projects:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    • The project’s commencement payment is processed after the quote has been approved or accepted. We may arrange a scoping workshop if needed by the project to go over the specifications in greater depth.
                                    {"\n"}• Within 5 to 10 working days after receiving the brand information, such as the logo, photos, and branding materials, we will have a mock-up for your evaluation.
                                    {"\n"}• You can evaluate the design and make appropriate improvement suggestions. Generally speaking, up to 3 to 5 design revisions can be made within the provided estimates, depending on your project. For more information, please refer to your allotted design and development hours.
                                    {"\n"}• After the design is complete and accepted, we’ll start working on the HTML. At this point, the rotation of 3 to 5 banner texts and/or images is usually required.
                                    {"\n"}• After HTML is complete, if a content management system (CMS) is part of your project, we’ll set up your website on that CMS (CMS). Before the development phase, kindly give all material and copy.
                                    {"\n"}• As much content as we can from the old website to the new website will be transferred, depending on the time and resources allotted to your project. Your designated personnel can transfer the remaining content using the CMS. We can give you the guidance you need to do this.
                                    {"\n"}• When the site is complete on our end, we typically turn it over to you for additional inspection, testing, and/or to upload and modify the contents as needed.
                                    {"\n"}• At this point, you must provide us with a Go-Live date so that we can launch the new website or project.
                                    {"\n"}• If the accounts are clear, your website can go live within 3 to 5 working days of receiving a go-live approval. Please be aware that we must get full payment before moving the website to any external servers.
                                    {"\n"}Please be aware that the project has a restricted number of man hours assigned. The estimates for all websites priced under INR 100,000 are predicated on the idea that projects will take eight to twelve working weeks to finish, depending on their size. Any more delays could raise the price of project management. Please let us know before we begin the job if you don’t think it can be finished in this amount of time.
                                    {"\n"}• Additionally, moving back and forth often consumes a lot of time. To ensure that the project team’s time is used effectively on your project and that you do not suffer any needless additional charges, we invite you to give all pertinent information at the outset of the project.
                                    {"\n"}• Depending on the needs of the project, you may receive updates via phone calls or emails. However, if you need to know the progress of a project, don’t hesitate to get in touch with us. Additionally, kindly keep us informed of any pertinent email addresses or other contact information.
                                    {"\n"}• It is the client’s responsibility to regularly perform full backups of the website or application once it has been published on their domain. They are also responsible for updating all hardware and third-party software.
                                    {"\n"}We pride ourselves on being incredibly adaptive and versatile, and we tackle every request with a “can do” mentality. You are welcome to talk to us if you need something altered. If you have any queries or would like more information, please get in touch with us. We are eager to collaborate with you on your project!
                                </Text>
                            </View>
                        </> 
                    }
                    <TouchableOpacity onPress={ShowHideTextComponentViewThree}>
                        <View style={{ flexDirection: 'row', marginBottom: 10  }}>
                            <Image 
                                source={imageAssetThree}
                                alt="Add" 
                                title="Add"
                                style={{ width: 25, height: 25 }}>
                            </Image>
                            <Text style={stylingThree ? styles.contentTextTwo : styles.contentTextOne}>
                                Payments & Refunds
                            </Text>
                        </View>
                    </TouchableOpacity>
                    { 
                        statusThree && 
                        <>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.newAddContent}>
                                    Unless otherwise stated, all prices are given in Indian Rupees and include GST.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    • All invoices must be paid using your preferred method of payment in accordance with the schedule.
                                    {"\n"}• Unless mutually agreed upon differently, milestone payments must be made within 5 working days of each milestone or schedule. Prior to the launch of the website, application, or project, the final payment must be made.
                                    {"\n"}• Acceptance of the quote, milestone, delivery, project, and terms & conditions is presumed upon receipt of payment.
                                    {"\n"}• Meradigi Worldwide retains the right to bargain and refund any portion of the client payment made for the requested service. We will return 75% of your payment if you decide to cancel your purchase after completing the payment but before the work has started. If an order is cancelled after work has begun, a maximum refund or fee of 50% of the invoice will apply. If a cancellation is made after more than 50% of the work has been completed, there will be no return or changes. Any cancellations must be made in writing and transmitted by fax, email, or conventional mail. Cancellation requests made by phone will not be honoured.
                                    {"\n"}Payments for small or one-time projects must be made either in advance or in accordance with the parameters outlined in the invoice or proposal. Within two working days of receiving the terms, you must notify us in writing (emails allowed) of any changes you desire.
                                    {"\n"}Late fees and charges: From the due date forward, any unpaid invoices will be subject to an administration fee of INR 300 per month and a late payment cost of 10% of the unpaid balance.
                                    {"\n"}Due Date: Is the payment due date in accordance with the terms of the invoice or proposal?
                                    {"\n"}Outstanding Invoice: A bill is considered unpaid if the payment is still owed 14 days after the due date has passed.
                                    {"\n"}Debt Collection: The client has an additional 7 days to settle the invoice after the late payment fee is assessed. A debt collector will be contacted if the outstanding balance is not paid. Any expenses or fees related to the recovery of the overdue sum are not the responsibility of Meradigi Worldwide. Debt collectors, administrative fees, and legal fees, as well as any other costs related to recovering the unpaid balance, will be forwarded to the client for processing.
                                    {"\n"}• As soon as you receive the invoice or email reminder, please get in touch with the accounts manager if you are having trouble making a payment or if you have any questions about the invoice.
                                    {"\n"}• Email is typically used for all correspondence and exchanges. It is the client’s duty to keep us informed of any relevant email addresses.
                                    {"\n"}• All payments made in connection with the client’s domain name registration renewal, hosting, or other purchases made from third parties must be made in full and are not refundable. All cancellations of renewals must be sent to us at least 30 days prior to the renewal date.
                                    {"\n"}Typically, Meradigi Worldwide uses its own servers or hosted domains to develop and test the websites and applications. Upon full payment of all invoices and dues, the website/application will be moved to the designated 3rd party server.
                                </Text>
                            </View>
                        </> 
                    }
                    <TouchableOpacity onPress={ShowHideTextComponentViewFour}>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Image 
                                source={imageAssetFour}
                                alt="Add" 
                                title="Add"
                                style={{ width: 25, height: 25 }}>
                            </Image>
                            <Text style={stylingFour ? styles.contentTextTwo : styles.contentTextOne}>
                                Disputes, Liability and Indemnity
                            </Text>
                        </View>
                    </TouchableOpacity>
                    { 
                        statusFour && 
                        <>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Meradigi maintains the right to bill the customer in full for the services completed as well as the resources used to manage the issue in the event of a dispute. Meradigi reserves the right to charge the customer in this situation without applying any discounts that had previously been applied in good faith. Meradigi will never be held responsible for losses brought on by misrepresentation or incorrect information.
                                    {"\n"}If a client does not adhere to our operating principles and policies for conducting business, Meradigi maintains the right to refuse service to that client.
                                    {"\n"}Meradigi offers its services “as is,” with no assurances on security or other problems that can result in the loss of data, money, or goodwill. We do our best to keep our systems and servers safe from hackers, viruses, intrusions, and other online and offline issues, but we cannot be held responsible if services are interrupted for any reason.
                                    {"\n"}Meradigi Worldwide has autonomous relationships with all of its partners, suppliers, and subcontractors. None of the parties has the ability, right, or authority to bind the other, interfere with them, or assume or create any express or implicit duty or responsibility on their behalf or in their names.
                                    {"\n"}Client agrees to defend and indemnify Meradigi, its licensors, content providers, service providers, employees, agents, officers, directors, contractors, and subcontractors (collectively, the “Indemnified Parties”) from any claims that you have violated any of the terms and conditions, policies, or procedures contained herein, including, without limitation, any use of content that is not expressly permitted by these terms and conditions. Client acknowledges that the indemnified parties shall not be liable for any such breach or unauthorized use, and you agree to defend, indemnify, and hold the Indemnified Parties harmless from and against any and all loss, damages, judgements, awards, costs, expenses, and attorneys’ fees related thereto. Additionally, you agree to defend and indemnify the Indemnified Parties against any liability claims made by third parties resulting from your use of the information obtained from Meradigi.
                                    {"\n"}Meradigi won’t be held responsible for any agreement violations brought on by events outside of its reasonable control, such as acts of God, fire, lightning, explosions, war, civil unrest, floods, earthquakes, labour disputes (whether or not involving their employees), extremely bad weather, or actions by the local, state, or federal governments or other competent authorities.
                                </Text>
                            </View>
                        </> 
                    }
                    <TouchableOpacity onPress={ShowHideTextComponentViewFive}>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Image 
                                source={imageAssetFive}
                                alt="Add" 
                                title="Add"
                                style={{ width: 25, height: 25 }}>
                            </Image>
                            <Text style={stylingFive ? styles.contentTextTwo : styles.contentTextOne}>
                                Hosting
                            </Text>
                        </View>
                    </TouchableOpacity>
                    { 
                        statusFive && 
                        <>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Hosting is a yearly fee that needs to be paid in full up front. Unless the customer is covered by one of our Maintenance packages.
                                    {"\n"}The client is in charge of renewing the hosting on time, or before the expiration date. Files, data, emails, backups, etc. may be lost if a renewal is not made in a timely manner. The server disables or removes all unpaid hostings.
                                    {"\n"}Prior to the expiration date, all renewals must be paid for within seven working days. Concerns with late payments are not Meradigi’s responsibility.
                                    {"\n"}Hosting is done on both shared and non-shared servers that are provided by outside companies. Meradigi does its best to safeguard our servers and systems from hackers, viruses, intrusions, and other online and offline issues, but we cannot be held responsible if services are interrupted as a result of a scenario like this.
                                    {"\n"}The content that is stored on and provided by the hosting service that was purchased, as well as the operation of any scripts or email services developed under the hosting service, are all the exclusive responsibility of the client. The Customer is responsible for keeping all account passwords secure as well as for making sure that any applications or scripts used in connection with the hosting service are free of malicious code that could damage the Server, any other client accounts being hosted, or the external systems of users accessing the hosted content.
                                    {"\n"}In the event of a malware attack, Meradigi maintains the right to immediately destroy any files stored on the hosting service.
                                    {"\n"}Cancellation/Termination:
                                    {"\n"}Requests to cancel hosting must be made in writing or by email one month before the agreement expires. After it has been renewed, hosting cannot be cancelled; instead, a full year’s fee must be paid.
                                    {"\n"}if the hosting is not renewed and paid for before the expiration date. The hosting service, together with any related services like emails and DNS records, is subject to termination at any time. Reactivating the hosting will incur additional fees. Any loss of data, files, emails, backups, restoration charges, etc. will not be covered by Meradigi
                                    {"\n"}All files, emails, databases, and backups will be erased from the server without the client’s knowledge once hosting has been cancelled or terminated.
                                    {"\n"}It is the client’s responsibility to request the following files once all invoices have been paid:
                                    {"\n"}– Meradigi CMS is a unique CMS that Meradigi has developed. Unless other arrangements are established prior to the project’s start, Meradigi retains the copyrights to all codes created for any client. Any custom software that Meradigi develops for a customer is warranted to be licensed exclusively for that client’s usage. This license is given in exchange for payment for hosting. Meradigi CMS cannot be moved to an external host, and this restriction applies to any access to the source code. If Meradigi CMS is being utilised by the website, FTP and Control panel access are not offered.
                                    {"\n"}– Meradigi CMS is a proprietary CMS that can only be used on Meradigi servers.
                                    {"\n"}Emails:
                                    {"\n"}Periodically, the client’s PC must download all emails. Email boxes must stay within their allotted quotas. Emails older than six months may be erased as part of routine maintenance on the email box.
                                    {"\n"}Clients shall refrain from using the email hosting for offensive material and other unwanted emails that could infect the system or cause spam. If such a situation arises, action will be done right away, and the necessary files and data will be erased without any previous warning.
                                    {"\n"}Packages are available from Meradigi in coordination with outside suppliers. The services we offer or the terms and conditions hereof may ultimately be affected by changes to the third party provider’s regulations and policies.
                                    {"\n"}Hosting is done on both shared and non-shared servers that are provided by outside companies. Meradigi Worldwide does its best to safeguard our servers and systems from hackers, viruses, intrusions, and other online and offline issues, but we cannot be held responsible if services are interrupted as a result of a scenario like this.
                                </Text>
                            </View>
                        </> 
                    }
                    <TouchableOpacity onPress={ShowHideTextComponentViewSix}>
                        <View style={{ flexDirection: 'row', marginBottom: 10  }}>
                            <Image 
                                source={imageAssetSix}
                                alt="Add" 
                                title="Add"
                                style={{ width: 25, height: 25 }}>
                            </Image>
                            <Text style={stylingSix ? styles.contentTextTwo : styles.contentTextOne}>
                                Domains
                            </Text>
                        </View>
                    </TouchableOpacity>
                    { 
                        statusSix && 
                        <>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    The payment for all domain registrations and renewals must be made beforehand.
                                    {"\n"}A domain’s expiration may lead to service interruption and domain loss.
                                    {"\n"}In the event that a domain expires due to non-payment or late payment of fees, Meradigi Worldwide disclaims all liability. Prior to the expiration date, all payments must be made by seven working days.
                                    {"\n"}Renewal of a client’s domain names with us is their obligation.
                                    {"\n"}Before we provide the desired domain name, all bills and payments are required to be made in full.
                                    {"\n"}Meradigi Worldwide cannot grant access to its domain control panel since the domains are in a common pool account.
                                    {"\n"}Meradigi collaborates with outside companies to offer packages. The services we offer or the terms and conditions hereof may ultimately be affected by changes to the third party provider’s regulations and policies.
                                </Text>
                            </View>
                        </> 
                    }
                    <TouchableOpacity onPress={ShowHideTextComponentViewSeven}>
                        <View style={{ flexDirection: 'row', marginBottom: 10  }}>
                            <Image 
                                source={imageAssetSeven}
                                alt="Add" 
                                title="Add"
                                style={{ width: 25, height: 25 }}>
                            </Image>
                            <Text style={stylingSeven ? styles.contentTextTwo : styles.contentTextOne}>
                                Intellectual Property
                            </Text>
                        </View>
                    </TouchableOpacity>
                    { 
                        statusSeven && 
                        <>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Except as otherwise noted, Meradigi owns all of the information on this website. Without giving any prior warning, Meradigi has the right to change the content or policies.
                                    {"\n"}After the project has been fully paid for and the client has signed the Certificate of Acceptance, the project-related copyrights may be transferred to them for an extra fee. If unusual circumstances develop, Meradigi maintains the right to reject the transfer of ownership.
                                    {"\n"}The copyrights granted to the client do not grant them the right to utilise the code on another website or to sell the programming codes for any kind of usage, whether for profit or not. Ownership of the website may change hands in the event of a corporate restructuring or change of ownership. No resale or reuse for any business or non-commercial purpose is permitted by new owners. Meradigi CMS is a proprietary CMS that can only be used on Meradigi servers.
                                    {"\n"}Site owners are not permitted to display the credits to the new website in the event that the webmaster changes, unless the functionality and design of the website have been altered by more than 50% from our original work.
                                    {"\n"}The name “Meradigi,” the symbol of a “MD” encircled and the slogan “Meradigi: Digital at your doors” are all trade marks of Meradigi (owned by Ekaggata Technologies). Without our express written consent, clients, partners, suppliers, subcontractors, and any other third-party organisations or people are not permitted to utilise Meradigi trademarks, including the name, logo, and symbol.
                                </Text>
                            </View>
                        </> 
                    }
                </View>
                <View>
                    <MainFooter/>
                </View>
                <View>
                    <Footer/>
                </View>
            </SafeAreaView>
            </ScrollView> 
        </> 
  );
}

const styles = StyleSheet.create({
    viewOne:
    {
        backgroundColor: '#382C7E',
        opacity: 0.49,
        transition: 0.3, 
        borderRadius: 0.3
        // transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s'
    },
    privacyPolicyImg: 
    {
        width: 400,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    privacyPolicyText:
    {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 48,
        opacity: 0.98
        // transition: 'background 0.3s,border 0.3s,border-radius 0.3s,box-shadow 0.3s,transform var(--e-transform-transition-duration,0.4s)'
    },
    commonPadding:
    {
        padding: 10,
        backgroundColor: '#ffffff'
    },
    marginTopOne:
    {
        marginTop: 20
    },
    marginBottomOne:
    {
        marginBottom: 18
    },
    contentOne:
    {
        fontSize: 19,
        textAlign: 'left',
        color: '#000000',
        fontWeight: 'normal'
    },
    consentFont:
    {
        fontSize: 32,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'left'
    },
    newTitleFontOne:
    {
        fontSize: 32,
        color: '#000000',
        fontWeight: 'normal',
        textAlign: 'center'
    },
    newTitleFontTwo:
    {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'left'
    },
    newTitleFontThree:
    {
        fontSize: 19,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'left' 
    },
    bulletList:
    {
        fontSize: 18, 
        textAlign: 'left', 
        marginBottom: 10 
    },
    bulletListOne:
    {
        fontSize: 18, 
        textAlign: 'left', 
        marginBottom: 0 
    },
    privacyPolicyNewImage: 
    {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center'
    },
    alsoReadText:
    {
        marginBottom: 3,
        color: '#00B5FF',
        fontSize: 19,
        fontWeight: 'normal',
        textAlign: 'center',
        alignItems: 'center'
    },
    privacyPolicyNewText:
    {
        color: '#e22658',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center'
    },
    contentTextOne:
    {
        color: '#0B92CB',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    contentTextTwo:
    {
        color: '#F808C7',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    addContentOne:
    {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'normal'
    },
    addContentTwo:
    {
        fontSize: 18, 
        color: "#000000", 
        textAlign: 'left', 
        textDecorationLine: 'underline', 
        fontWeight: 'bold' 
    },
    newMarginBottomOne:
    {
        marginBottom: 10
    },
    newAddContent:
    {
        fontSize: 18, 
        color: "#000000", 
        textAlign: 'left', 
        fontWeight: 'bold' 
    }
})

export default TermsConditions;