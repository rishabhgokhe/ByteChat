
![ByteChat Banner](https://res.cloudinary.com/dnytagac4/image/upload/v1741967602/ByteChat_Poster_qesrxh.png)

# ByteChat (Real-Time Chat App)

## Description

ByteChat is a modern real-time chat application built with React, Node.js, and MongoDB. It offers seamless messaging, real-time updates, and a user-friendly interface. Designed for smooth communication, ByteChat ensures a fast and responsive chatting experience.  

# Table of Contents

  - [Features](#-features)
  - [Upcoming Features](#-upcoming-features)
  - [Tech Stack](#️-tech-stack)
  - [Setup Instructions](#️-setup-instructions)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Live Preview](#live-preview)
  - [Acknowledgments](#acknowledgments)
  - [Code of Conduct](#code-of-conduct)
  - [License](#license)
  - [Authors](#-authors)
  - [About Me](#-about-me)
  - [Feedback](#feedback)
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


## 🛠️ Tech Stack

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

This project is proprietary and not open for public use. All rights are reserved by Rishabh Gokhe.
For full license details, refer to the [LICENSE](LICENSE) file.

For inquiries regarding the licensing of this software, please contact: [![Email Me](https://img.shields.io/badge/Email-Me-black?style=flat&logo=[YOUR_ICON_URL]&logoColor=white)](mailto:rishabhgokhe20contact@gmail.com)


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
[![Email Me](https://img.shields.io/badge/Email-Me-black?style=flat&logo=[YOUR_ICON_URL]&logoColor=white)](mailto:rishabhgokhe20contact@gmail.com)