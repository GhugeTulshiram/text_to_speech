🤟 Sign Language to Text and Speech Conversion System

📌 Project Descriptio

The Sign Language to Text and Speech Conversion System is a full-stack web application designed to help improve communication using sign language.

The system provides two main functionalities through separate pages:

Sign to Text and Speech
Text to Sign

The application supports the recognition and conversion of:

English alphabets from A to Z
Numeric digits from 0 to 9

The project includes a complete user authentication system with registration, login, and logout functionality.

The frontend is developed using React.js, the backend uses Node.js and Express.js, user data is managed using MongoDB, and the sign recognition module is implemented using Python and Machine Learning.

Note: This project is a Machine Learning-based sign recognition system and is not described as an AI project.

🎯 Project Objective

The main objective of this project is to develop a simple and accessible platform that can convert supported hand signs into readable text and audible speech.

The project also provides reverse conversion, where supported text characters are converted into their corresponding sign representation.

The current system focuses on individual characters and digits:

Alphabets: A to Z
Digits:    0 to 9

This means the system currently recognizes a total of:

26 Alphabet Classes
+
10 Digit Classes
=
36 Supported Classes
✨ Main Features
🔐 1. User Authentication

The application provides a secure authentication system.

Features
New user registration
Existing user login
User logout
Protected application pages
User information storage in MongoDB
Authentication Flow
User
  │
  ▼
Register / Login Page
  │
  ▼
React.js Frontend
  │
  ▼
Node.js + Express.js Backend
  │
  ▼
User Authentication
  │
  ▼
MongoDB Database
  │
  ▼
Successful Login
  │
  ▼
Application Dashboard
🤟 2. Sign to Text and Speech

The Sign to Text and Speech functionality is provided on a separate page.

The user shows a supported hand sign in front of the webcam or camera.

The Python Machine Learning module processes the sign and identifies the corresponding supported alphabet or digit.

After recognition:

The detected character is displayed as text.
The detected text is converted into speech.
Example
User shows hand sign
        ↓
Detected Sign: A
        ↓
Text Output: A
        ↓
Speech Output: "A"

Another example:

User shows hand sign
        ↓
Detected Sign: 5
        ↓
Text Output: 5
        ↓
Speech Output: "5"
Sign Recognition Flow
Webcam Input
     ↓
Capture Hand Sign
     ↓
Python Processing
     ↓
Feature Extraction
     ↓
ML Model Prediction
     ↓
Predicted Class
     ↓
Character / Digit
     ↓
Unicode Text Representation
     ↓
Display Text
     ↓
Convert Text to Speech
🔤 3. Text to Sign

The Text to Sign functionality is available on a different page.

The user enters a supported character or digit as text.

The system checks the entered character and displays its corresponding sign representation.

Example: Alphabet
User Input: A
      ↓
System Processes: A
      ↓
Unicode Character: U+0041
      ↓
Display Sign for A
Example: Digit
User Input: 5
      ↓
System Processes: 5
      ↓
Unicode Character: U+0035
      ↓
Display Sign for 5
🔤 Unicode Character Representation

Unicode is used to provide a standard digital representation for text characters.

Each supported alphabet and digit has its own Unicode code point.

Supported Alphabets
Character	Unicode
A	U+0041
B	U+0042
C	U+0043
D	U+0044
E	U+0045
F	U+0046
G	U+0047
H	U+0048
I	U+0049
J	U+004A
K	U+004B
L	U+004C
M	U+004D
N	U+004E
O	U+004F
P	U+0050
Q	U+0051
R	U+0052
S	U+0053
T	U+0054
U	U+0055
V	U+0056
W	U+0057
X	U+0058
Y	U+0059
Z	U+005A
Supported Digits
Digit	Unicode
0	U+0030
1	U+0031
2	U+0032
3	U+0033
4	U+0034
5	U+0035
6	U+0036
7	U+0037
8	U+0038
9	U+0039
🧠 Machine Learning Module

The Machine Learning module is responsible for recognizing the supported hand signs.

The model is trained using reference data representing the supported classes.

Supported ML Classes

The model uses the following output classes:

A, B, C, D, E, F, G, H, I, J,
K, L, M, N, O, P, Q, R, S, T,
U, V, W, X, Y, Z,
0, 1, 2, 3, 4, 5, 6, 7, 8, 9
Total Classes
A–Z = 26 classes
0–9 = 10 classes

Total = 36 classes
📚 Reference Data in Machine Learning

Reference data is used to identify and classify supported hand signs.

For each supported alphabet and digit, the system uses examples or reference samples associated with that class.

For example:

Reference Samples
      │
      ├── Class A
      │     ├── Sample 1
      │     ├── Sample 2
      │     └── Sample N
      │
      ├── Class B
      │     ├── Sample 1
      │     ├── Sample 2
      │     └── Sample N
      │
      ├── Class C
      │
      │
      ├── Class Z
      │
      └── Digits 0–9

The reference data helps the Machine Learning model learn the differences between supported hand signs.

During prediction, the captured sign is compared with the learned patterns, and the system returns the corresponding class.

Example
Input Hand Sign
       ↓
Extract Sign Features
       ↓
Compare with Learned Reference Patterns
       ↓
Find Matching Class
       ↓
Prediction: B
🏗️ System Architecture
                         USER
                           │
                           ▼
                ┌────────────────────┐
                │  React.js Frontend │
                └─────────┬──────────┘
                          │
          ┌───────────────┼────────────────┐
          │               │                │
          ▼               ▼                ▼
      Register/Login  Sign to Text     Text to Sign
          │               │                │
          ▼               ▼                ▼
    Node.js Backend   Python ML Module  Sign Reference
          │               │                │
          ▼               ▼                ▼
       MongoDB       A–Z / 0–9 Classes  Display Sign
                          │
                          ▼
                    Text Output
                          │
                          ▼
                    Speech Output
🛠️ Technology Stack
🎨 Frontend
React.js

React.js is used to create the user interface and application pages.

It manages:

Login page
Registration page
Dashboard
Sign to Text and Speech page
Text to Sign page
Navigation between pages
Displaying recognition results
JavaScript

JavaScript is used for application logic and interaction between frontend components.

HTML and CSS

HTML and CSS are used for the structure and styling of the application.

⚙️ Backend
Node.js

Node.js is used for server-side functionality.

Express.js

Express.js is used to create:

API routes
Authentication routes
User management routes
Communication between frontend and database
🗄️ Database
MongoDB

MongoDB is used to store application data such as:

User information
Registration details
Login-related data
Application data
🐍 Python


🚀 How to Execute the Project
Step 1: Clone the Repository
git clone https://github.com/GhugeTulshiram/sign_to_text.git

Move into the project directory:

cd sign_to_text
Step 2: Start MongoDB

Make sure MongoDB is installed and running.

Start the MongoDB service before running the backend.

Step 3: Run the Backend

Open the first terminal.

Move to the backend folder:

cd backend

Install the required Node.js packages:

npm install

Start the backend server:

npm start

If the project uses a development script:

npm run dev
Step 4: Run the Frontend

Open a second terminal.

Move to the frontend folder:

cd frontend

Install the required packages:

npm install

Start the React development server:

npm run dev

The terminal will display a local address, for example:

http://localhost:5173

Open this address in your web browser.

Step 5: Run the Python Machine Learning Module

Open a third terminal.

Move to the ML folder:

cd ml

Create a Python virtual environment:

Windows
python -m venv venv

Activate the environment:

venv\Scripts\activate

Install the required packages:

pip install -r requirements.txt

Run the Python application:

python app.py
Linux / Ubuntu
python3 -m venv venv

Activate the environment:

source venv/bin/activate

Install packages:

pip install -r requirements.txt

Run the application:

python3 app.py
💻 Complete Execution Commands

Open three terminals from the project directory.

Terminal 1 — Backend
cd backend
npm install
npm start
Terminal 2 — Frontend
cd frontend
npm install
npm run dev
Terminal 3 — Python ML Module
Windows
cd ml
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
Linux / Ubuntu
cd ml
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 app.py
🔄 Complete Application Workflow
                    USER
                      │
                      ▼
               Register / Login
                      │
                      ▼
          Node.js + Express.js Backend
                      │
                      ▼
                   MongoDB
                      │
                      ▼
                  Dashboard
                      │
          ┌───────────┴───────────┐
          │                       │
          ▼                       ▼
 Sign to Text & Speech        Text to Sign
          │                       │
          ▼                       ▼
      Camera Input           User Text Input
          │                       │
          ▼                       ▼
     Python ML Module       Character Validation
          │                       │
          ▼                       ▼
   A–Z / 0–9 Recognition    A–Z / 0–9 Mapping
          │                       │
          ▼                       ▼
     Unicode Character       Corresponding Sign
          │
          ▼
       Text Output
          │
          ▼
      Speech Output
⚠️ Current Limitations

The current version supports only:

Individual alphabets from A to Z
Individual digits from 0 to 9

The current version does not include:

Complete word recognition
Complete sentence recognition
Continuous sign language translation
🔮 Future Improvements

Future versions of the project can include:

Support for complete words
Support for sentence formation
More sign language characters
Improved reference dataset
Improved recognition accuracy
Multiple language support
Voice input
Text history
User profile management
Mobile application version
