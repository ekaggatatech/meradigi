import React, { useState } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatBot = () => 
{
    const [messages, setMessages] = useState([]);
    const Your_Chat_Gpt_Api_Key = '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';
    const handleSend = async (newMessages = []) => {
      try 
      {
        const userMessage = newMessages[0];
        setMessages(previousMessages => GiftedChat.append(previousMessages, userMessage));
        const messageText = userMessage.text.toLowerCase();
        const keywords = ['abcd','marketing','digital marketing','seo'];
        if(!keywords.some(keyword => messageText.includes(keyword)))
        {
          const botMessage = {
            _id: new Date().getTime()+1,
            text: "I am your Meradigi Chat Bot, Ask me anything related Information Technology Services",
            createdAt: new Date(),
            user:
            {
              _id: 2,
              name: 'Meradigi Chat Bot'
            }
          };
          setMessages(previousMessages => GiftedChat.append(previousMessages, botMessage));
          return;
        }
        const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', 
        {
          prompt: `Get me a service for ${messageText}`,
          max_tokens: 1200,
          temperature: 0.2,
          n: 1,
        },
        {
          headers: 
          {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Your_Chat_Gpt_Api_Key}`
          }
        }
        );
        console.log(response.data);
        const service = response.data.choices[0].text.trim();
        const botMessage = {
          _id: new Date().getTime() + 1,
          text: service,
          createdAt: new Date(),
          user: 
          {
            _id: 2,
            name: 'Meradigi Chat Bot'
          }
        };
        setMessages(previousMessages => GiftedChat.append(previousMessages, botMessage));
      } 
      catch(error) 
      {
        console.log(error);
      }
  };
  return (
    <>
        {/* <View style={{ flex: 1 }}>  */}
            {/* <View style={{ backgroundColor: '#FSFSFS', padding: 10, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, marginTop: 40, marginBottom: 5 }}> 
                <Text style={{ fontSize: 32, fontWeight: 'bold' }}>
                    Meradigi Chat Bot
                </Text>
            </View> */}
        {/* </View> */}
        <View style={{ width: 340, height: 420 }}> 
        <GiftedChat
            messages={messages}
            onSend={newMessages => handleSend(newMessages)}
            user={{ _id: 1 }}
        />
        </View>
    </>
  );
}

export default ChatBot;