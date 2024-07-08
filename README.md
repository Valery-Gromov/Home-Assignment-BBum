# Home Assignment Weather Forecast

Our weather application, built with React, TypeScript, and Redux, provides users with real-time weather information and forecasts for various cities. The application fetches data from a weather API and displays the current weather conditions, including temperature, humidity, wind speed, and weather descriptions

Repository address: https://github.com/Valery-Gromov/Home-Assignment-BBum

# Link to the demo:

https://weather-forecast-beach-bum.netlify.app/

# Key Features:

1. Current Weather and Forecasts: View detailed weather information for the current day and the upcoming days.
2. Save Favorite Cities: Users can save their favorite cities for quick access to their weather updates.
3. Dynamic Backgrounds and Icons: The application dynamically updates the background and icons based on the current weather conditions, providing an engaging user experience.
4. Responsive Design: The application is fully responsive and works seamlessly across different devices and screen sizes.
5. Automatic Updates: Weather data is automatically updated every 10 minutes to ensure users always have the latest information.
   This project aims to provide an intuitive and visually appealing way for users to stay informed about the weather in their selected locations

# Technologies used:

- ReactJS
- TypeScript
- Redux Toolkit (data management)
- Axios + Fetch (sending requests to backend)
- React Hooks
- Prettier (code formatting)
- SCSS (styling)

# Key Directories and Files:

- **node_modules/**: Contains all npm packages installed via `npm install`.
- **public/**: This directory contains the static assets that will be served directly.
- **src/**: This is where all the application code resides.
  - **assets/**: Stores images, fonts, and other static assets.
  - **components/**: Contains the React components used in the application.
  - **constants/**: Contains constant values and configuration files.
  - **redux/**: Contains Redux slices, actions, and store configuration.
  - **styles/**: Contains global styles and SCSS files.
  - **utils/**: Contains utility functions used throughout the application.
  - **index.css**: Global CSS styles for the application.
  - **index.tsx**: Entry point for the React application.
  - **react-app-env.d.ts**: TypeScript environment definitions for the React application.

# Instructions for running the project locally:

**Step 1: Clone the Repository**

- Open the terminal (command line) on your computer.
- Navigate to the directory where you want to save the project.
- Use the `git clone` command to clone the repository:

```bash
git clone https://github.com/Valery-Gromov/Home-Assignment-BBum.git
```

**Step 2: Install Dependencies**

- Navigate to the project directory:

```bash
cd repository-name
```

- Ensure that you have a package manager installed (such as npm or yarn).
- Install the necessary dependencies:

```bash
npm install
```

**Step 3: Set up environment variables**

- Get the API key on the website: https://home.openweathermap.org/
- Create a file named `.env` in the root directory of your project and add the following line to it:

  ```env
  REACT_APP_OPEN_WEATHER_API_KEY=your_api_key_here
  ```

- Replace `your_api_key_here` with your actual API key.

**Step 4: Run the Application**

- Start the frontend with the command:

```bash
npm run start
```

- Open your web browser and go to http://localhost:3000 (or another port specified in the project configuration).
