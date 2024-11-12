
# MORSECommunication System 
![logo](src/assets/logo.png)
# Table of Contents 📖
1. [About](#About)
2. [Technologies](#Technologies)
3. [Project structure](#Project_structure)
4. [Getting started](#Getting_started)
5. [Usage](#Usage)
6. [Administration](#Admnistration)
7. [Contacts](#Contacts)

# About 📄
MORSECommunication System is a system designed to encode and decode messages using Morse code. The system allows the conversion of text into encoded Morse code messages and vice versa—decoding Morse code back into text. The encoded messages are stored in an XML file, ensuring easy access and data transparency. This system can be used for educational purposes.
# Technologies 💻
- **XML/XSD:** XML files are used for message exchange, and XSD for schema validation.
- **React.js:** For building the user interface of the web application.

# Project structure 📂
<ol>
    <li>public - Contains static assets like images, fonts, etc.</li>
    <li>src - Main source code for the application
    <ol>
        <li>assets - Contains assets</li>
        <li>components - React components for the interface</li>
        <li>App.css - Cascading Style Sheet</li>
        <li>App.jsx - Main application component</li>
        <li>index.css - Entry point for React</li>
        <li>main.jsx</li>
    </ol>
  </li>
  <li>.gitattributes - Git attributes configuration</li>
  <li>.gitignore - Specifies files and folders to ignore in git</li>
  <li>README.md - Documentation with project overview and instructions</li>
  <li>index.html - Main HTML file for the application</li>
</ol>

# Getting started ▶️

## Prerequisites 📝
- Web Browser (latest version of Chrome, Firefox, Safari, or Edge) - To access and interact with the web interface.

## Development enivironment setup ⚙️
Install Node.js:
- Download and install Node.js (version 14 or higher) from https://nodejs.org.

## Instalation 🖥️

There is no need to install additional software. Simply go to the website. 

## Sanity test ✅	
Everything runs on the client side

# Usage 🚀
- **Encoding Messages**:
    - Enter the desired text in the text box
    - Download the XML file with the encoded message

- **Decoding Messages**:
    - Upload the XML to the site, and you will receive the decoded message

# Administration 🏢
Everything runs on the client side

# Contacts 👥
- **Wiktoria Bielecka:** Backend programmer (decoding), readme.md creator
- **Piotr Eliks:** Fullstack developer (encoding), repository manager
- **Maciej Kordek:** Backend programmer (decoding)
- **Miłosz Klim:** Backend programmer (encoding)

### Observations
- The biggest challenge we faced was validating the XML file.
- The implementation of algorithms for encoding and decoding Morse code was relatively simple.
- The project provided valuable experience in team programming, working with data formats (XML), and creating simple applications with graphical interfaces.
