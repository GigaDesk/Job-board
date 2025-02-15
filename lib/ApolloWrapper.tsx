// lib/ApolloWrapper.tsx
"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const data = localStorage.getItem("AuthenticationToken");

  // Use the setContext method to set the HTTP headers.
  if (data != null) {
    const token: string = JSON.parse(data);

    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  }

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = () => {
  const httpLink = new HttpLink({
    uri: "https://eardrum-423271079010.europe-west3.run.app/query",
    fetchOptions: { cache: "no-store" },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
};

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={client}>
      {children}
    </ApolloNextAppProvider>
  );
}
