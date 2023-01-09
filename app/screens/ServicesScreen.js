import { View, Text, Image ,ScrollView, Button, Pressable, Modal } from 'react-native';
import React, { useState } from 'react';
import ServicesStyles from '../config/services.styles';
import ConsultNowModalScreen from '../modals/ConsultNowModalScreen';
import ServicesCardViewScreen from '../cards/ServicesCardViewScreen';
import FeaturesCardViewScreen from '../cards/FeaturesCardViewScreen';
import Banner from '../assets/banner/pkrnxegurgm-1-240x300.jpg';

// import Video from 'react-native-video';
// import { Video } from 'expo-av';
// import videoLink from '../assets/mp4/production-ID_4974883.mp4';
// import { Video } from 'expo-av';
// import VideoPlayer from 'expo-video-player';

const ServicesScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <ScrollView>
    <View style={ServicesStyles.container}>
    <ConsultNowModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} />
    <Text style={ServicesStyles.webText}>Web Development Services</Text>
    <View style={ServicesStyles.marginStyles}>
      <Text style={ServicesStyles.newWebText}>Our best-in-class Business solution,</Text>
      <Text style={ServicesStyles.newWebText}>To le you to grow business higher!</Text>
    </View>
    <View style={ServicesStyles.containerOne}>
        {/* <Image style={ServicesStyles.webDevImage} source={require("../assets/mp4/production-ID_4974883.mp4")}/> */}
        {/* <Video source={{ uri: "../assets/mp4/production-ID_4974883.mp4" }} // Can be a URL or a localfile.
              ref={(ref) => {
                this.player = ref
              }}                                      // Store reference
              onBuffer={this.onBuffer}                // Callback when remote video is buffering
              onEnd={this.onEnd}                      // Callback when playback finishes
              onError={this.videoError}               // Callback when video cannot be loaded
              style={ServicesStyles.backgroundVideo} 
            /> */}
            {/* <Video  
            //source={videoLink}                  // the video file
            source={{ uri: 'https://www.meradigi.com/wp-content/uploads/2022/06/production-ID_4974883.mp4' }} 
            paused={false}                  // make it start    
            style={ServicesStyles.backgroundVideo}  // any style you want
            repeat={true}                   // make it a loop
            /> */}
           {/*  <Video
              source={{
                uri: 
                      'https://www.meradigi.com/wp-content/uploads/2022/06/production-ID_4974883.mp4'
              }}
              style={ServicesStyles.backgroundVideo}
            /> */}
             {/* <Video
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ width: 300, height: 300 }}
                />  */}
                {/* <VideoPlayer
                  videoProps={{
                    shouldPlay: true,
                    resizeMode: Video.RESIZE_MODE_CONTAIN,
                    source: {
                      uri: '{http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4}',
                    },
                  }}
                  inFullscreen={true}
                /> */}
        <Image style={ServicesStyles.webDevImage} source={require("../assets/webdev.jpg")} />
      </View>
      <View>
        <Image style={ServicesStyles.webDevImage} source={require("../assets/gif/Clip_distance_education_by_Icons8.gif")} />
      </View>
      <View>
        <Text style={ServicesStyles.newTitle}>
          Website For Business
        </Text>
        <Text style={ServicesStyles.webinfoText}>
          More than a portfolio or showcase of your wares and services, a truly focussed business website should be your highest performing sales person. They’re your virtual shopfront, customer support and sales team rolled into one. Done right, a business website builds rapport and trust with potential customers before they even get on the phone—or gets straight to making the sale.
        </Text>
      </View>
      <View style = {ServicesStyles.viewStyleForLine}></View>
      <View style={ServicesStyles.hedingButton}>
          <Pressable style={ServicesStyles.button} onPress={()=>setModalOpen(true)}>
            <Text style={ServicesStyles.text}>Book A Free Consultation Call</Text>
          </Pressable>
      </View>
      <View>
          <Text style={ServicesStyles.newTitle}>
            Speak to us to see if it's a fit for you
           </Text>
      </View> 
      <View>
          <Text style={ServicesStyles.newTitle}>
            +91-9988776655
           </Text>
      </View>
    </View>
    <View style={ServicesStyles.container}>
      <View>
        <Text style={ServicesStyles.webText}>Our Web Development Services Include</Text>
      </View>
      <View>
        <ServicesCardViewScreen />
      </View>
      <View>
        <Text style={ServicesStyles.featuresWebText}>Check The Features</Text>
      </View>
      <View>
        <FeaturesCardViewScreen />
      </View>
      <View>
        <Image source={Banner} alt="Why do you want a website ?" title="Why do you want a website ?" style={ServicesStyles.imagePositioning}></Image>
      </View>
      <View>
          <Button
                title="Book A Free Consultation Call"
                onPress={()=>setModalOpen(true)}
            />
      </View>
        {/* <View>
          <Image style={ServicesStyles.webDevImage} source={require("../assets/digitalMarketing.jpg")}/>
        </View> */}
        {/* <View>
          <Text style={ServicesStyles.webinfoText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            </Text>
        </View> */}
      </View>
{/*       <View style={ServicesStyles.container}>
      <Text style={ServicesStyles.webText}>ERP Solution</Text>
        <View>
          <Image style={ServicesStyles.webDevImage} source={require("../assets/erpsolution.jpg")}/>
        </View>
        <View style={ServicesStyles.hedingButton}>
          <Button
                title="Book A Free Consultation Call"
            />
        </View>
        <View>
          <Text style={ServicesStyles.webinfoText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            </Text>
        </View>
      </View> */}
  </ScrollView>
  )
}

export default ServicesScreen