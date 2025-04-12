# 🗺️ Interactive World Map

🔗 **Live site:** [View the Interactive World Map](https://bobbyh03.github.io/Interactive_World_Map/)

## 🌍 Project Overview

This project is an interactive world map built using **Angular**, **Node.js**, **TypeScript**, **HTML**, and **CSS**. It allows users to click on a country on the map, which triggers an API call to fetch and display real-time data based on the selected country.

---

## 🧩 Key Components

### ✅ Frontend (Angular, SVG, TypeScript)
- Built with Angular and TypeScript.
- Utilizes an SVG map where each country is a clickable region.
- When a user clicks a country or enters a two-digit country code, the application retrieves that country’s ID.
- Sends the ID to the backend to fetch data via an API call.

### ⚙️ Backend (Node.js, TypeScript)
- Developed with Node.js and Express.js.
- Written in TypeScript for type safety and consistency.
- Handles API requests from the frontend, fetches data from an external API, and returns the results.

---

## ⚡ How It Works

### 🌐 Interactive SVG Map
- Countries are defined as clickable areas in the SVG.
- Clicking a country or entering a code triggers an Angular function to obtain the country ID.

### 🔄 Data Fetching
- The frontend sends the country ID to the backend via an HTTP request.
- The backend retrieves country-specific data from an external API.
- The data is returned to the frontend and dynamically displayed.

---

## 🏗️ Architecture & Design Considerations

- **Modular Design:** Built with reusable Angular components for easier scalability and maintenance.
- **Separation of Concerns:** The frontend handles UI and interaction, while the backend manages API logic and data.
- **Scalability:** Easily extendable to include more data or additional features.

---

## 💡 Potential Use Cases

- **Education:** Interactive geography learning tool.
- **Tourism:** Display travel details per country.
- **Data Visualization:** Show global data like population, economy, or climate.
