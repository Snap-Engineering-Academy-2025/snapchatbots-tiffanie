import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { Themes } from "../assets/Themes";
import { millisToMinutesAndSeconds } from "../utils";
import { useNavigation } from "@react-navigation/native";

const DevNames = ({ DevNames }) => {
  return (
    <Text style={styles.devNames} numberOfLines={1}>
      {DevNames.map(({ name }) => `${name}`).join(", ")}
    </Text>
  );
};

const Chatbot = ({
  index,
  imageUrl,
  title,
  devName,
  nameOfChatbot,
}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("ChatScreen", {
          chatbotName: nameOfChatbot,
        })
      }
    >
      <View style={styles.chatbot}>
        <Text style={styles.index}>{index + 1}</Text>
        <Image
          style={[styles.image, styles.chatbotCover]}
          source={{ uri: imageUrl }}
        />
        <View style={styles.developerContainer}>
          <Text style={[styles.title]} numberOfLines={1}>
            {title}
          </Text>
          <DevNames DevNames={devName} />
        </View>
        <Text style={[styles.nameOfChatbot]} numberOfLines={1}>
          {nameOfChatbot}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chatbot: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-start",
  },
  index: {
    color: Themes.colors.gray,
    flex: 0.05,
    textAlign: "center",
    fontSize: 12,
    margin: 1,
  },
  chatbotCover: {
    resizeMode: "contain",
    flex: 0.2,
    width: 50,
    height: 50,
  },
  developerContainer: {
    flex: 0.4,
    margin: 5,
  },
  title: {
    color: Themes.colors.white,
    fontSize: 12,
  },
  devNames: {
    color: Themes.colors.gray,
    fontSize: 12,
  },
  nameOfChatbot: {
    color: Themes.colors.white,
    flex: 0.25,
    fontSize: 12,
    margin: 5,
  },
});

export default Chatbot;
