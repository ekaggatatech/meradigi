import React from 'react';
import { View, Text, Image, ScrollView  } from 'react-native';

const HireDeveloperOurTeam = () => {
const ourTeamData = 
[
    {
        index: 1,
        id: 1,
        key: 1,
        teamName: "Pooja Dhamanekar",
        teamImageSource: require("../assets/OurTeam/PoojaDhamanekar.jpeg"),
        teamPosition: "Full-stack web & android Developer",
        teamSkills: ["\u2B24"+" "+".net, Codeigniter, laravel, MVC"+"\n"+"\u2B24"+" "+"javascript are babylon js, React js, next js, react native"+"\n"+"\u2B24"+" "+"Ajax, jquery, PHP, and other frameworks of PHP and in Bootstrap, CSS & sass"]
    },
    {
        index: 2,
        id: 2,
        key: 2,
        teamName: "Shubham Srivastava",
        teamImageSource: require("../assets/OurTeam/ShubhamSrivastava.jpg"),
        teamPosition: "SEO Specialist",
        teamSkills: ["\u2B24"+" "+"On-Page and Off-Page"+"\n"+"\u2B24"+" "+"Local SEO"+"\n"+"\u2B24"+" "+"Analysis Competitors"+"\n"+"\u2B24"+" "+"Links Building"+"\n"+"\u2B24"+" "+"Content customization"+"\n"+"\u2B24"+" "+"Monitored Website traffic, and Performance"+"\n"+"\u2B24"+" "+"CMS Platforms"]
     },
    {
        index: 3,
        id: 3,
        key: 3,
        teamName: "Aniket",
        teamImageSource: require("../assets/OurTeam/Aniket.jpeg"),
        teamPosition: "Full-Stack Developer",
        teamSkills: ["\u2B24"+" "+"Microsoft Power BI"+"\n"+"\u2B24"+" "+"React JS"+"\n"+"\u2B24"+" "+"Headless CMS platforms such as Prismic"+"\n"+"\u2B24"+" "+"3d animation in Krito"+"\n"+"\u2B24"+" "+"Canva"]
    },
    {
        index: 4,
        id: 4,
        key: 4,
        teamName: "Lubna.S",
        teamImageSource: require("../assets/OurTeam/LubnaS.jpg"),
        teamPosition: "The Marketing Expert",
        teamSkills: ["\u2B24"+" "+"End To End Marketing Solution"+"\n"+"\u2B24"+" "+"Copywriting & Story writing"+"\n"+"\u2B24"+" "+"SEO & SEM"+"\n"+"\u2B24"+" "+"WordPress Development"+"\n"+"\u2B24"+" "+"Social media content creation & Video Making"]
    },
    {
        index: 5,
        id: 5,
        key: 5,
        teamName: "Darshan. R",
        teamImageSource: require("../assets/OurTeam/DarshanR.jpeg"),
        teamPosition: "Social Media Specialist",
        teamSkills: ["\u2B24"+" "+"Social Media Marketing"+"\n"+"\u2B24"+" "+"Content Creation"+"\n"+"\u2B24"+" "+"SEO & SEM"+"\n"+"\u2B24"+" "+"Social Campaign Management"+"\n"+"\u2B24"+" "+"Canva"]
    },
    {
        index: 6,
        id: 6,
        key: 6,
        teamName: "Neeraj Punta",
        teamImageSource: require("../assets/OurTeam/NeerajPunta.png"),
        teamPosition: "Web Developer",
        teamSkills: ["\u2B24"+" "+"WordPress"+"\n"+"\u2B24"+" "+"HTML"+"\n"+"\u2B24"+" "+"Odoo"+"\n"+"\u2B24"+" "+"Data base Optimize"+"\n"+"\u2B24"+" "+"Security Profesional"+"\n"+"\u2B24"+" "+"Sever Engineer"]
    },
    {
        index: 7,
        id: 7,
        key: 7,
        teamName: "Uzair Rashid",
        teamImageSource: require("../assets/OurTeam/UzairRashid.jpeg"),
        teamPosition: "Full-Stack Web Developer",
        teamSkills: ["\u2B24"+" "+"Html"+"\n"+"\u2B24"+" "+"CSS3 & JS"+"\n"+"\u2B24"+" "+"bootstrap"+"\n"+"\u2B24"+" "+"Python"+"\n"+"\u2B24"+" "+"Flask"+"\n"+"\u2B24"+" "+"Odoo"]
    },
    {
        index: 8,
        id: 8,
        key: 8,
        teamName: "Mudasir Dar",
        teamImageSource: require("../assets/OurTeam/MudasirDar.jpeg"),
        teamPosition: "Python and ERP Developer",
        teamSkills: ["\u2B24"+" "+"OdooERP functional and technical"+"\n"+"\u2B24"+" "+"Various database integrations and other Python-based frameworks"+"\n"+"\u2B24"+" "+"Setting up servers on Linux and AWS"]
    }
];

const hireDeveloperOurTeamListItems = ourTeamData.map((data, index) => 
            <ScrollView style={{ marginBottom: 20 }} key={index} id={index}>
              <View style={{ marginBottom: 5, display: 'flex', justifyContent: 'center', marginLeft: 20, marginRight: 20 }}>
                <Image source={data.teamImageSource} style={{ width: 'auto', height: 400 }}></Image>
              </View>
              <View style={{ marginBottom: 5 }}>
                <Text style={{ textAlign: 'center', fontSize: 24, color: '#292929', fontWeight: 'bold' }}>
                  {data.teamName}
                </Text>
              </View>
              <View style={{ marginBottom: 5 }}>
                <Text style={{ textAlign: 'center', fontSize: 17, color: '#040202', fontWeight: 'bold' }}>
                  {data.teamPosition}
                </Text>
              </View>
              <View style={{ marginBottom: 5 }}>
                <Text style={{ textAlign: 'left', fontSize: 17, color: '#040202', fontWeight: 'bold', marginLeft: 20, textDecorationLine: 'underline' }}>
                  Skill Set:
                </Text>
              </View>
              <View style={{ marginBottom: 5 }}>
                <Text style={{ textAlign: 'left', fontSize: 17, color: '#050505', fontWeight: 'normal', marginLeft: 20 }}>
                    {data.teamSkills}
                </Text>
              </View>
              <View style={{ marginBottom: 0, marginLeft: 20, flexDirection: 'row' }}>
                <Image source={require("../assets/OurTeam/star-filled-fivepointed-shape.png")}></Image>
                <Image source={require("../assets/OurTeam/star-filled-fivepointed-shape.png")} style={{ marginLeft: 4 }}></Image>
                <Image source={require("../assets/OurTeam/star-filled-fivepointed-shape.png")} style={{ marginLeft: 4 }}></Image>
                <Image source={require("../assets/OurTeam/star-filled-fivepointed-shape.png")} style={{ marginLeft: 4 }}></Image>
                <Image source={require("../assets/OurTeam/star-filled-fivepointed-shape.png")} style={{ marginLeft: 4 }}></Image>
              </View>
            </ScrollView>
);

return (
    <>
        { hireDeveloperOurTeamListItems }
    </>
);
}

export default HireDeveloperOurTeam;