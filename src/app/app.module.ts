import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { HttpClientModule } from '@angular/common/http';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppSyncCompComponent } from './app-sync-comp/app-sync-comp.component';

// appolloClient stuff
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const URL = 'https://7irszyowfzfnfhxur4xmxle5uy.appsync-api.us-east-1.amazonaws.com/graphql';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    AppSyncCompComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: URL }),
      cache: new InMemoryCache(),
    });
  }

}
