# 🌤️ Weather App

A sleek and responsive **React-based Weather Application** that fetches real-time weather data using **WeatherAPI**. Enter any city name to get updated weather conditions, temperature, time, and location details.

## 🚀 Live Demo

🌐 **Live URL**: [Click here to view the Weather App](https://your-vercel-deployment-url.vercel.app)  
*(Replace this link with your actual Vercel deployed URL)*  

---

## 📂 Project Structure
```bash
Weather-App/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── pages/
│   │   ├── WeatherApp.css
│   │   └── WeatherApp.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## ⚙️ Features

- 🔍 **Search Weather**: Get real-time weather updates for any city worldwide.
- 🌡️ **Current Temperature**: Display temperature in Celsius.
- 🗺️ **Location Info**: View city, country, region, timezone, latitude, and longitude.
- ⏰ **Formatted Local Time**: Shows current time in city-specific format.
- 🌦️ **Weather Conditions**: See condition descriptions with corresponding icons.
- 💻 **Responsive Design**: Mobile-friendly and clean user interface.

---

## 🛠️ Tech Stack

- **Frontend**: React.js (Vite)
- **HTTP Client**: Axios
- **Date Formatting**: date-fns
- **Deployment**: Vercel

---

## 🔑 API Used

- [WeatherAPI](https://www.weatherapi.com/) for fetching real-time weather data.  
- You need to **generate a free API key** from WeatherAPI.

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ariktheone/Minimalistic-Wearther-App-using-API-calls.git
cd Minimalistic-Wearther-App-using-API-calls
```
### 2. Install dependencies
```bash
npm install
```
### 3. Set up Environment Variables
Create a `.env` file in the root directory and add your API key:
```bash
VITE_WEATHER_API_KEY=your_api_key_here
```
### 4. Run the App Locally
```bash
npm run dev
```
The app will be available at `http://localhost:5173/.`

## 📦 Deployment
The project is deployed on Vercel for seamless hosting. To deploy:

1. Push your code to GitHub.
2. Connect the repository on Vercel.
3. Set up environment variable VITE_WEATHER_API_KEY in Vercel dashboard.
4. Deploy and enjoy your live app!

## 💡 Future Enhancements
- Add weather forecasts (next 3 days).
- Add unit toggle (°C to °F).
- Auto-suggest city names while typing.
- Show error messages in a styled popup/modal.

## 🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## 🙌 Acknowledgements
- [WeatherAPI](https://www.weatherapi.com/) for providing awesome weather data API.
- [date-fns](https://date-fns.org/) for powerful date formatting.