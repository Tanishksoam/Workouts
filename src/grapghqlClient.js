import { GraphQLClient } from "graphql-request";

const url = "https://kahla.stepzen.net/api/hoping-puma/__graphql";

const apikey = process.env.EXPO_PUBLIC_API_KEY;

const Client = new GraphQLClient(url, {
  headers: {
    Authorization: `apikey ${apikey}`,
  },
});

export default Client;
