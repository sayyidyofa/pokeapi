const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const app = express()
const { schema } = require('./api')
const mongoose = require('mongoose')
const config = require("./config")

const uri = config.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(5500, () => console.log('Server is running'))