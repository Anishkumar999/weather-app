# Project Name:
[weather-app]

Getting Started a project with [Create React App]
# This project was started with command [npx create-react-app weather-app] 


## Available Scripts
In the project directory, you can run:
### `npm start  or  npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


<!-- HTML -->
# The index.html file contains a single <div> element with an id. This is the container where the entire React application is mounted. React uses this root element to inject the entire component tree into the page.


<!-- tailwind -->
## Tailwind CSS is a utility-first CSS framework that provides low-level, reusable styles for UI development. Instead of writing custom CSS or using pre-designed components, you style elements directly in your HTML by applying utility classes that correspond to CSS properties like margins, paddings, colors, and more.

Getting a tailwind CSS with command
## npm install -D tailwindcss
## npx tailwindcss init

Add a tailwind in index.css file for all layers of components and import an configuration in tailwind.configuration.js file.
<!-- index.css file -->
@tailwind base;
@tailwind components;
@tailwind utilities;

<!-- tailwind.config.js -->
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


<!-- React-unicons -->
# React-Unicons is a React library that provides a collection of vector icons for easy use in React applications.

Getting a react-unicons with command
# npm install @iconscout/react-unicons
-- UilSearch
-- UilLocationPoint
-- UilTemperature,
-- UilTear,
-- UilWind,
-- UilSun,
-- UilSunset

## iconUrlFromCode
In the context of using React-Unicons or similar icon libraries, the function iconUrlFromCode is not a built-in method but it is useful when you need a dynamic mapping between some input. It simplifies how you handle different icons, especially when dealing with dynamic data like weather, user statuses, or categories.


## Weather data using OpenWeatherMap API-keys
OpenWeatherMap is a popular online service that provides weather data to developers through its API. It is widely used in weather apps and other projects requiring up-to-date meteorological information from this api-: https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const API_KEY = '1fa9ff4126d95b8db54f3897a208e91c';
const BASE_URL = "https://api.openweathermap.org/data/2.5";

## final API keys uses for the fetch the weather data and display in UI.
https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric

<!-- define the input -->
## Input.jsx:
Basically, In this component we are define a input box, SearchIcon, currentLocation and also celsius or fahrenheit. 
Input box used for search the city name with onchange Event Handler to change the input box data.
SearchIcon is used for when we  clicked the search icon to fetch the weather data for a particular city with onClick event handler.
Location icon is used for when user clicked the location icon to fetch the user current user location weather data with onClick event handler.
When we clicked the celsius or fahrenheit text to fetch the current celsius or fahrenhite of the particular city of the weather data. 


## TimeAndLocation.jsx:
<!-- Define Time and Location -->
## Luxon
Luxon is a powerful JavaScript library designed for handling dates, times, and time zones with ease and flexibility. 

Getting a custom dates formatter using luxon command
## npm install luxon

Luxon’s DateTime class is the main entry point for working with dates and times.

## Luxon’s DateTime class is the main entry point for working with dates and times.
import { DateTime } from 'luxon';

<!-- Temprature and Details -->
## TempratureAndDetails.jsx
Basically, In this component we are define a icon, temprature in celsius or fahreheit, real fell, humidity, wind, rise, set, high and low temprature.
There are three types of Icon - sunny,cloudy,haze and rainy.
They are dynamically show according to real feel, humidity, wind and temprature.

## Forecast.jsx
<!-- Hourly & Daily Forecast -->
It shows the temprature detail with icon hourly and daily.


## Background-color:
If temprature is above the 30 deg celsius background-color will display as orange otherwise blue.

## React-Toastify:
Installation:-
npm install react-toastify

Working:-
It shows the current processing like data fetching, location fetching, data fetch successfully, location fetch successfully in the form of pop-up.

## How to use:
For Example, At the top we have five city london, sydney, torronto, Paris and Tokyo. 
If you click at any city you will get all information as defined above. 
If you want another city details you can type in input box and click on searchIcon

## Deploy:
Deploy it's project on github

## Deployment:
git init:- Using it's command to intialized the project in git
git add. :- Using it's command to add the all of the file in git.
git commit -m "add commit" :- Using it's command to commit the project in git.
git remote add origin <repository-name> :- Using it's command to set the remote or repository where the project link is used for.
git push -u origin main :- Using it's command to push all of the file directory in git hub remote or repository.
npm install gh-pages --save-dev :- install the library in the project for deployment and then deploy and predeploy functionalities in script directory(package.json file), and last of the coomand using or run in terminal npm run deploy.

