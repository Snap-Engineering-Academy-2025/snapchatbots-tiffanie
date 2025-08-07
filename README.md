<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/tiffanielim/SnapChatStarterForkable">
    <img src="https://static.vecteezy.com/system/resources/previews/018/930/704/non_2x/snapchat-logo-snapchat-icon-transparent-free-png.png" alt="Logo" width="180" height="180">
  </a>

<h3 align="center">SnapChatBots</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

<div align="left">
<!-- ABOUT THE PROJECT -->

## About The Project

SnapChatBots is a collection of chatbots, including a “Cooked or Be Cooked” game bot, a Smiski trivia bot, and a skincare‑routine recommendation bot developed in collaboration with the Storytelling Academy and CeraVe. All chatbots are tailored for personalized interactions!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With 

- [![React][React-shield]][React-url]
- [![Expo][Expo-shield]][Expo-url]
- [![ChatGPT API][ChatGPT-shield]][ChatGPT-url]
- [![Gifted Chat][GiftedChat-shield]][GiftedChat-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To run this project locally, clone the repo and install the dependencies. This project uses React Native with Expo, the OpenAI ChatGPT API for conversational features, and Gifted Chat for the chat UI.

### Prerequisites

- **Expo CLI**  
  Install Expo:
  ```bash
  npm install -g expo-cli
  ```
  [Get started here](https://docs.expo.dev/get-started/installation/)
- **Supabase Project**
  Create a free account at supabase.com, and set up:
  - Authentication (email/password)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Snap-Engineering-Academy-2025/snapchatbots-tiffanie.git
   cd snapchatbots-tiffanie
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a `.env.local` file and add:
   ```env
   EXPO_PUBLIC_SUPABASE_URL=your_url_here
   EXPO_PUBLIC_SUPABASE_KEY=your_key_here
   CHATGPT_KEY=your_key_here
4. Run the app
   ```
   npx expo start
   ```
6. (Optional) Reset the Git remote if you're forking this project:
   ```sh
   git remote set-url origin https://github.com/your-username/your-repo.git
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

SnapChatBots offers a wide variety of different personalities in a mobile interface!

- Choose from multiple themed chatbots
- Chat in real time through a UI powered by Gifted Chat
- Get tailored responses from each bot using OpenAI’s ChatGPT API

<p align="right">(<a href="#readme-top">back to top</a>)</p>

</div>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React-shield]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Expo-shield]: https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white
[Expo-url]: https://expo.dev/
[ChatGPT-shield]: https://img.shields.io/badge/ChatGPT_API-10a37f?style=for-the-badge&logo=openai&logoColor=white
[ChatGPT-url]: https://platform.openai.com/docs/api-reference
[GiftedChat-shield]: https://img.shields.io/badge/Gifted%20Chat-009688?style=for-the-badge
[GiftedChat-url]: https://github.com/FaridSafi/react-native-gifted-chat
