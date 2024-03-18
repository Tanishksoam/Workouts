import { GraphQLClient } from "graphql-request";

const url = "https://kahla.stepzen.net/api/hoping-puma/__graphql";

const Client = new GraphQLClient(url, {
  headers: {
    Authorization:
      "apikey kahla::stepzen.io+1000::e505b802b335e5f4666ab3750f4fa1bb46d83dcebef9ebd9f71b18688df3cc63",
  },
});

export default Client;
