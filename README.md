## Pokeapi

Simple Pokemon API. Built with:
 - NodeJS + Express as backend
 - MongoDB as database
 - GraphQL as interface to frontend
 
 
Setting up for development:
 - If not already exists, make a `.env` file that should contains a pair of key-value `ATLAS_URI` with the value of your MongoDB Atlas database URI OR your local MongoDB URI. (The database should contain a collection named `pokemons`)
 - Run `npm install` to install dependencies
 - Run `npm run seed` to seed your database with pokemon sample data
 - Run `npm run dev` to start the development version of the app
 - Wait until console log prints `MongoDB database connection established successfully`
 - Visit `http://127.0.0.1:5500/graphql` to try the app
