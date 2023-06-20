import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from "../config/styles";

const HireDevelopersInfoCard = () => {
const hireDevelopersInfoCardData = 
[
    {
        index: 1,
        id: 1,
        cardText: "E-commerce platform developers",
        cardImageSource: require("../assets/HireDeveloper/laptop.png"),
        key: 1,
        label: 'E-commerce platform developers',
        value: 'E-commerce platform developers'
    },
    {
        index: 2,
        id: 2,
        cardText: "PHP/Laravel developers",
        cardImageSource: require("../assets/HireDeveloper/headphones.png"),
        key: 2,
        label: 'PHP/Laravel developers',
        value: 'PHP/Laravel developers'
     },
    {
        index: 3,
        id: 3,
        cardText: "Python Developers",
        cardImageSource: require("../assets/HireDeveloper/open-book.png"),
        key: 3,
        label: 'Python Developers',
        value: 'Python Developers'
    },
    {
        index: 4,
        id: 4,
        cardText: "Mobile app /React native experts",
        cardImageSource: require("../assets/HireDeveloper/question.png"),
        key: 4,
        label: 'Mobile app /React native experts',
        value: 'Mobile app /React native experts'
    },
    {
        index: 5,
        id: 5,
        cardText: "Mobile app /Flutter experts",
        cardImageSource: require("../assets/HireDeveloper/shield.png"),
        key: 5,
        label: 'Mobile app /Flutter experts',
        value: 'Mobile app /Flutter experts'
    },
    {
        index: 6,
        id: 6,
        cardText: "Java and Java Fullstack",
        cardImageSource: require("../assets/HireDeveloper/shield.png"),
        key: 6,
        label: 'Java and Java Fullstack',
        value: 'Java and Java Fullstack'
    },
    {
        index: 7,
        id: 7,
        cardText: ".Net and .Net Fullstack",
        cardImageSource: require("../assets/HireDeveloper/user.png"),
        key: 7,
        label: '.Net and .Net Fullstack',
        value: '.Net and .Net Fullstack'
    },
    {
        index: 8,
        id: 8,
        cardText: "Cloud Engineers",
        cardImageSource: require("../assets/HireDeveloper/play-button.png"),
        key: 8,
        label: 'Cloud Engineers',
        value: 'Cloud Engineers'
    },
    {
        index: 9,
        id: 9,
        cardText: "Devops professionals",
        cardImageSource: require("../assets/HireDeveloper/laptop.png"),
        key: 9,
        label: 'Devops professionals',
        value: 'Devops professionals'
    },
    {
        index: 10,
        id: 10,
        cardText: "Production Support engineers",
        cardImageSource: require("../assets/HireDeveloper/headphones.png"),
        key: 10,
        label: 'Production Support engineers',
        value: 'Production Support engineers'
    },
    {
        index: 11,
        id: 11,
        cardText: "Data Analytics",
        cardImageSource: require("../assets/HireDeveloper/open-book.png"),
        key: 11,
        label: 'Data Analytics',
        value: 'Data Analytics'
    },
    {
        index: 12,
        id: 12,
        cardText: "Power BI developers",
        cardImageSource: require("../assets/HireDeveloper/question.png"),
        key: 12,
        label: 'Power BI developers',
        value: 'Power BI developers'
    },
    {
        index: 13,
        id: 13,
        cardText: "Tableu developers",
        cardImageSource: require("../assets/HireDeveloper/shield.png"),
        key: 13,
        label: 'Tableu developers',
        value: 'Tableu developers'
    },
    {
        index: 14,
        id: 14,
        cardText: "WordPress developers",
        cardImageSource: require("../assets/HireDeveloper/shield.png"),
        key: 14,
        label: 'WordPress developers',
        value: 'WordPress developers'
    },
    {
        index: 15,
        id: 15,
        cardText: "React developers",
        cardImageSource: require("../assets/HireDeveloper/user.png"),
        key: 15,
        label: 'React developers',
        value: 'React developers'
    },
    {
        index: 16,
        id: 16,
        cardText: "Headless CMS experts",
        cardImageSource: require("../assets/HireDeveloper/play-button.png"),
        key: 16,
        label: 'Headless CMS experts',
        value: 'Headless CMS experts'
    },
    {
        index: 17,
        id: 17,
        cardText: "Moodle developers",
        cardImageSource: require("../assets/HireDeveloper/laptop.png"),
        key: 17,
        label: 'Moodle developers',
        value: 'Moodle developers'
    },
    {
        index: 18,
        id: 18,
        cardText: "Oddo experts",
        cardImageSource: require("../assets/HireDeveloper/headphones.png"),
        key: 18,
        label: 'Oddo experts',
        value: 'Oddo experts'
    },
    {
        index: 19,
        id: 19,
        cardText: "Digital marketing experts",
        cardImageSource: require("../assets/HireDeveloper/laptop.png"),
        key: 19,
        label: 'Digital marketing experts',
        value: 'Digital marketing experts'
    },
    {
        index: 20,
        id: 20,
        cardText: "SEO specialists",
        cardImageSource: require("../assets/HireDeveloper/headphones.png"),
        key: 20,
        label: 'SEO specialists',
        value: 'SEO specialists'
    },
    {
        index: 21,
        id: 21,
        cardText: "Graphic designers",
        cardImageSource: require("../assets/HireDeveloper/open-book.png"),
        key: 21,
        label: 'Graphic designers',
        value: 'Graphic designers'
    },
    {
        index: 22,
        id: 22,
        cardText: "Content writers",
        cardImageSource: require("../assets/HireDeveloper/question.png"),
        key: 22,
        label: 'Content writers',
        value: 'Content writers'
    },
    {
        index: 23,
        id: 23,
        cardText: "Automation testing (Selenium/UFT)",
        cardImageSource: require("../assets/HireDeveloper/shield.png"),
        key: 23,
        label: 'Automation testing (Selenium/UFT)',
        value: 'Automation testing (Selenium/UFT)'
    },
    {
        index: 24,
        id: 24,
        cardText: "Others/ Miscellaneous",
        cardImageSource: require("../assets/HireDeveloper/shield.png"),
        key: 24,
        label: 'Others/ Miscellaneous',
        value: 'Others/ Miscellaneous'
    }
];

const [value, setValue] = useState(null); 

return (
    <>
        <Dropdown
                              style={styles.dropdown}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={hireDevelopersInfoCardData}
                              search
                              maxHeight={160}
                              labelField="label"
                              valueField="value"
                              placeholder="Select skill category"
                              searchPlaceholder="Search skill category"
                              value={value}
                              onChange={item=>{setValue(item.value);}}
        />
    </>
);
}

export default HireDevelopersInfoCard;