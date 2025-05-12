# Dog API Explorer

This is a pre-work assignment project for Code the Dream's software engineering bootcamp. It uses [The Dog API](https://thedogapi.com/) to fetch and display:
- A random dog image
- A list of different dog breeds with their temperaments

## API Key Setup (with Visual Studio Code + Vite)

This project uses [The Dog API](https://thedogapi.com/) which requires an API key.

To get your key do the following steps:
1. Go to [https://thedogapi.com](https://thedogapi.com) and sign up for a free account

2. After signing up: 
  - You will receive an **API key** via email, 
  **or**
  - You can log into your Dog API dashboard and **copy the key** directly.

3. In your local project folder, create a file named `.env`

4. Inside that `.env` file, add the following line:
   ```env
   VITE_API_KEY= the-api-key-here

## Features
- Button to show a new random dog image everytime is pressed
- Button to show a list of 10 dog breeds everytime is pressed
- Built with HTML, CSS, JavaScript, and Vite
- API key securely stored in a `.env` file (not uploaded to GitHub)

## How to Run It Locally
1. Clone this repository  
2. Run:
   ```bash
   npm install
   npm run dev
