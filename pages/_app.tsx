export interface AppRenderProps {
  pageProps: object;
  err?: Error;
  Component: NextComponentType<NextPageContext, AppRenderProps, object>;
  router: NextRouter;
}

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import type { NextComponentType, NextPageContext } from "next";
import type { NextRouter } from "next/router";
import * as React from "react";
import "react-quill/dist/quill.snow.css";

export default function App({ Component, pageProps }: AppRenderProps) {
  const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
  });

  const GET_POSTINGS = gql`
    {
      getPostings {
        id
        title
        description
        author {
          name
        }
        createdAt
        updatedAt
        tags {
          name
        }
      }
    }
  `;

  client.query({ query: GET_POSTINGS }).then((result) => {
    console.log(result);
  });

  return <Component {...pageProps} />;
}
