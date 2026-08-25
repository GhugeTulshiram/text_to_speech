 Title: Sign Language to Text and Speech Conversion System


The \*\*Sign Language to Text and Speech Conversion System\*\* is a full-stack web application designed to help improve communication using sign language.



The system provides two main functionalities through separate pages:



1\. \*\*Sign to Text and Speech\*\*

2\. \*\*Text to Sign\*\*



The application supports the recognition and conversion of:



\* English alphabets from \*\*A to Z\*\*

\* Numeric digits from \*\*0 to 9\*\*



The project includes a complete user authentication system with registration, login, and logout functionality.



The frontend is developed using \*\*React.js\*\*, the backend uses \*\*Node.js and Express.js\*\*, user data is managed using \*\*MongoDB\*\*, and the sign recognition module is implemented using \*\*Python and Machine Learning\*\*.



> \*\*Note:\*\* This project is a Machine Learning-based sign recognition system and is not described as an AI project.



\---



\# 🎯 Project Objective



The main objective of this project is to develop a simple and accessible platform that can convert supported hand signs into readable text and audible speech.



The project also provides reverse conversion, where supported text characters are converted into their corresponding sign representation.



The current system focuses on individual characters and digits:



```text

Alphabets: A to Z

Digits:    0 to 9

```



This means the system currently recognizes a total of:



```text

26 Alphabet Classes

\+

10 Digit Classes

=

36 Supported Classes

```



\---



\# ✨ Main Features



\## 🔐 1. User Authentication



The application provides a secure authentication system.



\### Features



\* New user registration

\* Existing user login

\* User logout

\* Protected application pages

\* User information storage in MongoDB



\### Authentication Flow



```text

User

&#x20; │

&#x20; ▼

Register / Login Page

&#x20; │

&#x20; ▼

React.js Frontend

&#x20; │

&#x20; ▼

Node.js + Express.js Backend

&#x20; │

&#x20; ▼

User Authentication

&#x20; │

&#x20; ▼

MongoDB Database

&#x20; │

&#x20; ▼

Successful Login

&#x20; │

&#x20; ▼

Application Dashboard

```



\---



\# 🤟 2. Sign to Text and Speech



The \*\*Sign to Text and Speech\*\* functionality is provided on a separate page.



The user shows a supported hand sign in front of the webcam or camera.



The Python Machine Learning module processes the sign and identifies the corresponding supported alphabet or digit.



After recognition:



1\. The detected character is displayed as text.

2\. The detected text is converted into speech.



\### Example



```text

User shows hand sign

&#x20;       ↓

Detected Sign: A

&#x20;       ↓

Text Output: A

&#x20;       ↓

Speech Output: "A"

```



Another example:



```text

User shows hand sign

&#x20;       ↓

Detected Sign: 5

&#x20;       ↓

Text Output: 5

&#x20;       ↓

Speech Output: "5"

```



\### Sign Recognition Flow



```text

Webcam Input

&#x20;    ↓

Capture Hand Sign

&#x20;    ↓

Python Processing

&#x20;    ↓

Feature Extraction

&#x20;    ↓

ML Model Prediction

&#x20;    ↓

Predicted Class

&#x20;    ↓

Character / Digit

&#x20;    ↓

Unicode Text Representation

&#x20;    ↓

Display Text

&#x20;    ↓

Convert Text to Speech

```



\---



\# 🔤 3. Text to Sign



The \*\*Text to Sign\*\* functionality is available on a different page.



The user enters a supported character or digit as text.



The system checks the entered character and displays its corresponding sign representation.



\### Example: Alphabet



```text

User Input: A

&#x20;     ↓

System Processes: A

&#x20;     ↓

Unicode Character: U+0041

&#x20;     ↓

Display Sign for A

```



\### Example: Digit



```text

User Input: 5

&#x20;     ↓

System Processes: 5

&#x20;     ↓

Unicode Character: U+0035

&#x20;     ↓

Display Sign for 5

```



\---



\# 🔤 Unicode Character Representation



Unicode is used to provide a standard digital representation for text characters.



Each supported alphabet and digit has its own Unicode code point.



\## Supported Alphabets



| Character | Unicode |

| --------- | ------- |

| A         | U+0041  |

| B         | U+0042  |

| C         | U+0043  |

| D         | U+0044  |

| E         | U+0045  |

| F         | U+0046  |

| G         | U+0047  |

| H         | U+0048  |

| I         | U+0049  |

| J         | U+004A  |

| K         | U+004B  |

| L         | U+004C  |

| M         | U+004D  |

| N         | U+004E  |

| O         | U+004F  |

| P         | U+0050  |

| Q         | U+0051  |

| R         | U+0052  |

| S         | U+0053  |

| T         | U+0054  |

| U         | U+0055  |

| V         | U+0056  |

| W         | U+0057  |

| X         | U+0058  |

| Y         | U+0059  |

| Z         | U+005A  |



\## Supported Digits



| Digit | Unicode |

| ----- | ------- |

| 0     | U+0030  |

| 1     | U+0031  |

| 2     | U+0032  |

| 3     | U+0033  |

| 4     | U+0034  |

| 5     | U+0035  |

| 6     | U+0036  |

| 7     | U+0037  |

| 8     | U+0038  |

| 9     | U+0039  |



\---



\# 🧠 Machine Learning Module



The Machine Learning module is responsible for recognizing the supported hand signs.



The model is trained using reference data representing the supported classes.



\## Supported ML Classes



The model uses the following output classes:



```text

A, B, C, D, E, F, G, H, I, J,

K, L, M, N, O, P, Q, R, S, T,

U, V, W, X, Y, Z,

0, 1, 2, 3, 4, 5, 6, 7, 8, 9

```



\### Total Classes



```text

A–Z = 26 classes

0–9 = 10 classes



Total = 36 classes

```



\---



\# 📚 Reference Data in Machine Learning



Reference data is used to identify and classify supported hand signs.



For each supported alphabet and digit, the system uses examples or reference samples associated with that class.



For example:



```text

Reference Samples

&#x20;     │

&#x20;     ├── Class A

&#x20;     │     ├── Sample 1

&#x20;     │     ├── Sample 2

&#x20;     │     └── Sample N

&#x20;     │

&#x20;     ├── Class B

&#x20;     │     ├── Sample 1

&#x20;     │     ├── Sample 2

&#x20;     │     └── Sample N

&#x20;     │

&#x20;     ├── Class C

&#x20;     │

&#x20;     │

&#x20;     ├── Class Z

&#x20;     │

&#x20;     └── Digits 0–9

```



The reference data helps the Machine Learning model learn the differences between supported hand signs.



During prediction, the captured sign is compared with the learned patterns, and the system returns the corresponding class.



\### Example



```text

Input Hand Sign

&#x20;      ↓

Extract Sign Features

&#x20;      ↓

Compare with Learned Reference Patterns

&#x20;      ↓

Find Matching Class

&#x20;      ↓

Prediction: B

```



\---



\# 🏗️ System Architecture



```text

&#x20;                        USER

&#x20;                          │

&#x20;                          ▼

&#x20;               ┌────────────────────┐

&#x20;               │  React.js Frontend │

&#x20;               └─────────┬──────────┘

&#x20;                         │

&#x20;         ┌───────────────┼────────────────┐

&#x20;         │               │                │

&#x20;         ▼               ▼                ▼

&#x20;     Register/Login  Sign to Text     Text to Sign

&#x20;         │               │                │

&#x20;         ▼               ▼                ▼

&#x20;   Node.js Backend   Python ML Module  Sign Reference

&#x20;         │               │                │

&#x20;         ▼               ▼                ▼

&#x20;      MongoDB       A–Z / 0–9 Classes  Display Sign

&#x20;                         │

&#x20;                         ▼

&#x20;                   Text Output

&#x20;                         │

&#x20;                         ▼

&#x20;                   Speech Output

```



\---



\# 🛠️ Technology Stack



\## 🎨 Frontend



\### React.js



React.js is used to create the user interface and application pages.



It manages:



\* Login page

\* Registration page

\* Dashboard

\* Sign to Text and Speech page

\* Text to Sign page

\* Navigation between pages

\* Displaying recognition results



\### JavaScript



JavaScript is used for application logic and interaction between frontend components.



\### HTML and CSS



HTML and CSS are used for the structure and styling of the application.



\---



\## ⚙️ Backend



\### Node.js



Node.js is used for server-side functionality.



\### Express.js



Express.js is used to create:



\* API routes

\* Authentication routes

\* User management routes

\* Communication between frontend and database



\---



\## 🗄️ Database



\### MongoDB



MongoDB is used to store application data such as:



\* User information

\* Registration details

\* Login-related data

\* Application data



\---



\## 🐍 Python



Python is used for the sign recognition module.



The Python module processes the sign input and performs Machine Learning-based classification.



\---



\# 📁 Project Structure



```text

sign-language-conversion/

│

├── frontend/

│   │

│   ├── public/

│   │

│   ├── src/

│   │   │

│   │   ├── components/

│   │   │

│   │   ├── pages/

│   │   │   ├── Login.jsx

│   │   │   ├── Register.jsx

│   │   │   ├── Dashboard.jsx

│   │   │   ├── SignToTextSpeech.jsx

│   │   │   └── TextToSign.jsx

│   │   │

│   │   ├── App.jsx

│   │   └── main.jsx

│   │

│   └── package.json

│

├── backend/

│   │

│   ├── controllers/

│   ├── models/

│   ├── routes/

│   ├── middleware/

│   ├── server.js

│   └── package.json

│

├── ml/

│   │

│   ├── dataset/

│   ├── reference\_data/

│   ├── model/

│   ├── app.py

│   └── requirements.txt

│

├── sign-images/

│   ├── A.png

│   ├── B.png

│   ├── ...

│   ├── Z.png

│   ├── 0.png

│   └── 9.png

│

└── README.md

```



\---



\# 🚀 How to Execute the Project



\## Step 1: Clone the Repository



```bash

git clone https://github.com/GhugeTulshiram/sign\_to\_text.git

```



Move into the project directory:



```bash

cd sign\_to\_text

```



\---



\# Step 2: Start MongoDB



Make sure MongoDB is installed and running.



Start the MongoDB service before running the backend.



\---



\# Step 3: Run the Backend



Open the first terminal.



Move to the backend folder:



```bash

cd backend

```



Install the required Node.js packages:



```bash

npm install

```



Start the backend server:



```bash

npm start

```



If the project uses a development script:



```bash

npm run dev

```



\---



\# Step 4: Run the Frontend



Open a second terminal.



Move to the frontend folder:



```bash

cd frontend

```



Install the required packages:



```bash

npm install

```



Start the React development server:



```bash

npm run dev

```



The terminal will display a local address, for example:



```text

http://localhost:5173

```



Open this address in your web browser.



\---



\# Step 5: Run the Python Machine Learning Module



Open a third terminal.



Move to the ML folder:



```bash

cd ml

```



Create a Python virtual environment:



\### Windows



```bash

python -m venv venv

```



Activate the environment:



```bash

venv\\Scripts\\activate

```



Install the required packages:



```bash

pip install -r requirements.txt

```



Run the Python application:



```bash

python app.py

```



\### Linux / Ubuntu



```bash

python3 -m venv venv

```



Activate the environment:



```bash

source venv/bin/activate

```



Install packages:



```bash

pip install -r requirements.txt

```



Run the application:



```bash

python3 app.py

```



\---



\# 💻 Complete Execution Commands



Open three terminals from the project directory.



\## Terminal 1 — Backend



```bash

cd backend

npm install

npm start

```



\## Terminal 2 — Frontend



```bash

cd frontend

npm install

npm run dev

```



\## Terminal 3 — Python ML Module



\### Windows



```bash

cd ml

python -m venv venv

venv\\Scripts\\activate

pip install -r requirements.txt

python app.py

```



\### Linux / Ubuntu



```bash

cd ml

python3 -m venv venv

source venv/bin/activate

pip install -r requirements.txt

python3 app.py

```



\---



\# 🔄 Complete Application Workflow



```text

&#x20;                   USER

&#x20;                     │

&#x20;                     ▼

&#x20;              Register / Login

&#x20;                     │

&#x20;                     ▼

&#x20;         Node.js + Express.js Backend

&#x20;                     │

&#x20;                     ▼

&#x20;                  MongoDB

&#x20;                     │

&#x20;                     ▼

&#x20;                 Dashboard

&#x20;                     │

&#x20;         ┌───────────┴───────────┐

&#x20;         │                       │

&#x20;         ▼                       ▼

&#x20;Sign to Text \& Speech        Text to Sign

&#x20;         │                       │

&#x20;         ▼                       ▼

&#x20;     Camera Input           User Text Input

&#x20;         │                       │

&#x20;         ▼                       ▼

&#x20;    Python ML Module       Character Validation

&#x20;         │                       │

&#x20;         ▼                       ▼

&#x20;  A–Z / 0–9 Recognition    A–Z / 0–9 Mapping

&#x20;         │                       │

&#x20;         ▼                       ▼

&#x20;    Unicode Character       Corresponding Sign

&#x20;         │

&#x20;         ▼

&#x20;      Text Output

&#x20;         │

&#x20;         ▼

&#x20;     Speech Output

```



\---



\# ⚠️ Current Limitations



The current version supports only:



\* Individual alphabets from A to Z

\* Individual digits from 0 to 9



The current version does not include:



\* Complete word recognition

\* Complete sentence recognition

\* Continuous sign language translation



\---



\# 🔮 Future Improvements



Future versions of the project can include:



\* Support for complete words

\* Support for sentence formation

\* More sign language characters

\* Improved reference dataset

\* Improved recognition accuracy

\* Multiple language support

\* Voice input

\* Text history

\* User profile management

\* Mobile application version



\---



\# 👨‍💻 Developer



\*\*Ghuge Tulshiram\*\*



\## 🛠️ Technologies



\*\*Frontend:\*\* React.js, JavaScript, HTML, CSS

\*\*Backend:\*\* Node.js, Express.js

\*\*Database:\*\* MongoDB

\*\*Sign Recognition:\*\* Python, Machine Learning









