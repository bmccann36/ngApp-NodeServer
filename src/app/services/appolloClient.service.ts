import { Injectable } from '@angular/core';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import gql from 'graphql-tag';

const URL = 'https://7irszyowfzfnfhxur4xmxle5uy.appsync-api.us-east-1.amazonaws.com/graphql';


@Injectable({
  providedIn: 'root'
})
export class ApolloClientService {
  apolloClient

  constructor(
    private apollo: Apollo,
    private httpLink: HttpLink) {
    this.apolloClient = apollo.create({
      link: httpLink.create({ uri: URL }),
      cache: new InMemoryCache(),
    });
  }

  doQuery() {
    this.apolloClient
      .query({
        query: gql`
        {
          listEvents(limit: 10){
            items{
              name
              description
            }
          }
        }
      `,
      })
      .subscribe(console.log);
  }
}


