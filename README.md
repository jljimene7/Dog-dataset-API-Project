# Dog API Explorer 🐶

This is a pre-work assignment project for Code the Dream's software engineering bootcamp. It uses [The Dog API](https://thedogapi.com/) to fetch and display:
- A random dog image
- A list of dog breeds with their temperaments

## 🔐 API Key Setup

This project uses [The Dog API](https://thedogapi.com/) which requires an API key.

To get your key and connect the app:
1. Go to [https://thedogapi.com](https://thedogapi.com) and sign up for a free account
2. Once logged in, copy your **API key** from the dashboard
3. In your local project folder, create a file named `.env`
4. Inside that `.env` file, add the following line:
   ```env
   VITE_API_KEY=your-api-key-here

## Features
- Button to show a new random dog image
- Button to show a list of 10 dog breeds
- Built with HTML, CSS, JavaScript, and Vite
- API key securely stored in a `.env` file (not uploaded to GitHub)

## How to Run It Locally
1. Clone this repository  
2. Run:
   ```bash
   npm install
   npm run dev
