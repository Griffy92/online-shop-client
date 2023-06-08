const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const axios = require("axios");

const endpoint = '';

const graphqlQuery = {
};

const response = axios({
  url: endpoint,
  method: 'get',
  data: graphqlQuery
});

console.log(response.data); // data
console.log(response.errors); // errors if any
console.log("response.data"); // data
