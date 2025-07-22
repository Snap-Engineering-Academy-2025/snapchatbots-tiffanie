import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform, Text } from "react-native";
import BasicChatbot from "../components/BasicChatbot";
import BakersChatbot from "../components/BakersChatbot";
import SmiskiTriviaChatbot from "../components/SmiskiTriviaChatbot";
import ChanhoChatbot from "../components/ChanhoChatbot";
import DrMySkinChatbot from "../components/DrMySkin";

// prettier-ignore
export const CHATBOTS = {
  "DrMySkin": {
    id: "DrMySkin",
    name: "Dr. MySkin",
    imageUrl: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fus-east1-aws.api.snapchat.com%2Fweb-capture%2Fwww.snapchat.com%2Fadd%2Fdaisymartinez92%2Fpreview%2Fsquare.jpeg%3Fxp_id%3D1",
    developers: "CeraVe",
    component: DrMySkinChatbot,
  },
  "BasicChatbot": {
    id: "BasicChatbot",
    name: "React Native Chatbot",
    imageUrl: "https://loremflickr.com/140/140",
    developers: "Tiffanie",
    component: BasicChatbot,
  },
  "BakersChatbot": {
    id: "BakersChatbot",
    name: "Baker's Dog Trivia",
    imageUrl: "https://img.freepik.com/free-vector/cute-dog-robot-cartoon-character-animal-technology-isolated_138676-3143.jpg?w=150",
    developers: "Baker",
    component: BakersChatbot,
  },
  "SmiskiTriviaChatbot": {
    id: "SmiskiTriviaChatbot",
    name: "Do you know your Smiski?!",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHtYw-HtqTs0tfPGBTkDCzeEedjSsuocYEw&s",
    developers: "Tiffanie",
    component: SmiskiTriviaChatbot,
  },
  "ChanhoChatbot": {
    id: "ChanhoChatbot",
    name: "Chanho's Trivia!",
    imageUrl: "https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg",
    developers: "Chanho",
    component: ChanhoChatbot,
  }
};

export default function ChatScreen({ route }) {
  const { chatbotName } = route.params;

  const makeChatbotComponent = (chatbotName) => {
    if (CHATBOTS[chatbotName]) {
      const Chatbot = CHATBOTS[chatbotName].component;
      return <Chatbot />;
    } else {
      return <Text>No Chatbot Found with name '{chatbotName}'</Text>;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {makeChatbotComponent(chatbotName)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
