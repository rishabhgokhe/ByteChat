![ByteChat Banner](https://res.cloudinary.com/dnytagac4/image/upload/v1741967602/ByteChat_Poster_qesrxh.png)

# ByteChat (Real-Time Chat App)

## Description

ByteChat is a modern real-time chat application built with React, Node.js, and MongoDB. It offers seamless messaging, real-time updates, and a user-friendly interface. Designed for smooth communication, ByteChat ensures a fast and responsive chatting experience.

## 📸 Screenshots  

Take a look at ByteChat’s sleek and intuitive interface!  

### **🔑 Authentication**  
#### Login Page  
![ByteChat Login](https://res.cloudinary.com/dnytagac4/image/upload/v1742024266/ByteChat_Login_lhwiwz.png)  

#### SignUp Page  
![ByteChat SignUp](https://res.cloudinary.com/dnytagac4/image/upload/v1742024267/ByteChat_Signup_h7ertl.png)  

### **💬 Chat Interface**  
#### Chats Homepage  
![ByteChat Chats Page](https://res.cloudinary.com/dnytagac4/image/upload/v1742024266/ByteChat_Dashboard_ikiljc.png)  

#### Chat Containers (Light Mode)  
![ByteChat Chat Container](https://res.cloudinary.com/dnytagac4/image/upload/v1742024266/ByteChat_ChatContainer_kxzf25.png)  

#### Chat Containers (Dark Mode)  
![ByteChat Chat Container Dark](https://res.cloudinary.com/dnytagac4/image/upload/v1742024267/ByteChat_ChatContainer_Dark_tzkpxm.png)  

### **👤 User Profile**  
#### Profile Page  
![ByteChat Profile Page](https://res.cloudinary.com/dnytagac4/image/upload/v1742024267/ByteChat_Profile_vyy5jf.png)  


# Table of Contents

  - [Features](#-features)
  - [Upcoming Features](#-upcoming-features)
  - [Tech Stack](#️-tech-stack)
  - [Setup Instructions](#️-setup-instructions)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Live Preview](#-live-preview)
  - [Acknowledgments](#-acknowledgments)
  - [Code of Conduct](#-code-of-conduct)
  - [License](#-license)
  - [Authors](#-authors)
  - [About Me](#-about-me)
  - [Feedback](#-feedback)
  - [Contribution Guidelines](#-contribution-guidelines)

## ✨ Features  

- **Real-Time Messaging:** Instant message updates powered by WebSockets (Socket.io).  
- **Secure Authentication:** Login with email and session-based cookies for enhanced security.  
- **Private Chats:** One-on-one encrypted messaging for secure conversations.  
- **Media Sharing:** Send photos, videos, and audio files seamlessly.  
- **Responsive Design:** Fully optimized for desktop and mobile devices.  
- **Dual Theme Mode:** Switch between dark and light themes effortlessly.  

## 🚀 Upcoming Features  

- **Google OAuth Login:** Simplified authentication with Google sign-in.  
- **Message Timestamps:** Display accurate sent and received times for messages.  
- **Typing Indicator:** Show real-time typing status for a more interactive chat experience.  
- **Message Scheduling:** Schedule messages to be sent at a specific date and time.  
- **Video Calling:** Integrated video call support for seamless communication.  
- **AI Task & Event Detection:** Smart AI detects tasks and events from messages, offering interactive reminders... so you never miss any task.  
- **User Search by Email:** Quickly find and add new contacts using their email addresses.  

**Currently Working on Typing Indicator Feature...**


## 🖥️ Tech Stack

- **Frontend:** React, Tailwind, JavaScript, Daisy UI
- **Backend:** Node.js, Express.js, Sockets.io
- **Database:** MongoDB (MongoDB Atlas)

## ⚙️ Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/rishabhgokhe/ByteChat.git

2. **Navigate to Repository:**
    ```bash
    cd ByteChat

3. **Install Node Modules:**
    ```bash
    npm run build

4. **Setup Environment Variables:**  
   Create a `.env` file in the backend directory and add the following:  
       JWT_SECRET- is essential for generating login cookies
       <br/>
       MONGODB_URI - required for add and fetching data
       <br/>
   ```plaintext
   MONGODB_URI=<your-mongodb-connection-string>
   PORT=4000
   JWT_SECRET=<randomString>
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>

5. **Navigate and Run the Backend Directory:**
    ```bash
    cd backend
    npm start

6. **Navigate and Run the Frontend Directory (New Terminal):**  
   ```bash
   cd frontend
   npm run dev

## 🌐 Live Preview

ByteChat is live on Render: [ByteChat Live](https://bytechat-ltd0.onrender.com/login)  
> ⚠ Note: The project may take a few moments to load as Render puts free-tier applications into sleep mode when inactive. Please allow some time for it to spin up. 🚀


## 🙌 Acknowledgments

- [React](https://react.dev/) for the frontend framework  
- [Tailwind CSS](https://tailwindcss.com/) for styling and responsive design
- [Socket.io](https://socket.io/) for real-time messaging and WebSockets communication
- [DaisyUI](https://daisyui.com/) for pre-built UI components and theme customization
- [MongoDB](https://www.mongodb.com/) for the database management system
- [Node.js](https://nodejs.org/) for the JavaScript runtime  
- [Express.js](https://expressjs.com/) for the web application framework

## 📜 Code of Conduct

We expect all participants in our community to adhere to our Code of Conduct. Please read the full text [here](CODE_OF_CONDUCT.md).

## 🔒 License  

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)** license.

You are **welcome to contribute** via pull requests and issues, but **commercial use, redistribution, or proprietary modifications** are **strictly prohibited** without explicit permission.

For full license details, refer to the [LICENSE](LICENSE) file.

For licensing inquiries or permissions, please contact:
[![Email Me](https://img.shields.io/badge/Email-Me-black?style=flat&logo=gmail&logoColor=white)](mailto:rishabhgokhe20contact@gmail.com)

## 💡 Contribution Guidelines

Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## 👨🏻‍💻 Authors

- [Rishabh Gokhe (A Computer Science Student)](https://www.github.com/rishabhgokhe)

## 🚀 About Me  

Hi there! I'm Rishabh Gokhe, the developer behind ByteChat. I'm passionate about building real-time, scalable, and user-friendly web applications. My focus is on creating seamless communication experiences with modern technologies like WebSockets, React, and Node.js.  

Feel free to reach out if you have any questions, suggestions, or just want to chat about web development and technology. I’m always excited to connect with fellow developers and enthusiasts!  

### My Vision  

ByteChat was created with the vision of providing a fast, secure, and interactive chatting experience. I believe real-time communication should be smooth, efficient, and accessible to everyone. This project is a step towards building a better way to connect and communicate online.

## 📨 Feedback

If you have any feedback, please reach out to us at 
[![Email Me](https://img.shields.io/badge/Email-Me-black?style=flat&logo=gmail&logoColor=white)](mailto:rishabhgokhe20contact@gmail.com)

## 🔗 Connect with Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/rishabh-gokhe-22168b287)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=outline&logoColor=white)](https://portfolio-rishabhgokhe.vercel.app/)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/u/rishabh_gokhe/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rishabhgokhe20contact@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rishabhgokhe)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/rishabhgokhe)
[![Instagram](https://img.shields.io/badge/Instagram-DD2A7B?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/rishabh_gokhe)

**Email Address** : [rishabhgokhe20contact@gmail.com](mailto:rishabhgokhe20contact@gmail.com)