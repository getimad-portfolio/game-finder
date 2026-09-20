# Game Finder

This is a web app built with:

- React
- React Query
- Zustand
- Chakra UI

### Prerequisites

- Node.js
- npm

## Getting Started

To get started with Game Finder, follow these steps:

1. Clone this repository to your local machine. ⬇️
2. Open the project directory: `cd ./game-finder` 👣
3. Run `npm install` to install the required dependencies. 🤖
4. Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first. ✅
5. Add the API key to **src/services/api-client.ts**. 🆗
   ```typescript
   const axiosInstance = axios.create({
     baseURL: 'https://api.rawg.io/api',
     params: {
       key: // Pass here your API Key as a string.
     }
   });
   ```
6. Run `npm run dev` to start the web server. 💫
