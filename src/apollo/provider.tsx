"use client";
import { ApolloProvider } from "@apollo/client";
import React from "react";
import { client } from "./client";

const AppoloProvider = ({ children }: any) => {
  return (
    <>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </>
  );
};

export default AppoloProvider;
