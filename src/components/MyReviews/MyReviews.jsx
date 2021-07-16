import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORIZED_USER } from "../../graphql/queries";
import { FlatList } from "react-native";
import MyReviewItem from "../MyReviewItem";

const MyReviews = () => {
  const { data, refetch } = useQuery(GET_AUTHORIZED_USER, {
    variables: {
      includeReviews: true,
    },
    fetchPolicy: "cache-and-network",
  });

  let reviewsData;

  if (!data) {
    reviewsData = [];
  } else {
    reviewsData = data.authorizedUser.reviews.edges;
  }

  return (
    <FlatList
      data={reviewsData}
      renderItem={({ item }) => (
        <MyReviewItem refetch={refetch} review={item} />
      )}
      keyExtractor={(item) => item.node.id}
    />
  );
};

export default MyReviews;