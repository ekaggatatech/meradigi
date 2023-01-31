import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, ImageBackground, Image } from 'react-native';
import MainFooter from '../../common/footer/MainFooter';
import Footer from '../../common/footer/Footer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TermsConditions = () => {

    const [status, setStatus] = useState(false);

    const [statusOne, setStatusOne] = useState(false);

    const [statusTwo, setStatusTwo] = useState(false);

    const [statusThree, setStatusThree] = useState(false);

    const [statusFour, setStatusFour] = useState(false);

    const [statusFive, setStatusFive] = useState(false);

    const [statusSix, setStatusSix] = useState(false);

    const [statusSeven, setStatusSeven] = useState(false);

    function ShowHideTextComponentView()
    {
        if(status == true)
        {
            setStatus(false);
        }
        else
        {
            setStatus(true);
        }
    }

    function ShowHideTextComponentViewOne()
    {
        if(statusOne == true)
        {
            setStatusOne(false);
        }
        else
        {
            setStatusOne(true);
        }
    }

    function ShowHideTextComponentViewTwo()
    {
        if(statusTwo == true)
        {
            setStatusTwo(false);
        }
        else
        {
            setStatusTwo(true);
        }
    }

    function ShowHideTextComponentViewThree()
    {
        if(statusThree == true)
        {
            setStatusThree(false);
        }
        else
        {
            setStatusThree(true);
        }
    }

    function ShowHideTextComponentViewFour()
    {
        if(statusFour == true)
        {
            setStatusFour(false);
        }
        else
        {
            setStatusFour(true);
        }
    }

    function ShowHideTextComponentViewFive()
    {
        if(statusFive == true)
        {
            setStatusFive(false);
        }
        else
        {
            setStatusFive(true);
        }
    }

    function ShowHideTextComponentViewSix()
    {
        if(statusSix == true)
        {
            setStatusSix(false);
        }
        else
        {
            setStatusSix(true);
        }
    }
    
    function ShowHideTextComponentViewSeven()
    {
        if(statusSeven == true)
        {
            setStatusSeven(false);
        }
        else
        {
            setStatusSeven(true);
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
                    <Text style={styles.bulletList}>
                        {`\u2022 Email is typically used for all interactions and conversations. It is the client’s duty to keep us informed of any relevant email addresses.`}
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Image 
                            source={require("../../assets/Terms&Conditions/add.png")}
                            alt="Add" 
                            title="Add"
                            style={{ width: 25, height: 25 }}
                            onPress={ShowHideTextComponentView}>
                        </Image>
                        <Text style={styles.contentTextOne} onPress={ShowHideTextComponentView}>
                            Digital Marketing/Strategy Terms
                        </Text>
                    </View>
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
                                    Every digital marketing/strategy package has a minimum duration of 6 months. After that, cancel whenever you want with a clear one-month email notice.
                                    They are billed on a monthly basis and are due on the first of the month.
                                    Packages are created with our clients’ needs for digital marketing and strategy in mind. Each month, a certain number of man hours are allotted, and any unused man hours are not carried over to the following month. Both marketing costs and software from third parties are not covered.
                                    Meradigi follows a fair usage philosophy, which means that although though we don’t formally accrue unused man-hours or transfer any unused time over to the following month, we do recognise that your needs could change from month to month and occasionally offer flexibility in good faith.
                                    Any additional hours worked can be charged individually. Urgent tasks will incur an additional fee.
                                    To contact support, send an email to support@meradigi.com.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Payment terms:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Each month’s payment is due on the first. We firmly advise all of our clients to set up a direct debit for the same.
                                    Any late payments or credit card charges that are rejected will result in a $25 administrative fee being applied to the client’s account.
                                    All fees associated with the digital marketing/strategy package are non-refundable.
                                    Termination:
                                    Every digital marketing/strategy package has a minimum duration of 6 months. After that, cancel whenever you want with a clear one-month email notice.
                                    Meradigi retains the right to end the agreement at any time by giving the client written notice.
                                </Text>
                            </View>
                        </> 
                    }
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <TouchableOpacity onPress={ShowHideTextComponentViewOne}>
                            <Image 
                                source={require("../../assets/Terms&Conditions/add.png")}
                                alt="Add" 
                                title="Add"
                                style={{ width: 25, height: 25 }}>
                            </Image>
                        </TouchableOpacity>
                        <Text style={styles.contentTextOne} onPress={ShowHideTextComponentViewOne}>
                            Annual Maintenance Terms
                        </Text>
                    </View>
                    { 
                        statusOne && 
                        <>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Basic Annual Maintenance Package Terms:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Every maintenance package has a minimum duration of 12 months.
                                    Although maintenance packages are billed annually, they are paid for on the first of each month by direct debit.
                                    Packages may include basic website hosting, email hosting, and DNS hosting for a period of one year.
                                    Packages are solely meant to be used for website maintenance chores. The hours cannot be used for tasks like a complete redesign or significant functionality additions.
                                    excludes any work related to digital strategy, business analysis, solution architecture, SEO, and marketing.
                                    Blocks of 15 minutes are used to track work hours. Your website is fully backed up once a month during support time. Following that, we update your CMS and plugin versions and make any necessary website adjustments as a result of the updates. You can update the webpage throughout the remaining time. Please approve any additional work hours that are requested.
                                    Meradigi follows a fair usage philosophy, which means that although though we don’t formally accrue unused man-hours or transfer any unused time over to the following month, we do recognise that your needs could change from month to month and occasionally offer flexibility in good faith.
                                    Any additional hours used will be charged at a separate rate.
                                    To contact support, send an email to support@Meradigi.com.
                                    Urgent tasks will incur an additional fee.
                                    Each year on the day of its anniversary, the package is automatically renewed.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Payment terms:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Monthly maintenance package payments can only be paid with a credit card. For monthly maintenance, no further payments will be accepted.
                                    The first day of each month, the monthly maintenance package payments will be charged to the client’s credit card on file.
                                    Any late payments or credit card charges that are rejected will result in an INR 300 administrative fee being applied to the client’s account.
                                    If there are more than three missing payments in a calendar year, the package may be terminated, and the client will be required to pay the entire balance of the package right away.
                                    All fees associated with the monthly maintenance package are non-refundable.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Termination:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    If the client needs to stop the automatic annual renewal, they must email us at least one month before the renewal date to let us know.
                                    Continuous term: If the Client decides to cancel an ongoing maintenance package for any reason, they will be responsible for paying the remaining balance.
                                    With written notification to the Client, Meradigi reserves the right to revoke annual maintenance at any moment.
                                </Text>
                            </View>
                        </> 
                    }
                    <View style={{ flexDirection: 'row', marginBottom: 10  }}>
                        <Image 
                            source={require("../../assets/Terms&Conditions/add.png")}
                            alt="Add" 
                            title="Add"
                            style={{ width: 25, height: 25 }}>
                        </Image>
                        <Text style={styles.contentTextOne} onPress={ShowHideTextComponentViewTwo}>
                            General Approach
                        </Text>
                    </View>
                    { 
                        statusTwo && 
                        <>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Basic Annual Maintenance Package Terms:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Every maintenance package has a minimum duration of 12 months.
                                    Although maintenance packages are billed annually, they are paid for on the first of each month by direct debit.
                                    Packages may include basic website hosting, email hosting, and DNS hosting for a period of one year.
                                    Packages are solely meant to be used for website maintenance chores. The hours cannot be used for tasks like a complete redesign or significant functionality additions.
                                    excludes any work related to digital strategy, business analysis, solution architecture, SEO, and marketing.
                                    Blocks of 15 minutes are used to track work hours. Your website is fully backed up once a month during support time. Following that, we update your CMS and plugin versions and make any necessary website adjustments as a result of the updates. You can update the webpage throughout the remaining time. Please approve any additional work hours that are requested.
                                    Meradigi follows a fair usage philosophy, which means that although though we don’t formally accrue unused man-hours or transfer any unused time over to the following month, we do recognise that your needs could change from month to month and occasionally offer flexibility in good faith.
                                    Any additional hours used will be charged at a separate rate.
                                    To contact support, send an email to support@Meradigi.com.
                                    Urgent tasks will incur an additional fee.
                                    Each year on the day of its anniversary, the package is automatically renewed.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Payment terms:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Monthly maintenance package payments can only be paid with a credit card. For monthly maintenance, no further payments will be accepted.
                                    The first day of each month, the monthly maintenance package payments will be charged to the client’s credit card on file.
                                    Any late payments or credit card charges that are rejected will result in an INR 300 administrative fee being applied to the client’s account.
                                    If there are more than three missing payments in a calendar year, the package may be terminated, and the client will be required to pay the entire balance of the package right away.
                                    All fees associated with the monthly maintenance package are non-refundable.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Termination:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    If the client needs to stop the automatic annual renewal, they must email us at least one month before the renewal date to let us know.
                                    Continuous term: If the Client decides to cancel an ongoing maintenance package for any reason, they will be responsible for paying the remaining balance.
                                    With written notification to the Client, Meradigi reserves the right to revoke annual maintenance at any moment.
                                </Text>
                            </View>
                        </> 
                    }
                    <View style={{ flexDirection: 'row', marginBottom: 10  }}>
                        <Image 
                            source={require("../../assets/Terms&Conditions/add.png")}
                            alt="Add" 
                            title="Add"
                            style={{ width: 25, height: 25 }}>
                        </Image>
                        <Text style={styles.contentTextOne} onPress={ShowHideTextComponentViewThree}>
                            Payments & Refunds
                        </Text>
                    </View>
                    { 
                        statusThree && 
                        <>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Basic Annual Maintenance Package Terms:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Every maintenance package has a minimum duration of 12 months.
                                    Although maintenance packages are billed annually, they are paid for on the first of each month by direct debit.
                                    Packages may include basic website hosting, email hosting, and DNS hosting for a period of one year.
                                    Packages are solely meant to be used for website maintenance chores. The hours cannot be used for tasks like a complete redesign or significant functionality additions.
                                    excludes any work related to digital strategy, business analysis, solution architecture, SEO, and marketing.
                                    Blocks of 15 minutes are used to track work hours. Your website is fully backed up once a month during support time. Following that, we update your CMS and plugin versions and make any necessary website adjustments as a result of the updates. You can update the webpage throughout the remaining time. Please approve any additional work hours that are requested.
                                    Meradigi follows a fair usage philosophy, which means that although though we don’t formally accrue unused man-hours or transfer any unused time over to the following month, we do recognise that your needs could change from month to month and occasionally offer flexibility in good faith.
                                    Any additional hours used will be charged at a separate rate.
                                    To contact support, send an email to support@Meradigi.com.
                                    Urgent tasks will incur an additional fee.
                                    Each year on the day of its anniversary, the package is automatically renewed.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Payment terms:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Monthly maintenance package payments can only be paid with a credit card. For monthly maintenance, no further payments will be accepted.
                                    The first day of each month, the monthly maintenance package payments will be charged to the client’s credit card on file.
                                    Any late payments or credit card charges that are rejected will result in an INR 300 administrative fee being applied to the client’s account.
                                    If there are more than three missing payments in a calendar year, the package may be terminated, and the client will be required to pay the entire balance of the package right away.
                                    All fees associated with the monthly maintenance package are non-refundable.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Termination:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    If the client needs to stop the automatic annual renewal, they must email us at least one month before the renewal date to let us know.
                                    Continuous term: If the Client decides to cancel an ongoing maintenance package for any reason, they will be responsible for paying the remaining balance.
                                    With written notification to the Client, Meradigi reserves the right to revoke annual maintenance at any moment.
                                </Text>
                            </View>
                        </> 
                    }
                    <View style={{ flexDirection: 'row', marginBottom: 10  }}>
                        <Image 
                            source={require("../../assets/Terms&Conditions/add.png")}
                            alt="Add" 
                            title="Add"
                            style={{ width: 25, height: 25 }}>
                        </Image>
                        <Text style={styles.contentTextOne} onPress={ShowHideTextComponentViewFour}>
                            Disputes, Liability and Indemnity
                        </Text>
                    </View>
                    { 
                        statusFour && 
                        <>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Basic Annual Maintenance Package Terms:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Every maintenance package has a minimum duration of 12 months.
                                    Although maintenance packages are billed annually, they are paid for on the first of each month by direct debit.
                                    Packages may include basic website hosting, email hosting, and DNS hosting for a period of one year.
                                    Packages are solely meant to be used for website maintenance chores. The hours cannot be used for tasks like a complete redesign or significant functionality additions.
                                    excludes any work related to digital strategy, business analysis, solution architecture, SEO, and marketing.
                                    Blocks of 15 minutes are used to track work hours. Your website is fully backed up once a month during support time. Following that, we update your CMS and plugin versions and make any necessary website adjustments as a result of the updates. You can update the webpage throughout the remaining time. Please approve any additional work hours that are requested.
                                    Meradigi follows a fair usage philosophy, which means that although though we don’t formally accrue unused man-hours or transfer any unused time over to the following month, we do recognise that your needs could change from month to month and occasionally offer flexibility in good faith.
                                    Any additional hours used will be charged at a separate rate.
                                    To contact support, send an email to support@Meradigi.com.
                                    Urgent tasks will incur an additional fee.
                                    Each year on the day of its anniversary, the package is automatically renewed.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Payment terms:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Monthly maintenance package payments can only be paid with a credit card. For monthly maintenance, no further payments will be accepted.
                                    The first day of each month, the monthly maintenance package payments will be charged to the client’s credit card on file.
                                    Any late payments or credit card charges that are rejected will result in an INR 300 administrative fee being applied to the client’s account.
                                    If there are more than three missing payments in a calendar year, the package may be terminated, and the client will be required to pay the entire balance of the package right away.
                                    All fees associated with the monthly maintenance package are non-refundable.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Termination:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    If the client needs to stop the automatic annual renewal, they must email us at least one month before the renewal date to let us know.
                                    Continuous term: If the Client decides to cancel an ongoing maintenance package for any reason, they will be responsible for paying the remaining balance.
                                    With written notification to the Client, Meradigi reserves the right to revoke annual maintenance at any moment.
                                </Text>
                            </View>
                        </> 
                    }
                    <View style={{ flexDirection: 'row', marginBottom: 10  }}>
                        <Image 
                            source={require("../../assets/Terms&Conditions/add.png")}
                            alt="Add" 
                            title="Add"
                            style={{ width: 25, height: 25 }}>
                        </Image>
                        <Text style={styles.contentTextOne} onPress={ShowHideTextComponentViewFive}>
                            Hosting
                        </Text>
                    </View>
                    { 
                        statusFive && 
                        <>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Basic Annual Maintenance Package Terms:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Every maintenance package has a minimum duration of 12 months.
                                    Although maintenance packages are billed annually, they are paid for on the first of each month by direct debit.
                                    Packages may include basic website hosting, email hosting, and DNS hosting for a period of one year.
                                    Packages are solely meant to be used for website maintenance chores. The hours cannot be used for tasks like a complete redesign or significant functionality additions.
                                    excludes any work related to digital strategy, business analysis, solution architecture, SEO, and marketing.
                                    Blocks of 15 minutes are used to track work hours. Your website is fully backed up once a month during support time. Following that, we update your CMS and plugin versions and make any necessary website adjustments as a result of the updates. You can update the webpage throughout the remaining time. Please approve any additional work hours that are requested.
                                    Meradigi follows a fair usage philosophy, which means that although though we don’t formally accrue unused man-hours or transfer any unused time over to the following month, we do recognise that your needs could change from month to month and occasionally offer flexibility in good faith.
                                    Any additional hours used will be charged at a separate rate.
                                    To contact support, send an email to support@Meradigi.com.
                                    Urgent tasks will incur an additional fee.
                                    Each year on the day of its anniversary, the package is automatically renewed.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Payment terms:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Monthly maintenance package payments can only be paid with a credit card. For monthly maintenance, no further payments will be accepted.
                                    The first day of each month, the monthly maintenance package payments will be charged to the client’s credit card on file.
                                    Any late payments or credit card charges that are rejected will result in an INR 300 administrative fee being applied to the client’s account.
                                    If there are more than three missing payments in a calendar year, the package may be terminated, and the client will be required to pay the entire balance of the package right away.
                                    All fees associated with the monthly maintenance package are non-refundable.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Termination:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    If the client needs to stop the automatic annual renewal, they must email us at least one month before the renewal date to let us know.
                                    Continuous term: If the Client decides to cancel an ongoing maintenance package for any reason, they will be responsible for paying the remaining balance.
                                    With written notification to the Client, Meradigi reserves the right to revoke annual maintenance at any moment.
                                </Text>
                            </View>
                        </> 
                    }
                    <View style={{ flexDirection: 'row', marginBottom: 10  }}>
                        <Image 
                            source={require("../../assets/Terms&Conditions/add.png")}
                            alt="Add" 
                            title="Add"
                            style={{ width: 25, height: 25 }}>
                        </Image>
                        <Text style={styles.contentTextOne} onPress={ShowHideTextComponentViewSix}>
                            Domains
                        </Text>
                    </View>
                    { 
                        statusSix && 
                        <>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Basic Annual Maintenance Package Terms:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Every maintenance package has a minimum duration of 12 months.
                                    Although maintenance packages are billed annually, they are paid for on the first of each month by direct debit.
                                    Packages may include basic website hosting, email hosting, and DNS hosting for a period of one year.
                                    Packages are solely meant to be used for website maintenance chores. The hours cannot be used for tasks like a complete redesign or significant functionality additions.
                                    excludes any work related to digital strategy, business analysis, solution architecture, SEO, and marketing.
                                    Blocks of 15 minutes are used to track work hours. Your website is fully backed up once a month during support time. Following that, we update your CMS and plugin versions and make any necessary website adjustments as a result of the updates. You can update the webpage throughout the remaining time. Please approve any additional work hours that are requested.
                                    Meradigi follows a fair usage philosophy, which means that although though we don’t formally accrue unused man-hours or transfer any unused time over to the following month, we do recognise that your needs could change from month to month and occasionally offer flexibility in good faith.
                                    Any additional hours used will be charged at a separate rate.
                                    To contact support, send an email to support@Meradigi.com.
                                    Urgent tasks will incur an additional fee.
                                    Each year on the day of its anniversary, the package is automatically renewed.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Payment terms:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Monthly maintenance package payments can only be paid with a credit card. For monthly maintenance, no further payments will be accepted.
                                    The first day of each month, the monthly maintenance package payments will be charged to the client’s credit card on file.
                                    Any late payments or credit card charges that are rejected will result in an INR 300 administrative fee being applied to the client’s account.
                                    If there are more than three missing payments in a calendar year, the package may be terminated, and the client will be required to pay the entire balance of the package right away.
                                    All fees associated with the monthly maintenance package are non-refundable.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Termination:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    If the client needs to stop the automatic annual renewal, they must email us at least one month before the renewal date to let us know.
                                    Continuous term: If the Client decides to cancel an ongoing maintenance package for any reason, they will be responsible for paying the remaining balance.
                                    With written notification to the Client, Meradigi reserves the right to revoke annual maintenance at any moment.
                                </Text>
                            </View>
                        </> 
                    }
                    <View style={{ flexDirection: 'row', marginBottom: 10  }}>
                        <Image 
                            source={require("../../assets/Terms&Conditions/add.png")}
                            alt="Add" 
                            title="Add"
                            style={{ width: 25, height: 25 }}>
                        </Image>
                        <Text style={styles.contentTextOne} onPress={ShowHideTextComponentViewSeven}>
                            Intellectual Property
                        </Text>
                    </View>
                    { 
                        statusSeven && 
                        <>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Basic Annual Maintenance Package Terms:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Every maintenance package has a minimum duration of 12 months.
                                    Although maintenance packages are billed annually, they are paid for on the first of each month by direct debit.
                                    Packages may include basic website hosting, email hosting, and DNS hosting for a period of one year.
                                    Packages are solely meant to be used for website maintenance chores. The hours cannot be used for tasks like a complete redesign or significant functionality additions.
                                    excludes any work related to digital strategy, business analysis, solution architecture, SEO, and marketing.
                                    Blocks of 15 minutes are used to track work hours. Your website is fully backed up once a month during support time. Following that, we update your CMS and plugin versions and make any necessary website adjustments as a result of the updates. You can update the webpage throughout the remaining time. Please approve any additional work hours that are requested.
                                    Meradigi follows a fair usage philosophy, which means that although though we don’t formally accrue unused man-hours or transfer any unused time over to the following month, we do recognise that your needs could change from month to month and occasionally offer flexibility in good faith.
                                    Any additional hours used will be charged at a separate rate.
                                    To contact support, send an email to support@Meradigi.com.
                                    Urgent tasks will incur an additional fee.
                                    Each year on the day of its anniversary, the package is automatically renewed.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Payment terms:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    Monthly maintenance package payments can only be paid with a credit card. For monthly maintenance, no further payments will be accepted.
                                    The first day of each month, the monthly maintenance package payments will be charged to the client’s credit card on file.
                                    Any late payments or credit card charges that are rejected will result in an INR 300 administrative fee being applied to the client’s account.
                                    If there are more than three missing payments in a calendar year, the package may be terminated, and the client will be required to pay the entire balance of the package right away.
                                    All fees associated with the monthly maintenance package are non-refundable.
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentTwo}>
                                    Termination:
                                </Text>
                            </View>
                            <View style={styles.newMarginBottomOne}>
                                <Text style={styles.addContentOne}>
                                    If the client needs to stop the automatic annual renewal, they must email us at least one month before the renewal date to let us know.
                                    Continuous term: If the Client decides to cancel an ongoing maintenance package for any reason, they will be responsible for paying the remaining balance.
                                    With written notification to the Client, Meradigi reserves the right to revoke annual maintenance at any moment.
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
        // transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
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
    }
})

export default TermsConditions;