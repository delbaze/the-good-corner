import { gql } from "@apollo/client";

export const LIST_CATEGORIES = gql`
  query ListCategories($limit: Float) {
    listCategories(limit: $limit) {
      id
      name
    }
  }
`;
