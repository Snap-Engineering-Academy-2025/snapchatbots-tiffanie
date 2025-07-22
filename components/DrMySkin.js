import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { getChat } from "../utils/getChatGPT";
import DrMrSkin from "../utils/DrMrSkin.json";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform } from "react-native";

const prompt = [
  {
    role: "system",
    content: `you are Dr.MySkin, a SkinCareGPT where you have a lot of information about skincare, cerave products, and how to use these products.

1) ask the user for their name
2) ask the user about their current skin concerns
3) after getting response, ask them WHERE their skin concerns are and their skin type
4) Give them a skincare routine (day and night) using cerave products ONLY. Include links

be concise but still nice. use emojis throughout. Always keep a conversational, upbeat, motivational tone. Use colloquial slang and second-person.

keep response times short, but still think about the best response. ALSO, DON'T FORGET TO BE CONCISE!!! End it at the end with thank you USER_NAME for asking Dr.MySkin for advice`,
  },
];

const CHATBOT_USER_OBJ = {
  _id: 2,
  name: "Dr. MrSkin",
  avatar: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fus-east1-aws.api.snapchat.com%2Fweb-capture%2Fwww.snapchat.com%2Fadd%2Fdaisymartinez92%2Fpreview%2Fsquare.jpeg%3Fxp_id%3D1",
  role: "assistant"
};


export default function BasicChatbot() {
  const [messages, setMessages] = useState([]);

  const messageObjs = messages.map(message => ({
    role: message.user.role,
    content: message.text
  }));

  const conversationToChat = [...prompt, ...messageObjs];

  async function fetchInitialMessage() {
    const response = await getChat(prompt);
    const message = response.choices[0].message;
    const content = response.choices[0].message.content;
    // console.log("content: ", content);
    addBotMessage(content);
  }

  useEffect(() => {
    fetchInitialMessage();
  }, []);

  const addNewMessage = (newMessages) => {
    setMessages((previousMessages) => {
      // console.log("PREVIOUS MESSAGES:", previousMessages);
      // console.log("NEW MESSAGE:", newMessages);
      return GiftedChat.append(previousMessages, newMessages);
    });
  };

  const addBotMessage = (text) => {
    addNewMessage([
      {
        _id: Math.round(Math.random() * 1000000),
        text: text,
        createdAt: new Date(),
        user: CHATBOT_USER_OBJ,
      },
    ]);
  };

  async function fetchMessages() {
    const response = await getChat(conversationToChat);
    const content = response.choices[0].message.content;
    addBotMessage(content);
  }


  const respondToUser = (userMessages) => {
    // addNewMessage(userMessages.text);
    const userMessagesReformatted = {
      role: userMessages[0].user.role,
      content: userMessages[0].text
    };

    // console.log("User messages reformatted: ", JSON.stringify(userMessagesReformatted[0], null, 4));

    conversationToChat.push(userMessagesReformatted);

    // console.log("Conversation we need to send to chat:", JSON.stringify(conversationToSend, null, 4));

    // Simple chatbot logic (aka Checkpoint 2 onwards) here!
    fetchMessages();

  };

  const onSend = useCallback((messages = []) => {
    addNewMessage(messages);
  }, []);

  // console.log("Messages:", messageObjs);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => {
        onSend(messages);
        setTimeout(() => respondToUser(messages), 1000);
      }}
      user={{
        _id: 1,
        name: "User",
        role: "user"
      }}
      renderUsernameOnMessage={true}
    />
  );
}
