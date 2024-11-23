Live site can be seen here https://bobbyh03.github.io/Interactive_World_Map/

Interactive World Map Project Overview

This project is an interactive map built using Angular, Node.js, TypeScript, HTML, and CSS. It lets users click on a country on the map, which then triggers a call to an API. The data from the API is shown in real time based on the country selected.

Key Components

Frontend (Angular, SVG, TypeScript):
The frontend is built with Angular.
The SVG Map displays the countries and each country is a clickable region.
When a country is clicked or a two-digit country code is entered by the user, the application gets the country’s ID.
The frontend sends this ID to the backend to get the data through an API call.

Backend (Node.js, TypeScript):
The backend is built using Node.js with Express.js.
TypeScript is used to keep the code consistent.
The backend receives requests from the frontend, fetches the needed data from an external API, and sends it back.

How It Works

Interactive SVG Map:
The SVG map has countries defined as clickable areas.
When a user clicks a country or a two-digit country code is entered, an event triggers an Angular function to get the country’s ID.

Data Fetching:
After getting the country’s ID, the frontend makes an HTTP request to the backend with this ID.
The backend processes this request and gets data for the country using an external API with information regarding each country.
The data is then sent back to the frontend to be displayed.

Architecture & Design Considerations

Modular Design: Each part of the map and its data is separated into Angular components, making it easy to change or add new features.
Separation of Concerns: The frontend focuses on showing the map and handling user clicks, while the backend handles the data processing.
Scalability: The project can easily grow by adding more data without major changes to the code.

Potential Use Cases

Education: An interactive map to learn about countries, their economies, and other facts.
Tourism: Show travel information when clicking on countries.
Data Visualization: Use the map to display global data, like population or climate information.
