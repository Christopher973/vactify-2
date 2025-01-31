"use client";
import { useQuery } from "@apollo/client";
import { GET_INTERVENANTS } from "@/graphql/queries";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apollo-client";

function IntervenantsList() {
  const { loading, error, data } = useQuery(GET_INTERVENANTS);
  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error.message}</p>;

  return <div></div>;
}

export default function Intervenants() {
  return (
    <ApolloProvider client={client}>
      <IntervenantsList />
    </ApolloProvider>
  );
}
