import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { Image, StyleSheet } from "react-native";

const CHATBOT_USER_OBJ = {
  _id: 2,
  name: "Smiski #1",
  avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHtYw-HtqTs0tfPGBTkDCzeEedjSsuocYEw&s",
};

export default function App() {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState(0);

  let trivia = [
    {
      triviaQuestion: "What color do Smiskis glow in the dark?",
      triviaAnswer: "green",
      triviaHintImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt--JkjBWEH-cOXeMSBujuGsN6PxNjXFZt-g&s"
    },
    {
      triviaQuestion: "What country did Smiskis originate from?",
      triviaAnswer: "japan",
      triviaHintImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMD2df7yeK_EqTwIGNklVelnVrZe4w2rqyQ&s"
    },
    {
      triviaQuestion: "True or false: Smiskis are meant to help you with your chores.",
      triviaAnswer: "false",
      triviaHintImg: "https://blinkbox.com.au/cdn/shop/files/smiski_living-series_individual-lifting.webp?v=1706086015&width=1406"
    },
  ];
  useEffect(() => {
    if (messages.length < 1) {
      // Add a "starting message" when chat UI first loads
      setQuestion(0);
      addBotMessage(
        "Hi there. I see you're interested in smiskis. Say 'Yes' to test what you know...",
        "https://i.pinimg.com/originals/38/d1/67/38d167e25945e3fb1b31701d34dcd1de.jpg"
      );
    }
  }, []);

  const addNewMessage = (newMessages) => {
    setMessages((previousMessages) => {
      // console.log("PREVIOUS MESSAGES:", previousMessages);
      // console.log("NEW MESSAGE:", newMessages);
      return GiftedChat.append(previousMessages, newMessages);
    });
  };

  const addBotMessage = (text, image) => {
    addNewMessage([
      {
        _id: Math.round(Math.random() * 1000000),
        text: text,
        image: image,
        createdAt: new Date(),
        user: CHATBOT_USER_OBJ,
      },
    ]);
  };

  const respondToUser = (userMessages) => {
    console.log("Recent user msg:", userMessages[0].text);
    const userAnswer = userMessages[0].text.toLowerCase();

    if (question == 0) {
      if (userAnswer == "yes") {
        console.log("Said yes");
        addBotMessage(trivia[0].triviaQuestion, null);
        setQuestion(1);
        console.log(question);
      }
      else {
        addBotMessage("Really? You can't answer with \"yes\" ? Try again",
          "https://i.pinimg.com/236x/b6/15/6a/b6156ab3f47b6094c242eacebdb090b3.jpg");
      }
      return;
    }

    if (question == 1) {
      console.log("in question 1");
      if (userAnswer === trivia[0].triviaAnswer) {
        addBotMessage("CORRECT!!!!", 
          "https://smiski.com/e/wp-content/uploads/2020/12/img_cheer_04.png");
        addBotMessage(trivia[1].triviaQuestion, null);
        setQuestion(2);
      }
      else {
        addBotMessage("Wrong answer! Try again. Think about what color they are...",
          "https://cdn.shopify.com/s/files/1/0837/6310/2006/files/smiski_glow_blog-article-image_600x600.jpg?v=1710127725");
      }
      return;
    }

    if (question == 2) {
      if (userAnswer == trivia[1].triviaAnswer) {
        addBotMessage("CORRECT!!!",
          "https://cdn.shoplightspeed.com/shops/649365/files/44833708/1652x1652x2/dreams-smiski-atwork-series.jpg");
        addBotMessage(trivia[2].triviaQuestion, null);
        setQuestion(3);
      }
      else {
        addBotMessage("Wrong answer! Try again",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMD2df7yeK_EqTwIGNklVelnVrZe4w2rqyQ&s");
      }
      return;
    }

    if (question == 3) {
      if (userAnswer == trivia[2].triviaAnswer) {
        addBotMessage("CORRECT!!! Game over :(",
          "https://cdn.shoplightspeed.com/shops/649365/files/44833708/1652x1652x2/dreams-smiski-atwork-series.jpg");
      }
      else {
        addBotMessage("Did you seriously think that these inanimate figures could help you with chores?",
          "https://blinkbox.com.au/cdn/shop/articles/blog_smiski-moving_new-207462_fd81b3c7-99e8-46d8-aa37-614c2f6b5957-739891.jpg?v=1739803833&width=1600");
      }
      return;
    }


  };

  const onSend = useCallback((messages = []) => {
    addNewMessage(messages);
  }, []);

  return (

    <GiftedChat
      messages={messages}
      onSend={(messages) => {
        onSend(messages);
        // Wait a sec before responding
        setTimeout(() => respondToUser(messages), 1000);
      }}
      user={{
        _id: 1,
        name: "Chilla",
      }}
      renderUsernameOnMessage={true}
      renderMessageImage={(props) => {
        console.log("Rendering image:", props.currentMessage.image);

        if (!props?.currentMessage?.image) return null;

        return (
          <Image
            source={{ uri: props.currentMessage.image }}
            style={styles.chatImage}
          />
        );
      }}
    />
  );
}

// Workaround to hide an unnessary warning about defaultProps
const error = console.error;
console.error = (...args) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

const styles = StyleSheet.create({
  chatImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
    margin: 4,
  },
});